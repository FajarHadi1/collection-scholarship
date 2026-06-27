import React from "react";
import { Language, Dictionary } from "../data/translations";

interface HeaderProps {
  totalCount: number;
  openCount: number;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: Dictionary;
}

export default function Header({ totalCount, openCount, language, onLanguageChange, t }: HeaderProps) {
  return (
    <header className="lg-panel lg-panel-strong header-panel anim-fade-up">
      {/* Top row: tags & language switcher */}
      <div className="flex items-center justify-between" style={{ marginBottom: "1.25rem" }}>
        <div className="flex items-center gap-2">
          <span className="badge badge-open" style={{ fontSize: "0.68rem", padding: "0.25rem 0.65rem" }}>
            🇮🇩 ID
          </span>
          <span className="badge badge-pill" style={{ fontSize: "0.62rem", padding: "0.2rem 0.55rem" }}>
            v2.1
          </span>
        </div>

        {/* Language selector toggle */}
        <div 
          style={{ 
            display: "inline-flex", 
            background: "rgba(255,255,255,0.45)", 
            padding: "2.5px", 
            borderRadius: "9px",
            border: "1.5px solid rgba(255,255,255,0.6)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.03)"
          }}
        >
          <button
            onClick={() => onLanguageChange("id")}
            style={{
              background: language === "id" ? "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(79,70,229,0.12))" : "transparent",
              border: "none",
              borderRadius: "6px",
              padding: "0.25rem 0.55rem",
              fontSize: "0.65rem",
              fontWeight: 800,
              cursor: "pointer",
              color: language === "id" ? "var(--accent-dark)" : "var(--text-muted)",
              boxShadow: language === "id" ? "0 1px 4px rgba(99,102,241,0.12)" : "none",
              transition: "all 0.2s"
            }}
          >
            ID
          </button>
          <button
            onClick={() => onLanguageChange("en")}
            style={{
              background: language === "en" ? "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(79,70,229,0.12))" : "transparent",
              border: "none",
              borderRadius: "6px",
              padding: "0.25rem 0.55rem",
              fontSize: "0.65rem",
              fontWeight: 800,
              cursor: "pointer",
              color: language === "en" ? "var(--accent-dark)" : "var(--text-muted)",
              boxShadow: language === "en" ? "0 1px 4px rgba(99,102,241,0.12)" : "none",
              transition: "all 0.2s"
            }}
          >
            EN
          </button>
        </div>
      </div>

      {/* Branding title & description */}
      <div>
        <h1 
          className="font-black tracking-tight leading-[1.1]"
          style={{ fontSize: "2.1rem", marginBottom: "0.75rem" }}
        >
          <span className="gradient-text">Adiguna</span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>Scholarship</span>
          <span className="sr-only" style={{ display: "none" }}> - Portal Informasi Beasiswa S1, S2, S3 Terlengkap</span>
        </h1>

        <p
          style={{ 
            fontSize: "0.82rem", 
            lineHeight: "1.55", 
            color: "var(--text-muted)",
          }}
        >
          {t.subtitle}
        </p>
      </div>

      {/* Stats container */}
      <div 
        style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "0.75rem",
          marginTop: "0.25rem",
        }}
      >
        {[
          { label: t.totalPrograms, value: totalCount, highlight: false },
          { label: t.currentlyOpen, value: openCount, highlight: true },
        ].map(({ label, value, highlight }) => (
          <div
            key={label}
            className="lg-panel"
            style={{ 
              background: "rgba(255,255,255,0.45)",
              padding: "1rem 0.5rem",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="section-label" style={{ fontSize: "0.58rem", marginBottom: "0.25rem" }}>{label}</p>
            <p
              className="stat-number font-black"
              style={{
                fontSize: "1.6rem",
                background: highlight 
                  ? "linear-gradient(135deg, #10b981, #06b6d4)" 
                  : "linear-gradient(135deg, var(--accent), var(--accent-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {value}
            </p>
          </div>
        ))}
      </div>
    </header>
  );
}
