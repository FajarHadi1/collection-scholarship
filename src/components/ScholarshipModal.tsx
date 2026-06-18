"use client";

import React, { useEffect } from "react";
import { Scholarship } from "../data/scholarships";
import { Language, Dictionary } from "../data/translations";

interface ScholarshipModalProps {
  scholarship: Scholarship | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  t: Dictionary;
  language: Language;
}

const DEGREE_LABEL: Record<string, { id: string; en: string }> = {
  bachelor: { id: "Sarjana (S1)", en: "Bachelor (S1)" },
  master:   { id: "Magister (S2)", en: "Master (S2)" },
  doctoral: { id: "Doktor (S3)", en: "Doctoral (S3)" },
};

export default function ScholarshipModal({
  scholarship, onClose, isBookmarked, onToggleBookmark, t, language,
}: ScholarshipModalProps) {
  // Lock body scroll
  useEffect(() => {
    if (scholarship) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [scholarship]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!scholarship) return null;

  const {
    name, provider, degreeLevels, fundingType,
    coverage, requirements, status, deadline,
    applicationUrl, description,
  } = scholarship;

  const days = Math.max(0, Math.ceil((new Date(deadline).getTime() - Date.now()) / 86400000));

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Panel */}
      <div
        className="modal-card anim-scale-in"
        style={{
          width: "100%",
          maxWidth: "680px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "0",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Gradient accent top strip ── */}
        <div
          style={{
            height: "4px",
            background: "linear-gradient(90deg,#6366f1,#8b5cf6,#06b6d4)",
            borderRadius: "20px 20px 0 0",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "rgba(255,255,255,0.65)", border: "1.5px solid rgba(255,255,255,0.8)",
            borderRadius: "10px", padding: "0.4rem", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            transition: "all 0.2s",
          }}
        >
          <svg style={{ width: "16px", height: "16px", color: "var(--text-muted)" }}
            fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="modal-panel">
          {/* ── Header ── */}
          <div style={{ marginBottom: "2rem" }}>
            <p className="section-label" style={{ marginBottom: "0.5rem" }}>{provider[language]}</p>
            <h2
              style={{
                fontSize: "1.7rem", fontWeight: 900,
                color: "var(--text-primary)", lineHeight: 1.15,
                paddingRight: "2.5rem", marginBottom: "1.25rem",
              }}
            >
              {name[language]}
            </h2>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className={`badge ${status === "open" ? "badge-open" : status === "closed" ? "badge-closed" : "badge-soon"}`}>
                {status === "open" 
                  ? (language === "id" ? "● Buka" : "● Open") 
                  : status === "closed" 
                    ? (language === "id" ? "Tutup" : "Closed") 
                    : (language === "id" ? "Segera Buka" : "Opening Soon")}
              </span>
              <span className="badge badge-degree">
                {fundingType === "full" 
                  ? (language === "id" ? "✦ Pendanaan Penuh" : "✦ Full Funded") 
                  : (language === "id" ? "Sebagian" : "Partial")}
              </span>
              {degreeLevels.map((lvl) => (
                <span key={lvl} className="badge badge-degree">{DEGREE_LABEL[lvl][language]}</span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.6)", marginBottom: "2rem" }} />

          {/* ── Description ── */}
          <div style={{ marginBottom: "2rem" }}>
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>{t.aboutProgram}</p>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.75 }}>
              {description[language]}
            </p>
          </div>

          {/* ── Coverage + Requirements ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ marginBottom: "2rem" }}>
            {/* Coverage */}
            <div
              className="lg-panel"
              style={{ padding: "1.5rem", background: "rgba(209,250,229,0.35)" }}
            >
              <p className="section-label flex items-center gap-1.5" style={{ marginBottom: "1rem" }}>
                <span style={{ color: "#10b981" }}>✓</span> {t.coverageBenefits}
              </p>
              <ul className="flex flex-col gap-2.5">
                {coverage[language].map((c, i) => (
                  <li key={i} className="flex items-start gap-2"
                    style={{ fontSize: "0.82rem", color: "#065f46", lineHeight: 1.55 }}>
                    <span style={{ color: "#10b981", marginTop: "0.1rem", fontWeight: 700 }}>•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div
              className="lg-panel"
              style={{ padding: "1.5rem", background: "rgba(238,242,255,0.45)" }}
            >
              <p className="section-label flex items-center gap-1.5" style={{ marginBottom: "1rem" }}>
                <span style={{ color: "#6366f1" }}>✦</span> {t.eligibilityReqs}
              </p>
              <ul className="flex flex-col gap-2.5">
                {requirements[language].map((r, i) => (
                  <li key={i} className="flex items-start gap-2"
                    style={{ fontSize: "0.82rem", color: "var(--text-primary)", lineHeight: 1.55 }}>
                    <span style={{ color: "var(--text-soft)", marginTop: "0.1rem" }}>–</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Deadline card ── */}
          <div
            className="lg-panel"
            style={{
              padding: "1.25rem 1.5rem",
              marginBottom: "2rem",
              background: "rgba(254,243,199,0.5)",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexWrap: "wrap", gap: "0.75rem",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "0.25rem" }}>{t.appDeadline}</p>
              <p style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-primary)" }}>
                {new Date(deadline).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </p>
            </div>
            <span
              className="badge"
              style={{
                background: days <= 14 ? "rgba(254,226,226,0.85)" : "rgba(255,255,255,0.65)",
                color: days <= 14 ? "#991b1b" : "var(--text-muted)",
                border: `1px solid ${days <= 14 ? "rgba(248,113,113,0.4)" : "rgba(255,255,255,0.75)"}`,
                fontSize: "0.78rem", padding: "0.35rem 0.9rem",
              }}
            >
              {days > 0 ? `${days} ${t.daysLeft}` : t.deadlinePassed}
            </span>
          </div>

           {/* ── Disclaimer Box ── */}
          <div
            className="lg-panel"
            style={{
              padding: "0.85rem 1.15rem",
              marginBottom: "1.75rem",
              background: "rgba(255, 255, 255, 0.25)",
              border: "1px solid rgba(255, 255, 255, 0.35)",
              borderRadius: "14px",
            }}
          >
            <p className="section-label" style={{ fontSize: "0.72rem", marginBottom: "0.2rem", color: "var(--text-soft)", fontWeight: 700 }}>
              ⚠️ {t.disclaimerTitle}
            </p>
            <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
              {t.disclaimerText}
            </p>
          </div>

          {/* ── CTA footer ── */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={onToggleBookmark}
              className="btn-glass"
              style={
                isBookmarked
                  ? { background: "rgba(244,63,94,0.12)", borderColor: "rgba(244,63,94,0.35)", color: "#f43f5e" }
                  : {}
              }
            >
              <svg viewBox="0 0 24 24" strokeWidth="2"
                style={{ width: "15px", height: "15px", fill: isBookmarked ? "#f43f5e" : "none", stroke: isBookmarked ? "#f43f5e" : "currentColor" }}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {isBookmarked ? t.savedBtn : t.saveBtn}
            </button>

            <a
              href={applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ flex: 1, textDecoration: "none", textAlign: "center" }}
            >
              {t.applyBtn}
            </a>
          </div>

          {/* ── Report Link ── */}
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <a
              href={`mailto:report@adigunascholarship.com?subject=${encodeURIComponent(
                language === "id" ? `Laporan Kesalahan: ${name.id}` : `Data Error Report: ${name.en}`
              )}&body=${encodeURIComponent(
                language === "id"
                  ? `Halo Tim Adiguna,\n\nSaya ingin melaporkan kesalahan data atau link rusak pada beasiswa "${name.id}".\n\nDetail Kesalahan:\n- \n- \n`
                  : `Hello Adiguna Team,\n\nI would like to report a data error or broken link for the scholarship "${name.en}".\n\nError details:\n- \n- \n`
              )}`}
              style={{
                fontSize: "0.75rem",
                color: "var(--text-soft)",
                textDecoration: "none",
                fontWeight: 600,
                transition: "color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.25rem"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-soft)")}
            >
              {t.reportInaccuracy}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
