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

function loadScholarships(): { header: string; list: Scholarship[] } {
  const fileContent = fs.readFileSync(FILE_PATH, "utf-8");
  const marker = "export const scholarships: Scholarship[] =";
  const index = fileContent.indexOf(marker);
  if (index === -1) {
    throw new Error("Could not find scholarships array marker.");
  }
  
  const header = fileContent.substring(0, index + marker.length).trim() + " ";
  const arrayString = fileContent.substring(index + marker.length).trim();
  
  let cleanArrayString = arrayString;
  if (cleanArrayString.endsWith(";")) {
    cleanArrayString = cleanArrayString.slice(0, -1);
  }
  
  const list = new Function(`return ${cleanArrayString};`)() as Scholarship[];
  return { header, list };
}

function serializeScholarships(list: Scholarship[]): string {
  return JSON.stringify(list, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"(domestic|overseas|bachelor|master|doctoral|full|partial|open|closed|soon)"/g, "'$1'");
}

const idsToDelete = [
  "beasiswa-jfls",
  "beasiswa-kominfo-dalam-negeri",
  "beasiswa-bpi",
  "beasiswa-ppa",
  "sea-scholarship",
  "gates-cambridge",
  "hkpfs-hongkong",
  "honjo-international",
  "kip-kuliah"
];

function main() {
  try {
    const { header, list } = loadScholarships();
    const originalLength = list.length;
    
    // Filter out deleted IDs
    const updatedList = list.filter(sc => !idsToDelete.includes(sc.id));
    const deletedCount = originalLength - updatedList.length;
    
    const serialized = serializeScholarships(updatedList);
    const newFileContent = `${header}${serialized};\n`;
    fs.writeFileSync(FILE_PATH, newFileContent, "utf-8");
    
    console.log(`Successfully deleted ${deletedCount} scholarships. Total count is now ${updatedList.length}.`);
  } catch (err) {
    console.error("Failed to delete scholarships:", err);
    process.exit(1);
  }
}

main();
