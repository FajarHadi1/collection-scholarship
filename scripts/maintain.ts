import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.resolve(__dirname, "../src/data/scholarships.ts");

interface Scholarship {
  id: string;
  name: { id: string; en: string };
  studyLocation: ("domestic" | "overseas")[];
  provider: { id: string; en: string };
  degreeLevels: ("bachelor" | "master" | "doctoral")[];
  fundingType: "full" | "partial";
  coverage: { id: string[]; en: string[] };
  requirements: { id: string[]; en: string[] };
  status: "open" | "closed" | "soon";
  deadline: string;
  applicationUrl: string;
  description: { id: string; en: string };
  tags: { id: string[]; en: string[] };
}

// 1. Load existing scholarships from file
function loadScholarships(): { header: string; list: Scholarship[] } {
  const fileContent = fs.readFileSync(FILE_PATH, "utf-8");
  const marker = "export const scholarships: Scholarship[] =";
  const index = fileContent.indexOf(marker);
  if (index === -1) {
    throw new Error("Could not find scholarships array marker in file.");
  }
  
  const header = fileContent.substring(0, index + marker.length).trim() + " ";
  
  // To parse the TS array in Node, we can evaluate the array part safely.
  const arrayString = fileContent.substring(index + marker.length).trim();
  
  // Simple clean up of trailing semicolon if any
  let cleanArrayString = arrayString;
  if (cleanArrayString.endsWith(";")) {
    cleanArrayString = cleanArrayString.slice(0, -1);
  }
  
  // Safely evaluate the array using Function constructor since it's local TS/JS
  // (We strip the TypeScript types if any, but in the array it's pure JS object literal)
  const list = new Function(`return ${cleanArrayString};`)() as Scholarship[];
  
  return { header, list };
}

// 2. Format TS representation to match the exact aesthetic
function serializeScholarships(list: Scholarship[]): string {
  return JSON.stringify(list, null, 2)
    .replace(/"([^"]+)":/g, "$1:") // remove quotes from keys
    .replace(/"(domestic|overseas|bachelor|master|doctoral|full|partial|open|closed|soon)"/g, "'$1'"); // use single quotes for enum strings
}

// 3. Check and update existing scholarships status (Job 1)
async function maintainExisting(list: Scholarship[]): Promise<{ updatedCount: number; closedUrlsCount: number }> {
  const todayStr = new Date().toISOString().split("T")[0];
  let updatedCount = 0;
  let closedUrlsCount = 0;

  console.log(`Checking deadlines and link health for ${list.length} scholarships...`);

  for (const sc of list) {
    let changed = false;

    // Check deadline
    if (sc.deadline && sc.deadline < todayStr && sc.status !== "closed") {
      console.log(`[DEADLINE PASSED] Setting ${sc.id} status to closed (Deadline: ${sc.deadline})`);
      sc.status = "closed";
      changed = true;
    }

    // Check link health for active scholarships
    if (sc.status !== "closed") {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);
        
        const res = await fetch(sc.applicationUrl, {
          method: "HEAD",
          signal: controller.signal,
          headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
        });
        clearTimeout(timeoutId);

        if (res.status === 404 || res.status === 410) {
          console.log(`[URL BROKEN] ${sc.id} returned HTTP ${res.status}. Setting status to closed.`);
          sc.status = "closed";
          changed = true;
          closedUrlsCount++;
        }
      } catch (err: any) {
        // We log network errors but do not automatically close the scholarship unless it's a hard 404/410.
        // This avoids closing them due to temporary network blips.
        if (err.name === "AbortError") {
          console.log(`[URL TIMEOUT] URL for ${sc.id} timed out. Keeping status as-is.`);
        } else {
          console.log(`[URL CHECK ERROR] for ${sc.id}: ${err.message}`);
        }
      }
    }

    if (changed) {
      updatedCount++;
    }
  }

  return { updatedCount, closedUrlsCount };
}

// 4. Generate 10 new scholarships using Gemini API (Job 2)
async function generateNewScholarships(existingList: Scholarship[]): Promise<Scholarship[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.log("GEMINI_API_KEY environment variable not set. Skipping automated generation of new scholarships.");
    return [];
  }

  console.log("Generating 10 new, valid scholarships using Gemini API...");
  
  const existingIds = existingList.map(s => s.id);
  const prompt = `
Generate 10 real and valid scholarships (5 domestic in Indonesia, 5 international) that are not in this list of existing scholarship IDs:
${JSON.stringify(existingIds)}

Each scholarship must conform strictly to this TypeScript Scholarship interface:
interface Scholarship {
  id: string; // unique lowercase slug e.g. "chevening-scholarship"
  name: { id: string; en: string }; // Indonesian & English name
  studyLocation: ("domestic" | "overseas")[];
  provider: { id: string; en: string }; // Provider name in ID & EN
  degreeLevels: ("bachelor" | "master" | "doctoral")[];
  fundingType: "full" | "partial";
  coverage: { id: string[]; en: string[] }; // List of benefits in ID & EN
  requirements: { id: string[]; en: string[] }; // List of eligibility requirements in ID & EN
  status: "open" | "closed" | "soon"; // Must be 'open' or 'soon'
  deadline: string; // Valid future date in YYYY-MM-DD format (set to late 2026 or 2027)
  applicationUrl: string; // Valid official website URL for the scholarship
  description: { id: string; en: string }; // Brief summary in ID & EN
  tags: { id: string[]; en: string[] }; // Useful tags (e.g. Government, BUMN, Prestigious) in ID & EN
}

Output MUST be a raw JSON array of objects conforming to the Scholarship interface. Do NOT include any markdown code blocks (e.g. \`\`\`json) or extra text. Output only the pure JSON array.
`;

  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!res.ok) {
      throw new Error(`Gemini API returned status ${res.status}: ${await res.text()}`);
    }

    const data = await res.json();
    const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
    // Parse response
    const newScholarships = JSON.parse(textOutput.trim()) as Scholarship[];
    console.log(`Successfully generated ${newScholarships.length} new scholarships!`);
    return newScholarships;
  } catch (err: any) {
    console.error(`Failed to generate new scholarships using Gemini API: ${err.message}`);
    return [];
  }
}

// 5. Check map pins and filter tags integrity (Job 3)
function checkMapAndFilterIntegrity(list: Scholarship[]) {
  const mapPath = path.resolve(__dirname, "../src/components/WorldMap.tsx");
  const pagePath = path.resolve(__dirname, "../src/app/page.tsx");
  
  if (!fs.existsSync(mapPath) || !fs.existsSync(pagePath)) {
    console.log("[MAP CHECK] Skipping map integrity check (files not found).");
    return;
  }
  
  const mapContent = fs.readFileSync(mapPath, "utf-8");
  const pageContent = fs.readFileSync(pagePath, "utf-8");
  
  let mapCountries: any[] = [];
  let pageCountryTags: Record<string, string[]> = {};
  
  try {
    const countriesMarker = "const COUNTRIES: MapCountry[] =";
    const countriesStartIndex = mapContent.indexOf(countriesMarker);
    if (countriesStartIndex !== -1) {
      const arrayStart = mapContent.indexOf("[", countriesStartIndex);
      const arrayEnd = mapContent.indexOf("];", arrayStart);
      if (arrayStart !== -1 && arrayEnd !== -1) {
        mapCountries = new Function(`return ${mapContent.substring(arrayStart, arrayEnd + 1)};`)();
      }
    }
    
    const tagsMarker = "const countryTags: Record<string, string[]> =";
    const tagsStartIndex = pageContent.indexOf(tagsMarker);
    if (tagsStartIndex !== -1) {
      const objStart = pageContent.indexOf("{", tagsStartIndex);
      const objEnd = pageContent.indexOf("};", objStart);
      if (objStart !== -1 && objEnd !== -1) {
        pageCountryTags = new Function(`return ${pageContent.substring(objStart, objEnd + 1)};`)();
      }
    }
  } catch (e: any) {
    console.error("[MAP CHECK ERROR] Failed to parse map or page configurations:", e.message);
    return;
  }
  
  console.log(`Verifying geographical pins for ${list.length} scholarships...`);
  
  const mapCountryTagsSet = new Set<string>();
  mapCountries.forEach(c => {
    c.tags.forEach((t: string) => mapCountryTagsSet.add(t.toLowerCase()));
  });
  
  const pageTagsSet = new Set<string>();
  Object.values(pageCountryTags).forEach(tagsList => {
    tagsList.forEach((t: string) => pageTagsSet.add(t.toLowerCase()));
  });
  
  let missingPinsCount = 0;
  
  for (const sc of list) {
    if (sc.studyLocation.includes("domestic")) {
      continue;
    }
    
    const allScTags = [...sc.tags.id, ...sc.tags.en].map(t => t.toLowerCase());
    
    const hasMapPin = allScTags.some(tag => mapCountryTagsSet.has(tag));
    const hasPageFilter = allScTags.some(tag => pageTagsSet.has(tag));
    
    if (!hasMapPin) {
      console.log(`⚠️ [MAP WARNING] Scholarship '${sc.id}' (Overseas) has tags ${JSON.stringify(sc.tags.id)} but matches NO country marker pin in WorldMap.tsx!`);
      missingPinsCount++;
    }
    if (!hasPageFilter) {
      console.log(`⚠️ [MAP WARNING] Scholarship '${sc.id}' (Overseas) has tags ${JSON.stringify(sc.tags.id)} but matches NO filter configuration in page.tsx!`);
    }
  }
  
  if (missingPinsCount === 0) {
    console.log("✅ All international scholarships successfully mapped to geographical pins.");
  } else {
    console.log(`⚠️ [MAP INTEGRITY] Detected ${missingPinsCount} scholarships without active map pins. Please update COUNTRIES in WorldMap.tsx and countryTags in page.tsx.`);
  }
}

// 6. Main Execution
async function main() {
  const args = process.argv.slice(2);
  const checkOnly = args.includes("--check-only");
  
  try {
    const { header, list } = loadScholarships();
    
    // Job 1: Maintain existing statuses
    const { updatedCount, closedUrlsCount } = await maintainExisting(list);
    
    let addedCount = 0;
    
    // Job 2: Generate and add 10 new scholarships (unless --check-only is specified)
    if (!checkOnly) {
      const newItems = await generateNewScholarships(list);
      if (newItems.length > 0) {
        list.push(...newItems);
        addedCount = newItems.length;
      }
    }
    
    // Job 3: Check map and filter integrity
    checkMapAndFilterIntegrity(list);
    
    if (updatedCount > 0 || addedCount > 0) {
      // Save changes back to file
      const serialized = serializeScholarships(list);
      const newFileContent = `${header}${serialized};\n`;
      fs.writeFileSync(FILE_PATH, newFileContent, "utf-8");
      console.log(`[SUCCESS] Database updated: ${updatedCount} statuses updated, ${addedCount} new scholarships added.`);
    } else {
      console.log("[INFO] No changes detected. Database is up to date.");
    }
  } catch (err: any) {
    console.error("Maintenance execution failed:", err);
    process.exit(1);
  }
}

main();

