"use client";

import React, { useState, useEffect } from "react";
import { scholarships, Scholarship } from "../data/scholarships";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import ScholarshipCard from "../components/ScholarshipCard";
import ScholarshipModal from "../components/ScholarshipModal";
import dynamic from "next/dynamic";

const WorldMap = dynamic(() => import("../components/WorldMap"), {
  ssr: false,
  loading: () => (
    <div
      className="lg-panel map-outer-container anim-fade-up"
      style={{
        padding: "1.25rem",
        height: "320px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255, 255, 255, 0.45)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: "30px",
            height: "30px",
            border: "2.5px solid rgba(99,102,241,0.2)",
            borderTopColor: "#6366f1",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500 }}>
          Loading map data…
        </p>
      </div>
    </div>
  )
});

import { translations, Language } from "../data/translations";
import { trackEvent } from "../lib/gtag";
import NewsletterForm from "../components/NewsletterForm";

const DEGREE_LABEL: Record<string, string> = {
  bachelor: "S1",
  master:   "S2",
  doctoral: "S3",
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDegrees, setSelectedDegrees] = useState<string[]>([]);
  const [selectedFunding, setSelectedFunding] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [deadlineAfter, setDeadlineAfter] = useState("");
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<Language>("id");

  // Comparison & Map States
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [mapCountryFilter, setMapCountryFilter] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("scholarship_bookmarks");
      if (stored) setBookmarks(JSON.parse(stored));
    } catch {}
    try {
      const storedLang = localStorage.getItem("adiguna_language") as Language;
      if (storedLang === "id" || storedLang === "en") setLanguage(storedLang);
    } catch {}
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("adiguna_language", lang);
      trackEvent("change_language", { language: lang });
    } catch {}
  };

  const t = translations[language];

  const toggleBookmark = (id: string) => {
    const isBookmarked = bookmarks.includes(id);
    const updated = isBookmarked
      ? bookmarks.filter((b) => b !== id)
      : [...bookmarks, id];
    setBookmarks(updated);
    localStorage.setItem("scholarship_bookmarks", JSON.stringify(updated));
    trackEvent("toggle_bookmark", { scholarship_id: id, action: isBookmarked ? "remove" : "add" });
  };

  const toggleCompare = (id: string) => {
    setSelectedCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id);
      }
      if (prev.length >= 3) {
        alert(language === "id" ? "Maksimal membandingkan 3 beasiswa!" : "Maximum of 3 scholarships can be compared!");
        return prev;
      }
      return [...prev, id];
    });
  };

  const toggleDegree  = (d: string) => {
    setSelectedDegrees((p) => {
      const active = p.includes(d);
      trackEvent("use_filter", { filter_category: "degree_level", filter_value: d, action: active ? "remove" : "add" });
      return active ? p.filter((x) => x !== d) : [...p, d];
    });
  };
  const toggleFunding = (f: string) => {
    setSelectedFunding((p) => {
      const active = p.includes(f);
      trackEvent("use_filter", { filter_category: "funding_type", filter_value: f, action: active ? "remove" : "add" });
      return active ? p.filter((x) => x !== f) : [...p, f];
    });
  };
  const toggleLocation = (l: string) => {
    setSelectedLocations((p) => {
      const active = p.includes(l);
      trackEvent("use_filter", { filter_category: "study_location", filter_value: l, action: active ? "remove" : "add" });
      return active ? p.filter((x) => x !== l) : [...p, l];
    });
  };
  const toggleStatus = (s: string) => {
    setSelectedStatuses((p) => {
      const active = p.includes(s);
      trackEvent("use_filter", { filter_category: "application_status", filter_value: s, action: active ? "remove" : "add" });
      return active ? p.filter((x) => x !== s) : [...p, s];
    });
  };

  const handleOpenDetails = (sc: Scholarship) => {
    setSelectedScholarship(sc);
    trackEvent("view_scholarship", {
      scholarship_id: sc.id,
      scholarship_name: sc.name[language],
      provider: sc.provider[language]
    });
  };

  const hasActiveFilter =
    !!searchQuery || selectedDegrees.length > 0 || selectedFunding.length > 0 || selectedLocations.length > 0 || selectedStatuses.length > 0 || !!deadlineAfter || showBookmarkedOnly || !!mapCountryFilter;

  // Tag & Location matching helper for map country codes
  const matchCountry = (sc: Scholarship, countryId: string) => {
    const countryTags: Record<string, string[]> = {
      indonesia: ["indonesia", "dalam negeri"],
      japan: ["jepang", "japan"],
      usa: ["amerika serikat", "usa", "united states"],
      uk: ["inggris", "uk", "united kingdom"],
      australia: ["australia"],
      singapore: ["singapura", "singapore"],
      netherlands: ["belanda", "netherlands"],
      germany: ["jerman", "germany"],
      south_korea: ["korea selatan", "south korea"],
      canada: ["kanada", "canada"],
      france: ["prancis", "france"],
      new_zealand: ["selandia baru", "new zealand"],
      sweden: ["swedia", "sweden"],
      swiss: ["swiss", "switzerland"],
      italy: ["italia", "italy"],
      thailand: ["thailand"],
      turkey: ["turki", "turkey"],
      belgium: ["belgia", "belgium"],
      ireland: ["irlandia", "ireland"],
      saudi_arabia: ["arab saudi", "saudi arabia"],
      austria: ["austria"],
      china: ["tiongkok", "china"],
      brunei: ["brunei darussalam", "brunei"],
      kuwait: ["kuwait"],
      russia: ["rusia", "russia"],
      hong_kong: ["hong kong", "hongkong"],
      taiwan: ["taiwan"],
      hungary: ["hongaria", "hungary"],
      europe: ["eropa", "europe", "uni eropa", "european union"],
      global: ["internasional", "international", "global", "multinasional", "multinational"],
      norway: ["norwegia", "norway"],
      finland: ["finlandia", "finland"],
      denmark: ["denmark"]
    };
    
    if (countryId === "indonesia" && sc.studyLocation.includes("domestic")) {
      return true;
    }
    
    const tags = countryTags[countryId];
    if (!tags) return false;
    
    const allScTags = [...sc.tags.id, ...sc.tags.en].map(t => t.toLowerCase());
    return tags.some(ctag => allScTags.includes(ctag.toLowerCase()));
  };

  const filtered = scholarships.filter((sc) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      const searchTerms = q.split(/\s+/).filter(term => term.length > 0);
      
      if (searchTerms.length > 0) {
        const nameText = sc.name[language].toLowerCase();
        const providerText = sc.provider[language].toLowerCase();
        const descText = sc.description[language].toLowerCase();
        const allTagsText = [...sc.tags.id, ...sc.tags.en].map(t => t.toLowerCase()).join(" ");
        
        const match = searchTerms.every(term => 
          nameText.includes(term) ||
          providerText.includes(term) ||
          descText.includes(term) ||
          allTagsText.includes(term)
        );
        
        if (!match) return false;
      }
    }
    if (selectedDegrees.length > 0 && !sc.degreeLevels.some((d) => selectedDegrees.includes(d))) return false;
    if (selectedFunding.length > 0 && !selectedFunding.includes(sc.fundingType)) return false;
    if (selectedLocations.length > 0 && !sc.studyLocation.some((l) => selectedLocations.includes(l))) return false;
    if (selectedStatuses.length > 0 && !selectedStatuses.includes(sc.status)) return false;
    if (deadlineAfter && sc.deadline < deadlineAfter) return false;
    if (showBookmarkedOnly && !bookmarks.includes(sc.id)) return false;
    if (mapCountryFilter && !matchCountry(sc, mapCountryFilter)) return false;
    return true;
  });

  const totalCount = scholarships.length;
  const openCount  = scholarships.filter((s) => s.status === "open").length;

  if (!mounted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg,#dbeafe,#ede9fe,#fce7f3,#cffafe)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              width: "44px", height: "44px",
              border: "3px solid rgba(99,102,241,0.2)",
              borderTopColor: "#6366f1",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ fontSize: "0.85rem", color: "#6b7280", fontWeight: 500 }}>
            Loading Adiguna Scholarship…
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="page-wrapper">
      <div className="dashboard-layout">
        {/* Left Column (Sticky Sidebar) */}
        <aside className="sidebar-container">
          <Header 
            totalCount={totalCount} 
            openCount={openCount} 
            language={language}
            onLanguageChange={handleLanguageChange}
            t={t}
          />

          <FilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedDegrees={selectedDegrees}
            toggleDegree={toggleDegree}
            selectedFunding={selectedFunding}
            toggleFunding={toggleFunding}
            selectedLocations={selectedLocations}
            toggleLocation={toggleLocation}
            selectedStatuses={selectedStatuses}
            toggleStatus={toggleStatus}
            deadlineAfter={deadlineAfter}
            setDeadlineAfter={setDeadlineAfter}
            showBookmarkedOnly={showBookmarkedOnly}
            setShowBookmarkedOnly={setShowBookmarkedOnly}
            bookmarkedCount={bookmarks.length}
            t={t}
          />

          <NewsletterForm language={language} t={t} />
        </aside>

        {/* Right Column (Main Content) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          {/* Interactive World Map */}
          <WorldMap
            scholarships={scholarships}
            activeCountry={mapCountryFilter}
            onCountrySelect={setMapCountryFilter}
            language={language}
            t={t}
          />

          {/* Section heading + reset */}
          <div className="flex items-center justify-between px-1" style={{ marginBottom: "0.25rem" }}>
            <h2
              className="flex items-center gap-2.5"
              style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text-primary)" }}
            >
              {t.availablePrograms}
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, rgba(99,102,241,0.18), rgba(79,70,229,0.12))",
                  color: "var(--accent-dark)",
                  border: "1.5px solid rgba(99,102,241,0.22)",
                }}
              >
                {filtered.length}
              </span>
            </h2>

            {hasActiveFilter && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDegrees([]);
                  setSelectedFunding([]);
                  setSelectedLocations([]);
                  setSelectedStatuses([]);
                  setDeadlineAfter("");
                  setShowBookmarkedOnly(false);
                  setMapCountryFilter(null);
                }}
                style={{
                  fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.06em",
                  textTransform: "uppercase", color: "var(--accent-dark)",
                  background: "none", border: "none", cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                {t.resetFilters}
              </button>
            )}
          </div>

          {/* Card grid */}
          {filtered.length === 0 ? (
            <div
              className="lg-panel anim-fade-up"
              style={{
                padding: "6rem 2rem", textAlign: "center",
                display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem",
              }}
            >
              <div style={{ fontSize: "3.5rem" }}>🔍</div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-primary)" }}>
                {t.noScholarships}
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", maxWidth: "380px", lineHeight: 1.7 }}>
                {t.noScholarshipsDesc}
              </p>
            </div>
          ) : (
            <div className="card-grid">
              {filtered.map((sc, i) => (
                <ScholarshipCard
                  key={sc.id}
                  scholarship={sc}
                  isBookmarked={bookmarks.includes(sc.id)}
                  onToggleBookmark={() => toggleBookmark(sc.id)}
                  onOpenDetails={() => handleOpenDetails(sc)}
                  isCompareSelected={selectedCompareIds.includes(sc.id)}
                  onToggleCompare={() => toggleCompare(sc.id)}
                  searchQuery={searchQuery}
                  index={i}
                  t={t}
                  language={language}
                />
              ))}
            </div>
          )}

          {/* Footer */}
          <footer
            style={{
              marginTop: "4rem", paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.45)",
              textAlign: "center",
              fontSize: "0.75rem", color: "var(--text-soft)",
            }}
          >
            © {new Date().getFullYear()} {t.footerText}
          </footer>
        </div>
      </div>

      {/* Floating Comparison Drawer */}
      {selectedCompareIds.length > 0 && (
        <div className="compare-dock">
          <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--text-primary)" }}>
            <span className="compare-badge">{selectedCompareIds.length}</span>{" "}
            {language === "id" ? "beasiswa dipilih" : "scholarships selected"}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsCompareModalOpen(true)}
              className="btn btn-primary"
              style={{ padding: "0.45rem 1rem", fontSize: "0.72rem", borderRadius: "10px", textTransform: "none" }}
            >
              {language === "id" ? "Bandingkan Sekarang" : "Compare Now"}
            </button>
            <button
              onClick={() => setSelectedCompareIds([])}
              className="btn-glass"
              style={{ padding: "0.45rem 1rem", fontSize: "0.72rem", borderRadius: "10px", textTransform: "none" }}
            >
              {language === "id" ? "Batal" : "Clear"}
            </button>
          </div>
        </div>
      )}

      {/* Comparison Modal Overlay */}
      {isCompareModalOpen && (
        <div className="compare-modal-overlay" onClick={() => setIsCompareModalOpen(false)}>
          <div className="lg-panel lg-panel-strong modal-panel compare-modal anim-fade-up" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between" style={{ borderBottom: "1.5px solid rgba(0,0,0,0.08)", paddingBottom: "1.25rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 900, color: "var(--text-primary)" }}>
                {language === "id" ? "Perbandingan Beasiswa" : "Scholarship Comparison"}
              </h2>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="btn-glass"
                style={{ padding: "0.45rem 0.85rem", borderRadius: "10px", fontSize: "0.72rem", textTransform: "none" }}
              >
                ✕ {language === "id" ? "Tutup" : "Close"}
              </button>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table className="compare-table">
                <thead>
                  <tr>
                    <th style={{ width: "160px" }}>{language === "id" ? "Aspek / Fitur" : "Aspect / Feature"}</th>
                    {selectedCompareIds.map((id) => {
                      const sc = scholarships.find((s) => s.id === id);
                      return (
                        <th key={id} style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)" }}>
                          {sc?.name[language]}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{language === "id" ? "Penyedia" : "Provider"}</th>
                    {selectedCompareIds.map((id) => {
                      const sc = scholarships.find((s) => s.id === id);
                      return <td key={id}>{sc?.provider[language]}</td>;
                    })}
                  </tr>
                  <tr>
                    <th>{language === "id" ? "Jenjang Pendidikan" : "Degree Levels"}</th>
                    {selectedCompareIds.map((id) => {
                      const sc = scholarships.find((s) => s.id === id);
                      return (
                        <td key={id} style={{ fontWeight: 600 }}>
                          {sc?.degreeLevels.map((lvl) => DEGREE_LABEL[lvl]).join(", ")}
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <th>{language === "id" ? "Lokasi Studi" : "Study Location"}</th>
                    {selectedCompareIds.map((id) => {
                      const sc = scholarships.find((s) => s.id === id);
                      return (
                        <td key={id}>
                          {sc?.studyLocation
                            .map((l) => (l === "domestic" ? (language === "id" ? "Dalam Negeri" : "Domestic") : (language === "id" ? "Luar Negeri" : "Overseas")))
                            .join(", ")}
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <th>{language === "id" ? "Jenis Pendanaan" : "Funding Type"}</th>
                    {selectedCompareIds.map((id) => {
                      const sc = scholarships.find((s) => s.id === id);
                      return (
                        <td key={id}>
                          <span className="badge badge-degree">
                            {sc?.fundingType === "full" ? (language === "id" ? "Penuh (Fully Funded)" : "Full") : (language === "id" ? "Sebagian (Partial)" : "Partial")}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <th>{language === "id" ? "Cakupan Biaya" : "Coverage & Benefits"}</th>
                    {selectedCompareIds.map((id) => {
                      const sc = scholarships.find((s) => s.id === id);
                      return (
                        <td key={id}>
                          <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", margin: 0, gap: "0.25rem", display: "flex", flexDirection: "column" }}>
                            {sc?.coverage[language].map((cov: string, idx: number) => (
                              <li key={idx} style={{ fontSize: "0.78rem" }}>{cov}</li>
                            ))}
                          </ul>
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <th>{language === "id" ? "Persyaratan" : "Requirements"}</th>
                    {selectedCompareIds.map((id) => {
                      const sc = scholarships.find((s) => s.id === id);
                      return (
                        <td key={id}>
                          <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", margin: 0, gap: "0.25rem", display: "flex", flexDirection: "column" }}>
                            {sc?.requirements[language].map((req: string, idx: number) => (
                              <li key={idx} style={{ fontSize: "0.78rem" }}>{req}</li>
                            ))}
                          </ul>
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <th>{language === "id" ? "Tenggat Pendaftaran" : "Application Deadline"}</th>
                    {selectedCompareIds.map((id) => {
                      const sc = scholarships.find((s) => s.id === id);
                      return (
                        <td key={id} style={{ fontWeight: 700 }}>
                          {sc &&
                            new Date(sc.deadline).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Modal */}
      <ScholarshipModal
        scholarship={selectedScholarship}
        onClose={() => setSelectedScholarship(null)}
        isBookmarked={selectedScholarship ? bookmarks.includes(selectedScholarship.id) : false}
        onToggleBookmark={() => selectedScholarship && toggleBookmark(selectedScholarship.id)}
        t={t}
        language={language}
      />
    </main>
  );
}
