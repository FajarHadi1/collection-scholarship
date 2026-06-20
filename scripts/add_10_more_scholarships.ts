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

const newScholarships: Scholarship[] = [
  // 1. NUS Presidential Graduate Fellowship
  {
    id: "nus-presidential-graduate-fellowship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa NUS Presidential Graduate Fellowship (Singapura)",
      en: "NUS Presidential Graduate Fellowship (Singapore)"
    },
    provider: {
      id: "National University of Singapore (NUS)",
      en: "National University of Singapore (NUS)"
    },
    degreeLevels: ["doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh di NUS",
        "Tunjangan hidup bulanan senilai SGD 3.500 (untuk WN Singapura) atau SGD 3.200 (mahasiswa asing)",
        "Tunjangan perjalanan tiket pesawat satu kali pulang-pergi",
        "Tunjangan persiapan kedatangan senilai SGD 750"
      ],
      en: [
        "Full tuition fees coverage at NUS",
        "Monthly living allowance of SGD 3,500 (Singapore Citizens) or SGD 3,200 (International Students)",
        "One-off airfare passage to Singapore and return",
        "One-off settling-in allowance of SGD 750"
      ]
    },
    requirements: {
      id: [
        "Mendaftar program Ph.D. penuh waktu di NUS",
        "Memiliki prestasi akademik luar biasa dan kemampuan kepemimpinan yang sangat baik",
        "Terbuka untuk semua warga negara asing (termasuk Indonesia)"
      ],
      en: [
        "Apply for admission to a full-time Ph.D. program at NUS",
        "Outstanding academic results and excellent leadership potential",
        "Open to candidates of all nationalities (including Indonesia)"
      ]
    },
    status: "open",
    deadline: "2026-11-15",
    applicationUrl: "https://nusgs.nus.edu.sg/scholarships-fellowships/",
    description: {
      id: "Beasiswa riset tingkat doktoral paling bergengsi dari Universitas Nasional Singapura (NUS) untuk kandidat Ph.D. berprestasi tinggi se-dunia.",
      en: "The most prestigious doctoral research scholarship awarded by National University of Singapore (NUS) to outstanding Ph.D. candidates globally."
    },
    tags: {
      id: ["Doktoral", "Luar Negeri", "Singapura", "Universitas"],
      en: ["Doctoral", "Overseas", "Singapore", "University"]
    }
  },
  // 2. UNU-IAS Scholarship
  {
    id: "unu-ias-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Universitas PBB - UNU-IAS (Jepang)",
      en: "UNU-IAS Scholarship (United Nations University, Japan)"
    },
    provider: {
      id: "United Nations University Institute for the Advanced Study of Sustainability",
      en: "United Nations University Institute for the Advanced Study of Sustainability"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Pembebasan uang kuliah penuh (100% tuition waiver)",
        "Uang saku bulanan sebesar JPY 120.000 selama studi",
        "Biaya perjalanan tiket pesawat kedatangan ke Tokyo"
      ],
      en: [
        "Full tuition fee waiver (100%)",
        "Monthly living stipend of JPY 120,000 during the study period",
        "One-way economy class airfare to Tokyo"
      ]
    },
    requirements: {
      id: [
        "Memiliki minat yang kuat dalam studi keberlanjutan dan isu-isu global PBB",
        "Memiliki gelar sarjana (S1) atau magister (S2) dari universitas bereputasi tinggi",
        "Kemampuan Bahasa Inggris tingkat tinggi (IELTS minimal 7.0 atau TOEFL iBT 100)"
      ],
      en: [
        "Demonstrated strong interest in sustainability studies and UN global issues",
        "Holder of a bachelor's or master's degree from a highly recognized university",
        "High-level English language proficiency (minimum IELTS 7.0 or TOEFL iBT 100)"
      ]
    },
    status: "soon",
    deadline: "2026-03-25",
    applicationUrl: "https://ias.unu.edu/en/admissions/degrees",
    description: {
      id: "Beasiswa riset pascasarjana bergengsi di Tokyo, Jepang, untuk menempuh studi pembangunan berkelanjutan di bawah naungan langsung PBB.",
      en: "A prestigious graduate research scholarship program in Tokyo, Japan, focusing on sustainability studies under the direct auspices of the United Nations."
    },
    tags: {
      id: ["Riset", "Luar Negeri", "Jepang", "PBB"],
      en: ["Research", "Overseas", "Japan", "UN"]
    }
  },
  // 3. Hubert H. Humphrey Fellowship Program
  {
    id: "humphrey-fellowship-us",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Hubert H. Humphrey (Amerika Serikat)",
      en: "Hubert H. Humphrey Fellowship Program (USA)"
    },
    provider: {
      id: "Kementerian Luar Negeri Amerika Serikat & AMINEF Indonesia",
      en: "US Department of State & AMINEF Indonesia"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah penuh di universitas tuan rumah di Amerika Serikat",
        "Tunjangan biaya hidup bulanan & tunjangan kedatangan sekali bayar",
        "Tiket pesawat ekonomi pulang-pergi dan asuransi kesehatan",
        "Dana bantuan buku dan tunjangan pengembangan kepemimpinan profesional"
      ],
      en: [
        "Full tuition and fees coverage at the designated host university in the US",
        "Monthly living allowance and one-time settling-in allowance",
        "Round-trip economy class airfare and health insurance coverage",
        "Book allowance and professional development funds"
      ]
    },
    requirements: {
      id: [
        "WN Indonesia dengan kepemimpinan yang kuat dan rekam jejak pengabdian masyarakat",
        "Memiliki pengalaman kerja minimal 5 tahun di bidang profesional publik",
        "Memiliki gelar sarjana (S1) dengan IPK yang memuaskan",
        "Memiliki sertifikat TOEFL iBT minimal 71 atau IELTS minimal 6.0"
      ],
      en: [
        "Indonesian citizen with strong leadership potential and public service records",
        "Minimum of 5 years of full-time professional experience in the public sector",
        "Completed a bachelor's degree with a solid academic record",
        "English proficiency certificate (minimum TOEFL iBT 71 or IELTS 6.0)"
      ]
    },
    status: "soon",
    deadline: "2026-05-15",
    applicationUrl: "https://www.aminef.or.id/",
    description: {
      id: "Program beasiswa non-gelar 10 bulan untuk para profesional tingkat menengah di bidang pelayanan publik untuk belajar dan mengembangkan jaringan di AS.",
      en: "A 10-month non-degree fellowship program in the United States for mid-career professionals dedicated to public service."
    },
    tags: {
      id: ["Profesional", "Luar Negeri", "Amerika Serikat", "AMINEF"],
      en: ["Professional", "Overseas", "USA", "AMINEF"]
    }
  },
  // 4. Adelaide Graduate Research Scholarships
  {
    id: "adelaide-graduate-research-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Riset Pascasarjana Universitas Adelaide (Australia)",
      en: "Adelaide Graduate Research Scholarships (Australia)"
    },
    provider: {
      id: "University of Adelaide, Australia",
      en: "University of Adelaide, Australia"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya pendidikan kuliah penuh (tuition fee offset)",
        "Uang saku bulanan biaya hidup senilai AUD 34.200 per tahun",
        "Tunjangan kesehatan mahasiswa asing (OSHC)",
        "Tunjangan relokasi perjalanan pindah ke Australia"
      ],
      en: [
        "Full tuition fee offset for the standard program duration",
        "Annual living allowance stipend of AUD 34,200",
        "Overseas Student Health Cover (OSHC) membership coverage",
        "Relocation allowance for students moving to Adelaide"
      ]
    },
    requirements: {
      id: [
        "Pendaftar internasional yang memenuhi kualifikasi masuk riset S2/S3 di Adelaide",
        "Memiliki gelar kehormatan kelas satu (First Class Honours) atau IPK setara",
        "Lolos verifikasi kemampuan bahasa Inggris (IELTS minimal 6.5 atau TOEFL iBT 79)"
      ],
      en: [
        "International applicants who meet the entry requirements for a research Master or PhD",
        "Hold at least a first-class honours degree or equivalent GPA",
        "Meet English language proficiency requirements (minimum IELTS 6.5 or TOEFL iBT 79)"
      ]
    },
    status: "open",
    deadline: "2026-06-30",
    applicationUrl: "https://www.adelaide.edu.au/graduate-research/scholarships",
    description: {
      id: "Beasiswa riset pascasarjana dari Universitas Adelaide untuk mendukung mahasiswa berprestasi internasional melakukan riset tingkat dunia di Australia.",
      en: "Research scholarship from the University of Adelaide to support high-achieving international students conducting world-class research."
    },
    tags: {
      id: ["Universitas", "Luar Negeri", "Australia", "Riset"],
      en: ["University", "Overseas", "Australia", "Research"]
    }
  },
  // 5. SBW Berlin Scholarship
  {
    id: "sbw-berlin-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa SBW Berlin (Jerman)",
      en: "SBW Berlin Scholarship (Germany)"
    },
    provider: {
      id: "SBW Berlin Foundation",
      en: "SBW Berlin Foundation"
    },
    degreeLevels: ["bachelor", "master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh di universitas mitra di Berlin",
        "Akomodasi tempat tinggal gratis di asrama mahasiswa",
        "Tunjangan uang saku bulanan senilai EUR 550 untuk kebutuhan hidup",
        "Biaya perjalanan tiket pesawat pulang-pergi ke Jerman"
      ],
      en: [
        "Full tuition fees coverage at partner universities in Berlin",
        "Free accommodation in designated student dormitories",
        "Monthly living allowance of EUR 550",
        "Round-trip airfare travel grant to Germany"
      ]
    },
    requirements: {
      id: [
        "WN negara berkembang (termasuk Indonesia) berusia 18-30 tahun",
        "Memiliki rekam jejak proyek sosial atau keterlibatan sukarela di negara asal",
        "Lolos seleksi penerimaan akademik di salah satu kampus di Berlin/Potsdam"
      ],
      en: [
        "Citizen of a developing nation (including Indonesia) aged 18 to 30",
        "Demonstrated active social engagement or voluntary work in the home country",
        "Admitted to an undergraduate or postgraduate study program in Berlin/Potsdam"
      ]
    },
    status: "open",
    deadline: "2026-06-30",
    applicationUrl: "https://sbw.berlin/en/portfolio-item/sbw-berlin-scholarship/",
    description: {
      id: "Beasiswa penuh di Berlin, Jerman, untuk melatih pemimpin masa depan dari negara berkembang yang memiliki komitmen kuat pada isu sosial.",
      en: "A full scholarship in Berlin, Germany, designed to support young talents from developing countries who are committed to social engagement."
    },
    tags: {
      id: ["Yayasan", "Luar Negeri", "Jerman", "Pemberdayaan"],
      en: ["Foundation", "Overseas", "Germany", "Empowerment"]
    }
  },
  // 6. Beasiswa Adaro
  {
    id: "adaro-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Yayasan Adaro Bangun Negeri (YABN)",
      en: "Adaro Foundation Scholarship"
    },
    provider: {
      id: "Yayasan Adaro Bangun Negeri & Adaro Energy",
      en: "Adaro Foundation & Adaro Energy"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan biaya kuliah tahunan senilai Rp 10.000.000",
        "Program pendampingan kepemimpinan dan pelatihan karir profesional",
        "Peluang magang dan prioritas rekrutmen kerja di grup Adaro Energy"
      ],
      en: [
        "Annual tuition fee and academic support of Rp 10,000,000",
        "Leadership mentoring and professional career development programs",
        "Internship and priority recruitment opportunities within Adaro Energy Group"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 3 atau 5 dari universitas mitra YABN",
        "Memiliki IPK minimal 3.00 pada skala 4.00",
        "Berasal dari latar belakang ekonomi menengah ke bawah",
        "Aktif dalam organisasi kemahasiswaan atau proyek sosial"
      ],
      en: [
        "Active 3rd or 5th-semester undergraduate student in Adaro partner universities",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Come from a financially disadvantaged background",
        "Active in student organizations or community service projects"
      ]
    },
    status: "open",
    deadline: "2026-07-31",
    applicationUrl: "https://yabn.or.id/",
    description: {
      id: "Beasiswa dari Adaro Energy untuk membantu mahasiswa berprestasi dan berkarakter kepemimpinan yang membutuhkan bantuan finansial.",
      en: "Scholarship program by Adaro Energy supporting high-achieving, underprivileged undergraduate students to pursue their higher education."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Korporasi", "Energi"],
      en: ["Private", "Domestic", "Corporate", "Energy"]
    }
  },
  // 7. Beasiswa BCA Syariah
  {
    id: "bca-syariah-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa BCA Syariah (CSR)",
      en: "BCA Syariah CSR Scholarship"
    },
    provider: {
      id: "PT Bank BCA Syariah",
      en: "PT Bank BCA Syariah"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan dana pendidikan kuliah sebesar Rp 4.500.000 per semester",
        "Pelatihan literasi keuangan perbankan syariah",
        "Program bimbingan karier dan sertifikasi industri"
      ],
      en: [
        "Tuition support grant of Rp 4,500,000 per semester",
        "Financial literacy training in Sharia banking operations",
        "Career development mentoring and industry certification opportunities"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 5 atau 7 di PTN/PTS mitra BCA Syariah",
        "Memiliki IPK minimal 3.00 pada skala 4.00",
        "Mengikuti rangkaian ujian tertulis & wawancara komitmen pembelajaran"
      ],
      en: [
        "Active 5th or 7th-semester undergraduate student in partner universities",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Pass the written test & interview process on learning commitment"
      ]
    },
    status: "soon",
    deadline: "2026-09-10",
    applicationUrl: "https://www.bcasyariah.co.id/",
    description: {
      id: "Program bantuan dana pendidikan perbankan syariah dari BCA Syariah untuk membekali lulusan siap pakai di industri keuangan.",
      en: "Education fund support from BCA Syariah Sharia Banking aimed at equipping undergraduate students with financial industry readiness."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Perbankan", "Sharia"],
      en: ["Private", "Domestic", "Banking", "Sharia"]
    }
  },
  // 8. Beasiswa Medco Foundation
  {
    id: "medco-foundation-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Yayasan Medco Foundation",
      en: "Medco Foundation Scholarship"
    },
    provider: {
      id: "Medco Foundation & MedcoEnergi",
      en: "Medco Foundation & MedcoEnergi"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya pendaftaran dan kuliah (UKT) 100% ditanggung penuh",
        "Uang saku bulanan senilai Rp 850.000",
        "Tunjangan tugas akhir/penelitian senilai Rp 3.000.000"
      ],
      en: [
        "100% full coverage of tuition and academic fees (UKT)",
        "Monthly living allowance stipend of Rp 850,000",
        "Final project/research support grant of Rp 3,000,000"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 5 di fakultas teknik, geosains, atau pertanian",
        "Memiliki IPK minimal 3.00 pada skala 4.00",
        "Berasal dari wilayah operasional kerja Medco Group (diutamakan)"
      ],
      en: [
        "Active 5th-semester undergraduate student in engineering, geosciences, or agriculture",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Originating from Medco Group's operational regions (preferred)"
      ]
    },
    status: "soon",
    deadline: "2026-08-15",
    applicationUrl: "https://www.medcofoundation.org/",
    description: {
      id: "Beasiswa prestasi dari Medco Group untuk mencetak teknokrat terampil di bidang energi, sumber daya alam, dan ketahanan pangan.",
      en: "Prestigious corporate scholarship by Medco Group fostering future technocrats in energy, natural resources, and food security."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Energi", "Teknik"],
      en: ["Private", "Domestic", "Energy", "Engineering"]
    }
  },
  // 9. Beasiswa Kalbe Farma
  {
    id: "kalbe-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Riset & Sains Kalbe Farma (CSR)",
      en: "Kalbe Farma Science & Research Scholarship"
    },
    provider: {
      id: "PT Kalbe Farma Tbk",
      en: "PT Kalbe Farma Tbk"
    },
    degreeLevels: ["bachelor", "master"],
    fundingType: "partial",
    coverage: {
      id: [
        "Tunjangan biaya kuliah tahunan senilai Rp 7.500.000",
        "Dana hibah pendanaan proyek riset tugas akhir sains / farmasi",
        "Peluang magang di laboratorium R&D PT Kalbe Farma"
      ],
      en: [
        "Annual tuition support grant of Rp 7,500,000",
        "Research project grant for final thesis in science/pharmacy",
        "Internship opportunities at PT Kalbe Farma's R&D laboratories"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 5 atau S2 semester 3 jurusan Farmasi, Biologi, Kimia, Kedokteran",
        "Memiliki IPK minimal 3.25 pada skala 4.00",
        "Memiliki proposal penelitian tugas akhir yang orisinal dan inovatif"
      ],
      en: [
        "Active S1 (5th sem) or S2 (3rd sem) student in Pharmacy, Biology, Chemistry, Medicine",
        "Minimum GPA of 3.25 on a 4.00 scale",
        "Submit an original and innovative final project research proposal"
      ]
    },
    status: "open",
    deadline: "2026-08-31",
    applicationUrl: "https://www.kalbe.co.id/",
    description: {
      id: "Beasiswa inovasi sains PT Kalbe Farma untuk mendorong lahirnya temuan baru di bidang farmasi dan kedokteran dari mahasiswa Indonesia.",
      en: "Science innovation scholarship by PT Kalbe Farma aiming to stimulate pharmaceutical and medical discoveries among Indonesian scholars."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Farmasi", "Riset"],
      en: ["Private", "Domestic", "Pharmacy", "Research"]
    }
  },
  // 10. Beasiswa Bank Mega
  {
    id: "bank-mega-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Bank Mega Prestasi",
      en: "Bank Mega Academic Excellence Scholarship"
    },
    provider: {
      id: "PT Bank Mega Tbk & CT Corp",
      en: "PT Bank Mega Tbk & CT Corp"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah tunggal (UKT) disubsidi penuh selama 4 semester",
        "Uang saku bulanan senilai Rp 600.000",
        "Prioritas rekrutmen program Management Trainee (MT) Bank Mega"
      ],
      en: [
        "Tuition support allowance (UKT) fully covered for 4 semesters",
        "Monthly living allowance of Rp 600,000",
        "Priority recruitment for Bank Mega's Management Trainee (MT) program"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 5 jurusan Ekonomi, Manajemen, Akuntansi, Teknik Informatika",
        "Memiliki IPK minimal 3.30 pada skala 4.00",
        "Aktif dalam kegiatan kemahasiswaan atau berprestasi di bidang kompetisi"
      ],
      en: [
        "Active 5th-semester undergraduate student in Economics, Management, Accounting, IT",
        "Minimum GPA of 3.30 on a 4.00 scale",
        "Active in student organizations or held achievements in competitions"
      ]
    },
    status: "open",
    deadline: "2026-09-15",
    applicationUrl: "https://www.bankmega.com/",
    description: {
      id: "Beasiswa prestasi dari Bank Mega untuk mendukung mahasiswa sarjana berprestasi tinggi di perguruan tinggi Indonesia dalam mempersiapkan karier perbankan.",
      en: "Bank Mega scholarship program supporting high-achieving undergraduate students to prepare for successful careers in banking."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Perbankan", "MT"],
      en: ["Private", "Domestic", "Banking", "MT"]
    }
  }
];

function main() {
  try {
    const { header, list } = loadScholarships();
    const existingIds = new Set(list.map(s => s.id));
    const toAdd = newScholarships.filter(s => !existingIds.has(s.id));
    
    if (toAdd.length === 0) {
      console.log("All 10 scholarships are already in the database.");
      return;
    }
    
    list.push(...toAdd);
    
    const serialized = serializeScholarships(list);
    const newFileContent = `${header}${serialized};\n`;
    fs.writeFileSync(FILE_PATH, newFileContent, "utf-8");
    console.log(`Successfully added ${toAdd.length} new scholarships! Total count is now ${list.length}.`);
  } catch (err) {
    console.error("Failed to add scholarships:", err);
    process.exit(1);
  }
}

main();
