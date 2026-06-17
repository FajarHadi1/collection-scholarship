export type Language = "id" | "en";

export interface Dictionary {
  subtitle: string;
  totalPrograms: string;
  currentlyOpen: string;
  searchPlaceholder: string;
  degreeLevel: string;
  studyLocation: string;
  fundingType: string;
  applicationStatus: string;
  domestic: string;
  overseas: string;
  statusOpen: string;
  statusSoon: string;
  statusClosed: string;
  deadlineAfter: string;
  savedPrograms: string;
  availablePrograms: string;
  resetFilters: string;
  noScholarships: string;
  noScholarshipsDesc: string;
  daysRemaining: string;
  deadlinePassed: string;
  deadlineLabel: string;
  detailsBtn: string;
  aboutProgram: string;
  coverageBenefits: string;
  eligibilityReqs: string;
  appDeadline: string;
  daysLeft: string;
  saveBtn: string;
  savedBtn: string;
  applyBtn: string;
  footerText: string;
}

export const translations: Record<Language, Dictionary> = {
  id: {
    subtitle: "Temukan dan lacak peluang beasiswa dari Program Sarjana (S1) hingga Doktor (S3) di Indonesia dan luar negeri.",
    totalPrograms: "Total Program",
    currentlyOpen: "Sedang Dibuka",
    searchPlaceholder: "Cari kata kunci, penyedia...",
    degreeLevel: "Jenjang Pendidikan",
    studyLocation: "Lokasi Studi",
    fundingType: "Jenis Pendanaan",
    applicationStatus: "Status Pendaftaran",
    domestic: "Dalam Negeri",
    overseas: "Luar Negeri",
    statusOpen: "Buka",
    statusSoon: "Segera Buka",
    statusClosed: "Tutup",
    deadlineAfter: "Tenggat Setelah",
    savedPrograms: "Saved Bookmarks",
    availablePrograms: "Program Tersedia",
    resetFilters: "Atur Ulang Filter",
    noScholarships: "Beasiswa Tidak Ditemukan",
    noScholarshipsDesc: "Tidak ada program yang sesuai dengan filter Anda. Coba sesuaikan kata kunci atau bersihkan filter.",
    daysRemaining: "hari tersisa",
    deadlinePassed: "Tenggat terlampaui",
    deadlineLabel: "Tenggat Waktu",
    detailsBtn: "Detail →",
    aboutProgram: "Tentang Program",
    coverageBenefits: "Cakupan & Manfaat",
    eligibilityReqs: "Persyaratan Kelayakan",
    appDeadline: "Tenggat Pendaftaran",
    daysLeft: "hari tersisa",
    saveBtn: "Simpan",
    savedBtn: "Disimpan",
    applyBtn: "Daftar di Situs Resmi ↗",
    footerText: "Adiguna Scholarship · Dibuat dengan ❤️ untuk scholar Indonesia di seluruh dunia",
  },
  en: {
    subtitle: "Discover and track curated scholarship opportunities from Bachelor (S1) to Doctoral (S3) programs.",
    totalPrograms: "Total Programs",
    currentlyOpen: "Currently Open",
    searchPlaceholder: "Search by keyword, provider...",
    degreeLevel: "Degree Level",
    studyLocation: "Study Location",
    fundingType: "Funding Type",
    applicationStatus: "Application Status",
    domestic: "Domestic",
    overseas: "Overseas",
    statusOpen: "Open",
    statusSoon: "Opening Soon",
    statusClosed: "Closed",
    deadlineAfter: "Deadline After",
    savedPrograms: "Saved Bookmarks",
    availablePrograms: "Available Programs",
    resetFilters: "Reset Filters",
    noScholarships: "No Scholarships Found",
    noScholarshipsDesc: "No programs match your current filter selections. Try adjusting your search or clearing some filters.",
    daysRemaining: "days remaining",
    deadlinePassed: "Deadline passed",
    deadlineLabel: "Deadline",
    detailsBtn: "Details →",
    aboutProgram: "About the Program",
    coverageBenefits: "Coverage & Benefits",
    eligibilityReqs: "Eligibility Requirements",
    appDeadline: "Application Deadline",
    daysLeft: "days left",
    saveBtn: "Save",
    savedBtn: "Saved",
    applyBtn: "Apply on Official Site ↗",
    footerText: "Adiguna Scholarship · Made with ❤️ for Indonesian scholars worldwide",
  }
};
