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
    studyLocation: [
      'domestic',
      'overseas'
    ],
    name: {
      id: "LPDP Beasiswa Reguler",
      en: "LPDP Regular Scholarship"
    },
    provider: {
      id: "Lembaga Pengelola Dana Pendidikan (Kemenkeu)",
      en: "Indonesia Endowment Fund for Education (Ministry of Finance)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'open',
    deadline: "2026-07-25",
    applicationUrl: "https://beasiswalpdp.kemenkeu.go.id/",
    description: {
      id: "Beasiswa pemerintah Indonesia paling bergengsi yang didanai oleh Kementerian Keuangan. Mendukung mahasiswa Indonesia untuk menempuh jenjang S2 dan S3 di universitas terbaik dalam dan luar negeri.",
      en: "The most prestigious Indonesian government scholarship funded by the Ministry of Finance. It supports Indonesian students to pursue Master and Doctoral degrees at top domestic and global universities to foster future leadership."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Luar Negeri",
        "Bergengsi"
      ],
      en: [
        "Government",
        "Domestic",
        "Overseas",
        "Prestigious"
      ]
    }
  },
  {
    id: "djarum-beasiswa-plus",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Djarum Beasiswa Plus",
      en: "Djarum Beasiswa Plus"
    },
    provider: {
      id: "Djarum Foundation",
      en: "Djarum Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
    deadline: "2026-05-30",
    applicationUrl: "https://djarumbeasiswaplus.org/",
    description: {
      id: "Beasiswa swasta bergengsi yang berfokus pada pelatihan soft skills di samping bantuan finansial. Bertujuan mencetak calon pemimpin masa depan Indonesia.",
      en: "A highly prestigious private scholarship that focuses on soft skills training alongside financial assistance. It aims to prepare the next generation of visionary leaders for Indonesia."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Soft Skills",
        "Kepemimpinan"
      ],
      en: [
        "Private Foundation",
        "Soft Skills",
        "Leadership"
      ]
    }
  },
  {
    id: "beasiswa-unggulan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Unggulan",
      en: "Beasiswa Unggulan"
    },
    provider: {
      id: "Kementerian Pendidikan dan Kebudayaan",
      en: "Ministry of Education and Culture"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-08-15",
    applicationUrl: "https://beasiswaunggulan.kemdikbud.go.id/",
    description: {
      id: "Program beasiswa Kemendikbudristek untuk mahasiswa berprestasi Indonesia guna menempuh pendidikan tinggi di PTN maupun PTS dalam negeri.",
      en: "Beasiswa Unggulan is a scholarship program awarded by the Ministry of Education and Culture to outstanding Indonesian students to pursue education in domestic public and private universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Berprestasi"
      ],
      en: [
        "Government",
        "Domestic",
        "Merit-Based"
      ]
    }
  },
  {
    id: "beasiswa-bakti-bca",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bakti BCA",
      en: "Bakti BCA Scholarship"
    },
    provider: {
      id: "PT Bank Central Asia Tbk",
      en: "PT Bank Central Asia Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
    deadline: "2026-09-12",
    applicationUrl: "https://www.bca.co.id/en/tentang-bca/Corporate-Social-Responsibility/bakti-bca/bakti-pendidikan",
    description: {
      id: "Program CSR Bakti BCA untuk mendukung mahasiswa S1 berprestasi dengan bantuan finansial dan program pengembangan profesional guna memasuki dunia kerja.",
      en: "BCA Corporate Social Responsibility program supporting talented undergraduate students with both financial assistance and professional development programs to gear them up for the future workplace."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Karir"
      ],
      en: [
        "Corporate",
        "Domestic",
        "Career Prep"
      ]
    }
  },
  {
    id: "beasiswa-indonesia-bangkit",
    studyLocation: [
      'domestic',
      'overseas'
    ],
    name: {
      id: "Beasiswa Indonesia Bangkit (BIB)",
      en: "Beasiswa Indonesia Bangkit (BIB)"
    },
    provider: {
      id: "Kementerian Agama (Kemenag) & LPDP",
      en: "Ministry of Religious Affairs (Kemenag) & LPDP"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'open',
    deadline: "2026-07-10",
    applicationUrl: "https://beasiswa.kemenag.go.id/",
    description: {
      id: "Program beasiswa kolaborasi Kemenag dan LPDP untuk membiayai studi formal jenjang S1, S2, dan S3 baik di dalam maupun di luar negeri.",
      en: "A collaborative prestige scholarship between Ministry of Religious Affairs and LPDP targeting students, teachers, lecturers, and academic staff under Kemenag environment to pursue degrees domestic or overseas."
    },
    tags: {
      id: [
        "Pemerintah",
        "Kemenag",
        "Pendidikan Agama",
        "Luar Negeri"
      ],
      en: [
        "Government",
        "Kemenag",
        "Religious Education",
        "Domestic",
        "Overseas"
      ]
    }
  },
  {
    id: "beasiswa-kse",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Karya Salemba Empat (KSE)",
      en: "Karya Salemba Empat (KSE) Scholarship"
    },
    provider: {
      id: "Yayasan Karya Salemba Empat",
      en: "Karya Salemba Empat Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'open',
    deadline: "2026-08-30",
    applicationUrl: "https://beasiswa.or.id/",
    description: {
      id: "Menyediakan bantuan finansial dan pelatihan kepemimpinan untuk mahasiswa S1 di berbagai PTN di seluruh Indonesia guna membentuk pemimpin berjiwa patriotik.",
      en: "Provides financial aid and leadership camps to potential undergraduate students in various state universities across Indonesia to form outstanding, patriotic future leaders."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Dalam Negeri",
        "Sosial",
        "Kepemimpinan"
      ],
      en: [
        "Private Foundation",
        "Domestic",
        "Social Impact",
        "Leadership"
      ]
    }
  },
  {
    id: "tanoto-teladan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Tanoto Foundation Program TELADAN",
      en: "Tanoto Foundation TELADAN Program"
    },
    provider: {
      id: "Tanoto Foundation",
      en: "Tanoto Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'open',
    deadline: "2026-09-07",
    applicationUrl: "https://www.tanotofoundation.org/",
    description: {
      id: "Program beasiswa komprehensif yang dirancang untuk membina mahasiswa berprestasi menjadi pemimpin masa depan yang unggul dan bertanggung jawab sosial.",
      en: "A comprehensive scholarship program that transforms talented Indonesian undergraduate students into future leaders who are academically excellent and socially responsible."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Dalam Negeri",
        "Kepemimpinan",
        "Bergengsi"
      ],
      en: [
        "Private Foundation",
        "Domestic",
        "Leadership",
        "Prestigious"
      ]
    }
  },
  {
    id: "beasiswa-bi",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bank Indonesia",
      en: "Bank Indonesia Scholarship"
    },
    provider: {
      id: "Bank Indonesia (Bank Sentral)",
      en: "Bank Indonesia (Central Bank)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'open',
    deadline: "2026-10-15",
    applicationUrl: "https://www.bi.go.id/",
    description: {
      id: "Beasiswa dari Bank Indonesia untuk mahasiswa S1 aktif guna melatih soft skills dan kontribusi sosial melalui wadah GenBI.",
      en: "A prestigious scholarship from the Central Bank of Indonesia to support undergraduate students with leadership coaching and active community projects via GenBI."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Finansial",
        "Kepemimpinan"
      ],
      en: [
        "Government",
        "Domestic",
        "Finance",
        "Leadership"
      ]
    }
  },
  {
    id: "beasiswa-vdmi",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Van Deventer-Maas Indonesia (VDMI)",
      en: "Van Deventer-Maas Indonesia (VDMI) Scholarship"
    },
    provider: {
      id: "Van Deventer-Maas Stichting",
      en: "Van Deventer-Maas Stichting"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
    deadline: "2026-03-10",
    applicationUrl: "https://vdms-scholarship.org/",
    description: {
      id: "Yayasan asal Belanda mendanai beasiswa bulanan dan pembinaan karakter bagi mahasiswa prasejahtera di lebih dari 30 universitas di Indonesia.",
      en: "A Dutch foundation program providing monthly allowance and leadership growth to Indonesian students from underprivileged families in more than 30 Indonesian universities."
    },
    tags: {
      id: [
        "Yayasan Internasional",
        "Dalam Negeri",
        "Bantuan Sosial"
      ],
      en: [
        "International Foundation",
        "Domestic",
        "Underprivileged"
      ]
    }
  },
  {
    id: "fulbright-master",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Fulbright Master's Degree Program",
      en: "Fulbright Master's Degree Program"
    },
    provider: {
      id: "AMINEF (Pemerintah AS)",
      en: "AMINEF (US Government)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-02-15",
    applicationUrl: "https://www.aminef.or.id/",
    description: {
      id: "Beasiswa penuh prestisius yang didanai pemerintah AS bagi lulusan S1 Indonesia untuk meraih gelar Master di universitas-universitas Amerika Serikat.",
      en: "A prestigious scholarship program funded by the US government for outstanding Indonesian graduates to pursue master degrees at top-tier universities in the United States."
    },
    tags: {
      id: [
        "Pemerintah",
        "Amerika Serikat",
        "Luar Negeri",
        "Bergengsi"
      ],
      en: [
        "Government",
        "US",
        "Overseas",
        "Prestigious"
      ]
    }
  },
  {
    id: "chevening-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Chevening Scholarship (Pemerintah Inggris)",
      en: "Chevening Scholarship (UK Government)"
    },
    provider: {
      id: "Pemerintah Inggris (FCDO)",
      en: "United Kingdom Government (FCDO)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'soon',
    deadline: "2026-11-05",
    applicationUrl: "https://www.chevening.org/",
    description: {
      id: "Beasiswa global pemerintah Inggris untuk mendanai kuliah S1/S2 satu tahun di UK bagi calon pemimpin masa depan.",
      en: "The UK government’s global scholarship program. Offers unique opportunities for future leaders and influencers to study a one-year Master degree in the UK."
    },
    tags: {
      id: [
        "Pemerintah",
        "Inggris",
        "Luar Negeri",
        "Kepemimpinan",
        "Bergengsi"
      ],
      en: [
        "Government",
        "UK",
        "Overseas",
        "Leadership",
        "Prestigious"
      ]
    }
  },
  {
    id: "aas-australia",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Australia Awards Scholarships (AAS)",
      en: "Australia Awards Scholarships (AAS)"
    },
    provider: {
      id: "Pemerintah Australia (DFAT)",
      en: "Australian Government (DFAT)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-04-30",
    applicationUrl: "https://www.australiaawardsindonesia.org/",
    description: {
      id: "Beasiswa pascasarjana jangka panjang dari pemerintah Australia bagi warga negara Indonesia guna memperkuat kemitraan bilateral.",
      en: "Long-term scholarships funded by the Australian Government for Indonesian citizens to study postgraduate programs at Australian universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Australia",
        "Luar Negeri",
        "Pembangunan"
      ],
      en: [
        "Government",
        "Australia",
        "Overseas",
        "Development"
      ]
    }
  },
  {
    id: "mext-embassy",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa MEXT Jepang",
      en: "MEXT Research Students Scholarship"
    },
    provider: {
      id: "Pemerintah Jepang (Monbukagakusho)",
      en: "Japanese Government (Monbukagakusho)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-05-15",
    applicationUrl: "https://www.id.emb-japan.go.id/",
    description: {
      id: "Beasiswa penuh dari Kementerian Pendidikan Jepang untuk mahasiswa pascasarjana melakukan penelitian ilmiah dan perkuliahan di Jepang.",
      en: "A prestigious full scholarship by the Japanese Government for postgraduates to conduct research and earn degrees at universities in Japan."
    },
    tags: {
      id: [
        "Pemerintah",
        "Jepang",
        "Luar Negeri",
        "Penelitian"
      ],
      en: [
        "Government",
        "Japan",
        "Overseas",
        "Research"
      ]
    }
  },
  {
    id: "gks-graduate",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Global Korea Scholarship (GKS)",
      en: "Global Korea Scholarship (GKS)"
    },
    provider: {
      id: "NIIED (Pemerintah Korea Selatan)",
      en: "National Institute for International Education (NIIED)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-03-10",
    applicationUrl: "https://www.studyinkorea.go.kr/",
    description: {
      id: "Beasiswa pemerintah Korsel untuk memberikan kesempatan kuliah pascasarjana bagi mahasiswa asing guna mempromosikan persahabatan global.",
      en: "South Korean Government scholarship offering international students opportunities to study postgraduate degrees at Korean higher education institutions."
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
        "Language Study"
      ]
    }
  },
  {
    id: "daad-epos",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa DAAD EPOS Jerman",
      en: "DAAD EPOS Postgraduate Scholarship"
    },
    provider: {
      id: "Pemerintah Jerman (DAAD)",
      en: "German Academic Exchange Service (DAAD)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'open',
    deadline: "2026-08-31",
    applicationUrl: "https://www.daad.de/",
    description: {
      id: "Program beasiswa pemerintah Jerman bagi para profesional di negara berkembang untuk menempuh program studi pembangunan.",
      en: "German Government scholarship program for professionals from developing countries to pursue development-related postgraduate courses at German universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Jerman",
        "Luar Negeri",
        "Profesional"
      ],
      en: [
        "Government",
        "Germany",
        "Overseas",
        "Development",
        "Professional"
      ]
    }
  },
  {
    id: "erasmus-mundus",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Erasmus Mundus Joint Masters",
      en: "Erasmus Mundus Joint Masters"
    },
    provider: {
      id: "Komisi Uni Eropa",
      en: "European Union Commission"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-02-15",
    applicationUrl: "https://ec.europa.eu/programmes/erasmus-plus/",
    description: {
      id: "Program kuliah terintegrasi tingkat pascasarjana di berbagai konsorsium universitas Uni Eropa, memberikan gelar ganda atau gabungan.",
      en: "Highly integrated study programs offered by consortia of EU universities, allowing students to earn dual or joint degrees across Europe."
    },
    tags: {
      id: [
        "Pemerintah",
        "Eropa",
        "Luar Negeri",
        "Gelar Ganda"
      ],
      en: [
        "Government",
        "Europe",
        "Overseas",
        "Joint Degree"
      ]
    }
  },
  {
    id: "eiffel-excellence",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Eiffel Excellence Scholarship Program",
      en: "Eiffel Excellence Scholarship Program"
    },
    provider: {
      id: "Kementerian Luar Negeri Prancis",
      en: "French Ministry for Europe and Foreign Affairs"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-01-10",
    applicationUrl: "https://www.campusfrance.org/",
    description: {
      id: "Program pemerintah Prancis untuk memikat talenta internasional terbaik menempuh studi Master dan PhD di Prancis.",
      en: "French government program to attract top international students to pursue Master's and PhD programs in French universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Prancis",
        "Luar Negeri",
        "Bergengsi"
      ],
      en: [
        "Government",
        "France",
        "Overseas",
        "Prestigious"
      ]
    }
  },
  {
    id: "turkiye-burslari",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Türkiye Scholarships (Türkiye Bursları)",
      en: "Türkiye Scholarships (Türkiye Bursları)"
    },
    provider: {
      id: "Pemerintah Turki",
      en: "Government of Turkey"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-02-20",
    applicationUrl: "https://www.turkiyeburslari.gov.tr/",
    description: {
      id: "Program beasiswa penuh yang didanai pemerintah Turki bagi pelajar internasional untuk meraih gelar studi akademik di Turki.",
      en: "A government-funded international scholarship program for students worldwide to earn undergraduate, master, or doctoral degrees in Turkey."
    },
    tags: {
      id: [
        "Pemerintah",
        "Turki",
        "Luar Negeri",
        "Bahasa"
      ],
      en: [
        "Government",
        "Turkey",
        "Overseas",
        "Language Study"
      ]
    }
  },
  {
    id: "singa-singapore",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Singapore International Graduate Award (SINGA)",
      en: "Singapore International Graduate Award (SINGA)"
    },
    provider: {
      id: "A*STAR Singapore",
      en: "Agency for Science, Technology and Research (A*STAR)"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-06-01",
    applicationUrl: "https://www.a-star.edu.sg/",
    description: {
      id: "Program kolaborasi A*STAR, NTU, NUS, SUTD, dan SMU untuk mendanai studi PhD sains dan rekayasa di universitas top Singapura.",
      en: "SINGA is a partnership between A*STAR, NTU, NUS, SUTD, and SMU to support PhD studies in science and engineering in Singapore."
    },
    tags: {
      id: [
        "Pemerintah",
        "Singapura",
        "Luar Negeri",
        "Sains"
      ],
      en: [
        "Government",
        "Singapore",
        "Overseas",
        "Research",
        "Science"
      ]
    }
  },
  {
    id: "taiwan-icdf",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa TaiwanICDF",
      en: "TaiwanICDF Higher Education Scholarship"
    },
    provider: {
      id: "Taiwan ICDF Fund",
      en: "Taiwan International Cooperation and Development Fund"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-03-15",
    applicationUrl: "https://www.icdf.org.tw/",
    description: {
      id: "Program beasiswa penuh ICDF Taiwan untuk mempromosikan kerja sama internasional melalui pendidikan tinggi di universitas terkemuka Taiwan.",
      en: "Full scholarship program by TaiwanICDF to promote human resource development in friendly and developing nations through degrees at top Taiwan universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Taiwan",
        "Luar Negeri"
      ],
      en: [
        "Government",
        "Taiwan",
        "Overseas"
      ]
    }
  },
  {
    id: "grab-scholar",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Grab Scholar: Program Beasiswa Grab",
      en: "Grab Scholar: Program Beasiswa Grab"
    },
    provider: {
      id: "Grab Indonesia & BenihBaik",
      en: "Grab Indonesia & BenihBaik"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'soon',
    deadline: "2026-07-30",
    applicationUrl: "https://www.grab.com/id/",
    description: {
      id: "Inisiatif CSR Grab Indonesia bekerja sama dengan BenihBaik untuk meringankan akses perguruan tinggi bagi anak-anak keluarga mitra Grab dan publik.",
      en: "Grab Indonesia's CSR initiative in partnership with BenihBaik to provide full higher education funding to talented youth and grab partner families."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Sosial"
      ],
      en: [
        "Corporate",
        "Domestic",
        "Social Impact"
      ]
    }
  },
  {
    id: "beasiswa-cimb-niaga",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa CIMB Niaga (Kejar Mimpi)",
      en: "CIMB Niaga Scholarship (Kejar Mimpi)"
    },
    provider: {
      id: "PT Bank CIMB Niaga Tbk",
      en: "PT Bank CIMB Niaga Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'open',
    deadline: "2026-09-05",
    applicationUrl: "https://kejarmimpi.id/beasiswacimbniaga/",
    description: {
      id: "Beasiswa swasta korporat oleh CIMB Niaga untuk memfasilitasi kebutuhan dana kuliah dan teknologi bagi mahasiswa S1 tingkat akhir.",
      en: "A private corporate scholarship by CIMB Niaga supporting undergraduate students entering their final two years with tuition fees and tech support."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Finansial"
      ],
      en: [
        "Corporate",
        "Domestic",
        "Finance"
      ]
    }
  },
  {
    id: "beasiswa-baznas",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa BAZNAS Cendekia",
      en: "BAZNAS Cendekia Scholarship"
    },
    provider: {
      id: "Badan Amil Zakat Nasional (BAZNAS)",
      en: "National Zakat Board (BAZNAS)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
    deadline: "2026-07-12",
    applicationUrl: "https://beasiswa.baznas.go.id/",
    description: {
      id: "Program zakat nasional untuk meringankan biaya kuliah dan melatih jiwa kepemimpinan islami bagi mahasiswa S1 akhir.",
      en: "A national zakat program offering tuition subsidies and Islamic leadership mentoring to final-year undergraduate students in Indonesia."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Keagamaan",
        "Mentoring"
      ],
      en: [
        "Government",
        "Domestic",
        "Islamic",
        "Mentoring"
      ]
    }
  },
  {
    id: "knight-hennessy",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Knight-Hennessy Scholars Program",
      en: "Knight-Hennessy Scholars Program"
    },
    provider: {
      id: "Stanford University",
      en: "Stanford University"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'soon',
    deadline: "2026-10-09",
    applicationUrl: "https://knight-hennessy.stanford.edu/",
    description: {
      id: "Beasiswa lulusan global di Stanford University untuk menyiapkan pemimpin memecahkan masalah dunia yang rumit.",
      en: "Highly competitive global graduate scholar program at Stanford University, equipping leaders to address complex global challenges."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Amerika Serikat",
        "Luar Negeri",
        "Akademik",
        "Kepemimpinan"
      ],
      en: [
        "Private Foundation",
        "US",
        "Overseas",
        "Academic Excellence",
        "Leadership"
      ]
    }
  },
  {
    id: "schwarzman-scholars",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Schwarzman Scholars",
      en: "Schwarzman Scholars"
    },
    provider: {
      id: "Schwarzman Foundation (Tsinghua University)",
      en: "Schwarzman Foundation (Tsinghua University)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://www.schwarzmanscholars.org/",
    description: {
      id: "Beasiswa S2 penuh satu tahun di Universitas Tsinghua di Beijing untuk mendidik generasi pemimpin global selanjutnya.",
      en: "A fully-funded one-year Master’s degree program at Tsinghua University in Beijing designed to prepare the next generation of global leaders."
    },
    tags: {
      id: [
        "Yayasan Swasta",
        "Cina",
        "Luar Negeri",
        "Hubungan Global",
        "Kepemimpinan"
      ],
      en: [
        "Private Foundation",
        "China",
        "Overseas",
        "Global Affairs",
        "Leadership"
      ]
    }
  },
  {
    id: "commonwealth-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Commonwealth (Inggris)",
      en: "Commonwealth Scholarships (UK)"
    },
    provider: {
      id: "Commonwealth Scholarship Commission (CSC)",
      en: "Commonwealth Scholarship Commission (CSC)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'open',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Manaaki New Zealand",
      en: "Manaaki New Zealand Scholarships"
    },
    provider: {
      id: "Pemerintah Selandia Baru",
      en: "Government of New Zealand"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Holland (Belanda)",
      en: "Holland Scholarship"
    },
    provider: {
      id: "Kementerian Pendidikan, Kebudayaan, dan Sains Belanda",
      en: "Dutch Ministry of Education, Culture and Science"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa SI untuk Profesional Global (SISGP)",
      en: "SI Scholarships for Global Professionals"
    },
    provider: {
      id: "Institut Swedia (Pemerintah Swedia)",
      en: "Swedish Institute (Government of Sweden)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Swiss Government Excellence",
      en: "Swiss Government Excellence Scholarships"
    },
    provider: {
      id: "Pemerintah Konfederasi Swiss",
      en: "Government of Swiss Confederation"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'open',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Clarendon Fund (Oxford)",
      en: "Clarendon Fund Scholarships"
    },
    provider: {
      id: "University of Oxford",
      en: "University of Oxford"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Jardine Foundation",
      en: "Jardine Scholarship"
    },
    provider: {
      id: "The Jardine Foundation",
      en: "The Jardine Foundation"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    id: "kaust-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa KAUST Fellowship (Arab Saudi)",
      en: "KAUST Fellowship"
    },
    provider: {
      id: "King Abdullah University of Science and Technology (KAUST)",
      en: "King Abdullah University of Science and Technology (KAUST)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa ADB-JSP (Pemerintah Jepang)",
      en: "Asian Development Bank-Japan Scholarship Program"
    },
    provider: {
      id: "Asian Development Bank (ADB) & Pemerintah Jepang",
      en: "Asian Development Bank (ADB) & Government of Japan"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'open',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kolaborasi Bank Dunia & Jepang (JJ/WBGSP)",
      en: "Joint Japan/World Bank Graduate Scholarship"
    },
    provider: {
      id: "World Bank & Pemerintah Jepang",
      en: "World Bank & Government of Japan"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Mastercard Foundation Scholars",
      en: "Mastercard Foundation Scholars Program"
    },
    provider: {
      id: "Mastercard Foundation",
      en: "Mastercard Foundation"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
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
    status: 'open',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Yenching Academy (Peking University)",
      en: "Yenching Academy Fellowship"
    },
    provider: {
      id: "Yenching Academy of Peking University",
      en: "Yenching Academy of Peking University"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'soon',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Rotary Peace Fellowships",
      en: "Rotary Peace Fellowships"
    },
    provider: {
      id: "Rotary International Foundation",
      en: "Rotary International Foundation"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa GREAT (Inggris)",
      en: "GREAT Scholarships"
    },
    provider: {
      id: "British Council & Pemerintah Inggris",
      en: "British Council & UK Government"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa VLIR-UOS (Belgia)",
      en: "VLIR-UOS Scholarships"
    },
    provider: {
      id: "Lembaga Pendidikan Pemerintah Flanders Belgia",
      en: "Flemish Interuniversity Council (Belgium)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Brunei Darussalam (BDGS)",
      en: "Brunei Darussalam Government Scholarship"
    },
    provider: {
      id: "Kementerian Luar Negeri Brunei Darussalam",
      en: "Ministry of Foreign Affairs of Brunei Darussalam"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana Ajinomoto",
      en: "Ajinomoto Postgraduate Scholarship"
    },
    provider: {
      id: "Ajinomoto Foundation Indonesia",
      en: "Ajinomoto Postgraduate Scholarship"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa INPEX Foundation",
      en: "INPEX Scholarship"
    },
    provider: {
      id: "INPEX Foundation (Perusahaan Migas Jepang)",
      en: "INPEX Foundation (Japanese Energy Company)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'open',
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
    id: "ust-korea",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa UST Korea (Sains & Teknologi)",
      en: "UST Scholarships (South Korea)"
    },
    provider: {
      id: "University of Science and Technology (UST) Korea Selatan",
      en: "University of Science and Technology (UST) South Korea"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Global Korea Scholarship (GKS) S1",
      en: "GKS for Undergraduate"
    },
    provider: {
      id: "NIIED (Pemerintah Korea Selatan)",
      en: "NIIED (Government of South Korea)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa France Excellence Indonesia",
      en: "France Excellence Indonesia"
    },
    provider: {
      id: "Kedutaan Besar Prancis di Indonesia & Campus France",
      en: "Embassy of France in Indonesia & Campus France"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Invest Your Talent in Italy (IYT)",
      en: "Invest Your Talent in Italy"
    },
    provider: {
      id: "Kementerian Luar Negeri Italia",
      en: "Italian Ministry of Foreign Affairs"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Irlandia Pascasarjana",
      en: "Government of Ireland Postgraduate Scholarship"
    },
    provider: {
      id: "Irish Research Council (IRC)",
      en: "Irish Research Council (IRC)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'open',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Astra 1st",
      en: "Astra 1st Scholarship"
    },
    provider: {
      id: "PT Astra International Tbk",
      en: "PT Astra International Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pertamina Sobat Bumi",
      en: "Beasiswa Pertamina Sobat Bumi"
    },
    provider: {
      id: "Pertamina Foundation",
      en: "Pertamina Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    id: "beasiswa-bappenas-dalam-negeri",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pusbindiklatren Bappenas (Dalam Negeri)",
      en: "Pusbindiklatren Bappenas Scholarship (Domestic)"
    },
    provider: {
      id: "Kementerian PPN / Bappenas",
      en: "Ministry of National Development Planning / Bappenas"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    id: "ybm-brilian-bright",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Bright Scholarship YBM BRILiaN",
      en: "Bright Scholarship YBM BRILiaN"
    },
    provider: {
      id: "Yayasan Baitul Maal (YBM) BRILiaN",
      en: "Yayasan Baitul Maal (YBM) BRILiaN"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'soon',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Mahaghora",
      en: "Beasiswa Mahaghora"
    },
    provider: {
      id: "Yayasan Mahaghora (Mahaghora Group)",
      en: "Yayasan Mahaghora (Mahaghora Group)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'soon',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa BCA Finance",
      en: "BCA Finance Scholarship"
    },
    provider: {
      id: "PT BCA Finance",
      en: "PT BCA Finance"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Cargill Global Scholars",
      en: "Cargill Global Scholars Program"
    },
    provider: {
      id: "Cargill & Institute of International Education (IIE)",
      en: "Cargill & Institute of International Education (IIE)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pembinaan Rumah Kepemimpinan",
      en: "Rumah Kepemimpinan Scholarship"
    },
    provider: {
      id: "Yayasan Rumah Kepemimpinan",
      en: "Yayasan Rumah Kepemimpinan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'open',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Mizan (Bantuan Tesis & Disertasi)",
      en: "Beasiswa Mizan"
    },
    provider: {
      id: "Mizan Group",
      en: "Beasiswa Mizan"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    id: "xl-axiata-future-leaders",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa XL Axiata Future Leaders (XLFL)",
      en: "XL Axiata Future Leaders"
    },
    provider: {
      id: "PT XL Axiata Tbk",
      en: "PT XL Axiata Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Korindo Foundation",
      en: "Beasiswa Korindo"
    },
    provider: {
      id: "Yayasan Korindo (Korindo Group)",
      en: "Yayasan Korindo (Korindo Group)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'soon',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa DataPrint",
      en: "DataPrint Scholarship"
    },
    provider: {
      id: "DataPrint Indonesia",
      en: "DataPrint Indonesia"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'open',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Indofood Riset Nugraha (IRN)",
      en: "Indofood Riset Nugraha (IRN)"
    },
    provider: {
      id: "PT Indofood Sukses Makmur Tbk",
      en: "PT Indofood Sukses Makmur Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa L'Oréal-UNESCO For Women in Science",
      en: "L'Oréal-UNESCO For Women in Science"
    },
    provider: {
      id: "L'Oréal Indonesia & Komisi Nasional Indonesia untuk UNESCO",
      en: "L'Oréal Indonesia & Indonesian National Commission for UNESCO"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Kemenpora Pascasarjana",
      en: "Beasiswa Kemenpora Postgraduate"
    },
    provider: {
      id: "Kementerian Pemuda dan Olahraga (Kemenpora)",
      en: "Ministry of Youth and Sports (Kemenpora)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Kartu Jakarta Mahasiswa Unggul (KJMU)",
      en: "Kartu Jakarta Mahasiswa Unggul (KJMU)"
    },
    provider: {
      id: "Pemerintah Provinsi DKI Jakarta",
      en: "Provincial Government of DKI Jakarta"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'open',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Jatim (Pendidikan Keagamaan)",
      en: "Beasiswa Pemprov Jatim"
    },
    provider: {
      id: "Pemerintah Provinsi Jawa Timur",
      en: "Provincial Government of East Java"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Jateng (Berprestasi Prasejahtera)",
      en: "Beasiswa Pemprov Jateng"
    },
    provider: {
      id: "Pemerintah Provinsi Jawa Tengah",
      en: "Provincial Government of Central Java"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'soon',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa BNI Lestari (CSR)",
      en: "BNI Lestari Scholarship"
    },
    provider: {
      id: "PT Bank Negara Indonesia (Persero) Tbk",
      en: "PT Bank Negara Indonesia (Persero) Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'soon',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bank Mandiri CSR",
      en: "Bank Mandiri CSR Scholarship"
    },
    provider: {
      id: "PT Bank Mandiri (Persero) Tbk",
      en: "PT Bank Mandiri (Persero) Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Etos ID (Dompet Dhuafa)",
      en: "Etos ID Scholarship"
    },
    provider: {
      id: "Dompet Dhuafa & Lembaga Pengembangan Insani (LPI)",
      en: "Dompet Dhuafa & Lembaga Pengembangan Insani (LPI)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'closed',
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
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Juara Rumah Zakat",
      en: "Beasiswa Juara Rumah Zakat"
    },
    provider: {
      id: "Lembaga Zakat Rumah Zakat",
      en: "Rumah Zakat Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'open',
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
  },
  {
    id: "rhodes-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Rhodes (Universitas Oxford)",
      en: "Rhodes Scholarship (University of Oxford)"
    },
    provider: {
      id: "The Rhodes Trust",
      en: "The Rhodes Trust"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'soon',
    deadline: "2026-10-01",
    applicationUrl: "https://www.rhodeshouse.ox.ac.uk/scholarships/the-rhodes-scholarship/",
    description: {
      id: "Salah satu beasiswa pascasarjana paling bergengsi dan tertua di dunia, mendukung mahasiswa berprestasi luar biasa untuk belajar di Universitas Oxford.",
      en: "One of the most prestigious and oldest international graduate fellowship programs in the world, supporting exceptional students to study at the University of Oxford."
    },
    tags: {
      id: [
        "Prestisius",
        "Luar Negeri",
        "Inggris",
        "Yayasan"
      ],
      en: [
        "Prestigious",
        "Overseas",
        "UK",
        "Foundation"
      ]
    }
  },
  {
    id: "vanier-canada-graduate-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana Vanier Kanada",
      en: "Vanier Canada Graduate Scholarships"
    },
    provider: {
      id: "Pemerintah Kanada",
      en: "Government of Canada"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'soon',
    deadline: "2026-11-04",
    applicationUrl: "https://vanier.gc.ca/en/home-accueil.html",
    description: {
      id: "Beasiswa pemerintah Kanada untuk menarik mahasiswa doktoral berprestasi dunia guna melakukan riset di universitas-universitas Kanada.",
      en: "Canadian government program designed to attract and retain world-class doctoral students to Canadian universities."
    },
    tags: {
      id: [
        "Doktoral",
        "Luar Negeri",
        "Kanada",
        "Pemerintah"
      ],
      en: [
        "Doctoral",
        "Overseas",
        "Canada",
        "Government"
      ]
    }
  },
  {
    id: "ntu-asean-undergraduate-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Sarjana ASEAN NTU",
      en: "NTU ASEAN Undergraduate Scholarship"
    },
    provider: {
      id: "Nanyang Technological University (NTU) Singapore",
      en: "Nanyang Technological University (NTU) Singapore"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-03-15",
    applicationUrl: "https://www.ntu.edu.sg/admissions/undergraduate/scholarships/asean-undergraduate-scholarship",
    description: {
      id: "Beasiswa bergengsi dari NTU Singapura untuk siswa-siswi terbaik se-ASEAN yang ingin menempuh studi S1 di salah satu universitas terbaik dunia.",
      en: "A prestigious scholarship offered by NTU Singapore for outstanding high school graduates from ASEAN countries to pursue bachelor's studies."
    },
    tags: {
      id: [
        "Sarjana",
        "Luar Negeri",
        "Singapura",
        "Universitas"
      ],
      en: [
        "Undergraduate",
        "Overseas",
        "Singapore",
        "University"
      ]
    }
  },
  {
    id: "csc-silk-road-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa CSC Silk Road Program (Tiongkok)",
      en: "CSC Silk Road Program Scholarship (China)"
    },
    provider: {
      id: "Kementerian Pendidikan Republik Rakyat Tiongkok",
      en: "Ministry of Education of the People's Republic of China"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-04-30",
    applicationUrl: "https://www.campuschina.org/",
    description: {
      id: "Program beasiswa penuh pemerintah Tiongkok untuk mendukung mahasiswa asing dari negara mitra jalur sutra modern menempuh pendidikan tinggi.",
      en: "Full scholarship program by the Chinese government to support international students from Belt and Road partner countries to study in China."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Tiongkok",
        "Full Funded"
      ],
      en: [
        "Government",
        "Overseas",
        "China",
        "Full Funded"
      ]
    }
  },
  {
    id: "melbourne-graduate-research-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Pascasarjana Universitas Melbourne",
      en: "University of Melbourne Graduate Research Scholarships"
    },
    provider: {
      id: "University of Melbourne, Australia",
      en: "University of Melbourne, Australia"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'open',
    deadline: "2026-10-31",
    applicationUrl: "https://scholarships.unimelb.edu.au/awards/graduate-research-scholarship",
    description: {
      id: "Beasiswa riset pascasarjana dari Universitas Melbourne untuk mendukung mahasiswa lokal dan internasional menempuh gelar Master/PhD riset.",
      en: "Prestigious research scholarship offered by the University of Melbourne to support high-achieving domestic and international research students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Research"
      ]
    }
  },
  {
    id: "bsi-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa BSI (Bank Syariah Indonesia) Scholarship",
      en: "BSI (Bank Syariah Indonesia) Scholarship"
    },
    provider: {
      id: "BSI Maslahat & Bank Syariah Indonesia",
      en: "BSI Maslahat & Bank Syariah Indonesia"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'open',
    deadline: "2026-09-30",
    applicationUrl: "https://www.bsimaslahat.org/",
    description: {
      id: "Program beasiswa CSR Bank Syariah Indonesia untuk membantu mahasiswa berprestasi dan berkarakter kepemimpinan di tingkat sarjana.",
      en: "CSR scholarship program by Bank Syariah Indonesia aiming to support high-achieving undergraduate students with leadership potential."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Perbankan",
        "BUMN"
      ],
      en: [
        "Private",
        "Domestic",
        "Banking",
        "SOE"
      ]
    }
  },
  {
    id: "paragon-scholarship-program",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Paragon Scholarship Program",
      en: "Paragon Scholarship Program"
    },
    provider: {
      id: "PT Paragon Technology and Innovation",
      en: "PT Paragon Technology and Innovation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://www.paragon-innovation.com/",
    description: {
      id: "Program CSR unggulan dari produsen kosmetik terkemuka (Wardah, Kahf) untuk mendukung mahasiswa berkarakter unggul dalam kepemimpinan dan inovasi.",
      en: "Flagship CSR program by PT Paragon (cosmetics maker of Wardah, Kahf) supporting university students to excel in leadership and innovation."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Karier",
        "Kosmetik"
      ],
      en: [
        "Private",
        "Domestic",
        "Career",
        "Cosmetics"
      ]
    }
  },
  {
    id: "sinarmas-smart-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Sinar Mas Agribusiness and Food (SMART)",
      en: "Sinar Mas Agribusiness and Food (SMART) Scholarship"
    },
    provider: {
      id: "PT Sinar Mas Agribusiness and Food",
      en: "PT Sinar Mas Agribusiness and Food"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-05-15",
    applicationUrl: "https://www.smart-tbk.com/beasiswa/",
    description: {
      id: "Beasiswa vokasi S1 penuh dengan ikatan dinas dari Sinar Mas untuk mencetak pemimpin masa depan di industri kelapa sawit.",
      en: "Full vocational undergraduate scholarship with employment bond from Sinar Mas to nurture future leaders in the palm oil industry."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Ikatan Dinas",
        "Agribisnis"
      ],
      en: [
        "Private",
        "Domestic",
        "Service Bond",
        "Agribusiness"
      ]
    }
  },
  {
    id: "toyota-astra-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Yayasan Toyota-Astra",
      en: "Toyota-Astra Foundation Scholarship"
    },
    provider: {
      id: "Yayasan Toyota-Astra",
      en: "Toyota-Astra Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'soon',
    deadline: "2026-08-30",
    applicationUrl: "http://www.yayasantoyotaastra.or.id/",
    description: {
      id: "Beasiswa sosial dari Yayasan Toyota-Astra untuk membantu biaya pendidikan mahasiswa fakultas teknik dan sains di perguruan tinggi negeri Indonesia.",
      en: "Social scholarship by Toyota-Astra Foundation to support engineering and science students at top Indonesian public universities."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Teknik",
        "Sosial"
      ],
      en: [
        "Private",
        "Domestic",
        "Engineering",
        "Social"
      ]
    }
  },
  {
    id: "pembangunan-jaya-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pembangunan Jaya (Yayasan Pembangunan Jaya)",
      en: "Pembangunan Jaya Scholarship (Yayasan Pembangunan Jaya)"
    },
    provider: {
      id: "Yayasan Pendidikan Pembangunan Jaya",
      en: "Yayasan Pendidikan Pembangunan Jaya"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'open',
    deadline: "2026-09-15",
    applicationUrl: "http://www.yayasanjaya.org/",
    description: {
      id: "Beasiswa bagi mahasiswa sarjana berprestasi tinggi untuk mendorong iklim penelitian inovasi entrepreneurship di kalangan mahasiswa perkotaan.",
      en: "Scholarship program for high-achieving undergraduate students to foster innovation and entrepreneurship research."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Makalah",
        "Entrepreneurship"
      ],
      en: [
        "Private",
        "Domestic",
        "Paper",
        "Entrepreneurship"
      ]
    }
  },
  {
    id: "nus-presidential-graduate-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa NUS Presidential Graduate Fellowship (Singapura)",
      en: "NUS Presidential Graduate Fellowship (Singapore)"
    },
    provider: {
      id: "National University of Singapore (NUS)",
      en: "National University of Singapore (NUS)"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-11-15",
    applicationUrl: "https://nusgs.nus.edu.sg/scholarships-fellowships/",
    description: {
      id: "Beasiswa riset tingkat doktoral paling bergengsi dari Universitas Nasional Singapura (NUS) untuk kandidat Ph.D. berprestasi tinggi se-dunia.",
      en: "The most prestigious doctoral research scholarship awarded by National University of Singapore (NUS) to outstanding Ph.D. candidates globally."
    },
    tags: {
      id: [
        "Doktoral",
        "Luar Negeri",
        "Singapura",
        "Universitas"
      ],
      en: [
        "Doctoral",
        "Overseas",
        "Singapore",
        "University"
      ]
    }
  },
  {
    id: "unu-ias-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Universitas PBB - UNU-IAS (Jepang)",
      en: "UNU-IAS Scholarship (United Nations University, Japan)"
    },
    provider: {
      id: "United Nations University Institute for the Advanced Study of Sustainability",
      en: "United Nations University Institute for the Advanced Study of Sustainability"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-03-25",
    applicationUrl: "https://ias.unu.edu/en/admissions/degrees",
    description: {
      id: "Beasiswa riset pascasarjana bergengsi di Tokyo, Jepang, untuk menempuh studi pembangunan berkelanjutan di bawah naungan langsung PBB.",
      en: "A prestigious graduate research scholarship program in Tokyo, Japan, focusing on sustainability studies under the direct auspices of the United Nations."
    },
    tags: {
      id: [
        "Riset",
        "Luar Negeri",
        "Jepang",
        "PBB"
      ],
      en: [
        "Research",
        "Overseas",
        "Japan",
        "UN"
      ]
    }
  },
  {
    id: "humphrey-fellowship-us",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Hubert H. Humphrey (Amerika Serikat)",
      en: "Hubert H. Humphrey Fellowship Program (USA)"
    },
    provider: {
      id: "Kementerian Luar Negeri Amerika Serikat & AMINEF Indonesia",
      en: "US Department of State & AMINEF Indonesia"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-05-15",
    applicationUrl: "https://www.aminef.or.id/",
    description: {
      id: "Program beasiswa non-gelar 10 bulan untuk para profesional tingkat menengah di bidang pelayanan publik untuk belajar dan mengembangkan jaringan di AS.",
      en: "A 10-month non-degree fellowship program in the United States for mid-career professionals dedicated to public service."
    },
    tags: {
      id: [
        "Profesional",
        "Luar Negeri",
        "Amerika Serikat",
        "AMINEF"
      ],
      en: [
        "Professional",
        "Overseas",
        "USA",
        "AMINEF"
      ]
    }
  },
  {
    id: "adelaide-graduate-research-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Pascasarjana Universitas Adelaide (Australia)",
      en: "Adelaide Graduate Research Scholarships (Australia)"
    },
    provider: {
      id: "University of Adelaide, Australia",
      en: "University of Adelaide, Australia"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://www.adelaide.edu.au/graduate-research/scholarships",
    description: {
      id: "Beasiswa riset pascasarjana dari Universitas Adelaide untuk mendukung mahasiswa berprestasi internasional melakukan riset tingkat dunia di Australia.",
      en: "Research scholarship from the University of Adelaide to support high-achieving international students conducting world-class research."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Research"
      ]
    }
  },
  {
    id: "sbw-berlin-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa SBW Berlin (Jerman)",
      en: "SBW Berlin Scholarship (Germany)"
    },
    provider: {
      id: "SBW Berlin Foundation",
      en: "SBW Berlin Foundation"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://sbw.berlin/en/portfolio-item/sbw-berlin-scholarship/",
    description: {
      id: "Beasiswa penuh di Berlin, Jerman, untuk melatih pemimpin masa depan dari negara berkembang yang memiliki komitmen kuat pada isu sosial.",
      en: "A full scholarship in Berlin, Germany, designed to support young talents from developing countries who are committed to social engagement."
    },
    tags: {
      id: [
        "Yayasan",
        "Luar Negeri",
        "Jerman",
        "Pemberdayaan"
      ],
      en: [
        "Foundation",
        "Overseas",
        "Germany",
        "Empowerment"
      ]
    }
  },
  {
    id: "adaro-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Yayasan Adaro Bangun Negeri (YABN)",
      en: "Adaro Foundation Scholarship"
    },
    provider: {
      id: "Yayasan Adaro Bangun Negeri & Adaro Energy",
      en: "Adaro Foundation & Adaro Energy"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'open',
    deadline: "2026-07-31",
    applicationUrl: "https://yabn.or.id/",
    description: {
      id: "Beasiswa dari Adaro Energy untuk membantu mahasiswa berprestasi dan berkarakter kepemimpinan yang membutuhkan bantuan finansial.",
      en: "Scholarship program by Adaro Energy supporting high-achieving, underprivileged undergraduate students to pursue their higher education."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Korporasi",
        "Energi"
      ],
      en: [
        "Private",
        "Domestic",
        "Corporate",
        "Energy"
      ]
    }
  },
  {
    id: "bca-syariah-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa BCA Syariah (CSR)",
      en: "BCA Syariah CSR Scholarship"
    },
    provider: {
      id: "PT Bank BCA Syariah",
      en: "PT Bank BCA Syariah"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
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
    status: 'soon',
    deadline: "2026-09-10",
    applicationUrl: "https://www.bcasyariah.co.id/",
    description: {
      id: "Program bantuan dana pendidikan perbankan syariah dari BCA Syariah untuk membekali lulusan siap pakai di industri keuangan.",
      en: "Education fund support from BCA Syariah Sharia Banking aimed at equipping undergraduate students with financial industry readiness."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Perbankan",
        "Sharia"
      ],
      en: [
        "Private",
        "Domestic",
        "Banking",
        "Sharia"
      ]
    }
  },
  {
    id: "medco-foundation-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Yayasan Medco Foundation",
      en: "Medco Foundation Scholarship"
    },
    provider: {
      id: "Medco Foundation & MedcoEnergi",
      en: "Medco Foundation & MedcoEnergi"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'closed',
    deadline: "2026-08-15",
    applicationUrl: "https://www.medcofoundation.org/",
    description: {
      id: "Beasiswa prestasi dari Medco Group untuk mencetak teknokrat terampil di bidang energi, sumber daya alam, dan ketahanan pangan.",
      en: "Prestigious corporate scholarship by Medco Group fostering future technocrats in energy, natural resources, and food security."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Energi",
        "Teknik"
      ],
      en: [
        "Private",
        "Domestic",
        "Energy",
        "Engineering"
      ]
    }
  },
  {
    id: "kalbe-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Riset & Sains Kalbe Farma (CSR)",
      en: "Kalbe Farma Science & Research Scholarship"
    },
    provider: {
      id: "PT Kalbe Farma Tbk",
      en: "PT Kalbe Farma Tbk"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
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
    status: 'open',
    deadline: "2026-08-31",
    applicationUrl: "https://www.kalbe.co.id/",
    description: {
      id: "Beasiswa inovasi sains PT Kalbe Farma untuk mendorong lahirnya temuan baru di bidang farmasi dan kedokteran dari mahasiswa Indonesia.",
      en: "Science innovation scholarship by PT Kalbe Farma aiming to stimulate pharmaceutical and medical discoveries among Indonesian scholars."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Farmasi",
        "Riset"
      ],
      en: [
        "Private",
        "Domestic",
        "Pharmacy",
        "Research"
      ]
    }
  },
  {
    id: "bank-mega-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bank Mega Prestasi",
      en: "Bank Mega Academic Excellence Scholarship"
    },
    provider: {
      id: "PT Bank Mega Tbk & CT Corp",
      en: "PT Bank Mega Tbk & CT Corp"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
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
    status: 'open',
    deadline: "2026-09-15",
    applicationUrl: "https://www.bankmega.com/",
    description: {
      id: "Beasiswa prestasi dari Bank Mega untuk mendukung mahasiswa sarjana berprestasi tinggi di perguruan tinggi Indonesia dalam mempersiapkan karier perbankan.",
      en: "Bank Mega scholarship program supporting high-achieving undergraduate students to prepare for successful careers in banking."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Perbankan",
        "MT"
      ],
      en: [
        "Private",
        "Domestic",
        "Banking",
        "MT"
      ]
    }
  },
  {
    id: "kip-kuliah",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Kartu Indonesia Pintar Kuliah (KIP-K)",
      en: "Kartu Indonesia Pintar Kuliah (KIP-K) Scholarship"
    },
    provider: {
      id: "Puslapdik Kemendikbudristek RI",
      en: "Puslapdik Ministry of Education, Culture, Research, and Technology"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh (UKT/SPP) langsung ke perguruan tinggi",
        "Tunjangan biaya hidup bulanan berkisar antara Rp 800.000 hingga Rp 1.400.000 sesuai klaster wilayah"
      ],
      en: [
        "Full tuition fee waiver paid directly to the university",
        "Monthly living allowance ranging from IDR 800,000 to IDR 1,400,000 based on regional cost clusters"
      ]
    },
    requirements: {
      id: [
        "Lulusan SMA/SMK/sederajat tahun berjalan atau maksimal 2 tahun sebelumnya",
        "Memiliki potensi akademik baik tetapi memiliki keterbatasan ekonomi yang dibuktikan dengan KIP/KKS/DTKS",
        "Lolos seleksi penerimaan mahasiswa baru di perguruan tinggi negeri atau swasta pada prodi terakreditasi"
      ],
      en: [
        "High school graduate of the current year or maximum 2 years prior",
        "Demonstrate academic potential but face economic constraints backed by KIP/KKS/DTKS data",
        "Passed university admission selection at state or private universities in accredited programs"
      ]
    },
    status: 'open',
    deadline: "2026-10-31",
    applicationUrl: "https://kip-kuliah.kemdikbud.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan kuliah dari pemerintah Indonesia untuk siswa berprestasi dengan keterbatasan ekonomi.",
      en: "Indonesian government's educational financial assistance program for high-achieving high school graduates with economic limitations."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Bantuan Sosial",
        "S1"
      ],
      en: [
        "Government",
        "Domestic",
        "Social Aid",
        "Undergraduate"
      ]
    }
  },
  {
    id: "kaltim-tuntas",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Kaltim Tuntas",
      en: "East Kalimantan Tuntas Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Kalimantan Timur",
      en: "Provincial Government of East Kalimantan"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah tunggal (UKT) penuh hingga lulus sesuai masa studi normatif",
        "Dukungan operasional pendidikan tahunan"
      ],
      en: [
        "Full tuition fee (UKT) coverage until graduation based on normative study period",
        "Annual educational operational support"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia berdomisili di Kalimantan Timur dibuktikan dengan KTP/KK",
        "Mahasiswa aktif di perguruan tinggi terakreditasi minimal B",
        "Memiliki IPK minimal sesuai ketentuan program (prestasi akademik/non-akademik)"
      ],
      en: [
        "Indonesian citizen residing in East Kalimantan proven by ID Card/Family Card",
        "Active student at a university accredited at least B",
        "Minimum GPA meets program criteria (academic/non-academic achievements)"
      ]
    },
    status: 'soon',
    deadline: "2026-08-30",
    applicationUrl: "https://beasiswa.kaltimprov.go.id/",
    description: {
      id: "Beasiswa penuh dari Pemprov Kaltim untuk mendukung peningkatan kualitas SDM putra-putri Kalimantan Timur.",
      en: "Full scholarship funded by the East Kalimantan Provincial Government to support higher education for local youths."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Daerah",
        "Kaltim"
      ],
      en: [
        "Government",
        "Domestic",
        "Regional",
        "East Kalimantan"
      ]
    }
  },
  {
    id: "paragon-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Paragon Scholarship Program (PSP)",
      en: "Paragon Scholarship Program (PSP)"
    },
    provider: {
      id: "PT Paragon Technology and Innovation",
      en: "PT Paragon Technology and Innovation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan per semester",
        "Pelatihan soft skills dan kepemimpinan eksklusif",
        "Kesempatan magang di Paragon Group",
        "Jalur karir cepat (fast track recruitment) di Paragon"
      ],
      en: [
        "Educational allowance per semester",
        "Exclusive leadership and soft skills training programs",
        "Internship opportunities in Paragon Group",
        "Fast-track recruitment career opportunities at Paragon"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 di perguruan tinggi mitra semester 5 pada saat pendaftaran",
        "IPK minimal 3.30 dari skala 4.00",
        "Aktif berorganisasi dan tidak sedang menerima beasiswa lain"
      ],
      en: [
        "Active undergraduate student in partner universities entering 5th semester",
        "Minimum GPA of 3.30 on a 4.00 scale",
        "Active in organizational activities and not receiving other scholarships"
      ]
    },
    status: 'soon',
    deadline: "2026-08-15",
    applicationUrl: "https://www.paragon-innovation.com/",
    description: {
      id: "Program beasiswa CSR dari produsen kosmetik terbesar di Indonesia (Wardah, Kahf, Emina) untuk pengembangan kepemimpinan mahasiswa.",
      en: "CSR scholarship program from Indonesia's leading cosmetics manufacturer supporting university student leadership development."
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
        "Career"
      ]
    }
  },
  {
    id: "bca-finance-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa BCA Finance",
      en: "BCA Finance Scholarship"
    },
    provider: {
      id: "PT BCA Finance",
      en: "PT BCA Finance"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan finansial biaya pendidikan sebesar Rp 3.500.000 per semester hingga lulus (maksimal semester 8)"
      ],
      en: [
        "Financial education assistance of IDR 3,500,000 per semester until graduation (max semester 8)"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semua jurusan minimal semester 4",
        "IPK minimal 3.00 (PTN) atau 3.40 (PTS)",
        "Tidak sedang menerima beasiswa lain dari pihak mana pun"
      ],
      en: [
        "Active undergraduate student from any major in at least 4th semester",
        "Minimum GPA of 3.00 (State Universities) or 3.40 (Private Universities)",
        "Not receiving other scholarships from any institution"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://bcafinance.co.id/",
    description: {
      id: "Bantuan finansial dari BCA Finance bagi mahasiswa berprestasi di seluruh Indonesia yang memiliki keterbatasan dana.",
      en: "Financial scholarship from BCA Finance supporting high-achieving undergraduate students across Indonesia."
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
    id: "beasiswa-jakarta",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Yayasan Beasiswa Jakarta (YBJ)",
      en: "Yayasan Beasiswa Jakarta (YBJ) Scholarship"
    },
    provider: {
      id: "Yayasan Beasiswa Jakarta",
      en: "Yayasan Beasiswa Jakarta"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan penulisan tugas akhir / skripsi dan biaya pendidikan tahunan"
      ],
      en: [
        "Financial assistance for final thesis writing and annual educational support"
      ]
    },
    requirements: {
      id: [
        "Warga DKI Jakarta dibuktikan dengan KTP & Kartu Keluarga",
        "Mahasiswa aktif jenjang D3/S1 di perguruan tinggi di wilayah DKI Jakarta",
        "IPK minimal 3.00 dan berusia maksimal 25 tahun"
      ],
      en: [
        "DKI Jakarta resident proven by ID and Family Card",
        "Active student pursuing D3/S1 degree in a college located in DKI Jakarta",
        "Minimum GPA of 3.00 and maximum 25 years old"
      ]
    },
    status: 'soon',
    deadline: "2026-08-31",
    applicationUrl: "http://beasiswajakarta.jakarta.go.id/",
    description: {
      id: "Beasiswa bantuan dana pendidikan dari Pemerintah Provinsi DKI Jakarta melalui YBJ untuk mahasiswa berprestasi dan kurang mampu.",
      en: "Educational scholarship support provided by the DKI Jakarta Provincial Government through YBJ for local students."
    },
    tags: {
      id: [
        "Daerah",
        "Dalam Negeri",
        "Jakarta",
        "Finansial"
      ],
      en: [
        "Regional",
        "Domestic",
        "Jakarta",
        "Financial Support"
      ]
    }
  },
  {
    id: "gates-cambridge",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Gates Cambridge (Inggris)",
      en: "Gates Cambridge Scholarship (UK)"
    },
    provider: {
      id: "Bill & Melinda Gates Foundation",
      en: "Bill & Melinda Gates Foundation"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh (Composition Fee) di Universitas Cambridge",
        "Tunjangan pemeliharaan hidup senilai £20.000 per tahun",
        "Tiket pesawat ekonomi pulang-pergi kelas satu",
        "Tunjangan visa masuk & biaya kesehatan imigrasi (IHS)",
        "Pendanaan akademik tambahan untuk konferensi dan penelitian"
      ],
      en: [
        "Full cost of tuition (University Composition Fee) at Cambridge",
        "Maintenance allowance of £20,000 per year",
        "One economy-class round-trip airfare",
        "Inbound visa costs & Immigration Health Surcharge (IHS)",
        "Additional academic development funding for conferences and research"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Inggris (terbuka untuk WNI)",
        "Mendaftar kuliah pascasarjana penuh waktu (Master atau Ph.D.) di Universitas Cambridge",
        "Memiliki kemampuan akademik yang luar biasa dan kapasitas kepemimpinan kuat",
        "Memiliki komitmen untuk memperbaiki kehidupan orang lain"
      ],
      en: [
        "Citizen of any country outside the UK (including Indonesia)",
        "Applying to pursue a full-time postgraduate degree (Master or Ph.D.) at Cambridge",
        "Outstanding academic excellence and strong leadership capacity",
        "Commitment to improving the lives of others"
      ]
    },
    status: 'open',
    deadline: "2026-12-05",
    applicationUrl: "https://www.gatescambridge.org/",
    description: {
      id: "Salah satu beasiswa internasional paling kompetitif dan prestisius di dunia, didirikan oleh Bill Gates untuk studi pascasarjana di Cambridge.",
      en: "One of the most prestigious and competitive international scholarships globally, funded by Bill Gates for graduate studies at Cambridge."
    },
    tags: {
      id: [
        "Yayasan",
        "Luar Negeri",
        "Inggris",
        "Prestisius",
        "Riset"
      ],
      en: [
        "Foundation",
        "Overseas",
        "United Kingdom",
        "Prestigious",
        "Research"
      ]
    }
  },
  {
    id: "stipendium-hungaricum",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Hongaria (Stipendium Hungaricum)",
      en: "Stipendium Hungaricum Scholarship (Hungary)"
    },
    provider: {
      id: "Pemerintah Hongaria / Tempus Public Foundation",
      en: "Government of Hungary / Tempus Public Foundation"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh",
        "Tunjangan bulanan HUF 43.790 (non-PhD) atau HUF 140.000-180.000 (PhD)",
        "Kontribusi akomodasi asrama gratis atau bantuan sewa rumah HUF 40.000",
        "Asuransi kesehatan lengkap tahunan"
      ],
      en: [
        "Tuition-free education coverage",
        "Monthly stipend of HUF 43,790 (non-PhD) or HUF 140,000-180,000 (PhD)",
        "Free dormitory place or housing allowance of HUF 40,000 per month",
        "Comprehensive medical insurance coverage"
      ]
    },
    requirements: {
      id: [
        "Warga negara asing yang menjadi mitra kerja sama beasiswa (termasuk Indonesia)",
        "Berusia minimal 18 tahun pada tanggal 31 Agustus tahun berjalan",
        "Memenuhi persyaratan bahasa asing universitas tujuan (Inggris/Hongaria)"
      ],
      en: [
        "Citizen of sending partner countries (including Indonesia)",
        "At least 18 years old by August 31 of the application year",
        "Meet the language proficiency requirements (English/Hungarian) of host universities"
      ]
    },
    status: 'open',
    deadline: "2027-01-15",
    applicationUrl: "https://stipendiumhungaricum.hu/",
    description: {
      id: "Program beasiswa unggulan pemerintah Hongaria untuk menarik mahasiswa internasional berprestasi dari seluruh dunia.",
      en: "The Hungarian Government's flagship higher education scholarship program attracting top international students globally."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Hongaria",
        "Eropa"
      ],
      en: [
        "Government",
        "Overseas",
        "Hungary",
        "Europe"
      ]
    }
  },
  {
    id: "chinese-government-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Tiongkok (CGS)",
      en: "Chinese Government Scholarship (CGS)"
    },
    provider: {
      id: "Kementerian Pendidikan Republik Rakyat Tiongkok / CSC",
      en: "Ministry of Education of the People's Republic of China / CSC"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh",
        "Tunjangan hidup bulanan CNY 2.500 (S1), CNY 3.000 (S2), atau CNY 3.500 (S3)",
        "Akomodasi asrama universitas gratis",
        "Asuransi kesehatan komprehensif"
      ],
      en: [
        "Full tuition fees coverage waiver",
        "Monthly stipend of CNY 2,500 (S1), CNY 3,000 (S2), or CNY 3,500 (S3)",
        "Free university dormitory accommodation",
        "Comprehensive medical insurance coverage"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Tiongkok (terbuka untuk WNI)",
        "Memiliki ijazah kelulusan jenjang sebelumnya (SMA untuk S1, S1 untuk S2, S2 untuk S3)",
        "Memenuhi batasan usia (di bawah 25 untuk S1, di bawah 35 untuk S2, di bawah 40 untuk S3)",
        "Sertifikat kemahiran bahasa HSK (bahasa Mandarin) atau HSK/IELTS/TOEFL"
      ],
      en: [
        "Non-Chinese citizen (including Indonesian)",
        "Academic certificate of previous studies",
        "Age limits: under 25 for bachelor's, under 35 for master's, under 40 for doctoral",
        "Language proficiency: HSK for Chinese-taught programs or IELTS/TOEFL for English-taught"
      ]
    },
    status: 'soon',
    deadline: "2027-02-15",
    applicationUrl: "http://www.campuschina.org/",
    description: {
      id: "Beasiswa penuh dari pemerintah Tiongkok untuk mempererat hubungan internasional dan mempromosikan pendidikan di Tiongkok.",
      en: "Fully funded scholarship provided by the Chinese government to promote international student exchange and study in China."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Tiongkok",
        "Asia"
      ],
      en: [
        "Government",
        "Overseas",
        "China",
        "Asia"
      ]
    }
  },
  {
    id: "taiwan-moe-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Taiwan MOE (Kementerian Pendidikan Taiwan)",
      en: "Taiwan Ministry of Education (MOE) Scholarship"
    },
    provider: {
      id: "Kementerian Pendidikan Taiwan (MOE)",
      en: "Ministry of Education Taiwan (MOE)"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Subsidi biaya kuliah hingga NTD 40.000 per semester",
        "Tunjangan biaya hidup bulanan NTD 15.000 (S1) atau NTD 20.000 (S2/S3)"
      ],
      en: [
        "Tuition fee subsidy up to NTD 40,000 per semester",
        "Monthly living allowance of NTD 15,000 (Undergraduate) or NTD 20,000 (Graduate)"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia lulusan SMA/S1/S2 berprestasi",
        "Memiliki kemampuan bahasa Inggris (IELTS/TOEFL) atau Mandarin (TOCFL)",
        "Bukan warga negara Taiwan atau keturunan Tionghoa perantauan dari Taiwan"
      ],
      en: [
        "Indonesian citizen with excellent academic records",
        "English (IELTS/TOEFL) or Mandarin (TOCFL) language proficiency certificates",
        "Not a Taiwan national or an overseas Chinese student from Taiwan"
      ]
    },
    status: 'closed',
    deadline: "2026-03-31",
    applicationUrl: "https://www.studylinktaiwan.com/",
    description: {
      id: "Beasiswa penuh dari pemerintah Taiwan melalui Kementerian Pendidikan untuk mendanai mahasiswa berprestasi menempuh kuliah di Taiwan.",
      en: "Government-funded scholarship by the Ministry of Education of Taiwan supporting international degree-seeking students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Taiwan",
        "Asia"
      ],
      en: [
        "Government",
        "Overseas",
        "Taiwan",
        "Asia"
      ]
    }
  },
  {
    id: "russian-government-open-doors",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Open Doors Russian Olympiad",
      en: "Open Doors Russian Scholarship Project"
    },
    provider: {
      id: "Asosiasi Universitas Global & Pemerintah Rusia",
      en: "Global Universities Association & Government of the Russian Federation"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh 100% di salah satu universitas unggulan Rusia",
        "Penerimaan masuk universitas tanpa tes seleksi reguler"
      ],
      en: [
        "100% tuition fee waiver coverage at one of the top Russian universities",
        "Fast-track admissions without any regular entrance examinations"
      ]
    },
    requirements: {
      id: [
        "Memiliki gelar Sarjana (untuk S2) atau Magister (untuk S3) dari semua warga negara asing",
        "Mengikuti kompetisi olimpiade portofolio secara daring di platform resmi",
        "Lolos babak wawancara/ujian pemecahan masalah bagi yang terpilih"
      ],
      en: [
        "Hold a Bachelor's (for Master's track) or Master's (for PhD track) from any country",
        "Participate in the online portfolio Olympiad competition on the official site",
        "Pass the interview/problem-solving stage if selected"
      ]
    },
    status: 'open',
    deadline: "2026-12-10",
    applicationUrl: "https://od.globaluni.ru/en/",
    description: {
      id: "Beasiswa berbasis olimpiade kompetisi portofolio untuk mahasiswa internasional yang ingin melanjutkan S2 atau PhD di Rusia secara gratis.",
      en: "Olympiad-based portfolio scholarship project offering international students free master's or PhD entry at top Russian universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Rusia",
        "Olimpiade"
      ],
      en: [
        "Government",
        "Overseas",
        "Russia",
        "Olympiad"
      ]
    }
  },
  {
    id: "jfls-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Jabar Future Leaders Scholarship (JFLS)",
      en: "Jabar Future Leaders Scholarship (JFLS)"
    },
    provider: {
      id: "Pemerintah Provinsi Jawa Barat",
      en: "Provincial Government of West Java"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan biaya pendidikan penuh (UKT/SPP) selama masa studi normatif",
        "Akses ke jejaring komunitas JFLS dan program magang Pemprov Jabar"
      ],
      en: [
        "Full tuition fees coverage (UKT/SPP) for the normative duration of study",
        "Access to the JFLS community network and West Java government internships"
      ]
    },
    requirements: {
      id: [
        "Warga Jawa Barat dibuktikan dengan KTP dan Kartu Keluarga",
        "Mahasiswa aktif di perguruan tinggi mitra Pemprov Jabar dengan IPK minimal sesuai kategori",
        "Memiliki prestasi akademik atau non-akademik di bidang seni, olahraga, atau organisasi"
      ],
      en: [
        "Resident of West Java proven by ID Card and Family Card",
        "Active student at a West Java government partner university with minimum GPA based on category",
        "Have academic or non-academic achievements in arts, sports, or organizational leadership"
      ]
    },
    status: 'soon',
    deadline: "2026-07-31",
    applicationUrl: "https://jfls.jabarprov.go.id/",
    description: {
      id: "Program beasiswa dari Pemerintah Provinsi Jawa Barat untuk mencetak generasi muda Jawa Barat yang berkarakter dan kepemimpinan kuat.",
      en: "Scholarship program by the Provincial Government of West Java fostering youth character and leadership."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Jawa Barat",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "West Java",
        "Regional"
      ]
    }
  },
  {
    id: "xl-future-leaders",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa XL Future Leaders (XLFL)",
      en: "XL Future Leaders (XLFL) Scholarship"
    },
    provider: {
      id: "PT XL Axiata Tbk",
      en: "PT XL Axiata Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Program pelatihan kepemimpinan intensif selama 2 tahun",
        "Tunjangan gadget/laptop dan pulsa bulanan",
        "Akses jaringan profesional global"
      ],
      en: [
        "2-year intensive leadership development program",
        "Monthly gadget/laptop allowance and internet quota package",
        "Access to global professional networks"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1/D4 tingkat 1 atau 2 (semester 2 atau 4) dari semua jurusan",
        "IPK minimal 2.85 dari skala 4.00",
        "Aktif berorganisasi dan fasih berbahasa Inggris"
      ],
      en: [
        "Active undergraduate student in 1st or 2nd year (2nd or 4th semester) from any major",
        "Minimum GPA of 2.85 on a 4.00 scale",
        "Active in campus organizations and fluent in English"
      ]
    },
    status: 'soon',
    deadline: "2026-07-15",
    applicationUrl: "https://xlfutureleaders.org/",
    description: {
      id: "Program CSR kepemimpinan paling bergengsi dari XL Axiata untuk membekali mahasiswa dengan keahlian soft skills abad 21.",
      en: "XL Axiata's premier leadership development CSR program equipping students with essential 21st-century soft skills."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Kepemimpinan",
        "Pengembangan Diri"
      ],
      en: [
        "Company",
        "Domestic",
        "Leadership",
        "Self Development"
      ]
    }
  },
  {
    id: "sampoerna-foundation-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Putera Sampoerna Foundation (PSF)",
      en: "Putera Sampoerna Foundation (PSF) Scholarship"
    },
    provider: {
      id: "Putera Sampoerna Foundation",
      en: "Putera Sampoerna Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh (tuition fee) hingga kelulusan",
        "Tunjangan biaya hidup bulanan dan buku",
        "Program pengembangan karakter dan kepemimpinan"
      ],
      en: [
        "Full tuition fees coverage until graduation",
        "Monthly living and book allowance stipend",
        "Character and leadership development program"
      ]
    },
    requirements: {
      id: [
        "Lulusan SMA/SMK/sederajat berprestasi tinggi akademis",
        "Menunjukkan keterbatasan ekonomi finansial keluarga",
        "Lolos ujian masuk universitas mitra PSF"
      ],
      en: [
        "High school graduate with outstanding academic records",
        "Demonstrate financial need/economic constraints",
        "Pass the admission test for PSF partner universities"
      ]
    },
    status: 'closed',
    deadline: "2026-05-30",
    applicationUrl: "https://www.puterampornafoundation.org/",
    description: {
      id: "Beasiswa penuh dari yayasan Sampoerna untuk mencetak pemimpin masa depan berkelas dunia yang peduli pada kemajuan sosial.",
      en: "Full scholarship funded by Sampoerna Foundation to raise world-class future leaders committed to social progress."
    },
    tags: {
      id: [
        "Yayasan",
        "Dalam Negeri",
        "S1",
        "Sosial"
      ],
      en: [
        "Foundation",
        "Domestic",
        "Undergraduate",
        "Social Support"
      ]
    }
  },
  {
    id: "tj-park-posco-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa TJ Park POSCO",
      en: "TJ Park POSCO Scholarship"
    },
    provider: {
      id: "POSCO TJ Park Foundation (Korea)",
      en: "POSCO TJ Park Foundation (Korea)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan finansial biaya kuliah penuh selama 2 tahun akademik (semester 5-8)",
        "Program magang dan peluang karir di perusahaan afiliasi POSCO"
      ],
      en: [
        "Full tuition fees coverage for 2 academic years (semesters 5-8)",
        "Internship and career pathways at POSCO affiliated companies"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 4 dari universitas mitra (seperti UI, ITB, UGM)",
        "IPK minimal 3.30 dari skala 4.00",
        "Berasal dari jurusan sains, teknik, atau bahasa Korea lebih diutamakan"
      ],
      en: [
        "Active undergraduate student in 4th semester at partner universities (UI, ITB, UGM)",
        "Minimum GPA of 3.30 on a 4.00 scale",
        "Majoring in science, engineering, or Korean language studies preferred"
      ]
    },
    status: 'soon',
    deadline: "2026-09-15",
    applicationUrl: "https://www.postjpark.org/",
    description: {
      id: "Beasiswa prestasi dari yayasan raksasa baja Korea Selatan POSCO untuk mahasiswa terbaik di universitas top Indonesia.",
      en: "Merit-based scholarship by South Korea's steel giant POSCO supporting top-tier students at Indonesia's leading universities."
    },
    tags: {
      id: [
        "Yayasan",
        "Dalam Negeri",
        "Prestasi",
        "Korea Link"
      ],
      en: [
        "Foundation",
        "Domestic",
        "Academic Merit",
        "Korean Connection"
      ]
    }
  },
  {
    id: "cgi-thailand-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Chulabhorn Graduate Institute (Thailand)",
      en: "Chulabhorn Graduate Institute Scholarship (Thailand)"
    },
    provider: {
      id: "Chulabhorn Graduate Institute (CGI)",
      en: "Chulabhorn Graduate Institute (CGI)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh dibayarkan langsung ke CGI",
        "Tunjangan biaya hidup bulanan dan akomodasi tempat tinggal gratis",
        "Tiket pesawat ekonomi pulang-pergi",
        "Asuransi kesehatan lengkap dan tunjangan buku tahunan"
      ],
      en: [
        "Full tuition fees paid directly to CGI",
        "Monthly living allowance and free housing accommodation",
        "Economy-class round-trip airfare",
        "Comprehensive health insurance and annual book allowance stipend"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Thailand (termasuk WNI) berusia di bawah 30 tahun",
        "Lulusan S1 di bidang sains (kimia, biologi, farmasi) dengan IPK minimal 3.00",
        "Sertifikat IELTS minimal 6.0 atau TOEFL iBT 79"
      ],
      en: [
        "Non-Thai citizen (including Indonesian) under 30 years old",
        "Bachelor's degree in science (chemistry, biology, pharmacy) with min GPA 3.00",
        "English proficiency certificate (IELTS min 6.0 or TOEFL iBT 79)"
      ]
    },
    status: 'open',
    deadline: "2026-10-30",
    applicationUrl: "https://www.cgi.ac.th/admissions/scholarship/",
    description: {
      id: "Beasiswa penuh pascasarjana bidang sains terapan dan farmasi di Thailand yang disponsori oleh Putri Kerajaan Thailand Chulabhorn.",
      en: "Fully funded master's scholarship in applied sciences and pharmacy in Thailand, sponsored by HRH Princess Chulabhorn."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Thailand",
        "Sains"
      ],
      en: [
        "Government",
        "Overseas",
        "Thailand",
        "Science"
      ]
    }
  },
  {
    id: "ait-thailand-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Asian Institute of Technology (AIT)",
      en: "Asian Institute of Technology (AIT) Scholarship"
    },
    provider: {
      id: "Asian Institute of Technology (AIT)",
      en: "Asian Institute of Technology (AIT)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh (tuition fee) selama masa studi",
        "Tunjangan biaya hidup bulanan dan akomodasi asrama mahasiswa AIT"
      ],
      en: [
        "Full tuition fees waiver coverage for the duration of study",
        "Monthly living allowance and campus dormitory accommodation"
      ]
    },
    requirements: {
      id: [
        "Memiliki rekam akademis yang luar biasa (IPK minimal 3.00 dari skala 4.00)",
        "Memenuhi persyaratan kemahiran bahasa Inggris AIT (IELTS minimal 6.0)",
        "Terbuka untuk semua warga negara asing (termasuk Indonesia)"
      ],
      en: [
        "Outstanding academic records (min GPA 3.00 on a 4.00 scale)",
        "Meet AIT's English language proficiency (IELTS min 6.0 or equivalent)",
        "Open to candidates of all nationalities (including Indonesia)"
      ]
    },
    status: 'open',
    deadline: "2026-11-30",
    applicationUrl: "https://ait.ac.th/admissions/scholarships/",
    description: {
      id: "Program beasiswa penuh di institut teknologi internasional terkemuka di Thailand untuk riset pascasarjana tingkat lanjut.",
      en: "Fully funded scholarships at Thailand's premier international technology institute supporting graduate level research."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Thailand",
        "Teknik",
        "STEM"
      ],
      en: [
        "University",
        "Overseas",
        "Thailand",
        "Engineering",
        "STEM"
      ]
    }
  },
  {
    id: "kaad-scholarship-germany",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa KAAD (Jerman)",
      en: "KAAD Scholarship (Germany)"
    },
    provider: {
      id: "Catholic Academic Exchange Service (KAAD)",
      en: "Catholic Academic Exchange Service (KAAD)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh, asuransi kesehatan, dan tunjangan hidup bulanan di Jerman",
        "Kursus bahasa Jerman intensif sebelum keberangkatan",
        "Tiket pesawat ekonomi internasional pulang-pergi"
      ],
      en: [
        "Full tuition fees, health insurance, and monthly living allowance in Germany",
        "Intensive German language course costs covered pre-departure",
        "International economy-class round-trip airfare"
      ]
    },
    requirements: {
      id: [
        "Berasal dari negara berkembang (termasuk Indonesia) dan berdomisili di tanah air",
        "Memiliki prestasi akademik di atas rata-rata dan komitmen sosial-kemasyarakatan",
        "Memiliki sertifikat bahasa Jerman atau Inggris sesuai program studi tujuan"
      ],
      en: [
        "Citizen of a developing country (including Indonesia) and residing there",
        "Above-average academic records and commitment to social/societal progress",
        "German or English language certificate based on target program requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-07-31",
    applicationUrl: "https://www.kaad.de/en/scholarships/",
    description: {
      id: "Beasiswa penuh dari lembaga pertukaran akademis Katolik Jerman untuk mendukung mahasiswa berprestasi yang berkomitmen membangun tanah air.",
      en: "Fully funded scholarship by Germany's Catholic Academic Exchange Service supporting graduate studies for social builders."
    },
    tags: {
      id: [
        "Yayasan",
        "Luar Negeri",
        "Jerman",
        "Eropa",
        "Sosial"
      ],
      en: [
        "Foundation",
        "Overseas",
        "Germany",
        "Europe",
        "Social Focus"
      ]
    }
  },
  {
    id: "si-visby-program-sweden",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa SI Visby Programme (Swedia)",
      en: "SI Visby Programme Scholarship (Sweden)"
    },
    provider: {
      id: "Swedish Institute (SI)",
      en: "Swedish Institute (SI)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh dibayarkan langsung ke universitas Swedia",
        "Tunjangan biaya hidup bulanan sebesar SEK 10.000",
        "Tunjangan biaya perjalanan tiket pesawat satu kali",
        "Asuransi kesehatan lengkap tahunan"
      ],
      en: [
        "Full tuition fees paid directly to the Swedish university",
        "Monthly living allowance of SEK 10,000",
        "One-off travel grant for flight ticket costs",
        "Comprehensive health and accident insurance"
      ]
    },
    requirements: {
      id: [
        "Warga negara dari negara-negara mitra terpilih yang masuk kriteria program",
        "Mendaftar kuliah program Master di Swedia yang memenuhi syarat",
        "Menunjukkan potensi kepemimpinan dan pengalaman kerja relevan"
      ],
      en: [
        "Citizen of eligible target countries participating in the program",
        "Applying for eligible Master's programs at Swedish universities",
        "Demonstrate leadership potential and relevant professional experience"
      ]
    },
    status: 'closed',
    deadline: "2026-02-15",
    applicationUrl: "https://si.se/en/apply/scholarships/visby-programme/",
    description: {
      id: "Program beasiswa penuh pemerintah Swedia yang kompetitif untuk melatih pemimpin masa depan dalam pembangunan berkelanjutan.",
      en: "Sweden government's highly competitive scholarship program training future leaders in sustainable development."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Swedia",
        "Eropa"
      ],
      en: [
        "Government",
        "Overseas",
        "Sweden",
        "Europe"
      ]
    }
  },
  {
    id: "ubc-leader-tomorrow-canada",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa UBC Karen McKellin International Leader of Tomorrow (Kanada)",
      en: "UBC Karen McKellin International Leader of Tomorrow Award (Canada)"
    },
    provider: {
      id: "University of British Columbia (UBC)",
      en: "University of British Columbia (UBC)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan pendanaan penuh yang disesuaikan dengan kebutuhan finansial (mencakup biaya kuliah penuh dan biaya hidup)",
        "Program pembinaan kepemimpinan global mahasiwa"
      ],
      en: [
        "Full funding package tailored to financial need (covering full tuition and living expenses)",
        "Global student leadership development mentoring program"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional berprestasi akademik luar biasa (IPK tinggi)",
        "Dicalonkan secara resmi oleh sekolah asal (SMA/sederajat)",
        "Menunjukkan kebutuhan finansial keluarga yang signifikan"
      ],
      en: [
        "International student demonstrating exceptional academic achievement (high GPA)",
        "Officially nominated by their current high school",
        "Demonstrate significant and verified financial need"
      ]
    },
    status: 'closed',
    deadline: "2026-01-15",
    applicationUrl: "https://you.ubc.ca/financial-planning/scholarships-awards-international-students/",
    description: {
      id: "Penghargaan beasiswa penuh berbasis kebutuhan finansial dan prestasi akademik tertinggi di Universitas British Columbia bagi siswa SMA sedunia.",
      en: "UBC's prestigious need-and-merit-based full scholarship for outstanding high school graduates worldwide."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Kanada",
        "S1",
        "Prestisius"
      ],
      en: [
        "University",
        "Overseas",
        "Canada",
        "Undergraduate",
        "Prestigious"
      ]
    }
  },
  {
    id: "orange-tulip-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Orange Tulip Scholarship (OTS) Belanda",
      en: "Orange Tulip Scholarship (OTS) Netherlands"
    },
    provider: {
      id: "Nuffic Neso Indonesia & Universitas Belanda",
      en: "Nuffic Neso Indonesia & Dutch Universities"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Potongan biaya kuliah (tuition fee) hingga 50% - 100%",
        "Bantuan pengurusan visa pelajar ke Belanda"
      ],
      en: [
        "Tuition fee waiver discount up to 50% - 100%",
        "Assistance with student visa application for the Netherlands"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia (WNI) berprestasi",
        "Diterima di salah satu skema universitas Belanda yang berpartisipasi",
        "Sertifikat bahasa Inggris minimal IELTS 6.5 atau TOEFL iBT 90"
      ],
      en: [
        "Indonesian citizen (WNI) with excellent academic performance",
        "Admitted to a participating Dutch university program scheme",
        "English proficiency certificate (IELTS min 6.5 or TOEFL iBT 90)"
      ]
    },
    status: 'closed',
    deadline: "2026-04-01",
    applicationUrl: "https://www.studyinnl.org/",
    description: {
      id: "Beasiswa potongan biaya kuliah khusus untuk mahasiswa Indonesia yang ingin menempuh studi sarjana atau pascasarjana di Belanda.",
      en: "Tuition fee waiver scholarship scheme specifically for Indonesian students pursuing bachelor's or master's degrees in the Netherlands."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Belanda",
        "Eropa"
      ],
      en: [
        "Government",
        "Overseas",
        "Netherlands",
        "Europe"
      ]
    }
  },
  {
    id: "monash-presidents-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Monash President's Scholarship (MPS)",
      en: "Monash President's Scholarship (MPS)"
    },
    provider: {
      id: "Monash University (Australia)",
      en: "Monash University (Australia)"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh untuk jenjang Ph.D.",
        "Tunjangan hidup tahunan senilai AUD 33.000",
        "Asuransi kesehatan lengkap mahasiswa asing (OSHC)",
        "Tunjangan relokasi perjalanan"
      ],
      en: [
        "Full tuition fees coverage for Ph.D. studies",
        "Annual living allowance of AUD 33,000",
        "Single Overseas Student Health Cover (OSHC)",
        "Travel relocation allowance contribution"
      ]
    },
    requirements: {
      id: [
        "Memenuhi persyaratan akademik masuk Ph.D. di Monash University",
        "Memiliki prestasi akademis di atas rata-rata dan portofolio riset yang kuat",
        "Sertifikat bahasa Inggris minimal IELTS 6.5 atau TOEFL iBT 79"
      ],
      en: [
        "Meet Monash University's Ph.D. admission requirements",
        "Hold outstanding academic records and a strong research profile",
        "English proficiency certificate (IELTS min 6.5 or TOEFL iBT 79)"
      ]
    },
    status: 'open',
    deadline: "2026-08-31",
    applicationUrl: "https://www.monash.edu/study/fees-scholarships/scholarships/",
    description: {
      id: "Beasiswa riset doktoral penuh yang kompetitif dari Universitas Monash untuk mendanai kandidat Ph.D. terbaik dunia.",
      en: "Monash University's highly competitive doctoral research scholarship supporting outstanding Ph.D. candidates globally."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Research"
      ]
    }
  },
  {
    id: "chulalongkorn-asean-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana Chulalongkorn University untuk Negara ASEAN",
      en: "Chulalongkorn University Scholarship for ASEAN Countries"
    },
    provider: {
      id: "Chulalongkorn University (Thailand)",
      en: "Chulalongkorn University (Thailand)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh selama studi pascasarjana",
        "Tunjangan hidup bulanan sebesar THB 16.000",
        "Akomodasi asrama universitas gratis",
        "Tiket pesawat ekonomi pulang-pergi"
      ],
      en: [
        "Full tuition fees coverage for graduate program",
        "Monthly living allowance of THB 16,000",
        "Free university dormitory accommodation",
        "Economy-class round-trip airfare"
      ]
    },
    requirements: {
      id: [
        "Warga negara dari negara-negara ASEAN (termasuk Indonesia) selain Thailand",
        "Lulusan S1 untuk S2 (maksimal usia 35) atau S2 untuk S3 (maksimal usia 40)",
        "Memiliki rekam prestasi akademik yang baik dan sehat jasmani"
      ],
      en: [
        "Citizen of ASEAN countries (including Indonesia) other than Thailand",
        "Bachelor's degree for Master (max age 35) or Master's for PhD (max age 40)",
        "Good academic records and in good physical health"
      ]
    },
    status: 'open',
    deadline: "2026-07-15",
    applicationUrl: "https://www.academic.chula.ac.th/",
    description: {
      id: "Program beasiswa penuh pemerintah Thailand di Universitas Chulalongkorn untuk mendukung integrasi dan kerja sama pelajar ASEAN.",
      en: "Fully funded graduate level scholarships at Thailand's top-ranked Chulalongkorn University supporting ASEAN student cooperation."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Thailand",
        "Asia"
      ],
      en: [
        "University",
        "Overseas",
        "Thailand",
        "Asia"
      ]
    }
  },
  {
    id: "utokyo-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Universitas Tokyo Fellowship",
      en: "University of Tokyo Fellowship (UTokyo Fellowship)"
    },
    provider: {
      id: "University of Tokyo (Jepang)",
      en: "University of Tokyo (Japan)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya pendaftaran dan biaya kuliah penuh di UTokyo",
        "Tunjangan penelitian bulanan senilai JPY 150.000 hingga JPY 200.000"
      ],
      en: [
        "Admission and full tuition fees waiver coverage at UTokyo",
        "Monthly research grant stipend of JPY 150,000 to JPY 200,000"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional berprestasi akademik tertinggi yang mendaftar program pascasarjana di UTokyo",
        "Mendapat rekomendasi akademik kuat dari calon profesor pembimbing",
        "Memiliki rekam riset yang sangat solid"
      ],
      en: [
        "International students demonstrating highest academic excellence applying to UTokyo graduate school",
        "Supported by strong academic recommendation from prospective UTokyo advisor",
        "Show solid research experience and publications profile"
      ]
    },
    status: 'soon',
    deadline: "2026-10-30",
    applicationUrl: "https://www.u-tokyo.ac.jp/en/prospective-students/scholarships.html",
    description: {
      id: "Beasiswa penelitian pascasarjana penuh yang prestisius dari Universitas Tokyo bagi peneliti muda berprestasi tingkat global.",
      en: "Prestigious graduate research fellowship awarded by the University of Tokyo to outstanding international young researchers."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Jepang",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Japan",
        "Research"
      ]
    }
  },
  {
    id: "goi-ies-ireland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Irlandia Internasional (GOI-IES)",
      en: "Government of Ireland International Education Scholarship (GOI-IES)"
    },
    provider: {
      id: "Higher Education Authority (HEA) Irlandia",
      en: "Higher Education Authority (HEA) Ireland"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang saku biaya hidup tahunan senilai €10.000 untuk 1 tahun studi",
        "Bebas biaya kuliah penuh (tuition fee) di universitas terdaftar di Irlandia"
      ],
      en: [
        "Individual stipend of €10,000 for 1 year's study living costs",
        "Full tuition fee waiver coverage at participating Irish universities"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Uni Eropa (terbuka untuk WNI)",
        "Memiliki surat tawaran masuk (LOA) bersyarat atau tidak bersyarat dari universitas Irlandia",
        "Menunjukkan prestasi akademik luar biasa dan kemampuan komunikasi yang baik"
      ],
      en: [
        "Citizen of non-EU countries (including Indonesia)",
        "Hold a conditional or unconditional admission offer (LOA) from an Irish higher education institution",
        "Demonstrate excellent academic credentials and communication skills"
      ]
    },
    status: 'closed',
    deadline: "2026-03-15",
    applicationUrl: "https://euraxess.ec.europa.eu/",
    description: {
      id: "Beasiswa penuh selama 1 tahun dari pemerintah Irlandia untuk mahasiswa internasional berprestasi tingkat sarjana maupun pascasarjana.",
      en: "Fully funded 1-year scholarship by the Government of Ireland supporting high-achieving undergraduate and postgraduate students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Irlandia",
        "Eropa"
      ],
      en: [
        "Government",
        "Overseas",
        "Ireland",
        "Europe"
      ]
    }
  },
  {
    id: "gates-millennium-scholars",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Gates Millennium Scholars Program",
      en: "Gates Millennium Scholars Program"
    },
    provider: {
      id: "Bill & Melinda Gates Foundation",
      en: "Bill & Melinda Gates Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh di universitas mana pun di Amerika Serikat",
        "Tunjangan buku, akomodasi perumahan, asuransi kesehatan, dan biaya hidup",
        "Program pendampingan kepemimpinan mahasiswa"
      ],
      en: [
        "Full tuition fees coverage at any accredited US university",
        "Stipend for books, housing accommodation, health insurance, and personal expenses",
        "Student leadership development and mentoring program"
      ]
    },
    requirements: {
      id: [
        "Terbuka untuk mahasiswa minoritas berprestasi luar biasa",
        "Memenuhi kriteria kelayakan finansial Pell Grant",
        "IPK minimal 3.30 dari skala 4.00 dan aktif berorganisasi"
      ],
      en: [
        "Open to outstanding minority students with excellent academic records",
        "Meet Pell Grant financial eligibility criteria",
        "Minimum GPA of 3.30 on a 4.00 scale and active in community leadership"
      ]
    },
    status: 'closed',
    deadline: "2026-01-15",
    applicationUrl: "https://gmsp.org/",
    description: {
      id: "Beasiswa penuh prestisius dari yayasan Gates untuk mendukung pendidikan tinggi mahasiswa minoritas berprestasi di Amerika Serikat.",
      en: "Prestigious full scholarship funded by the Gates Foundation supporting undergraduate higher education for minority leaders in the US."
    },
    tags: {
      id: [
        "Yayasan",
        "Luar Negeri",
        "Amerika Serikat",
        "Prestisius"
      ],
      en: [
        "Foundation",
        "Overseas",
        "United States",
        "Prestigious"
      ]
    }
  },
  {
    id: "beasiswa-bakti-tani",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bakti Tani",
      en: "Bakti Tani Scholarship"
    },
    provider: {
      id: "TaniFoundation (Yayasan Tani)",
      en: "TaniFoundation (Tani Foundation)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah tunggal (UKT) penuh hingga lulus (maksimal 8 semester)",
        "Tunjangan pengembangan kapasitas soft skills bertema pertanian modern",
        "Jejaring dengan komunitas petani binaan TaniHub Group"
      ],
      en: [
        "Full tuition fees (UKT) coverage until graduation (max 8 semesters)",
        "Soft skills development training in modern agricultural innovation",
        "Networking with agricultural community networks guided by TaniHub Group"
      ]
    },
    requirements: {
      id: [
        "Anak petani atau memiliki ketertarikan kuat di bidang pertanian",
        "Mahasiswa aktif S1/D4 jurusan pertanian, teknologi pangan, peternakan, perikanan, kehutanan, atau agronomi",
        "IPK minimal 3.00 dan aktif berorganisasi"
      ],
      en: [
        "Child of a farmer or demonstrate strong interest in agriculture",
        "Active student in agriculture, food tech, animal husbandry, fisheries, forestry, or agronomy majors",
        "Minimum GPA of 3.00 and active in student organizations"
      ]
    },
    status: 'soon',
    deadline: "2026-08-15",
    applicationUrl: "https://tanifoundation.org/",
    description: {
      id: "Beasiswa dari TaniFoundation untuk mencetak generasi muda inovatif yang memajukan sektor pertanian modern di Indonesia.",
      en: "TaniFoundation scholarship supporting innovative youth leaders in modernizing Indonesia's agricultural sector."
    },
    tags: {
      id: [
        "Yayasan",
        "Dalam Negeri",
        "Pertanian",
        "S1"
      ],
      en: [
        "Foundation",
        "Domestic",
        "Agriculture",
        "Undergraduate"
      ]
    }
  },
  {
    id: "beasiswa-maybank-finance",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Maybank Indonesia Finance",
      en: "Maybank Indonesia Finance Scholarship"
    },
    provider: {
      id: "PT Maybank Indonesia Finance",
      en: "PT Maybank Indonesia Finance"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan pembiayaan biaya UKT kuliah sebesar Rp 4.000.000 per semester",
        "Kesempatan program magang eksklusif di kantor cabang Maybank Finance"
      ],
      en: [
        "Educational allowance contribution of IDR 4,000,000 per semester",
        "Exclusive internship opportunities at Maybank Finance branch offices"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif jenjang S1 semester 4 sampai 6 dari semua jurusan",
        "IPK minimal 3.00 (PTN) atau 3.20 (PTS) dari skala 4.00",
        "Tidak sedang menerima beasiswa dari institusi lain"
      ],
      en: [
        "Active undergraduate student in 4th to 6th semester from any major",
        "Minimum GPA of 3.00 (State) or 3.20 (Private) on a 4.00 scale",
        "Not currently receiving other scholarships from other institutions"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://maybankfinance.co.id/",
    description: {
      id: "Bantuan finansial beasiswa dari Maybank Finance untuk meringankan biaya kuliah mahasiswa berprestasi di perguruan tinggi Indonesia.",
      en: "Financial scholarship assistance provided by Maybank Finance for high-achieving undergraduate students in Indonesia."
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
    id: "beasiswa-pemuda-tangguh-sby",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemuda Tangguh Surabaya",
      en: "Surabaya Pemuda Tangguh Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Surabaya",
      en: "Surabaya City Government"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan biaya kuliah (UKT) penuh hingga lulus sesuai ketentuan",
        "Tunjangan bulanan berupa uang saku dan bantuan kebutuhan kuliah"
      ],
      en: [
        "Full tuition fee (UKT) coverage until graduation based on rules",
        "Monthly stipend allowance for student basic educational needs"
      ]
    },
    requirements: {
      id: [
        "Warga Kota Surabaya asli dibuktikan dengan KTP Surabaya",
        "Mahasiswa aktif S1 di perguruan tinggi negeri mitra Pemkot Surabaya",
        "Mempunyai IPK minimal 3.00 dan masuk kategori keluarga pra-sejahtera (Masyarakat Berpenghasilan Rendah/MBR)"
      ],
      en: [
        "Surabaya resident holding a Surabaya ID card",
        "Active S1 student at a state university partner of Surabaya government",
        "Minimum GPA of 3.00 and classified under low-income family database (MBR)"
      ]
    },
    status: 'soon',
    deadline: "2026-07-20",
    applicationUrl: "https://sharia.surabaya.go.id/",
    description: {
      id: "Program beasiswa Pemkot Surabaya untuk memastikan akses pendidikan tinggi bagi pemuda Surabaya dari keluarga pra-sejahtera.",
      en: "Surabaya City Government's full tuition scholarship ensuring higher education access for local underprivileged youth."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Surabaya",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "Surabaya",
        "Regional"
      ]
    }
  },
  {
    id: "beasiswa-kompas-kg",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Kompas Gramedia (KG Scholarship)",
      en: "Kompas Gramedia Scholarship (KG Scholarship)"
    },
    provider: {
      id: "Kompas Gramedia Group",
      en: "Kompas Gramedia Group"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh (tuition fee) hingga kelulusan",
        "Tunjangan uang saku bulanan dan bantuan buku tahunan",
        "Kesempatan magang di media jaringan KG Group"
      ],
      en: [
        "Full tuition fees coverage paid to host university until graduation",
        "Monthly stipend allowance and annual book support contribution",
        "Internship opportunities in KG Group media networks"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 4 dari jurusan terkait (Komunikasi, Jurnalistik, Desain, IT, dll)",
        "IPK minimal 3.25 dan aktif di kepengurusan pers mahasiswa atau organisasi",
        "Lolos seleksi uji kompetensi menulis/portofolio karya kreatif Kompas"
      ],
      en: [
        "Active undergraduate in 4th semester majoring in Communication, Journalism, Design, IT, etc.",
        "Minimum GPA of 3.25 and active in student press or campus organizations",
        "Pass Kompas's writing competency or creative portfolio selection test"
      ]
    },
    status: 'soon',
    deadline: "2026-08-30",
    applicationUrl: "https://www.kompas.com/",
    description: {
      id: "Beasiswa penuh dari KG Group untuk mendukung calon jurnalis, analis data media, dan kreator konten masa depan di Indonesia.",
      en: "KG Group's full scholarship program supporting future journalists, media analysts, and creative content creators in Indonesia."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Jurnalistik",
        "Magang"
      ],
      en: [
        "Company",
        "Domestic",
        "Journalism",
        "Internship"
      ]
    }
  },
  {
    id: "beasiswa-pusri",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pusri (Pupuk Sriwidjaja)",
      en: "Pusri Scholarship (Pupuk Sriwidjaja)"
    },
    provider: {
      id: "PT Pupuk Sriwidjaja Palembang",
      en: "PT Pupuk Sriwidjaja Palembang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan biaya kuliah penuh per semester (s/d semester 8)",
        "Tunjangan biaya hidup tahunan komprehensif",
        "Program pendampingan kepemimpinan dari manajemen Pusri"
      ],
      en: [
        "Full semester tuition fee coverage (up to semester 8)",
        "Comprehensive annual living costs allowance contribution",
        "Leadership mentoring program by Pusri management team"
      ]
    },
    requirements: {
      id: [
        "Berasal dari keluarga pra-sejahtera di sekitar wilayah operasional PT Pusri (Sumatera Selatan)",
        "Mahasiswa aktif S1 semester 2 di perguruan tinggi negeri mitra",
        "IPK minimal 3.00 dari skala 4.00 dan berkelakuan baik"
      ],
      en: [
        "Belong to low-income families around PT Pusri's operational area (South Sumatra)",
        "Active undergraduate in 2nd semester at partner state universities",
        "Minimum GPA of 3.00 on a 4.00 scale and good conduct record"
      ]
    },
    status: 'soon',
    deadline: "2026-09-10",
    applicationUrl: "https://www.pusri.co.id/",
    description: {
      id: "Program beasiswa CSR kemitraan Pusri untuk membiayai kuliah putra-putri berprestasi dari keluarga kurang mampu di Sumatera Selatan.",
      en: "Pusri's partnership CSR scholarship supporting underprivileged South Sumatran students in completing university education."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Sumatera Selatan",
        "Bantuan Sosial"
      ],
      en: [
        "Company",
        "Domestic",
        "South Sumatra",
        "Social Aid"
      ]
    }
  },
  {
    id: "telkom-university-opes",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Telkom University OPES",
      en: "Telkom University OPES Scholarship"
    },
    provider: {
      id: "Telkom University",
      en: "Telkom University"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh (biaya pendidikan) hingga lulus (8 semester)",
        "Akses ke fasilitas laboratorium dan program inkubasi startup mahasiswa Telkom"
      ],
      en: [
        "Full tuition fees waiver coverage until graduation (8 semesters)",
        "Access to laboratory facilities and Telkom student startup incubation programs"
      ]
    },
    requirements: {
      id: [
        "Lulusan SMA/SMK/sederajat dengan nilai rapor rata-rata minimal 80",
        "Lolos ujian seleksi masuk jalur khusus beasiswa OPES Telkom",
        "Menunjukkan prestasi akademik atau non-akademik di tingkat nasional"
      ],
      en: [
        "High school graduate with minimum average report card score of 80",
        "Pass Telkom's special OPES scholarship entrance examination",
        "Demonstrate academic or non-academic achievements at the national level"
      ]
    },
    status: 'soon',
    deadline: "2026-08-15",
    applicationUrl: "https://smb.telkomuniversity.ac.id/",
    description: {
      id: "Beasiswa prestasi penuh dari Telkom University untuk menjaring calon mahasiswa cerdas di bidang teknologi informasi dan komunikasi.",
      en: "Telkom University's premier full scholarship program seeking outstanding student candidates in information and communications technology."
    },
    tags: {
      id: [
        "Universitas",
        "Dalam Negeri",
        "Teknologi",
        "S1"
      ],
      en: [
        "University",
        "Domestic",
        "Technology",
        "Undergraduate"
      ]
    }
  },
  {
    id: "beasiswa-mtf",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Mandiri Tunas Finance",
      en: "Mandiri Tunas Finance Scholarship"
    },
    provider: {
      id: "PT Mandiri Tunas Finance (MTF)",
      en: "PT Mandiri Tunas Finance (MTF)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya kuliah per semester untuk menunjang pendidikan",
        "Kesempatan program pelatihan kepemimpinan eksklusif di MTF",
        "Jalur khusus rekrutmen karir di MTF setelah kelulusan"
      ],
      en: [
        "Educational allowance contribution per semester",
        "Exclusive leadership development training program at MTF",
        "Priority career recruitment pathways at MTF after graduation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 4 sampai 6 dari universitas mitra",
        "IPK minimal 3.00 dari skala 4.00",
        "Aktif berorganisasi dan tidak sedang menerima beasiswa lain"
      ],
      en: [
        "Active undergraduate student in 4th to 6th semester at partner universities",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Active in student organizations and not receiving other scholarships"
      ]
    },
    status: 'soon',
    deadline: "2026-09-10",
    applicationUrl: "https://www.mtf.co.id/",
    description: {
      id: "Program beasiswa CSR dari Mandiri Tunas Finance untuk membekali mahasiswa dengan kemampuan kepemimpinan dan kesiapan dunia kerja.",
      en: "CSR scholarship program by Mandiri Tunas Finance equipping students with leadership capabilities and career readiness."
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
        "Career"
      ]
    }
  },
  {
    id: "samsung-innovation-campus",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Samsung Innovation Campus (SIC)",
      en: "Samsung Innovation Campus (SIC)"
    },
    provider: {
      id: "Samsung Electronics Indonesia",
      en: "Samsung Electronics Indonesia"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pelatihan coding gratis (Python, AI, IoT, Web Dev) bersertifikat internasional",
        "Hibah dana proyek teknologi bagi tim pemenang kompetisi",
        "Pendampingan karir intensif dari mentor profesional"
      ],
      en: [
        "Free coding training (Python, AI, IoT, Web Dev) with international certificates",
        "Project funding grant for winning teams of the competition",
        "Intensive career mentoring by tech professional mentors"
      ]
    },
    requirements: {
      id: [
        "Siswa SMK/SMA sederajat kelas XI atau mahasiswa aktif S1/D4 tingkat awal",
        "Memiliki ketertarikan tinggi di bidang teknologi dan sains komputer",
        "Berkomitmen mengikuti seluruh rangkaian pelatihan secara daring hingga akhir"
      ],
      en: [
        "Vocational/High school student in 11th grade or active early-stage undergraduate",
        "Demonstrate strong interest in technology and computer science studies",
        "Committed to attending the entire online training phase until completion"
      ]
    },
    status: 'soon',
    deadline: "2026-08-30",
    applicationUrl: "https://www.samsung.com/id/samsung-innovation-campus/",
    description: {
      id: "Program CSR Samsung global untuk membekali generasi muda Indonesia dengan keahlian teknologi digital yang relevan dengan industri modern.",
      en: "Samsung's global CSR program empowering Indonesian youth with essential digital technology and coding skills."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Teknologi",
        "Coding"
      ],
      en: [
        "Company",
        "Domestic",
        "Technology",
        "Coding"
      ]
    }
  },
  {
    id: "beasiswa-tunas-unggul",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Tunas Unggul",
      en: "Tunas Unggul Scholarship"
    },
    provider: {
      id: "Yayasan Tunas Unggul",
      en: "Tunas Unggul Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah tunggal (UKT) penuh hingga lulus sesuai masa studi normatif",
        "Tunjangan biaya hidup bulanan tetap",
        "Program pembinaan karakter kepemimpinan berkala"
      ],
      en: [
        "Full tuition fee (UKT) coverage until graduation based on normative study period",
        "Monthly living allowance stipend support",
        "Regular character and leadership development training programs"
      ]
    },
    requirements: {
      id: [
        "Lulusan SMA/SMK/sederajat berprestasi akademik tinggi namun kurang mampu secara finansial",
        "Memiliki rekam kepemimpinan di organisasi sekolah atau masyarakat",
        "Lolos seleksi berkas dan wawancara panel dari pengurus Yayasan"
      ],
      en: [
        "High school graduate with outstanding academic achievements facing financial difficulties",
        "Demonstrate leadership records in school or local community organizations",
        "Pass document screening and panel interview selection by the Foundation"
      ]
    },
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "http://tunasunggul.or.id/",
    description: {
      id: "Program beasiswa penuh dari Yayasan Tunas Unggul untuk membantu mahasiswa berprestasi dari keluarga kurang mampu meraih gelar sarjana.",
      en: "Full undergraduate scholarship provided by Tunas Unggul Foundation supporting high-achieving underprivileged students."
    },
    tags: {
      id: [
        "Yayasan",
        "Dalam Negeri",
        "Sosial",
        "S1"
      ],
      en: [
        "Foundation",
        "Domestic",
        "Social Aid",
        "Undergraduate"
      ]
    }
  },
  {
    id: "mext-university-recommendation",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Jepang MEXT (Rekomendasi Universitas)",
      en: "MEXT Scholarship (University Recommendation)"
    },
    provider: {
      id: "Kementerian Pendidikan, Kebudayaan, Olahraga, Sains, dan Teknologi Jepang (MEXT)",
      en: "Ministry of Education, Culture, Sports, Science and Technology Japan (MEXT)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh (tuition fee) di universitas penerima di Jepang",
        "Tunjangan biaya hidup bulanan JPY 143.000 (S2) atau JPY 144.000 (S3)",
        "Tiket pesawat kelas ekonomi internasional pulang-pergi"
      ],
      en: [
        "Full tuition fees waiver coverage at host Japanese universities",
        "Monthly living allowance JPY 143,000 (Master) or JPY 144,000 (PhD)",
        "Economy-class international round-trip airfare"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Jepang (terbuka untuk WNI)",
        "Direkomendasikan secara resmi oleh universitas di Jepang tempat Anda mendaftar",
        "Memiliki IPK minimal setara dengan 2.30 dari skala 3.00 standar MEXT"
      ],
      en: [
        "Non-Japanese citizen (including Indonesian)",
        "Officially recommended by the host university in Japan you are applying to",
        "Minimum GPA equivalent to 2.30 on a 3.00 scale based on MEXT calculations"
      ]
    },
    status: 'open',
    deadline: "2026-11-30",
    applicationUrl: "https://www.studyinjapan.go.jp/en/planning/scholarship/",
    description: {
      id: "Program beasiswa penuh pemerintah Jepang melalui jalur seleksi rekomendasi universitas untuk studi pascasarjana di Jepang.",
      en: "Japan government's fully funded postgraduate scholarship program selected through direct Japanese university recommendation."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Jepang",
        "Asia"
      ],
      en: [
        "Government",
        "Overseas",
        "Japan",
        "Asia"
      ]
    }
  },
  {
    id: "questbridge-college-match",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa QuestBridge National College Match (AS)",
      en: "QuestBridge National College Match Scholarship (US)"
    },
    provider: {
      id: "QuestBridge Foundation",
      en: "QuestBridge Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh, asrama gratis, biaya makan, dan biaya operasional lainnya selama 4 tahun",
        "Tanpa biaya pinjaman siswa (no student loans)"
      ],
      en: [
        "Full tuition fees, free room and board, meal plans, and academic supplies for 4 years",
        "Completely loan-free financial aid package (no student loans)"
      ]
    },
    requirements: {
      id: [
        "Siswa SMA kelas XII berprestasi akademis luar biasa se-dunia",
        "Menunjukkan keterbatasan ekonomi finansial keluarga yang signifikan",
        "Lolos seleksi esai kompetitif dan rekomendasi dari sekolah"
      ],
      en: [
        "Outstanding high school senior academic records globally",
        "Demonstrate significant and verified family financial need",
        "Pass competitive essays and academic counselor recommendations selection"
      ]
    },
    status: 'closed',
    deadline: "2026-09-25",
    applicationUrl: "https://www.questbridge.org/",
    description: {
      id: "Program beasiswa penuh prestisius berbasis kebutuhan finansial bagi siswa SMA berprestasi luar biasa untuk kuliah di universitas top Amerika Serikat.",
      en: "QuestBridge's highly prestigious need-and-merit-based full scholarship matching top high school graduates with elite US universities."
    },
    tags: {
      id: [
        "Yayasan",
        "Luar Negeri",
        "Amerika Serikat",
        "Prestisius"
      ],
      en: [
        "Foundation",
        "Overseas",
        "United States",
        "Prestigious"
      ]
    }
  },
  {
    id: "amgen-scholars-program",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Musim Panas Amgen Scholars",
      en: "Amgen Scholars Summer Research Program"
    },
    provider: {
      id: "Amgen Foundation",
      en: "Amgen Foundation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya penuh keikutsertaan laboratorium riset musim panas (8-10 minggu)",
        "Tunjangan uang saku biaya hidup musim panas",
        "Akomodasi perumahan gratis dan tiket pesawat pulang-pergi ke institusi penyelenggara"
      ],
      en: [
        "Full program costs for 8-10 weeks summer research laboratory participation",
        "Summer living stipend allowance support",
        "Free housing accommodation and round-trip airfare to hosting institution"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 dari seluruh dunia yang terdaftar di bidang sains/STEM",
        "Telah menyelesaikan minimal tahun pertama kuliah sarjana",
        "IPK tinggi setara di atas 3.20 skala 4.00 dan memiliki rekam minat riset sains"
      ],
      en: [
        "Active undergraduate student globally enrolled in science/STEM fields",
        "Completed at least the first year of undergraduate studies",
        "High GPA equivalent above 3.20 on a 4.00 scale and interest in scientific research"
      ]
    },
    status: 'closed',
    deadline: "2026-02-01",
    applicationUrl: "https://amgenscholars.com/",
    description: {
      id: "Beasiswa magang riset musim panas bergengsi di universitas top dunia (seperti Harvard, UTokyo, Cambridge) untuk calon ilmuwan masa depan.",
      en: "Highly prestigious summer research internship scholarship at world-class institutions (Harvard, UTokyo, Cambridge) for future scientists."
    },
    tags: {
      id: [
        "Yayasan",
        "Luar Negeri",
        "Riset",
        "Musim Panas",
        "STEM",
        "Internasional"
      ],
      en: [
        "Foundation",
        "Overseas",
        "Research",
        "Summer",
        "STEM",
        "International"
      ]
    }
  },
  {
    id: "clark-presidents-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Clark University President's Scholarship (AS)",
      en: "Clark University President's Scholarship (US)"
    },
    provider: {
      id: "Clark University (Amerika Serikat)",
      en: "Clark University (United States)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh 100% selama 4 tahun studi sarjana",
        "Tunjangan operasional buku dan penunjang pendidikan tahunan"
      ],
      en: [
        "100% full tuition fee waiver coverage for 4 years of undergraduate study",
        "Annual educational operational and book allowance support contribution"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional berprestasi akademik luar biasa (termasuk Indonesia)",
        "Menunjukkan kapasitas kepemimpinan di sekolah dan komitmen kontribusi global",
        "Mengajukan esai khusus beasiswa presiden pada saat pendaftaran universitas"
      ],
      en: [
        "International students demonstrating highest academic excellence (including Indonesia)",
        "Show strong leadership potential and commitment to global community contribution",
        "Submit a dedicated presidential scholarship essay during university application"
      ]
    },
    status: 'closed',
    deadline: "2026-01-15",
    applicationUrl: "https://www.clarku.edu/offices/financial-aid/scholarships/",
    description: {
      id: "Beasiswa prestasi penuh dari Universitas Clark bagi mahasiswa internasional terbaik dengan jiwa kepemimpinan global yang tinggi.",
      en: "Clark University's premier full tuition merit-based scholarship for top international undergraduate candidates with global leadership potential."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Amerika Serikat",
        "Prestasi"
      ],
      en: [
        "University",
        "Overseas",
        "United States",
        "Academic Merit"
      ]
    }
  },
  {
    id: "inlaks-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Inlaks Shivdasani Foundation",
      en: "Inlaks Shivdasani Foundation Scholarship"
    },
    provider: {
      id: "Inlaks Shivdasani Foundation (India/UK)",
      en: "Inlaks Shivdasani Foundation (India/UK)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh, tunjangan biaya hidup bulanan, dan tiket pesawat ekonomi pulang-pergi ke universitas mitra di UK, AS, atau Eropa",
        "Asuransi kesehatan lengkap"
      ],
      en: [
        "Full tuition fees, monthly living stipend, and economy-class round-trip airfare to partner universities in UK, US, or Europe",
        "Comprehensive health insurance"
      ]
    },
    requirements: {
      id: [
        "Warga negara asing berprestasi akademik luar biasa",
        "Berusia di bawah 30 tahun pada tahun pendaftaran",
        "Memiliki LoA (Letter of Admission) dari universitas terkemuka di luar negeri"
      ],
      en: [
        "International student with exceptional academic records",
        "Under 30 years old by the application year",
        "Hold a Letter of Admission (LoA) from top-tier foreign universities"
      ]
    },
    status: 'closed',
    deadline: "2026-03-30",
    applicationUrl: "https://www.inlaksfoundation.org/",
    description: {
      id: "Beasiswa penuh pascasarjana dari yayasan Inlaks untuk mahasiswa berbakat luar biasa guna menempuh studi di universitas top dunia.",
      en: "Fully funded graduate scholarships by the Inlaks Foundation supporting top-tier talented students globally."
    },
    tags: {
      id: [
        "Yayasan",
        "Luar Negeri",
        "Pascasarjana",
        "Prestisius",
        "Internasional"
      ],
      en: [
        "Foundation",
        "Overseas",
        "Postgraduate",
        "Prestigious",
        "International"
      ]
    }
  },
  {
    id: "bca-solusi-pintar",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bakti BCA Solusi Pintar",
      en: "Bakti BCA Solusi Pintar Scholarship"
    },
    provider: {
      id: "PT Bank Central Asia Tbk (BCA)",
      en: "PT Bank Central Asia Tbk (BCA)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan dana kuliah penuh (UKT/SPP) semester berjalan",
        "Tunjangan biaya hidup bulanan dan bantuan buku tahunan",
        "Pelatihan pengembangan diri dan soft skills berkala"
      ],
      en: [
        "Full tuition fee (UKT/SPP) coverage for active semesters",
        "Monthly living allowance and annual academic book support stipend",
        "Regular self-development and soft skills training programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif jenjang S1 semester 4 dari universitas mitra Bakti BCA",
        "IPK minimal 3.00 dari skala 4.00 dan dipertahankan",
        "Menunjukkan keterbatasan finansial dibuktikan dengan dokumen resmi"
      ],
      en: [
        "Active undergraduate student in 4th semester at Bakti BCA partner universities",
        "Minimum GPA of 3.00 on a 4.00 scale and maintained",
        "Demonstrate financial need supported by official documents"
      ]
    },
    status: 'closed',
    deadline: "2026-08-15",
    applicationUrl: "https://www.bca.co.id/en/tentang-bca/Corporate-Social-Responsibility/bakti-bca/",
    description: {
      id: "Program beasiswa CSR Bakti BCA untuk membantu biaya kuliah mahasiswa berprestasi yang menghadapi kendala finansial.",
      en: "Bakti BCA's CSR scholarship program supporting high-achieving undergraduate students facing financial difficulties."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "BCA",
        "Finansial"
      ],
      en: [
        "Company",
        "Domestic",
        "BCA",
        "Financial Support"
      ]
    }
  },
  {
    id: "beasiswa-ppa",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Peningkatan Prestasi Akademik (PPA)",
      en: "Academic Achievement Enhancement (PPA) Scholarship"
    },
    provider: {
      id: "Kementerian Pendidikan dan Kebudayaan RI",
      en: "Ministry of Education and Culture of the Republic of Indonesia"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan finansial biaya pendidikan tunai bulanan selama 1-2 semester",
        "Penghargaan prestasi akademik tingkat nasional"
      ],
      en: [
        "Monthly cash educational financial assistance for 1-2 semesters",
        "National-level academic achievement merit award"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif jenjang S1/D4/D3 minimal semester 2",
        "IPK minimal 3.00 dari skala 4.00 dan dipertahankan",
        "Mengajukan berkas prestasi akademik serta surat rekomendasi dekan fakultas"
      ],
      en: [
        "Active undergraduate or diploma student in at least 2nd semester",
        "Minimum GPA of 3.00 on a 4.00 scale and maintained",
        "Submit academic achievement portfolio and faculty dean recommendation letter"
      ]
    },
    status: 'soon',
    deadline: "2026-08-30",
    applicationUrl: "https://kemdikbud.go.id/",
    description: {
      id: "Bantuan dana prestasi akademis dari pemerintah Indonesia untuk mengapresiasi mahasiswa berprestasi di perguruan tinggi negeri maupun swasta.",
      en: "Academic merit scholarship from the Indonesian government supporting high-achieving university students nationwide."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Prestasi",
        "S1"
      ],
      en: [
        "Government",
        "Domestic",
        "Academic Merit",
        "Undergraduate"
      ]
    }
  },
  {
    id: "beasiswa-yayasan-salim",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Yayasan Salim",
      en: "Yayasan Salim Scholarship"
    },
    provider: {
      id: "Yayasan Salim (Salim Group)",
      en: "Yayasan Salim (Salim Group)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan finansial biaya pendidikan (UKT) tahunan hingga lulus sesuai ketentuan",
        "Program pembinaan soft skills berkala"
      ],
      en: [
        "Annual financial tuition fee (UKT) assistance until graduation based on rules",
        "Regular capacity building and soft skills training programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 dari perguruan tinggi negeri mitra Yayasan Salim",
        "IPK minimal 3.00 (jurusan eksakta) atau 3.25 (jurusan non-eksakta)",
        "Berasal dari keluarga pra-sejahtera dibuktikan dengan surat keterangan tidak mampu (SKTM)"
      ],
      en: [
        "Active undergraduate student at Salim Foundation partner state universities",
        "Minimum GPA of 3.00 (science majors) or 3.25 (social/art majors)",
        "Come from low-income families supported by official financial need documents"
      ]
    },
    status: 'soon',
    deadline: "2026-09-15",
    applicationUrl: "https://www.salimgroup.com/",
    description: {
      id: "Program beasiswa CSR dari grup perusahaan Salim untuk meringankan beban finansial mahasiswa berprestasi di Indonesia.",
      en: "CSR scholarship program by Salim Group supporting high-achieving undergraduate students facing financial constraints."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Yayasan",
        "Bantuan Sosial"
      ],
      en: [
        "Company",
        "Domestic",
        "Foundation",
        "Social Aid"
      ]
    }
  },
  {
    id: "beasiswa-bank-danamon",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bank Danamon",
      en: "Bank Danamon Scholarship"
    },
    provider: {
      id: "PT Bank Danamon Indonesia Tbk",
      en: "PT Bank Danamon Indonesia Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya pendidikan UKT per semester selama 1 tahun akademik",
        "Kesempatan magang di kantor wilayah Bank Danamon",
        "Prioritas rekrutmen karir setelah kelulusan"
      ],
      en: [
        "Tuition fee (UKT) allowance support per semester for 1 academic year",
        "Internship opportunities at Bank Danamon regional offices",
        "Priority recruitment career path after graduation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 4 atau 6 dari semua jurusan",
        "IPK minimal 3.25 dari skala 4.00 dan aktif berorganisasi",
        "Tidak sedang menerima beasiswa lain dari pihak luar"
      ],
      en: [
        "Active undergraduate student in 4th or 6th semester from any major",
        "Minimum GPA of 3.25 on a 4.00 scale and active in student organizations",
        "Not currently receiving other scholarships from external institutions"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://www.danamon.co.id/",
    description: {
      id: "Bantuan finansial beasiswa CSR dari Bank Danamon untuk mendukung pendidikan tinggi mahasiswa berprestasi dan berkarakter kepemimpinan.",
      en: "CSR financial scholarship by Bank Danamon supporting high-achieving undergraduate students with leadership qualities."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Finansial",
        "Karir"
      ],
      en: [
        "Company",
        "Domestic",
        "Financial Support",
        "Career"
      ]
    }
  },
  {
    id: "beasiswa-bawaku-bandung",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bawaku (Pemerintah Kota Bandung)",
      en: "Bawaku Scholarship (Bandung City Government)"
    },
    provider: {
      id: "Pemerintah Kota Bandung",
      en: "Bandung City Government"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan biaya SPP/UKT pendidikan penuh semester berjalan",
        "Dukungan biaya perlengkapan operasional sekolah/kuliah tahunan"
      ],
      en: [
        "Full tuition fee (SPP/UKT) coverage for active semesters",
        "Annual school/college operational supplies and equipment support allowance"
      ]
    },
    requirements: {
      id: [
        "Warga Kota Bandung asli dibuktikan dengan KTP dan Kartu Keluarga Bandung",
        "Mahasiswa aktif jenjang S1 di perguruan tinggi negeri/swasta mitra Pemkot Bandung",
        "Terdaftar dalam database warga miskin (DTKS) Kota Bandung"
      ],
      en: [
        "Bandung resident holding a Bandung ID and Family Card",
        "Active S1 student at a state or private university partner of Bandung government",
        "Registered under Bandung city's low-income family database (DTKS)"
      ]
    },
    status: 'soon',
    deadline: "2026-07-20",
    applicationUrl: "https://bandung.go.id/",
    description: {
      id: "Program jaminan pendidikan daerah dari Pemkot Bandung untuk membantu biaya sekolah/kuliah warga Bandung berprestasi dari keluarga kurang mampu.",
      en: "Bandung City Government's educational financial assistance program supporting local underprivileged students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Bandung",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "Bandung",
        "Regional"
      ]
    }
  },
  {
    id: "beasiswa-gudang-garam",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Gudang Garam",
      en: "Gudang Garam Scholarship"
    },
    provider: {
      id: "PT Gudang Garam Tbk",
      en: "PT Gudang Garam Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan SPP/UKT per semester hingga lulus (semester 8)",
        "Kesempatan program magang industri di pabrik Gudang Garam"
      ],
      en: [
        "Tuition fee allowance support per semester until graduation (semester 8)",
        "Industrial internship program opportunities at Gudang Garam manufacturing sites"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 4 dari perguruan tinggi mitra (terutama wilayah Jawa Timur)",
        "IPK minimal 3.00 skala 4.00",
        "Berasal dari jurusan teknik, pertanian, sains, atau ekonomi bisnis"
      ],
      en: [
        "Active undergraduate in 4th semester at partner universities (primarily East Java)",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Majoring in engineering, agriculture, science, or economics/business fields"
      ]
    },
    status: 'soon',
    deadline: "2026-08-25",
    applicationUrl: "https://www.gudanggaramtbk.com/",
    description: {
      id: "Program beasiswa CSR Gudang Garam untuk menyokong biaya kuliah mahasiswa berprestasi khususnya di bidang teknik dan sains industri.",
      en: "Gudang Garam's CSR scholarship program supporting high-achieving undergraduate students majoring in engineering and sciences."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Jawa Timur",
        "Finansial"
      ],
      en: [
        "Company",
        "Domestic",
        "East Java",
        "Financial Support"
      ]
    }
  },
  {
    id: "sydney-international-strategic",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Strategis Internasional Universitas Sydney",
      en: "University of Sydney International Strategic Scholarship"
    },
    provider: {
      id: "University of Sydney (Australia)",
      en: "University of Sydney (Australia)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh untuk program riset pascasarjana (MRes/PhD)",
        "Tunjangan biaya hidup tahunan senilai AUD 37.207",
        "Dukungan biaya dana riset dan asuransi kesehatan asing (OSHC)"
      ],
      en: [
        "Full tuition fees coverage for postgraduate research (MRes/PhD) programs",
        "Annual living allowance stipend of AUD 37,207",
        "Research expenses support and Overseas Student Health Cover (OSHC) coverage"
      ]
    },
    requirements: {
      id: [
        "Memenuhi kriteria masuk riset pascasarjana di Universitas Sydney",
        "Memiliki proposal penelitian yang luar biasa dengan supervisor riset yang setuju",
        "Sertifikat kemahiran bahasa Inggris (IELTS minimal 6.5 atau setara)"
      ],
      en: [
        "Meet University of Sydney's postgraduate research admission criteria",
        "Outstanding research proposal with a confirmed research supervisor",
        "English language proficiency certificate (IELTS min 6.5 or equivalent)"
      ]
    },
    status: 'closed',
    deadline: "2026-09-15",
    applicationUrl: "https://www.sydney.edu.au/study/fees-scholarships/scholarships/",
    description: {
      id: "Beasiswa penuh riset bergengsi dari Universitas Sydney bagi peneliti muda internasional berprestasi akademik tinggi se-dunia.",
      en: "University of Sydney's prestigious fully funded postgraduate research scholarship supporting top-tier international scholars."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Research"
      ]
    }
  },
  {
    id: "anu-chancellors-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa ANU Chancellor's International Scholarship (Australia)",
      en: "ANU Chancellor's International Scholarship (Australia)"
    },
    provider: {
      id: "Australian National University (ANU)",
      en: "Australian National University (ANU)"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah (tuition fee reduction) sebesar 25% atau 50% selama masa studi"
      ],
      en: [
        "25% or 50% tuition fee reduction discount for the duration of the program"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional dari wilayah yang ditentukan (termasuk Indonesia) yang mendaftar ke ANU",
        "Memenuhi semua persyaratan akademis masuk kuliah di ANU",
        "Memiliki rekam akademis tertinggi di kelas sekolah/kampus sebelumnya"
      ],
      en: [
        "International student from eligible regions (including Indonesia) applying to ANU",
        "Meet all academic admission criteria for the selected program at ANU",
        "Demonstrate top-tier academic records in previous school/university studies"
      ]
    },
    status: 'open',
    deadline: "2026-10-15",
    applicationUrl: "https://www.anu.edu.au/study/scholarships/",
    description: {
      id: "Beasiswa potongan biaya kuliah bergengsi dari Rektor ANU untuk menarik mahasiswa berprestasi global terbaik kuliah di Australia.",
      en: "ANU's premier tuition fee discount scholarship awarded to top international students demonstrating academic merit."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Akademik"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Academic Merit"
      ]
    }
  },
  {
    id: "unibo-study-grants",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Universitas Bologna (Unibo Action 1 & 2)",
      en: "University of Bologna Study Grants (Unibo Action 1 & 2)"
    },
    provider: {
      id: "University of Bologna (Italia)",
      en: "University of Bologna (Italy)"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Tunjangan hidup tahunan bersih sebesar €11.059 (Unibo Action 2)",
        "Pembebasan biaya kuliah penuh (Unibo Action 1) di Universitas Bologna"
      ],
      en: [
        "Annual living stipend of €11,059 (Unibo Action 2)",
        "Full tuition fees waiver coverage (Unibo Action 1) at University of Bologna"
      ]
    },
    requirements: {
      id: [
        "Memiliki ijazah pendidikan non-Italia (terbuka untuk WNI)",
        "Mengikuti tes seleksi internasional (SAT untuk S1, GRE untuk S2)",
        "Berusia di bawah 30 tahun pada saat pendaftaran"
      ],
      en: [
        "Hold a non-Italian educational qualification (open to Indonesian candidates)",
        "Take international selection tests (SAT for Bachelor, GRE for Master)",
        "Under 30 years old by the application deadline"
      ]
    },
    status: 'closed',
    deadline: "2026-04-30",
    applicationUrl: "https://www.unibo.it/en/services-and-opportunities/study-grants-and-subsidies/",
    description: {
      id: "Beasiswa penuh dari universitas tertua di dunia, Universitas Bologna, bagi mahasiswa internasional berprestasi berdasarkan skor SAT/GRE.",
      en: "Fully funded study grants and tuition waivers by the University of Bologna based on SAT or GRE scores."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Italia",
        "Eropa"
      ],
      en: [
        "University",
        "Overseas",
        "Italy",
        "Europe"
      ]
    }
  },
  {
    id: "ghent-doctoral-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Doktoral Universitas Ghent (Belgia)",
      en: "Ghent University Doctoral Fellowship (Belgium)"
    },
    provider: {
      id: "Ghent University (Belgia)",
      en: "Ghent University (Belgium)"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Tunjangan hidup bulanan Ph.D. senilai €2.200 selama 24 bulan (skema sandwich)",
        "Dukungan biaya riset tahunan €310 dan kontribusi perjalanan pulang-pergi"
      ],
      en: [
        "Monthly Ph.D. living allowance of €2,200 for 24 months (sandwich model)",
        "Annual research expenses allowance of €310 and round-trip travel contribution"
      ]
    },
    requirements: {
      id: [
        "Kandidat Ph.D. dari negara berkembang (termasuk Indonesia)",
        "Melakukan riset skema sandwich (24 bulan di Ghent University, 24 bulan di universitas asal)",
        "Didukung secara resmi oleh supervisor riset di Ghent University"
      ],
      en: [
        "Ph.D. candidates from developing countries (including Indonesia)",
        "Pursuing sandwich model research (24 months at Ghent, 24 months at home university)",
        "Supported by a supervisor (promoter) at Ghent University"
      ]
    },
    status: 'closed',
    deadline: "2026-03-01",
    applicationUrl: "https://www.ugent.be/en/research/funding/phd/ghent-university/",
    description: {
      id: "Beasiswa doktor skema sandwich dari Universitas Ghent untuk mendukung riset doktoral berkualitas tinggi dari kandidat negara berkembang.",
      en: "Ghent University's sandwich doctoral fellowship supporting PhD research for candidates from developing countries."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belgia",
        "Eropa",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Belgium",
        "Europe",
        "Research"
      ]
    }
  },
  {
    id: "ku-leuven-science-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Sains Science@Leuven (Belgia)",
      en: "Science@Leuven Scholarship (Belgium)"
    },
    provider: {
      id: "KU Leuven (Belgia)",
      en: "KU Leuven (Belgium)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan pendanaan biaya kuliah dan uang saku tahunan hingga €10.000 selama 1 tahun (dapat diperpanjang)"
      ],
      en: [
        "Tuition fee subsidy and living allowance package up to €10,000 for 1 year (renewable)"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional berprestasi akademik luar biasa yang mendaftar ke program Master di Fakultas Sains KU Leuven",
        "Sertifikat bahasa Inggris minimal IELTS 7.0 atau TOEFL iBT 94",
        "Memiliki rekam jejak akademik tertinggi (IPK tinggi)"
      ],
      en: [
        "Outstanding international students applying to Master programs in Faculty of Science at KU Leuven",
        "English language certificate (IELTS min 7.0 or TOEFL iBT 94)",
        "Demonstrate exceptional academic records (highest GPA)"
      ]
    },
    status: 'closed',
    deadline: "2026-02-15",
    applicationUrl: "https://science.kuleuven.be/scholars/",
    description: {
      id: "Beasiswa prestasi dari Fakultas Sains KU Leuven untuk mendanai sebagian kuliah Master sains tingkat lanjut bagi mahasiswa terbaik dunia.",
      en: "Science@Leuven scholarship supporting top international students in master's science programs at KU Leuven."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belgia",
        "Eropa",
        "Sains"
      ],
      en: [
        "University",
        "Overseas",
        "Belgium",
        "Europe",
        "Science"
      ]
    }
  },
  {
    id: "wardah-scholarship",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Wardah Scholarship Program (WSP)",
      en: "Wardah Scholarship Program (WSP)"
    },
    provider: {
      id: "PT Paragon Technology and Innovation",
      en: "PT Paragon Technology and Innovation"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan finansial dana pendidikan per semester selama 1 tahun akademik",
        "Program pengembangan diri (personal development) dan pembekalan karir",
        "Kesempatan magang di Paragon Group dan prioritas rekrutmen"
      ],
      en: [
        "Financial education support per semester for 1 academic year",
        "Personal development and career preparation programs",
        "Internship opportunities at Paragon Group and priority recruitment"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 perempuan semester 4 atau 6 di perguruan tinggi mitra",
        "IPK minimal 3.00 dari skala 4.00 dan aktif berorganisasi",
        "Memiliki ketertarikan tinggi pada industri kecantikan dan kepemimpinan perempuan"
      ],
      en: [
        "Active female undergraduate student in 4th or 6th semester at partner universities",
        "Minimum GPA of 3.00 on a 4.00 scale and active in student organizations",
        "Strong interest in the beauty industry and female leadership"
      ]
    },
    status: 'soon',
    deadline: "2026-08-30",
    applicationUrl: "https://www.paragon-innovation.com/",
    description: {
      id: "Program beasiswa CSR bertema kepemimpinan perempuan dari Wardah untuk membekali mahasiswi berprestasi di Indonesia.",
      en: "Wardah's CSR scholarship program themed around female leadership empowering outstanding female students in Indonesia."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Kepemimpinan",
        "Perempuan"
      ],
      en: [
        "Company",
        "Domestic",
        "Leadership",
        "Female Empowerment"
      ]
    }
  },
  {
    id: "beasiswa-indomaret",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Indomaret",
      en: "Indomaret Scholarship"
    },
    provider: {
      id: "PT Indomarco Prismatama (Indomaret)",
      en: "PT Indomarco Prismatama (Indomaret)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya pendidikan UKT per semester hingga lulus sesuai ketentuan",
        "Kesempatan magang eksklusif di kantor cabang atau pusat Indomaret Group"
      ],
      en: [
        "Tuition fee (UKT) assistance per semester until graduation based on rules",
        "Exclusive internship opportunities at Indomaret Group branch or head offices"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 tingkat akhir (semester 6 atau 8) dari semua jurusan",
        "IPK minimal 3.00 dari skala 4.00",
        "Berseda melakukan ikatan dinas kerja di Indomaret setelah lulus"
      ],
      en: [
        "Active S1 undergraduate student in final year (6th or 8th semester) from any major",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Willing to undergo employment bond with Indomaret after graduation"
      ]
    },
    status: 'soon',
    deadline: "2026-09-15",
    applicationUrl: "https://indomaret.co.id/",
    description: {
      id: "Program beasiswa ikatan dinas dari Indomaret Group untuk memberikan bantuan biaya pendidikan dan jaminan karir lulusan universitas.",
      en: "Employment bond scholarship program by Indomaret Group offering financial support and guaranteed career pathways."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Ikatan Dinas",
        "Karir"
      ],
      en: [
        "Company",
        "Domestic",
        "Employment Bond",
        "Career"
      ]
    }
  },
  {
    id: "beasiswa-bfi-finance",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa BFI Finance",
      en: "BFI Finance Scholarship"
    },
    provider: {
      id: "PT BFI Finance Indonesia Tbk",
      en: "PT BFI Finance Indonesia Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT semesteran dan tunjangan uang saku bulanan",
        "Program pendampingan mentor karir dari manajemen BFI Finance"
      ],
      en: [
        "Semester tuition fee (UKT) support and monthly living allowance stipend",
        "Career mentorship program guided by BFI Finance management"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 4 sampai 6 dari jurusan terkait",
        "IPK minimal 3.00 skala 4.00 dan aktif di organisasi kampus",
        "Lolos seleksi berkas administrasi dan wawancara panel BFI"
      ],
      en: [
        "Active undergraduate student in 4th to 6th semester majoring in eligible fields",
        "Minimum GPA of 3.00 on a 4.00 scale and active in campus organizations",
        "Pass administrative screening and BFI panel interview selection"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://www.bfi.co.id/",
    description: {
      id: "Bantuan finansial dari BFI Finance untuk menopang biaya pendidikan mahasiswa berprestasi dengan jaminan pengembangan soft skills karir.",
      en: "Financial scholarship by BFI Finance supporting high-achieving undergraduate students with career development mentoring."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Finansial",
        "Karir"
      ],
      en: [
        "Company",
        "Domestic",
        "Financial Support",
        "Career"
      ]
    }
  },
  {
    id: "beasiswa-bank-kaltimtara",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bank Kaltimtara",
      en: "Bank Kaltimtara Scholarship"
    },
    provider: {
      id: "PT BPD Kaltim Kaltara (Bank Kaltimtara)",
      en: "PT BPD Kaltim Kaltara (Bank Kaltimtara)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya pendidikan UKT tunai per semester selama 1 tahun akademik",
        "Program pelatihan literasi perbankan syariah dan konvensional"
      ],
      en: [
        "Tuition fee (UKT) cash assistance per semester for 1 academic year",
        "Capacity building program in syariah and conventional banking literacy"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 di perguruan tinggi mitra wilayah Kalimantan Timur atau Kalimantan Utara",
        "IPK minimal 3.00 (PTN) atau 3.25 (PTS) skala 4.00",
        "Berasal dari keluarga pra-sejahtera dibuktikan dengan dokumen resmi"
      ],
      en: [
        "Active S1 student at partner universities in East Kalimantan or North Kalimantan",
        "Minimum GPA of 3.00 (State) or 3.25 (Private) on a 4.00 scale",
        "Come from low-income families supported by official need documents"
      ]
    },
    status: 'soon',
    deadline: "2026-08-20",
    applicationUrl: "https://www.bankkaltimtara.co.id/",
    description: {
      id: "Beasiswa CSR dari Bank Pembangunan Daerah Kaltim Kaltara untuk membantu pembiayaan kuliah putra-putri daerah berprestasi.",
      en: "CSR scholarship funded by Bank Kaltimtara supporting local higher education for regional students."
    },
    tags: {
      id: [
        "Perusahaan",
        "Dalam Negeri",
        "Kalimantan",
        "Daerah"
      ],
      en: [
        "Company",
        "Domestic",
        "Kalimantan",
        "Regional"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-riau",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Provinsi Riau",
      en: "Riau Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Riau",
      en: "Provincial Government of Riau"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah tunggal (UKT) penuh hingga lulus sesuai masa studi normatif",
        "Tunjangan biaya penyusunan tugas akhir / skripsi / tesis"
      ],
      en: [
        "Full tuition fee (UKT) coverage until graduation based on normative study period",
        "Financial thesis/dissertation write-up grant contribution support"
      ]
    },
    requirements: {
      id: [
        "Warga Provinsi Riau asli dibuktikan dengan KTP dan Kartu Keluarga Riau",
        "Mahasiswa aktif di perguruan tinggi mitra Pemprov Riau dengan IPK minimal sesuai kategori",
        "Terdaftar dalam database warga miskin atau berprestasi akademik tinggi"
      ],
      en: [
        "Riau resident holding a Riau ID and Family Card",
        "Active student at a Riau government partner university with minimum GPA based on rules",
        "Registered under regional low-income family database or holds high academic records"
      ]
    },
    status: 'soon',
    deadline: "2026-07-31",
    applicationUrl: "https://riau.go.id/",
    description: {
      id: "Program beasiswa Pemprov Riau untuk memberikan bantuan biaya pendidikan tinggi bagi putra-putri Riau berprestasi dan kurang mampu.",
      en: "Riau Provincial Government's educational financial assistance program supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Riau",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "Riau",
        "Regional"
      ]
    }
  },
  {
    id: "uwa-international-postgraduate",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Pascasarjana Internasional UWA (Australia)",
      en: "UWA International Postgraduate Research Scholarship (Australia)"
    },
    provider: {
      id: "University of Western Australia (UWA)",
      en: "University of Western Australia (UWA)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh untuk program riset pascasarjana (Master by Research/PhD)",
        "Tunjangan hidup tahunan senilai AUD 33.000",
        "Asuransi kesehatan lengkap mahasiswa asing (OSHC)"
      ],
      en: [
        "Full tuition fees coverage for postgraduate research (Master/PhD) studies",
        "Annual living allowance of AUD 33,000",
        "Single Overseas Student Health Cover (OSHC) coverage"
      ]
    },
    requirements: {
      id: [
        "Memenuhi kriteria masuk riset pascasarjana di UWA",
        "Memiliki proposal riset yang luar biasa dengan persetujuan dari supervisor UWA",
        "Sertifikat bahasa Inggris minimal IELTS 6.5 atau TOEFL iBT 82"
      ],
      en: [
        "Meet UWA's postgraduate research admission requirements",
        "Hold an outstanding research proposal approved by a UWA academic supervisor",
        "English proficiency certificate (IELTS min 6.5 or TOEFL iBT 82)"
      ]
    },
    status: 'open',
    deadline: "2026-08-31",
    applicationUrl: "https://www.uwa.edu.au/study/fees-and-scholarships/",
    description: {
      id: "Beasiswa penuh riset doktoral dan magister bergengsi dari Universitas Western Australia bagi peneliti internasional terbaik se-dunia.",
      en: "UWA's highly competitive postgraduate research scholarship supporting top-tier international scholars."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Research"
      ]
    }
  },
  {
    id: "uq-research-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Pascasarjana Universitas Queensland (Australia)",
      en: "University of Queensland (UQ) Research Scholarship"
    },
    provider: {
      id: "University of Queensland (Australia)",
      en: "University of Queensland (Australia)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh untuk jenjang Master by Research atau Ph.D.",
        "Tunjangan biaya hidup tahunan senilai AUD 32.192 selama masa studi riset",
        "Asuransi kesehatan luar negeri mahasiswa asing (OSHC)"
      ],
      en: [
        "Full tuition fees coverage for Master by Research or Ph.D. programs",
        "Annual living allowance stipend of AUD 32,192 for the duration of research studies",
        "Single Overseas Student Health Cover (OSHC) coverage"
      ]
    },
    requirements: {
      id: [
        "Memenuhi persyaratan akademik masuk riset pascasarjana di UQ",
        "Memiliki proposal riset yang disetujui oleh calon pembimbing riset di UQ",
        "Kemahiran bahasa Inggris (IELTS minimal 6.5 atau TOEFL iBT 87)"
      ],
      en: [
        "Meet UQ's postgraduate research academic admission criteria",
        "Hold a research proposal approved by a prospective UQ advisor",
        "English language proficiency certificate (IELTS min 6.5 or TOEFL iBT 87)"
      ]
    },
    status: 'closed',
    deadline: "2026-09-01",
    applicationUrl: "https://study.uq.edu.au/fees-scholarships/scholarships/",
    description: {
      id: "Beasiswa riset pascasarjana penuh yang sangat kompetitif dari Universitas Queensland bagi calon doktor dan peneliti muda berprestasi tingkat dunia.",
      en: "UQ's highly competitive fully funded postgraduate research scholarship supporting outstanding PhD and Master candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Research"
      ]
    }
  },
  {
    id: "otago-doctoral-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Doktoral Universitas Otago (Selandia Baru)",
      en: "University of Otago Doctoral Scholarship (New Zealand)"
    },
    provider: {
      id: "University of Otago (Selandia Baru)",
      en: "University of Otago (New Zealand)"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh jenjang Ph.D. selama 3 tahun masa studi",
        "Tunjangan hidup tahunan senilai NZD 32.544",
        "Bebas biaya administrasi dan keanggotaan mahasiswa"
      ],
      en: [
        "Full tuition fees coverage for Ph.D. studies for up to 3 years",
        "Annual living allowance of NZD 32,544",
        "Waiver of student services fees and levies"
      ]
    },
    requirements: {
      id: [
        "Memenuhi persyaratan pendaftaran Ph.D. penuh waktu di Universitas Otago",
        "Memiliki rekam prestasi akademik tertinggi (IPK tinggi setara kelas utama/First Class)",
        "Proposal penelitian riset orisinal dengan persetujuan calon supervisor riset Otago"
      ],
      en: [
        "Meet full-time Ph.D. admission requirements at the University of Otago",
        "Hold outstanding academic records (equivalent to First Class Honours degree)",
        "Original research proposal approved by a prospective Otago supervisor"
      ]
    },
    status: 'open',
    deadline: "2026-11-30",
    applicationUrl: "https://www.otago.ac.nz/study/scholarships/",
    description: {
      id: "Beasiswa doktor riset penuh dari Universitas Otago untuk menarik kandidat Ph.D. berprestasi tinggi se-dunia untuk menempuh riset di Selandia Baru.",
      en: "University of Otago's fully funded doctoral research scholarship attracting top-tier Ph.D. candidates globally."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Selandia Baru",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "New Zealand",
        "Research"
      ]
    }
  },
  {
    id: "tohoku-presidents-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Tohoku University President's Fellowship (Jepang)",
      en: "Tohoku University President's Fellowship (Japan)"
    },
    provider: {
      id: "Tohoku University (Jepang)",
      en: "Tohoku University (Japan)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh di Tohoku University",
        "Tunjangan hidup bulanan senilai JPY 150.000 (S2) atau JPY 180.000 (S3)"
      ],
      en: [
        "Full tuition fees waiver coverage at Tohoku University",
        "Monthly living allowance stipend of JPY 150,000 (Master) or JPY 180,000 (PhD)"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional berprestasi akademik luar biasa yang mendaftar ke Tohoku University",
        "Didukung secara resmi oleh supervisor akademik Tohoku University",
        "Memiliki rekam riset yang kuat di bidang sains, teknik, atau kedokteran"
      ],
      en: [
        "International students demonstrating highest academic excellence applying to Tohoku University",
        "Officially recommended by Tohoku University academic advisor",
        "Hold strong research records in science, engineering, or medical fields"
      ]
    },
    status: 'soon',
    deadline: "2026-10-15",
    applicationUrl: "https://www.tohoku.ac.jp/en/admissions/financial_aid.html",
    description: {
      id: "Beasiswa riset pascasarjana penuh yang prestisius dari Universitas Tohoku bagi peneliti muda berprestasi tingkat internasional.",
      en: "Tohoku University's highly prestigious fully funded graduate fellowship supporting top-tier international researchers."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Jepang",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Japan",
        "Research"
      ]
    }
  },
  {
    id: "hokkaido-presidents-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Hokkaido University President's Fellowship (Jepang)",
      en: "Hokkaido University President's Fellowship (Japan)"
    },
    provider: {
      id: "Hokkaido University (Jepang)",
      en: "Hokkaido University (Japan)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh di Hokkaido University",
        "Tunjangan hidup bulanan senilai JPY 150.000 hingga JPY 180.000 selama masa studi",
        "Akomodasi asrama universitas internasional gratis"
      ],
      en: [
        "Full tuition fees waiver coverage at Hokkaido University",
        "Monthly living allowance of JPY 150,000 to JPY 180,000 for the program duration",
        "Free international student dormitory accommodation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional dengan prestasi akademik luar biasa yang mendaftar program pascasarjana",
        "Memiliki rekam riset yang terbukti dan didukung calon pembimbing di Hokkaido University",
        "Sertifikat kemahiran bahasa Inggris (IELTS/TOEFL) atau Jepang (JLPT)"
      ],
      en: [
        "International students demonstrating highest academic excellence applying to graduate programs",
        "Hold proven research record and supported by a prospective Hokkaido advisor",
        "English (IELTS/TOEFL) or Japanese (JLPT) language certificate"
      ]
    },
    status: 'soon',
    deadline: "2026-10-30",
    applicationUrl: "https://www.global.hokudai.ac.jp/admissions/scholarships/",
    description: {
      id: "Beasiswa penuh prestisius dari Rektor Universitas Hokkaido untuk menyokong biaya kuliah dan hidup peneliti muda internasional berprestasi.",
      en: "Hokkaido University's prestigious fully funded fellowship supporting top international postgraduate research candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Jepang",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Japan",
        "Research"
      ]
    }
  },
  {
    id: "beasiswa-kaltara-cerdas",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Kaltara Cerdas (Provinsi Kalimantan Utara)",
      en: "Kaltara Cerdas Scholarship (North Kalimantan Province)"
    },
    provider: {
      id: "Pemerintah Provinsi Kalimantan Utara",
      en: "Provincial Government of North Kalimantan"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya pendidikan tahunan",
        "Dukungan dana riset untuk tugas akhir"
      ],
      en: [
        "Annual education financial assistance",
        "Research funding support for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia asal Kalimantan Utara",
        "Mahasiswa aktif D3/D4/S1/S2/S3",
        "IPK minimal 3.00 untuk jurusan eksakta atau 3.20 untuk sosial",
        "Tidak sedang menerima beasiswa dari instansi lain"
      ],
      en: [
        "Indonesian citizen from North Kalimantan",
        "Active student of Diploma, Bachelor, Master, or Doctoral degree",
        "Minimum GPA of 3.00 for science majors or 3.20 for social sciences",
        "Not currently receiving any other scholarships"
      ]
    },
    status: 'open',
    deadline: "2026-11-30",
    applicationUrl: "https://kaltaraprov.go.id/",
    description: {
      id: "Beasiswa dari Pemerintah Provinsi Kalimantan Utara untuk membantu mahasiswa berprestasi dan kurang mampu dari Kaltara menempuh pendidikan tinggi.",
      en: "Scholarship program by the Provincial Government of North Kalimantan to assist outstanding and underprivileged students from North Kalimantan in higher education."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kaltara",
        "Bantuan Biaya"
      ],
      en: [
        "Government",
        "Domestic",
        "Kaltara",
        "Financial Aid"
      ]
    }
  },
  {
    id: "beasiswa-minangkabau",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Minangkabau (Provinsi Sumatera Barat)",
      en: "Minangkabau Scholarship (West Sumatra Province)"
    },
    provider: {
      id: "Pemerintah Provinsi Sumatera Barat",
      en: "Provincial Government of West Sumatra"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT per semester",
        "Tunjangan buku dan alat tulis"
      ],
      en: [
        "Tuition fee (UKT) assistance per semester",
        "Book and stationary allowance"
      ]
    },
    requirements: {
      id: [
        "Memiliki KTP Sumatera Barat atau keturunan Minangkabau",
        "Mahasiswa aktif di perguruan tinggi negeri atau swasta terakreditasi",
        "IPK minimal 3.00 (skala 4.00)",
        "Menulis esai kontribusi untuk kemajuan Sumatera Barat"
      ],
      en: [
        "Hold West Sumatra ID card or be of Minangkabau descent",
        "Active student at an accredited public or private university",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Submit an essay on contributing to the development of West Sumatra"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://sumbarprov.go.id/",
    description: {
      id: "Program beasiswa Pemerintah Provinsi Sumatera Barat untuk mendukung peningkatan kapasitas SDM pemuda-pemudi berprestasi asal Minangkabau.",
      en: "Scholarship program by the Provincial Government of West Sumatra to support capacity building for outstanding youth of Minangkabau descent."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sumatera Barat",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "West Sumatra",
        "Regional"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-malang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Mahasiswa Berprestasi Pemerintah Kota Malang",
      en: "Malang Municipal Government Outstanding Student Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Malang",
      en: "Malang City Government"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya kuliah tahunan",
        "Pelatihan kepemimpinan dan pengabdian masyarakat"
      ],
      en: [
        "Annual tuition fee assistance",
        "Leadership training and community service development"
      ]
    },
    requirements: {
      id: [
        "Warga Kota Malang (dibuktikan dengan KTP/KK Kota Malang)",
        "Mahasiswa aktif S1/D4 di perguruan tinggi di Malang",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik nasional",
        "IPK minimal 3.00 (akademik) atau 2.75 (non-akademik)"
      ],
      en: [
        "Resident of Malang City (proven by Malang City ID/Family Card)",
        "Active undergraduate student at a university in Malang",
        "From an underprivileged family or have national academic/non-academic achievements",
        "Minimum GPA of 3.00 (academic) or 2.75 (non-academic)"
      ]
    },
    status: 'open',
    deadline: "2026-10-15",
    applicationUrl: "https://malangkota.go.id/",
    description: {
      id: "Beasiswa Pemerintah Kota Malang untuk mendukung mahasiswa berprestasi dan kurang mampu yang berdomisili di Kota Malang.",
      en: "Malang City Government scholarship to support outstanding and underprivileged undergraduate students residing in Malang City."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Malang",
        "Sosial"
      ],
      en: [
        "Government",
        "Domestic",
        "Malang",
        "Social"
      ]
    }
  },
  {
    id: "beasiswa-banyuwangi-cerdas",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Banyuwangi Cerdas",
      en: "Banyuwangi Cerdas Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Banyuwangi",
      en: "Banyuwangi Regency Government"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh (UKT) sampai lulus (maksimal 8 semester)",
        "Uang saku bulanan untuk kebutuhan hidup",
        "Tunjangan buku dan alat penunjang belajar"
      ],
      en: [
        "Full tuition fee (UKT) coverage until graduation (max 8 semesters)",
        "Monthly living allowance",
        "Book and learning support allowance"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Banyuwangi (KTP/KK Banyuwangi)",
        "Lulusan SMA/SMK/MA sederajat yang akan atau sedang menempuh studi S1",
        "Berasal dari keluarga kurang mampu secara ekonomi",
        "Berkomitmen mengabdi untuk kemajuan Banyuwangi setelah lulus"
      ],
      en: [
        "Native resident of Banyuwangi Regency (Banyuwangi ID/Family Card)",
        "High school graduate pursuing or planning to pursue a Bachelor's degree",
        "From an economically disadvantaged family",
        "Committed to serving the community in Banyuwangi upon graduation"
      ]
    },
    status: 'open',
    deadline: "2026-08-20",
    applicationUrl: "https://banyuwangikab.go.id/",
    description: {
      id: "Program beasiswa penuh dari Pemerintah Kabupaten Banyuwangi bagi anak-anak muda berprestasi dari keluarga kurang mampu untuk kuliah S1.",
      en: "A full scholarship program by the Banyuwangi Regency Government for high-achieving youth from underprivileged families to pursue higher education."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Banyuwangi",
        "Beasiswa Penuh"
      ],
      en: [
        "Government",
        "Domestic",
        "Banyuwangi",
        "Full Scholarship"
      ]
    }
  },
  {
    id: "beasiswa-bakti-bni",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Bakti BNI (Bank Negara Indonesia)",
      en: "Bakti BNI Scholarship (Bank Negara Indonesia)"
    },
    provider: {
      id: "PT Bank Negara Indonesia (Persero) Tbk",
      en: "PT Bank Negara Indonesia (Persero) Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah (UKT) penuh per semester",
        "Uang saku bulanan sebesar Rp 1.000.000",
        "Program mentorship profesional dengan karyawan BNI",
        "Kesempatan magang dan rekrutmen prioritas setelah lulus"
      ],
      en: [
        "Full tuition fee (UKT) coverage per semester",
        "Monthly living allowance of Rp 1,000,000",
        "Professional mentorship program with BNI employees",
        "Internship opportunities and priority recruitment upon graduation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1 semester 5 di universitas mitra BNI",
        "IPK minimal 3.25 pada skala 4.00",
        "Aktif berorganisasi dan memiliki kemampuan komunikasi yang baik",
        "Tidak sedang menerima beasiswa lain"
      ],
      en: [
        "Active 5th-semester undergraduate student in BNI partner universities",
        "Minimum GPA of 3.25 on a 4.00 scale",
        "Active in student organizations and possess excellent communication skills",
        "Not currently receiving any other scholarships"
      ]
    },
    status: 'open',
    deadline: "2026-10-31",
    applicationUrl: "https://www.bni.co.id/",
    description: {
      id: "Program beasiswa CSR Bank Negara Indonesia untuk membantu biaya pendidikan dan pengembangan kepemimpinan mahasiswa sarjana berprestasi.",
      en: "CSR scholarship program by Bank Negara Indonesia to support education costs and leadership development of outstanding undergraduate students."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Perbankan",
        "BUMN"
      ],
      en: [
        "Private",
        "Domestic",
        "Banking",
        "SOE"
      ]
    }
  },
  {
    id: "kyoto-university-iussp-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Program Sarjana Internasional Universitas Kyoto (iUSSP)",
      en: "Kyoto University International Undergraduate Scholarship Program (iUSSP)"
    },
    provider: {
      id: "Kyoto University, Jepang",
      en: "Kyoto University, Japan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang pendaftaran dan kuliah 100% dibebaskan",
        "Tunjangan hidup bulanan JPY 120.000 selama 4 tahun",
        "Tiket pesawat kelas ekonomi dari negara asal ke Jepang",
        "Bantuan akomodasi tahun pertama di asrama universitas"
      ],
      en: [
        "100% registration and tuition fees waiver",
        "Monthly living stipend of JPY 120,000 for 4 years",
        "Economy-class airfare from home country to Japan",
        "Accommodation support in the university dormitory for the first year"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Jepang dan menyelesaikan pendidikan menengah atas di luar Jepang",
        "Memenuhi kualifikasi masuk akademik program sarjana Universitas Kyoto",
        "Kemampuan bahasa Inggris tingkat tinggi (IELTS minimal 6.5 / TOEFL iBT 90)"
      ],
      en: [
        "Non-Japanese citizen who completed high school education outside Japan",
        "Meet the academic admission requirements of Kyoto University undergraduate program",
        "High English proficiency (minimum IELTS 6.5 or TOEFL iBT 90)"
      ]
    },
    status: 'closed',
    deadline: "2026-12-05",
    applicationUrl: "https://www.kyoto-u.ac.jp/en/education-campus/undergraduate/iussp",
    description: {
      id: "Beasiswa bergengsi dari Universitas Kyoto untuk menarik siswa sekolah menengah internasional terbaik menempuh studi S1 di Jepang.",
      en: "A prestigious scholarship by Kyoto University to attract outstanding international high school graduates to pursue bachelor's studies in Japan."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Jepang",
        "Beasiswa Penuh"
      ],
      en: [
        "University",
        "Overseas",
        "Japan",
        "Full Scholarship"
      ]
    }
  },
  {
    id: "snu-gsfs-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Seoul National University GSFS (Korea Selatan)",
      en: "Seoul National University GSFS (Graduate Scholarship for Excellent Foreign Students)"
    },
    provider: {
      id: "Seoul National University, Korea Selatan",
      en: "Seoul National University, South Korea"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh maksimal 4 semester",
        "Tunjangan hidup bulanan minimal KRW 500.000",
        "Asuransi kesehatan kelompok di Korea Selatan"
      ],
      en: [
        "Full tuition fee waiver for up to 4 semesters",
        "Monthly living allowance of minimum KRW 500,000",
        "Group health insurance in South Korea"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Korea (kedua orang tua juga bukan warga negara Korea)",
        "Mendaftar program magister atau doktoral di Seoul National University",
        "Berasal dari negara berkembang di wilayah Asia (termasuk Indonesia)",
        "IPK sangat memuaskan dari jenjang studi sebelumnya"
      ],
      en: [
        "Non-Korean citizen (neither applicant nor parents hold Korean citizenship)",
        "Applying for a master's or doctoral program at Seoul National University",
        "From a developing country in Asia (including Indonesia)",
        "Excellent academic record/GPA from the previous level of study"
      ]
    },
    status: 'closed',
    deadline: "2026-09-10",
    applicationUrl: "https://en.snu.ac.kr/admission",
    description: {
      id: "Beasiswa pascasarjana Seoul National University bagi mahasiswa asing berprestasi dari negara-negara berkembang Asia untuk riset lanjutan.",
      en: "Seoul National University's graduate scholarship for outstanding international students from developing Asian countries to pursue advanced research."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Korea Selatan",
        "Pascasarjana"
      ],
      en: [
        "University",
        "Overseas",
        "South Korea",
        "Graduate"
      ]
    }
  },
  {
    id: "bristol-think-big-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Think Big Universitas Bristol (Inggris)",
      en: "University of Bristol Think Big Scholarship (UK)"
    },
    provider: {
      id: "University of Bristol, Inggris",
      en: "University of Bristol, UK"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya kuliah tahunan senilai £6.500, £13.000, atau £26.000",
        "Undangan ke kegiatan pengembangan jaringan dan karir mahasiswa asing"
      ],
      en: [
        "Tuition fee reduction of £6,500, £13,000, or £26,000 per year",
        "Invitation to exclusive networking and career events for international students"
      ]
    },
    requirements: {
      id: [
        "Dikategorikan sebagai mahasiswa asing dengan tarif biaya kuliah internasional",
        "Telah mendaftar program sarjana atau magister penuh waktu di Universitas Bristol",
        "Menunjukkan motivasi kuat dan pemikiran orisinal melalui esai pendaftaran"
      ],
      en: [
        "Classified as an international student for fee-paying purposes",
        "Applied to start a full-time undergraduate or postgraduate course at the University of Bristol",
        "Demonstrate strong motivation and original thinking through the application essay"
      ]
    },
    status: 'closed',
    deadline: "2026-05-18",
    applicationUrl: "https://www.bristol.ac.uk/international/fees-finance/scholarships/think-big/",
    description: {
      id: "Program beasiswa Universitas Bristol untuk mendukung mahasiswa internasional berbakat yang ingin membuat perubahan di tingkat global.",
      en: "University of Bristol scholarship program designed to support talented international students who want to make a difference on a global scale."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Bantuan Kuliah"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Tuition Support"
      ]
    }
  },
  {
    id: "auckland-international-student-excellence-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Auckland International Student Excellence (Selandia Baru)",
      en: "University of Auckland International Student Excellence Scholarship"
    },
    provider: {
      id: "University of Auckland, Selandia Baru",
      en: "University of Auckland, New Zealand"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya kuliah hingga NZD 10.000 untuk tahun pertama"
      ],
      en: [
        "Tuition fee offset of up to NZD 10,000 for the first year"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional baru yang mendaftar program gelar penuh",
        "Memiliki prestasi akademik yang sangat memuaskan (setara IPK 3.50+)",
        "Menunjukkan rencana studi yang jelas dan relevansi karir masa depan"
      ],
      en: [
        "New international student enrolled in a full-time degree program",
        "Outstanding academic performance (equivalent to GPA 3.50+)",
        "Demonstrate a clear study plan and relevance to future career goals"
      ]
    },
    status: 'closed',
    deadline: "2026-11-20",
    applicationUrl: "https://www.auckland.ac.nz/en/study/scholarships-and-awards/find-a-scholarship/auckland-international-student-excellence-scholarship.html",
    description: {
      id: "Beasiswa dari Universitas Auckland untuk mendukung mahasiswa internasional berprestasi akademik tinggi menempuh studi sarjana atau pascasarjana.",
      en: "A scholarship by the University of Auckland to support high-achieving international students to pursue undergraduate or postgraduate studies."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Selandia Baru",
        "Prestasi"
      ],
      en: [
        "University",
        "Overseas",
        "New Zealand",
        "Excellence"
      ]
    }
  },
  {
    id: "swiss-government-excellence-postdoctoral-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Swiss untuk Penelitian Postdoctoral",
      en: "Swiss Government Excellence Postdoctoral Scholarships"
    },
    provider: {
      id: "Pemerintah Konfederasi Swiss",
      en: "Federal Commission for Scholarships for Foreign Students (FCS), Switzerland"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Tunjangan biaya hidup bulanan senilai CHF 3.500 selama penelitian",
        "Asuransi kesehatan dan bantuan perumahan",
        "Tiket pesawat perjalanan pulang-pergi ke Swiss",
        "Biaya penunjang riset di universitas tuan rumah Swiss"
      ],
      en: [
        "Monthly living allowance of CHF 3,500 during the research period",
        "Mandatory health insurance and housing allowance support",
        "Round-trip economy-class airfare to Switzerland",
        "Research support fees at the host Swiss university"
      ]
    },
    requirements: {
      id: [
        "Memegang gelar PhD yang diselesaikan dalam waktu kurang dari 5 tahun saat mendaftar",
        "Maju dengan rencana proposal riset yang solid dan disetujui profesor di Swiss",
        "Kemampuan bahasa akademis (Inggris/Jerman/Prancis) yang sangat baik"
      ],
      en: [
        "Hold a PhD completed less than 5 years prior to the application deadline",
        "Submit a solid research proposal approved by a host professor in Switzerland",
        "Excellent proficiency in the academic language (English/German/French)"
      ]
    },
    status: 'soon',
    deadline: "2026-11-15",
    applicationUrl: "https://www.sbfi.admin.ch/sbfi/en/home/education/scholarships-and-grants/swiss-government-excellence-scholarships.html",
    description: {
      id: "Beasiswa bergengsi Pemerintah Swiss untuk peneliti postdoctoral asing guna melakukan penelitian di universitas riset terkemuka di Swiss.",
      en: "A prestigious scholarship by the Swiss government for international postdoctoral researchers to conduct research at top Swiss universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Swiss",
        "Postdoctoral"
      ],
      en: [
        "Government",
        "Overseas",
        "Switzerland",
        "Postdoctoral"
      ]
    }
  },
  {
    id: "beasiswa-pmdsu",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa PMDSU (Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi)",
      en: "PMDSU Scholarship (Ministry of Education, Culture, Research, and Technology)"
    },
    provider: {
      id: "Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi Kemendikbudristek",
      en: "Directorate General of Higher Education, Research, and Technology, MoECRT"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya pendidikan (SPP/UKT) penuh untuk program Magister dan Doktor (4 tahun)",
        "Uang saku bulanan dan tunjangan biaya hidup",
        "Dana hibah penelitian tugas akhir dan riset kolaborasi",
        "Bantuan biaya publikasi jurnal ilmiah internasional"
      ],
      en: [
        "Full tuition fee coverage for Master and Doctoral programs (4 years)",
        "Monthly living allowance and stipend",
        "Research grant for final thesis and collaborative research",
        "Financial support for publishing in international scientific journals"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia (WNI) lulusan S1 berprestasi",
        "Usia maksimal 24 tahun (fresh graduate) atau sesuai ketentuan kementerian",
        "IPK minimal 3.25 dari perguruan tinggi terakreditasi",
        "Memperoleh rekomendasi dari dosen pembimbing akademik S1",
        "Lolos seleksi administrasi dan wawancara dengan promotor di universitas penyelenggara"
      ],
      en: [
        "Indonesian citizen (WNI) with outstanding Bachelor's academic records",
        "Maximum age of 24 years (fresh graduate) or based on ministry guidelines",
        "Minimum GPA of 3.25 from an accredited higher education institution",
        "Obtain a recommendation letter from Bachelor's academic advisor",
        "Pass administration screening and interview with the supervisor at the host university"
      ]
    },
    status: 'closed',
    deadline: "2026-07-06",
    applicationUrl: "https://pmdsu.kemdiktisaintek.go.id/v2",
    description: {
      id: "Program beasiswa percepatan pendidikan magister menuju doktor dalam waktu 4 tahun bagi sarjana unggulan di bawah bimbingan promotor andal.",
      en: "An accelerated scholarship program enabling outstanding bachelor graduates to earn master and doctoral degrees within 4 years under top-tier supervisors."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Percepatan",
        "Riset"
      ],
      en: [
        "Government",
        "Domestic",
        "Accelerated",
        "Research"
      ]
    }
  },
  {
    id: "beasiswa-kalteng-berkah",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Kalteng Berkah (Provinsi Kalimantan Tengah)",
      en: "Kalteng Berkah Scholarship (Central Kalimantan Province)"
    },
    provider: {
      id: "Pemerintah Provinsi Kalimantan Tengah",
      en: "Provincial Government of Central Kalimantan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan stimulan tahunan",
        "Dukungan persiapan tugas akhir kuliah"
      ],
      en: [
        "Annual education financial support grant",
        "Support for final thesis preparation"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia berdomisili di Kalimantan Tengah",
        "Memiliki KTP dan Kartu Keluarga Provinsi Kalimantan Tengah",
        "Mahasiswa aktif program Diploma (D3/D4) atau Sarjana (S1)",
        "IPK minimal 3.00 (jurusan eksakta) atau 3.20 (jurusan non-eksakta)"
      ],
      en: [
        "Indonesian citizen residing in Central Kalimantan",
        "Possess Central Kalimantan ID and Family Card",
        "Active student in Diploma (D3/D4) or Bachelor (S1) programs",
        "Minimum GPA of 3.00 (science majors) or 3.20 (non-science majors)"
      ]
    },
    status: 'open',
    deadline: "2026-10-30",
    applicationUrl: "https://kalteng.go.id/",
    description: {
      id: "Bantuan biaya pendidikan stimulan dari Pemprov Kalimantan Tengah bagi mahasiswa berprestasi dan kurang mampu asal Kalteng.",
      en: "Stimulant education financial aid from the Central Kalimantan Provincial Government for outstanding and underprivileged students from the region."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kalimantan Tengah",
        "Bantuan"
      ],
      en: [
        "Government",
        "Domestic",
        "Central Kalimantan",
        "Financial Aid"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-jember",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Mahasiswa Berprestasi Kabupaten Jember",
      en: "Jember Regency Government Outstanding Student Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Jember",
      en: "Regency Government of Jember"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan pembebasan biaya kuliah (UKT) per semester"
      ],
      en: [
        "Tuition fee (UKT) waiver assistance per semester"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Jember dibuktikan dengan KTP/KK Jember",
        "Mahasiswa aktif program D3/D4/S1 di perguruan tinggi negeri atau swasta mitra",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi seni/olahraga/akademik",
        "IPK minimal 3.00 atau memiliki rekomendasi resmi dinas terkait"
      ],
      en: [
        "Native resident of Jember Regency proven by Jember ID/Family Card",
        "Active student of Diploma or Bachelor programs at partner public or private universities",
        "From an underprivileged family or possess achievements in arts, sports, or academics",
        "Minimum GPA of 3.00 or have an official recommendation from the related department"
      ]
    },
    status: 'open',
    deadline: "2026-09-15",
    applicationUrl: "https://jemberkab.go.id/",
    description: {
      id: "Beasiswa Pemerintah Kabupaten Jember untuk memfasilitasi pemerataan kesempatan belajar bagi mahasiswa asli daerah Jember.",
      en: "Jember Regency Government scholarship program aimed at providing equal education opportunities for native students from Jember."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Jember",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "Jember",
        "Regional"
      ]
    }
  },
  {
    id: "beasiswa-soposurung",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Yayasan Soposurung (Toba)",
      en: "Soposurung Foundation Scholarship (Toba)"
    },
    provider: {
      id: "Yayasan Soposurung Balige",
      en: "Soposurung Foundation Balige"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya pendidikan penuh terakomodasi di asrama",
        "Uang saku bulanan dan biaya makan sehari-hari",
        "Fasilitas pembinaan karakter dan pelatihan bahasa asing"
      ],
      en: [
        "Full tuition and boarding fees covered in the dormitory",
        "Monthly allowance and daily meals",
        "Character building facilities and foreign language training"
      ]
    },
    requirements: {
      id: [
        "Lulusan SMP/sederajat asal Kabupaten Toba atau wilayah Sumatera Utara",
        "Lolos seleksi masuk asrama Yayasan Soposurung (tes akademik, fisik, kesehatan, psikotes)",
        "Memiliki integritas tinggi dan bersedia tinggal di asrama selama masa studi"
      ],
      en: [
        "Junior High School graduate from Toba Regency or North Sumatra region",
        "Pass the Soposurung Foundation entrance selection (academic, physical, health, and psychometric tests)",
        "Possess high integrity and willing to reside in the dormitory during the study period"
      ]
    },
    status: 'open',
    deadline: "2026-08-31",
    applicationUrl: "http://yayasansoposurung.or.id/",
    description: {
      id: "Program beasiswa asrama penuh di Balige untuk mencetak siswa berkarakter kuat, berprestasi tinggi, dan berwawasan global.",
      en: "A boarding scholarship program in Balige designed to cultivate high-achieving students with strong character and global perspectives."
    },
    tags: {
      id: [
        "Yayasan",
        "Dalam Negeri",
        "Asrama",
        "Sumatera Utara"
      ],
      en: [
        "Foundation",
        "Domestic",
        "Boarding",
        "North Sumatra"
      ]
    }
  },
  {
    id: "beasiswa-kartu-cerdas-diy",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Kartu Cerdas Daerah Istimewa Yogyakarta",
      en: "Yogyakarta Special Region Kartu Cerdas Scholarship"
    },
    provider: {
      id: "Dinas Pendidikan, Pemuda, dan Olahraga Pemda DIY",
      en: "Department of Education, Youth, and Sports, Yogyakarta Regional Government"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana operasional pendidikan tahunan",
        "Subsidi pembelian buku dan perlengkapan studi"
      ],
      en: [
        "Annual education operational funding assistance",
        "Subsidy for purchasing books and study supplies"
      ]
    },
    requirements: {
      id: [
        "Warga Daerah Istimewa Yogyakarta (dibuktikan dengan KTP/KK DIY)",
        "Berasal dari keluarga pemegang kartu pengaman sosial (KPS/KKS/KIP)",
        "Mahasiswa aktif program sarjana (S1) atau diploma",
        "IPK minimal 2.75 pada skala 4.00"
      ],
      en: [
        "Resident of Yogyakarta Special Region (proven by Yogyakarta ID/Family Card)",
        "From families holding social security cards (KPS/KKS/KIP)",
        "Active student in Bachelor's or Diploma programs",
        "Minimum GPA of 2.75 on a 4.00 scale"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://dikpora.jogjaprov.go.id/",
    description: {
      id: "Program bantuan biaya operasional pendidikan dari Dinas Pendidikan DIY untuk menjamin keberlangsungan kuliah mahasiswa kurang mampu.",
      en: "Education operational funding assistance program by the Yogyakarta Department of Education to ensure higher education continuity for underprivileged students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Yogyakarta",
        "Bantuan Sosial"
      ],
      en: [
        "Government",
        "Domestic",
        "Yogyakarta",
        "Social Aid"
      ]
    }
  },
  {
    id: "kaist-undergraduate-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Sarjana KAIST (Korea Selatan)",
      en: "KAIST Undergraduate Scholarship (South Korea)"
    },
    provider: {
      id: "Korea Advanced Institute of Science and Technology (KAIST)",
      en: "Korea Advanced Institute of Science and Technology (KAIST)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh (8 semester)",
        "Tunjangan biaya hidup bulanan senilai KRW 350.000",
        "Asuransi kesehatan nasional Korea Selatan ditanggung penuh"
      ],
      en: [
        "Full tuition fee waiver for 8 semesters",
        "Monthly living allowance of KRW 350,000",
        "Full coverage of Korean National Health Insurance"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Korea Selatan (orang tua juga bukan warga negara Korea)",
        "Lulusan SMA/sederajat dengan prestasi akademik sains dan matematika yang kuat",
        "Memenuhi kemampuan bahasa Inggris (IELTS minimal 6.5 / TOEFL iBT 83)",
        "Menjaga nilai IPK kumulatif minimal 2.70 pada skala 4.30 di KAIST"
      ],
      en: [
        "Non-Korean citizen (neither applicant nor parents hold Korean citizenship)",
        "High school graduate with outstanding academic performance in science and mathematics",
        "Proof of English language proficiency (minimum IELTS 6.5 or TOEFL iBT 83)",
        "Maintain a minimum cumulative GPA of 2.70 out of 4.30 scale at KAIST"
      ]
    },
    status: 'open',
    deadline: "2026-10-23",
    applicationUrl: "https://admission.kaist.ac.kr/intl-undergraduate/",
    description: {
      id: "Beasiswa penuh dari institut sains terkemuka Korea Selatan KAIST untuk mencetak inovator masa depan di bidang teknik dan sains.",
      en: "Full scholarship from South Korea's leading science and technology institute KAIST to nurture global innovators in engineering and sciences."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Korea Selatan",
        "Sains"
      ],
      en: [
        "University",
        "Overseas",
        "South Korea",
        "Science"
      ]
    }
  },
  {
    id: "jasso-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa JASSO (Japan Student Services Organization)",
      en: "JASSO Scholarship (Japan Student Services Organization)"
    },
    provider: {
      id: "Japan Student Services Organization (JASSO)",
      en: "Japan Student Services Organization (JASSO)"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Tunjangan hidup bulanan JPY 80.000 selama program pertukaran atau studi jangka pendek"
      ],
      en: [
        "Monthly living stipend of JPY 80,000 for the duration of exchange or short-term study program"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif di universitas luar Jepang yang menjalin kerja sama pertukaran dengan universitas Jepang",
        "Direkomendasikan oleh universitas asal",
        "Memiliki IPK minimal 2.30 pada skala 3.00 standar JASSO",
        "Menunjukkan ketertarikan kuat pada bahasa dan budaya Jepang"
      ],
      en: [
        "Active student at a university outside Japan which has an exchange agreement with a Japanese university",
        "Recommended by the home university",
        "Minimum GPA of 2.30 on a 3.00 scale based on JASSO calculation",
        "Demonstrate strong interest in Japanese language and culture"
      ]
    },
    status: 'open',
    deadline: "2026-11-30",
    applicationUrl: "https://www.jasso.go.jp/en/index.html",
    description: {
      id: "Beasiswa Pemerintah Jepang untuk mendukung mahasiswa internasional yang mengikuti program pertukaran pelajar jangka pendek di Jepang.",
      en: "Japanese government scholarship to support international students participating in short-term exchange study programs in Japan."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Jepang",
        "Pertukaran Mahasiswa"
      ],
      en: [
        "Government",
        "Overseas",
        "Japan",
        "Student Exchange"
      ]
    }
  },
  {
    id: "vu-amsterdam-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa VUFP (Vrije Universiteit Amsterdam, Belanda)",
      en: "VU Amsterdam Fellowship Programme (VUFP) (Netherlands)"
    },
    provider: {
      id: "Vrije Universiteit Amsterdam",
      en: "Vrije Universiteit Amsterdam"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya kuliah tahunan senilai EUR 5.000, EUR 10.000, atau EUR 15.000"
      ],
      en: [
        "Tuition fee reduction of EUR 5,000, EUR 10,000, or EUR 15,000 per year"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Uni Eropa / EEA (termasuk mahasiswa Indonesia)",
        "Telah mendaftar program Magister penuh waktu di VU Amsterdam",
        "Memiliki rekam prestasi akademik yang sangat unggul (setara IPK 3.70+)",
        "Menunjukkan komitmen kepemimpinan dan esai motivasi yang kuat"
      ],
      en: [
        "Non-EU / EEA citizen (including Indonesian students)",
        "Applied for admission to a full-time Master's program at VU Amsterdam",
        "Outstanding academic excellence (GPA equivalent to 3.70+)",
        "Demonstrate leadership commitment and a strong motivation essay"
      ]
    },
    status: 'closed',
    deadline: "2026-02-01",
    applicationUrl: "https://vu.nl/en/education/master/scholarships-fellowships/vufp-scholarship",
    description: {
      id: "Beasiswa bergengsi VU Amsterdam untuk menarik mahasiswa internasional berprestasi akademik tinggi menempuh program Magister.",
      en: "A prestigious scholarship by VU Amsterdam targeting high-achieving international students to pursue Master's programs."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belanda",
        "Magister"
      ],
      en: [
        "University",
        "Overseas",
        "Netherlands",
        "Master"
      ]
    }
  },
  {
    id: "ernst-mach-grant",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Ernst Mach Grant Pemerintah Austria",
      en: "Austrian Government Ernst Mach Grant"
    },
    provider: {
      id: "Badan Kerja Sama Internasional Austria untuk Pendidikan dan Penelitian (OeAD)",
      en: "Austria's Agency for Education and Internationalisation (OeAD)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Tunjangan biaya hidup bulanan senilai EUR 1.250",
        "Subsidi biaya perjalanan tiket pesawat hingga EUR 1.000",
        "Pembebasan biaya kuliah di universitas Austria",
        "Asuransi kesehatan dan bantuan penyediaan akomodasi"
      ],
      en: [
        "Monthly living allowance of EUR 1,250",
        "Travel subsidy grant of up to EUR 1,000",
        "Waiver of tuition fees at the host Austrian university",
        "Health insurance coverage and housing accommodation assistance"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa pascasarjana (S2/S3) aktif di luar Austria",
        "Bukan warga negara Austria dan berusia maksimal 35 tahun",
        "Mendapatkan persetujuan riset dari profesor di universitas Austria",
        "Kemampuan bahasa akademis (Inggris/Jerman) sesuai kebutuhan riset"
      ],
      en: [
        "Active postgraduate (Master/PhD) student outside Austria",
        "Non-Austrian citizen and maximum age of 35 years",
        "Have a confirmed supervisor/host professor at an Austrian university",
        "Proficiency in the academic language (English/German) required for research"
      ]
    },
    status: 'soon',
    deadline: "2026-09-01",
    applicationUrl: "https://grants.at/en/",
    description: {
      id: "Beasiswa riset dari Pemerintah Austria untuk membiayai studi jangka pendek (riset tesis/disertasi) di universitas-universitas Austria.",
      en: "Austrian government research scholarship supporting short-term study visits (thesis or dissertation research) at Austrian universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Austria",
        "Riset"
      ],
      en: [
        "Government",
        "Overseas",
        "Austria",
        "Research"
      ]
    }
  },
  {
    id: "utrecht-excellence-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Utrecht Excellence Scholarship (Belanda)",
      en: "Utrecht Excellence Scholarship (Netherlands)"
    },
    provider: {
      id: "Utrecht University, Belanda",
      en: "Utrecht University, Netherlands"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh (full tuition fees) selama masa program Master",
        "Tunjangan biaya hidup tahunan senilai EUR 11.000"
      ],
      en: [
        "Full tuition fee coverage for the duration of the Master's program",
        "Annual living expense allowance of EUR 11,000"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Uni Eropa/EEA dan bukan alumni pendidikan Belanda",
        "Diterima di salah satu program Master internasional terpilih di Utrecht University",
        "Berasal dari peringkat 10% teratas di angkatan kelulusan sebelumnya",
        "Kemampuan bahasa Inggris tinggi (IELTS minimal 7.0 / TOEFL iBT 100)"
      ],
      en: [
        "Non-EU / EEA citizen and did not graduate from a Dutch educational institution",
        "Admitted to one of the eligible international Master's programs at Utrecht University",
        "Belong to the top 10% of their graduating class",
        "High English language proficiency (minimum IELTS 7.0 or TOEFL iBT 100)"
      ]
    },
    status: 'closed',
    deadline: "2026-02-01",
    applicationUrl: "https://www.uu.nl/masters/en/general-information/international-students/financial-matters/scholarships/utrecht-excellence-scholarship",
    description: {
      id: "Beasiswa bergengsi dari Universitas Utrecht bagi mahasiswa asing non-Uni Eropa dengan bakat luar biasa untuk studi program Master.",
      en: "A highly selective and prestigious scholarship by Utrecht University for outstanding non-EU students to pursue Master's degrees."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belanda",
        "Beasiswa Penuh"
      ],
      en: [
        "University",
        "Overseas",
        "Netherlands",
        "Full Scholarship"
      ]
    }
  },
  {
    id: "beasiswa-jambi-tuntas",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Jambi Tuntas (Provinsi Jambi)",
      en: "Jambi Tuntas Scholarship (Jambi Province)"
    },
    provider: {
      id: "Pemerintah Provinsi Jambi",
      en: "Provincial Government of Jambi"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan stimulan tahunan untuk jenjang D3/S1/S2/S3",
        "Dukungan penulisan tugas akhir atau disertasi"
      ],
      en: [
        "Annual stimulant education funding assistance for D3/S1/S2/S3 levels",
        "Thesis or dissertation writing support"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia kelahiran atau berdomisili di Provinsi Jambi (KTP Jambi)",
        "Mahasiswa aktif di perguruan tinggi negeri atau swasta yang terakreditasi",
        "IPK minimal 3.00 (S1) atau 3.25 (S2/S3)",
        "Tidak sedang menerima bantuan biaya pendidikan dari sumber APBD/APBN lainnya"
      ],
      en: [
        "Indonesian citizen born or residing in Jambi Province (Jambi ID card required)",
        "Active student at an accredited public or private higher education institution",
        "Minimum GPA of 3.00 (Bachelor) or 3.25 (Master/Doctoral)",
        "Not currently receiving education funding from other regional or state budgets (APBD/APBN)"
      ]
    },
    status: 'open',
    deadline: "2026-10-15",
    applicationUrl: "https://jambiprov.go.id/",
    description: {
      id: "Beasiswa pendidikan dari Pemprov Jambi untuk meningkatkan kualitas SDM dan menunjang penyelesaian studi mahasiswa asli daerah Jambi.",
      en: "Education scholarship from the Jambi Provincial Government to enhance human resource quality and support study completion for native students of Jambi."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Jambi",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "Jambi",
        "Regional"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-sumut",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Mahasiswa Berprestasi Provinsi Sumatera Utara",
      en: "North Sumatra Provincial Government Outstanding Student Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Sumatera Utara",
      en: "Provincial Government of North Sumatra"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT / biaya kuliah per semester",
        "Tunjangan stimulan penelitian tugas akhir"
      ],
      en: [
        "Tuition fee (UKT) assistance per semester",
        "Thesis research stimulant allowance"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia asal Sumatera Utara (dibuktikan dengan KTP & KK Sumut)",
        "Mahasiswa aktif D3/D4/S1/S2/S3 di perguruan tinggi negeri atau swasta mitra",
        "IPK minimal 3.00 (jurusan eksakta) atau 3.30 (jurusan non-eksakta)",
        "Membuat surat pernyataan bebas narkoba dan berkelakuan baik"
      ],
      en: [
        "Indonesian citizen from North Sumatra (proven by North Sumatra ID & Family Card)",
        "Active student of Diploma, Bachelor, Master, or Doctoral degrees at partner universities",
        "Minimum GPA of 3.00 (science majors) or 3.30 (non-science majors)",
        "Submit a statement letter of drug-free status and good conduct"
      ]
    },
    status: 'soon',
    deadline: "2026-11-15",
    applicationUrl: "https://sumutprov.go.id/",
    description: {
      id: "Program beasiswa Pemerintah Provinsi Sumatera Utara untuk meringankan biaya kuliah mahasiswa berprestasi dan kurang mampu asal Sumut.",
      en: "North Sumatra Provincial Government scholarship program to ease tuition costs for outstanding and underprivileged students from the region."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sumatera Utara",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "North Sumatra",
        "Regional"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-sulsel",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Prestasi Pemerintah Provinsi Sulawesi Selatan",
      en: "South Sulawesi Provincial Government Academic Excellence Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Sulawesi Selatan",
      en: "Provincial Government of South Sulawesi"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT kuliah tahunan",
        "Pelatihan kompetensi digital dan kepemimpinan"
      ],
      en: [
        "Annual tuition fee (UKT) financial assistance",
        "Digital competence and leadership training"
      ]
    },
    requirements: {
      id: [
        "Memiliki KTP dan Kartu Keluarga wilayah Provinsi Sulawesi Selatan",
        "Mahasiswa aktif program Sarjana (S1) semester 3, 5, atau 7",
        "IPK minimal 3.50 berturut-turut pada jenjang perkuliahan",
        "Aktif berorganisasi dan tidak pernah terlibat kasus hukum"
      ],
      en: [
        "Possess ID and Family Card of South Sulawesi Province",
        "Active Bachelor (S1) student in 3rd, 5th, or 7th semesters",
        "Minimum GPA of 3.50 consecutively in their college records",
        "Active in student organizations and never involved in legal cases"
      ]
    },
    status: 'open',
    deadline: "2026-09-30",
    applicationUrl: "https://sulselprov.go.id/",
    description: {
      id: "Beasiswa prestasi dari Pemerintah Provinsi Sulawesi Selatan untuk memajukan kualitas akademisi muda berprestasi di Sulsel.",
      en: "Academic excellence scholarship by the South Sulawesi Provincial Government to advance the quality of high-achieving youth in the province."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sulawesi Selatan",
        "Prestasi"
      ],
      en: [
        "Government",
        "Domestic",
        "South Sulawesi",
        "Excellence"
      ]
    }
  },
  {
    id: "beasiswa-baitul-mal-aceh",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Senif Muallaf & Dhuafa Baitul Mal Aceh",
      en: "Baitul Mal Aceh Muallaf & Dhuafa Scholarship"
    },
    provider: {
      id: "Baitul Mal Provinsi Aceh",
      en: "Baitul Mal of Aceh Province"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang saku bulanan biaya hidup",
        "Bantuan dana UKT kuliah 100% penuh hingga lulus (maksimal 8 semester)",
        "Program pembinaan keislaman dan kajian kontemporer"
      ],
      en: [
        "Monthly living allowance",
        "100% full tuition fee (UKT) assistance until graduation (max 8 semesters)",
        "Islamic development program and contemporary studies"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia asal Aceh dibuktikan dengan KK/KTP Aceh",
        "Berasal dari keluarga kurang mampu (dhuafa) atau berstatus muallaf",
        "Mahasiswa aktif di perguruan tinggi negeri di wilayah Provinsi Aceh",
        "IPK minimal 2.75 dan berkelakuan baik"
      ],
      en: [
        "Indonesian citizen from Aceh proven by Aceh Family Card/ID",
        "From an underprivileged family (dhuafa) or have muallaf status",
        "Active student at a public university located in Aceh Province",
        "Minimum GPA of 2.75 and possess good conduct"
      ]
    },
    status: 'open',
    deadline: "2026-08-25",
    applicationUrl: "https://baitulmal.acehprov.go.id/",
    description: {
      id: "Beasiswa penuh dari Baitul Mal Aceh menggunakan dana zakat untuk menjamin akses kuliah mahasiswa dhuafa dan muallaf di Aceh.",
      en: "A fully funded scholarship by Baitul Mal Aceh funded by zakat to ensure higher education access for dhuafa and muallaf students in Aceh."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Aceh",
        "Zakat"
      ],
      en: [
        "Government",
        "Domestic",
        "Aceh",
        "Zakat"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-bali",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Mahasiswa Berprestasi Pemerintah Provinsi Bali",
      en: "Bali Provincial Government Outstanding Student Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Bali",
      en: "Provincial Government of Bali"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana stimulan biaya pendidikan tahunan",
        "Pelatihan kewirausahaan dan pelestarian budaya Bali"
      ],
      en: [
        "Annual stimulant education funding assistance",
        "Entrepreneurship training and Bali cultural preservation programs"
      ]
    },
    requirements: {
      id: [
        "Warga Provinsi Bali dibuktikan dengan KTP & Kartu Keluarga Bali",
        "Mahasiswa aktif minimal semester 3 di perguruan tinggi negeri/swasta di Bali",
        "IPK minimal 3.25 untuk sains/teknologi atau 3.40 untuk ilmu sosial/budaya",
        "Aktif melestarikan seni, budaya, atau kearifan lokal Bali"
      ],
      en: [
        "Resident of Bali Province proven by Bali ID & Family Card",
        "Active student in at least 3rd semester at public/private colleges in Bali",
        "Minimum GPA of 3.25 for science/technology or 3.40 for social/humanities",
        "Actively participate in preserving Balinese arts, culture, or local wisdom"
      ]
    },
    status: 'soon',
    deadline: "2026-10-10",
    applicationUrl: "https://baliprov.go.id/",
    description: {
      id: "Program apresiasi dari Pemprov Bali untuk mendukung biaya perkuliahan mahasiswa berprestasi yang peduli pelestarian budaya Bali.",
      en: "Appreciation program by the Bali Provincial Government to support tuition fees of outstanding students dedicated to preserving Balinese culture."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Bali",
        "Budaya"
      ],
      en: [
        "Government",
        "Domestic",
        "Bali",
        "Culture"
      ]
    }
  },
  {
    id: "mccall-macbain-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa McCall MacBain (Universitas McGill, Kanada)",
      en: "McCall MacBain Scholarships (McGill University, Canada)"
    },
    provider: {
      id: "McCall MacBain Foundation & McGill University",
      en: "McCall MacBain Foundation & McGill University"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh 100% dan biaya pendaftaran di Universitas McGill",
        "Tunjangan biaya hidup bulanan CAD 2.000 selama studi",
        "Program mentorship kepemimpinan global yang intensif",
        "Tunjangan relokasi kedatangan sekali bayar"
      ],
      en: [
        "100% full tuition and admission fees coverage at McGill University",
        "Monthly living stipend of CAD 2,000 during the study program",
        "Intensive global leadership mentoring program",
        "One-off relocation grant to Montreal"
      ]
    },
    requirements: {
      id: [
        "Terbuka untuk pelamar internasional (termasuk Indonesia) yang mendaftar S2/S3 di McGill",
        "Menunjukkan rekam kepemimpinan luar biasa, kepedulian sosial, dan karakter yang kuat",
        "Memegang gelar sarjana dengan nilai akademik tingkat tinggi",
        "Kemampuan bahasa Inggris tingkat tinggi (IELTS minimal 7.0 atau TOEFL iBT 100)"
      ],
      en: [
        "Open to international applicants applying for eligible Master's or professional degrees at McGill",
        "Demonstrate exceptional leadership, community engagement, and strong character",
        "Hold a Bachelor's degree with high academic standards",
        "High English proficiency (minimum IELTS 7.0 or TOEFL iBT 100)"
      ]
    },
    status: 'open',
    deadline: "2026-08-21",
    applicationUrl: "https://mccallmacbainscholars.org/",
    description: {
      id: "Beasiswa penuh kepemimpinan pascasarjana di Universitas McGill, Kanada, untuk mencetak pemimpin masa depan yang berkarakter.",
      en: "A full graduate leadership scholarship at McGill University, Canada, designed to support outstanding scholars who show character and leadership."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Kanada",
        "Kepemimpinan"
      ],
      en: [
        "University",
        "Overseas",
        "Canada",
        "Leadership"
      ]
    }
  },
  {
    id: "tubitak-graduate-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Pascasarjana TÜBITAK (Turki)",
      en: "TÜBITAK Graduate Scholarship (Turkey)"
    },
    provider: {
      id: "Lembaga Riset Ilmiah dan Teknologi Turki (TÜBİTAK)",
      en: "Scientific and Technological Research Council of Turkey (TÜBİTAK)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh dibebaskan di universitas mitra Turki",
        "Tunjangan biaya hidup bulanan untuk S2 dan S3",
        "Dana hibah riset dan biaya publikasi jurnal ilmiah",
        "Asuransi kesehatan dan tiket pesawat pulang-pergi"
      ],
      en: [
        "Full tuition fee waiver at partner Turkish universities",
        "Monthly living allowance for Master's and PhD research",
        "Research project grant and scientific publication support",
        "Health insurance coverage and round-trip airfare"
      ]
    },
    requirements: {
      id: [
        "Warga negara asing berprestasi yang mendaftar S2/S3 riset di Turki",
        "Batas usia: Maksimal 30 tahun (S2) dan 35 tahun (S3)",
        "IPK minimal setara 3.00 dari skala 4.00",
        "Mendapatkan persetujuan riset dari profesor di Turki"
      ],
      en: [
        "International students applying for research-oriented Master or PhD in Turkey",
        "Age limits: Maximum 30 years for Master and 35 years for PhD",
        "Minimum GPA equivalent to 3.00 on a 4.00 scale",
        "Hold a confirmed acceptance from an academic supervisor in Turkey"
      ]
    },
    status: 'open',
    deadline: "2026-11-10",
    applicationUrl: "https://www.tubitak.gov.tr/",
    description: {
      id: "Beasiswa riset pascasarjana bergengsi dari Dewan Riset Turki untuk mendukung ilmuwan muda internasional berbakat melakukan penelitian di Turki.",
      en: "A prestigious research scholarship by the Turkish Research Council supporting talented international scientists in engineering and natural sciences."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Turki",
        "Riset"
      ],
      en: [
        "Government",
        "Overseas",
        "Turkey",
        "Research"
      ]
    }
  },
  {
    id: "weidenfeld-hoffmann-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kepemimpinan Weidenfeld-Hoffmann (Universitas Oxford, Inggris)",
      en: "Weidenfeld-Hoffmann Scholarships and Leadership Programme (University of Oxford, UK)"
    },
    provider: {
      id: "The Weidenfeld-Hoffmann Trust & Universitas Oxford",
      en: "The Weidenfeld-Hoffmann Trust & University of Oxford"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh 100% di Universitas Oxford",
        "Tunjangan biaya hidup tahunan minimal £19.000",
        "Akses eksklusif program pengembangan kepemimpinan dan jejaring karir"
      ],
      en: [
        "100% full tuition fees coverage at the University of Oxford",
        "Annual living costs grant of at least £19,000",
        "Exclusive access to leadership development modules and networking events"
      ]
    },
    requirements: {
      id: [
        "Berasal dari negara berkembang (termasuk Indonesia) yang mendaftar S2 tertentu di Oxford",
        "Berkomitmen kembali ke negara asal setelah lulus untuk memberikan kontribusi nyata",
        "Memiliki prestasi akademik yang luar biasa dan potensi kepemimpinan tinggi"
      ],
      en: [
        "Citizen of an eligible developing country (inc. Indonesia) applying for Master's at Oxford",
        "Committed to returning to home country to make a significant impact upon graduation",
        "Outstanding academic excellence and proven leadership potential"
      ]
    },
    status: 'soon',
    deadline: "2026-12-15",
    applicationUrl: "https://www.weidenfeldhoffmann.org/",
    description: {
      id: "Beasiswa pascasarjana penuh Universitas Oxford untuk membentuk pemimpin masa depan dari negara berkembang melalui pelatihan kepemimpinan intensif.",
      en: "A fully funded Master's scholarship at Oxford University combined with a leadership program for young leaders from emerging economies."
    },
    tags: {
      id: [
        "Yayasan",
        "Luar Negeri",
        "Inggris",
        "Kepemimpinan"
      ],
      en: [
        "Foundation",
        "Overseas",
        "UK",
        "Leadership"
      ]
    }
  },
  {
    id: "la-trobe-research-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Pascasarjana Universitas La Trobe (Australia)",
      en: "La Trobe University Research Scholarships (Australia)"
    },
    provider: {
      id: "La Trobe University, Australia",
      en: "La Trobe University, Australia"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya kuliah penuh (tuition fee offset) selama masa program riset",
        "Tunjangan biaya hidup tahunan senilai AUD 34.000",
        "Asuransi kesehatan mahasiswa asing (OSHC) Single"
      ],
      en: [
        "Full tuition fee offset for the standard duration of the research degree",
        "Annual living stipend of AUD 34,000",
        "Overseas Student Health Cover (OSHC) Single membership"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional baru yang mendaftar program riset S2 atau S3 di La Trobe",
        "Memiliki gelar Honours Kelas Satu (First Class) atau setara IPK 3.60+",
        "Memiliki proposal riset terakreditasi dan didukung supervisor akademik"
      ],
      en: [
        "New international student enrolled in a Master by Research or PhD at La Trobe",
        "Hold a First-Class Honours degree or equivalent GPA of 3.60+",
        "Submit a strong research proposal supported by a prospective advisor"
      ]
    },
    status: 'open',
    deadline: "2026-09-30",
    applicationUrl: "https://www.latrobe.edu.au/research/scholarships",
    description: {
      id: "Beasiswa riset penuh dari Universitas La Trobe untuk mendukung kandidat internasional berprestasi tinggi melakukan riset inovatif di Australia.",
      en: "Full research scholarship offered by La Trobe University to support top international candidates conducting innovative research in Australia."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Research"
      ]
    }
  },
  {
    id: "geneva-excellence-master-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Excellence Master Universitas Jenewa (Swiss)",
      en: "University of Geneva Excellence Master Fellowships (Switzerland)"
    },
    provider: {
      id: "University of Geneva, Swiss",
      en: "University of Geneva, Switzerland"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Tunjangan hidup tahunan senilai CHF 10.000 hingga CHF 15.000",
        "Bimbingan akademis intensif dan integrasi ke dalam proyek riset laboratorium"
      ],
      en: [
        "Annual living allowance of CHF 10,000 to CHF 15,000",
        "Intensive academic mentorship and integration into laboratory research projects"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional luar biasa mendaftar program Master di Fakultas Sains Jenewa",
        "Berada di peringkat 10% teratas pada program Sarjana sebelumnya",
        "Mengirimkan esai motivasi riset dan dua surat rekomendasi dari profesor",
        "Kemampuan bahasa Inggris tinggi (IELTS minimal 6.5 / TOEFL iBT 90)"
      ],
      en: [
        "Outstanding international students applying to Master's at the Faculty of Science, Geneva",
        "Belong to the top 10% of their graduating Bachelor's class",
        "Submit research motivation essay and two academic recommendation letters",
        "High English proficiency (minimum IELTS 6.5 or TOEFL iBT 90)"
      ]
    },
    status: 'closed',
    deadline: "2027-03-15",
    applicationUrl: "https://www.unige.ch/sciences/en/teachings/excellencemaster/",
    description: {
      id: "Beasiswa prestasi dari Universitas Jenewa untuk mendanai mahasiswa internasional unggulan di bidang sains terapan, fisika, dan kimia.",
      en: "Excellence master fellowships by the University of Geneva to support outstanding international students in sciences, physics, and chemistry."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swiss",
        "Sains"
      ],
      en: [
        "University",
        "Overseas",
        "Switzerland",
        "Science"
      ]
    }
  },
  {
    id: "beasiswa-bca-smart",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa BCA Smart (Bank Central Asia)",
      en: "BCA Smart Scholarship (Bank Central Asia)"
    },
    provider: {
      id: "PT Bank Central Asia Tbk",
      en: "PT Bank Central Asia Tbk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan uang kuliah tunggal (UKT) penuh hingga lulus",
        "Tunjangan uang saku bulanan",
        "Program pengembangan soft skills dan keterampilan finansial",
        "Kesempatan magang di kantor cabang atau pusat BCA"
      ],
      en: [
        "Full tuition fee (UKT) coverage until graduation",
        "Monthly living stipend allowance",
        "Soft skills and financial literacy development programs",
        "Internship opportunities at BCA branches or headquarters"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif program Sarjana (S1) semester 1 atau 3 di universitas mitra",
        "Berasal dari keluarga dengan latar belakang ekonomi kurang mampu",
        "IPK minimal 3.00 pada skala 4.00",
        "Lolos seleksi berkas, tes kemampuan dasar, dan wawancara"
      ],
      en: [
        "Active Bachelor's (S1) student in 1st or 3rd semester at partner universities",
        "From an economically disadvantaged family background",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Pass application screening, basic ability test, and interview rounds"
      ]
    },
    status: 'open',
    deadline: "2026-10-30",
    applicationUrl: "https://www.karir.bca.co.id/beasiswa",
    description: {
      id: "Program beasiswa CSR Bank Central Asia untuk membantu pembiayaan kuliah mahasiswa berprestasi dari keluarga pra-sejahtera.",
      en: "BCA's CSR scholarship program designed to finance the higher education of outstanding students from underprivileged families."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Perbankan",
        "Bantuan Kuliah"
      ],
      en: [
        "Private",
        "Domestic",
        "Banking",
        "Tuition Support"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-bojonegoro",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Satu Desa Dua Sarjana Kabupaten Bojonegoro",
      en: "Bojonegoro Regency One Village Two Graduates Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Bojonegoro",
      en: "Regency Government of Bojonegoro"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan biaya pendidikan (UKT) penuh hingga maksimal 8 semester"
      ],
      en: [
        "Full tuition fee (UKT) coverage for up to 8 semesters"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia berdomisili asli di Kabupaten Bojonegoro",
        "Memiliki KTP dan Kartu Keluarga Bojonegoro",
        "Mahasiswa aktif program Sarjana (S1) di PTN/PTS mitra",
        "Terdaftar sebagai penduduk desa setempat yang mengajukan permohonan",
        "IPK minimal 3.00 untuk mahasiswa eksakta atau 3.25 untuk sosial"
      ],
      en: [
        "Indonesian citizen with native residency in Bojonegoro Regency",
        "Possess Bojonegoro ID and Family Card",
        "Active Bachelor's (S1) student at partner public or private universities",
        "Registered as a local villager applying for the designated slot",
        "Minimum GPA of 3.00 for science majors or 3.25 for social sciences"
      ]
    },
    status: 'open',
    deadline: "2026-09-30",
    applicationUrl: "https://bojonegorokab.go.id/",
    description: {
      id: "Program beasiswa Pemerintah Kabupaten Bojonegoro untuk mencetak sarjana di setiap desa guna mempercepat pembangunan daerah.",
      en: "Bojonegoro Regency Government scholarship program aimed at producing graduates in every village to accelerate regional development."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Bojonegoro",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "Bojonegoro",
        "Regional"
      ]
    }
  },
  {
    id: "beasiswa-pbsb-kemenag",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Program Beasiswa Santri Berprestasi (PBSB) Kementerian Agama",
      en: "PBSB Outstanding Santri Scholarship (Ministry of Religious Affairs)"
    },
    provider: {
      id: "Direktorat Pendidikan Diniyah dan Pondok Pesantren Kemenag RI",
      en: "Directorate of Islamic Boarding School Education, Ministry of Religious Affairs"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya pendidikan kuliah (UKT) 100% penuh",
        "Tunjangan biaya hidup bulanan",
        "Bantuan biaya asrama dan biaya buku",
        "Program pembinaan karakter santri di universitas mitra"
      ],
      en: [
        "100% full tuition fee (UKT) coverage",
        "Monthly living allowance stipend",
        "Dormitory and book allowances support",
        "Santri character development program at partner universities"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia berasal dari pondok pesantren terdaftar (PBSB Kemenag)",
        "Santri mukim yang telah menyelesaikan jenjang MA/PDF/SPM",
        "Rekomendasi tertulis dari Pimpinan Pondok Pesantren",
        "Lolos ujian seleksi berbasis komputer dan tes wawancara Kemenag"
      ],
      en: [
        "Indonesian citizen originating from registered Islamic boarding schools (Pesantren)",
        "Santri resident who completed senior high school equivalent (MA/PDF/SPM)",
        "Written recommendation from the head of the Islamic boarding school",
        "Pass computer-based entrance test and interview conducted by MoRA"
      ]
    },
    status: 'soon',
    deadline: "2027-05-15",
    applicationUrl: "https://ditponton.kemenag.go.id/pbsb/",
    description: {
      id: "Beasiswa penuh dari Kementerian Agama bagi santri pondok pesantren berprestasi untuk menempuh kuliah di universitas unggulan Indonesia.",
      en: "A fully funded scholarship by the Ministry of Religious Affairs for outstanding santri to pursue degrees at top Indonesian universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kemenag",
        "Pesantren"
      ],
      en: [
        "Government",
        "Domestic",
        "MoRA",
        "Boarding School"
      ]
    }
  },
  {
    id: "beasiswa-ruangpeduli-ruangguru",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa RuangPeduli Ruangguru",
      en: "RuangPeduli Ruangguru Scholarship"
    },
    provider: {
      id: "Yayasan Ruang Pengabdi Indonesia (RuangPeduli) & Ruangguru",
      en: "Ruang Pengabdi Indonesia Foundation (RuangPeduli) & Ruangguru"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya SPP/UKT kuliah per semester",
        "Akses gratis platform belajar Ruangguru dan pendampingan mentor",
        "Pelatihan keterampilan digital dan persiapan karir"
      ],
      en: [
        "Tuition fee (UKT) financial assistance per semester",
        "Free access to Ruangguru learning platform and mentoring support",
        "Digital skills training and career preparation programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif program Diploma atau Sarjana semester 1 hingga 5",
        "Berasal dari keluarga dengan keterbatasan finansial",
        "IPK minimal 3.00 pada skala 4.00",
        "Membuat esai motivasi kontribusi sosial"
      ],
      en: [
        "Active Diploma or Bachelor's student in 1st to 5th semesters",
        "From a family with financial limitations",
        "Minimum GPA of 3.00 on a 4.00 scale",
        "Submit a motivation essay on social contribution"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://www.ruangpeduli.org/",
    description: {
      id: "Beasiswa dari Ruangguru melalui program RuangPeduli untuk menunjang biaya kuliah dan pengembangan kompetensi digital mahasiswa Indonesia.",
      en: "Scholarship program by Ruangguru through RuangPeduli to support tuition costs and digital competency development for Indonesian students."
    },
    tags: {
      id: [
        "Swasta",
        "Dalam Negeri",
        "Pendidikan",
        "Teknologi"
      ],
      en: [
        "Private",
        "Domestic",
        "Education",
        "Technology"
      ]
    }
  },
  {
    id: "beasiswa-kukar-idaman",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Kukar Idaman (Kabupaten Kutai Kartanegara)",
      en: "Kukar Idaman Scholarship (Kutai Kartanegara Regency)"
    },
    provider: {
      id: "Pemerintah Kabupaten Kutai Kartanegara",
      en: "Regency Government of Kutai Kartanegara"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana stimulan biaya pendidikan tahunan",
        "Bantuan dana penyelesaian tugas akhir atau penelitian"
      ],
      en: [
        "Annual stimulant education funding assistance",
        "Thesis writing or research completion grant"
      ]
    },
    requirements: {
      id: [
        "Warga Negara Indonesia berdomisili di Kabupaten Kutai Kartanegara",
        "Memiliki KTP dan Kartu Keluarga Kutai Kartanegara",
        "Mahasiswa aktif D3/D4/S1/S2/S3",
        "IPK minimal 3.00 (jurusan eksakta) atau 3.20 (jurusan sosial)"
      ],
      en: [
        "Indonesian citizen residing in Kutai Kartanegara Regency",
        "Possess Kutai Kartanegara ID and Family Card",
        "Active student of Diploma, Bachelor, Master, or Doctoral degrees",
        "Minimum GPA of 3.00 (science majors) or 3.20 (social science majors)"
      ]
    },
    status: 'open',
    deadline: "2026-10-15",
    applicationUrl: "https://kukarkab.go.id/",
    description: {
      id: "Program beasiswa Pemerintah Kabupaten Kutai Kartanegara bagi mahasiswa berprestasi dan kurang mampu asal Kukar.",
      en: "Kutai Kartanegara Regency Government scholarship program for outstanding and underprivileged students from the region."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kutai Kartanegara",
        "Daerah"
      ],
      en: [
        "Government",
        "Domestic",
        "Kutai Kartanegara",
        "Regional"
      ]
    }
  },
  {
    id: "tokyo-presidents-fellowship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa President's Fellowship Universitas Tokyo (Jepang)",
      en: "University of Tokyo President's Fellowship (Japan)"
    },
    provider: {
      id: "University of Tokyo, Jepang",
      en: "University of Tokyo, Japan"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Uang kuliah penuh dibebaskan (100% tuition waiver)",
        "Tunjangan biaya hidup bulanan senilai JPY 200.000 selama studi doktoral",
        "Akses fasilitas asrama dan laboratorium riset utama"
      ],
      en: [
        "100% full tuition fee waiver",
        "Monthly living stipend of JPY 200,000 during doctoral studies",
        "Access to university dormitories and core research laboratories"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional baru yang mendaftar program Ph.D. di UTokyo",
        "Memiliki prestasi akademik yang luar biasa dari jenjang studi sebelumnya",
        "Direkomendasikan secara resmi oleh dekan fakultas atau pembimbing riset",
        "Memiliki proposal riset doktoral yang solid dan berdaya dampak tinggi"
      ],
      en: [
        "New international student applying for a Ph.D. program at UTokyo",
        "Outstanding academic records from previous tertiary qualifications",
        "Officially recommended by the dean of the faculty or research supervisor",
        "Submit a solid and high-impact doctoral research proposal"
      ]
    },
    status: 'soon',
    deadline: "2026-11-15",
    applicationUrl: "https://www.u-tokyo.ac.jp/en/prospective-students/fellowship.html",
    description: {
      id: "Beasiswa riset doktoral penuh paling bergengsi dari Universitas Tokyo untuk menyokong ilmuwan muda internasional berbakat dunia.",
      en: "UTokyo's highly prestigious fully funded doctoral fellowship supporting top-tier international graduate researchers."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Jepang",
        "Doktoral"
      ],
      en: [
        "University",
        "Overseas",
        "Japan",
        "Doctoral"
      ]
    }
  },
  {
    id: "mahidol-university-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Universitas Mahidol untuk Mahasiswa Internasional (Thailand)",
      en: "Mahidol University Scholarships for International Students (Thailand)"
    },
    provider: {
      id: "Mahidol University, Thailand",
      en: "Mahidol University, Thailand"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh (tuition fee waiver) maksimal 4 semester S2 atau 6 semester S3",
        "Tunjangan biaya hidup bulanan minimal THB 10.000",
        "Asuransi kesehatan kelompok mahasiswa asing"
      ],
      en: [
        "Full tuition fee waiver for up to 4 semesters (Master) or 6 semesters (PhD)",
        "Monthly living allowance of minimum THB 10,000",
        "Group international student health insurance"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Thailand dengan latar belakang akademik yang memuaskan",
        "Diterima di program pascasarjana penuh waktu di Universitas Mahidol",
        "Kemampuan bahasa Inggris tinggi (IELTS minimal 6.0 / TOEFL iBT 80)",
        "Menunjukkan ketertarikan kuat dalam bidang kesehatan, sains, atau studi pembangunan"
      ],
      en: [
        "Non-Thai citizen with solid academic background records",
        "Admitted to a full-time graduate degree program at Mahidol University",
        "High English proficiency (minimum IELTS 6.0 or TOEFL iBT 80)",
        "Demonstrate strong interest in health, science, or development studies"
      ]
    },
    status: 'closed',
    deadline: "2026-05-30",
    applicationUrl: "https://mahidol.ac.th/en/",
    description: {
      id: "Beasiswa pascasarjana dari Universitas Mahidol bagi mahasiswa internasional berprestasi di bidang kedokteran, sains, dan ilmu sosial.",
      en: "Graduate scholarship by Mahidol University for outstanding international students in medicine, science, and social sciences."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Thailand",
        "Sains"
      ],
      en: [
        "University",
        "Overseas",
        "Thailand",
        "Science"
      ]
    }
  },
  {
    id: "lund-university-global-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Global Universitas Lund (Swedia)",
      en: "Lund University Global Scholarship (Sweden)"
    },
    provider: {
      id: "Lund University, Swedia",
      en: "Lund University, Sweden"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah sebesar 25%, 50%, 75%, atau 100%"
      ],
      en: [
        "Tuition fee reduction of 25%, 50%, 75%, or 100% of the total program cost"
      ]
    },
    requirements: {
      id: [
        "WN negara di luar Uni Eropa/EEA yang diwajibkan membayar biaya kuliah internasional",
        "Telah mendaftar program sarjana atau master di Universitas Lund",
        "Memiliki rekam prestasi akademik yang sangat unggul di sekolah/universitas sebelumnya",
        "Memilih Universitas Lund sebagai pilihan pertama saat mendaftar di Swedia"
      ],
      en: [
        "Citizen of a country outside the EU/EEA required to pay tuition fees",
        "Applied for Bachelor's or Master's studies at Lund University",
        "Excellent academic results from previous high school or university studies",
        "Choose Lund University as first priority choice in Swedish admissions"
      ]
    },
    status: 'closed',
    deadline: "2026-02-01",
    applicationUrl: "https://www.lunduniversity.lu.se/admissions/bachelors-and-masters-studies/scholarships-and-funding/lund-university-global-scholarship",
    description: {
      id: "Beasiswa prestasi akademis dari Universitas Lund untuk menarik mahasiswa internasional berbakat di luar Uni Eropa.",
      en: "Academic excellence scholarship by Lund University designed to attract top-tier non-EU/EEA international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swedia",
        "Bantuan Kuliah"
      ],
      en: [
        "University",
        "Overseas",
        "Sweden",
        "Tuition Support"
      ]
    }
  },
  {
    id: "kuwait-government-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Kuwait untuk Mahasiswa Asing",
      en: "Kuwait Government Scholarship for International Students"
    },
    provider: {
      id: "Kementerian Pendidikan Tinggi Negara Kuwait",
      en: "Ministry of Higher Education, State of Kuwait"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Biaya pendidikan kuliah dibebaskan penuh",
        "Uang saku biaya hidup bulanan",
        "Akomodasi asrama gratis dan makanan sehari-hari",
        "Tiket pesawat ekonomi pulang-pergi setiap tahun akademik"
      ],
      en: [
        "Full tuition and registration fees waiver",
        "Monthly living allowance stipend",
        "Free dormitory housing and daily meals provided",
        "Round-trip economy-class airfare ticket per academic year"
      ]
    },
    requirements: {
      id: [
        "Warga Negara non-Kuwait lulusan SMA/sederajat dengan nilai minimal 80%",
        "Usia minimal 18 tahun dan maksimal 23 tahun pada saat mendaftar",
        "Kemampuan bahasa Arab yang memadai (untuk program studi tertentu)",
        "Menyerahkan dokumen kesehatan bebas penyakit menular"
      ],
      en: [
        "Non-Kuwaiti citizen with a high school certificate average of at least 80%",
        "Aged between 18 and 23 years old at the time of application",
        "Arabic language proficiency (required for specific humanities courses)",
        "Submit a medical certificate proving free of infectious diseases"
      ]
    },
    status: 'soon',
    deadline: "2026-07-15",
    applicationUrl: "https://mohe.edu.kw/",
    description: {
      id: "Beasiswa penuh dari Pemerintah Kuwait bagi mahasiswa internasional untuk menempuh program sarjana di Universitas Kuwait.",
      en: "A fully funded scholarship by the Kuwaiti government for international students to pursue bachelor's studies at Kuwait University."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Kuwait",
        "Beasiswa Penuh"
      ],
      en: [
        "Government",
        "Overseas",
        "Kuwait",
        "Full Scholarship"
      ]
    }
  },
  {
    id: "university-of-twente-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa UTS Universitas Twente (Belanda)",
      en: "University of Twente Scholarship (UTS) (Netherlands)"
    },
    provider: {
      id: "University of Twente, Belanda",
      en: "University of Twente, Netherlands"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan pendanaan studi senilai EUR 3.000 hingga EUR 22.000 per tahun",
        "Kesempatan menjadi duta mahasiswa internasional Universitas Twente"
      ],
      en: [
        "Study financial support grant of EUR 3,000 to EUR 22,000 per year",
        "Opportunity to join the University of Twente student ambassador program"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Uni Eropa/EEA yang mendaftar Master di Twente",
        "Telah mendapatkan surat penerimaan akademik (LoA) bersyarat atau tidak bersyarat",
        "IPK teratas di kelas kelulusan sebelumnya (setara rata-rata nilai 80%+$)",
        "Memenuhi syarat kemampuan bahasa Inggris (IELTS minimal 6.5 / TOEFL iBT 90)"
      ],
      en: [
        "Non-EU / EEA citizen applying for eligible Master's courses at Twente",
        "Hold a conditional or unconditional letter of admission (LoA)",
        "Top student in their graduating class (equivalent to an average of 80%+)",
        "Meet English language requirements (minimum IELTS 6.5 or TOEFL iBT 90)"
      ]
    },
    status: 'closed',
    deadline: "2026-05-01",
    applicationUrl: "https://www.utwente.nl/en/education/scholarship-finder/university-of-twente-scholarship/",
    description: {
      id: "Beasiswa prestasi dari Universitas Twente untuk membantu pendanaan studi mahasiswa internasional berbakat program Master.",
      en: "Academic excellence scholarship by the University of Twente to support talented international Master's degree students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belanda",
        "Teknologi"
      ],
      en: [
        "University",
        "Overseas",
        "Netherlands",
        "Technology"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-lampung",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Provinsi Lampung (Beasiswa Lampung Unggul)",
      en: "Lampung Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Lampung",
      en: "Provincial Government of Lampung"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya pendidikan UKT/SPP",
        "Bantuan biaya hidup semesteran",
        "Dana penunjang tugas akhir"
      ],
      en: [
        "Tuition fee assistance",
        "Semester living allowance",
        "Thesis support allowance"
      ]
    },
    requirements: {
      id: [
        "Warga asli Provinsi Lampung dibuktikan dengan KTP/KK Lampung",
        "Mahasiswa aktif minimal semester 3 di PTN/PTS mitra",
        "IPK minimal 3.00 untuk rumpun sosial/humaniora atau 2.85 untuk saintek"
      ],
      en: [
        "Native resident of Lampung Province proven by ID/Family Card",
        "Active student (min. 3rd semester) at partner universities",
        "Minimum GPA of 3.00 for social sciences or 2.85 for science & technology"
      ]
    },
    status: 'soon',
    deadline: "2026-10-15",
    applicationUrl: "https://lampungprov.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan dari Pemerintah Provinsi Lampung untuk mendorong peningkatan kualitas SDM lokal di jenjang perguruan tinggi.",
      en: "Lampung Provincial Government's educational financial support program intended to enhance the quality of local human resources in higher education."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Lampung",
        "Bantuan"
      ],
      en: [
        "Government",
        "Domestic",
        "Lampung",
        "Assistance"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-kalbar",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Provinsi Kalimantan Barat (Beasiswa Kalbar Cerdas)",
      en: "West Kalimantan Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Kalimantan Barat",
      en: "Provincial Government of West Kalimantan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya SPP/UKT penuh hingga lulus",
        "Bantuan biaya buku dan alat tulis",
        "Tunjangan biaya hidup tahunan"
      ],
      en: [
        "Full tuition fees coverage until graduation",
        "Book and stationery allowance",
        "Annual living stipend"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Provinsi Kalimantan Barat (KTP/KK Kalbar)",
        "Mahasiswa baru atau aktif semester berjalan di perguruan tinggi negeri",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik unggul"
      ],
      en: [
        "Native resident of West Kalimantan Province (Kalbar ID/Family Card)",
        "New or active student at state universities",
        "From underprivileged family background or possesses outstanding academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-07-20",
    applicationUrl: "https://kalbarprov.go.id/",
    description: {
      id: "Beasiswa penuh dari Pemprov Kalbar untuk membantu putra-putri daerah berprestasi dari keluarga kurang mampu menempuh studi sarjana.",
      en: "West Kalimantan Provincial Government's full scholarship helping high-achieving local youths from underprivileged families complete undergraduate studies."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kalimantan",
        "Bantuan"
      ],
      en: [
        "Government",
        "Domestic",
        "Kalimantan",
        "Assistance"
      ]
    }
  },
  {
    id: "beasiswa-tangerang-gemilang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Tangerang Gemilang (Pemerintah Kabupaten Tangerang)",
      en: "Tangerang Gemilang Scholarship (Tangerang Regency)"
    },
    provider: {
      id: "Pemerintah Kabupaten Tangerang",
      en: "Regency Government of Tangerang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah UKT per semester",
        "Bantuan dana riset skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy",
        "Thesis research grant assistance"
      ]
    },
    requirements: {
      id: [
        "Memiliki KTP dan Kartu Keluarga Kabupaten Tangerang",
        "Mahasiswa aktif S1 di perguruan tinggi negeri/swasta terakreditasi minimal B",
        "IPK minimal 3.25 untuk jalur prestasi akademik"
      ],
      en: [
        "Possess Tangerang Regency ID and Family Card",
        "Active S1 student at accredited state or private universities (min. B accreditation)",
        "Minimum GPA of 3.25 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-08-05",
    applicationUrl: "https://tangerangkab.go.id/",
    description: {
      id: "Program pemberian beasiswa stimulan dari Pemerintah Kabupaten Tangerang bagi mahasiswa berprestasi asli daerah Banten.",
      en: "Tangerang Regency Government's stimulus scholarship program for high-achieving college students native to Banten region."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Tangerang",
        "Banten"
      ],
      en: [
        "Government",
        "Domestic",
        "Tangerang",
        "Banten"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-semarang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Semarang (Semarang Hebat)",
      en: "Semarang City Government Scholarship (Semarang Hebat)"
    },
    provider: {
      id: "Pemerintah Kota Semarang",
      en: "City Government of Semarang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya pendidikan semesteran",
        "Pelatihan soft skills dan kepemimpinan oleh Pemkot"
      ],
      en: [
        "Semester educational financial assistance",
        "Soft skills and leadership training by the City Government"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kota Semarang dibuktikan dengan KTP/KK Semarang",
        "Terdaftar sebagai mahasiswa aktif S1 di universitas mitra di wilayah Semarang",
        "IPK minimal 3.00 dan aktif berorganisasi"
      ],
      en: [
        "Native resident of Semarang City proven by Semarang ID/Family Card",
        "Registered active S1 student at partner universities in Semarang area",
        "Minimum GPA of 3.00 and active in student organizations"
      ]
    },
    status: 'soon',
    deadline: "2026-09-10",
    applicationUrl: "https://semarangkab.go.id/",
    description: {
      id: "Program bantuan studi untuk memotivasi mahasiswa berprestasi asal Semarang agar berkontribusi nyata pada kemajuan kota.",
      en: "Study assistance program intended to motivate high-achieving students from Semarang to contribute to the city's development."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Semarang",
        "Bantuan"
      ],
      en: [
        "Government",
        "Domestic",
        "Semarang",
        "Assistance"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-sulut",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Provinsi Sulawesi Utara (Beasiswa Sulut Hebat)",
      en: "North Sulawesi Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Sulawesi Utara",
      en: "Provincial Government of North Sulawesi"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Dana stimulan pendidikan untuk SPP/UKT",
        "Subsidi biaya penelitian tugas akhir"
      ],
      en: [
        "Educational tuition fee stimulus grant",
        "Subsidiary research grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Sulawesi Utara (KK/KTP Sulut)",
        "Mahasiswa aktif di universitas terakreditasi baik di dalam Sulut maupun luar daerah",
        "IPK minimal 3.00 untuk sains dan 3.25 untuk sosial"
      ],
      en: [
        "Native resident of North Sulawesi (Sulut ID/Family Card)",
        "Active student at accredited universities in North Sulawesi or other regions",
        "Minimum GPA of 3.00 for science or 3.25 for social studies"
      ]
    },
    status: 'open',
    deadline: "2026-07-30",
    applicationUrl: "https://sulutprov.go.id/",
    description: {
      id: "Beasiswa bantuan pendidikan dari Pemprov Sulawesi Utara bagi mahasiswa berprestasi tinggi untuk mempercepat penyelesaian studi.",
      en: "Educational assistance scholarship from North Sulawesi Provincial Government for outstanding students to accelerate their graduation."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sulawesi",
        "Bantuan"
      ],
      en: [
        "Government",
        "Domestic",
        "Sulawesi",
        "Assistance"
      ]
    }
  },
  {
    id: "eth-esop-switzerland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "ETH Zurich Excellence Scholarship & Opportunity Programme (ESOP)",
      en: "ETH Zurich Excellence Scholarship & Opportunity Programme (ESOP)"
    },
    provider: {
      id: "ETH Zurich (Swiss Federal Institute of Technology)",
      en: "ETH Zurich (Swiss Federal Institute of Technology)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh",
        "Uang saku bulanan dan tunjangan hidup senilai CHF 12.000 per semester",
        "Mentoring khusus dan jejaring riset eksklusif"
      ],
      en: [
        "Full tuition fee waiver",
        "Monthly stipend and living allowance worth CHF 12,000 per semester",
        "Special mentoring and exclusive research networking"
      ]
    },
    requirements: {
      id: [
        "Lulusan sarjana dengan hasil akademis sangat baik (masuk 10% terbaik di angkatannya)",
        "Menulis proposal pra-proyek tesis master (Master's thesis pre-proposal)",
        "Diterima di salah satu program Master di ETH Zurich"
      ],
      en: [
        "Bachelor graduates with outstanding academic results (top 10% of their class)",
        "Write a Master's thesis pre-proposal of high quality",
        "Admitted to an eligible Master's program at ETH Zurich"
      ]
    },
    status: 'soon',
    deadline: "2026-12-15",
    applicationUrl: "https://ethz.ch/en/studies/financial/scholarships/excellencescholarship.html",
    description: {
      id: "Beasiswa riset elit dari ETH Zurich, universitas teknologi top dunia, untuk mendukung calon ilmuwan unggulan menyelesaikan studi Master.",
      en: "An elite research scholarship by ETH Zurich, one of the world's leading technology universities, supporting outstanding future scientists in master's studies."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swiss",
        "Teknologi",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Switzerland",
        "Technology",
        "Research"
      ]
    }
  },
  {
    id: "edinburgh-global-research",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Global Edinburgh (Universitas Edinburgh)",
      en: "Edinburgh Global Research Scholarship (University of Edinburgh)"
    },
    provider: {
      id: "University of Edinburgh, UK",
      en: "University of Edinburgh, UK"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Cakupan selisih biaya kuliah internasional penuh",
        "Tunjangan biaya riset tahunan"
      ],
      en: [
        "Full international tuition fee rate coverage",
        "Annual research cost allowance"
      ]
    },
    requirements: {
      id: [
        "Terbuka bagi mahasiswa internasional luar UK",
        "Telah terdaftar atau diterima di program PhD riset penuh waktu di Edinburgh",
        "Memiliki rekam jejak akademik yang luar biasa dan proposal riset yang berdampak luas"
      ],
      en: [
        "Open to international students outside the UK",
        "Admitted to a full-time PhD research program at Edinburgh",
        "Possess outstanding academic record and a high-impact research proposal"
      ]
    },
    status: 'closed',
    deadline: "2026-02-02",
    applicationUrl: "https://www.ed.ac.uk/student-funding/postgraduate/international/global/research",
    description: {
      id: "Beasiswa bergengsi dari Universitas Edinburgh untuk mendukung kandidat PhD internasional melakukan penelitian tingkat tinggi di Skotlandia.",
      en: "Prestigious scholarship offered by the University of Edinburgh to support outstanding international PhD candidates conducting high-level research in Scotland."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Riset",
        "Doktor"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Research",
        "Doctoral"
      ]
    }
  },
  {
    id: "hong-kong-phd-hkpfs",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Skema PhD Hong Kong (HKPFS)",
      en: "Hong Kong PhD Fellowship Scheme (HKPFS)"
    },
    provider: {
      id: "Research Grants Council (RGC) Hong Kong",
      en: "Research Grants Council (RGC) Hong Kong"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Tunjangan tahunan sebesar HKD 331.200",
        "Tunjangan perjalanan terkait konferensi senilai HKD 13.800 per tahun",
        "Bantuan akomodasi kampus terjamin"
      ],
      en: [
        "Annual stipend of HKD 331,200",
        "Conference and research-related travel allowance of HKD 13,800 per year",
        "Guaranteed on-campus accommodation assistance"
      ]
    },
    requirements: {
      id: [
        "Terbuka untuk calon mahasiswa PhD dari seluruh belahan dunia",
        "Memenuhi standar akademik tinggi dan kemampuan berbahasa Inggris yang sangat baik",
        "Menunjukkan potensi kepemimpinan dan rekam jejak riset yang kuat"
      ],
      en: [
        "Open to PhD candidates from all countries globally",
        "Meet high academic excellence standards and excellent English proficiency",
        "Demonstrate strong leadership potential and research record"
      ]
    },
    status: 'soon',
    deadline: "2026-12-01",
    applicationUrl: "https://www.ugc.edu.hk/eng/rgc/funding_opport/hkpfs/",
    description: {
      id: "Program beasiswa riset prestisius dari pemerintah Hong Kong untuk menarik mahasiswa PhD terbaik se-dunia ke universitas kelas dunia di Hong Kong.",
      en: "A highly prestigious research fellowship program established by the Hong Kong government to attract the best PhD students worldwide to study in Hong Kong."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Hong Kong",
        "Riset",
        "Doktor"
      ],
      en: [
        "Government",
        "Overseas",
        "Hong Kong",
        "Research",
        "Doctoral"
      ]
    }
  },
  {
    id: "peking-university-pkus",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Universitas Peking (Peking University Scholarship - PKUS)",
      en: "Peking University Scholarship (PKUS)"
    },
    provider: {
      id: "Peking University, China",
      en: "Peking University, China"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh (spp)",
        "Uang saku bulanan untuk biaya hidup",
        "Asuransi kesehatan komprehensif bagi mahasiswa asing"
      ],
      en: [
        "Full tuition fee waiver",
        "Monthly living stipend support",
        "Comprehensive medical insurance for international students"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Tiongkok (mahasiswa internasional)",
        "Memenuhi syarat kemampuan bahasa HSK (Mandarin) atau IELTS/TOEFL untuk kelas bahasa Inggris",
        "Menunjukkan prestasi akademis di atas rata-rata dari jenjang sekolah/kuliah sebelumnya"
      ],
      en: [
        "Non-Chinese citizen (international students)",
        "Meet language proficiency standards in HSK (Mandarin) or IELTS/TOEFL for English-taught classes",
        "Demonstrate above-average academic performance from previous education"
      ]
    },
    status: 'closed',
    deadline: "2026-04-30",
    applicationUrl: "https://www.isd.pku.edu.cn/scholarship/detail/8.html",
    description: {
      id: "Beasiswa tingkat universitas dari Peking University, universitas terbaik di China, untuk mendanai studi sarjana dan pascasarjana mahasiswa internasional.",
      en: "University-level scholarship by Peking University, China's premier university, supporting international students in undergraduate and graduate degree studies."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "China",
        "Asia"
      ],
      en: [
        "University",
        "Overseas",
        "China",
        "Asia"
      ]
    }
  },
  {
    id: "tsinghua-university-scholarship",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Universitas Tsinghua untuk Mahasiswa Internasional",
      en: "Tsinghua University Scholarship for International Students"
    },
    provider: {
      id: "Tsinghua University, China",
      en: "Tsinghua University, China"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh atau sebagian",
        "Tunjangan biaya hidup bulanan untuk mahasiswa pascasarjana",
        "Akomodasi asrama kampus gratis atau bersubsidi"
      ],
      en: [
        "Full or partial tuition fee waiver",
        "Monthly living stipend for graduate students",
        "Free or subsidized on-campus dormitory accommodation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional non-Tiongkok yang mendaftar program degree di Tsinghua",
        "Memiliki rekam jejak akademis yang sangat baik",
        "Lolos seleksi masuk akademik program studi yang dituju"
      ],
      en: [
        "Non-Chinese international students applying for degree studies at Tsinghua",
        "Possess outstanding academic records",
        "Pass the academic admission process of the target department"
      ]
    },
    status: 'closed',
    deadline: "2026-03-31",
    applicationUrl: "https://www.tsinghua.edu.cn/en/Admissions/International_Students.htm",
    description: {
      id: "Beasiswa bergengsi dari Universitas Tsinghua untuk memfasilitasi mahasiswa internasional berprestasi menempuh studi lanjut di Beijing.",
      en: "Prestigious scholarship offered by Tsinghua University to support high-achieving international students in pursuing advanced degrees in Beijing."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "China",
        "Asia"
      ],
      en: [
        "University",
        "Overseas",
        "China",
        "Asia"
      ]
    }
  },
  {
    id: "beasiswa-pemerintah-rusia",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Federasi Rusia (RGS)",
      en: "Russian Government Scholarship (RGS)"
    },
    provider: {
      id: "Kementerian Sains dan Pendidikan Tinggi Federasi Rusia",
      en: "Ministry of Science and Higher Education of the Russian Federation"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah 100% untuk seluruh durasi studi",
        "Tunjangan biaya hidup bulanan dasar",
        "Akomodasi asrama universitas dengan biaya sangat bersubsidi"
      ],
      en: [
        "100% tuition fee waiver for the entire duration of study",
        "Basic monthly living allowance",
        "Highly subsidized university dormitory accommodation"
      ]
    },
    requirements: {
      id: [
        "Terbuka untuk semua warganegara asing (termasuk Indonesia)",
        "Lulusan SMA/sederajat (untuk S1) atau Sarjana (untuk S2/S3)",
        "Lolos seleksi berkas administrasi dan portofolio akademik melalui kuota negara"
      ],
      en: [
        "Open to all international citizens (including Indonesians)",
        "High school graduates (for Bachelor) or Bachelor graduates (for Master/PhD)",
        "Pass document screening and academic portfolio selection via state quotas"
      ]
    },
    status: 'soon',
    deadline: "2026-11-20",
    applicationUrl: "https://education-in-russia.com/",
    description: {
      id: "Beasiswa kuota resmi dari Pemerintah Federasi Rusia untuk memberikan kesempatan belajar gratis bagi mahasiswa internasional di perguruan tinggi Rusia.",
      en: "Official state quota scholarship by the Russian Government offering free higher education opportunities for international students at Russian universities."
    },
    tags: {
      id: [
        "Pemerintah",
        "Luar Negeri",
        "Rusia",
        "Kuota"
      ],
      en: [
        "Government",
        "Overseas",
        "Russia",
        "Quota"
      ]
    }
  },
  {
    id: "beasiswa-hse-gold",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa HSE Gold (National Research University Higher School of Economics)",
      en: "HSE Gold Scholarship (National Research University Higher School of Economics)"
    },
    provider: {
      id: "HSE University Moscow",
      en: "HSE University Moscow"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah 100% program Master",
        "Dukungan asrama mahasiswa di Moskow"
      ],
      en: [
        "100% tuition fee waiver for Master's program",
        "Student dormitory support in Moscow"
      ]
    },
    requirements: {
      id: [
        "Memiliki gelar Sarjana dengan prestasi akademis sangat unggul",
        "Lolos seleksi portofolio masuk program studi Master HSE yang dipilih",
        "Memiliki sertifikat bahasa Inggris (IELTS/TOEFL) atau Rusia sesuai syarat prodi"
      ],
      en: [
        "Hold a Bachelor's degree with outstanding academic records",
        "Pass the portfolio selection for the chosen HSE Master's program",
        "Possess English (IELTS/TOEFL) or Russian language certificate based on program requirements"
      ]
    },
    status: 'open',
    deadline: "2026-08-10",
    applicationUrl: "https://admissions.hse.ru/en/",
    description: {
      id: "Beasiswa prestasi akademis penuh dari HSE University, salah satu universitas riset ekonomi dan sosial terbaik di Rusia.",
      en: "Full academic merit scholarship by HSE University, one of the top research universities in economics and social sciences in Russia."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Rusia",
        "Ekonomi"
      ],
      en: [
        "University",
        "Overseas",
        "Russia",
        "Economics"
      ]
    }
  },
  {
    id: "beasiswa-skoltech-graduate",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Penuh Skoltech (Skolkovo Institute of Science and Technology)",
      en: "Skoltech Graduate Scholarships (Skolkovo Institute of Science and Technology)"
    },
    provider: {
      id: "Skolkovo Institute of Science and Technology, Russia",
      en: "Skolkovo Institute of Science and Technology, Russia"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100%",
        "Tunjangan bulanan mulai dari 40.000 RUB (S2) hingga 75.000 RUB (S3)",
        "Asuransi kesehatan komprehensif gratis"
      ],
      en: [
        "100% tuition fees coverage",
        "Monthly stipend starting from 40,000 RUB (MSc) up to 75,000 RUB (PhD)",
        "Free comprehensive medical insurance"
      ]
    },
    requirements: {
      id: [
        "Lulusan S1 atau S2 bidang STEM (Sains, Teknologi, Teknik, Matematika)",
        "Lolos ujian tertulis masuk online dan seleksi wawancara akademik",
        "Kemampuan bahasa Inggris yang baik (seluruh perkuliahan dalam bahasa Inggris)"
      ],
      en: [
        "Bachelor or Master graduates in STEM (Science, Technology, Engineering, Math) fields",
        "Pass online entrance exams and academic interview selection",
        "Good English proficiency (all programs are fully taught in English)"
      ]
    },
    status: 'soon',
    deadline: "2026-07-15",
    applicationUrl: "https://www.skoltech.ru/en/education/",
    description: {
      id: "Beasiswa penuh riset STEM prestisius dari Skoltech di Moskow, didesain untuk mendidik peneliti dan inovator teknologi masa depan.",
      en: "A prestigious fully funded STEM research scholarship by Skoltech in Moscow, designed to nurture future world-class researchers and tech innovators."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Rusia",
        "Teknologi",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Russia",
        "Technology",
        "Research"
      ]
    }
  },
  {
    id: "beasiswa-mephi-nuclear",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Nuklir & Fisika MEPhI (Universitas Nuklir Nasional Rusia)",
      en: "MEPhI Nuclear & Physics Scholarship (National Research Nuclear University)"
    },
    provider: {
      id: "National Research Nuclear University MEPhI, Moscow",
      en: "National Research Nuclear University MEPhI, Moscow"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya pendidikan penuh bidang nuklir & fisika",
        "Akses laboratorium riset reaktor nuklir universitas"
      ],
      en: [
        "Full tuition fee waiver in nuclear engineering and physics",
        "Access to university nuclear research reactor laboratories"
      ]
    },
    requirements: {
      id: [
        "Memiliki latar belakang yang kuat di bidang Matematika dan Fisika",
        "Lolos ujian seleksi masuk akademik MEPhI",
        "Bersedia menempuh kelas persiapan bahasa Rusia jika memilih kelas reguler"
      ],
      en: [
        "Strong academic background in Mathematics and Physics",
        "Pass the MEPhI academic entrance exam",
        "Willing to undergo Russian language preparatory course if choosing regular classes"
      ]
    },
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://eng.mephi.ru/",
    description: {
      id: "Beasiswa khusus rekayasa nuklir dan fisika energi tinggi dari MEPhI untuk mendidik ahli teknologi nuklir tingkat internasional.",
      en: "Specialized scholarship in nuclear engineering and high-energy physics by MEPhI to train international nuclear technology experts."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Rusia",
        "Nuklir",
        "Fisika"
      ],
      en: [
        "University",
        "Overseas",
        "Russia",
        "Nuclear",
        "Physics"
      ]
    }
  },
  {
    id: "beasiswa-spbu-quota",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemerintah Universitas Negeri Saint Petersburg (SPbU)",
      en: "Saint Petersburg State University Government Quota (SPbU)"
    },
    provider: {
      id: "Saint Petersburg State University, Russia",
      en: "Saint Petersburg State University, Russia"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya SPP kuliah penuh",
        "Tunjangan hidup bulanan dasar dari dana federal"
      ],
      en: [
        "Full tuition fee waiver",
        "Basic monthly federal living allowance"
      ]
    },
    requirements: {
      id: [
        "Bukan warga negara Rusia (mahasiswa internasional)",
        "Memiliki portofolio akademik berprestasi dan esai motivasi",
        "Lolos seleksi administrasi portofolio departemen SPbU"
      ],
      en: [
        "Non-Russian citizens (international students)",
        "Possess a high-achieving academic portfolio and a motivation essay",
        "Pass SPbU's portfolio selection process"
      ]
    },
    status: 'closed',
    deadline: "2026-06-15",
    applicationUrl: "https://english.spbu.ru/admission",
    description: {
      id: "Kuota beasiswa khusus dari SPbU, universitas tertua di Rusia, untuk menarik mahasiswa asing berbakat kuliah di Saint Petersburg.",
      en: "Special government quota scholarship allocation by SPbU, Russia's oldest university, to attract talented international students to Saint Petersburg."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Rusia",
        "Saint Petersburg"
      ],
      en: [
        "University",
        "Overseas",
        "Russia",
        "Saint Petersburg"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-tuban",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Kabupaten Tuban (Beasiswa Prestasi Tuban)",
      en: "Tuban Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Tuban",
      en: "Regency Government of Tuban"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya kuliah semesteran",
        "Uang saku penunjang riset tugas akhir"
      ],
      en: [
        "Semester tuition fee assistance",
        "Stipend support for final thesis research"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Tuban dibuktikan dengan KTP/KK Tuban",
        "Mahasiswa aktif S1 di perguruan tinggi negeri maupun swasta",
        "IPK minimal 3.00 untuk prestasi akademik atau memiliki prestasi non-akademik minimal tingkat provinsi"
      ],
      en: [
        "Native resident of Tuban Regency proven by Tuban ID/Family Card",
        "Active S1 student at state or private universities",
        "Minimum GPA of 3.00 for academic track or regional non-academic achievement"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://tubankab.go.id/",
    description: {
      id: "Bantuan stimulan biaya pendidikan tinggi dari Pemkab Tuban untuk memajukan kualitas akademis mahasiswa berprestasi daerah.",
      en: "Higher education financial assistance stimulus from Tuban Regency Government to elevate the academic achievements of local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Tuban",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Tuban",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-lamongan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Lamongan (Beasiswa Transisi Gafura Cerdas)",
      en: "Lamongan Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Lamongan",
      en: "Regency Government of Lamongan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan UKT per semester",
        "Pelatihan karir dan pengabdian masyarakat dari Pemkab"
      ],
      en: [
        "Semester tuition fee grant assistance",
        "Career training and community service by Regency Government"
      ]
    },
    requirements: {
      id: [
        "Memiliki KTP/KK asli Kabupaten Lamongan",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi minimal B",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik unggul"
      ],
      en: [
        "Possess native Lamongan Regency ID/Family Card",
        "Active S1 student at accredited universities (min. B accreditation)",
        "From underprivileged background or possesses outstanding academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-07-25",
    applicationUrl: "https://lamongankab.go.id/",
    description: {
      id: "Program beasiswa stimulan dari Pemerintah Kabupaten Lamongan untuk meminimalkan angka putus sekolah tinggi bagi pemuda berprestasi daerah.",
      en: "Stimulus scholarship program by Lamongan Regency Government to prevent higher education dropouts among local talented youths."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Lamongan",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Lamongan",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-kepri",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Kepulauan Riau (Kepri Berprestasi)",
      en: "Riau Islands Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Kepulauan Riau",
      en: "Provincial Government of Riau Islands"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tesis"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research writing grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Provinsi Kepulauan Riau dibuktikan dengan KTP/KK Kepri",
        "Mahasiswa aktif perguruan tinggi negeri/swasta di dalam maupun luar wilayah Kepri",
        "IPK minimal 3.10 untuk saintek atau 3.25 untuk rumpun sosial/humaniora"
      ],
      en: [
        "Native resident of Riau Islands Province (Kepri ID/Family Card)",
        "Active student at state or private universities inside/outside Kepri",
        "Minimum GPA of 3.10 for science or 3.25 for social studies"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://kepriprov.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemprov Kepri untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Kepri Provincial Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kepri",
        "Bantuan"
      ],
      en: [
        "Government",
        "Domestic",
        "Kepri",
        "Assistance"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-sumenep",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Sumenep (Beasiswa Santri & Mahasiswa Berprestasi)",
      en: "Sumenep Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Sumenep",
      en: "Regency Government of Sumenep"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Dana stimulan biaya SPP kuliah per semester",
        "Bantuan biaya hidup penunjang pendidikan"
      ],
      en: [
        "Semester tuition fee stimulus grant",
        "Living cost assistance for educational support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Sumenep (KK/KTP Madura/Sumenep)",
        "Mahasiswa aktif program S1 atau santri aktif di pondok pesantren terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi tahfidz/akademik"
      ],
      en: [
        "Native resident of Sumenep Regency (Sumenep/Madura ID/Family Card)",
        "Active S1 student or active santri at accredited Islamic boarding school",
        "From low-income family background or possesses tahfidz/academic records"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://sumenepkab.go.id/",
    description: {
      id: "Bantuan sosial pendidikan dari Pemerintah Kabupaten Sumenep untuk meningkatkan indeks pembangunan manusia bagi santri dan mahasiswa daerah.",
      en: "Educational social assistance from Sumenep Regency Government to elevate the human development index for local students and santri."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sumenep",
        "Madura"
      ],
      en: [
        "Government",
        "Domestic",
        "Sumenep",
        "Madura"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-bengkulu",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Provinsi Bengkulu (Beasiswa Bengkulu Unggul)",
      en: "Bengkulu Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Bengkulu",
      en: "Provincial Government of Bengkulu"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan UKT/SPP tahunan",
        "Bantuan dana penunjang tugas akhir kuliah"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Thesis drafting financial assistance"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Provinsi Bengkulu (KTP/KK Bengkulu)",
        "Mahasiswa aktif di universitas negeri/swasta terakreditasi minimal B",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Bengkulu Province (Bengkulu ID/Family Card)",
        "Active student at accredited state or private universities (min. B)",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-07-15",
    applicationUrl: "https://bengkuluprov.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemprov Bengkulu untuk mendorong pemerataan pendidikan tinggi di wilayah Bengkulu.",
      en: "Tuition fee financial assistance scholarship by Bengkulu Provincial Government supporting higher education accessibility in Bengkulu."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Bengkulu",
        "Sumatera"
      ],
      en: [
        "Government",
        "Domestic",
        "Bengkulu",
        "Sumatra"
      ]
    }
  },
  {
    id: "tudelft-excellence-netherlands",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan Justus & Louise van Effen TU Delft",
      en: "TU Delft Justus & Louise van Effen Excellence Scholarships"
    },
    provider: {
      id: "Delft University of Technology (TU Delft)",
      en: "Delft University of Technology (TU Delft)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100% program Master",
        "Tunjangan biaya hidup tahunan senilai EUR 30.000",
        "Keanggotaan eksklusif dalam klub beasiswa rintisan industri"
      ],
      en: [
        "100% tuition fees coverage for Master's program",
        "Living expenses allowance worth EUR 30,000 per year",
        "Exclusive membership in startup and industrial research clubs"
      ]
    },
    requirements: {
      id: [
        "Diterima di salah satu program MSc regular TU Delft",
        "IPK kumulatif minimal 3.75 dari skala 4.00 di universitas sebelumnya",
        "Menulis esai motivasi yang kuat serta melampirkan portfolio akademik unggul"
      ],
      en: [
        "Admitted to one of the regular MSc programs at TU Delft",
        "Cumulative GPA of at least 3.75 out of 4.00 scale in previous university",
        "Write a strong motivation essay and submit outstanding academic portfolio"
      ]
    },
    status: 'soon',
    deadline: "2026-12-01",
    applicationUrl: "https://www.tudelft.nl/",
    description: {
      id: "Beasiswa riset paling bergengsi dari TU Delft, Belanda, untuk melatih calon rekayasawan dan peneliti sains terapan dunia.",
      en: "The most prestigious research scholarship by TU Delft, Netherlands, aimed at nurturing future world-class engineers and scientists."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belanda",
        "Teknologi",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Netherlands",
        "Technology",
        "Research"
      ]
    }
  },
  {
    id: "waterloo-master-excellence-canada",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Prestasi Master Internasional Universitas Waterloo",
      en: "University of Waterloo International Master's Award of Excellence"
    },
    provider: {
      id: "University of Waterloo, Kanada",
      en: "University of Waterloo, Canada"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Tunjangan dana riset senilai CAD 2.500 per semester",
        "Subsidi biaya kuliah mahasiswa internasional"
      ],
      en: [
        "Research grant worth CAD 2,500 per semester",
        "International student tuition fee subsidy"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang memegang visa studi Kanada yang sah",
        "Diterima penuh waktu di program Master berbasis riset di Waterloo",
        "Menunjukkan prestasi akademis yang konsisten selama jenjang sarjana"
      ],
      en: [
        "International students holding a valid Canadian study permit",
        "Admitted full-time to a research-based Master's program at Waterloo",
        "Demonstrate consistent academic excellence in undergraduate studies"
      ]
    },
    status: 'open',
    deadline: "2026-08-01",
    applicationUrl: "https://uwaterloo.ca/graduate-studies-postdoctoral-affairs/",
    description: {
      id: "Beasiswa bantuan dana riset pascasarjana dari Universitas Waterloo untuk mendukung mahasiswa internasional menempuh studi Master sains.",
      en: "Graduate research financial assistance scholarship by the University of Waterloo supporting top international Master's candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Kanada",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Canada",
        "Research"
      ]
    }
  },
  {
    id: "bocconi-merit-italy",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Prestasi Universitas Bocconi (Merit Awards)",
      en: "Bocconi University Merit & International Awards"
    },
    provider: {
      id: "Bocconi University, Italia",
      en: "Bocconi University, Italy"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah 100% senilai hingga EUR 14.000 per tahun",
        "Akomodasi asrama bersubsidi gratis di kampus Milan"
      ],
      en: [
        "100% tuition fee waiver worth up to EUR 14,000 per year",
        "Free or highly subsidized student housing at Milan campus"
      ]
    },
    requirements: {
      id: [
        "Diterima di program Bachelor atau Master di Bocconi University",
        "Kriteria seleksi murni berdasarkan prestasi akademik yang luar biasa di sekolah/kuliah asal",
        "Mengisi formulir pengajuan beasiswa sebelum tenggat waktu gelombang masuk"
      ],
      en: [
        "Admitted to a Bachelor or Master program at Bocconi University",
        "Selection criteria are strictly based on outstanding academic profile from previous studies",
        "Submit the scholarship application form before the admission wave deadline"
      ]
    },
    status: 'closed',
    deadline: "2026-05-30",
    applicationUrl: "https://www.unibocconi.eu/",
    description: {
      id: "Beasiswa elit dari Bocconi University di Milan untuk menyokong kuliah bisnis, manajemen, dan ekonomi bagi mahasiswa asing terbaik.",
      en: "An elite merit-based scholarship by Bocconi University in Milan, supporting top business, management, and economics international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Italia",
        "Bisnis",
        "Ekonomi"
      ],
      en: [
        "University",
        "Overseas",
        "Italy",
        "Business",
        "Economics"
      ]
    }
  },
  {
    id: "monash-international-leadership-australia",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kepemimpinan Internasional Universitas Monash",
      en: "Monash University International Leadership Scholarship"
    },
    provider: {
      id: "Monash University, Australia",
      en: "Monash University, Australia"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100% hingga masa studi selesai",
        "Undangan eksklusif program pelatihan kepemimpinan dan jejaring alumni"
      ],
      en: [
        "100% tuition fees coverage until the completion of degree",
        "Exclusive invitation to leadership training programs and alumni network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang berencana menempuh kuliah sarjana atau pascasarjana di Monash",
        "Lolos seleksi masuk akademik program studi pilihan",
        "Menulis esai kepemimpinan yang meyakinkan mengenai kontribusi masa depan"
      ],
      en: [
        "International students planning to study undergraduate or postgraduate degrees at Monash",
        "Pass academic admission to the selected course",
        "Write a compelling leadership essay outlining future contributions"
      ]
    },
    status: 'open',
    deadline: "2026-10-15",
    applicationUrl: "https://www.monash.edu/",
    description: {
      id: "Beasiswa prestasi kepemimpinan tingkat sarjana dan pascasarjana dari Monash University untuk mencetak duta masa depan.",
      en: "Merit and leadership based full-tuition scholarship by Monash University designed to groom future global student ambassadors."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Kepemimpinan"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Leadership"
      ]
    }
  },
  {
    id: "paris-saclay-master-france",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Master Internasional Universitas Paris-Saclay",
      en: "Paris-Saclay University International Master's Scholarship"
    },
    provider: {
      id: "Université Paris-Saclay, Prancis",
      en: "Université Paris-Saclay, France"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan biaya hidup senilai EUR 10.000 per tahun",
        "Bantuan biaya perjalanan dan visa senilai hingga EUR 1.000",
        "Bebas biaya pendaftaran universitas"
      ],
      en: [
        "Living allowance stipend worth EUR 10,000 per year",
        "Travel and visa expenses cover up to EUR 1,000",
        "University enrollment fees waiver"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang baru pertama kali mendaftar program Master di Paris-Saclay",
        "Memiliki latar akademik yang sangat menonjol di jenjang sarjana",
        "Lolos seleksi masuk di salah satu program studi Master mitra"
      ],
      en: [
        "First-time international applicants to a Master's program at Paris-Saclay",
        "Possess outstanding academic records in undergraduate studies",
        "Pass admission selection to a partner Master's program"
      ]
    },
    status: 'closed',
    deadline: "2026-05-15",
    applicationUrl: "https://www.universite-paris-saclay.fr/en/",
    description: {
      id: "Beasiswa penuh dari pemerintah Perancis melalui Paris-Saclay untuk menarik ilmuwan asing terbaik kuliah di klaster riset sains terkemuka Perancis.",
      en: "Fully funded scholarship program by the French government via Paris-Saclay, designed to attract top international science candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Prancis",
        "Sains",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "France",
        "Science",
        "Research"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-balikpapan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Balikpapan (Balikpapan Tuntas)",
      en: "Balikpapan City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Balikpapan",
      en: "City Government of Balikpapan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya kuliah stimulan per semester",
        "Dukungan biaya hidup penunjang tugas akhir"
      ],
      en: [
        "Semester tuition fee stimulus support",
        "Living cost assistance for final thesis"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kota Balikpapan dibuktikan dengan KTP/KK Balikpapan",
        "Mahasiswa aktif S1 di perguruan tinggi terakreditasi minimal B",
        "IPK minimal 3.00 untuk prestasi akademik atau menyertakan piagam prestasi non-akademik"
      ],
      en: [
        "Native resident of Balikpapan City (Balikpapan ID/Family Card)",
        "Active S1 student at accredited universities (min. B)",
        "Minimum GPA of 3.00 for academic track or provide non-academic certificates"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://balikpapan.go.id/",
    description: {
      id: "Program beasiswa bantuan pendidikan tinggi dari Pemkot Balikpapan untuk mendorong peningkatan kualitas akademis putra-putri daerah.",
      en: "Higher education financial assistance program by Balikpapan City Government to elevate the academic achievements of local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Balikpapan",
        "Kalimantan"
      ],
      en: [
        "Government",
        "Domestic",
        "Balikpapan",
        "Kalimantan"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-jombang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Jombang (Beasiswa Jombang Prestasi)",
      en: "Jombang Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Jombang",
      en: "Regency Government of Jombang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan UKT per semester",
        "Pelatihan pengembangan karir dari Dinas Pendidikan"
      ],
      en: [
        "Semester tuition fee grant support",
        "Career development training by Education Office"
      ]
    },
    requirements: {
      id: [
        "Memiliki KTP/KK asli Kabupaten Jombang",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik unggul"
      ],
      en: [
        "Possess native Jombang Regency ID/Family Card",
        "Active S1 student at accredited universities",
        "From low-income background or possesses outstanding academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-07-25",
    applicationUrl: "https://jombangkab.go.id/",
    description: {
      id: "Program beasiswa stimulan dari Pemerintah Kabupaten Jombang untuk mendukung pemerataan akses pendidikan tinggi bagi pemuda berprestasi.",
      en: "Stimulus scholarship program by Jombang Regency Government to support higher education accessibility for outstanding local youth."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Jombang",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Jombang",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-pacitan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Pacitan (Beasiswa Prestasi Pacitan)",
      en: "Pacitan Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Pacitan",
      en: "Regency Government of Pacitan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Thesis drafting financial assistance"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Pacitan dibuktikan dengan KTP/KK Pacitan",
        "Mahasiswa aktif perguruan tinggi negeri/swasta di dalam maupun luar wilayah Pacitan",
        "IPK minimal 3.00 untuk sains/teknologi atau 3.20 untuk rumpun sosial"
      ],
      en: [
        "Native resident of Pacitan Regency (Pacitan ID/Family Card)",
        "Active student at state or private universities inside/outside Pacitan",
        "Minimum GPA of 3.00 for science or 3.20 for social studies"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://pacitankab.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemkab Pacitan untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Pacitan Regency Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Pacitan",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Pacitan",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-ponorogo",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Ponorogo (Ponorogo Cerdas)",
      en: "Ponorogo Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Ponorogo",
      en: "Regency Government of Ponorogo"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Dana stimulan biaya SPP kuliah per semester",
        "Bantuan biaya hidup penunjang pendidikan"
      ],
      en: [
        "Semester tuition fee stimulus grant",
        "Living cost assistance for educational support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Ponorogo dibuktikan dengan KK/KTP Ponorogo",
        "Mahasiswa aktif program S1 di perguruan tinggi terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi tahfidz/akademik"
      ],
      en: [
        "Native resident of Ponorogo Regency (Ponorogo ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "From low-income family background or possesses tahfidz/academic records"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://ponorogo.go.id/",
    description: {
      id: "Bantuan sosial pendidikan dari Pemerintah Kabupaten Ponorogo untuk meningkatkan indeks pembangunan manusia mahasiswa daerah.",
      en: "Educational social assistance from Ponorogo Regency Government to elevate the human development index for local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Ponorogo",
        "Reog"
      ],
      en: [
        "Government",
        "Domestic",
        "Ponorogo",
        "Reog"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-gresik",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Kabupaten Gresik (Gresik Cerdas)",
      en: "Gresik Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Gresik",
      en: "Regency Government of Gresik"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan UKT/SPP tahunan",
        "Bantuan dana penunjang riset tugas akhir kuliah"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Thesis research financial assistance"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Gresik (KTP/KK Gresik)",
        "Mahasiswa aktif di universitas negeri/swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Gresik Regency (Gresik ID/Family Card)",
        "Active student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-07-15",
    applicationUrl: "https://gresikkab.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkab Gresik untuk mendorong pemerataan pendidikan tinggi di wilayah Gresik.",
      en: "Tuition fee financial assistance scholarship by Gresik Regency Government supporting higher education accessibility in Gresik."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Gresik",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Gresik",
        "East Java"
      ]
    }
  },
  {
    id: "nus-graduate-singapore",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana NUS untuk Mahasiswa ASEAN",
      en: "NUS Graduate Scholarship for ASEAN Students"
    },
    provider: {
      id: "National University of Singapore (NUS)",
      en: "National University of Singapore (NUS)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100% program Master/PhD",
        "Tunjangan biaya hidup bulanan senilai SGD 2.000",
        "Bantuan tiket pesawat pulang-pergi dan asuransi kesehatan"
      ],
      en: [
        "100% tuition fees coverage for Master/PhD programs",
        "Monthly living stipend allowance worth SGD 2,000",
        "Round-trip economy class airfare and medical insurance"
      ]
    },
    requirements: {
      id: [
        "Warga negara anggota ASEAN (kecuali Singapura)",
        "Diterima penuh waktu di program riset pascasarjana di NUS",
        "Memiliki latar akademik sarjana yang sangat menonjol"
      ],
      en: [
        "Citizen of an ASEAN member country (except Singapore)",
        "Admitted to a full-time graduate research program at NUS",
        "Outstanding undergraduate academic record"
      ]
    },
    status: 'soon',
    deadline: "2026-11-15",
    applicationUrl: "https://nus.edu.sg/",
    description: {
      id: "Beasiswa riset pascasarjana penuh dari NUS untuk mahasiswa berprestasi dari wilayah ASEAN agar menempuh pendidikan di Singapura.",
      en: "Fully funded graduate research scholarship by NUS supporting outstanding ASEAN candidates to study in Singapore."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Singapura",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Singapore",
        "Research"
      ]
    }
  },
  {
    id: "melbourne-graduate-australia",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Riset Pascasarjana Universitas Melbourne",
      en: "University of Melbourne Graduate Research Scholarship"
    },
    provider: {
      id: "University of Melbourne, Australia",
      en: "University of Melbourne, Australia"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya kuliah penuh 100% program riset Magister/Doktoral",
        "Tunjangan biaya hidup tahunan senilai AUD 37.000",
        "Tunjangan relokasi tempat tinggal dan asuransi kesehatan OSHC"
      ],
      en: [
        "100% tuition fee waiver for Master/PhD research programs",
        "Annual living allowance worth AUD 37,000",
        "Relocation allowance grant and OSHC health insurance coverage"
      ]
    },
    requirements: {
      id: [
        "Telah mendaftar atau diterima program Master/PhD riset di Universitas Melbourne",
        "Menunjukkan prestasi akademis sarjana/magister yang luar biasa",
        "Lolos seleksi masuk riset akademis departemen terkait"
      ],
      en: [
        "Applied for or admitted to a research Master/PhD at the University of Melbourne",
        "Outstanding academic record in previous studies",
        "Pass departmental academic research selection process"
      ]
    },
    status: 'open',
    deadline: "2026-10-31",
    applicationUrl: "https://www.unimelb.edu.au/",
    description: {
      id: "Beasiswa riset pascasarjana penuh dari Universitas Melbourne untuk menyokong peneliti muda internasional berprestasi.",
      en: "Fully funded postgraduate research scholarship by the University of Melbourne supporting outstanding international researchers."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Research"
      ]
    }
  },
  {
    id: "heidelberg-amirana-germany",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kedokteran Amirana Universitas Heidelberg",
      en: "Heidelberg University Amirana Scholarship"
    },
    provider: {
      id: "Heidelberg University, Jerman",
      en: "Heidelberg University, Germany"
    },
    degreeLevels: [
      'bachelor',
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah mahasiswa internasional program kedokteran",
        "Bantuan biaya hidup bulanan dasar selama masa studi"
      ],
      en: [
        "International tuition fees subsidy for medical programs",
        "Basic monthly living cost financial assistance"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional dari negara berkembang yang mendaftar bidang Kedokteran/Gigi",
        "Menunjukkan prestasi akademik luar biasa dan motivasi tinggi",
        "Kemampuan bahasa Jerman yang baik sesuai syarat masuk fakultas"
      ],
      en: [
        "International students from developing countries applying for Medicine/Dentistry",
        "Exceptional academic performance and strong motivation records",
        "Good German language proficiency based on faculty requirements"
      ]
    },
    status: 'soon',
    deadline: "2026-07-15",
    applicationUrl: "https://www.uni-heidelberg.de/en",
    description: {
      id: "Beasiswa bantuan dana kedokteran dari Universitas Heidelberg untuk mendidik calon dokter profesional dari negara berkembang.",
      en: "Medical education financial assistance scholarship by Heidelberg University supporting international medical candidates from developing countries."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Jerman",
        "Kedokteran"
      ],
      en: [
        "University",
        "Overseas",
        "Germany",
        "Medicine"
      ]
    }
  },
  {
    id: "kaist-international-korea",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Prestasi Internasional KAIST (Korea Selatan)",
      en: "KAIST International Student Scholarship"
    },
    provider: {
      id: "Korea Advanced Institute of Science and Technology (KAIST)",
      en: "Korea Advanced Institute of Science and Technology (KAIST)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100% program Sarjana",
        "Tunjangan biaya hidup bulanan senilai KRW 350.000",
        "Asuransi kesehatan komprehensif nasional gratis"
      ],
      en: [
        "100% tuition fees coverage for Bachelor's programs",
        "Monthly living stipend allowance worth KRW 350,000",
        "National health insurance coverage support"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Korea (mahasiswa internasional)",
        "Lulusan SMA/sederajat dengan prestasi akademis di bidang sains/matematika",
        "Kemampuan bahasa Inggris tinggi (TOEFL/IELTS atau sertifikat setara)"
      ],
      en: [
        "Non-Korean citizens (international students)",
        "High school graduates with outstanding records in science/math",
        "High English proficiency certificate (TOEFL/IELTS or equivalent)"
      ]
    },
    status: 'open',
    deadline: "2026-10-31",
    applicationUrl: "https://www.kaist.ac.kr/en/",
    description: {
      id: "Beasiswa sarjana penuh dari KAIST untuk mendidik talenta sains dan teknologi masa depan tingkat internasional.",
      en: "Fully funded undergraduate scholarship by KAIST to nurture future global science and tech innovators."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Korea Selatan",
        "Teknologi",
        "STEM"
      ],
      en: [
        "University",
        "Overseas",
        "South Korea",
        "Technology",
        "STEM"
      ]
    }
  },
  {
    id: "kyushu-friendship-japan",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Persahabatan Universitas Kyushu (Jepang)",
      en: "Kyushu University Friendship Scholarship"
    },
    provider: {
      id: "Kyushu University, Jepang",
      en: "Kyushu University, Japan"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Tunjangan biaya hidup bulanan senilai hingga JPY 80.000",
        "Dukungan biaya perjalanan kedatangan"
      ],
      en: [
        "Monthly living stipend allowance worth up to JPY 80,000",
        "Travel support for initial arrival expenses"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar program pascasarjana Universitas Kyushu",
        "Berasal dari universitas mitra kerjasama Kyushu University",
        "Prestasi akademik luar biasa dengan proposal riset terperinci"
      ],
      en: [
        "International students applying to Kyushu University graduate school",
        "From partner universities of Kyushu University",
        "Outstanding academic records with detailed research proposals"
      ]
    },
    status: 'soon',
    deadline: "2026-08-31",
    applicationUrl: "https://www.kyushu-u.ac.jp/en/",
    description: {
      id: "Beasiswa persahabatan dari Universitas Kyushu untuk mempererat pertukaran riset mahasiswa pascasarjana internasional.",
      en: "Kyushu University friendship scholarship designed to support international graduate research exchange students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Jepang",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Japan",
        "Research"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-jambi",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Provinsi Jambi (Jambi Mantap)",
      en: "Jambi Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Jambi",
      en: "Provincial Government of Jambi"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan UKT/SPP tahunan",
        "Bantuan dana penunjang tugas akhir kuliah"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Thesis drafting financial assistance"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Provinsi Jambi (KTP/KK Jambi)",
        "Mahasiswa aktif di universitas negeri/swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Jambi Province (Jambi ID/Family Card)",
        "Active student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-07-15",
    applicationUrl: "https://jambiprov.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemprov Jambi untuk mendorong pemerataan pendidikan tinggi putra-putri daerah.",
      en: "Tuition fee financial assistance scholarship by Jambi Provincial Government supporting higher education accessibility in Jambi."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Jambi",
        "Sumatera"
      ],
      en: [
        "Government",
        "Domestic",
        "Jambi",
        "Sumatra"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-sultra",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Sulawesi Tenggara (Sultra Cerdas)",
      en: "Southeast Sulawesi Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Sulawesi Tenggara",
      en: "Provincial Government of Southeast Sulawesi"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya kuliah semesteran (SPP/UKT)",
        "Uang saku penunjang riset tugas akhir"
      ],
      en: [
        "Semester tuition fee financial support",
        "Stipend support for final thesis research"
      ]
    },
    requirements: {
      id: [
        "Warga asli Sulawesi Tenggara dibuktikan dengan KTP/KK Sultra",
        "Mahasiswa aktif S1 di perguruan tinggi negeri maupun swasta",
        "IPK minimal 3.00 untuk prestasi akademik atau memiliki prestasi non-akademik"
      ],
      en: [
        "Native resident of Southeast Sulawesi Province (Sultra ID/Family Card)",
        "Active S1 student at state or private universities",
        "Minimum GPA of 3.00 for academic track or possess non-academic records"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://sultraprov.go.id/",
    description: {
      id: "Bantuan stimulan biaya pendidikan tinggi dari Pemprov Sultra untuk memajukan kualitas akademis mahasiswa berprestasi daerah.",
      en: "Higher education financial assistance stimulus from Southeast Sulawesi Government to elevate the academic achievements of local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sultra",
        "Sulawesi"
      ],
      en: [
        "Government",
        "Domestic",
        "Sultra",
        "Sulawesi"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-kaltara",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Kalimantan Utara (Kaltara Cerdas)",
      en: "North Kalimantan Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Kalimantan Utara",
      en: "Provincial Government of North Kalimantan"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tesis"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research writing grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Provinsi Kalimantan Utara (KTP/KK Kaltara)",
        "Mahasiswa aktif perguruan tinggi negeri/swasta terakreditasi",
        "IPK minimal 3.00 untuk sains/teknologi atau 3.25 untuk rumpun sosial"
      ],
      en: [
        "Native resident of North Kalimantan Province (Kaltara ID/Family Card)",
        "Active student at accredited state or private universities",
        "Minimum GPA of 3.00 for science or 3.25 for social studies"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://kaltaraprov.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemprov Kaltara untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Kaltara Provincial Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kaltara",
        "Borneo"
      ],
      en: [
        "Government",
        "Domestic",
        "Kaltara",
        "Borneo"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-papua",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Papua (Papua Bangkit)",
      en: "Papua Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Papua",
      en: "Provincial Government of Papua"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Dana stimulan biaya SPP kuliah per semester",
        "Bantuan biaya hidup penunjang pendidikan"
      ],
      en: [
        "Semester tuition fee stimulus grant",
        "Living cost assistance for educational support"
      ]
    },
    requirements: {
      id: [
        "Orang Asli Papua (OAP) dibuktikan dengan surat keterangan adat",
        "Mahasiswa aktif program S1/S2 di perguruan tinggi mitra",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik"
      ],
      en: [
        "Indigenous Papua (OAP) proven by traditional certificate",
        "Active S1/S2 student at partner higher education institutions",
        "From low-income family background or possesses academic records"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://papua.go.id/",
    description: {
      id: "Bantuan sosial pendidikan dari Pemerintah Provinsi Papua untuk meningkatkan indeks pembangunan manusia bagi pemuda OAP.",
      en: "Educational social assistance from Papua Provincial Government to elevate the human development index for indigenous OAP students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Papua",
        "OAP"
      ],
      en: [
        "Government",
        "Domestic",
        "Papua",
        "OAP"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-pekanbaru",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Kota Pekanbaru (Pekanbaru Cerdas)",
      en: "Pekanbaru City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Pekanbaru",
      en: "City Government of Pekanbaru"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan UKT per semester",
        "Pelatihan pengembangan karir dari Pemkot"
      ],
      en: [
        "Semester tuition fee grant support",
        "Career development training by City Government"
      ]
    },
    requirements: {
      id: [
        "Memiliki KTP/KK asli Kota Pekanbaru",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik unggul"
      ],
      en: [
        "Possess native Pekanbaru City ID/Family Card",
        "Active S1 student at accredited universities",
        "From low-income background or possesses outstanding academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-07-25",
    applicationUrl: "https://pekanbaru.go.id/",
    description: {
      id: "Program beasiswa stimulan dari Pemerintah Kota Pekanbaru untuk mendukung pemerataan akses pendidikan tinggi bagi pemuda daerah.",
      en: "Stimulus scholarship program by Pekanbaru City Government to support higher education accessibility for local youth."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Pekanbaru",
        "Riau"
      ],
      en: [
        "Government",
        "Domestic",
        "Pekanbaru",
        "Riau"
      ]
    }
  },
  {
    id: "ntu-nanyang-singapore",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Nanyang NTU (Singapura)",
      en: "NTU Nanyang Scholarship (Singapore)"
    },
    provider: {
      id: "Nanyang Technological University (NTU)",
      en: "Nanyang Technological University (NTU)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100% program Sarjana",
        "Tunjangan biaya hidup tahunan senilai SGD 6.000",
        "Bantuan biaya akomodasi tempat tinggal tahunan senilai SGD 2.000"
      ],
      en: [
        "100% tuition fees coverage for Bachelor's program",
        "Annual living allowance worth SGD 6,000",
        "Annual housing accommodation allowance worth SGD 2,000"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang berencana menempuh program sarjana di NTU",
        "Prestasi akademik luar biasa dengan kualitas kepemimpinan kuat",
        "Menyertakan hasil tes masuk akademik berstandar internasional"
      ],
      en: [
        "International students planning to pursue an undergraduate degree at NTU",
        "Outstanding academic records with strong leadership qualities",
        "Submit standardized international academic test results"
      ]
    },
    status: 'soon',
    deadline: "2026-12-15",
    applicationUrl: "https://www.ntu.edu.sg/",
    description: {
      id: "Beasiswa sarjana penuh paling kompetitif dari NTU Singapura untuk mencetak pemimpin masa depan di bidang teknologi dan sains.",
      en: "NTU Singapore's highly competitive full undergraduate scholarship designed to groom future tech and science global leaders."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Singapura",
        "Teknologi"
      ],
      en: [
        "University",
        "Overseas",
        "Singapore",
        "Technology"
      ]
    }
  },
  {
    id: "manchester-great-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa GREAT Universitas Manchester (Inggris)",
      en: "University of Manchester GREAT Scholarship"
    },
    provider: {
      id: "University of Manchester & British Council",
      en: "University of Manchester & British Council"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Tunjangan dana biaya kuliah senilai GBP 10.000",
        "Akses jaringan eksklusif alumni GREAT dari British Council"
      ],
      en: [
        "Tuition fee financial assistance worth GBP 10,000",
        "Access to exclusive British Council GREAT alumni network"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia (pemegang paspor Indonesia)",
        "Diterima penuh waktu di program Master pascasarjana di Manchester",
        "Menunjukkan rekam kontribusi dan kemauan mempromosikan hubungan UK-Indonesia"
      ],
      en: [
        "Citizen of Indonesia (holding an Indonesian passport)",
        "Admitted to a full-time postgraduate Master's program at Manchester",
        "Demonstrate records of contribution and willingness to promote UK-Indonesia ties"
      ]
    },
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://www.manchester.ac.uk/",
    description: {
      id: "Beasiswa kemitraan dari British Council dan Manchester untuk mendukung mahasiswa Indonesia menempuh Magister di UK.",
      en: "Partnership scholarship by British Council and Manchester supporting Indonesian candidates to pursue Master's studies in the UK."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "British Council"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "British Council"
      ]
    }
  },
  {
    id: "mcgill-mccall-macbain-canada",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kepemimpinan McCall MacBain Universitas McGill",
      en: "McGill University McCall MacBain Scholarships"
    },
    provider: {
      id: "McCall MacBain Foundation & McGill University",
      en: "McCall MacBain Foundation & McGill University"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100% program Magister",
        "Tunjangan biaya hidup bulanan senilai CAD 2.000",
        "Program bimbingan kepemimpinan eksklusif tingkat global"
      ],
      en: [
        "100% tuition fees coverage for Master's program",
        "Monthly living stipend allowance worth CAD 2,000",
        "Exclusive global mentorship and leadership training programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional dengan rekam jejak kepemimpinan sosial yang luar biasa",
        "Telah memiliki gelar Sarjana atau berada di tahun terakhir kuliah S1",
        "Lolos seleksi masuk akademik program Master McGill yang dipilih"
      ],
      en: [
        "International students demonstrating exceptional social leadership and community records",
        "Hold a Bachelor's degree or be in the final year of S1",
        "Pass the academic admission to the chosen McGill Master's program"
      ]
    },
    status: 'soon',
    deadline: "2026-08-25",
    applicationUrl: "https://www.mcgill.ca/",
    description: {
      id: "Beasiswa kepemimpinan penuh dari McGill untuk mendidik calon pemimpin yang berdedikasi menciptakan dampak sosial bagi masyarakat.",
      en: "Fully funded leadership-based scholarship by McGill University to support future change-makers committed to social impact."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Kanada",
        "Kepemimpinan"
      ],
      en: [
        "University",
        "Overseas",
        "Canada",
        "Leadership"
      ]
    }
  },
  {
    id: "kth-india-indonesia-sweden",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan KTH untuk Mahasiswa Indonesia (Swedia)",
      en: "KTH Royal Institute of Technology India/Indonesia Scholarship"
    },
    provider: {
      id: "KTH Royal Institute of Technology, Swedia",
      en: "KTH Royal Institute of Technology, Sweden"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100% program Master sains/teknologi",
        "Dukungan relokasi tempat tinggal dan asuransi kesehatan komprehensif"
      ],
      en: [
        "100% tuition fee waiver for STEM Master's programs",
        "Relocation assistance support and comprehensive health insurance"
      ]
    },
    requirements: {
      id: [
        "Warga negara Indonesia yang mendaftar ke salah satu program MSc di KTH",
        "Menunjukkan prestasi akademis luar biasa dengan IPK sarjana tinggi",
        "Memiliki sertifikat kemampuan bahasa Inggris (TOEFL/IELTS) yang valid"
      ],
      en: [
        "Citizen of Indonesia applying to one of the MSc programs at KTH",
        "Outstanding academic records with high undergraduate GPA",
        "Valid English proficiency certificate (TOEFL/IELTS)"
      ]
    },
    status: 'open',
    deadline: "2026-07-15",
    applicationUrl: "https://www.kth.se/en",
    description: {
      id: "Beasiswa prestasi penuh dari KTH Swedia khusus untuk mendanai studi pascasarjana mahasiswa berbakat dari Indonesia.",
      en: "Full academic merit scholarship by KTH Sweden designed specifically to support talented Indonesian graduate candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swedia",
        "Teknologi",
        "STEM"
      ],
      en: [
        "University",
        "Overseas",
        "Sweden",
        "Technology",
        "STEM"
      ]
    }
  },
  {
    id: "anu-chancellors-australia",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kanselir Internasional Universitas Nasional Australia",
      en: "Australian National University Chancellor's International Scholarship"
    },
    provider: {
      id: "Australian National University (ANU)",
      en: "Australian National University (ANU)"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi pengurangan biaya kuliah mulai dari 25% hingga 50%",
        "Akses ke jejaring akademis kanselir internasional ANU"
      ],
      en: [
        "Tuition fee waiver reductions ranging from 25% to 50%",
        "Access to ANU chancellor's international academic network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang berencana menempuh studi sarjana atau pascasarjana di ANU",
        "Memiliki prestasi akademis yang luar biasa di sekolah/universitas sebelumnya",
        "Memenuhi persyaratan masuk akademik program studi pilihan di ANU"
      ],
      en: [
        "International students planning to study undergraduate or postgraduate courses at ANU",
        "Outstanding academic records in previous school/university studies",
        "Meet ANU academic admission requirements for the chosen course"
      ]
    },
    status: 'open',
    deadline: "2026-10-15",
    applicationUrl: "https://www.anu.edu.au/",
    description: {
      id: "Beasiswa prestasi kanselir ANU untuk membantu meringankan biaya pendidikan bagi mahasiswa internasional terbaik dunia.",
      en: "ANU Chancellor's merit-based tuition fee reduction scholarship supporting outstanding international candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Australia",
        "Kanselir"
      ],
      en: [
        "University",
        "Overseas",
        "Australia",
        "Chancellor"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-mojokerto",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Mojokerto (Mojokerto Cerdas)",
      en: "Mojokerto Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Mojokerto",
      en: "Regency Government of Mojokerto"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT semesteran stimulan",
        "Bantuan dana penunjang skripsi akhir"
      ],
      en: [
        "Semester tuition fee stimulus support",
        "Final thesis writing financial support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Mojokerto (KTP/KK Mojokerto)",
        "Mahasiswa S1 aktif di perguruan tinggi mitra terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik tinggi"
      ],
      en: [
        "Native resident of Mojokerto Regency (Mojokerto ID/Family Card)",
        "Active S1 student at accredited partner universities",
        "From low-income background or possesses high academic records"
      ]
    },
    status: 'open',
    deadline: "2026-08-30",
    applicationUrl: "https://mojokertokab.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkab Mojokerto untuk menyokong pendidikan tinggi mahasiswa daerah.",
      en: "Tuition fee financial assistance program by Mojokerto Regency Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Mojokerto",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Mojokerto",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-sidoarjo",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Sidoarjo (Sidoarjo Gemilang)",
      en: "Sidoarjo Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Sidoarjo",
      en: "Regency Government of Sidoarjo"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT per semester",
        "Pelatihan kewirausahaan dari dinas koperasi"
      ],
      en: [
        "Tuition fee grant support per semester",
        "Entrepreneurship training by cooperative office"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Sidoarjo dibuktikan dengan KTP/KK Sidoarjo",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik atau menyertakan piagam non-akademik"
      ],
      en: [
        "Native resident of Sidoarjo Regency (Sidoarjo ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "Minimum GPA of 3.00 for academic track or provide non-academic awards"
      ]
    },
    status: 'soon',
    deadline: "2026-09-15",
    applicationUrl: "https://sidoarjokab.go.id/",
    description: {
      id: "Bantuan sosial dana pendidikan tinggi dari Pemkab Sidoarjo untuk mendorong peningkatan SDM pemuda daerah.",
      en: "Educational social financial support from Sidoarjo Regency Government to elevate the quality of local human resources."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sidoarjo",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Sidoarjo",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-pasuruan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Pasuruan (Pasuruan Cerdas)",
      en: "Pasuruan Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Pasuruan",
      en: "Regency Government of Pasuruan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT tahunan",
        "Bantuan biaya hidup bulanan stimulan"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Stimulus monthly living cost assistance"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Pasuruan (KTP/KK Pasuruan)",
        "Mahasiswa aktif di universitas negeri/swasta terakreditasi minimal B",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi tahfidz Quran"
      ],
      en: [
        "Native resident of Pasuruan Regency (Pasuruan ID/Family Card)",
        "Active student at accredited state or private universities (min. B)",
        "From low-income background or possesses tahfidz Quran achievements"
      ]
    },
    status: 'open',
    deadline: "2026-08-20",
    applicationUrl: "https://pasuruankab.go.id/",
    description: {
      id: "Program beasiswa bantuan pendidikan tinggi dari Pemkab Pasuruan untuk mendukung pemerataan pendidikan bagi keluarga prasejahtera.",
      en: "Higher education financial assistance program by Pasuruan Regency Government supporting underprivileged families."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Pasuruan",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Pasuruan",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-blitar",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Blitar (Blitar Cerdas)",
      en: "Blitar Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Blitar",
      en: "Regency Government of Blitar"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT per semester stimulan",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee stimulus grant support",
        "Thesis writing financial assistance"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Blitar (KTP/KK Blitar)",
        "Mahasiswa aktif S1 di universitas negeri atau swasta terakreditasi",
        "IPK minimal 3.00 untuk sains/teknologi atau 3.20 untuk ilmu sosial"
      ],
      en: [
        "Native resident of Blitar Regency (Blitar ID/Family Card)",
        "Active S1 student at accredited state or private universities",
        "Minimum GPA of 3.00 for science or 3.20 for social studies"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://blitarkab.go.id/",
    description: {
      id: "Bantuan stimulan biaya kuliah dari Pemerintah Kabupaten Blitar untuk mendorong prestasi akademis putra-putri daerah.",
      en: "Tuition fee stimulus financial assistance from Blitar Regency Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Blitar",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Blitar",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-kediri",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Kediri (Kediri Cerdas)",
      en: "Kediri Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Kediri",
      en: "Regency Government of Kediri"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah SPP/UKT per semester",
        "Bantuan dana penunjang buku dan tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Book and thesis research financial support"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Kediri (KTP/KK Kediri)",
        "Mahasiswa aktif program sarjana di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi olahraga/seni"
      ],
      en: [
        "Native resident of Kediri Regency (Kediri ID/Family Card)",
        "Active undergraduate student at accredited universities",
        "From low-income background or possesses athletic/artistic records"
      ]
    },
    status: 'open',
    deadline: "2026-07-25",
    applicationUrl: "https://kedirikab.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkab Kediri untuk mendorong wajib belajar pendidikan tinggi.",
      en: "Tuition fee financial assistance scholarship by Kediri Regency Government promoting higher education enrollments."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kediri",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Kediri",
        "East Java"
      ]
    }
  },
  {
    id: "ubc-leader-tomorrow-canada",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kepemimpinan Karen McKellin UBC (Kanada)",
      en: "UBC Karen McKellin International Leader of Tomorrow Award"
    },
    provider: {
      id: "University of British Columbia (UBC)",
      en: "University of British Columbia (UBC)"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh program sarjana (S1)",
        "Tunjangan biaya hidup tahunan disesuaikan dengan kebutuhan keuangan",
        "Asuransi kesehatan komprehensif mahasiswa asing"
      ],
      en: [
        "Full tuition fees coverage for undergraduate program",
        "Annual living allowance tailored to financial need requirements",
        "Comprehensive international student health insurance"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang berencana menempuh program sarjana (S1) pertama di UBC",
        "Menunjukkan prestasi akademis luar biasa dengan kualitas kepemimpinan sosial",
        "Direkomendasikan oleh sekolah menengah asal"
      ],
      en: [
        "International student applying for their first undergraduate degree at UBC",
        "Outstanding academic record with proven social leadership records",
        "Official recommendation from previous high school"
      ]
    },
    status: 'soon',
    deadline: "2026-11-15",
    applicationUrl: "https://www.ubc.ca/",
    description: {
      id: "Beasiswa prestasi berbasis kepemimpinan penuh dari UBC Kanada untuk mendidik agen perubahan sosial masa depan tingkat global.",
      en: "Highly prestigious undergraduate leadership scholarship by UBC Canada supporting outstanding global students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Kanada",
        "Kepemimpinan"
      ],
      en: [
        "University",
        "Overseas",
        "Canada",
        "Leadership"
      ]
    }
  },
  {
    id: "bristol-think-big-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Think Big Universitas Bristol (Inggris)",
      en: "University of Bristol Think Big Scholarships"
    },
    provider: {
      id: "University of Bristol, Inggris",
      en: "University of Bristol, UK"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari GBP 6.500 hingga GBP 26.000 per tahun",
        "Akses ke program pendampingan pengembangan karir"
      ],
      en: [
        "Tuition fee waiver reductions ranging from GBP 6,500 to GBP 26,000 annually",
        "Access to career development and mentorship programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional (non-UK) yang mendaftar ke program sarjana atau pascasarjana penuh waktu di Bristol",
        "Menunjukkan motivasi tinggi dan kontribusi positif bagi universitas setelah lulus",
        "Memenuhi persyaratan masuk akademik program studi pilihan"
      ],
      en: [
        "International (non-UK) student applying for full-time undergraduate or postgraduate study at Bristol",
        "Demonstrate strong motivation and potential positive contributions upon graduation",
        "Meet academic entry requirements for the chosen course"
      ]
    },
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://www.bristol.ac.uk/",
    description: {
      id: "Beasiswa bantuan dana biaya pendidikan dari Universitas Bristol Inggris untuk mendanai studi calon ilmuwan internasional terbaik.",
      en: "Tuition fee waiver scholarship by the University of Bristol supporting talented international candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Think Big"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Think Big"
      ]
    }
  },
  {
    id: "amsterdam-merit-netherlands",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Merit Universitas Amsterdam (Belanda)",
      en: "University of Amsterdam Merit Scholarship (AMS)"
    },
    provider: {
      id: "University of Amsterdam (UvA)",
      en: "University of Amsterdam (UvA)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh program Magister",
        "Tunjangan biaya hidup tahunan disesuaikan",
        "Asuransi kesehatan lengkap mahasiswa asing"
      ],
      en: [
        "Full tuition fees coverage for Master's program",
        "Tailored annual living allowance support",
        "Comprehensive international student medical insurance"
      ]
    },
    requirements: {
      id: [
        "Berasal dari luar wilayah Uni Eropa (non-EU/EEA)",
        "Diterima penuh waktu di salah satu program Master di UvA",
        "IPK di atas 3.75 skala 4.00 atau setara dengan predikat magna cum laude"
      ],
      en: [
        "Non-EU/EEA international student applicant",
        "Admitted to a full-time Master's program at UvA",
        "GPA above 3.75 on a 4.00 scale or equivalent magna cum laude record"
      ]
    },
    status: 'closed',
    deadline: "2026-01-15",
    applicationUrl: "https://www.uva.nl/en",
    description: {
      id: "Beasiswa prestasi pascasarjana penuh dari Universitas Amsterdam untuk menarik calon ilmuwan terbaik dunia ke Belanda.",
      en: "Highly prestigious graduate merit scholarship by the University of Amsterdam supporting top-tier international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belanda",
        "Riset"
      ],
      en: [
        "University",
        "Overseas",
        "Netherlands",
        "Research"
      ]
    }
  },
  {
    id: "utrecht-excellence-netherlands",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan Universitas Utrecht (Belanda)",
      en: "Utrecht University Excellence Scholarship"
    },
    provider: {
      id: "Utrecht University, Belanda",
      en: "Utrecht University, Netherlands"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh program Master",
        "Tunjangan hidup tahunan hingga EUR 11.000 sebagai tambahan biaya hidup"
      ],
      en: [
        "Full tuition fees coverage for Master's studies",
        "Annual living stipend worth up to EUR 11,000 for supplementary support"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-EU/EEA yang mendaftar ke program Master internasional di Utrecht",
        "Menunjukkan prestasi akademis luar biasa (berada di 10% lulusan terbaik sekolah asal)",
        "Kemampuan bahasa Inggris tinggi (IELTS/TOEFL)"
      ],
      en: [
        "Non-EU/EEA citizens applying for international Master's programs at Utrecht",
        "Exceptional academic performance records (within top 10% of previous graduating class)",
        "High English language proficiency (IELTS/TOEFL)"
      ]
    },
    status: 'closed',
    deadline: "2026-02-01",
    applicationUrl: "https://www.uu.nl/en",
    description: {
      id: "Beasiswa prestasi unggulan dari Universitas Utrecht untuk membantu mendanai studi pascasarjana mahasiswa asing berprestasi.",
      en: "Utrecht University's highly selective postgraduate scholarship program for outstanding international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belanda",
        "Unggulan"
      ],
      en: [
        "University",
        "Overseas",
        "Netherlands",
        "Excellence"
      ]
    }
  },
  {
    id: "radboud-scholarship-netherlands",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana Universitas Radboud (Belanda)",
      en: "Radboud University Scholarship Programme"
    },
    provider: {
      id: "Radboud University, Belanda",
      en: "Radboud University, Netherlands"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah yang signifikan (hanya membayar biaya kuliah EU)",
        "Subsidi biaya visa, izin tinggal, dan asuransi kesehatan"
      ],
      en: [
        "Significant tuition fee reduction (pay EU student rates only)",
        "Visa cost, residence permit fee, and health insurance subsidies"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-EU/EEA yang mendaftar program Master diajarkan dalam bahasa Inggris di Radboud",
        "Menunjukkan prestasi akademis sarjana yang luar biasa",
        "Memenuhi persyaratan visa pelajar Belanda"
      ],
      en: [
        "Non-EU/EEA student applying to English-taught Master's courses at Radboud",
        "Outstanding academic records in previous undergraduate studies",
        "Meet Dutch study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-03-01",
    applicationUrl: "https://www.ru.nl/en",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Universitas Radboud untuk mempermudah akses mahasiswa internasional berprestasi.",
      en: "Tuition fee reduction scholarship program by Radboud University supporting talented international graduate students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belanda",
        "Keringanan"
      ],
      en: [
        "University",
        "Overseas",
        "Netherlands",
        "Waiver"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-kalteng",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Kalimantan Tengah (Kalteng Berkah)",
      en: "Central Kalimantan Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Kalimantan Tengah",
      en: "Provincial Government of Central Kalimantan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi bantuan dana pendidikan SPP/UKT per semester",
        "Bantuan biaya hidup stimulan bagi mahasiswa kurang mampu"
      ],
      en: [
        "Semester tuition fee subsidy grant support",
        "Stimulus living cost assistance for underprivileged students"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kalimantan Tengah dibuktikan dengan KTP/KK Kalteng",
        "Mahasiswa aktif sarjana (S1) di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik"
      ],
      en: [
        "Native resident of Central Kalimantan (Kalteng ID/Family Card)",
        "Active S1 student at accredited universities",
        "From low-income background or possesses academic records"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://kalteng.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemprov Kalteng untuk membantu meringankan beban pendidikan mahasiswa daerah.",
      en: "Tuition fee financial assistance program by Central Kalimantan Provincial Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kalteng",
        "Kalimantan"
      ],
      en: [
        "Government",
        "Domestic",
        "Kalteng",
        "Kalimantan"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-kalbar",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Kalimantan Barat (Kalbar Cerdas)",
      en: "West Kalimantan Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Kalimantan Barat",
      en: "Provincial Government of West Kalimantan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya riset tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research drafting financial grant"
      ]
    },
    requirements: {
      id: [
        "Warga asli Provinsi Kalimantan Barat (KTP/KK Kalbar)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "IPK minimal 3.00 untuk sains/teknologi atau 3.20 untuk rumpun sosial"
      ],
      en: [
        "Native resident of West Kalimantan Province (Kalbar ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "Minimum GPA of 3.00 for science or 3.20 for social studies"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://kalbarprov.go.id/",
    description: {
      id: "Bantuan dana pendidikan tinggi dari Pemprov Kalbar untuk mencetak sumber daya manusia unggul daerah.",
      en: "Higher education financial assistance from West Kalimantan Provincial Government to elevate local human resources."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kalbar",
        "Kalimantan"
      ],
      en: [
        "Government",
        "Domestic",
        "Kalbar",
        "Kalimantan"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-sulsel",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Sulawesi Selatan (Sulsel Cerdas)",
      en: "South Sulawesi Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Sulawesi Selatan",
      en: "Provincial Government of South Sulawesi"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan UKT/SPP semesteran",
        "Bantuan dana penunjang buku/riset tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Book and thesis research financial support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Sulawesi Selatan dibuktikan dengan KK/KTP Sulsel",
        "Mahasiswa aktif S1/S2 di perguruan tinggi negeri maupun swasta",
        "IPK minimal 3.00 untuk sains/teknologi atau 3.25 untuk rumpun sosial"
      ],
      en: [
        "Native resident of South Sulawesi Province (Sulsel ID/Family Card)",
        "Active S1/S2 student at state or private universities",
        "Minimum GPA of 3.00 for science or 3.25 for social studies"
      ]
    },
    status: 'open',
    deadline: "2026-07-30",
    applicationUrl: "https://sulselprov.go.id/",
    description: {
      id: "Bantuan stimulan biaya pendidikan tinggi dari Pemprov Sulsel untuk memajukan kualitas akademis mahasiswa berprestasi daerah.",
      en: "Higher education financial assistance stimulus from South Sulawesi Government to elevate the academic achievements of local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sulsel",
        "Sulawesi"
      ],
      en: [
        "Government",
        "Domestic",
        "Sulsel",
        "Sulawesi"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-sulut",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Sulawesi Utara (Sulut Cerdas)",
      en: "North Sulawesi Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Sulawesi Utara",
      en: "Provincial Government of North Sulawesi"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research writing grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Provinsi Sulawesi Utara (KTP/KK Sulut)",
        "Mahasiswa aktif perguruan tinggi negeri/swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of North Sulawesi Province (Sulut ID/Family Card)",
        "Active student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://sulutprov.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemprov Sulut untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Sulut Provincial Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sulut",
        "Sulawesi"
      ],
      en: [
        "Government",
        "Domestic",
        "Sulut",
        "Sulawesi"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-bali",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemerintah Provinsi Bali (Bali Dwipa)",
      en: "Bali Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Bali",
      en: "Provincial Government of Bali"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah SPP/UKT tahunan",
        "Uang saku penunjang riset kebudayaan daerah"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Stipend support for local cultural research"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Provinsi Bali dibuktikan dengan KTP/KK Bali",
        "Mahasiswa aktif program sarjana di universitas mitra terakreditasi",
        "IPK minimal 3.00 atau memiliki prestasi non-akademik di bidang seni/budaya Bali"
      ],
      en: [
        "Native resident of Bali Province (Bali ID/Family Card)",
        "Active undergraduate student at accredited partner universities",
        "Minimum GPA of 3.00 or possess non-academic records in Balinese art/culture"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://baliprov.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemprov Bali untuk mendukung mahasiswa berprestasi akademis dan pelestari budaya Bali.",
      en: "Tuition fee financial assistance scholarship by Bali Provincial Government supporting outstanding students and cultural preservationists."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Bali",
        "Dewata"
      ],
      en: [
        "Government",
        "Domestic",
        "Bali",
        "Dewata"
      ]
    }
  },
  {
    id: "leiden-excellence-netherlands",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan LExS Universitas Leiden (Belanda)",
      en: "Leiden University Excellence Scholarship (LExS)"
    },
    provider: {
      id: "Leiden University, Belanda",
      en: "Leiden University, Netherlands"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari EUR 10.000 hingga EUR 15.000 per tahun",
        "Akses ke program bimbingan kepemimpinan LExS"
      ],
      en: [
        "Tuition fee waiver reductions ranging from EUR 10,000 to EUR 15,000 annually",
        "Access to exclusive LExS leadership and mentorship programs"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-EU/EEA yang mendaftar ke program Master internasional di Leiden",
        "Menunjukkan prestasi akademis sarjana yang luar biasa (lulusan terbaik di kelasnya)",
        "Memenuhi persyaratan masuk akademik program studi pilihan"
      ],
      en: [
        "Non-EU/EEA citizens applying for international Master's programs at Leiden",
        "Exceptional academic performance records in previous studies (top-tier in previous class)",
        "Meet academic entry requirements for the chosen course"
      ]
    },
    status: 'closed',
    deadline: "2026-02-01",
    applicationUrl: "https://www.universiteitleiden.nl/en",
    description: {
      id: "Beasiswa keringanan biaya kuliah pascasarjana dari Universitas Leiden untuk mendanai studi mahasiswa asing berprestasi tinggi.",
      en: "Leiden University's highly selective postgraduate scholarship program supporting outstanding international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belanda",
        "Unggulan"
      ],
      en: [
        "University",
        "Overseas",
        "Netherlands",
        "Excellence"
      ]
    }
  },
  {
    id: "ghent-master-mind-belgium",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Master Mind Universitas Ghent (Belgia)",
      en: "Ghent University Master Mind Scholarships"
    },
    provider: {
      id: "Ghent University & Pemerintah Flanders, Belgia",
      en: "Ghent University & Government of Flanders, Belgium"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh program Master",
        "Tunjangan biaya hidup tahunan senilai EUR 10.000",
        "Asuransi kesehatan lengkap gratis selama masa studi"
      ],
      en: [
        "Full tuition fees coverage for Master's program",
        "Annual living stipend worth EUR 10,000",
        "Free comprehensive health insurance support during study"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional berprestasi akademik luar biasa (IPK sarjana tinggi setara di atas 3.50 skala 4.00)",
        "Diterima penuh waktu di program Master di Universitas Ghent",
        "Kemampuan bahasa Inggris tinggi (IELTS minimal 7.0 atau TOEFL iBT minimal 94)"
      ],
      en: [
        "International students demonstrating highest academic excellence (undergraduate GPA above 3.50 on a 4.00 scale)",
        "Admitted to a full-time Master's program at Ghent University",
        "High English language proficiency certificate (IELTS min. 7.0 or TOEFL iBT min. 94)"
      ]
    },
    status: 'closed',
    deadline: "2026-04-30",
    applicationUrl: "https://www.ugent.be/en",
    description: {
      id: "Beasiswa pascasarjana penuh dari Pemerintah Flanders Belgia dan Universitas Ghent untuk mendanai studi peneliti internasional berbakat.",
      en: "Highly prestigious Master Mind graduate scholarship by Ghent University and the Flemish Government supporting global candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belgia",
        "Master Mind"
      ],
      en: [
        "University",
        "Overseas",
        "Belgium",
        "Master Mind"
      ]
    }
  },
  {
    id: "kuleuven-science-belgium",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana Sains KU Leuven (Belgia)",
      en: "KU Leuven Science Graduate Scholarships"
    },
    provider: {
      id: "KU Leuven, Belgia",
      en: "KU Leuven, Belgium"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana biaya kuliah tahunan hingga EUR 10.000",
        "Akses jaringan laboratorium riset internasional sains"
      ],
      en: [
        "Tuition fee waiver financial support worth up to EUR 10,000 annually",
        "Access to international science research laboratories network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar ke salah satu program MSc di Fakultas Sains KU Leuven",
        "Menunjukkan prestasi akademis luar biasa dengan IPK sarjana tinggi",
        "Memiliki sertifikat kemampuan bahasa Inggris (TOEFL/IELTS) yang valid"
      ],
      en: [
        "International student applying for an MSc program at the Faculty of Science, KU Leuven",
        "Outstanding academic records with high undergraduate GPA",
        "Valid English proficiency certificate (TOEFL/IELTS)"
      ]
    },
    status: 'open',
    deadline: "2026-07-15",
    applicationUrl: "https://www.kuleuven.be/english",
    description: {
      id: "Beasiswa prestasi parsial dari KU Leuven Belgia khusus untuk mendanai studi pascasarjana mahasiswa berbakat di bidang sains.",
      en: "Academic merit scholarship by KU Leuven Belgium designed specifically to support talented international science graduate candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Belgia",
        "Sains",
        "STEM"
      ],
      en: [
        "University",
        "Overseas",
        "Belgium",
        "Science",
        "STEM"
      ]
    }
  },
  {
    id: "chalmers-ipoet-sweden",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa IPOET Universitas Teknologi Chalmers (Swedia)",
      en: "Chalmers University of Technology IPOET Scholarships"
    },
    provider: {
      id: "Chalmers University of Technology, Swedia",
      en: "Chalmers University of Technology, Sweden"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan 75% biaya kuliah program Master sains/teknologi",
        "Peningkatan pengurangan menjadi 85% untuk mahasiswa berprestasi tahun kedua"
      ],
      en: [
        "75% tuition fee waiver reduction for STEM Master's programs",
        "Increased reduction to 85% for high-performing students in the second year"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-EU/EEA yang mendaftar program Master penuh waktu di Chalmers",
        "Menunjukkan prestasi akademis sarjana yang luar biasa",
        "Kemampuan bahasa Inggris tinggi (IELTS/TOEFL)"
      ],
      en: [
        "Non-EU/EEA citizens applying for a full-time Master's program at Chalmers",
        "Exceptional academic performance records in previous undergraduate studies",
        "High English language proficiency (IELTS/TOEFL)"
      ]
    },
    status: 'closed',
    deadline: "2026-01-15",
    applicationUrl: "https://www.chalmers.se/en",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Chalmers Swedia untuk mendanai studi pascasarjana mahasiswa asing berprestasi di bidang STEM.",
      en: "Chalmers University's highly selective tuition fee reduction scholarship program for outstanding international STEM students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swedia",
        "Teknologi",
        "STEM"
      ],
      en: [
        "University",
        "Overseas",
        "Sweden",
        "Technology",
        "STEM"
      ]
    }
  },
  {
    id: "linkoping-scholarship-sweden",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Prestasi Universitas Linköping (Swedia)",
      en: "Linköping University Scholarship"
    },
    provider: {
      id: "Linköping University, Swedia",
      en: "Linköping University, Sweden"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari 50% hingga 75% program Master",
        "Akses jaringan pendampingan akademik mahasiswa asing"
      ],
      en: [
        "Tuition fee waiver reductions ranging from 50% to 75% for Master's studies",
        "Access to international student academic support network"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-EU/EEA yang mendaftar program Master internasional di Linköping",
        "Menunjukkan prestasi akademis sarjana yang luar biasa",
        "Memenuhi persyaratan visa pelajar Swedia"
      ],
      en: [
        "Non-EU/EEA citizens applying for international Master's programs at Linköping",
        "Exceptional academic performance records in previous undergraduate studies",
        "Meet Swedish study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-02-01",
    applicationUrl: "https://liu.se/en",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Universitas Linköping untuk mempermudah akses mahasiswa internasional berprestasi.",
      en: "Tuition fee reduction scholarship program by Linköping University supporting talented international graduate students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swedia",
        "Keringanan"
      ],
      en: [
        "University",
        "Overseas",
        "Sweden",
        "Waiver"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-ntb",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Nusa Tenggara Barat (NTB Gemilang)",
      en: "West Nusa Tenggara Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Nusa Tenggara Barat",
      en: "Provincial Government of West Nusa Tenggara"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya hidup stimulan bagi mahasiswa berprestasi daerah"
      ],
      en: [
        "Semester tuition fee subsidy grant support",
        "Stimulus living cost assistance for local students"
      ]
    },
    requirements: {
      id: [
        "Warga asli Nusa Tenggara Barat dibuktikan dengan KTP/KK NTB",
        "Mahasiswa aktif sarjana (S1) di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik"
      ],
      en: [
        "Native resident of West Nusa Tenggara (NTB ID/Family Card)",
        "Active S1 student at accredited universities",
        "From low-income background or possesses academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://ntbprov.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemprov NTB untuk mendukung pemerataan pendidikan tinggi putra-putri daerah.",
      en: "Tuition fee financial assistance program by West Nusa Tenggara Provincial Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "NTB",
        "Lombok"
      ],
      en: [
        "Government",
        "Domestic",
        "NTB",
        "Lombok"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-ntt",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Nusa Tenggara Timur (NTT Bangkit)",
      en: "East Nusa Tenggara Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Nusa Tenggara Timur",
      en: "Provincial Government of East Nusa Tenggara"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya riset tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research drafting financial grant"
      ]
    },
    requirements: {
      id: [
        "Warga asli Provinsi Nusa Tenggara Timur (KTP/KK NTT)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of East Nusa Tenggara Province (NTT ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://nttprov.go.id/",
    description: {
      id: "Bantuan dana pendidikan tinggi dari Pemprov NTT untuk mencetak sumber daya manusia unggul daerah.",
      en: "Higher education financial assistance from East Nusa Tenggara Provincial Government to elevate local human resources."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "NTT",
        "Kupang"
      ],
      en: [
        "Government",
        "Domestic",
        "NTT",
        "Kupang"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-maluku",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Maluku (Maluku Cerdas)",
      en: "Maluku Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Maluku",
      en: "Provincial Government of Maluku"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan UKT/SPP semesteran",
        "Bantuan dana penunjang tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Thesis research financial support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Maluku dibuktikan dengan KK/KTP Maluku",
        "Mahasiswa aktif S1 di perguruan tinggi negeri maupun swasta",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Maluku Province (Maluku ID/Family Card)",
        "Active S1 student at state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-07-30",
    applicationUrl: "https://malukuprov.go.id/",
    description: {
      id: "Bantuan stimulan biaya pendidikan tinggi dari Pemprov Maluku untuk memajukan kualitas akademis mahasiswa berprestasi daerah.",
      en: "Higher education financial assistance stimulus from Maluku Government to elevate the academic achievements of local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Maluku",
        "Ambon"
      ],
      en: [
        "Government",
        "Domestic",
        "Maluku",
        "Ambon"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-malut",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Maluku Utara (Malut Pintar)",
      en: "North Maluku Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Maluku Utara",
      en: "Provincial Government of North Maluku"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research writing grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Provinsi Maluku Utara (KTP/KK Malut)",
        "Mahasiswa aktif perguruan tinggi negeri/swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of North Maluku Province (Malut ID/Family Card)",
        "Active student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://malutprov.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemprov Malut untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Malut Provincial Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Malut",
        "Halmahera"
      ],
      en: [
        "Government",
        "Domestic",
        "Malut",
        "Halmahera"
      ]
    }
  },
  {
    id: "beasiswa-pemprov-papuabarat",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemprov Papua Barat (Papua Barat Cerdas)",
      en: "Papua Barat Provincial Government Scholarship"
    },
    provider: {
      id: "Pemerintah Provinsi Papua Barat",
      en: "Provincial Government of Papua Barat"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah SPP/UKT tahunan",
        "Uang saku penunjang riset tugas akhir daerah"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Stipend support for final thesis research"
      ]
    },
    requirements: {
      id: [
        "Orang Asli Papua (OAP) Papua Barat dibuktikan dengan surat adat",
        "Mahasiswa aktif program sarjana/pascasarjana di universitas terakreditasi",
        "IPK minimal 2.75 atau memiliki prestasi non-akademik di bidang olah raga/seni"
      ],
      en: [
        "Indigenous Papua (OAP) of West Papua proven by custom certificate",
        "Active S1/S2 student at accredited universities",
        "Minimum GPA of 2.75 or possess non-academic records in sports/arts"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://papuabaratprov.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemprov Papua Barat untuk menyokong pendidikan tinggi mahasiswa daerah.",
      en: "Tuition fee financial assistance scholarship by Papua Barat Provincial Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Papua Barat",
        "OAP"
      ],
      en: [
        "Government",
        "Domestic",
        "Papua Barat",
        "OAP"
      ]
    }
  },
  {
    id: "oslo-summer-school-norway",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Sekolah Musim Panas Universitas Oslo (Norwegia)",
      en: "University of Oslo International Summer School Scholarship"
    },
    provider: {
      id: "University of Oslo, Norwegia",
      en: "University of Oslo, Norway"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bebas biaya pendaftaran dan biaya kuliah penuh sekolah musim panas",
        "Tunjangan akomodasi tempat tinggal gratis dan makan gratis di kampus",
        "Subsidi biaya perjalanan tiket pesawat internasional"
      ],
      en: [
        "Free registration and full tuition fees for international summer school",
        "Free room and board accommodation on campus",
        "International airfare travel expense subsidy support"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa aktif S1/S2 atau profesional muda dari negara berkembang",
        "Menunjukkan prestasi akademis sarjana yang menonjol dan kontribusi sosial",
        "Kemampuan bahasa Inggris tinggi (TOEFL/IELTS)"
      ],
      en: [
        "Active S1/S2 student or young professional from developing countries",
        "Exceptional academic record and proven records of community contribution",
        "High English language proficiency (TOEFL/IELTS)"
      ]
    },
    status: 'closed',
    deadline: "2026-02-15",
    applicationUrl: "https://www.uio.no/english/",
    description: {
      id: "Beasiswa sekolah musim panas penuh dari Universitas Oslo Norwegia untuk mempererat pertukaran budaya dan ilmu pengetahuan internasional.",
      en: "Fully funded summer school scholarship by the University of Oslo supporting international candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Norwegia",
        "Musim Panas"
      ],
      en: [
        "University",
        "Overseas",
        "Norway",
        "Summer"
      ]
    }
  },
  {
    id: "helsinki-international-finland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Internasional Universitas Helsinki (Finlandia)",
      en: "University of Helsinki International Student Scholarship"
    },
    provider: {
      id: "University of Helsinki, Finlandia",
      en: "University of Helsinki, Finland"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh 100% program Master",
        "Tunjangan biaya hidup tahunan senilai EUR 10.000",
        "Asuransi kesehatan lengkap gratis selama masa studi"
      ],
      en: [
        "100% tuition fees coverage for Master's program",
        "Annual living stipend worth EUR 10,000",
        "Free comprehensive health insurance support during study"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-EU/EEA yang mendaftar ke program Master diajarkan dalam bahasa Inggris di Helsinki",
        "Menunjukkan prestasi akademis luar biasa dengan IPK sarjana tinggi",
        "Memenuhi persyaratan visa pelajar Finlandia"
      ],
      en: [
        "Non-EU/EEA citizens applying for English-taught Master's programs at Helsinki",
        "Exceptional academic performance records with high undergraduate GPA",
        "Meet Finnish study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-01-15",
    applicationUrl: "https://www.helsinki.fi/en",
    description: {
      id: "Beasiswa pascasarjana penuh dari Universitas Helsinki Finlandia untuk menarik mahasiswa asing berprestasi tinggi.",
      en: "University of Helsinki's highly selective postgraduate scholarship program supporting outstanding international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Finlandia",
        "Unggulan"
      ],
      en: [
        "University",
        "Overseas",
        "Finland",
        "Excellence"
      ]
    }
  },
  {
    id: "aalto-scholarship-finland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Prestasi Universitas Aalto (Finlandia)",
      en: "Aalto University Scholarship"
    },
    provider: {
      id: "Aalto University, Finlandia",
      en: "Aalto University, Finland"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari 50% hingga 100% program Master",
        "Akses ke program pendampingan pengembangan karir"
      ],
      en: [
        "Tuition fee waiver reductions ranging from 50% to 100% for Master's studies",
        "Access to career development and mentorship programs"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-EU/EEA yang mendaftar program Master diajarkan dalam bahasa Inggris di Aalto",
        "Menunjukkan prestasi akademis sarjana yang luar biasa",
        "Kemampuan bahasa Inggris tinggi (IELTS/TOEFL)"
      ],
      en: [
        "Non-EU/EEA citizens applying for English-taught Master's programs at Aalto",
        "Exceptional academic performance records in previous undergraduate studies",
        "High English language proficiency (IELTS/TOEFL)"
      ]
    },
    status: 'closed',
    deadline: "2026-01-05",
    applicationUrl: "https://www.aalto.fi/en",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Universitas Aalto Finlandia untuk mendanai studi pascasarjana mahasiswa asing berprestasi.",
      en: "Aalto University's highly selective tuition fee reduction scholarship program for outstanding international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Finlandia",
        "Keringanan"
      ],
      en: [
        "University",
        "Overseas",
        "Finland",
        "Waiver"
      ]
    }
  },
  {
    id: "copenhagen-phd-denmark",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Doktoral (PhD) Universitas Kopenhagen (Denmark)",
      en: "University of Copenhagen PhD Fellowships"
    },
    provider: {
      id: "University of Copenhagen, Denmark",
      en: "University of Copenhagen, Denmark"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Gaji bulanan kompetitif penuh sebagai peneliti universitas",
        "Pembebasan biaya kuliah program PhD",
        "Asuransi kesehatan nasional dan dana riset tugas akhir"
      ],
      en: [
        "Full competitive monthly salary as a university researcher",
        "Tuition fee waiver for PhD program",
        "National health insurance and research project funding support"
      ]
    },
    requirements: {
      id: [
        "Telah menyelesaikan gelar Magister (S2) di bidang studi terkait",
        "Proposal penelitian PhD yang berstandar internasional tinggi",
        "Diterima oleh calon pembimbing akademik di Universitas Kopenhagen"
      ],
      en: [
        "Hold a Master's degree in a relevant field of study",
        "High international standard PhD research proposal",
        "Accepted by a prospective academic supervisor at Copenhagen"
      ]
    },
    status: 'open',
    deadline: "2026-08-31",
    applicationUrl: "https://www.ku.dk/english/",
    description: {
      id: "Beasiswa doktoral penuh sebagai peneliti dari Universitas Kopenhagen untuk melahirkan kontribusi sains baru bagi dunia.",
      en: "Fully funded doctoral research fellowship by the University of Copenhagen supporting outstanding international PhD candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Denmark",
        "Riset",
        "Doktoral"
      ],
      en: [
        "University",
        "Overseas",
        "Denmark",
        "Research",
        "Doctoral"
      ]
    }
  },
  {
    id: "aarhus-phd-denmark",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Doktoral (PhD) Universitas Aarhus (Denmark)",
      en: "Aarhus University PhD Fellowships"
    },
    provider: {
      id: "Aarhus University, Denmark",
      en: "Aarhus University, Denmark"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Gaji bulanan penuh peneliti doktoral",
        "Pembebasan biaya kuliah program PhD",
        "Tunjangan biaya perjalanan konferensi internasional"
      ],
      en: [
        "Full monthly researcher salary support",
        "Tuition fee waiver for PhD studies",
        "International conference travel expense allowance"
      ]
    },
    requirements: {
      id: [
        "Telah menyelesaikan gelar Magister di bidang sains/sosial terkait",
        "Proposal penelitian doktoral terperinci sesuai fokus riset universitas",
        "Kemampuan bahasa Inggris tinggi dan kesiapan riset mandiri"
      ],
      en: [
        "Hold a Master's degree in a relevant science or social field",
        "Detailed doctoral research proposal matching university focus area",
        "High English language proficiency and independent research readiness"
      ]
    },
    status: 'soon',
    deadline: "2026-09-15",
    applicationUrl: "https://international.au.dk/",
    description: {
      id: "Beasiswa riset doktoral penuh sebagai peneliti dari Universitas Aarhus Denmark untuk mendorong inovasi keilmuan global.",
      en: "Aarhus University's highly competitive fully funded PhD research fellowship supporting global doctoral candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Denmark",
        "Riset",
        "Doktoral"
      ],
      en: [
        "University",
        "Overseas",
        "Denmark",
        "Research",
        "Doctoral"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-nganjuk",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Nganjuk (Nganjuk Cerdas)",
      en: "Nganjuk Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Nganjuk",
      en: "Regency Government of Nganjuk"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan stimulan UKT semesteran",
        "Bantuan biaya hidup penunjang tugas akhir"
      ],
      en: [
        "Semester tuition fee stimulus support",
        "Living cost assistance for final thesis support"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Nganjuk (KTP/KK Nganjuk)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik"
      ],
      en: [
        "Native resident of Nganjuk Regency (Nganjuk ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "From low-income background or possesses academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-08-25",
    applicationUrl: "https://nganjukkab.go.id/",
    description: {
      id: "Bantuan stimulan dana kuliah dari Pemerintah Kabupaten Nganjuk untuk memperluas akses pendidikan tinggi putra-putri daerah.",
      en: "Tuition fee stimulus financial assistance from Nganjuk Regency Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Nganjuk",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Nganjuk",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-madiun",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Madiun (Madiun Cerdas)",
      en: "Madiun Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Madiun",
      en: "Regency Government of Madiun"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan UKT semesteran",
        "Bantuan penunjang buku kuliah tahunan"
      ],
      en: [
        "Semester tuition fee grant support",
        "Annual textbook allowance support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Madiun (KTP/KK Madiun)",
        "Mahasiswa aktif program S1 di perguruan tinggi terakreditasi minimal B",
        "IPK minimal 3.00 untuk prestasi akademik atau menyertakan sertifikat prestasi non-akademik"
      ],
      en: [
        "Native resident of Madiun Regency (Madiun ID/Family Card)",
        "Active S1 student at accredited higher education institutions (min. B)",
        "Minimum GPA of 3.00 for academic track or provide non-academic certificates"
      ]
    },
    status: 'soon',
    deadline: "2026-09-15",
    applicationUrl: "https://madiunkab.go.id/",
    description: {
      id: "Bantuan sosial dana pendidikan tinggi dari Pemkab Madiun untuk meningkatkan kualitas sumber daya manusia pemuda daerah.",
      en: "Educational social financial support from Madiun Regency Government to elevate the quality of local human resources."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Madiun",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Madiun",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-probolinggo",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Probolinggo (Probolinggo Cerdas)",
      en: "Probolinggo Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Probolinggo",
      en: "Regency Government of Probolinggo"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya hidup stimulan bagi mahasiswa berprestasi"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Stimulus living cost assistance for outstanding students"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Probolinggo dibuktikan dengan KTP/KK Probolinggo",
        "Mahasiswa aktif di universitas negeri/swasta terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi keagamaan/sains"
      ],
      en: [
        "Native resident of Probolinggo Regency (Probolinggo ID/Family Card)",
        "Active student at accredited state or private universities",
        "From low-income background or possesses religious/science achievements"
      ]
    },
    status: 'open',
    deadline: "2026-08-20",
    applicationUrl: "https://probolinggokab.go.id/",
    description: {
      id: "Program beasiswa bantuan pendidikan tinggi dari Pemkab Probolinggo untuk mendukung pemerataan pendidikan bagi keluarga prasejahtera.",
      en: "Higher education financial assistance program by Probolinggo Regency Government supporting underprivileged families."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Probolinggo",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Probolinggo",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-lumajang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Lumajang (Lumajang Cerdas)",
      en: "Lumajang Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Lumajang",
      en: "Regency Government of Lumajang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT semesteran stimulan",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee stimulus grant support",
        "Thesis writing financial assistance"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Lumajang (KTP/KK Lumajang)",
        "Mahasiswa aktif S1 di universitas negeri atau swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik atau berprestasi non-akademik"
      ],
      en: [
        "Native resident of Lumajang Regency (Lumajang ID/Family Card)",
        "Active S1 student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic track or possesses non-academic records"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://lumajangkab.go.id/",
    description: {
      id: "Bantuan stimulan biaya kuliah dari Pemerintah Kabupaten Lumajang untuk mendorong prestasi akademis putra-putri daerah.",
      en: "Tuition fee stimulus financial assistance from Lumajang Regency Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Lumajang",
        "Semeru"
      ],
      en: [
        "Government",
        "Domestic",
        "Lumajang",
        "Semeru"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-ngawi",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Ngawi (Ngawi Cerdas)",
      en: "Ngawi Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Ngawi",
      en: "Regency Government of Ngawi"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah SPP/UKT per semester",
        "Bantuan dana penunjang riset tugas akhir daerah"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Stipend support for final thesis research"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Ngawi (KTP/KK Ngawi)",
        "Mahasiswa aktif program sarjana di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik tinggi"
      ],
      en: [
        "Native resident of Ngawi Regency (Ngawi ID/Family Card)",
        "Active undergraduate student at accredited universities",
        "From low-income background or possesses high academic records"
      ]
    },
    status: 'open',
    deadline: "2026-07-25",
    applicationUrl: "https://ngawikab.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkab Ngawi untuk mendorong wajib belajar pendidikan tinggi putra-putri daerah.",
      en: "Tuition fee financial assistance scholarship by Ngawi Regency Government promoting higher education enrollments."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Ngawi",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Ngawi",
        "East Java"
      ]
    }
  },
  {
    id: "leeds-excellence-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan Internasional Universitas Leeds (Inggris)",
      en: "University of Leeds International Excellence Scholarships"
    },
    provider: {
      id: "University of Leeds, Inggris",
      en: "University of Leeds, UK"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah hingga GBP 5.000 per tahun",
        "Akses jaringan pendampingan karir eksklusif alumni Leeds"
      ],
      en: [
        "Tuition fee waiver reductions up to GBP 5,000 annually",
        "Access to exclusive Leeds career support and alumni networks"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar ke program sarjana atau pascasarjana di Leeds",
        "Menunjukkan prestasi akademis luar biasa di jenjang pendidikan sebelumnya",
        "Memenuhi persyaratan masuk akademik program studi pilihan"
      ],
      en: [
        "International student applying for undergraduate or postgraduate study at Leeds",
        "Exceptional academic performance records in previous studies",
        "Meet academic entry requirements for the chosen course"
      ]
    },
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://www.leeds.ac.uk/",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Universitas Leeds Inggris untuk mendanai studi calon mahasiswa internasional berprestasi.",
      en: "Tuition fee waiver scholarship by the University of Leeds supporting talented international candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Leeds"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Leeds"
      ]
    }
  },
  {
    id: "glasgow-leadership-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kepemimpinan Internasional Universitas Glasgow",
      en: "University of Glasgow International Leadership Scholarships"
    },
    provider: {
      id: "University of Glasgow, Inggris",
      en: "University of Glasgow, UK"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah program Master senilai GBP 10.000",
        "Keanggotaan eksklusif jaringan pemimpin muda Glasgow"
      ],
      en: [
        "Tuition fee waiver reductions worth GBP 10,000 for Master's program",
        "Exclusive membership in Glasgow young leaders network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa asing (non-UK/EU) mendaftar program MSc di Glasgow",
        "Menunjukkan prestasi akademik sarjana luar biasa setara dengan predikat cum laude",
        "Memenuhi persyaratan visa pelajar UK"
      ],
      en: [
        "Non-UK/EU international student applying for MSc programs at Glasgow",
        "Exceptional academic performance records equivalent to cum laude predicate",
        "Meet UK study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://www.gla.ac.uk/",
    description: {
      id: "Beasiswa keringanan biaya kuliah berbasis kepemimpinan dari Universitas Glasgow untuk mendukung kandidat internasional unggul.",
      en: "Leadership-based tuition fee reduction scholarship program by the University of Glasgow supporting global candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Kepemimpinan"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Leadership"
      ]
    }
  },
  {
    id: "sheffield-merit-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Merit Internasional Universitas Sheffield (Inggris)",
      en: "University of Sheffield International Undergraduate Merit Scholarship"
    },
    provider: {
      id: "University of Sheffield, Inggris",
      en: "University of Sheffield, UK"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan 50% biaya kuliah tahunan program sarjana",
        "Akses jaringan pendampingan akademik mahasiswa asing"
      ],
      en: [
        "50% tuition fee waiver reductions annually for Bachelor's studies",
        "Access to international student academic support network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar program sarjana penuh waktu di Sheffield",
        "Menunjukkan prestasi akademis luar biasa dengan sertifikat kelayakan sekolah tinggi",
        "Memenuhi syarat kemampuan bahasa Inggris"
      ],
      en: [
        "International student applying for a full-time undergraduate program at Sheffield",
        "Exceptional academic performance records in high school studies",
        "Meet English language proficiency requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-05-15",
    applicationUrl: "https://www.sheffield.ac.uk/",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Universitas Sheffield untuk mempermudah akses mahasiswa internasional berprestasi.",
      en: "Tuition fee reduction scholarship program by the University of Sheffield supporting talented international undergraduate students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Merit"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Merit"
      ]
    }
  },
  {
    id: "birmingham-global-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Global Masters Universitas Birmingham (Inggris)",
      en: "University of Birmingham Global Masters Scholarships"
    },
    provider: {
      id: "University of Birmingham, Inggris",
      en: "University of Birmingham, UK"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana biaya kuliah program Master senilai GBP 2.000",
        "Akses ke program pendampingan pengembangan karir"
      ],
      en: [
        "Tuition fee waiver financial support worth GBP 2,000 for Master's studies",
        "Access to career development and mentorship programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional (non-UK) mendaftar program Master di Birmingham",
        "IPK sarjana minimal 3.50 skala 4.00 atau setara",
        "Memenuhi persyaratan akademik program studi pilihan"
      ],
      en: [
        "International (non-UK) student applying for Master's study at Birmingham",
        "Minimum undergraduate GPA of 3.50 on a 4.00 scale or equivalent",
        "Meet academic entry requirements for the chosen course"
      ]
    },
    status: 'closed',
    deadline: "2026-05-30",
    applicationUrl: "https://www.birmingham.ac.uk/",
    description: {
      id: "Beasiswa parsial keringanan biaya kuliah dari Universitas Birmingham untuk memotivasi kandidat internasional berprestasi.",
      en: "Partial tuition fee reduction scholarship program by the University of Birmingham supporting global candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Global"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Global"
      ]
    }
  },
  {
    id: "nottingham-developing-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Developing Solutions Universitas Nottingham",
      en: "University of Nottingham Developing Solutions Scholarship"
    },
    provider: {
      id: "University of Nottingham, Inggris",
      en: "University of Nottingham, UK"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari 50% hingga 100% program Master",
        "Akses jaringan ikatan alumni internasional Nottingham"
      ],
      en: [
        "Tuition fee waiver reductions ranging from 50% to 100% for Master's studies",
        "Access to Nottingham international alumni network"
      ]
    },
    requirements: {
      id: [
        "Warga negara berkembang (termasuk Indonesia) mendaftar program Master di Nottingham",
        "Menunjukkan komitmen tinggi memajukan negara asal setelah lulus",
        "Memenuhi persyaratan visa pelajar UK"
      ],
      en: [
        "Citizen of developing countries (including Indonesia) applying for Master's study at Nottingham",
        "Demonstrate strong commitment to contributing to home country upon graduation",
        "Meet UK study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-05-20",
    applicationUrl: "https://www.nottingham.ac.uk/",
    description: {
      id: "Beasiswa prestasi kemanusiaan dari Universitas Nottingham untuk mendidik agen pembangunan sosial negara berkembang.",
      en: "Nottingham University's highly selective postgraduate scholarship program supporting developing countries' students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Pembangunan"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Development"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-magetan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Magetan (Magetan Cerdas)",
      en: "Magetan Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Magetan",
      en: "Regency Government of Magetan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan dana penunjang buku/tugas akhir kuliah"
      ],
      en: [
        "Semester tuition fee subsidy grant support",
        "Book and thesis research financial support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Magetan (KTP/KK Magetan)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik"
      ],
      en: [
        "Native resident of Magetan Regency (Magetan ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "From low-income background or possesses academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://magetan.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkab Magetan untuk mendukung pemerataan akses pendidikan tinggi bagi pemuda daerah.",
      en: "Tuition fee financial assistance program by Magetan Regency Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Magetan",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Magetan",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-tulungagung",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Tulungagung (Tulungagung Prestasi)",
      en: "Tulungagung Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Tulungagung",
      en: "Regency Government of Tulungagung"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT per semester stimulan",
        "Bantuan dana penunjang riset tugas akhir"
      ],
      en: [
        "Semester tuition fee stimulus grant support",
        "Research drafting financial grant"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Tulungagung (KTP/KK Tulungagung)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Tulungagung Regency (Tulungagung ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://tulungagung.go.id/",
    description: {
      id: "Bantuan dana pendidikan tinggi dari Pemkab Tulungagung untuk mencetak sumber daya manusia unggul daerah.",
      en: "Higher education financial assistance from Tulungagung Regency Government to elevate local human resources."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Tulungagung",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Tulungagung",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-trenggalek",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Trenggalek (Trenggalek Cerdas)",
      en: "Trenggalek Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Trenggalek",
      en: "Regency Government of Trenggalek"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan UKT/SPP semesteran",
        "Bantuan dana penunjang tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Thesis research financial support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Trenggalek dibuktikan dengan KK/KTP Trenggalek",
        "Mahasiswa aktif S1 di perguruan tinggi negeri maupun swasta",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Trenggalek Regency (Trenggalek ID/Family Card)",
        "Active S1 student at state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-07-30",
    applicationUrl: "https://trenggalekkab.go.id/",
    description: {
      id: "Bantuan stimulan biaya pendidikan tinggi dari Pemkab Trenggalek untuk memajukan kualitas akademis mahasiswa berprestasi daerah.",
      en: "Higher education financial assistance stimulus from Trenggalek Government to elevate the academic achievements of local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Trenggalek",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Trenggalek",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-bangkalan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Bangkalan (Bangkalan Cerdas)",
      en: "Bangkalan Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Bangkalan",
      en: "Regency Government of Bangkalan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research writing grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Bangkalan (KTP/KK Bangkalan)",
        "Mahasiswa aktif perguruan tinggi negeri/swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Bangkalan Regency (Bangkalan ID/Family Card)",
        "Active student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://bangkalankab.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemkab Bangkalan untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Bangkalan Regency Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Bangkalan",
        "Madura"
      ],
      en: [
        "Government",
        "Domestic",
        "Bangkalan",
        "Madura"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-sampang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Sampang (Sampang Cerdas)",
      en: "Sampang Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Sampang",
      en: "Regency Government of Sampang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah SPP/UKT tahunan",
        "Uang saku penunjang riset tugas akhir daerah"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Stipend support for final thesis research"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Sampang dibuktikan dengan KTP/KK Sampang",
        "Mahasiswa aktif program sarjana di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Sampang Regency (Sampang ID/Family Card)",
        "Active undergraduate student at accredited universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://sampangkab.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkab Sampang untuk menyokong pendidikan tinggi mahasiswa daerah.",
      en: "Tuition fee financial assistance scholarship by Sampang Regency Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Sampang",
        "Madura"
      ],
      en: [
        "Government",
        "Domestic",
        "Sampang",
        "Madura"
      ]
    }
  },
  {
    id: "warwick-chancellors-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kanselir Internasional Universitas Warwick (Inggris)",
      en: "University of Warwick Chancellor's International Scholarship"
    },
    provider: {
      id: "University of Warwick, Inggris",
      en: "University of Warwick, UK"
    },
    degreeLevels: [
      'doctoral'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Pembebasan biaya kuliah penuh program doktoral (PhD)",
        "Tunjangan biaya hidup tahunan senilai GBP 18.600",
        "Dana riset tugas akhir dan bantuan biaya visa"
      ],
      en: [
        "Full tuition fees coverage for PhD studies",
        "Annual living stipend worth GBP 18,600",
        "Research project funding and visa assistance support"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang berencana menempuh program PhD di Warwick",
        "Menunjukkan prestasi akademis sarjana/master yang luar biasa",
        "Memiliki proposal penelitian tingkat doktoral yang solid"
      ],
      en: [
        "International students applying for a PhD program at Warwick",
        "Outstanding academic records in previous studies",
        "Submit a solid doctoral research proposal draft"
      ]
    },
    status: 'soon',
    deadline: "2026-12-15",
    applicationUrl: "https://www.warwick.ac.uk/",
    description: {
      id: "Beasiswa doktoral penuh paling kompetitif dari Universitas Warwick Inggris untuk mencetak peneliti internasional berbakat.",
      en: "Warwick's highly competitive fully funded PhD scholarship program designed to support outstanding global researchers."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Riset",
        "Doktoral"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Research",
        "Doctoral"
      ]
    }
  },
  {
    id: "standrews-excellence-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan Universitas St Andrews (Skotlandia)",
      en: "University of St Andrews International Excellence Scholarship"
    },
    provider: {
      id: "University of St Andrews, Inggris",
      en: "University of St Andrews, UK"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana biaya kuliah tahunan senilai GBP 25.000",
        "Akses jaringan mentorship kanselir internasional St Andrews"
      ],
      en: [
        "Tuition fee waiver financial support worth GBP 25,000 annually",
        "Access to St Andrews international mentorship networks"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar ke program sarjana di St Andrews",
        "Menunjukkan prestasi akademis luar biasa dengan IPK tinggi",
        "Memiliki sertifikat kemampuan bahasa Inggris (TOEFL/IELTS) yang valid"
      ],
      en: [
        "International student applying for an undergraduate program at St Andrews",
        "Outstanding academic records with high GPA",
        "Valid English proficiency certificate (TOEFL/IELTS)"
      ]
    },
    status: 'closed',
    deadline: "2026-01-25",
    applicationUrl: "https://www.st-andrews.ac.uk/",
    description: {
      id: "Beasiswa prestasi prestisius dari St Andrews untuk menyokong biaya pendidikan bagi mahasiswa internasional terbaik.",
      en: "St Andrews' highly selective undergraduate scholarship program for outstanding international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Unggulan"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Excellence"
      ]
    }
  },
  {
    id: "southampton-presidential-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Kepresidenan Universitas Southampton (Inggris)",
      en: "University of Southampton Presidential International Scholarship"
    },
    provider: {
      id: "University of Southampton, Inggris",
      en: "University of Southampton, UK"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari GBP 5.000 hingga 100% untuk tahun pertama",
        "Akses ke program pendampingan akademik internasional"
      ],
      en: [
        "Tuition fee reductions ranging from GBP 5,000 to 100% for the first year",
        "Access to international academic support network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar program sarjana atau pascasarjana di Southampton",
        "Memiliki prestasi akademis yang luar biasa di sekolah/universitas sebelumnya",
        "Memenuhi persyaratan akademik program studi pilihan"
      ],
      en: [
        "International students planning to study undergraduate or postgraduate courses at Southampton",
        "Outstanding academic records in previous school/university studies",
        "Meet academic entry requirements for the chosen course"
      ]
    },
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://www.southampton.ac.uk/",
    description: {
      id: "Beasiswa kepresidenan dari Universitas Southampton untuk membantu meringankan biaya pendidikan bagi mahasiswa internasional terbaik.",
      en: "Southampton Presidential merit-based tuition fee reduction scholarship supporting outstanding international candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Presidential"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Presidential"
      ]
    }
  },
  {
    id: "bath-global-leaders-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pemimpin Global Universitas Bath (Inggris)",
      en: "University of Bath Global Leaders Scholarship"
    },
    provider: {
      id: "University of Bath, Inggris",
      en: "University of Bath, UK"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana biaya kuliah program Master senilai GBP 5.000",
        "Program bimbingan kepemimpinan eksklusif internasional"
      ],
      en: [
        "Tuition fee waiver financial support worth GBP 5,000 for Master's studies",
        "Exclusive international leadership training programs"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional dengan rekam jejak kepemimpinan sosial yang luar biasa",
        "Telah memiliki gelar Sarjana atau berada di tahun terakhir kuliah S1",
        "Lolos seleksi masuk akademik program Master Bath yang dipilih"
      ],
      en: [
        "International students demonstrating exceptional leadership and community records",
        "Hold a Bachelor's degree or be in the final year of S1",
        "Pass the academic admission to the chosen Bath Master's program"
      ]
    },
    status: 'closed',
    deadline: "2026-05-15",
    applicationUrl: "https://www.bath.ac.uk/",
    description: {
      id: "Beasiswa kepemimpinan dari Universitas Bath untuk mendidik calon pemimpin yang berdedikasi menciptakan dampak sosial bagi masyarakat.",
      en: "Leadership-based scholarship by the University of Bath to support future change-makers committed to social impact."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Kepemimpinan"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Leadership"
      ]
    }
  },
  {
    id: "durham-excellence-uk",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Prestasi Internasional Universitas Durham (Inggris)",
      en: "Durham University International Excellence Scholarship"
    },
    provider: {
      id: "Durham University, Inggris",
      en: "Durham University, UK"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah tahunan program Master senilai GBP 5.000",
        "Akses jaringan ikatan alumni internasional Durham"
      ],
      en: [
        "Tuition fee waiver reductions worth GBP 5,000 for Master's studies",
        "Access to Durham international alumni network"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-UK/EU yang mendaftar program Master internasional di Durham",
        "Menunjukkan prestasi akademis sarjana yang luar biasa",
        "Memenuhi persyaratan visa pelajar UK"
      ],
      en: [
        "Non-UK/EU citizens applying for international Master's programs at Durham",
        "Exceptional academic performance records in previous studies",
        "Meet UK study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-05-31",
    applicationUrl: "https://www.durham.ac.uk/",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Universitas Durham untuk mempermudah akses mahasiswa internasional berprestasi.",
      en: "Tuition fee reduction scholarship program by Durham University supporting talented international graduate students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Inggris",
        "Unggulan"
      ],
      en: [
        "University",
        "Overseas",
        "UK",
        "Excellence"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-pamekasan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Pamekasan (Pamekasan Cerdas)",
      en: "Pamekasan Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Pamekasan",
      en: "Regency Government of Pamekasan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya pendidikan UKT per semester stimulan",
        "Bantuan biaya hidup penunjang tugas akhir"
      ],
      en: [
        "Semester tuition fee stimulus grant support",
        "Living cost assistance for final thesis support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Pamekasan (KTP/KK Pamekasan)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik"
      ],
      en: [
        "Native resident of Pamekasan Regency (Pamekasan ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "From low-income background or possesses academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-08-25",
    applicationUrl: "https://pamekasan.go.id/",
    description: {
      id: "Bantuan stimulan dana kuliah dari Pemerintah Kabupaten Pamekasan untuk memperluas akses pendidikan tinggi bagi pemuda berprestasi daerah.",
      en: "Tuition fee stimulus financial assistance from Pamekasan Regency Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Pamekasan",
        "Madura"
      ],
      en: [
        "Government",
        "Domestic",
        "Pamekasan",
        "Madura"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-situbondo",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Situbondo (Situbondo Cerdas)",
      en: "Situbondo Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Situbondo",
      en: "Regency Government of Situbondo"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana pendidikan UKT semesteran stimulan",
        "Bantuan penunjang buku kuliah tahunan"
      ],
      en: [
        "Semester tuition fee stimulus support",
        "Annual textbook allowance support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kabupaten Situbondo (KTP/KK Situbondo)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik atau menyertakan sertifikat prestasi non-akademik"
      ],
      en: [
        "Native resident of Situbondo Regency (Situbondo ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "Minimum GPA of 3.00 for academic track or provide non-academic certificates"
      ]
    },
    status: 'soon',
    deadline: "2026-09-15",
    applicationUrl: "https://situbondokab.go.id/",
    description: {
      id: "Bantuan stimulan dana kuliah dari Pemkab Situbondo untuk mendorong pemerataan pendidikan tinggi putra-putri daerah.",
      en: "Educational financial assistance from Situbondo Regency Government to support higher education accessibility for local youth."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Situbondo",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Situbondo",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkab-bondowoso",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkab Bondowoso (Bondowoso Cerdas)",
      en: "Bondowoso Regency Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kabupaten Bondowoso",
      en: "Regency Government of Bondowoso"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya hidup stimulan bagi mahasiswa berprestasi"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Stimulus living cost assistance for outstanding students"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kabupaten Bondowoso dibuktikan dengan KTP/KK Bondowoso",
        "Mahasiswa aktif di universitas negeri/swasta terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi keagamaan/sains"
      ],
      en: [
        "Native resident of Bondowoso Regency (Bondowoso ID/Family Card)",
        "Active student at accredited state or private universities",
        "From low-income background or possesses religious/science achievements"
      ]
    },
    status: 'open',
    deadline: "2026-08-20",
    applicationUrl: "https://bondowosokab.go.id/",
    description: {
      id: "Program beasiswa bantuan pendidikan tinggi dari Pemkab Bondowoso untuk mendukung pemerataan pendidikan bagi keluarga prasejahtera.",
      en: "Higher education financial assistance program by Bondowoso Regency Government supporting underprivileged families."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Bondowoso",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Bondowoso",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-mojokerto",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Mojokerto (Mojokerto Cerdas)",
      en: "Mojokerto City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Mojokerto",
      en: "City Government of Mojokerto"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT semesteran stimulan",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee stimulus grant support",
        "Thesis writing financial assistance"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kota Mojokerto (KTP/KK Mojokerto Kota)",
        "Mahasiswa aktif S1 di universitas negeri atau swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik atau berprestasi non-akademik"
      ],
      en: [
        "Native resident of Mojokerto City (Mojokerto City ID/Family Card)",
        "Active S1 student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic track or possesses non-academic records"
      ]
    },
    status: 'soon',
    deadline: "2026-09-30",
    applicationUrl: "https://mojokertokota.go.id/",
    description: {
      id: "Bantuan stimulan biaya kuliah dari Pemerintah Kota Mojokerto untuk mendorong prestasi akademis putra-putri daerah.",
      en: "Tuition fee stimulus financial assistance from Mojokerto City Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Mojokerto",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Mojokerto",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-pasuruan",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Pasuruan (Pasuruan Cerdas)",
      en: "Pasuruan City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Pasuruan",
      en: "City Government of Pasuruan"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah SPP/UKT per semester",
        "Bantuan dana penunjang riset tugas akhir daerah"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Stipend support for final thesis research"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kota Pasuruan (KTP/KK Pasuruan Kota)",
        "Mahasiswa aktif program sarjana di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik tinggi"
      ],
      en: [
        "Native resident of Pasuruan City (Pasuruan City ID/Family Card)",
        "Active undergraduate student at accredited universities",
        "From low-income background or possesses high academic records"
      ]
    },
    status: 'open',
    deadline: "2026-07-25",
    applicationUrl: "https://pasuruankota.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkot Pasuruan untuk mendorong wajib belajar pendidikan tinggi putra-putri daerah.",
      en: "Tuition fee financial assistance scholarship by Pasuruan City Government promoting higher education enrollments."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Pasuruan",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Pasuruan",
        "East Java"
      ]
    }
  },
  {
    id: "epfl-excellence-switzerland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana Unggulan EPFL (Swiss)",
      en: "EPFL Excellence Fellowships"
    },
    provider: {
      id: "École Polytechnique Fédérale de Lausanne (EPFL)",
      en: "École Polytechnique Fédérale de Lausanne (EPFL)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan dana tahunan senilai CHF 10.000 per semester",
        "Pembebasan biaya kuliah program Master EPFL",
        "Akomodasi perumahan mahasiswa asing terjamin"
      ],
      en: [
        "Annual financial assistance worth CHF 10,000 per semester",
        "Tuition fee waiver for EPFL Master's program",
        "Guaranteed international student housing accommodation"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar ke salah satu program Master EPFL",
        "Menunjukkan prestasi akademis sarjana yang luar biasa di bidang sains/STEM",
        "Kemampuan bahasa Inggris tinggi (TOEFL/IELTS)"
      ],
      en: [
        "International student applying for a Master's program at EPFL",
        "Exceptional academic performance records in science/STEM undergraduate studies",
        "High English language proficiency (TOEFL/IELTS)"
      ]
    },
    status: 'soon',
    deadline: "2026-12-15",
    applicationUrl: "https://www.epfl.ch/en",
    description: {
      id: "Beasiswa pascasarjana penuh paling kompetitif dari EPFL Swiss untuk mendukung calon ilmuwan dan inovator teknologi terbaik dunia.",
      en: "Highly prestigious graduate excellence fellowship by EPFL Switzerland supporting top-tier global science and tech students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swiss",
        "STEM",
        "Teknologi"
      ],
      en: [
        "University",
        "Overseas",
        "Swiss",
        "STEM",
        "Technology"
      ]
    }
  },
  {
    id: "unil-masters-switzerland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Magister Universitas Lausanne (Swiss)",
      en: "University of Lausanne (UNIL) Master's Grants"
    },
    provider: {
      id: "University of Lausanne (UNIL)",
      en: "University of Lausanne (UNIL)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan biaya hidup bulanan senilai CHF 1.600 selama masa studi",
        "Pembebasan sebagian biaya administrasi kuliah"
      ],
      en: [
        "Monthly living stipend worth CHF 1,600 during study duration",
        "Partial tuition fee administrative waiver support"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa asing lulusan sarjana universitas luar negeri",
        "Diterima di salah satu program Master UNIL (kecuali Kedokteran/Pendidikan)",
        "Menunjukkan prestasi akademis luar biasa di jenjang sarjana sebelumnya"
      ],
      en: [
        "Foreign student who graduated from a foreign university with a bachelor's degree",
        "Admitted to a master's program at UNIL (except Medicine/Education)",
        "Outstanding undergraduate academic record in previous studies"
      ]
    },
    status: 'soon',
    deadline: "2026-11-01",
    applicationUrl: "https://www.unil.ch/",
    description: {
      id: "Beasiswa prestasi parsial dari Universitas Lausanne Swiss untuk menarik mahasiswa asing berbakat untuk kuliah S2 di Swiss.",
      en: "University of Lausanne's graduate grant program designed to attract outstanding international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swiss",
        "Lausanne"
      ],
      en: [
        "University",
        "Overseas",
        "Swiss",
        "Lausanne"
      ]
    }
  },
  {
    id: "iheid-scholarship-switzerland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana Graduate Institute Geneva (Swiss)",
      en: "Graduate Institute Geneva (IHEID) Scholarships"
    },
    provider: {
      id: "Graduate Institute of International and Development Studies (IHEID)",
      en: "Graduate Institute of International and Development Studies (IHEID)"
    },
    degreeLevels: [
      'master',
      'doctoral'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan sebagian atau penuh biaya kuliah program pascasarjana",
        "Bantuan biaya hidup tahunan disesuaikan dengan kebutuhan keuangan"
      ],
      en: [
        "Partial or full tuition fee waiver reductions for graduate programs",
        "Tailored annual living cost financial assistance based on financial need"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar program Master/PhD di IHEID",
        "Menunjukkan minat riset mendalam bidang hubungan internasional/pembangunan",
        "IPK sarjana tinggi setara di atas 3.50 skala 4.00"
      ],
      en: [
        "International students applying for Master/PhD programs at IHEID",
        "Proven research interest in international relations or development studies",
        "High undergraduate GPA equivalent above 3.50 on a 4.00 scale"
      ]
    },
    status: 'closed',
    deadline: "2026-01-15",
    applicationUrl: "https://www.graduateinstitute.ch/",
    description: {
      id: "Beasiswa bantuan dana pascasarjana dari IHEID Geneva Swiss untuk mendanai studi pemimpin internasional bidang pembangunan.",
      en: "Graduate scholarship program by IHEID Geneva supporting international candidates in development studies."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swiss",
        "Pembangunan"
      ],
      en: [
        "University",
        "Overseas",
        "Swiss",
        "Development"
      ]
    }
  },
  {
    id: "uzh-masters-switzerland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Prestasi Master Universitas Zurich (Swiss)",
      en: "University of Zurich (UZH) Master Scholarships"
    },
    provider: {
      id: "University of Zurich (UZH)",
      en: "University of Zurich (UZH)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana biaya kuliah program Master tahunan",
        "Akses jaringan pendampingan akademik mahasiswa asing UZH"
      ],
      en: [
        "Tuition fee waiver financial support for Master's studies",
        "Access to UZH international student academic support network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional mendaftar program Master internasional di UZH",
        "Menunjukkan prestasi akademis sarjana yang luar biasa",
        "Memenuhi persyaratan visa pelajar Swiss"
      ],
      en: [
        "International citizens applying for international Master's programs at UZH",
        "Exceptional academic performance records in previous undergraduate studies",
        "Meet Swiss study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-02-01",
    applicationUrl: "https://www.uzh.ch/en.html",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Universitas Zurich untuk mempermudah akses mahasiswa internasional berprestasi.",
      en: "Tuition fee reduction scholarship program by the University of Zurich supporting talented international graduate students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swiss",
        "Zurich"
      ],
      en: [
        "University",
        "Overseas",
        "Swiss",
        "Zurich"
      ]
    }
  },
  {
    id: "unige-excellence-switzerland",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan Master Universitas Jenewa (Swiss)",
      en: "University of Geneva Excellence Master Fellowships"
    },
    provider: {
      id: "University of Geneva, Swiss",
      en: "University of Geneva, Switzerland"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Tunjangan dana hibah riset tahunan senilai CHF 10.000 hingga CHF 15.000",
        "Bantuan biaya hidup penunjang riset tugas akhir"
      ],
      en: [
        "Annual research grant support worth CHF 10,000 to CHF 15,000",
        "Living cost assistance for final thesis research support"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional dengan prestasi akademik luar biasa (berada di 10% lulusan sarjana terbaik)",
        "Mendaftar di program Master Fakultas Sains Universitas Jenewa",
        "Proposal proyek riset tesis awal yang solid"
      ],
      en: [
        "International students demonstrating highest academic excellence (within top 10% of previous graduating class)",
        "Applying for a Master's program at the Faculty of Science, UNIGE",
        "Submit a solid preliminary thesis research project proposal draft"
      ]
    },
    status: 'closed',
    deadline: "2026-03-15",
    applicationUrl: "https://www.unige.ch/",
    description: {
      id: "Beasiswa riset unggulan Fakultas Sains Universitas Jenewa Swiss untuk menarik peneliti muda internasional berbakat.",
      en: "Excellence research fellowship by the Faculty of Science, University of Geneva supporting global graduate candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Swiss",
        "Sains"
      ],
      en: [
        "University",
        "Overseas",
        "Swiss",
        "Science"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-kediri",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Kediri (Kediri Cerdas)",
      en: "Kediri City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Kediri",
      en: "City Government of Kediri"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research writing grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kota Kediri (KTP/KK Kediri Kota)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Kediri City (Kediri City ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://kedirikota.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemkot Kediri untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Kediri City Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Kediri",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Kediri",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-blitar",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Blitar (Blitar Cerdas)",
      en: "Blitar City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Blitar",
      en: "City Government of Blitar"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana UKT per semester stimulan",
        "Bantuan dana penunjang riset tugas akhir"
      ],
      en: [
        "Semester tuition fee stimulus grant support",
        "Research drafting financial grant"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kota Blitar (KTP/KK Blitar Kota)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Blitar City (Blitar City ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://blitarkota.go.id/",
    description: {
      id: "Bantuan dana pendidikan tinggi dari Pemkot Blitar untuk mencetak sumber daya manusia unggul daerah.",
      en: "Higher education financial assistance from Blitar City Government to elevate local human resources."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Blitar",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Blitar",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-probolinggo",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Probolinggo (Probolinggo Cerdas)",
      en: "Probolinggo City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Probolinggo",
      en: "City Government of Probolinggo"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan UKT/SPP semesteran",
        "Bantuan dana penunjang tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Thesis research financial support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Probolinggo dibuktikan dengan KK/KTP Probolinggo Kota",
        "Mahasiswa aktif S1 di perguruan tinggi negeri maupun swasta",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Probolinggo City (Probolinggo City ID/Family Card)",
        "Active S1 student at state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-07-30",
    applicationUrl: "https://probolinggokota.go.id/",
    description: {
      id: "Bantuan stimulan biaya pendidikan tinggi dari Pemkot Probolinggo untuk memajukan kualitas akademis mahasiswa berprestasi daerah.",
      en: "Higher education financial assistance stimulus from Probolinggo City Government to elevate the academic achievements of local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Probolinggo",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Probolinggo",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-madiun",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Madiun (Madiun Cerdas)",
      en: "Madiun City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Madiun",
      en: "City Government of Madiun"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research writing grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kota Madiun (KTP/KK Madiun Kota)",
        "Mahasiswa aktif perguruan tinggi negeri/swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Madiun City (Madiun City ID/Family Card)",
        "Active student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://madiunkota.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemkot Madiun untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Madiun City Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Madiun",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Madiun",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-malang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Malang (Malang Cerdas)",
      en: "Malang City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Malang",
      en: "City Government of Malang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah SPP/UKT tahunan",
        "Uang saku penunjang riset tugas akhir daerah"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Stipend support for final thesis research"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kota Malang dibuktikan dengan KTP/KK Malang Kota",
        "Mahasiswa aktif program sarjana di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Malang City (Malang City ID/Family Card)",
        "Active undergraduate student at accredited universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://malangkota.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkot Malang untuk menyokong pendidikan tinggi mahasiswa daerah.",
      en: "Tuition fee financial assistance scholarship by Malang City Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Malang",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Malang",
        "East Java"
      ]
    }
  },
  {
    id: "ens-lyon-ampere-france",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Ampere Excellence ENS de Lyon (Prancis)",
      en: "ENS de Lyon Ampere Excellence Scholarships"
    },
    provider: {
      id: "École Normale Supérieure de Lyon (ENS de Lyon)",
      en: "École Normale Supérieure de Lyon (ENS de Lyon)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Bantuan biaya hidup bulanan senilai EUR 1.000 selama masa studi Magister",
        "Bebas biaya pendaftaran dan biaya kuliah penuh di ENS de Lyon"
      ],
      en: [
        "Monthly living stipend worth EUR 1,000 during Master's study",
        "Free registration and full tuition fees waiver at ENS de Lyon"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional non-Prancis mendaftar program Master di ENS de Lyon",
        "Prestasi akademik sarjana yang luar biasa (IPK tinggi)",
        "Kemampuan bahasa Prancis atau Inggris sesuai syarat masuk program"
      ],
      en: [
        "Non-French international student applying for a Master's program at ENS de Lyon",
        "Exceptional undergraduate academic record (high GPA)",
        "French or English language proficiency based on program requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-01-10",
    applicationUrl: "https://www.ens-lyon.fr/en/",
    description: {
      id: "Beasiswa prestasi pascasarjana penuh dari ENS de Lyon Prancis untuk melatih peneliti muda internasional unggulan dunia.",
      en: "Highly prestigious master's scholarship program by ENS de Lyon France supporting top-tier international students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Prancis",
        "Ampere"
      ],
      en: [
        "University",
        "Overseas",
        "France",
        "Ampere"
      ]
    }
  },
  {
    id: "sciencespo-boutmy-france",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Emile Boutmy Sciences Po (Prancis)",
      en: "Sciences Po Emile Boutmy Scholarship"
    },
    provider: {
      id: "Sciences Po, Prancis",
      en: "Sciences Po, France"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari EUR 3.900 hingga EUR 14.210 per tahun",
        "Akses jaringan pendampingan kepemimpinan eksklusif Sciences Po"
      ],
      en: [
        "Tuition fee waiver reductions ranging from EUR 3,900 to EUR 14,210 annually",
        "Access to exclusive Sciences Po leadership mentorship programs"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Uni Eropa yang mendaftar ke program sarjana atau master di Sciences Po",
        "Menunjukkan prestasi akademis sarjana/sekolah menengah yang luar biasa",
        "Lolos seleksi masuk akademik program studi pilihan"
      ],
      en: [
        "Non-EU/EEA citizens applying for undergraduate or master's programs at Sciences Po",
        "Exceptional academic performance records in previous studies",
        "Pass academic entry requirements for the chosen course"
      ]
    },
    status: 'closed',
    deadline: "2026-02-15",
    applicationUrl: "https://www.sciencespo.fr/en",
    description: {
      id: "Beasiswa keringanan biaya kuliah pascasarjana dan sarjana dari Sciences Po Prancis untuk mahasiswa asing berprestasi tinggi di luar EU.",
      en: "Sciences Po's highly selective scholarship program supporting outstanding international students outside the EU."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Prancis",
        "Emile Boutmy"
      ],
      en: [
        "University",
        "Overseas",
        "France",
        "Emile Boutmy"
      ]
    }
  },
  {
    id: "paris-excellence-france",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Pascasarjana MIEM Universitas Paris (Prancis)",
      en: "Université de Paris Excellence Scholarships (MIEM)"
    },
    provider: {
      id: "Université de Paris, Prancis",
      en: "Université de Paris, France"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana biaya kuliah tahunan program Master hingga EUR 10.000",
        "Akses jaringan laboratorium riset internasional sains"
      ],
      en: [
        "Tuition fee waiver financial support worth up to EUR 10,000 annually",
        "Access to international research laboratories network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar ke program Master di Université de Paris",
        "Menunjukkan prestasi akademis luar biasa dengan IPK sarjana tinggi",
        "Memiliki sertifikat kemampuan bahasa Prancis/Inggris yang valid"
      ],
      en: [
        "International student applying for a Master's program at Université de Paris",
        "Outstanding academic records with high undergraduate GPA",
        "Valid French or English proficiency certificate"
      ]
    },
    status: 'closed',
    deadline: "2026-06-30",
    applicationUrl: "https://u-paris.fr/en/",
    description: {
      id: "Beasiswa prestasi MIEM dari Université de Paris Prancis khusus untuk mendanai studi pascasarjana mahasiswa asing berbakat.",
      en: "Academic merit scholarship by Université de Paris France designed specifically to support talented international graduate candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Prancis",
        "MIEM"
      ],
      en: [
        "University",
        "Overseas",
        "France",
        "MIEM"
      ]
    }
  },
  {
    id: "grenoble-inp-france",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Yayasan Grenoble INP (Prancis)",
      en: "Grenoble INP Foundation Scholarships"
    },
    provider: {
      id: "Grenoble Institute of Technology (Grenoble INP)",
      en: "Grenoble Institute of Technology (Grenoble INP)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Tunjangan hibah biaya kuliah tahunan senilai EUR 5.000 per tahun",
        "Akses jaringan industri sains/teknologi teknik Grenoble"
      ],
      en: [
        "Annual tuition fee grant support worth EUR 5,000",
        "Access to Grenoble engineering and tech industries network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional mendaftar program Master teknik/sains di Grenoble INP",
        "Menunjukkan prestasi akademik sarjana yang luar biasa",
        "Proposal riset dan motivasi yang solid"
      ],
      en: [
        "International students applying to engineering or science Master's courses at Grenoble INP",
        "Outstanding academic records in previous studies",
        "Solid research proposal and motivation records"
      ]
    },
    status: 'closed',
    deadline: "2026-02-28",
    applicationUrl: "https://www.grenoble-inp.fr/en",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Yayasan Grenoble INP untuk mendukung studi mahasiswa asing berprestasi di bidang teknik.",
      en: "Grenoble INP Foundation's highly selective tuition fee reduction scholarship program for outstanding international engineering students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Prancis",
        "Grenoble"
      ],
      en: [
        "University",
        "Overseas",
        "France",
        "Grenoble"
      ]
    }
  },
  {
    id: "imt-atlantique-france",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan IMT Atlantique (Prancis)",
      en: "IMT Atlantique Excellence Scholarships"
    },
    provider: {
      id: "IMT Atlantique, Prancis",
      en: "IMT Atlantique, France"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari 25% hingga 50% program Master",
        "Akses jaringan pendampingan akademik mahasiswa asing IMT"
      ],
      en: [
        "Tuition fee waiver reductions ranging from 25% to 50% for Master's studies",
        "Access to international student academic support network"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Prancis mendaftar program Master internasional di IMT Atlantique",
        "Menunjukkan prestasi akademis sarjana yang luar biasa",
        "Memenuhi persyaratan visa pelajar Prancis"
      ],
      en: [
        "Non-French citizens applying for international Master's programs at IMT Atlantique",
        "Exceptional academic performance records in previous undergraduate studies",
        "Meet French study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-03-31",
    applicationUrl: "https://www.imt-atlantique.fr/en",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari IMT Atlantique untuk mempermudah akses mahasiswa internasional berprestasi bidang teknik.",
      en: "Tuition fee reduction scholarship program by IMT Atlantique supporting talented international graduate engineering students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Prancis",
        "Atlantique"
      ],
      en: [
        "University",
        "Overseas",
        "France",
        "Atlantique"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-batu",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Batu (Batu Cerdas)",
      en: "Batu City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Batu",
      en: "City Government of Batu"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya hidup stimulan bagi mahasiswa daerah"
      ],
      en: [
        "Semester tuition fee subsidy grant support",
        "Stimulus living cost assistance for local students"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kota Batu dibuktikan dengan KTP/KK Batu Kota",
        "Mahasiswa aktif sarjana (S1) di universitas terakreditasi",
        "Berasal dari keluarga kurang mampu atau memiliki prestasi akademik/non-akademik"
      ],
      en: [
        "Native resident of Batu City (Batu City ID/Family Card)",
        "Active S1 student at accredited universities",
        "From low-income background or possesses academic/non-academic records"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://batukota.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkot Batu untuk mendukung pemerataan pendidikan tinggi putra-putri daerah.",
      en: "Tuition fee financial assistance program by Batu City Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Batu",
        "Jawa Timur"
      ],
      en: [
        "Government",
        "Domestic",
        "Batu",
        "East Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-surakarta",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Surakarta (Surakarta Cerdas)",
      en: "Surakarta City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Surakarta",
      en: "City Government of Surakarta"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya riset tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research drafting financial grant"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kota Surakarta (KTP/KK Surakarta Kota)",
        "Mahasiswa aktif program sarjana (S1) di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Surakarta City (Surakarta ID/Family Card)",
        "Active S1 student at accredited higher education institutions",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://surakarta.go.id/",
    description: {
      id: "Bantuan dana pendidikan tinggi dari Pemkot Surakarta untuk mencetak sumber daya manusia unggul daerah.",
      en: "Higher education financial assistance from Surakarta City Government to elevate local human resources."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Surakarta",
        "Solo"
      ],
      en: [
        "Government",
        "Domestic",
        "Surakarta",
        "Solo"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-semarang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Semarang (Semarang Cerdas)",
      en: "Semarang City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Semarang",
      en: "City Government of Semarang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan UKT/SPP semesteran",
        "Bantuan dana penunjang tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy support",
        "Thesis research financial support"
      ]
    },
    requirements: {
      id: [
        "Warga asli Semarang dibuktikan dengan KK/KTP Semarang Kota",
        "Mahasiswa aktif S1 di perguruan tinggi negeri maupun swasta",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Semarang City (Semarang City ID/Family Card)",
        "Active S1 student at state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-07-30",
    applicationUrl: "https://semarangkota.go.id/",
    description: {
      id: "Bantuan stimulan biaya pendidikan tinggi dari Pemkot Semarang untuk memajukan kualitas akademis mahasiswa berprestasi daerah.",
      en: "Higher education financial assistance stimulus from Semarang City Government to elevate the academic achievements of local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Semarang",
        "Jawa Tengah"
      ],
      en: [
        "Government",
        "Domestic",
        "Semarang",
        "Central Java"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-yogyakarta",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Yogyakarta (Yogyakarta Cerdas)",
      en: "Yogyakarta City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Yogyakarta",
      en: "City Government of Yogyakarta"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya pendidikan SPP/UKT per semester",
        "Bantuan biaya penyusunan skripsi/tugas akhir"
      ],
      en: [
        "Semester tuition fee subsidy assistance",
        "Research writing grant for final thesis"
      ]
    },
    requirements: {
      id: [
        "Warga asli Kota Yogyakarta (KTP/KK Yogyakarta Kota)",
        "Mahasiswa aktif perguruan tinggi negeri/swasta terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Yogyakarta City (Yogyakarta City ID/Family Card)",
        "Active student at accredited state or private universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'open',
    deadline: "2026-08-15",
    applicationUrl: "https://yogyakarta.go.id/",
    description: {
      id: "Program bantuan biaya pendidikan tinggi dari Pemkot Yogyakarta untuk meringankan beban pendidikan putra-putri daerah berprestasi.",
      en: "Higher education financial assistance program by Yogyakarta City Government supporting outstanding local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Yogyakarta",
        "Jogja"
      ],
      en: [
        "Government",
        "Domestic",
        "Yogyakarta",
        "Jogja"
      ]
    }
  },
  {
    id: "beasiswa-pemkot-magelang",
    studyLocation: [
      'domestic'
    ],
    name: {
      id: "Beasiswa Pemkot Magelang (Magelang Cerdas)",
      en: "Magelang City Government Scholarship"
    },
    provider: {
      id: "Pemerintah Kota Magelang",
      en: "City Government of Magelang"
    },
    degreeLevels: [
      'bachelor'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Subsidi biaya kuliah SPP/UKT tahunan",
        "Uang saku penunjang riset tugas akhir daerah"
      ],
      en: [
        "Annual tuition fee subsidy support",
        "Stipend support for final thesis research"
      ]
    },
    requirements: {
      id: [
        "Penduduk asli Kota Magelang dibuktikan dengan KTP/KK Magelang Kota",
        "Mahasiswa aktif program sarjana di universitas terakreditasi",
        "IPK minimal 3.00 untuk prestasi akademik"
      ],
      en: [
        "Native resident of Magelang City (Magelang City ID/Family Card)",
        "Active undergraduate student at accredited universities",
        "Minimum GPA of 3.00 for academic excellence track"
      ]
    },
    status: 'soon',
    deadline: "2026-09-20",
    applicationUrl: "https://magelangkota.go.id/",
    description: {
      id: "Program beasiswa bantuan biaya kuliah dari Pemkot Magelang untuk menyokong pendidikan tinggi mahasiswa daerah.",
      en: "Tuition fee financial assistance scholarship by Magelang City Government supporting local students."
    },
    tags: {
      id: [
        "Pemerintah",
        "Dalam Negeri",
        "Magelang",
        "Jawa Tengah"
      ],
      en: [
        "Government",
        "Domestic",
        "Magelang",
        "Central Java"
      ]
    }
  },
  {
    id: "barcelona-gse-spain",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Barcelona School of Economics (Spanyol)",
      en: "Barcelona Graduate School of Economics Scholarships"
    },
    provider: {
      id: "Barcelona School of Economics (BSE)",
      en: "Barcelona School of Economics (BSE)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Pengurangan biaya kuliah mulai dari 25% hingga 100% program Master",
        "Dukungan biaya hidup disesuaikan dengan prestasi"
      ],
      en: [
        "Tuition fee waiver reductions ranging from 25% to 100% for Master's studies",
        "Merit-based living cost financial assistance support"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar ke salah satu program Master BSE",
        "Menunjukkan prestasi akademik sarjana luar biasa bidang ekonomi/kuantitatif",
        "Memenuhi persyaratan visa pelajar Spanyol"
      ],
      en: [
        "International students applying for Master's programs at BSE",
        "Exceptional academic performance records in economics or quantitative studies",
        "Meet Spanish study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-01-15",
    applicationUrl: "https://bse.eu/",
    description: {
      id: "Beasiswa pascasarjana penuh dan parsial dari BSE Spanyol untuk mendidik calon ekonom top dunia.",
      en: "Barcelona School of Economics graduate scholarship program supporting outstanding international economics students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Spanyol",
        "Ekonomi"
      ],
      en: [
        "University",
        "Overseas",
        "Spain",
        "Economics"
      ]
    }
  },
  {
    id: "uc3m-international-spain",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Magister Universitas Carlos III de Madrid (Spanyol)",
      en: "Universidad Carlos III de Madrid (UC3M) Master's Scholarships"
    },
    provider: {
      id: "Universidad Carlos III de Madrid (UC3M)",
      en: "Universidad Carlos III de Madrid (UC3M)"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana biaya kuliah tahunan program Master hingga EUR 5.000",
        "Akses jaringan pendampingan akademik mahasiswa asing UC3M"
      ],
      en: [
        "Tuition fee waiver financial support worth up to EUR 5,000 annually",
        "Access to UC3M international student academic support network"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar ke program Master di UC3M",
        "Menunjukkan prestasi akademis luar biasa dengan IPK sarjana tinggi",
        "Memiliki sertifikat kemampuan bahasa Spanyol/Inggris yang valid"
      ],
      en: [
        "International student applying for a Master's program at UC3M",
        "Outstanding academic records with high undergraduate GPA",
        "Valid Spanish or English proficiency certificate"
      ]
    },
    status: 'closed',
    deadline: "2026-05-31",
    applicationUrl: "https://www.uc3m.es/home",
    description: {
      id: "Beasiswa prestasi parsial dari UC3M Spanyol khusus untuk mendanai studi pascasarjana mahasiswa asing berbakat.",
      en: "Academic merit scholarship by UC3M Spain designed specifically to support talented international graduate candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Spanyol",
        "Madrid"
      ],
      en: [
        "University",
        "Overseas",
        "Spain",
        "Madrid"
      ]
    }
  },
  {
    id: "bologna-uni-italy",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Universitas Bologna (Italia)",
      en: "University of Bologna Study Grants (Unibo Action 1 & 2)"
    },
    provider: {
      id: "University of Bologna, Italia",
      en: "University of Bologna, Italy"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Tunjangan biaya hidup tahunan senilai EUR 11.000",
        "Pembebasan biaya kuliah penuh 100% program studi"
      ],
      en: [
        "Annual living stipend allowance worth EUR 11,000",
        "100% tuition fees waiver coverage for chosen program"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar program sarjana/pascasarjana di Bologna",
        "Memiliki skor tes masuk akademik internasional yang tinggi (SAT untuk S1, GRE untuk S2)",
        "Berusia di bawah 30 tahun saat mendaftar"
      ],
      en: [
        "International students applying for undergraduate or graduate courses at Bologna",
        "High international entry test scores (SAT for bachelor, GRE for master)",
        "Under 30 years old by the application deadline"
      ]
    },
    status: 'closed',
    deadline: "2026-04-30",
    applicationUrl: "https://www.unibo.it/en",
    description: {
      id: "Beasiswa prestasi bergengsi dari Universitas Bologna Italia untuk menarik mahasiswa internasional unggul.",
      en: "Highly selective merit-based study grants and tuition waivers by the University of Bologna supporting global students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Italia",
        "Bologna"
      ],
      en: [
        "University",
        "Overseas",
        "Italy",
        "Bologna"
      ]
    }
  },
  {
    id: "padua-international-italy",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Unggulan Universitas Padua (Italia)",
      en: "University of Padua International Excellence Scholarship"
    },
    provider: {
      id: "University of Padua, Italia",
      en: "University of Padua, Italy"
    },
    degreeLevels: [
      'bachelor',
      'master'
    ],
    fundingType: 'full',
    coverage: {
      id: [
        "Tunjangan biaya hidup tahunan senilai EUR 8.000",
        "Pembebasan biaya kuliah penuh program studi",
        "Akomodasi tempat tinggal bersubsidi khusus mahasiswa asing"
      ],
      en: [
        "Annual living stipend allowance worth EUR 8,000",
        "Full tuition fees waiver coverage for undergraduate/graduate studies",
        "Subsidized housing accommodation support for international students"
      ]
    },
    requirements: {
      id: [
        "Mahasiswa internasional yang mendaftar program diajarkan dalam bahasa Inggris di Padua",
        "Menunjukkan prestasi akademik sarjana/sekolah tinggi yang luar biasa",
        "Kemampuan bahasa Inggris tinggi"
      ],
      en: [
        "International students applying for English-taught courses at Padua",
        "Exceptional academic performance records in previous studies",
        "High English language proficiency"
      ]
    },
    status: 'closed',
    deadline: "2026-03-07",
    applicationUrl: "https://www.unipd.it/en/",
    description: {
      id: "Beasiswa prestasi kanselir Universitas Padua Italia untuk membantu mendanai studi mahasiswa internasional terbaik dunia.",
      en: "Padua University's highly selective tuition waiver and living stipend scholarship program supporting outstanding international candidates."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Italia",
        "Padua"
      ],
      en: [
        "University",
        "Overseas",
        "Italy",
        "Padua"
      ]
    }
  },
  {
    id: "pavia-international-italy",
    studyLocation: [
      'overseas'
    ],
    name: {
      id: "Beasiswa Prestasi Universitas Pavia (Italia)",
      en: "University of Pavia International Master's Scholarships"
    },
    provider: {
      id: "University of Pavia, Italia",
      en: "University of Pavia, Italy"
    },
    degreeLevels: [
      'master'
    ],
    fundingType: 'partial',
    coverage: {
      id: [
        "Bantuan dana biaya kuliah tahunan program Master senilai EUR 8.000",
        "Akses jaringan pendampingan akademik mahasiswa asing Pavia"
      ],
      en: [
        "Tuition fee waiver financial support worth EUR 8,000 for Master's studies",
        "Access to Pavia international student academic support network"
      ]
    },
    requirements: {
      id: [
        "Warga negara non-Italia mendaftar program Master internasional di Pavia",
        "Menunjukkan prestasi akademis sarjana yang luar biasa",
        "Memenuhi persyaratan visa pelajar Italia"
      ],
      en: [
        "Non-Italian citizens applying for international Master's programs at Pavia",
        "Exceptional academic performance records in previous undergraduate studies",
        "Meet Italian study visa eligibility requirements"
      ]
    },
    status: 'closed',
    deadline: "2026-05-31",
    applicationUrl: "https://web.unipv.it/",
    description: {
      id: "Beasiswa keringanan biaya kuliah dari Universitas Pavia untuk mempermudah akses mahasiswa internasional berprestasi.",
      en: "Tuition fee reduction scholarship program by the University of Pavia supporting talented international graduate students."
    },
    tags: {
      id: [
        "Universitas",
        "Luar Negeri",
        "Italia",
        "Pavia"
      ],
      en: [
        "University",
        "Overseas",
        "Italy",
        "Pavia"
      ]
    }
  }
];
