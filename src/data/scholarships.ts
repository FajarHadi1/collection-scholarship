export interface Scholarship {
  id: string;
  name: { id: string; en: string };
  studyLocation: ('domestic' | 'overseas')[];
  provider: { id: string; en: string };
  degreeLevels: ('bachelor' | 'master' | 'doctoral')[];
  fundingType: 'full' | 'partial';
  coverage: { id: string[]; en: string[] };
  requirements: { id: string[]; en: string[] };
  status: 'open' | 'closed' | 'soon';
  deadline: string;
  applicationUrl: string;
  description: { id: string; en: string };
  tags: { id: string[]; en: string[] };
}

export const scholarships: Scholarship[] = [
  {
    id: "lpdp-regular",
    studyLocation: ["domestic", "overseas"],
    name: {
      id: "LPDP Beasiswa Reguler",
      en: "LPDP Regular Scholarship"
    },
    provider: {
      id: "Lembaga Pengelola Dana Pendidikan (Kemenkeu)",
      en: "Indonesia Endowment Fund for Education (Ministry of Finance)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya Pendaftaran & Kuliah (S2/S3)",
        "Uang Saku Bulanan",
        "Tunjangan Kedatangan & Tesis",
        "Tiket Pesawat & Visa (Pulang-Pergi)",
        "Asuransi Kesehatan & Dana Darurat",
        "Tunjangan Buku & Seminar"
      ],
      en: [
        "Registration & Tuition Fee (S2/S3)",
        "Monthly Living Allowance",
        "Settlement & Thesis Allowance",
        "Visa & Flight Ticket (Round-trip)",
        "Health Insurance & Emergency Funds",
        "Book & Seminar Allowance"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia (WNI)",
        "Usia maksimal: 35 tahun untuk S2, 40 tahun untuk S3",
        "IPK minimal: 3.00 (S2), 3.25 (S3) pada skala 4.00",
        "Sertifikat Bahasa Inggris: TOEFL iBT 80 / IELTS 6.5 (untuk luar negeri)",
        "Sertifikat Bahasa Inggris: TOEFL ITP 500 / IELTS 6.0 (untuk S2 dalam negeri)",
        "Letter of Acceptance (LoA) Unconditional (opsional, diutamakan)"
      ],
      en: [
        "Indonesian Citizen (WNI)",
        "Max age: 35 for Master (S2), 40 for Doctoral (S3)",
        "Min GPA: 3.00 (S2), 3.25 (S3) on a 4.00 scale",
        "English Proficiency: TOEFL iBT 80 / IELTS 6.5 (for overseas)",
        "English Proficiency: TOEFL ITP 500 / IELTS 6.0 (for domestic S2)",
        "Letter of Acceptance (LoA) Unconditional (optional, but preferred)"
      ]
    },
    status: "open",
    deadline: "2026-07-25",
    applicationUrl: "https://beasiswalpdp.kemenkeu.go.id/",
    description: {
      id: "Beasiswa pemerintah Indonesia paling bergengsi yang didanai oleh Kementerian Keuangan. Mendukung mahasiswa Indonesia untuk menempuh jenjang S2 dan S3 di universitas terbaik dalam dan luar negeri.",
      en: "The most prestigious Indonesian government scholarship funded by the Ministry of Finance. It supports Indonesian students to pursue Master and Doctoral degrees at top domestic and global universities to foster future leadership."
    },
    tags: {
      id: ["Pemerintah", "Dalam Negeri", "Luar Negeri", "Bergengsi"],
      en: ["Government", "Domestic", "Overseas", "Prestigious"]
    }
  },
  {
    id: "kip-kuliah",
    studyLocation: ["domestic"],
    name: {
      id: "KIP Kuliah Merdeka",
      en: "KIP Kuliah Merdeka"
    },
    provider: {
      id: "Puslapdik Kemendikbudristek",
      en: "Puslapdik MoECRT"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan Biaya Kuliah 100% (dibayarkan langsung ke Perguruan Tinggi)",
        "Uang Saku Bulanan (Rp 800.000 - Rp 1.400.000 berdasarkan wilayah)",
        "Gratis biaya seleksi masuk perguruan tinggi (UTBK/SNBP)"
      ],
      en: [
        "100% Tuition Fees (directly paid to University)",
        "Monthly Living Allowance (Rp 800,000 - Rp 1,400,000 based on region)",
        "Free university entrance selection fees (UTBK/SNBP)"
      ]
    },
    requirements: {
      id: [
        "Lulusan SMA/SMK/MA dari tahun berjalan atau maksimal 2 tahun sebelumnya",
        "Lolos seleksi masuk PTN/PTS (SNBP, SNBT, atau Mandiri) pada prodi terakreditasi",
        "Memiliki Kartu Indonesia Pintar (KIP) atau terdaftar di DTKS (keluarga kurang mampu)",
        "Menunjukkan potensi akademik meskipun memiliki keterbatasan ekonomi"
      ],
      en: [
        "High school graduates (SMA/SMK/MA) from the current year or max 2 years prior",
        "Passed university admission selection (SNBP, SNBT, or Mandiri) in accredited study programs",
        "Has Kartu Indonesia Pintar (KIP) or comes from a household registered in DTKS (low-income)",
        "Demonstrates academic potential despite economic limitations"
      ]
    },
    status: "open",
    deadline: "2026-10-31",
    applicationUrl: "https://kip-kuliah.kemdikbud.go.id/",
    description: {
      id: "Program pemerintah untuk membantu lulusan SMA sederajat yang memiliki potensi akademik tinggi namun terkendala finansial untuk menempuh pendidikan tinggi jenjang S1 atau Diploma.",
      en: "A government program to assist high school graduates with high academic potential who face financial constraints in pursuing higher education for Bachelor (S1) or Diploma programs."
    },
    tags: {
      id: ["Pemerintah", "Dalam Negeri", "Bantuan Sosial"],
      en: ["Government", "Domestic", "Underprivileged"]
    }
  },
  {
    id: "djarum-beasiswa-plus",
    studyLocation: ["domestic"],
    name: {
      id: "Djarum Beasiswa Plus",
      en: "Djarum Beasiswa Plus"
    },
    provider: {
      id: "Djarum Foundation",
      en: "Djarum Foundation"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Uang Saku Bulanan Rp 1.000.000 selama 1 tahun",
        "Pelatihan Pembangunan Karakter",
        "Lokakarya Pengembangan Kepemimpinan",
        "Seminar Wawasan Kebangsaan",
        "Tantangan Kompetisi & Jaringan Komunitas"
      ],
      en: [
        "Monthly Financial Assistance of Rp 1,000,000 for 1 year",
        "Character Building Training",
        "Leadership Development Workshops",
        "Nation Building Seminars",
        "Competition Challenges & Community Networking"
      ]
    },
    requirements: {
      id: [
        "Sedang menempuh Semester 4 jenjang Sarjana (S1)",
        "IPK minimal 3.00 hingga semester 3",
        "Aktif berorganisasi atau mengikuti kegiatan ekstrakurikuler",
        "Tidak sedang menerima beasiswa lain"
      ],
      en: [
        "Currently in 4th Semester of a Bachelor (S1) program",
        "Minimum GPA of 3.00 up to the 3rd Semester",
        "Active in student organizations or extracurricular activities",
        "Not currently receiving other scholarships"
      ]
    },
    status: "soon",
    deadline: "2026-05-30",
    applicationUrl: "https://djarumbeasiswaplus.org/",
    description: {
      id: "Beasiswa swasta bergengsi yang berfokus pada pelatihan soft skills di samping bantuan finansial. Bertujuan mencetak calon pemimpin masa depan Indonesia.",
      en: "A highly prestigious private scholarship that focuses on soft skills training alongside financial assistance. It aims to prepare the next generation of visionary leaders for Indonesia."
    },
    tags: {
      id: ["Yayasan Swasta", "Soft Skills", "Kepemimpinan"],
      en: ["Private Foundation", "Soft Skills", "Leadership"]
    }
  },
  {
    id: "beasiswa-unggulan",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Unggulan",
      en: "Beasiswa Unggulan"
    },
    provider: {
      id: "Kementerian Pendidikan dan Kebudayaan",
      en: "Ministry of Education and Culture"
    },
    degreeLevels: ["bachelor", "master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya Kuliah Penuh (UKT/SPP)",
        "Biaya Hidup Bulanan",
        "Bantuan Biaya Buku"
      ],
      en: [
        "Tuition Fees (UKT/SPP)",
        "Living Allowance",
        "Book Allowance"
      ]
    },
    requirements: {
      id: [
        "Prestasi unggul (akademik/non-akademik) tingkat regional, nasional, atau internasional",
        "Surat rekomendasi dari sekolah atau universitas",
        "Proposal rencana studi",
        "Esai tentang 'Kontribusiku untuk Indonesia' (minimal 1000 kata)"
      ],
      en: [
        "Outstanding achievements (academic/non-academic) at regional, national, or international levels",
        "Recommendation letter from school or university",
        "Proposal or study plan",
        "Essay on 'My Contribution to Indonesia' (min 1000 words)"
      ]
    },
    status: "closed",
    deadline: "2026-08-15",
    applicationUrl: "https://beasiswaunggulan.kemdikbud.go.id/",
    description: {
      id: "Program beasiswa Kemendikbudristek untuk mahasiswa berprestasi Indonesia guna menempuh pendidikan tinggi di PTN maupun PTS dalam negeri.",
      en: "Beasiswa Unggulan is a scholarship program awarded by the Ministry of Education and Culture to outstanding Indonesian students to pursue education in domestic public and private universities."
    },
    tags: {
      id: ["Pemerintah", "Dalam Negeri", "Berprestasi"],
      en: ["Government", "Domestic", "Merit-Based"]
    }
  },
  {
    id: "beasiswa-bakti-bca",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Bakti BCA",
      en: "Bakti BCA Scholarship"
    },
    provider: {
      id: "PT Bank Central Asia Tbk",
      en: "PT Bank Central Asia Tbk"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan UKT/SPP selama 2 semester",
        "Bantuan biaya hidup bulanan",
        "Pelatihan kepemimpinan dan literasi keuangan eksklusif",
        "Mentoring persiapan karir oleh profesional BCA"
      ],
      en: [
        "Tuition Fee Assistance (UKT/SPP) for 2 semesters",
        "Financial aid for living expenses",
        "Exclusive leadership development and financial literacy programs",
        "Career preparation mentoring from BCA professionals"
      ]
    },
    requirements: {
      id: [
        "WNI, mahasiswa S1 aktif yang memasuki semester 5",
        "IPK minimal 3.00",
        "Surat rekomendasi dari Dekan / Kemahasiswaan",
        "Lolos tes seleksi (akademik, psikotes, dan wawancara)"
      ],
      en: [
        "Indonesian Citizen, undergraduate student (S1) entering 5th Semester",
        "Minimum GPA of 3.00",
        "Recommendation from Faculty / Student Affairs",
        "Pass the selection tests (academic, psychological, and interview)"
      ]
    },
    status: "closed",
    deadline: "2026-09-12",
    applicationUrl: "https://www.bca.co.id/en/tentang-bca/Corporate-Social-Responsibility/bakti-bca/bakti-pendidikan",
    description: {
      id: "Program CSR Bakti BCA untuk mendukung mahasiswa S1 berprestasi dengan bantuan finansial dan program pengembangan profesional guna memasuki dunia kerja.",
      en: "BCA Corporate Social Responsibility program supporting talented undergraduate students with both financial assistance and professional development programs to gear them up for the future workplace."
    },
    tags: {
      id: ["Perusahaan", "Dalam Negeri", "Karir"],
      en: ["Corporate", "Domestic", "Career Prep"]
    }
  },
  {
    id: "beasiswa-indonesia-bangkit",
    studyLocation: ["domestic", "overseas"],
    name: {
      id: "Beasiswa Indonesia Bangkit (BIB)",
      en: "Beasiswa Indonesia Bangkit (BIB)"
    },
    provider: {
      id: "Kementerian Agama (Kemenag) & LPDP",
      en: "Ministry of Religious Affairs (Kemenag) & LPDP"
    },
    degreeLevels: ["bachelor", "master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya Kuliah Penuh",
        "Biaya Hidup Bulanan",
        "Tunjangan Buku & Penelitian",
        "Tiket Pesawat & Visa (Luar Negeri)"
      ],
      en: [
        "Full Tuition Fees",
        "Living Allowance",
        "Settlement & Transport Allowance",
        "Book & Research Grant Support"
      ]
    },
    requirements: {
      id: [
        "Alumni Pondok Pesantren, Madrasah, atau lembaga pendidikan di bawah Kemenag",
        "Usia maksimal: 25 (S1), 35 (S2), 40 (S3)",
        "Memenuhi standar nilai/IPK minimal untuk masing-masing jenjang",
        "Komitmen kuat terhadap nilai-nilai Islam moderat dan pembangunan bangsa"
      ],
      en: [
        "Alumni of Islamic Boarding Schools (Pesantren), Madrasah, or Kemenag educational institutions",
        "Maximum age: 25 for S1, 35 for S2, 40 for S3",
        "Meets the minimum grade/GPA requirement for each program level",
        "Strong commitment to moderate Islamic values and contribution to nation-building"
      ]
    },
    status: "open",
    deadline: "2026-07-10",
    applicationUrl: "https://beasiswa.kemenag.go.id/",
    description: {
      id: "Program beasiswa kolaborasi Kemenag dan LPDP untuk membiayai studi formal jenjang S1, S2, dan S3 baik di dalam maupun di luar negeri.",
      en: "A collaborative prestige scholarship between Ministry of Religious Affairs and LPDP targeting students, teachers, lecturers, and academic staff under Kemenag environment to pursue degrees domestic or overseas."
    },
    tags: {
      id: ["Pemerintah", "Kemenag", "Pendidikan Agama", "Luar Negeri"],
      en: ["Government", "Kemenag", "Religious Education", "Domestic", "Overseas"]
    }
  },
  {
    id: "beasiswa-kse",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Karya Salemba Empat (KSE)",
      en: "Karya Salemba Empat (KSE) Scholarship"
    },
    provider: {
      id: "Yayasan Karya Salemba Empat",
      en: "Karya Salemba Empat Foundation"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan biaya hidup bulanan Rp 750.000 selama 1 tahun",
        "Pelatihan kepemimpinan nasional & lokakarya",
        "Pembinaan kewirausahaan & karir",
        "Akses program pengabdian masyarakat KSE"
      ],
      en: [
        "Monthly financial assistance of Rp 750,000 for 1 year",
        "National Leadership Camp & workshops",
        "Entrepreneurship & career coaching",
        "Access to KSE community programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa S1 aktif minimal memasuki semester 2",
        "Tidak sedang menerima beasiswa lain",
        "Memiliki jiwa sosial tinggi dan aktif organisasi",
        "Mengirimkan vlog (1-2 menit) dan esai mengenai rencana hidup"
      ],
      en: [
        "Enrolled undergraduate student (S1) min. entering 2nd Semester",
        "Not currently receiving other scholarships",
        "Strong social concern and active in organizations",
        "Submit a video vlog (1-2 mins) and essay about goals"
      ]
    },
    status: "open",
    deadline: "2026-08-30",
    applicationUrl: "https://beasiswa.or.id/",
    description: {
      id: "Menyediakan bantuan finansial dan pelatihan kepemimpinan untuk mahasiswa S1 di berbagai PTN di seluruh Indonesia guna membentuk pemimpin berjiwa patriotik.",
      en: "Provides financial aid and leadership camps to potential undergraduate students in various state universities across Indonesia to form outstanding, patriotic future leaders."
    },
    tags: {
      id: ["Yayasan Swasta", "Dalam Negeri", "Sosial", "Kepemimpinan"],
      en: ["Private Foundation", "Domestic", "Social Impact", "Leadership"]
    }
  },
  {
    id: "tanoto-teladan",
    studyLocation: ["domestic"],
    name: {
      id: "Tanoto Foundation Program TELADAN",
      en: "Tanoto Foundation TELADAN Program"
    },
    provider: {
      id: "Tanoto Foundation",
      en: "Tanoto Foundation"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan biaya kuliah penuh (UKT) dari semester 2 hingga 8",
        "Tunjangan biaya hidup bulanan",
        "Program pengembangan kepemimpinan terstruktur",
        "Kesempatan magang global & dana proyek sosial"
      ],
      en: [
        "Full tuition fees subsidy from Semester 2 to 8",
        "Monthly living allowance support",
        "Structured leadership training programs",
        "Global study tour & community project funds"
      ]
    },
    requirements: {
      id: [
        "WNI, mahasiswa semester pertama di universitas mitra (UI, ITB, UGM, IPB, UB, dll)",
        "Rata-rata nilai rapor kelas XII minimal 8.0 skala 10",
        "Potensi kepemimpinan kuat dan aktif berorganisasi",
        "Bersedia mengikuti seluruh siklus program TELADAN selama 3.5 tahun"
      ],
      en: [
        "Indonesian Citizen, first-semester student at a partner university (UI, ITB, UGM, IPB, UB, etc.)",
        "High school average report card grade in Class XII min 8.0 / 10",
        "Strong leadership potential and active in organizations",
        "Willing to undergo the 3.5 years of TELADAN program cycle"
      ]
    },
    status: "open",
    deadline: "2026-09-07",
    applicationUrl: "https://www.tanotofoundation.org/",
    description: {
      id: "Program beasiswa komprehensif yang dirancang untuk membina mahasiswa berprestasi menjadi pemimpin masa depan yang unggul dan bertanggung jawab sosial.",
      en: "A comprehensive scholarship program that transforms talented Indonesian undergraduate students into future leaders who are academically excellent and socially responsible."
    },
    tags: {
      id: ["Yayasan Swasta", "Dalam Negeri", "Kepemimpinan", "Bergengsi"],
      en: ["Private Foundation", "Domestic", "Leadership", "Prestigious"]
    }
  },
  {
    id: "beasiswa-bi",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Bank Indonesia",
      en: "Bank Indonesia Scholarship"
    },
    provider: {
      id: "Bank Indonesia (Bank Sentral)",
      en: "Bank Indonesia (Central Bank)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan finansial bulanan untuk biaya studi",
        "Keanggotaan komunitas mahasiswa penerima beasiswa (GenBI)",
        "Pelatihan kepemimpinan dan literasi keuangan"
      ],
      en: [
        "Monthly financial aid for study expenses",
        "Membership in Generasi Baru Indonesia (GenBI) community",
        "Leadership training and financial literacy workshops"
      ]
    },
    requirements: {
      id: [
        "Menyelesaikan minimal 40 SKS atau sedang di semester 4",
        "IPK minimal 3.00 pada skala 4.00",
        "Tidak sedang menerima beasiswa lain",
        "Menyerahkan bukti aktif berorganisasi"
      ],
      en: [
        "Completed minimum 40 credits (SKS) or in 4th Semester",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Not receiving other scholarships",
        "Submit letter of active organization participation"
      ]
    },
    status: "open",
    deadline: "2026-10-15",
    applicationUrl: "https://www.bi.go.id/",
    description: {
      id: "Beasiswa dari Bank Indonesia untuk mahasiswa S1 aktif guna melatih soft skills dan kontribusi sosial melalui wadah GenBI.",
      en: "A prestigious scholarship from the Central Bank of Indonesia to support undergraduate students with leadership coaching and active community projects via GenBI."
    },
    tags: {
      id: ["Pemerintah", "Dalam Negeri", "Finansial", "Kepemimpinan"],
      en: ["Government", "Domestic", "Finance", "Leadership"]
    }
  },
  {
    id: "beasiswa-jfls",
    studyLocation: ["domestic"],
    name: {
      id: "Jabar Future Leaders Scholarship (JFLS)",
      en: "Jabar Future Leaders Scholarship (JFLS)"
    },
    provider: {
      id: "Pemerintah Provinsi Jawa Barat",
      en: "West Java Provincial Government"
    },
    degreeLevels: ["bachelor", "master", "doctoral"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan biaya kuliah (UKT) penuh/sebagian di PTN/PTS mitra",
        "Kelas pengembangan kepemimpinan dan proyek sosial"
      ],
      en: [
        "Tuition fee assistance (UKT) for public/private universities",
        "Leadership development courses and community service networking"
      ]
    },
    requirements: {
      id: [
        "Warga Jawa Barat (dibuktikan dengan KTP & Kartu Keluarga Jawa Barat)",
        "Terdaftar sebagai mahasiswa aktif di universitas mitra di Jabar",
        "IPK minimal: 3.00 (S1), 3.25 (S2/S3)",
        "Memiliki prestasi akademik/non-akademik di tingkat regional/nasional"
      ],
      en: [
        "Resident of West Java (evidenced by KTP and Family Card Jabar)",
        "Enrolled in a partner university in West Java province",
        "Minimum GPA: 3.00 (undergrad), 3.25 (master/doctoral)",
        "Academic or non-academic achievements at regional/national levels"
      ]
    },
    status: "open",
    deadline: "2026-08-20",
    applicationUrl: "https://jfls.jabarprov.go.id/",
    description: {
      id: "Program beasiswa Pemprov Jawa Barat untuk menyiapkan generasi muda Jabar sebagai calon pemimpin masa depan.",
      en: "A regional government scholarship by West Java Province to prepare youth leaders by easing access to higher education within Java Barat."
    },
    tags: {
      id: ["Pemerintah", "Regional", "Dalam Negeri"],
      en: ["Government", "Regional", "Domestic"]
    }
  },
  {
    id: "beasiswa-vdmi",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Van Deventer-Maas Indonesia (VDMI)",
      en: "Van Deventer-Maas Indonesia (VDMI) Scholarship"
    },
    provider: {
      id: "Van Deventer-Maas Stichting",
      en: "Van Deventer-Maas Stichting"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan uang saku Rp 750.000 per bulan",
        "Bantuan biaya persiapan tes TOEFL",
        "Lokakarya kepemimpinan tahunan",
        "Kesempatan hibah proyek sosial alumni"
      ],
      en: [
        "Monthly allowance of Rp 750,000 paid directly",
        "One-time TOEFL preparation support",
        "Annual Leadership & Capacity Building workshops",
        "Social project challenge grants"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1/D3/D4 di berbagai kampus mitra di Indonesia",
        "IPK minimal 3.00",
        "Berasal dari latar belakang keluarga prasejahtera",
        "Komitmen untuk berpartisipasi aktif dalam jejaring alumni VDMI"
      ],
      en: [
        "Enrolled in S1 or D3/D4 programs at partner campuses",
        "Minimum GPA of 3.00",
        "Comes from an economically disadvantaged family background",
        "Willing to join and contribute to the VDMI alumni community"
      ]
    },
    status: "open",
    deadline: "2026-03-10",
    applicationUrl: "https://vdms-scholarship.org/",
    description: {
      id: "Yayasan asal Belanda mendanai beasiswa bulanan dan pembinaan karakter bagi mahasiswa prasejahtera di lebih dari 30 universitas di Indonesia.",
      en: "A Dutch foundation program providing monthly allowance and leadership growth to Indonesian students from underprivileged families in more than 30 Indonesian universities."
    },
    tags: {
      id: ["Yayasan Internasional", "Dalam Negeri", "Bantuan Sosial"],
      en: ["International Foundation", "Domestic", "Underprivileged"]
    }
  },
  {
    id: "sea-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Sea Scholarship Indonesia",
      en: "Sea Scholarship Indonesia"
    },
    provider: {
      id: "Sea Group (Shopee, Garena, SeaMoney)",
      en: "Sea Group (Shopee, Garena, SeaMoney)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Subsidi biaya kuliah (UKT) penuh 100% selama 4 tahun",
        "Uang saku bulanan",
        "Prioritas magang di Shopee, Garena, dan SeaMoney",
        "Program pengembangan diri karir"
      ],
      en: [
        "100% Tuition fees fully paid for 4 years",
        "Monthly living stipend allowance",
        "Priority internships at Garena, Shopee, or SeaMoney",
        "Career developmental programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa tahun pertama/kedua di universitas mitra",
        "IPK minimal 3.50 dan stabil selama kuliah",
        "Kemampuan berpikir kritis dan analitis yang kuat",
        "Lolos asesmen tertulis dan wawancara"
      ],
      en: [
        "First or second-year undergraduate student at a partner campus",
        "GPA min 3.50, maintaining it throughout study",
        "Strong analytical and critical thinking skills",
        "Pass the online assessment and interview tests"
      ]
    },
    status: "soon",
    deadline: "2026-09-15",
    applicationUrl: "https://scholarship.seagroup.com/",
    description: {
      id: "Beasiswa S1 penuh dari perusahaan teknologi Sea Group. Menawarkan jalur magang di Shopee/Garena serta tunjangan bulanan.",
      en: "A full undergraduate scholarship provided by global tech firm Sea Group. Includes internship pathways to Shopee and Garena, and monthly allowance."
    },
    tags: {
      id: ["Perusahaan", "Dalam Negeri", "Teknologi", "Karir"],
      en: ["Corporate", "Domestic", "Tech", "Career Prep"]
    }
  },
  {
    id: "fulbright-master",
    studyLocation: ["overseas"],
    name: {
      id: "Fulbright Master's Degree Program",
      en: "Fulbright Master's Degree Program"
    },
    provider: {
      id: "AMINEF (Pemerintah AS)",
      en: "AMINEF (US Government)"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Pembiayaan kuliah penuh (hingga 2 tahun)",
        "Uang saku bulanan untuk biaya hidup",
        "Tiket pesawat internasional pulang-pergi",
        "Asuransi kesehatan dan kecelakaan",
        "Sponsor visa J-1 & program orientasi"
      ],
      en: [
        "Tuition fees coverage (up to 2 years)",
        "Monthly living stipend",
        "Round-trip international flight ticket",
        "Health & accident insurance",
        "J-1 visa sponsorship & orientation"
      ]
    },
    requirements: {
      id: [
        "WNI, memegang gelar Sarjana (S1)",
        "IPK minimal 3.00 pada skala 4.00",
        "Sertifikat Bahasa Inggris: TOEFL iBT min 80 atau IELTS 6.5",
        "Berkomitmen untuk kembali ke Indonesia setelah lulus",
        "Memiliki potensi kepemimpinan dan aktif berpartisipasi sosial"
      ],
      en: [
        "Indonesian Citizen, holding a Bachelor's degree (S1)",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "English Proficiency: TOEFL iBT min 80 or IELTS 6.5",
        "Committed to return to Indonesia upon completion of studies",
        "Demonstrate leadership potential and active social contribution"
      ]
    },
    status: "open",
    deadline: "2026-02-15",
    applicationUrl: "https://www.aminef.or.id/",
    description: {
      id: "Beasiswa penuh prestisius yang didanai pemerintah AS bagi lulusan S1 Indonesia untuk meraih gelar Master di universitas-universitas Amerika Serikat.",
      en: "A prestigious scholarship program funded by the US government for outstanding Indonesian graduates to pursue master degrees at top-tier universities in the United States."
    },
    tags: {
      id: ["Pemerintah", "Amerika Serikat", "Luar Negeri", "Bergengsi"],
      en: ["Government", "US", "Overseas", "Prestigious"]
    }
  },
  {
    id: "chevening-uk",
    studyLocation: ["overseas"],
    name: {
      id: "Chevening Scholarship (Pemerintah Inggris)",
      en: "Chevening Scholarship (UK Government)"
    },
    provider: {
      id: "Pemerintah Inggris (FCDO)",
      en: "United Kingdom Government (FCDO)"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah universitas penuh (dengan batas standar)",
        "Uang saku bulanan untuk biaya hidup",
        "Tiket pesawat internasional pulang-pergi ke Inggris",
        "Tunjangan kedatangan dan kepulangan",
        "Biaya pengurusan satu kali visa"
      ],
      en: [
        "Full university tuition fees (with standard limits)",
        "Monthly living stipend",
        "Round-trip airfares to/from the UK",
        "Arrival and homeward departure allowances",
        "Cost of one visa application"
      ]
    },
    requirements: {
      id: [
        "Memiliki gelar S1 untuk mendaftar kuliah pascasarjana",
        "Memiliki minimal 2 tahun (atau 2.800 jam) pengalaman kerja",
        "Mendaftar ke tiga pilihan program studi universitas Inggris yang berbeda",
        "Kembali ke Indonesia minimal selama dua tahun setelah lulus"
      ],
      en: [
        "Hold an undergraduate degree to enter a postgraduate course",
        "Have at least 2 years (or 2,800 hours) of work experience",
        "Apply to three different eligible UK university courses",
        "Return to Indonesia for a minimum of two years after study"
      ]
    },
    status: "soon",
    deadline: "2026-11-05",
    applicationUrl: "https://www.chevening.org/",
    description: {
      id: "Beasiswa global pemerintah Inggris untuk mendanai kuliah S1/S2 satu tahun di UK bagi calon pemimpin masa depan.",
      en: "The UK government’s global scholarship program. Offers unique opportunities for future leaders and influencers to study a one-year Master degree in the UK."
    },
    tags: {
      id: ["Pemerintah", "Inggris", "Luar Negeri", "Kepemimpinan", "Bergengsi"],
      en: ["Government", "UK", "Overseas", "Leadership", "Prestigious"]
    }
  },
  {
    id: "aas-australia",
    studyLocation: ["overseas"],
    name: {
      id: "Australia Awards Scholarships (AAS)",
      en: "Australia Awards Scholarships (AAS)"
    },
    provider: {
      id: "Pemerintah Australia (DFAT)",
      en: "Australian Government (DFAT)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Pelatihan Bahasa Inggris sebelum keberangkatan (ELT) di Indonesia",
        "Uang saku biaya hidup & tunjangan kedatangan",
        "Biaya kuliah penuh 100%",
        "Asuransi Kesehatan Pelajar Luar Negeri (OSHC)",
        "Tiket pesawat internasional pulang-pergi"
      ],
      en: [
        "Pre-departure English training (ELT) in Indonesia",
        "Full tuition fees payment",
        "Establishment & monthly living contribution",
        "Overseas Student Health Cover (OSHC)",
        "Round-trip airfares"
      ]
    },
    requirements: {
      id: [
        "WNI, memegang gelar S1 (untuk mendaftar S2) atau S2 (untuk mendaftar S3) yang relevan",
        "IPK minimal: 2.90 (S2) atau 3.00 (S3)",
        "Sertifikat IELTS 6.0 (S2) atau 6.5 (S3) atau TOEFL/PTE yang setara",
        "Kembali ke Indonesia dan berkontribusi di sektor prioritas pembangunan"
      ],
      en: [
        "Indonesian citizen, holding a relevant bachelor (for S2) or master (for S3) degree",
        "GPA min 2.90 (S2) or 3.00 (S3)",
        "IELTS 6.0 (S2) or 6.5 (S3) or equivalent TOEFL iBT / PTE Academic",
        "Return to Indonesia and contribute to priority developmental sectors"
      ]
    },
    status: "open",
    deadline: "2026-04-30",
    applicationUrl: "https://www.australiaawardsindonesia.org/",
    description: {
      id: "Beasiswa pascasarjana jangka panjang dari pemerintah Australia bagi warga negara Indonesia guna memperkuat kemitraan bilateral.",
      en: "Long-term scholarships funded by the Australian Government for Indonesian citizens to study postgraduate programs at Australian universities."
    },
    tags: {
      id: ["Pemerintah", "Australia", "Luar Negeri", "Pembangunan"],
      en: ["Government", "Australia", "Overseas", "Development"]
    }
  },
  {
    id: "mext-embassy",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa MEXT Jepang",
      en: "MEXT Research Students Scholarship"
    },
    provider: {
      id: "Pemerintah Jepang (Monbukagakusho)",
      en: "Japanese Government (Monbukagakusho)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh 100% dan biaya ujian masuk",
        "Uang saku bulanan sekitar 143.000 JPY",
        "Tiket pesawat internasional kelas ekonomi pulang-pergi",
        "Sekolah persiapan bahasa Jepang intensif selama 6 bulan"
      ],
      en: [
        "100% tuition fees and entrance exams costs",
        "Monthly living allowance of approx. 143,000 JPY",
        "Round-trip international flight ticket",
        "6-month Japanese language preparatory course"
      ]
    },
    requirements: {
      id: [
        "WNI, usia di bawah 35 tahun pada tanggal keberangkatan",
        "IPK minimal 3.20 untuk lulusan S1 (daftar S2) atau S2 (daftar Ph.D.)",
        "Nilai TOEFL ITP 543 / IELTS 5.5 atau JLPT minimal level N4",
        "Menyerahkan proposal penelitian yang matang sesuai bidang studi"
      ],
      en: [
        "Indonesian Citizen, under 35 years old at departure date",
        "Holding S1 (for Master) or S2 (for Ph.D.) degree with min GPA 3.20",
        "English score TOEFL ITP 543 / IELTS 5.5 or JLPT min N4 level",
        "Submit a solid research proposal related to previous studies"
      ]
    },
    status: "open",
    deadline: "2026-05-15",
    applicationUrl: "https://www.id.emb-japan.go.id/",
    description: {
      id: "Beasiswa penuh dari Kementerian Pendidikan Jepang untuk mahasiswa pascasarjana melakukan penelitian ilmiah dan perkuliahan di Jepang.",
      en: "A prestigious full scholarship by the Japanese Government for postgraduates to conduct research and earn degrees at universities in Japan."
    },
    tags: {
      id: ["Pemerintah", "Jepang", "Luar Negeri", "Penelitian"],
      en: ["Government", "Japan", "Overseas", "Research"]
    }
  },
  {
    id: "gks-graduate",
    studyLocation: ["overseas"],
    name: {
      id: "Global Korea Scholarship (GKS)",
      en: "Global Korea Scholarship (GKS)"
    },
    provider: {
      id: "NIIED (Pemerintah Korea Selatan)",
      en: "National Institute for International Education (NIIED)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Tiket pesawat pulang-pergi",
        "Bantuan biaya kuliah penuh & tunjangan kedatangan",
        "Uang saku bulanan KRW 1.000.000",
        "Kelas bahasa Korea intensif selama 1 tahun",
        "Asuransi medis & hibah dana penelitian"
      ],
      en: [
        "Round-trip airfare ticket",
        "Full tuition fees & settlement allowance",
        "Monthly stipend (KRW 1,000,000)",
        "1 year intensive Korean language program fees",
        "Medical insurance & research grants support"
      ]
    },
    requirements: {
      id: [
        "Gelar S1 (untuk pendaftar S2) atau S2 (untuk pendaftar Ph.D.), usia maks 40 tahun",
        "Rata-rata IPK kumulatif (CGPA) minimal 80% dari jenjang sebelumnya",
        "Lolos pemeriksaan kesehatan fisik dan mental untuk studi luar negeri",
        "Sertifikat TOPIK atau kemampuan bahasa Inggris (opsional, diutamakan)"
      ],
      en: [
        "Hold S1 (for Master's) or S2 (for Doctoral) degree, max age 40",
        "Cumulative GPA (CGPA) of 80% or higher from prior studies",
        "Medical clearance to study abroad",
        "TOPIK level or English proficiency certificate (optional but preferred)"
      ]
    },
    status: "closed",
    deadline: "2026-03-10",
    applicationUrl: "https://www.studyinkorea.go.kr/",
    description: {
      id: "Beasiswa pemerintah Korsel untuk memberikan kesempatan kuliah pascasarjana bagi mahasiswa asing guna mempromosikan persahabatan global.",
      en: "South Korean Government scholarship offering international students opportunities to study postgraduate degrees at Korean higher education institutions."
    },
    tags: {
      id: ["Pemerintah", "Korea Selatan", "Luar Negeri", "Bahasa"],
      en: ["Government", "South Korea", "Overseas", "Language Study"]
    }
  },
  {
    id: "daad-epos",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa DAAD EPOS Jerman",
      en: "DAAD EPOS Postgraduate Scholarship"
    },
    provider: {
      id: "Pemerintah Jerman (DAAD)",
      en: "German Academic Exchange Service (DAAD)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang saku bulanan 934€ (Master) atau 1.300€ (Doktor)",
        "Asuransi kesehatan, kecelakaan, dan tanggung jawab hukum pribadi",
        "Tunjangan perjalanan pulang-pergi",
        "Kursus persiapan bahasa Jerman"
      ],
      en: [
        "Monthly allowance of 934€ (Master) or 1,300€ (Doctoral)",
        "Health, accident, and personal liability insurance",
        "Travel allowance contribution",
        "German language course support"
      ]
    },
    requirements: {
      id: [
        "Gelar Sarjana S1 (usia ijazah maksimal 6 tahun)",
        "Pengalaman kerja profesional yang relevan minimal 2 tahun",
        "Terdaftar pada program studi EPOS yang berkaitan dengan pembangunan",
        "Kemampuan bahasa Inggris (TOEFL/IELTS) atau Jerman (DSH/TestDaF) tinggi"
      ],
      en: [
        "Holds a Bachelor's degree (not older than 6 years)",
        "At least 2 years of relevant professional work experience",
        "Enrolled in development-related postgraduate courses (EPOS)",
        "High English (TOEFL/IELTS) or German (DSH/TestDaF) proficiency"
      ]
    },
    status: "open",
    deadline: "2026-08-31",
    applicationUrl: "https://www.daad.de/",
    description: {
      id: "Program beasiswa pemerintah Jerman bagi para profesional di negara berkembang untuk menempuh program studi pembangunan.",
      en: "German Government scholarship program for professionals from developing countries to pursue development-related postgraduate courses at German universities."
    },
    tags: {
      id: ["Pemerintah", "Jerman", "Luar Negeri", "Profesional"],
      en: ["Government", "Germany", "Overseas", "Development", "Professional"]
    }
  },
  {
    id: "erasmus-mundus",
    studyLocation: ["overseas"],
    name: {
      id: "Erasmus Mundus Joint Masters",
      en: "Erasmus Mundus Joint Masters"
    },
    provider: {
      id: "Komisi Uni Eropa",
      en: "European Union Commission"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh 100% ditanggung",
        "Uang saku bulanan 1.400€ untuk biaya hidup (hingga 24 bulan)",
        "Uang saku kedatangan dan transportasi",
        "Asuransi medis komprehensif"
      ],
      en: [
        "100% course tuition fees coverage",
        "Travel and installation allowances",
        "Monthly stipend of 1,400€ for living expenses (up to 24 months)",
        "Comprehensive medical insurance coverage"
      ]
    },
    requirements: {
      id: [
        "Memegang gelar S1 atau setara di bidang studi yang relevan",
        "Sertifikat bahasa Inggris (IELTS 6.5+ atau TOEFL iBT 90+)",
        "Mendaftar ke program kuliah EMJM spesifik yang didukung Uni Eropa",
        "Wajib menjalani studi minimal di dua negara Eropa yang berbeda"
      ],
      en: [
        "Hold a Bachelor's degree (S1) or equivalent in relevant fields",
        "English Proficiency (IELTS 6.5+ or TOEFL iBT 90+)",
        "Apply to specific EMJM courses (jointly run by European universities)",
        "Must study in at least two different European countries"
      ]
    },
    status: "open",
    deadline: "2026-02-15",
    applicationUrl: "https://ec.europa.eu/programmes/erasmus-plus/",
    description: {
      id: "Program kuliah terintegrasi tingkat pascasarjana di berbagai konsorsium universitas Uni Eropa, memberikan gelar ganda atau gabungan.",
      en: "Highly integrated study programs offered by consortia of EU universities, allowing students to earn dual or joint degrees across Europe."
    },
    tags: {
      id: ["Pemerintah", "Eropa", "Luar Negeri", "Gelar Ganda"],
      en: ["Government", "Europe", "Overseas", "Joint Degree"]
    }
  },
  {
    id: "eiffel-excellence",
    studyLocation: ["overseas"],
    name: {
      id: "Eiffel Excellence Scholarship Program",
      en: "Eiffel Excellence Scholarship Program"
    },
    provider: {
      id: "Kementerian Luar Negeri Prancis",
      en: "French Ministry for Europe and Foreign Affairs"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang saku bulanan (1.181€ untuk Master, 1.800€ untuk Doktor)",
        "Satu tiket penerbangan pulang-pergi kelas ekonomi",
        "Bantuan perumahan lokal & asuransi transportasi",
        "Jaminan sosial dan layanan medis dasar"
      ],
      en: [
        "Monthly stipend (1,181€ for master, 1,800€ for doctoral)",
        "One round-trip international flight ticket",
        "Local transit costs & housing subsidy support",
        "Social security and healthcare coverage"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Prancis, usia maks 25 (Master) atau 30 (Ph.D.)",
        "Wajib dicalonkan (nomination) oleh perguruan tinggi di Prancis",
        "Terdaftar di bidang prioritas: Teknik, Sains, Hukum, atau Ilmu Politik"
      ],
      en: [
        "Non-French nationality, max age 25 for Master, 30 for Ph.D.",
        "Must be nominated by a French higher education institution",
        "Enrolled in fields: Engineering, Science, Law, Economics, or Political Science"
      ]
    },
    status: "closed",
    deadline: "2026-01-10",
    applicationUrl: "https://www.campusfrance.org/",
    description: {
      id: "Program pemerintah Prancis untuk memikat talenta internasional terbaik menempuh studi Master dan PhD di Prancis.",
      en: "French government program to attract top international students to pursue Master's and PhD programs in French universities."
    },
    tags: {
      id: ["Pemerintah", "Prancis", "Luar Negeri", "Bergengsi"],
      en: ["Government", "France", "Overseas", "Prestigious"]
    }
  },
  {
    id: "gates-cambridge",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Gates Cambridge",
      en: "Gates Cambridge Scholarship"
    },
    provider: {
      id: "Bill & Melinda Gates Foundation",
      en: "Bill & Melinda Gates Foundation"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya Kuliah Universitas (Composition Fee) di Cambridge",
        "Uang saku biaya hidup tahunan sekitar £20.000",
        "Satu tiket pesawat internasional pulang-pergi kelas ekonomi",
        "Biaya pembuatan visa dan biaya kesehatan NHS",
        "Bantuan pendanaan akademik tambahan"
      ],
      en: [
        "University Composition Fee at Cambridge University",
        "Monthly maintenance allowance (approx. £20,000 per year)",
        "One round-trip economy airfare",
        "Inbound visa costs & health surcharge",
        "Academic development funding"
      ]
    },
    requirements: {
      id: [
        "Warga negara di luar Inggris Raya (UK)",
        "Mendaftar kuliah pascasarjana penuh waktu (Ph.D. atau Master) di University of Cambridge",
        "Prestasi akademik sangat unggul (IPK mendekati sempurna)",
        "Potensi kepemimpinan dan komitmen kuat meningkatkan kehidupan sesama"
      ],
      en: [
        "Citizen of any country outside the United Kingdom",
        "Apply to pursue full-time postgraduate degree (Ph.D. or Master) at Cambridge",
        "Exceptional academic record, GPA near-perfect or equivalent",
        "Demonstrate leadership potential and commitment to improving lives of others"
      ]
    },
    status: "soon",
    deadline: "2026-10-15",
    applicationUrl: "https://www.gatescambridge.org/",
    description: {
      id: "Salah satu beasiswa internasional paling kompetitif dan bergengsi di dunia untuk menempuh pascasarjana di Cambridge.",
      en: "One of the most competitive international scholarships in the world, enabling outstanding postgraduates to study at the University of Cambridge."
    },
    tags: {
      id: ["Yayasan Swasta", "Inggris", "Luar Negeri", "Akademik"],
      en: ["Private Foundation", "UK", "Overseas", "Academic Excellence"]
    }
  },
  {
    id: "turkiye-burslari",
    studyLocation: ["overseas"],
    name: {
      id: "Türkiye Scholarships (Türkiye Bursları)",
      en: "Türkiye Scholarships (Türkiye Bursları)"
    },
    provider: {
      id: "Pemerintah Turki",
      en: "Government of Turkey"
    },
    degreeLevels: ["bachelor", "master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh dan penempatan universitas",
        "Sekolah persiapan bahasa Turki intensif selama 1 tahun",
        "Asrama gratis untuk tempat tinggal mahasiswa",
        "Uang saku bulanan sesuai jenjang",
        "Tiket pesawat pulang-pergi pertama & asuransi kesehatan"
      ],
      en: [
        "Full university tuition fees and placements",
        "1 year intensive Turkish language course fees",
        "Free university student dormitory housing",
        "Monthly pocket allowance stipend",
        "One round-trip flight ticket and health insurance"
      ]
    },
    requirements: {
      id: [
        "Batasan usia: 21 (S1), 30 (S2), 35 (S3)",
        "IPK/Nilai rata-rata minimal: 70% (S1) atau 75% (S2/S3)",
        "Terbuka untuk semua warga negara asing kecuali warga negara Turki",
        "Bersedia belajar bahasa Turki dan menyelesaikan tahun persiapan"
      ],
      en: [
        "Under age limits: 21 (Bachelor), 30 (Master), 35 (Ph.D.)",
        "GPA min 70% (Bachelor) or 75% (Postgraduate degrees)",
        "Open to citizens of all countries except Turkish citizens",
        "Willing to learn Turkish and complete the language year"
      ]
    },
    status: "closed",
    deadline: "2026-02-20",
    applicationUrl: "https://www.turkiyeburslari.gov.tr/",
    description: {
      id: "Program beasiswa penuh yang didanai pemerintah Turki bagi pelajar internasional untuk meraih gelar studi akademik di Turki.",
      en: "A government-funded international scholarship program for students worldwide to earn undergraduate, master, or doctoral degrees in Turkey."
    },
    tags: {
      id: ["Pemerintah", "Turki", "Luar Negeri", "Bahasa"],
      en: ["Government", "Turkey", "Overseas", "Language Study"]
    }
  },
  {
    id: "singa-singapore",
    studyLocation: ["overseas"],
    name: {
      id: "Singapore International Graduate Award (SINGA)",
      en: "Singapore International Graduate Award (SINGA)"
    },
    provider: {
      id: "A*STAR Singapore",
      en: "Agency for Science, Technology and Research (A*STAR)"
    },
    degreeLevels: ["doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100%",
        "Uang saku bulanan SGD 2.200 - SGD 2.700",
        "Tunjangan kedatangan satu kali sebesar SGD 1.000",
        "Bantuan biaya tiket penerbangan"
      ],
      en: [
        "Full tuition fees waiver",
        "Monthly stipend (SGD 2,200 - SGD 2,700)",
        "One-time settling-in allowance (SGD 1,000)",
        "One-time airfare grant support"
      ]
    },
    requirements: {
      id: [
        "Terbuka bagi lulusan S1/S2 berprestasi dengan minat riset tinggi",
        "Surat rekomendasi akademik yang sangat baik",
        "Fokus riset: Ilmu Biomedis, Komputasi, Fisika, atau Teknik",
        "Kemampuan bahasa Inggris tinggi"
      ],
      en: [
        "Open to all international graduates with a passion for research",
        "Excellent academic reports and reference letters",
        "Research fields: Biomedical Sciences, Computing, Physical Sciences, or Engineering",
        "High English language proficiency"
      ]
    },
    status: "open",
    deadline: "2026-06-01",
    applicationUrl: "https://www.a-star.edu.sg/",
    description: {
      id: "Program kolaborasi A*STAR, NTU, NUS, SUTD, dan SMU untuk mendanai studi PhD sains dan rekayasa di universitas top Singapura.",
      en: "SINGA is a partnership between A*STAR, NTU, NUS, SUTD, and SMU to support PhD studies in science and engineering in Singapore."
    },
    tags: {
      id: ["Pemerintah", "Singapura", "Luar Negeri", "Sains"],
      en: ["Government", "Singapore", "Overseas", "Research", "Science"]
    }
  },
  {
    id: "taiwan-icdf",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa TaiwanICDF",
      en: "TaiwanICDF Higher Education Scholarship"
    },
    provider: {
      id: "Taiwan ICDF Fund",
      en: "Taiwan International Cooperation and Development Fund"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh dan biaya kredit mata kuliah",
        "Satu tiket pesawat pulang-pergi kelas ekonomi",
        "Asrama gratis untuk tinggal mahasiswa",
        "Asuransi kesehatan nasional Taiwan",
        "Uang saku bulanan (NT$15.000 untuk S2, NT$20.000 untuk S3)"
      ],
      en: [
        "Full tuition fees and credits fees coverage",
        "Round-trip economy class flight ticket",
        "Free student dormitory room",
        "National Health Insurance coverage",
        "Monthly allowance (NT$15,000 for S2, NT$20,000 for S3)"
      ]
    },
    requirements: {
      id: [
        "WNI, memegang gelar S1 atau S2",
        "Memenuhi kriteria masuk universitas-universitas mitra di Taiwan",
        "Kemampuan bahasa Inggris yang kuat (TOEFL/IELTS)",
        "Komitmen berkontribusi membangun negara asal setelah lulus"
      ],
      en: [
        "Indonesian Citizen, holding S1 or S2 degree",
        "Satisfy admission criteria of participating universities in Taiwan",
        "High English proficiency (TOEFL/IELTS)",
        "Commit to contribute to national development after return"
      ]
    },
    status: "closed",
    deadline: "2026-03-15",
    applicationUrl: "https://www.icdf.org.tw/",
    description: {
      id: "Program beasiswa penuh ICDF Taiwan untuk mempromosikan kerja sama internasional melalui pendidikan tinggi di universitas terkemuka Taiwan.",
      en: "Full scholarship program by TaiwanICDF to promote human resource development in friendly and developing nations through degrees at top Taiwan universities."
    },
    tags: {
      id: ["Pemerintah", "Taiwan", "Luar Negeri"],
      en: ["Government", "Taiwan", "Overseas"]
    }
  },
  {
    id: "grab-scholar",
    studyLocation: ["domestic"],
    name: {
      id: "Grab Scholar: Program Beasiswa Grab",
      en: "Grab Scholar: Program Beasiswa Grab"
    },
    provider: {
      id: "Grab Indonesia & BenihBaik",
      en: "Grab Indonesia & BenihBaik"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan biaya UKT penuh hingga kelulusan",
        "Bantuan alat perlengkapan pendidikan satu kali"
      ],
      en: [
        "Full tuition fees (UKT) coverage until graduation",
        "One-time educational equipment stipend support"
      ]
    },
    requirements: {
      id: [
        "WNI, mahasiswa baru S1 semester 1 di PTN/PTS mitra",
        "Terbuka untuk anak mitra pengemudi Grab, merchant, atau masyarakat umum",
        "Rata-rata nilai rapor SMA/sederajat minimal 8.0",
        "Memiliki rekam jejak kontribusi sosial atau aktif organisasi"
      ],
      en: [
        "WNI, first-semester undergraduate student (S1) at public or private universities",
        "Open to children of Grab driver partners, merchants, or general public",
        "High school average grades min 8.0 or equivalent",
        "Active social track records or organization work"
      ]
    },
    status: "soon",
    deadline: "2026-07-30",
    applicationUrl: "https://www.grab.com/id/",
    description: {
      id: "Inisiatif CSR Grab Indonesia bekerja sama dengan BenihBaik untuk meringankan akses perguruan tinggi bagi anak-anak keluarga mitra Grab dan publik.",
      en: "Grab Indonesia's CSR initiative in partnership with BenihBaik to provide full higher education funding to talented youth and grab partner families."
    },
    tags: {
      id: ["Perusahaan", "Dalam Negeri", "Sosial"],
      en: ["Corporate", "Domestic", "Social Impact"]
    }
  },
  {
    id: "beasiswa-cimb-niaga",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa CIMB Niaga (Kejar Mimpi)",
      en: "CIMB Niaga Scholarship (Kejar Mimpi)"
    },
    provider: {
      id: "PT Bank CIMB Niaga Tbk",
      en: "PT Bank CIMB Niaga Tbk"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan UKT/SPP kuliah dari semester 5 hingga 8",
        "Fasilitas 1 unit laptop untuk kuliah",
        "Bantuan biaya proyek pendidikan dan skripsi",
        "Pelatihan pembangunan karakter & kepemimpinan"
      ],
      en: [
        "Tuition fees (UKT/SPP) support for Semesters 5 to 8",
        "One personal laptop unit for college work",
        "Educational project and thesis grant support",
        "Exclusive character building & leadership programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa S1 semester 5 aktif, usia maksimal 22 tahun",
        "IPK minimal 3.25",
        "Aktif berorganisasi atau berkomunitas",
        "Lolos tes (CV, esai, dan wawancara)"
      ],
      en: [
        "Undergraduate student (S1) entering 5th Semester, max 22 years old",
        "Minimum GPA of 3.25",
        "Active in student organizations or communities",
        "Pass the selection tests (CV screening, essay, and interview)"
      ]
    },
    status: "open",
    deadline: "2026-09-05",
    applicationUrl: "https://kejarmimpi.id/beasiswacimbniaga/",
    description: {
      id: "Beasiswa swasta korporat oleh CIMB Niaga untuk memfasilitasi kebutuhan dana kuliah dan teknologi bagi mahasiswa S1 tingkat akhir.",
      en: "A private corporate scholarship by CIMB Niaga supporting undergraduate students entering their final two years with tuition fees and tech support."
    },
    tags: {
      id: ["Perusahaan", "Dalam Negeri", "Finansial"],
      en: ["Corporate", "Domestic", "Finance"]
    }
  },
  {
    id: "beasiswa-baznas",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa BAZNAS Cendekia",
      en: "BAZNAS Cendekia Scholarship"
    },
    provider: {
      id: "Badan Amil Zakat Nasional (BAZNAS)",
      en: "National Zakat Board (BAZNAS)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Subsidi UKT maksimal Rp 3.000.000 per semester untuk 4 semester",
        "Pembinaan bulanan oleh mentor BAZNAS nasional",
        "Akses ke jaringan amil zakat nasional"
      ],
      en: [
        "Tuition fees subsidy (UKT) up to Rp 3,000,000 per semester for 4 semesters",
        "Monthly coaching sessions by BAZNAS national mentors",
        "Access to national zakat development network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa S1 aktif semester 5 di perguruan tinggi mitra",
        "IPK minimal 3.00",
        "Aktif berorganisasi kemahasiswaan atau keagamaan",
        "Surat rekomendasi dari takmir masjid / tokoh masyarakat"
      ],
      en: [
        "Enrolled undergraduate student (S1) entering 5th Semester in partner universities",
        "Minimum GPA of 3.00",
        "Active in student organizations or religious groups",
        "Recommendation letter from a mosque or community leader"
      ]
    },
    status: "closed",
    deadline: "2026-07-12",
    applicationUrl: "https://beasiswa.baznas.go.id/",
    description: {
      id: "Program zakat nasional untuk meringankan biaya kuliah dan melatih jiwa kepemimpinan islami bagi mahasiswa S1 akhir.",
      en: "A national zakat program offering tuition subsidies and Islamic leadership mentoring to final-year undergraduate students in Indonesia."
    },
    tags: {
      id: ["Pemerintah", "Dalam Negeri", "Keagamaan", "Mentoring"],
      en: ["Government", "Domestic", "Islamic", "Mentoring"]
    }
  },
  {
    id: "knight-hennessy",
    studyLocation: ["overseas"],
    name: {
      id: "Knight-Hennessy Scholars Program",
      en: "Knight-Hennessy Scholars Program"
    },
    provider: {
      id: "Stanford University",
      en: "Stanford University"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh di Stanford University",
        "Uang saku bulanan (buku, tempat tinggal, makan, transportasi)",
        "Tunjangan perjalanan tahunan",
        "Program kepemimpinan & jejaring global"
      ],
      en: [
        "Full tuition fees coverage at Stanford University",
        "Living stipend (covering academic books, housing, board, transport)",
        "Annual travel grant contribution",
        "Leadership development courses & network"
      ]
    },
    requirements: {
      id: [
        "Mendaftar dan diterima di program pascasarjana di Stanford University",
        "Memegang gelar sarjana yang diperoleh maksimal 7 tahun sebelum pendaftaran",
        "Potensi intelektual luar biasa, jiwa kepemimpinan, dan kepedulian sosial",
        "Menyerahkan surat rekomendasi dan esai khusus"
      ],
      en: [
        "Apply and be admitted to a graduate degree at Stanford University",
        "Holding a bachelor degree earned within 7 years of application",
        "Outstanding intellectual capability, leadership potential, and civic mindset",
        "Submit letters of recommendation and specific essays"
      ]
    },
    status: "soon",
    deadline: "2026-10-09",
    applicationUrl: "https://knight-hennessy.stanford.edu/",
    description: {
      id: "Beasiswa lulusan global di Stanford University untuk menyiapkan pemimpin memecahkan masalah dunia yang rumit.",
      en: "Highly competitive global graduate scholar program at Stanford University, equipping leaders to address complex global challenges."
    },
    tags: {
      id: ["Yayasan Swasta", "Amerika Serikat", "Luar Negeri", "Akademik", "Kepemimpinan"],
      en: ["Private Foundation", "US", "Overseas", "Academic Excellence", "Leadership"]
    }
  },
  {
    id: "schwarzman-scholars",
    studyLocation: ["overseas"],
    name: {
      id: "Schwarzman Scholars",
      en: "Schwarzman Scholars"
    },
    provider: {
      id: "Schwarzman Foundation (Tsinghua University)",
      en: "Schwarzman Foundation (Tsinghua University)"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh dan buku-buku akademik",
        "Akomodasi dan makan gratis di Schwarzman College, Beijing",
        "Tur studi keliling Cina & bantuan perjalanan",
        "Asuransi kesehatan & uang saku bulanan ($4.000)"
      ],
      en: [
        "Full tuition fees and academic materials costs",
        "Free housing and board at Schwarzman College, Beijing",
        "Study tours inside China & travel allowances",
        "Health insurance & personal stipend ($4,000)"
      ]
    },
    requirements: {
      id: [
        "Lulus gelar Sarjana dari semua jurusan, usia 18-28 tahun",
        "Sertifikat kemahiran bahasa Inggris (TOEFL/IELTS)",
        "Prestasi akademik tinggi dan rekam jejak kepemimpinan kuat",
        "Siap menempuh kuliah Master satu tahun bidang Global Affairs"
      ],
      en: [
        "Holding an undergraduate degree in any major, age 18 to 28",
        "Exceptional English language proficiency (TOEFL/IELTS)",
        "High academic records and clear leadership track record",
        "Ready to complete a one-year professional master degree in Global Affairs"
      ]
    },
    status: "soon",
    deadline: "2026-09-20",
    applicationUrl: "https://www.schwarzmanscholars.org/",
    description: {
      id: "Beasiswa S2 penuh satu tahun di Universitas Tsinghua di Beijing untuk mendidik generasi pemimpin global selanjutnya.",
      en: "A fully-funded one-year Master’s degree program at Tsinghua University in Beijing designed to prepare the next generation of global leaders."
    },
    tags: {
      id: ["Yayasan Swasta", "Cina", "Luar Negeri", "Hubungan Global", "Kepemimpinan"],
      en: ["Private Foundation", "China", "Overseas", "Global Affairs", "Leadership"]
    }
  }
,
  {
    id: "commonwealth-uk",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Commonwealth (Inggris)",
      en: "Commonwealth Scholarships (UK)"
    },
    provider: {
      id: "Commonwealth Scholarship Commission (CSC)",
      en: "Commonwealth Scholarship Commission (CSC)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh",
        "Tunjangan hidup bulanan (£1.347 - £1.652)",
        "Tiket pesawat pulang-pergi ke Inggris",
        "Tunjangan kedatangan & hibah tesis"
      ],
      en: [
        "Full tuition fees coverage",
        "Monthly living allowance (£1,347 - £1,652)",
        "Return airfare to the UK",
        "Warm clothing allowance & thesis grant"
      ]
    },
    requirements: {
      id: [
        "Warga negara dari negara anggota Commonwealth",
        "Sudah lulus S1 untuk Master, lulus S2 untuk PhD",
        "Memiliki bukti kemahiran bahasa Inggris (IELTS/TOEFL)",
        "Memiliki proposal penelitian yang solid (untuk PhD)"
      ],
      en: [
        "Citizen of a Commonwealth country",
        "Completed undergraduate for Master, completed master for PhD",
        "English proficiency certification (IELTS/TOEFL)",
        "A strong research proposal (for PhD candidates)"
      ]
    },
    status: "open",
    deadline: "2026-10-15",
    applicationUrl: "https://cscuk.fcdo.gov.uk/scholarships/",
    description: {
      id: "Beasiswa pemerintah Inggris untuk mahasiswa dari negara-negara Commonwealth guna menempuh studi pascasarjana di universitas-universitas Inggris.",
      en: "UK government scholarship program for students from Commonwealth countries to pursue postgraduate studies at UK universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Inggris",
        "Luar Negeri",
        "Bergengsi"
      ],
      en: [
        "Government",
        "UK",
        "Overseas",
        "Prestigious"
      ]
    }
  },
  {
    id: "manaaki-new-zealand",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Manaaki New Zealand",
      en: "Manaaki New Zealand Scholarships"
    },
    provider: {
      id: "Pemerintah Selandia Baru",
      en: "Government of New Zealand"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah penuh",
        "Tunjangan hidup bulanan (NZD 531 per minggu)",
        "Tunjangan kedatangan (NZD 3.000)",
        "Tiket pesawat pulang-pergi & asuransi kesehatan"
      ],
      en: [
        "Full tuition fees coverage",
        "Living allowance (NZD 531 per week)",
        "Establishment allowance (NZD 3,000)",
        "Round-trip airfare & medical insurance"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia berusia 18-39 tahun",
        "IPK minimal 3.00 dari jenjang sebelumnya",
        "Pengalaman kerja minimal 2 tahun (diutamakan)",
        "Sertifikat IELTS minimal 6.5 atau TOEFL iBT 90"
      ],
      en: [
        "Indonesian citizen aged 18 to 39",
        "GPA of at least 3.00 from previous studies",
        "Minimum 2 years of work experience (preferred)",
        "IELTS minimum 6.5 or TOEFL iBT 90"
      ]
    },
    status: "closed",
    deadline: "2026-02-28",
    applicationUrl: "https://www.nzscholarships.govt.nz/",
    description: {
      id: "Beasiswa pemerintah Selandia Baru untuk membantu pembangunan berkelanjutan di negara-negara mitra melalui pendidikan pascasarjana.",
      en: "New Zealand government scholarships supporting sustainable development in partner countries through postgraduate education."
    },
    tags: {
      id: [
        "Pemerintah",
        "Selandia Baru",
        "Luar Negeri",
        "Pembangunan"
      ],
      en: [
        "Government",
        "New Zealand",
        "Overseas",
        "Development"
      ]
    }
  },
  {
    id: "holland-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Holland (Belanda)",
      en: "Holland Scholarship"
    },
    provider: {
      id: "Kementerian Pendidikan, Kebudayaan, dan Sains Belanda",
      en: "Dutch Ministry of Education, Culture and Science"
    },
    degreeLevels: ["bachelor", "master"],
    fundingType: "partial",
    coverage: {
      id: [
        "Hibah studi sekali bayar sebesar €5.000",
        "Kesempatan magang di lembaga Belanda"
      ],
      en: [
        "One-off grant of €5,000 for study support",
        "Internship opportunities in Dutch organizations"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-EEA (termasuk Indonesia)",
        "Mendaftar di program sarjana atau magister penuh waktu di universitas Belanda berpartisipasi",
        "Belum pernah belajar di lembaga pendidikan Belanda sebelumnya",
        "Memenuhi kualifikasi masuk dari universitas tujuan"
      ],
      en: [
        "Non-EEA national (including Indonesia)",
        "Applying for full-time bachelor or master program at participating Dutch universities",
        "Never studied at an educational institution in the Netherlands before",
        "Meet specific entry requirements of target university"
      ]
    },
    status: "soon",
    deadline: "2026-05-01",
    applicationUrl: "https://www.studyinnl.org/finances/holland-scholarship",
    description: {
      id: "Beasiswa parsial dari pemerintah Belanda untuk mahasiswa internasional di luar area ekonomi Eropa untuk tahun pertama studi Sarjana atau Magister.",
      en: "Partial scholarship funded by the Dutch government for international students outside the EEA for their first year of study."
    },
    tags: {
      id: [
        "Pemerintah",
        "Belanda",
        "Luar Negeri",
        "Finansial"
      ],
      en: [
        "Government",
        "Netherlands",
        "Overseas",
        "Financial Support"
      ]
    }
  },
  {
    id: "swedish-institute",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa SI untuk Profesional Global (SISGP)",
      en: "SI Scholarships for Global Professionals"
    },
    provider: {
      id: "Institut Swedia (Pemerintah Swedia)",
      en: "Swedish Institute (Government of Sweden)"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh yang dibayarkan langsung ke universitas Swedia",
        "Tunjangan hidup bulanan sebesar SEK 12.000",
        "Hibah perjalanan sekali bayar SEK 15.000",
        "Asuransi kesehatan menyeluruh & keanggotaan jaringan alumni SI"
      ],
      en: [
        "Full tuition fees coverage paid directly to Swedish universities",
        "Monthly living allowance of SEK 12,000",
        "Travel grant of SEK 15,000 per academic year",
        "Health insurance & membership in the SI Network for Future Global Leaders"
      ]
    },
    requirements: {
      id: [
        "Warga negara dari 41 negara terpilih (termasuk Indonesia)",
        "Pengalaman kerja minimal 3.000 jam (sekitar 1.5 tahun kerja)",
        "Memiliki pengalaman kepemimpinan dalam karir atau organisasi",
        "Mendaftar program Master yang memenuhi syarat di Swedia"
      ],
      en: [
        "Citizen of one of the 41 eligible countries (including Indonesia)",
        "Minimum 3,000 hours of professional work experience",
        "Demonstrated leadership experience from employment or civil society",
        "Applying for an eligible master program in Sweden"
      ]
    },
    status: "closed",
    deadline: "2026-02-28",
    applicationUrl: "https://si.se/en/apply/scholarships/",
    description: {
      id: "Beasiswa prestisius pemerintah Swedia yang mendanai kuliah Magister penuh untuk profesional berbakat yang memiliki rekam jejak kepemimpinan.",
      en: "Swedish government’s highly competitive scholarship targeting global professionals with solid work and leadership experience."
    },
    tags: {
      id: [
        "Pemerintah",
        "Swedia",
        "Luar Negeri",
        "Profesional",
        "Bergengsi"
      ],
      en: [
        "Government",
        "Sweden",
        "Overseas",
        "Professional",
        "Prestigious"
      ]
    }
  },
  {
    id: "swiss-government-excellence",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Swiss Government Excellence",
      en: "Swiss Government Excellence Scholarships"
    },
    provider: {
      id: "Pemerintah Konfederasi Swiss",
      en: "Government of Swiss Confederation"
    },
    degreeLevels: ["doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang saku bulanan (CHF 1.920)",
        "Pembebasan biaya kuliah universitas",
        "Asuransi kesehatan wajib Swiss",
        "Tunjangan perumahan (CHF 300 sekali bayar)"
      ],
      en: [
        "Monthly living allowance (CHF 1,920)",
        "Exemption from university tuition fees",
        "Swiss mandatory health insurance",
        "Housing allowance (CHF 300 once-off)"
      ]
    },
    requirements: {
      id: [
        "Lulusan Magister dengan performa akademik luar biasa",
        "Usia maksimal lahir setelah 31 Desember 1990",
        "Proposal riset terperinci berskala internasional",
        "Surat konfirmasi dari profesor di universitas Swiss"
      ],
      en: [
        "Postgraduate Master degree with excellent academic achievements",
        "Born after 31 December 1990",
        "Detailed and structured research proposal of global standard",
        "Confirmation letter from a hosting professor in Switzerland"
      ]
    },
    status: "open",
    deadline: "2026-11-30",
    applicationUrl: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
    description: {
      id: "Beasiswa penelitian tingkat lanjut dan PhD di universitas riset terbaik di Swiss untuk akademisi muda internasional berprestasi.",
      en: "Swiss government scholarship targeting young foreign researchers and PhD candidates to study at world-class Swiss institutes."
    },
    tags: {
      id: [
        "Pemerintah",
        "Swiss",
        "Luar Negeri",
        "Penelitian",
        "Akademik"
      ],
      en: [
        "Government",
        "Switzerland",
        "Overseas",
        "Research",
        "Academic"
      ]
    }
  },
  {
    id: "clarendon-fund-oxford",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Clarendon Fund (Oxford)",
      en: "Clarendon Fund Scholarships"
    },
    provider: {
      id: "University of Oxford",
      en: "University of Oxford"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah dan biaya kampus penuh 100%",
        "Tunjangan hidup tahunan yang melimpah (minimal £18.622)"
      ],
      en: [
        "100% university and college fees coverage",
        "Generous annual grant for living expenses (minimum £18,622)"
      ]
    },
    requirements: {
      id: [
        "Diterima di program pascasarjana Universitas Oxford",
        "Kriteria seleksi utama: prestasi akademik luar biasa",
        "Proposal penelitian atau motivasi akademik yang kuat"
      ],
      en: [
        "Admitted to a graduate program at the University of Oxford",
        "Primary selection criteria: outstanding academic records",
        "Strong research proposal or academic motivation statements"
      ]
    },
    status: "closed",
    deadline: "2026-01-25",
    applicationUrl: "https://www.ox.ac.uk/admissions/graduate/fees-and-funding/oxford-scholarships/clarendon-fund",
    description: {
      id: "Skema beasiswa pascasarjana utama di Universitas Oxford, mendanai biaya kuliah dan biaya hidup mahasiswa terbaik di dunia.",
      en: "A major graduate scholarship scheme at the University of Oxford, awarding funded spots to top international applicants annually."
    },
    tags: {
      id: [
        "Universitas",
        "Inggris",
        "Luar Negeri",
        "Bergengsi",
        "Akademik"
      ],
      en: [
        "University",
        "UK",
        "Overseas",
        "Prestigious",
        "Academic Excellence"
      ]
    }
  },
  {
    id: "jardine-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Jardine Foundation",
      en: "Jardine Scholarship"
    },
    provider: {
      id: "The Jardine Foundation",
      en: "The Jardine Foundation"
    },
    degreeLevels: ["bachelor", "master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah penuh dibayarkan ke Oxford/Cambridge",
        "Tunjangan hidup tahunan mencakup asrama dan makan",
        "Biaya tiket pesawat pulang-pergi",
        "Tunjangan tambahan buku dan peralatan"
      ],
      en: [
        "Full tuition fees payable directly to Oxford/Cambridge",
        "Annual living allowance covering board and lodging",
        "Cost of standard round-trip airfare",
        "Book and equipment allowance"
      ]
    },
    requirements: {
      id: [
        "Warga negara dari negara tempat Jardine Matheson beroperasi (termasuk Indonesia)",
        "Memenuhi standar masuk Universitas Oxford atau Universitas Cambridge",
        "Kondisi kesehatan baik dan memiliki potensi kepemimpinan sosial"
      ],
      en: [
        "Citizen of a country in which Jardine Matheson operates (inc. Indonesia)",
        "Meet academic standards for entry to Oxford or Cambridge",
        "In good health and demonstrate strong potential for social leadership"
      ]
    },
    status: "open",
    deadline: "2026-10-22",
    applicationUrl: "https://www.jardines.com/en/community/foundation.html",
    description: {
      id: "Beasiswa bergengsi didanai oleh Jardine Matheson Group untuk mahasiswa Asia Tenggara agar bisa kuliah S1/S2/S3 di Oxbridge.",
      en: "Prestigious scholarship funded by the Jardine Matheson Group for Asian students to pursue degrees at Oxford and Cambridge."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Inggris",
        "Luar Negeri",
        "Bergengsi",
        "Kepemimpinan"
      ],
      en: [
        "Private Foundation",
        "UK",
        "Overseas",
        "Prestigious",
        "Leadership"
      ]
    }
  },
  {
    id: "hkpfs-hongkong",
    studyLocation: ["overseas"],
    name: {
      id: "Hong Kong PhD Fellowship Scheme (HKPFS)",
      en: "Hong Kong PhD Fellowship Scheme (HKPFS)"
    },
    provider: {
      id: "Research Grants Council (RGC) Hong Kong",
      en: "Research Grants Council (RGC) of Hong Kong"
    },
    degreeLevels: ["doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Tunjangan tahunan melimpah (HK$ 331.200 atau sekitar Rp 660 juta)",
        "Tunjangan perjalanan konferensi akademik tahunan (HK$ 13.800)",
        "Pembebasan biaya kuliah penuh oleh universitas penyelenggara"
      ],
      en: [
        "Generous annual stipend of HK$ 331,200",
        "Conference and research-related travel allowance of HK$ 13,800 per year",
        "Tuition waiver at hosting universities"
      ]
    },
    requirements: {
      id: [
        "Mendaftar program PhD penuh waktu di universitas berpartisipasi di Hong Kong",
        "Kemampuan akademik luar biasa dan rekam jejak riset",
        "Kemampuan komunikasi dan kepemimpinan interpersonal",
        "Sertifikat bahasa Inggris TOEFL iBT 80+ atau IELTS 6.5+"
      ],
      en: [
        "Apply for full-time PhD program at participating universities in Hong Kong",
        "Outstanding academic performance and research potential",
        "Interpersonal, communication and leadership skills",
        "English proficiency: TOEFL iBT 80+ or IELTS 6.5+"
      ]
    },
    status: "open",
    deadline: "2026-12-01",
    applicationUrl: "https://www.rgc.edu.hk/hkphd/",
    description: {
      id: "Skema beasiswa internasional elit bentukan pemerintah Hong Kong untuk menarik mahasiswa riset doktoral terbaik dunia.",
      en: "Elite scholarship scheme established by the Hong Kong government to attract the best doctoral students worldwide."
    },
    tags: {
      id: [
        "Pemerintah",
        "Hong Kong",
        "Luar Negeri",
        "Akademik",
        "Penelitian"
      ],
      en: [
        "Government",
        "Hong Kong",
        "Overseas",
        "Academic Excellence",
        "Research"
      ]
    }
  },
  {
    id: "kaust-fellowship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa KAUST Fellowship (Arab Saudi)",
      en: "KAUST Fellowship"
    },
    provider: {
      id: "King Abdullah University of Science and Technology (KAUST)",
      en: "King Abdullah University of Science and Technology (KAUST)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Dukungan biaya kuliah penuh 100%",
        "Uang saku bulanan ($20.000 - $30.000 per tahun)",
        "Fasilitas asrama perumahan mewah di kampus",
        "Asuransi kesehatan lengkap & bantuan relokasi awal"
      ],
      en: [
        "100% tuition fees support",
        "Monthly living allowance ($20,000 - $30,000 per year)",
        "On-campus housing and high-standard lodging",
        "Comprehensive medical insurance & initial relocation support"
      ]
    },
    requirements: {
      id: [
        "Diterima di program MS atau PhD KAUST",
        "Latar belakang sains, teknologi, teknik, atau matematika (STEM)",
        "Sertifikat bahasa Inggris IELTS minimal 6.5 / TOEFL iBT 79+",
        "Transkrip nilai kuliah yang sangat baik (GPA di atas 3.5 diutamakan)"
      ],
      en: [
        "Admitted to a MS or PhD degree program at KAUST",
        "STEM educational background (Science, Tech, Engineering, Math)",
        "English proficiency certificate IELTS 6.5 / TOEFL iBT 79+",
        "Excellent academic transcripts (GPA above 3.5 preferred)"
      ]
    },
    status: "soon",
    deadline: "2026-01-15",
    applicationUrl: "https://www.kaust.edu.sa/en/study/fellowship",
    description: {
      id: "Beasiswa pascasarjana penuh di universitas riset sains dan teknologi elit KAUST di pesisir Laut Merah, Arab Saudi.",
      en: "Fully funded graduate fellowship at KAUST, a world-class STEM research university located on the Red Sea coast."
    },
    tags: {
      id: [
        "Universitas",
        "Arab Saudi",
        "Luar Negeri",
        "STEM",
        "Sains"
      ],
      en: [
        "University",
        "Saudi Arabia",
        "Overseas",
        "STEM",
        "Science"
      ]
    }
  },
  {
    id: "adb-jsp-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa ADB-JSP (Pemerintah Jepang)",
      en: "Asian Development Bank-Japan Scholarship Program"
    },
    provider: {
      id: "Asian Development Bank (ADB) & Pemerintah Jepang",
      en: "Asian Development Bank (ADB) & Government of Japan"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh di universitas mitra regional",
        "Tunjangan hidup bulanan & bantuan perumahan",
        "Tiket pesawat pulang-pergi kelas ekonomi",
        "Asuransi kesehatan & tunjangan buku kuliah"
      ],
      en: [
        "Full tuition fees coverage at partner universities in the region",
        "Monthly living and housing allowances",
        "Return economy-class airfare",
        "Medical insurance & academic book allowance"
      ]
    },
    requirements: {
      id: [
        "Warga negara dari negara anggota peminjam ADB (termasuk Indonesia)",
        "Usia maksimal 35 tahun pada saat mendaftar",
        "Pengalaman kerja profesional minimal 2 tahun setelah lulus S1",
        "Memiliki kesehatan fisik dan mental yang baik"
      ],
      en: [
        "Citizen of an ADB borrowing member country (including Indonesia)",
        "Max age: 35 years old at the time of application",
        "At least 2 years of professional work experience after bachelor graduation",
        "Excellent physical and mental health"
      ]
    },
    status: "open",
    deadline: "2026-08-31",
    applicationUrl: "https://www.adb.org/work-with-us/careers/japan-scholarship-program",
    description: {
      id: "Beasiswa pascasarjana hasil kolaborasi ADB dan Jepang di bidang ekonomi, manajemen, sains, dan teknologi di universitas mitra terpilih.",
      en: "Joint scholarship program by ADB and Japan supporting postgraduate study in economic development, management, and STEM fields."
    },
    tags: {
      id: [
        "Pemerintah",
        "Jepang",
        "Luar Negeri",
        "Ekonomi",
        "Pembangunan"
      ],
      en: [
        "Government",
        "Japan",
        "Overseas",
        "Economics",
        "Development"
      ]
    }
  },
  {
    id: "jj-wbgsp-worldbank",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Kolaborasi Bank Dunia & Jepang (JJ/WBGSP)",
      en: "Joint Japan/World Bank Graduate Scholarship"
    },
    provider: {
      id: "World Bank & Pemerintah Jepang",
      en: "World Bank & Government of Japan"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah universitas penuh 100%",
        "Tiket pesawat ekonomi pulang-pergi ke luar negeri",
        "Tunjangan bulanan tetap mencakup makanan, akomodasi, dan buku",
        "Tunjangan perjalanan kedatangan"
      ],
      en: [
        "100% university tuition fees coverage",
        "Round-trip economy class flight tickets",
        "Fixed monthly living allowance covering meals, lodging, and books",
        "Arrival travel allowance"
      ]
    },
    requirements: {
      id: [
        "Warga negara berkembang anggota Bank Dunia (termasuk Indonesia)",
        "Memiliki gelar Sarjana dan pengalaman kerja minimal 3 tahun terkait pembangunan",
        "Diterima di salah satu program Master yang disetujui Bank Dunia",
        "Bukan staf aktif atau mantan staf Bank Dunia"
      ],
      en: [
        "Citizen of a developing member country of the World Bank (inc. Indonesia)",
        "Hold an undergraduate degree and have at least 3 years of development-related work experience",
        "Admitted to one of the designated master programs approved by the World Bank",
        "Not an active or former staff member of the World Bank Group"
      ]
    },
    status: "closed",
    deadline: "2026-05-24",
    applicationUrl: "https://www.worldbank.org/en/programs/scholarships",
    description: {
      id: "Beasiswa kuliah S2 internasional di universitas top Amerika Serikat, Eropa, dan Asia Pasifik untuk bidang pembangunan global.",
      en: "A fully funded master's program at selected universities in the US, Europe, and Asia-Pacific focusing on key development sectors."
    },
    tags: {
      id: [
        "Internasional",
        "Amerika Serikat",
        "Luar Negeri",
        "Pembangunan",
        "Ekonomi"
      ],
      en: [
        "International",
        "US",
        "Overseas",
        "Development",
        "Economics"
      ]
    }
  },
  {
    id: "mastercard-foundation",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Mastercard Foundation Scholars",
      en: "Mastercard Foundation Scholars Program"
    },
    provider: {
      id: "Mastercard Foundation",
      en: "Mastercard Foundation"
    },
    degreeLevels: ["bachelor", "master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh dan biaya pendaftaran",
        "Akomodasi perumahan dan makanan gratis",
        "Tunjangan bulanan & asuransi kesehatan lengkap",
        "Tiket pendaftaran kedatangan dan pendaftaran pulang",
        "Program mentoring kepemimpinan karir"
      ],
      en: [
        "Full tuition and application fees coverage",
        "Free housing accommodation and meals",
        "Monthly living stipend & health insurance",
        "Travel costs to and from home country",
        "Career mentorship and leadership development support"
      ]
    },
    requirements: {
      id: [
        "Memiliki keterbatasan finansial terbukti (prasejahtera)",
        "Prestasi akademis luar biasa dengan rekam jejak komunitas",
        "Diterima di salah satu universitas mitra (misal McGill, Edinburgh, Berkeley)",
        "Memiliki jiwa kepemimpinan untuk mengabdi ke negara asal"
      ],
      en: [
        "Demonstrate verifiable financial need or underprivileged status",
        "Exceptional academic record with community involvement",
        "Applied and admitted to a partner university (e.g. McGill, Edinburgh, Berkeley)",
        "Possess leadership potential and commit to giving back to home country"
      ]
    },
    status: "open",
    deadline: "2026-09-30",
    applicationUrl: "https://mastercardfdn.org/all/scholars/",
    description: {
      id: "Beasiswa penuh kolaborasi Mastercard Foundation dengan universitas top dunia untuk mendidik calon pemimpin yang memiliki keterbatasan ekonomi.",
      en: "Global scholarship scheme providing fully funded educational opportunities to academically talented but economically disadvantaged students."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Kanada",
        "Luar Negeri",
        "Sosial",
        "Kepemimpinan"
      ],
      en: [
        "Private Foundation",
        "Canada",
        "Overseas",
        "Social Impact",
        "Leadership"
      ]
    }
  },
  {
    id: "yenching-academy",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Yenching Academy (Peking University)",
      en: "Yenching Academy Fellowship"
    },
    provider: {
      id: "Yenching Academy of Peking University",
      en: "Yenching Academy of Peking University"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh di Universitas Peking",
        "Akomodasi asrama gratis di Peking University",
        "Uang saku bulanan sebesar RMB 3.000",
        "Tiket pesawat pulang-pergi satu kali",
        "Biaya asuransi medis dasar"
      ],
      en: [
        "Full tuition fees coverage at Peking University",
        "Free on-campus student accommodation",
        "Monthly living stipend of RMB 3,000",
        "One round-trip airfare",
        "Basic medical insurance coverage"
      ]
    },
    requirements: {
      id: [
        "Gelar Sarjana (S1) dari universitas terakreditasi sebelum Agustus 2026",
        "Rekam prestasi akademik luar biasa (diutamakan GPA di atas 3.5)",
        "Minat mendalam pada studi interdisipliner tentang Cina",
        "Sertifikat bahasa Inggris (IELTS 7.0 / TOEFL iBT 100+)"
      ],
      en: [
        "Bachelor's degree from an accredited university before August 2026",
        "Outstanding academic record (GPA above 3.5 preferred)",
        "Deep interest in interdisciplinary China Studies",
        "English proficiency (IELTS 7.0 / TOEFL iBT 100+)"
      ]
    },
    status: "soon",
    deadline: "2026-11-27",
    applicationUrl: "https://yenchingacademy.pku.edu.cn/",
    description: {
      id: "Beasiswa S2 penuh satu tahun bidang China Studies di Universitas Peking, dirancang untuk melatih analis global masa depan.",
      en: "An elite fully-funded one-year Master program in China Studies at Peking University, preparing global scholars to analyze China's role."
    },
    tags: {
      id: [
        "Universitas",
        "Cina",
        "Luar Negeri",
        "Hubungan Global",
        "Bergengsi"
      ],
      en: [
        "University",
        "China",
        "Overseas",
        "Global Studies",
        "Prestigious"
      ]
    }
  },
  {
    id: "rotary-peace",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Rotary Peace Fellowships",
      en: "Rotary Peace Fellowships"
    },
    provider: {
      id: "Rotary International Foundation",
      en: "Rotary International Foundation"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah universitas penuh",
        "Akomodasi, makan, dan tempat tinggal gratis",
        "Penerbangan internasional pulang-pergi",
        "Biaya magang lapangan dan asuransi kesehatan"
      ],
      en: [
        "Full university tuition fees coverage",
        "Free room and board accommodation",
        "Round-trip international air travel",
        "Field internship funding & health insurance"
      ]
    },
    requirements: {
      id: [
        "Pengalaman kerja penuh waktu minimal 3 tahun bidang perdamaian/resolusi konflik",
        "Gelar Sarjana dengan catatan akademik kompetitif",
        "Kemampuan bahasa Inggris tinggi dan kepemimpinan visioner",
        "Direkomendasikan oleh Rotary Club setempat"
      ],
      en: [
        "Minimum 3 years of full-time development/peace work experience",
        "Bachelor's degree with competitive academic record",
        "High English proficiency & visionary leadership attributes",
        "Local Rotary Club endorsement recommendation"
      ]
    },
    status: "open",
    deadline: "2026-05-15",
    applicationUrl: "https://www.rotary.org/en/our-programs/peace-fellowships",
    description: {
      id: "Beasiswa bagi pegiat perdamaian global untuk menempuh Magister di bidang pencegahan konflik di universitas mitra Rotary di seluruh dunia.",
      en: "Academic fellowship program for peacebuilders to complete a Master's degree in conflict resolution at Rotary Peace Centers."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Internasional",
        "Luar Negeri",
        "Resolusi Konflik",
        "Kepemimpinan"
      ],
      en: [
        "Private Foundation",
        "International",
        "Overseas",
        "Conflict Resolution",
        "Leadership"
      ]
    }
  },
  {
    id: "great-scholarship-uk",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa GREAT (Inggris)",
      en: "GREAT Scholarships"
    },
    provider: {
      id: "British Council & Pemerintah Inggris",
      en: "British Council & UK Government"
    },
    degreeLevels: ["master"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan biaya kuliah sebesar £10.000 untuk program S2 satu tahun",
        "Kesempatan menghadiri acara jejaring British Council"
      ],
      en: [
        "Tuition fee contribution of £10,000 for one-year postgraduate study",
        "Networking events organized by the British Council"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia (WNI)",
        "Memiliki gelar sarjana (S1) dengan motivasi akademik yang tinggi",
        "Memenuhi persyaratan bahasa Inggris universitas tujuan di Inggris",
        "Menunjukkan kontribusi aktif di bidang studinya"
      ],
      en: [
        "Indonesian citizen (WNI)",
        "Hold an undergraduate degree with strong academic motivation",
        "Meet the English language requirements of the hosting UK university",
        "Demonstrate active engagement in their study field"
      ]
    },
    status: "soon",
    deadline: "2026-05-31",
    applicationUrl: "https://study-uk.britishcouncil.org/scholarships-funding/great-scholarships",
    description: {
      id: "Beasiswa kolaborasi British Council dan universitas Inggris, menawarkan bantuan dana kuliah bagi mahasiswa Indonesia untuk jenjang S2.",
      en: "Joint scholarship campaign by the British Council and UK universities, offering funding opportunities for postgraduate students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Inggris",
        "Luar Negeri",
        "Pendidikan"
      ],
      en: [
        "Government",
        "UK",
        "Overseas",
        "Education"
      ]
    }
  },
  {
    id: "vliruos-belgium",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa VLIR-UOS (Belgia)",
      en: "VLIR-UOS Scholarships"
    },
    provider: {
      id: "Lembaga Pendidikan Pemerintah Flanders Belgia",
      en: "Flemish Interuniversity Council (Belgium)"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah universitas penuh di Belgia",
        "Uang saku bulanan €1.400",
        "Tiket penerbangan ekonomi internasional",
        "Asuransi kesehatan lengkap, visa, & biaya kedatangan"
      ],
      en: [
        "Full university tuition fees in Belgium",
        "Monthly living allowance of €1,400",
        "International economy-class flight tickets",
        "Comprehensive medical insurance, visa fees, & travel allowance"
      ]
    },
    requirements: {
      id: [
        "Warga negara berkembang mitra (termasuk Indonesia)",
        "Berusia maksimal 35 tahun pada saat mendaftar",
        "IPK minimal 3.00 pada studi Sarjana",
        "Mendaftar di program Master berbahasa Inggris yang disetujui di Belgia"
      ],
      en: [
        "Citizen of an eligible developing country (including Indonesia)",
        "Max age: 35 years old at application time",
        "Bachelor's degree with a minimum GPA of 3.00",
        "Applying for an approved English-taught Master's program in Flanders"
      ]
    },
    status: "closed",
    deadline: "2026-02-01",
    applicationUrl: "https://www.vliruos.be/en/scholarships",
    description: {
      id: "Beasiswa dari pemerintah Flanders Belgia untuk mahasiswa internasional guna mendukung proyek pembangunan dan riset berkelanjutan.",
      en: "Belgian government scholarship program supporting development cooperation through international master programs."
    },
    tags: {
      id: [
        "Pemerintah",
        "Belgia",
        "Luar Negeri",
        "Pembangunan"
      ],
      en: [
        "Government",
        "Belgium",
        "Overseas",
        "Development Studies"
      ]
    }
  },
  {
    id: "bdgs-brunei",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Pemerintah Brunei Darussalam (BDGS)",
      en: "Brunei Darussalam Government Scholarship"
    },
    provider: {
      id: "Kementerian Luar Negeri Brunei Darussalam",
      en: "Ministry of Foreign Affairs of Brunei Darussalam"
    },
    degreeLevels: ["bachelor", "master"],
    fundingType: "full",
    coverage: {
      id: [
        "Pembebasan biaya kuliah universitas penuh",
        "Tunjangan hidup bulanan BND 500",
        "Tunjangan akomodasi asrama universitas",
        "Tiket pendaftaran ekonomi pulang-pergi dari negara asal"
      ],
      en: [
        "Exemption from payment of tuition fees",
        "Monthly living allowance of BND 500",
        "On-campus hostel accommodation",
        "Round-trip economy class air ticket"
      ]
    },
    requirements: {
      id: [
        "Warga negara anggota ASEAN (termasuk Indonesia)",
        "Usia maksimal 25 tahun untuk S1, maksimal 35 tahun untuk S2",
        "Memenuhi kualifikasi masuk universitas Brunei (UBD, UTB, UNISSA)",
        "Catatan akademis sekolah/kuliah yang sangat baik"
      ],
      en: [
        "Citizen of ASEAN member states (including Indonesia)",
        "Max age: 25 for Bachelor, 35 for Master degree",
        "Meet entry requirements of Brunei universities (UBD, UTB, UNISSA)",
        "Excellent academic transcripts of prior study"
      ]
    },
    status: "closed",
    deadline: "2026-02-15",
    applicationUrl: "http://www.mfa.gov.bn/pages/bdgs.aspx",
    description: {
      id: "Beasiswa penuh dari pemerintah Brunei Darussalam untuk menempuh program Diploma, Sarjana, atau Magister di universitas top Brunei.",
      en: "Fully funded scholarship program for international students to study at leading higher education institutions in Brunei."
    },
    tags: {
      id: [
        "Pemerintah",
        "Brunei",
        "Luar Negeri",
        "ASEAN"
      ],
      en: [
        "Government",
        "Brunei",
        "Overseas",
        "ASEAN Focus"
      ]
    }
  },
  {
    id: "ajinomoto-japan",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Pascasarjana Ajinomoto",
      en: "Ajinomoto Postgraduate Scholarship"
    },
    provider: {
      id: "Ajinomoto Foundation Indonesia",
      en: "Ajinomoto Postgraduate Scholarship"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Tunjangan bulanan 150.000 - 180.000 Yen",
        "Biaya ujian masuk dan pendaftaran universitas Jepang",
        "Biaya kuliah penuh dibayarkan langsung",
        "Tiket pesawat ekonomi sekali jalan dari Indonesia ke Jepang"
      ],
      en: [
        "Monthly allowance of 150,000 - 180,000 Yen",
        "Examination, admission, and university fee coverage",
        "Full tuition fees coverage paid directly",
        "One-way economy class flight ticket from Indonesia to Japan"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia (WNI) lulusan S1",
        "IPK minimal 3.50 pada skala 4.00",
        "Berusia maksimal 35 tahun pada awal semester",
        "Tertarik pada bidang gizi, ilmu pangan, pertanian, atau sains terkait"
      ],
      en: [
        "Indonesian citizen (WNI) with a Bachelor's degree",
        "GPA of at least 3.50 on a 4.00 scale",
        "Max age: 35 years old at the start of semester",
        "Interested in nutrition, food science, agriculture, or related STEM fields"
      ]
    },
    status: "closed",
    deadline: "2026-03-05",
    applicationUrl: "https://www.ajinomoto.co.id/en/scholarship",
    description: {
      id: "Beasiswa S2 riset penuh dari PT Ajinomoto Indonesia untuk lulusan universitas Indonesia guna mendalami ilmu pangan di Universitas Tokyo atau universitas top Jepang lainnya.",
      en: "Fully funded graduate research scholarship by Ajinomoto to study food science and nutrition at prestigious universities in Japan."
    },
    tags: {
      id: [
        "Perusahaan",
        "Jepang",
        "Luar Negeri",
        "Sains",
        "Gizi"
      ],
      en: [
        "Company",
        "Japan",
        "Overseas",
        "Science",
        "Nutrition"
      ]
    }
  },
  {
    id: "inpex-scholarship",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa INPEX Foundation",
      en: "INPEX Scholarship"
    },
    provider: {
      id: "INPEX Foundation (Perusahaan Migas Jepang)",
      en: "INPEX Foundation (Japanese Energy Company)"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh di universitas Jepang",
        "Tunjangan bulanan sebesar 160.000 Yen",
        "Tiket pesawat pendaftaran pulang-pergi Jakarta - Tokyo",
        "Asuransi kesehatan wajib Jepang & tunjangan buku kuliah"
      ],
      en: [
        "Full tuition fees paid directly to hosting Japanese university",
        "Monthly living stipend of 160,000 Yen",
        "Round-trip airfare Jakarta - Tokyo",
        "Japanese health insurance fees contribution & textbook allowances"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia berusia di bawah 30 tahun",
        "Lulusan Sarjana (S1) bidang ilmu alam (Natural Sciences)",
        "IPK minimal 3.00 dari universitas terkemuka",
        "Diterima atau berniat mendaftar ke universitas pascasarjana Jepang"
      ],
      en: [
        "Indonesian citizen aged under 30",
        "Bachelor's degree in Natural Sciences or related fields",
        "GPA of 3.00 or higher from a reputable university",
        "Admitted or planning to apply to a Japanese graduate school"
      ]
    },
    status: "open",
    deadline: "2026-10-31",
    applicationUrl: "https://www.inpex-s.com/",
    description: {
      id: "Beasiswa pascasarjana bidang sains dari yayasan minyak Jepang INPEX guna mempromosikan hubungan persahabatan Indonesia - Jepang.",
      en: "Postgraduate science fellowship funded by the INPEX Foundation Japan to promote bilateral relations."
    },
    tags: {
      id: [
        "Perusahaan",
        "Jepang",
        "Luar Negeri",
        "Sains",
        "Energi"
      ],
      en: [
        "Company",
        "Japan",
        "Overseas",
        "Science",
        "Energy"
      ]
    }
  },
  {
    id: "honjo-international",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Honjo Foundation (Jepang)",
      en: "Honjo International Scholarship"
    },
    provider: {
      id: "Honjo International Scholarship Foundation",
      en: "Honjo International Scholarship Foundation"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Tunjangan hidup bulanan melimpah (150.000 - 200.000 Yen)",
        "Tunjangan biaya akomodasi bulanan",
        "Bantuan biaya pendaftaran seminar internasional"
      ],
      en: [
        "Generous monthly living allowance (150,000 - 200,000 Yen)",
        "Monthly housing allowance contribution",
        "Travel grant for attending international academic conferences"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional non-Jepang berprestasi tinggi",
        "Mendaftar atau sedang menempuh pascasarjana di universitas Jepang",
        "Memiliki kemampuan bahasa Jepang yang memadai (diutamakan)",
        "Memiliki tekad mengabdi ke negara asal setelah kelulusan"
      ],
      en: [
        "High-achieving non-Japanese international student",
        "Applying for or currently enrolled in a Japanese graduate school",
        "Functional Japanese language ability (preferred)",
        "Commitment to return and contribute to home country after graduation"
      ]
    },
    status: "open",
    deadline: "2026-10-31",
    applicationUrl: "https://www.honjo-scholarship.or.jp/",
    description: {
      id: "Beasiswa pascasarjana bergengsi di Jepang didanai yayasan swasta Honjo untuk memfasilitasi mahasiswa asing berpotensi tinggi.",
      en: "Highly sought-after graduate scholarship in Japan funded by the Honjo Foundation to support outstanding foreign researchers."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Jepang",
        "Luar Negeri",
        "Riset"
      ],
      en: [
        "Private Foundation",
        "Japan",
        "Overseas",
        "Research"
      ]
    }
  },
  {
    id: "ust-korea",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa UST Korea (Sains & Teknologi)",
      en: "UST Scholarships (South Korea)"
    },
    provider: {
      id: "University of Science and Technology (UST) Korea Selatan",
      en: "University of Science and Technology (UST) South Korea"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah penuh 100%",
        "Uang saku bulanan KRW 1.200.000 (S2) dan KRW 1.600.000 (S3)",
        "Asuransi kesehatan mahasiswa wajib",
        "Akses riset di lembaga penelitian nasional Korea"
      ],
      en: [
        "100% tuition fees coverage",
        "Monthly stipend of KRW 1,200,000 (Master) and KRW 1,600,000 (PhD)",
        "Student health insurance coverage",
        "Access to state-of-the-art national research institutes in Korea"
      ]
    },
    requirements: {
      id: [
        "Lulusan Sarjana untuk program Master, lulusan Magister untuk PhD",
        "IPK minimal 3.00 dari universitas terakreditasi",
        "Sertifikat bahasa Inggris IELTS 6.0 / TOEFL iBT 79+",
        "Memiliki ketertarikan kuat dalam bidang riset dan teknologi terapan"
      ],
      en: [
        "Bachelor's degree for Master program, Master's degree for PhD",
        "Minimum GPA of 3.00 from an accredited university",
        "English language score IELTS 6.0 / TOEFL iBT 79+",
        "Strong interest in applied science, engineering and national research projects"
      ]
    },
    status: "soon",
    deadline: "2026-05-08",
    applicationUrl: "https://www.ust.ac.kr/eng.do",
    description: {
      id: "Beasiswa riset sains pascasarjana penuh di jaringan institut penelitian nasional Korea Selatan (UST), menawarkan pengalaman laboratorium kelas dunia.",
      en: "Fully funded graduate research scholarship at South Korea's national research labs (UST), offering practical STEM training."
    },
    tags: {
      id: [
        "Universitas",
        "Korea Selatan",
        "Luar Negeri",
        "STEM",
        "Riset"
      ],
      en: [
        "University",
        "South Korea",
        "Overseas",
        "STEM",
        "Research"
      ]
    }
  },
  {
    id: "gks-undergraduate",
    studyLocation: ["overseas"],
    name: {
      id: "Global Korea Scholarship (GKS) S1",
      en: "GKS for Undergraduate"
    },
    provider: {
      id: "NIIED (Pemerintah Korea Selatan)",
      en: "NIIED (Government of South Korea)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya kuliah penuh dibayarkan ke universitas Korea",
        "Tunjangan bulanan KRW 900.000",
        "Tiket pesawat kelas ekonomi pendaftaran pulang-pergi",
        "Biaya pelatihan bahasa Korea penuh selama 1 tahun",
        "Asuransi kesehatan lengkap"
      ],
      en: [
        "Full tuition fees coverage paid to host Korean university",
        "Monthly living allowance of KRW 900,000",
        "Economy-class round-trip airfare",
        "1-year Korean language training course costs covered",
        "Comprehensive health insurance"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Korea (termasuk Indonesia) berusia di bawah 25 tahun",
        "Lulusan SMA sederajat atau akan lulus sebelum batas waktu",
        "IPK minimal 80% (skala 100%) atau peringkat atas di kelas sekolah",
        "Belum pernah menerima beasiswa pemerintah Korea sebelumnya"
      ],
      en: [
        "Non-Korean citizen (including Indonesia) under 25 years old",
        "High school graduate or expected to graduate before application deadline",
        "GPA above 80% (100% scale) or top ranking in high school class",
        "Never received a Korean government scholarship before"
      ]
    },
    status: "closed",
    deadline: "2026-10-20",
    applicationUrl: "https://www.studyinkorea.go.kr/",
    description: {
      id: "Beasiswa penuh dari pemerintah Korea Selatan untuk siswa SMA Indonesia guna melanjutkan kuliah S1 di universitas terbaik di Korea.",
      en: "South Korean government's fully funded scholarship program for high school graduates to complete an undergraduate degree."
    },
    tags: {
      id: [
        "Pemerintah",
        "Korea Selatan",
        "Luar Negeri",
        "Bahasa"
      ],
      en: [
        "Government",
        "South Korea",
        "Overseas",
        "Language Training"
      ]
    }
  },
  {
    id: "france-excellence-indonesia",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa France Excellence Indonesia",
      en: "France Excellence Indonesia"
    },
    provider: {
      id: "Kedutaan Besar Prancis di Indonesia & Campus France",
      en: "Embassy of France in Indonesia & Campus France"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Tunjangan hidup bulanan tetap sebesar €860",
        "Pembebasan biaya kuliah universitas negeri di Prancis",
        "Asuransi kesehatan wajib & fasilitas visa gratis",
        "Tiket pesawat ekonomi internasional pulang-pergi"
      ],
      en: [
        "Fixed monthly living allowance of €860",
        "Exemption from tuition fees at French public universities",
        "Social security coverage & free student visa processing",
        "International round-trip economy airfare"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia (WNI) lulusan S1",
        "Diterima di program Master (M1/M2) di institusi pendidikan tinggi Prancis",
        "Sertifikat kemahiran bahasa Prancis (DELF/DALF) atau Inggris (TOEFL/IELTS)",
        "Rencana studi dan motivasi akademik yang solid"
      ],
      en: [
        "Indonesian citizen (WNI) holding a Bachelor's degree",
        "Admitted to a Master program (M1/M2) at a French higher education institution",
        "French (DELF/DALF) or English (TOEFL/IELTS) language proficiency",
        "Solid study plan and academic motivation statement"
      ]
    },
    status: "closed",
    deadline: "2026-04-30",
    applicationUrl: "https://www.indonesie.campusfrance.org/",
    description: {
      id: "Program beasiswa Kedutaan Besar Prancis untuk mendanai mahasiswa Indonesia berprestasi tinggi menempuh kuliah Master di Prancis.",
      en: "Scholarship program organized by the French Embassy in Indonesia supporting master's degree studies in France."
    },
    tags: {
      id: [
        "Pemerintah",
        "Prancis",
        "Luar Negeri",
        "Pendidikan"
      ],
      en: [
        "Government",
        "France",
        "Overseas",
        "Education"
      ]
    }
  },
  {
    id: "invest-your-talent-italy",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Invest Your Talent in Italy (IYT)",
      en: "Invest Your Talent in Italy"
    },
    provider: {
      id: "Kementerian Luar Negeri Italia",
      en: "Italian Ministry of Foreign Affairs"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Tunjangan bulanan €1.000 selama tahun akademik",
        "Pembebasan biaya kuliah universitas berpartisipasi",
        "Kesempatan magang wajib di perusahaan Italia",
        "Asuransi kesehatan lengkap"
      ],
      en: [
        "Monthly allowance of €1,000 during the academic year",
        "Exemption from university tuition fees at participating universities",
        "Mandatory internship program in leading Italian companies",
        "Comprehensive medical insurance"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia (WNI) lulusan S1 lahir setelah 1 Januari 1998",
        "Diterima di salah satu program Master berbahasa Inggris terpilih di Italia",
        "Sertifikat bahasa Inggris minimal IELTS 6.0 atau TOEFL iBT 80",
        "Video perkenalan diri dan motivasi akademik"
      ],
      en: [
        "Indonesian citizen holding a Bachelor's degree born after January 1, 1998",
        "Admitted to an eligible English-taught Master's program in Italy",
        "English proficiency of at least IELTS 6.0 or TOEFL iBT 80",
        "Video essay introducing candidate's background and academic motivation"
      ]
    },
    status: "closed",
    deadline: "2026-03-01",
    applicationUrl: "https://investyourtalentitaly.esteri.it/",
    description: {
      id: "Program beasiswa pemerintah Italia untuk menggabungkan kuliah Master dengan pendaftaran praktis/magang di perusahaan manufaktur Italia.",
      en: "Italian government scholarship combining high-level academic courses with on-the-job training in Italian corporations."
    },
    tags: {
      id: [
        "Pemerintah",
        "Italia",
        "Luar Negeri",
        "Magang",
        "Karir"
      ],
      en: [
        "Government",
        "Italy",
        "Overseas",
        "Internship",
        "Career Development"
      ]
    }
  },
  {
    id: "ireland-postgraduate",
    studyLocation: ["overseas"],
    name: {
      id: "Beasiswa Pemerintah Irlandia Pascasarjana",
      en: "Government of Ireland Postgraduate Scholarship"
    },
    provider: {
      id: "Irish Research Council (IRC)",
      en: "Irish Research Council (IRC)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Tunjangan hidup tahunan €22.000",
        "Kontribusi biaya kuliah hingga €5.750 per tahun",
        "Dana riset langsung tahunan €3.250"
      ],
      en: [
        "Annual living allowance of €22,000",
        "Tuition fee contribution up to €5,750 per year",
        "Direct research-related expenses fund of €3,250 per year"
      ]
    },
    requirements: {
      id: [
        "Lulusan Sarjana untuk S2, lulusan Magister untuk PhD dari semua jurusan",
        "Proposal penelitian orisinal yang sangat terperinci",
        "Diterima di salah satu lembaga pendidikan tinggi terakreditasi di Irlandia",
        "Dua surat rekomendasi akademik"
      ],
      en: [
        "Bachelor's degree for Master, Master's degree for PhD from any major",
        "Detailed and original research proposal",
        "Accepted at an eligible higher education institution in Ireland",
        "Two academic reference letters"
      ]
    },
    status: "open",
    deadline: "2026-10-10",
    applicationUrl: "https://research.ie/funding/government-of-ireland-postgraduate-scholarship-programme/",
    description: {
      id: "Beasiswa bergengsi dari pemerintah Irlandia untuk mahasiswa pascasarjana internasional guna melakukan penelitian terobosan di Irlandia.",
      en: "Prestigious government fellowship supporting international researchers in pursuing graduate research in Ireland."
    },
    tags: {
      id: [
        "Pemerintah",
        "Irlandia",
        "Luar Negeri",
        "Penelitian",
        "Akademik"
      ],
      en: [
        "Government",
        "Ireland",
        "Overseas",
        "Research",
        "Academic"
      ]
    }
  },
  {
    id: "astra-1st-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Astra 1st",
      en: "Astra 1st Scholarship"
    },
    provider: {
      id: "PT Astra International Tbk",
      en: "PT Astra International Tbk"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan biaya kuliah untuk 2 semester",
        "Program pengembangan kepemimpinan dan soft skills komprehensif",
        "Kesempatan magang eksklusif di anak perusahaan Astra Group",
        "Jalur prioritas seleksi karir di Astra setelah kelulusan"
      ],
      en: [
        "Tuition fee financial assistance for 2 semesters",
        "Comprehensive leadership and soft skills development program",
        "Exclusive internship opportunity in Astra Group companies",
        "Fast-track career recruitment pathways in Astra after graduation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa S1 aktif di pulau Jawa semester 6-8",
        "IPK minimal 3.00 dari skala 4.00",
        "Aktif berorganisasi atau memiliki prestasi non-akademik",
        "Lolos seleksi wawancara dan tes psikotes kepemimpinan Astra"
      ],
      en: [
        "Active undergraduate (S1) student in Java, semester 6 to 8",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Active in student organizations or have non-academic achievements",
        "Pass Astra's interview and leadership psychometric test selection"
      ]
    },
    status: "soon",
    deadline: "2026-04-15",
    applicationUrl: "https://career.astra.co.id/",
    description: {
      id: "Program beasiswa dan pengembangan kepemimpinan dari Astra International untuk mencetak duta muda profesional berkualitas tinggi.",
      en: "Scholarship and leadership development program by Astra International for top undergraduate students in Indonesia."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Kepemimpinan",
        "Karir"
      ],
      en: [
        "Company",
        "Domestic",
        "Leadership",
        "Career Development"
      ]
    }
  },
  {
    id: "pertamina-sobat-bumi",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Pertamina Sobat Bumi",
      en: "Beasiswa Pertamina Sobat Bumi"
    },
    provider: {
      id: "Pertamina Foundation",
      en: "Pertamina Foundation"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan UKT / biaya SPP kuliah semester penuh",
        "Tunjangan biaya hidup bulanan tetap",
        "Dukungan pendanaan untuk aksi sosial bertema lingkungan Sobat Bumi",
        "Pelatihan soft skills kepemimpinan hijau"
      ],
      en: [
        "Full semester tuition fee (UKT/SPP) coverage",
        "Monthly living allowance stipend",
        "Project funding for Sobat Bumi environmental social actions",
        "Green leadership and soft skills capacity building"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 minimal semester 2 di universitas mitra Pertamina",
        "IPK minimal 3.00 dan dipertahankan",
        "Tidak sedang menerima beasiswa dari pihak lain",
        "Membuat karya tulis/ide bertema kepedulian lingkungan hidup"
      ],
      en: [
        "Active S1 student in at least 2nd semester at Pertamina partner universities",
        "Minimum GPA of 3.00 maintained",
        "Not currently receiving other scholarships",
        "Write an essay/idea on environmental awareness and sustainability"
      ]
    },
    status: "closed",
    deadline: "2026-03-20",
    applicationUrl: "https://pertaminafoundation.org/",
    description: {
      id: "Program beasiswa CSR Pertamina yang berfokus pada kelestarian lingkungan, mencetak kader muda yang peduli keberlanjutan bumi.",
      en: "Pertamina's CSR scholarship program focused on environmental sustainability, fostering future eco-friendly leaders."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Lingkungan",
        "Sosial"
      ],
      en: [
        "Company",
        "Domestic",
        "Environmental",
        "Social Action"
      ]
    }
  },
  {
    id: "beasiswa-kominfo-dalam-negeri",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Kominfo Pascasarjana (Dalam Negeri)",
      en: "Beasiswa Kominfo Postgraduate (Domestic)"
    },
    provider: {
      id: "Kementerian Komunikasi dan Informatika (Kominfo)",
      en: "Ministry of Communication and Informatics (Kominfo)"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah penuh dibayarkan langsung ke universitas mitra (misal UI, ITB, UGM)",
        "Tunjangan bulanan tetap",
        "Bantuan dana operasional riset dan tesis",
        "Tunjangan buku akademik"
      ],
      en: [
        "Full tuition fees paid directly to partner universities (e.g. UI, ITB, UGM)",
        "Fixed monthly living stipend",
        "Research and thesis operational funding",
        "Academic book allowance"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia (PNS, TNI, POLRI, atau masyarakat umum)",
        "Berusia maksimal 37 tahun untuk PNS, maksimal 35 tahun untuk umum",
        "Latar belakang pekerjaan terkait bidang IT, digital, atau komunikasi publik",
        "IPK minimal 3.00 pada jenjang Sarjana"
      ],
      en: [
        "Indonesian citizen (Civil servant, military, police, or general public)",
        "Max age: 37 for civil servants, 35 for general public",
        "Employment background related to IT, digital tech, or public relations",
        "Minimum GPA of 3.00 on a Bachelor's degree"
      ]
    },
    status: "open",
    deadline: "2026-07-15",
    applicationUrl: "https://beasiswa.kominfo.go.id/",
    description: {
      id: "Program beasiswa Kemenkominfo untuk meningkatkan kualitas SDM digital Indonesia melalui pendidikan S2/S3 dalam negeri bidang teknologi informasi.",
      en: "Ministry of ICT scholarship program designed to boost Indonesia's digital talent through domestic S2/S3 IT degrees."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Teknologi",
        "PNS Focus"
      ],
      en: [
        "Government",
        "Domestic",
        "Technology",
        "Civil Servants"
      ]
    }
  },
  {
    id: "beasiswa-bappenas-dalam-negeri",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Pusbindiklatren Bappenas (Dalam Negeri)",
      en: "Pusbindiklatren Bappenas Scholarship (Domestic)"
    },
    provider: {
      id: "Kementerian PPN / Bappenas",
      en: "Ministry of National Development Planning / Bappenas"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah penuh dibayarkan langsung",
        "Uang saku bulanan dan akomodasi",
        "Biaya perjalanan dinas awal kuliah",
        "Bantuan biaya penulisan tesis/disertasi"
      ],
      en: [
        "Full tuition fees paid directly to hosting campus",
        "Monthly living allowance and lodging contribution",
        "Initial relocation travel allowance",
        "Thesis/dissertation write-up grant"
      ]
    },
    requirements: {
      id: [
        "PNS aktif di instansi perencanaan pusat atau daerah",
        "Memiliki masa kerja minimal 2 tahun sebagai PNS",
        "Dicalonkan secara resmi oleh instansi tempat bekerja",
        "IPK minimal 3.00, lolos tes potensi akademik (TPA Bappenas) & TOEFL"
      ],
      en: [
        "Active civil servant (PNS) in central/local planning agencies",
        "At least 2 years of work experience as a civil servant",
        "Officially nominated by the employing government institution",
        "Min GPA 3.00, pass Academic Potential Test (TPA Bappenas) & TOEFL"
      ]
    },
    status: "closed",
    deadline: "2026-03-15",
    applicationUrl: "https://pusbindiklatren.bappenas.go.id/",
    description: {
      id: "Beasiswa khusus PNS perencana dari Bappenas untuk menempuh studi S2/S3 guna memperkuat perencanaan pembangunan nasional.",
      en: "Bappenas scholarship for planning civil servants to pursue master's or doctoral degrees in planning and policy development."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Perencanaan",
        "PNS Focus"
      ],
      en: [
        "Government",
        "Domestic",
        "Planning",
        "Civil Servants Only"
      ]
    }
  },
  {
    id: "beasiswa-bpi",
    studyLocation: ["domestic", "overseas"],
    name: {
      id: "Beasiswa Pendidikan Indonesia (BPI)",
      en: "Beasiswa Pendidikan Indonesia (BPI)"
    },
    provider: {
      id: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      en: "Ministry of Education, Culture, Research, and Technology (Kemendikbudristek)"
    },
    degreeLevels: ["bachelor", "master", "doctoral"],
    fundingType: "full",
    coverage: {
      id: [
        "Biaya pendaftaran dan SPP kuliah penuh",
        "Tunjangan hidup bulanan tetap",
        "Dana darurat, asuransi kesehatan, & tiket pesawat pulang-pergi",
        "Tunjangan tunjangan buku dan tunjangan kedatangan"
      ],
      en: [
        "Application and tuition fee full coverage",
        "Fixed monthly living allowance",
        "Emergency allowance, health insurance, & round-trip flight tickets",
        "Arrival allowance and book stipend"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia (WNI)",
        "Kategori: Dosen, Guru, Pelaku Budaya, atau Siswa Berprestasi",
        "Lolos seleksi masuk perguruan tinggi mitra BPI (Letter of Acceptance)",
        "IPK minimal sesuai dengan kategori pendaftaran"
      ],
      en: [
        "Indonesian citizen (WNI)",
        "Categories: Lecturers, Teachers, Cultural Practitioners, or High-Achieving Students",
        "Admitted to a BPI partner university with an unconditional LoA",
        "Min GPA according to target category requirements"
      ]
    },
    status: "open",
    deadline: "2026-06-30",
    applicationUrl: "https://beasiswa.kemdikbud.go.id/",
    description: {
      id: "Beasiswa resmi Kemendikbudristek untuk membiayai studi dosen, guru, tenaga kependidikan, pelaku budaya, dan siswa berprestasi di dalam atau luar negeri.",
      en: "Official government scholarship under Kemendikbudristek funding Indonesian educators, students, and cultural actors globally."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Luar Negeri",
        "Pendidikan"
      ],
      en: [
        "Government",
        "Domestic",
        "Overseas",
        "Education"
      ]
    }
  },
  {
    id: "ybm-brilian-bright",
    studyLocation: ["domestic"],
    name: {
      id: "Bright Scholarship YBM BRILiaN",
      en: "Bright Scholarship YBM BRILiaN"
    },
    provider: {
      id: "Yayasan Baitul Maal (YBM) BRILiaN",
      en: "Yayasan Baitul Maal (YBM) BRILiaN"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan UKT / SPP kuliah penuh setiap semester",
        "Akomodasi asrama pembinaan (boarding house) gratis",
        "Uang saku bulanan",
        "Pelatihan keagamaan, kepemimpinan, dan kepedulian sosial"
      ],
      en: [
        "Full semester tuition fee (UKT/SPP) coverage",
        "Free housing boarding program with active mentoring",
        "Monthly living allowance stipend",
        "Religious, leadership capacity building, and social action mentoring"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa S1 aktif semester 2 di PTN mitra YBM BRILiaN",
        "IPK minimal 3.00",
        "Berasal dari keluarga kurang mampu secara finansial (mustahik)",
        "Memiliki jiwa kepemimpinan & bersedia mengikuti program pembinaan asrama"
      ],
      en: [
        "Active S1 student in 2nd semester at partner state universities (PTN)",
        "Minimum GPA of 3.00",
        "Belong to a low-income family eligible for Zakat support (mustahik)",
        "Possess leadership potential and commit to the boarding house program"
      ]
    },
    status: "soon",
    deadline: "2026-09-15",
    applicationUrl: "https://ybmbrilian.id/",
    description: {
      id: "Beasiswa penuh dari Lembaga Zakat BRI (YBM BRILiaN) yang memadukan bantuan dana kuliah dengan asrama pembinaan karakter.",
      en: "A fully-funded scholarship and mentoring program by BRI's Zakat Foundation targeting underprivileged college students."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Dalam Negeri",
        "Keagamaan",
        "Asrama"
      ],
      en: [
        "Private Foundation",
        "Domestic",
        "Islamic Zakat",
        "Boarding Program"
      ]
    }
  },
  {
    id: "beasiswa-mahaghora",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Mahaghora",
      en: "Beasiswa Mahaghora"
    },
    provider: {
      id: "Yayasan Mahaghora (Mahaghora Group)",
      en: "Yayasan Mahaghora (Mahaghora Group)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah penuh SPP/UKT hingga lulus (maksimal 8 semester)",
        "Bantuan biaya pendaftaran dan administrasi perguruan tinggi",
        "Program pembinaan organisasi dan soft skills secara rutin",
        "Kesempatan berkarir di Mahaghora Group"
      ],
      en: [
        "Full tuition fee coverage up to graduation (max 8 semesters)",
        "University registration and administrative fees support",
        "Regular organizational and soft skills training programs",
        "Career development opportunities in Mahaghora Group"
      ]
    },
    requirements: {
      id: [
        "Siswa SMA/SMK/MA sederajat kelas 12 atau lulusan maksimal 2 tahun lalu",
        "IPK minimal rata-rata rapor 7.50 atau IPK kuliah 3.00",
        "Memiliki keterbatasan finansial namun berniat kuat kuliah",
        "Lolos tahapan seleksi berkas, wawancara, dan dinamika kelompok"
      ],
      en: [
        "12th-grade high school students or graduates from max 2 years prior",
        "Average high school report score of 7.50 or university GPA of 3.00",
        "Demonstrated financial need with a strong drive to learn",
        "Pass application screening, interview, and group dynamics testing"
      ]
    },
    status: "soon",
    deadline: "2026-11-10",
    applicationUrl: "https://beasiswamahaghora.com/",
    description: {
      id: "Program CSR dari Mahaghora Group untuk memberikan akses pendidikan tinggi bagi putra-putri berprestasi yang kurang mampu di Indonesia.",
      en: "CSR program by Mahaghora Group providing undergraduate education opportunities for high-achieving underprivileged youth."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Finansial",
        "Sosial"
      ],
      en: [
        "Company",
        "Domestic",
        "Financial Need",
        "Social Impact"
      ]
    }
  },
  {
    id: "beasiswa-bca-finance",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa BCA Finance",
      en: "BCA Finance Scholarship"
    },
    provider: {
      id: "PT BCA Finance",
      en: "PT BCA Finance"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan dana pendidikan sebesar Rp 3.500.000 per semester",
        "Diberikan berkelanjutan sejak semester 5 hingga semester 8 lulus"
      ],
      en: [
        "Financial aid of Rp 3,500,000 per semester",
        "Disbursed continuously from 5th semester until 8th semester graduation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 4 pada saat mendaftar",
        "IPK minimal 3.00 (PTN) / 3.40 (PTS) dari skala 4.00",
        "Tidak sedang menerima beasiswa lain dari instansi lain",
        "Melampirkan surat keterangan tidak mampu (untuk jalur khusus)"
      ],
      en: [
        "Active undergraduate (S1) student in 4th semester at application",
        "Minimum GPA of 3.00 (State Univ) / 3.40 (Private Univ) on a 4.00 scale",
        "Not receiving any other scholarships",
        "Submit family financial statements (or SKTM for special category)"
      ]
    },
    status: "closed",
    deadline: "2026-06-15",
    applicationUrl: "https://www.bcafinance.co.id/",
    description: {
      id: "Program CSR rutin dari BCA Finance berupa bantuan dana SPP kuliah untuk mahasiswa sarjana berprestasi dan kurang mampu.",
      en: "CSR scholarship campaign by BCA Finance, offering financial tuition support to Indonesian undergraduate students."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Finansial"
      ],
      en: [
        "Company",
        "Domestic",
        "Financial Support"
      ]
    }
  },
  {
    id: "cargill-global-scholars",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Cargill Global Scholars",
      en: "Cargill Global Scholars Program"
    },
    provider: {
      id: "Cargill & Institute of International Education (IIE)",
      en: "Cargill & Institute of International Education (IIE)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan biaya kuliah tahunan sebesar $2.500 selama maksimal 2 tahun",
        "Partisipasi dalam seminar kepemimpinan global didanai penuh",
        "Program mentoring profesional dari pimpinan perusahaan Cargill",
        "Keanggotaan dalam jaringan alumni global Cargill"
      ],
      en: [
        "Annual scholarship award of $2,500 for up to 2 years",
        "Fully funded participation in global leadership seminars",
        "Professional mentoring from Cargill leaders",
        "Membership in the global Cargill Scholars alumni network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 tahun kedua di universitas mitra (IPB, ITB, UGM, Unhas, UB, dll.)",
        "IPK minimal 3.00 dan dipertahankan",
        "Jurusan: Sains, Teknologi, Teknik, Pertanian, Bisnis, atau Ekonomi",
        "Menunjukkan potensi kepemimpinan dan kemampuan bahasa Inggris yang baik"
      ],
      en: [
        "Active 2nd-year undergraduate student at partner universities (IPB, ITB, UGM, Unhas, UB, etc.)",
        "Minimum GPA of 3.00 maintained",
        "Majors: STEM, Agriculture, Business, or Economics",
        "Demonstrate leadership potential and good English communication skills"
      ]
    },
    status: "closed",
    deadline: "2026-03-05",
    applicationUrl: "https://www.cargillglobalscholars.com/",
    description: {
      id: "Beasiswa kepemimpinan internasional didanai oleh Cargill untuk mahasiswa berprestasi di bidang pertanian, sains, dan bisnis.",
      en: "International leadership scholarship funded by Cargill, providing mentorship and financial awards to top undergraduates."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Kepemimpinan",
        "Pertanian"
      ],
      en: [
        "Company",
        "Domestic",
        "Leadership",
        "Agriculture"
      ]
    }
  },
  {
    id: "rumah-kepemimpinan",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Pembinaan Rumah Kepemimpinan",
      en: "Rumah Kepemimpinan Scholarship"
    },
    provider: {
      id: "Yayasan Rumah Kepemimpinan",
      en: "Yayasan Rumah Kepemimpinan"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Akomodasi asrama tempat tinggal gratis selama 2 tahun",
        "Uang saku bulanan pembinaan",
        "Pelatihan kepemimpinan, public speaking, & keagamaan intensif",
        "Mentoring persiapan karir dan jejaring alumni nasional"
      ],
      en: [
        "Free dormitory accommodation for 2 years",
        "Monthly pocket allowance",
        "Intensive leadership, public speaking, & religious coaching",
        "Career preparation mentoring and national alumni networking"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa S1 aktif tahun kedua di PTN mitra utama (UI, ITB, UGM, ITS, Unair, USU, dll.)",
        "IPK minimal 3.00 dari semester sebelumnya",
        "Aktif berorganisasi dan bersedia tinggal di asrama pembinaan",
        "Lolos tes seleksi wawancara kepemimpinan"
      ],
      en: [
        "Active 2nd-year S1 student at target state universities (UI, ITB, UGM, ITS, Unair, USU, etc.)",
        "Minimum GPA of 3.00",
        "Active in student organizations and willing to reside in the designated dormitory",
        "Pass leadership interview selection"
      ]
    },
    status: "open",
    deadline: "2026-07-30",
    applicationUrl: "https://rumahkepemimpinan.org/",
    description: {
      id: "Beasiswa asrama kepemimpinan non-gelar yang melatih soft skills, karakter, dan jaringan mahasiswa PTN berprestasi demi kemajuan bangsa.",
      en: "Dormitory-based leadership development program training active Indonesian students in soft skills and national networking."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Dalam Negeri",
        "Kepemimpinan",
        "Asrama"
      ],
      en: [
        "Private Foundation",
        "Domestic",
        "Leadership",
        "Boarding Program"
      ]
    }
  },
  {
    id: "beasiswa-mizan",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Mizan (Bantuan Tesis & Disertasi)",
      en: "Beasiswa Mizan"
    },
    provider: {
      id: "Mizan Group",
      en: "Beasiswa Mizan"
    },
    degreeLevels: ["bachelor", "master", "doctoral"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan dana penulisan tugas akhir / skripsi / tesis / disertasi",
        "Kesempatan naskah diterbitkan oleh penerbit Mizan Group"
      ],
      en: [
        "Financial grant supporting final thesis or dissertation writing",
        "Opportunity for the completed manuscript to be published by Mizan Group"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1/S2/S3 di universitas dalam negeri maupun luar negeri",
        "Sedang menyusun tugas akhir bertema studi keislaman, kebudayaan, kemanusiaan, atau teknologi",
        "Mengirimkan draf proposal penelitian yang sudah disetujui dosen pembimbing",
        "Memiliki IPK minimal 3.00"
      ],
      en: [
        "Active S1, S2, or S3 student in domestic or overseas universities",
        "Currently writing a final thesis on Islamic studies, culture, humanity, or technology",
        "Submit an approved research proposal draft signed by academic advisors",
        "Have a minimum GPA of 3.00"
      ]
    },
    status: "closed",
    deadline: "2026-04-10",
    applicationUrl: "https://mizan.com/beasiswa-mizan/",
    description: {
      id: "Beasiswa bantuan dana penulisan tugas akhir dari penerbit Mizan untuk merangsang tumbuhnya akademisi dan pemikiran kritis di Indonesia.",
      en: "A research grant by Mizan publishing group supporting students writing final theses on social, cultural, and Islamic research."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Riset",
        "Buku"
      ],
      en: [
        "Company",
        "Domestic",
        "Research Grant",
        "Publishing"
      ]
    }
  },
  {
    id: "beasiswa-ppa",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Peningkatan Prestasi Akademik (PPA)",
      en: "PPA Scholarship"
    },
    provider: {
      id: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      en: "Ministry of Education and Culture (Kemendikbudristek)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan biaya operasional kuliah sebesar Rp 400.000 per bulan",
        "Diberikan selama satu tahun anggaran akademik"
      ],
      en: [
        "Operational study assistance of Rp 400,000 per month",
        "Awarded for one academic budget year"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa S1/Diploma aktif minimal semester 2",
        "IPK minimal 3.00 dan melampirkan transkrip nilai resmi",
        "Melampirkan piagam prestasi kokurikuler atau ekstra kurikuler (jika ada)",
        "Direkomendasikan secara resmi oleh Wakil Rektor Kemahasiswaan kampus"
      ],
      en: [
        "Active S1/Diploma student in at least 2nd semester",
        "Minimum GPA of 3.00 with official academic transcripts",
        "Provide certificates of co-curricular or extra-curricular achievements (if any)",
        "Officially recommended by the university's Vice Rector of Student Affairs"
      ]
    },
    status: "soon",
    deadline: "2026-08-30",
    applicationUrl: "https://www.kemdikbud.go.id/",
    description: {
      id: "Beasiswa pemerintah melalui kampus untuk mendorong peningkatan prestasi akademik mahasiswa aktif jenjang Diploma atau Sarjana.",
      en: "Government scholarship allocated through universities to reward and support high academic performance of active college students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Akademik"
      ],
      en: [
        "Government",
        "Domestic",
        "Academic Achievement"
      ]
    }
  },
  {
    id: "xl-axiata-future-leaders",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa XL Axiata Future Leaders (XLFL)",
      en: "XL Axiata Future Leaders"
    },
    provider: {
      id: "PT XL Axiata Tbk",
      en: "PT XL Axiata Tbk"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Pelatihan kepemimpinan dan manajemen eksklusif selama 2 tahun",
        "Dukungan gadget pintar & paket kuota internet belajar gratis",
        "Akses proyek riil dan kolaborasi dengan mentor industri teknologi",
        "Sertifikat kelulusan program kepemimpinan berstandar nasional"
      ],
      en: [
        "Exclusive leadership and management training courses for 2 years",
        "Smart gadget allowance & free internet data plans for study support",
        "Access to real industry projects & tech startup mentorship",
        "Completion certificate of premium national-standard leadership training"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa S1 aktif tahun kesatu atau kedua dari semua jurusan",
        "IPK minimal 2.85 dari skala 4.00",
        "Aktif dalam organisasi kemahasiswaan atau kepemudaan",
        "Lolos seleksi uji kasus, wawancara, dan dinamika kelompok XLFL"
      ],
      en: [
        "Active 1st or 2nd-year S1 student from any academic major",
        "Minimum GPA of 2.85 on a 4.00 scale",
        "Active in student organizations or community movements",
        "Pass XLFL's case study presentation, interview, and group assessment selection"
      ]
    },
    status: "open",
    deadline: "2026-05-30",
    applicationUrl: "https://xlaxiatadataleaders.com/",
    description: {
      id: "Program beasiswa non-finansial berupa pelatihan kepemimpinan digital intensif dari XL Axiata untuk menyiapkan generasi siap kerja.",
      en: "A premium non-financial leadership program by XL Axiata, training selected Indonesian students in digital leadership."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Kepemimpinan",
        "Soft Skills"
      ],
      en: [
        "Company",
        "Domestic",
        "Leadership",
        "Soft Skills"
      ]
    }
  },
  {
    id: "beasiswa-korindo",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Korindo Foundation",
      en: "Beasiswa Korindo"
    },
    provider: {
      id: "Yayasan Korindo (Korindo Group)",
      en: "Yayasan Korindo (Korindo Group)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Tunjangan biaya kuliah tahunan untuk 2 semester berturut-turut",
        "Jalur prioritas magang industri di anak perusahaan Korindo"
      ],
      en: [
        "Annual tuition fee contribution disbursed for 2 consecutive semesters",
        "Priority internship placement at Korindo Group subsidiaries"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 5 di PTN mitra utama (UI, IPB, UGM, dll.)",
        "Jurusan: Kehutanan, Pertanian, Sastra Korea, atau Teknik",
        "IPK minimal 3.20 dan dipertahankan",
        "Tidak sedang menerima beasiswa dari pihak lain"
      ],
      en: [
        "Active S1 student in 5th semester at partner universities (UI, IPB, UGM, etc.)",
        "Majors: Forestry, Agriculture, Korean Literature, or Engineering",
        "Minimum GPA of 3.20 maintained",
        "Not receiving other scholarships concurrently"
      ]
    },
    status: "soon",
    deadline: "2026-09-30",
    applicationUrl: "http://www.korindo.co.id/",
    description: {
      id: "Program beasiswa Korindo Foundation untuk mendukung mahasiswa berprestasi di bidang pertanian, kehutanan, dan bahasa asing.",
      en: "Korindo Foundation's scholarship program supporting outstanding undergraduates majoring in agriculture, forestry, and Korean studies."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Kehutanan",
        "Pertanian"
      ],
      en: [
        "Company",
        "Domestic",
        "Forestry",
        "Agriculture"
      ]
    }
  },
  {
    id: "beasiswa-dataprint",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa DataPrint",
      en: "DataPrint Scholarship"
    },
    provider: {
      id: "DataPrint Indonesia",
      en: "DataPrint Indonesia"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Dana bantuan pendidikan sekali bayar (Rp 400.000 - Rp 1.000.000)",
        "Paket produk merchandise eksklusif dari DataPrint"
      ],
      en: [
        "One-off educational financial grant (Rp 400,000 - Rp 1,000,000)",
        "Exclusive product merchandise bundle from DataPrint"
      ]
    },
    requirements: {
      id: [
        "Pelajar SMP/SMA aktif atau mahasiswa aktif D3/S1",
        "Mengisi formulir pendaftaran online dengan benar",
        "Memasukkan kode kupon yang ada di kemasan produk asli DataPrint",
        "Menulis esai singkat bertema pendidikan/kreativitas digital"
      ],
      en: [
        "Active high school (SMP/SMA) or college (D3/S1) student",
        "Fill in the online registration application form correctly",
        "Enter the unique coupon code from genuine DataPrint product packaging",
        "Write a short essay on digital education/creativity"
      ]
    },
    status: "open",
    deadline: "2026-12-15",
    applicationUrl: "http://beasiswadataprint.com/",
    description: {
      id: "Beasiswa kupon unik dari produk isi ulang tinta DataPrint untuk memberikan subsidi dana pendidikan bagi ratusan pelajar Indonesia setiap tahun.",
      en: "A unique coupon-based educational subsidy program by DataPrint supporting hundreds of active students annually."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Finansial",
        "Esai"
      ],
      en: [
        "Company",
        "Domestic",
        "Financial Grant",
        "Essay Contest"
      ]
    }
  },
  {
    id: "indofood-riset-nugraha",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Indofood Riset Nugraha (IRN)",
      en: "Indofood Riset Nugraha (IRN)"
    },
    provider: {
      id: "PT Indofood Sukses Makmur Tbk",
      en: "PT Indofood Sukses Makmur Tbk"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Dana hibah penelitian tugas akhir skripsi",
        "Bimbingan dan asistensi teknis dari tim pakar IRN",
        "Kesempatan publikasi karya ilmiah pasca riset"
      ],
      en: [
        "Research funding grant for completing undergraduate graduation thesis",
        "Technical advisory and guidance from IRN expert panels",
        "Opportunity for scientific paper publication after research completion"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 yang sedang melakukan penelitian skripsi tugas akhir",
        "Mengajukan proposal penelitian bertema kedaulatan pangan berbasis komoditas lokal",
        "Penyusunan riset dilakukan secara individual, bukan kelompok",
        "Lolos seleksi presentation di hadapan dewan pakar IRN"
      ],
      en: [
        "Active S1 student currently working on their final graduation thesis research",
        "Submit a research proposal on local commodity-based food sovereignty",
        "Research must be conducted individually, not as a group project",
        "Pass presentation screening before the IRN expert panels"
      ]
    },
    status: "closed",
    deadline: "2026-07-10",
    applicationUrl: "https://www.indofoodrisetnugraha.com/",
    description: {
      id: "Bantuan dana riset skripsi dari Indofood bagi mahasiswa S1 guna melahirkan inovasi pangan sehat berbasis kearifan lokal Indonesia.",
      en: "Indofood's thesis research grant program for S1 students, encouraging innovations in food science and technology."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Riset",
        "Pangan"
      ],
      en: [
        "Company",
        "Domestic",
        "Research Grant",
        "Food Science"
      ]
    }
  },
  {
    id: "loreal-unesco-women-science",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa L'Oréal-UNESCO For Women in Science",
      en: "L'Oréal-UNESCO For Women in Science"
    },
    provider: {
      id: "L'Oréal Indonesia & Komisi Nasional Indonesia untuk UNESCO",
      en: "L'Oréal Indonesia & Indonesian National Commission for UNESCO"
    },
    degreeLevels: ["master", "doctoral"],
    fundingType: "partial",
    coverage: {
      id: [
        "Hibah penelitian nasional bernilai Rp 100.000.000",
        "Jejaring riset dengan ilmuwan perempuan tingkat dunia",
        "Promosi profil ilmuwan di media nasional dan internasional"
      ],
      en: [
        "National research grant worth Rp 100,000,000",
        "Research networking opportunities with global female scientists",
        "Profile promotion in national and international scientific media"
      ]
    },
    requirements: {
      id: [
        "Ilmuwan perempuan warga negara Indonesia berusia maksimal 40 tahun",
        "Pendidikan minimal sedang menempuh S2 atau lulus S3 riset",
        "Memiliki penelitian aktif bidang Life Sciences atau Physical Sciences",
        "Mengirimkan proposal riset orisinal yang berpotensi berdampak luas bagi Indonesia"
      ],
      en: [
        "Female Indonesian scientist aged under 40",
        "Currently pursuing Master/PhD or holding a doctoral research degree",
        "Active research project in Life Sciences or Physical Sciences",
        "Submit an original research proposal with potential high impact for Indonesia"
      ]
    },
    status: "open",
    deadline: "2026-09-01",
    applicationUrl: "https://www.loreal.com/en/indonesia/pages/commitments/for-women-in-science/",
    description: {
      id: "Beasiswa dana riset bergengsi hasil kolaborasi L'Oréal dan UNESCO untuk mendukung ilmuwan perempuan muda Indonesia mewujudkan risetnya.",
      en: "Highly prestigious research fellowship by L'Oréal and UNESCO supporting young Indonesian female scientists."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Riset",
        "Sains",
        "Perempuan"
      ],
      en: [
        "Company",
        "Domestic",
        "Research Grant",
        "Science",
        "Female Empowerment"
      ]
    }
  },
  {
    id: "beasiswa-kemenpora",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Kemenpora Pascasarjana",
      en: "Beasiswa Kemenpora Postgraduate"
    },
    provider: {
      id: "Kementerian Pemuda dan Olahraga (Kemenpora)",
      en: "Ministry of Youth and Sports (Kemenpora)"
    },
    degreeLevels: ["master"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah penuh SPP/UKT magister",
        "Tunjangan biaya operasional hidup bulanan",
        "Bantuan biaya penelitian tesis dan buku kuliah"
      ],
      en: [
        "Full master's tuition fee (UKT/SPP) coverage",
        "Monthly living operational allowance",
        "Thesis research support & academic books fund"
      ]
    },
    requirements: {
      id: [
        "Pemuda Indonesia berusia 20-30 tahun saat mendaftar",
        "IPK minimal 3.00 pada program Sarjana (S1)",
        "Aktif dalam organisasi kepemudaan, olahraga, atau wirausaha sosial",
        "Rekomendasi dari organisasi pemuda tingkat nasional/daerah"
      ],
      en: [
        "Indonesian youth aged 20-30 at application time",
        "Minimum GPA of 3.00 on a Bachelor's (S1) degree",
        "Active in youth organization, sports, or social entrepreneurship",
        "Recommendation letter from a registered national/regional youth organization"
      ]
    },
    status: "soon",
    deadline: "2026-08-15",
    applicationUrl: "https://kemenpora.go.id/",
    description: {
      id: "Beasiswa S2 dalam negeri dari Kemenpora untuk meningkatkan kapasitas kepemimpinan pemuda aktif berorganisasi di Indonesia.",
      en: "Postgraduate scholarship program by Kemenpora, boosting leadership capacity of active Indonesian youth leaders."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kepemimpinan",
        "Pemuda"
      ],
      en: [
        "Government",
        "Domestic",
        "Leadership",
        "Youth Development"
      ]
    }
  },
  {
    id: "beasiswa-kjmu-jakarta",
    studyLocation: ["domestic"],
    name: {
      id: "Kartu Jakarta Mahasiswa Unggul (KJMU)",
      en: "Kartu Jakarta Mahasiswa Unggul (KJMU)"
    },
    provider: {
      id: "Pemerintah Provinsi DKI Jakarta",
      en: "Provincial Government of DKI Jakarta"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan dana personal & biaya kuliah sebesar Rp 9.000.000 per semester",
        "Dialokasikan langsung untuk biaya UKT kuliah & biaya hidup"
      ],
      en: [
        "Personal & tuition financial aid of Rp 9,000,000 per semester",
        "Allocated directly to cover university tuition (UKT) & living costs"
      ]
    },
    requirements: {
      id: [
        "Warga DKI Jakarta dibuktikan dengan KTP & Kartu Keluarga DKI",
        "Terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS) daerah",
        "Lulus SMA/SMK/MA sederajat di Jakarta maksimal 3 tahun sebelumnya",
        "Lolos seleksi masuk PTN atau PTS terakreditasi A di Indonesia"
      ],
      en: [
        "DKI Jakarta resident with valid Jakarta national ID and family card",
        "Registered in local Integrated Social Welfare Database (DTKS)",
        "High school graduate in Jakarta from max 3 years prior",
        "Admitted to a state university (PTN) or Grade-A private university in Indonesia"
      ]
    },
    status: "open",
    deadline: "2026-09-10",
    applicationUrl: "https://kjp.jakarta.go.id/",
    description: {
      id: "Bantuan dana pendidikan penuh dari Pemprov DKI Jakarta bagi mahasiswa dari keluarga prasejahtera DKI guna menempuh kuliah S1/Diploma.",
      en: "Full higher education subsidy program by DKI Jakarta Government for underprivileged Jakarta youths to earn undergraduate degrees."
    },
    tags: {
      id: [
        "Pemerintah",
        "Regional",
        "Dalam Negeri",
        "Bantuan Sosial"
      ],
      en: [
        "Government",
        "Regional",
        "Domestic",
        "Social Welfare"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-jatim",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Pemprov Jatim (Pendidikan Keagamaan)",
      en: "Beasiswa Pemprov Jatim"
    },
    provider: {
      id: "Pemerintah Provinsi Jawa Timur",
      en: "Provincial Government of East Java"
    },
    degreeLevels: ["bachelor", "master"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan SPP kuliah penuh hingga kelulusan",
        "Tunjangan operasional pendukung belajar mengajar"
      ],
      en: [
        "Full tuition fees coverage until graduation",
        "Educational operational support allowance"
      ]
    },
    requirements: {
      id: [
        "Warga Jawa Timur dibuktikan dengan KTP Jawa Timur",
        "Mahasiswa di perguruan tinggi keagamaan (PTKI) atau guru diniyah",
        "Mendapatkan rekomendasi tertulis dari pondok pesantren atau lembaga keagamaan Jatim",
        "IPK minimal 3.00 pada skala 4.00"
      ],
      en: [
        "Resident of East Java holding a valid East Java ID",
        "Student at Islamic Higher Education (PTKI) or a Diniyah teacher",
        "Recommendation letter from Islamic boarding schools (Pesantren) in East Java",
        "Minimum GPA of 3.00 on a 4.00 scale"
      ]
    },
    status: "closed",
    deadline: "2026-07-20",
    applicationUrl: "https://jatimprov.go.id/",
    description: {
      id: "Beasiswa pemerintah Provinsi Jawa Timur untuk meningkatkan kompetensi akademik para guru diniyah dan mahasiswa pendidikan keagamaan.",
      en: "East Java government scholarship supporting religious educators and students in pursuing higher education."
    },
    tags: {
      id: [
        "Pemerintah",
        "Regional",
        "Dalam Negeri",
        "Keagamaan"
      ],
      en: [
        "Government",
        "Regional",
        "Domestic",
        "Religious Education"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-jateng",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Pemprov Jateng (Berprestasi Prasejahtera)",
      en: "Beasiswa Pemprov Jateng"
    },
    provider: {
      id: "Pemerintah Provinsi Jawa Tengah",
      en: "Provincial Government of Central Java"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Uang kuliah kuliah penuh di universitas negeri Jawa Tengah",
        "Akomodasi asrama pembinaan",
        "Bantuan asuransi kesehatan dasar"
      ],
      en: [
        "Full tuition fee coverage at public universities in Central Java",
        "Student dormitory accommodation",
        "Basic healthcare insurance coverage"
      ]
    },
    requirements: {
      id: [
        "Warga asli Jawa Tengah dari keluarga prasejahtera (terdaftar DTKS)",
        "Lulus SMA/SMK/MA sederajat dengan prestasi akademik tinggi",
        "Diterima di perguruan tinggi negeri (PTN) di Jawa Tengah",
        "Tidak sedang menerima bantuan beasiswa lainnya"
      ],
      en: [
        "Resident of Central Java from a low-income household (registered in DTKS)",
        "High school graduate with high academic achievements",
        "Admitted to a public university (PTN) in Central Java",
        "Not receiving other scholarship awards"
      ]
    },
    status: "soon",
    deadline: "2026-08-10",
    applicationUrl: "https://jatengprov.go.id/",
    description: {
      id: "Program beasiswa Pemprov Jawa Tengah untuk memberikan hak akses kuliah S1 gratis bagi siswa cerdas dari keluarga miskin Jateng.",
      en: "Central Java government scholarship program offering free college access to gifted underprivileged high school graduates."
    },
    tags: {
      id: [
        "Pemerintah",
        "Regional",
        "Dalam Negeri",
        "Bantuan Sosial"
      ],
      en: [
        "Government",
        "Regional",
        "Domestic",
        "Social Support"
      ]
    }
  },
  {
    id: "bni-lestari-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa BNI Lestari (CSR)",
      en: "BNI Lestari Scholarship"
    },
    provider: {
      id: "PT Bank Negara Indonesia (Persero) Tbk",
      en: "PT Bank Negara Indonesia (Persero) Tbk"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Dana tunjangan pendidikan tahunan sebesar Rp 8.000.000",
        "Akses mengikuti program magang mahasiswa BNI",
        "Sertifikasi dan pelatihan literasi keuangan digital"
      ],
      en: [
        "Annual education financial grant of Rp 8,000,000",
        "Access to BNI student internship opportunities",
        "Certification and training in digital financial literacy"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 4-6 di universitas mitra nasional BNI",
        "IPK minimal 3.25 (PTN) / 3.50 (PTS)",
        "Aktif dalam kegiatan sosial kemasyarakatan",
        "Jurusan: Ekonomi, Bisnis, Akuntansi, atau Teknik Informatika"
      ],
      en: [
        "Active S1 student in semester 4 to 6 at BNI national partner universities",
        "Minimum GPA of 3.25 (State) / 3.50 (Private)",
        "Active in social work and community services",
        "Majors: Economics, Business, Accounting, or Computer Science/IT"
      ]
    },
    status: "soon",
    deadline: "2026-09-15",
    applicationUrl: "https://www.bni.co.id/",
    description: {
      id: "Beasiswa dana SPP dan magang industri dari Bank Negara Indonesia untuk membina mahasiswa berprestasi menjadi analis keuangan masa depan.",
      en: "Financial tuition award and internship scheme by BNI, developing top talent in finance, banking, and digital technology."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Finansial",
        "Perbankan"
      ],
      en: [
        "Company",
        "Domestic",
        "Financial Support",
        "Banking"
      ]
    }
  },
  {
    id: "bank-mandiri-csr-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Bank Mandiri CSR",
      en: "Bank Mandiri CSR Scholarship"
    },
    provider: {
      id: "PT Bank Mandiri (Persero) Tbk",
      en: "PT Bank Mandiri (Persero) Tbk"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan dana tunai biaya pendidikan Rp 10.000.000 per tahun",
        "Program pendampingan karir dan mentoring kepemimpinan BUMN",
        "Akses program eksklusif Mandiri Young Leader Camp"
      ],
      en: [
        "Cash education grant of Rp 10,000,000 per year",
        "Career coaching and SOE leadership mentorship program",
        "Exclusive access to the Mandiri Young Leader Camp"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 minimal semester 4 di PTN terakreditasi",
        "IPK minimal 3.20 dan dipertahankan",
        "Memiliki jiwa wirausaha sosial atau prestasi kepemimpinan",
        "Tidak sedang menerima beasiswa dari bank/perusahaan kompetitor"
      ],
      en: [
        "Active S1 student in at least 4th semester at accredited state universities",
        "Minimum GPA of 3.20 maintained",
        "Possess social entrepreneurship drive or leadership achievements",
        "Not receiving scholarships from competitor banking/corporate entities"
      ]
    },
    status: "closed",
    deadline: "2026-05-15",
    applicationUrl: "https://www.bankmandiri.co.id/",
    description: {
      id: "Beasiswa bantuan dana CSR dari Bank Mandiri untuk mahasiswa berprestasi nasional guna mendorong kepemimpinan berwawasan global.",
      en: "CSR scholarship scheme by Bank Mandiri assisting top college students with financial awards and business leadership mentorship."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Kepemimpinan",
        "BUMN"
      ],
      en: [
        "Company",
        "Domestic",
        "Leadership",
        "SOE Focus"
      ]
    }
  },
  {
    id: "etos-id-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Etos ID (Dompet Dhuafa)",
      en: "Etos ID Scholarship"
    },
    provider: {
      id: "Dompet Dhuafa & Lembaga Pengembangan Insani (LPI)",
      en: "Dompet Dhuafa & Lembaga Pengembangan Insani (LPI)"
    },
    degreeLevels: ["bachelor"],
    fundingType: "full",
    coverage: {
      id: [
        "Bantuan UKT / SPP kuliah penuh selama 8 semester",
        "Uang saku bulanan pembinaan tetap",
        "Akomodasi asrama pembinaan karakter selama 3 tahun",
        "Dukungan biaya persiapan tugas akhir & karir pasca kampus"
      ],
      en: [
        "Full semester tuition fee (UKT/SPP) coverage for 8 semesters",
        "Fixed monthly living stipend",
        "Character development boarding house accommodation for 3 years",
        "Financial support for final graduation project & career placement preparation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa semester 1 di universitas negeri (PTN) mitra Etos ID",
        "Berasal dari keluarga prasejahtera yang terkonfirmasi panitia",
        "Memiliki tekad belajar kuat dan rekam nilai rapor sekolah bagus",
        "Bersedia mengikuti seluruh rangkaian pembinaan asrama & aksi sosial"
      ],
      en: [
        "1st-semester undergraduate student at partner state universities (PTN)",
        "Verifiable underprivileged household financial background",
        "Strong academic records from high school & passion for learning",
        "Commit to all onboarding, dormitory training, and social service actions"
      ]
    },
    status: "closed",
    deadline: "2026-08-20",
    applicationUrl: "https://www.etos-id.net/",
    description: {
      id: "Beasiswa investasi masa depan dari Dompet Dhuafa yang memadukan bantuan biaya kuliah penuh dengan asrama pembinaan karakter islami.",
      en: "A fully funded social development scholarship by Dompet Dhuafa, supporting underprivileged state university students."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Dalam Negeri",
        "Sosial",
        "Asrama"
      ],
      en: [
        "Private Foundation",
        "Domestic",
        "Social Welfare",
        "Boarding Program"
      ]
    }
  },
  {
    id: "rumah-zakat-scholarship",
    studyLocation: ["domestic"],
    name: {
      id: "Beasiswa Juara Rumah Zakat",
      en: "Beasiswa Juara Rumah Zakat"
    },
    provider: {
      id: "Lembaga Zakat Rumah Zakat",
      en: "Rumah Zakat Foundation"
    },
    degreeLevels: ["bachelor"],
    fundingType: "partial",
    coverage: {
      id: [
        "Bantuan dana UKT kuliah berkelanjutan setiap semester",
        "Tunjangan buku akademik tahunan",
        "Pelatihan pemberdayaan masyarakat & kepemimpinan sosial"
      ],
      en: [
        "Tuition fee (UKT) subsidy contribution disbursed semesterly",
        "Annual academic textbook allowance",
        "Social leadership and community empowerment training workshops"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1/Diploma minimal semester 2",
        "Berasal dari keluarga kurang mampu secara finansial",
        "IPK minimal 3.00 dari transkrip nilai resmi",
        "Aktif dalam kegiatan kerelawanan sosial/pemberdayaan masyarakat"
      ],
      en: [
        "Active S1/Diploma student in at least 2nd semester",
        "Verifiable low-income household financial background",
        "Minimum GPA of 3.00",
        "Active engagement in volunteer work or community empowerment initiatives"
      ]
    },
    status: "open",
    deadline: "2026-11-15",
    applicationUrl: "https://www.rumahzakat.org/",
    description: {
      id: "Beasiswa bantuan pendidikan dari Rumah Zakat untuk meringankan biaya kuliah mahasiswa berprestasi dari keluarga kurang mampu.",
      en: "Educational aid program by Rumah Zakat assisting talented underprivileged college students with tuition subsidies."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Dalam Negeri",
        "Sosial",
        "Relawan"
      ],
      en: [
        "Private Foundation",
        "Domestic",
        "Social Welfare",
        "Volunteering"
      ]
    }
  }
];
