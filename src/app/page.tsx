"use client";

import React, { useState, useEffect } from "react";
import { scholarships, Scholarship } from "../data/scholarships";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import ScholarshipCard from "../components/ScholarshipCard";
import ScholarshipModal from "../components/ScholarshipModal";

import { translations, Language } from "../data/translations";

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
    } catch {}
  };

  const t = translations[language];

  const toggleBookmark = (id: string) => {
    const updated = bookmarks.includes(id)
      ? bookmarks.filter((b) => b !== id)
      : [...bookmarks, id];
    setBookmarks(updated);
    localStorage.setItem("scholarship_bookmarks", JSON.stringify(updated));
  };

  const toggleDegree  = (d: string) =>
    setSelectedDegrees((p) => (p.includes(d) ? p.filter((x) => x !== d) : [...p, d]));
  const toggleFunding = (f: string) =>
    setSelectedFunding((p) => (p.includes(f) ? p.filter((x) => x !== f) : [...p, f]));
  const toggleLocation = (l: string) =>
    setSelectedLocations((p) => (p.includes(l) ? p.filter((x) => x !== l) : [...p, l]));
  const toggleStatus = (s: string) =>
    setSelectedStatuses((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const hasActiveFilter =
    !!searchQuery || selectedDegrees.length > 0 || selectedFunding.length > 0 || selectedLocations.length > 0 || selectedStatuses.length > 0 || !!deadlineAfter || showBookmarkedOnly;

  const filtered = scholarships.filter((sc) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const nameMatch = sc.name[language].toLowerCase().includes(q);
      const providerMatch = sc.provider[language].toLowerCase().includes(q);
      const descMatch = sc.description[language].toLowerCase().includes(q);
      const tagMatch = sc.tags[language].some((t) => t.toLowerCase().includes(q));

      if (!nameMatch && !providerMatch && !descMatch && !tagMatch) return false;
    }
    if (selectedDegrees.length > 0 && !sc.degreeLevels.some((d) => selectedDegrees.includes(d))) return false;
    if (selectedFunding.length > 0 && !selectedFunding.includes(sc.fundingType)) return false;
    if (selectedLocations.length > 0 && !sc.studyLocation.some((l) => selectedLocations.includes(l))) return false;
    if (selectedStatuses.length > 0 && !selectedStatuses.includes(sc.status)) return false;
    if (deadlineAfter && sc.deadline < deadlineAfter) return false;
    if (showBookmarkedOnly && !bookmarks.includes(sc.id)) return false;
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
  }  return (
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
        </aside>

        {/* Right Column (Main Content) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
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
                  onOpenDetails={() => setSelectedScholarship(sc)}
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
