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
    throw new Error("Could not find scholarships array marker in file.");
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
  // 1. Rhodes Scholarship
  {
    id: "rhodes-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Rhodes (Universitas Oxford)",
      en: "Rhodes Scholarship (University of Oxford)"
    },
    provider: {
      id: "The Rhodes Trust",
      en: "The Rhodes Trust"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh di Universitas Oxford",
        "Tunjangan hidup bulanan (£19.092 per tahun)",
        "Tiket pesawat ekonomi pulang-pergi ke Inggris",
        "Biaya visa pelajar dan asuransi kesehatan (IHS)"
      ],
      en: [
        "Full tuition fees at the University of Oxford",
        "Stipend for living expenses (£19,092 per year)",
        "Round-trip economy airfare to the UK",
        "Student visa fee and International Health Surcharge (IHS) coverage"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia (WNI)",
        "Berusia minimal 18 tahun dan belum melewati usia 24 tahun pada 1 Oktober",
        "Memiliki gelar Sarjana (S1) dengan IPK sangat memuaskan (First Class atau setara)",
        "Kemampuan bahasa Inggris tingkat tinggi (IELTS minimal 7.0 atau TOEFL iBT 100)"
      ],
      en: [
        "Citizen of Indonesia",
        "Aged between 18 and 23 on October 1st of the application year",
        "Completed an undergraduate degree with first-class honors or equivalent GPA",
        "High-level English proficiency (minimum IELTS 7.0 or TOEFL iBT 100)"
      ]
    },
    status: "soon",
    deadline: "2026-10-01",
    applicationUrl: "https://www.rhodeshouse.ox.ac.uk/scholarships/the-rhodes-scholarship/",
    description: {
      id: "Salah satu beasiswa pascasarjana paling bergengsi dan tertua di dunia, mendukung mahasiswa berprestasi luar biasa untuk belajar di Universitas Oxford.",
      en: "One of the most prestigious and oldest international graduate fellowship programs in the world, supporting exceptional students to study at the University of Oxford."
    },
    tags: {
      id: ["Prestisius", "Luar Negeri", "Inggris", "Yayasan"],
      en: ["Prestigious", "Overseas", "UK", "Foundation"]
    }
  },
  // 2. Vanier Canada Graduate Scholarships
  {
    id: "vanier-canada-graduate-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Pascasarjana Vanier Kanada",
      en: "Vanier Canada Graduate Scholarships"
    },
    provider: {
      id: "Pemerintah Kanada",
      en: "Government of Canada"
    },
    degreeLevels: ["doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Tunjangan dana penelitian senilai CAD 50.000 per tahun selama 3 tahun",
        "Biaya kuliah dibayarkan sesuai skema universitas mitra di Kanada"
      ],
      en: [
        "Valued at CAD 50,000 per year for three years of doctoral studies",
        "Tuition and academic fees covered depending on the host Canadian university"
      ]
    },
    requirements: {
      id: [
        "Dinominasikan oleh universitas Kanada yang memiliki alokasi kuota Vanier",
        "Menempuh studi doktoral (PhD) penuh waktu pertama kali",
        "Menunjukkan kepemimpinan yang luar biasa dan prestasi akademik tingkat tinggi",
        "Memiliki proposal penelitian doktoral yang sangat solid"
      ],
      en: [
        "Be nominated by a Canadian institution holding a Vanier allocation",
        "Pursue a first doctoral degree on a full-time basis",
        "Demonstrate leadership skills and high-standard academic achievement",
        "Propose a solid and significant doctoral research project"
      ]
    },
    status: "soon",
    deadline: "2026-11-04",
    applicationUrl: "https://vanier.gc.ca/en/home-accueil.html",
    description: {
      id: "Beasiswa pemerintah Kanada untuk menarik mahasiswa doktoral berprestasi dunia guna melakukan riset di universitas-universitas Kanada.",
      en: "Canadian government program designed to attract and retain world-class doctoral students to Canadian universities."
    },
    tags: {
      id: ["Doktoral", "Luar Negeri", "Kanada", "Pemerintah"],
      en: ["Doctoral", "Overseas", "Canada", "Government"]
    }
  },
  // 3. NTU ASEAN Undergraduate Scholarship
  {
    id: "ntu-asean-undergraduate-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Sarjana ASEAN NTU",
      en: "NTU ASEAN Undergraduate Scholarship"
    },
    provider: {
      id: "Nanyang Technological University (NTU) Singapore",
      en: "Nanyang Technological University (NTU) Singapore"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh (setelah disubsidi oleh Tuition Grant Singapore)",
        "Tunjangan hidup tahunan senilai SGD 5.800",
        "Tunjangan akomodasi akomodasi SGD 3.000 per tahun",
        "Tunjangan komputer SGD 1.750 (diberikan sekali)"
      ],
      en: [
        "Full tuition fees coverage (after Singapore Tuition Grant subsidy)",
        "Annual living allowance of SGD 5,800",
        "Annual accommodation allowance of SGD 3,000",
        "One-off computer allowance of SGD 1,750"
      ]
    },
    requirements: {
      id: [
        "Warga Negara dari negara anggota ASEAN (tidak termasuk Singapura)",
        "Memiliki nilai rapor sekolah menengah atas (SMA/setara) yang luar biasa",
        "Memiliki jiwa kepemimpinan dan aktif dalam kegiatan kokurikuler",
        "Mendaftar pada program sarjana penuh waktu di NTU"
      ],
      en: [
        "Citizen of an ASEAN member country (excluding Singapore)",
        "Outstanding academic results in High School (SMA or equivalent)",
        "Strong leadership qualities and active co-curricular records",
        "Applying for a full-time undergraduate degree program at NTU"
      ]
    },
    status: "open",
    deadline: "2026-03-15",
    applicationUrl: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships/asean-undergraduate-scholarship",
    description: {
      id: "Beasiswa bergengsi dari NTU Singapura untuk siswa-siswi terbaik se-ASEAN yang ingin menempuh studi S1 di salah satu universitas terbaik dunia.",
      en: "A prestigious scholarship offered by NTU Singapore for outstanding high school graduates from ASEAN countries to pursue bachelor's studies."
    },
    tags: {
      id: ["Sarjana", "Luar Negeri", "Singapura", "Universitas"],
      en: ["Undergraduate", "Overseas", "Singapore", "University"]
    }
  },
  // 4. China Scholarship Council (CSC) Silk Road Program
  {
    id: "csc-silk-road-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa CSC Silk Road Program (Tiongkok)",
      en: "CSC Silk Road Program Scholarship (China)"
    },
    provider: {
      id: "Kementerian Pendidikan Republik Rakyat Tiongkok",
      en: "Ministry of Education of the People's Republic of China"
    },
    degreeLevels: ["bachelor", "master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Pembebasan biaya pendaftaran dan uang kuliah penuh",
        "Akomodasi asrama gratis di kampus",
        "Tunjangan uang saku bulanan (RMB 2.500 - 3.500)",
        "Asuransi kesehatan komprehensif bagi mahasiswa asing"
      ],
      en: [
        "Tuition waiver and registration fees coverage",
        "Free on-campus dormitory accommodation",
        "Monthly stipend (RMB 2,500 for Bachelor, RMB 3,000 for Master, RMB 3,500 for PhD)",
        "Comprehensive medical insurance for international students"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Tiongkok dalam kondisi kesehatan yang baik",
        "Memenuhi batas usia: S1 (<25 tahun), S2 (<35 tahun), S3 (<40 tahun)",
        "Memiliki kemampuan bahasa Mandarin (HSK) atau bahasa Inggris sesuai persyaratan prodi",
        "Berasal dari negara yang terhubung dalam inisiatif Belt and Road (termasuk Indonesia)"
      ],
      en: [
        "Non-Chinese citizen in good health",
        "Age limits: Under 25 for Bachelor, under 35 for Master, under 40 for PhD",
        "Language proficiency (HSK certification for Chinese-medium, or IELTS/TOEFL for English-medium)",
        "Citizen of a country along the Belt and Road Initiative (including Indonesia)"
      ]
    },
    status: "open",
    deadline: "2026-04-30",
    applicationUrl: "https://www.campuschina.org/",
    description: {
      id: "Program beasiswa penuh pemerintah Tiongkok untuk mendukung mahasiswa asing dari negara mitra jalur sutra modern menempuh pendidikan tinggi.",
      en: "Full scholarship program by the Chinese government to support international students from Belt and Road partner countries to study in China."
    },
    tags: {
      id: ["Pemerintah", "Luar Negeri", "Tiongkok", "Full Funded"],
      en: ["Government", "Overseas", "China", "Full Funded"]
    }
  },
  // 5. University of Melbourne Graduate Research Scholarships
  {
    id: "melbourne-graduate-research-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Riset Pascasarjana Universitas Melbourne",
      en: "University of Melbourne Graduate Research Scholarships"
    },
    provider: {
      id: "University of Melbourne, Australia",
      en: "University of Melbourne, Australia"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh selama masa studi (hingga 2 tahun S2, 4 tahun S3)",
        "Tunjangan hidup tahunan senilai AUD 37.000",
        "Tunjangan relokasi perjalanan pindah ke Melbourne",
        "Asuransi kesehatan Overseas Student Health Cover (OSHC) Single"
      ],
      en: [
        "Full tuition fee offset for up to 2 years for Master, 4 years for Doctoral",
        "Living allowance stipend of AUD 37,000 per year",
        "Relocation grant for students moving to Melbourne",
        "Overseas Student Health Cover (OSHC) Single membership coverage"
      ]
    },
    requirements: {
      id: [
        "Telah mendaftar dan memenuhi syarat masuk program riset S2 atau S3 di Melbourne",
        "Memiliki prestasi akademik luar biasa pada jenjang studi sebelumnya",
        "Memiliki latar belakang penelitian yang kuat (publikasi riset diutamakan)"
      ],
      en: [
        "Applied and met entry requirements for a Master by Research or PhD at Melbourne",
        "Exceptional academic performance from previous tertiary qualifications",
        "Strong research background (publications are highly regarded)"
      ]
    },
    status: "open",
    deadline: "2026-10-31",
    applicationUrl: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarship",
    description: {
      id: "Beasiswa riset pascasarjana dari Universitas Melbourne untuk mendukung mahasiswa lokal dan internasional menempuh gelar Master/PhD riset.",
      en: "Prestigious research scholarship offered by the University of Melbourne to support high-achieving domestic and international research students."
    },
    tags: {
      id: ["Universitas", "Luar Negeri", "Australia", "Riset"],
      en: ["University", "Overseas", "Australia", "Research"]
    }
  },
  // 6. BSI Scholarship
  {
    id: "bsi-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa BSI (Bank Syariah Indonesia) Scholarship",
      en: "BSI (Bank Syariah Indonesia) Scholarship"
    },
    provider: {
      id: "BSI Maslahat & Bank Syariah Indonesia",
      en: "BSI Maslahat & Bank Syariah Indonesia"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan uang kuliah tunggal (UKT) senilai Rp 3.000.000 per semester",
        "Uang saku bulanan sebesar Rp 500.000",
        "Program pembinaan kepemimpinan dan karakter syariah",
        "Peluang magang dan karir di Bank Syariah Indonesia"
      ],
      en: [
        "Tuition fee assistance (UKT) of Rp 3,000,000 per semester",
        "Monthly living allowance of Rp 500,000",
        "Leadership development and Sharia character building programs",
        "Internship and career opportunities at Bank Syariah Indonesia"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif semester 3 atau 5 dari universitas mitra BSI",
        "Memiliki IPK minimal 3.00 pada skala 4.00",
        "Bukan penerima beasiswa lain",
        "Aktif dalam organisasi kemahasiswaan atau sosial kemasyarakatan"
      ],
      en: [
        "Active undergraduate student in 3rd or 5th semester at partner universities",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Not currently receiving any other scholarships",
        "Active in student organizations or community service activities"
      ]
    },
    status: "open",
    deadline: "2026-09-30",
    applicationUrl: "https://www.bsimaslahat.org/",
    description: {
      id: "Program beasiswa CSR Bank Syariah Indonesia untuk membantu mahasiswa berprestasi dan berkarakter kepemimpinan di tingkat sarjana.",
      en: "CSR scholarship program by Bank Syariah Indonesia aiming to support high-achieving undergraduate students with leadership potential."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Perbankan", "BUMN"],
      en: ["Private", "Domestic", "Banking", "SOE"]
    }
  },
  // 7. Paragon Scholarship Program
  {
    id: "paragon-scholarship-program",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Paragon Scholarship Program",
      en: "Paragon Scholarship Program"
    },
    provider: {
      id: "PT Paragon Technology and Innovation",
      en: "PT Paragon Technology and Innovation"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang saku bulanan senilai Rp 6.250.000 per tahun",
        "Program pelatihan kepemimpinan, kepribadian, dan karier",
        "Proyek kolaborasi langsung dengan manajemen Paragon",
        "Peluang rekrutmen langsung sebagai karyawan Paragon"
      ],
      en: [
        "Financial support / allowance of Rp 6,250,000 per year",
        "Leadership, personal development, and career preparation programs",
        "Direct collaboration projects with Paragon management",
        "Direct recruitment opportunities to join Paragon Corp"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 5 di universitas terpilih mitra Paragon",
        "Memiliki IPK minimal 3.30 pada skala 4.00",
        "Memiliki prestasi non-akademik di tingkat regional atau nasional",
        "Bersedia mengikuti seluruh tahapan pengembangan kapasitas"
      ],
      en: [
        "Active 5th-semester undergraduate student in Paragon partner universities",
        "Minimum GPA of 3.30 on a 4.00 scale",
        "Non-academic achievement at regional or national levels",
        "Willing to participate in all capacity building modules"
      ]
    },
    status: "open",
    deadline: "2026-08-15",
    applicationUrl: "https://www.paragon-innovation.com/",
    description: {
      id: "Program CSR unggulan dari produsen kosmetik terkemuka (Wardah, Kahf) untuk mendukung mahasiswa berkarakter unggul dalam kepemimpinan dan inovasi.",
      en: "Flagship CSR program by PT Paragon (cosmetics maker of Wardah, Kahf) supporting university students to excel in leadership and innovation."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Karier", "Kosmetik"],
      en: ["Private", "Domestic", "Career", "Cosmetics"]
    }
  },
  // 8. Sinar Mas Agribusiness and Food (SMART) Scholarship
  {
    id: "sinarmas-smart-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Sinar Mas Agribusiness and Food (SMART)",
      en: "Sinar Mas Agribusiness and Food (SMART) Scholarship"
    },
    provider: {
      id: "PT Sinar Mas Agribusiness and Food",
      en: "PT Sinar Mas Agribusiness and Food"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya pendidikan penuh (uang kuliah) selama masa studi",
        "Tunjangan biaya hidup bulanan",
        "Kesempatan magang kerja langsung di perkebunan/kantor Sinar Mas",
        "Ikatan dinas dan penempatan kerja setelah lulus kuliah"
      ],
      en: [
        "Full tuition fees coverage during the study period",
        "Monthly living allowance stipend",
        "Direct internship opportunities at Sinar Mas plantations/offices",
        "Service bond and employment placement upon graduation"
      ]
    },
    requirements: {
      id: [
        "Lulusan SMA/MA jurusan IPA dengan rata-rata nilai matematika & biologi minimal 80",
        "Tinggi badan minimal 165 cm (untuk peminatan perkebunan)",
        "Lolos seluruh rangkaian ujian seleksi (tertulis, psikotes, wawancara, fisik)"
      ],
      en: [
        "High school graduate (Science major) with min average of 80 in Math & Biology",
        "Minimum height of 165 cm (for plantation field major candidates)",
        "Pass all selection rounds including written, psychological, interview, and physical tests"
      ]
    },
    status: "open",
    deadline: "2026-05-15",
    applicationUrl: "https://www.smart-tbk.com/beasiswa/",
    description: {
      id: "Beasiswa vokasi S1 penuh dengan ikatan dinas dari Sinar Mas untuk mencetak pemimpin masa depan di industri kelapa sawit.",
      en: "Full vocational undergraduate scholarship with employment bond from Sinar Mas to nurture future leaders in the palm oil industry."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Ikatan Dinas", "Agribisnis"],
      en: ["Private", "Domestic", "Service Bond", "Agribusiness"]
    }
  },
  // 9. Beasiswa Yayasan Toyota-Astra
  {
    id: "toyota-astra-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Yayasan Toyota-Astra",
      en: "Toyota-Astra Foundation Scholarship"
    },
    provider: {
      id: "Yayasan Toyota-Astra",
      en: "Toyota-Astra Foundation"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan biaya kuliah tahunan senilai Rp 8.000.000",
        "Kesempatan mengikuti program magang di Toyota Indonesia",
        "Undangan seminar, pelatihan, dan pameran teknologi otomotif"
      ],
      en: [
        "Annual tuition support of Rp 8,000,000",
        "Internship opportunities within Toyota Indonesia group",
        "Invitations to automotive technology seminars, training, and exhibitions"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif program S1 semester 5 atau 7 di jurusan teknik/sains mitra YTA",
        "Memiliki IPK minimal 3.00 pada skala 4.00",
        "Berasal dari keluarga berpenghasilan menengah ke bawah (dibuktikan slip gaji)",
        "Belum menerima beasiswa dari pihak/instansi lain"
      ],
      en: [
        "Active undergraduate student in 5th or 7th semester in engineering/science majors",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Come from low to middle-income families (salary slip required)",
        "Not currently receiving any other scholarships"
      ]
    },
    status: "soon",
    deadline: "2026-08-30",
    applicationUrl: "http://www.yayasantoyotaastra.or.id/",
    description: {
      id: "Beasiswa sosial dari Yayasan Toyota-Astra untuk membantu biaya pendidikan mahasiswa fakultas teknik dan sains di perguruan tinggi negeri Indonesia.",
      en: "Social scholarship by Toyota-Astra Foundation to support engineering and science students at top Indonesian public universities."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Teknik", "Sosial"],
      en: ["Private", "Domestic", "Engineering", "Social"]
    }
  },
  // 10. Beasiswa Pembangunan Jaya
  {
    id: "pembangunan-jaya-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Pembangunan Jaya (Yayasan Pembangunan Jaya)",
      en: "Pembangunan Jaya Scholarship (Yayasan Pembangunan Jaya)"
    },
    provider: {
      id: "Yayasan Pendidikan Pembangunan Jaya",
      en: "Yayasan Pendidikan Pembangunan Jaya"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan uang SPP/kuliah senilai Rp 6.000.000 per tahun akademik",
        "Kesempatan berpartisipasi dalam program magang kerja di Pembangunan Jaya Group"
      ],
      en: [
        "Tuition fee assistance of Rp 6,000,000 per academic year",
        "Internship opportunities within Pembangunan Jaya Group business units"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 5 di perguruan tinggi negeri/swasta mitra",
        "Memiliki IPK minimal 3.30 pada skala 4.00",
        "Membuat makalah/karya tulis ilmiah bertema entrepreneurship atau infrastruktur",
        "Direkomendasikan oleh pimpinan perguruan tinggi"
      ],
      en: [
        "Active 5th-semester undergraduate student in partner universities",
        "Minimum GPA of 3.30 on a 4.00 scale",
        "Submit a paper/essay on entrepreneurship or infrastructure themes",
        "Recommended by the head of the university's student affairs office"
      ]
    },
    status: "open",
    deadline: "2026-09-15",
    applicationUrl: "http://www.yayasanjaya.org/",
    description: {
      id: "Beasiswa bagi mahasiswa sarjana berprestasi tinggi untuk mendorong iklim penelitian inovasi entrepreneurship di kalangan mahasiswa perkotaan.",
      en: "Scholarship program for high-achieving undergraduate students to foster innovation and entrepreneurship research."
    },
    tags: {
      id: ["Swasta", "Dalam Negeri", "Makalah", "Entrepreneurship"],
      en: ["Private", "Domestic", "Paper", "Entrepreneurship"]
    }
  }
];

function main() {
  try {
    const { header, list } = loadScholarships();
    
    // Check for duplicates
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
