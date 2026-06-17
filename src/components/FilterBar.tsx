"use client";

import React from "react";
import { Dictionary } from "../data/translations";

interface FilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedDegrees: string[];
  toggleDegree: (d: string) => void;
  selectedFunding: string[];
  toggleFunding: (f: string) => void;
  selectedLocations: string[];
  toggleLocation: (l: string) => void;
  selectedStatuses: string[];
  toggleStatus: (s: string) => void;
  deadlineAfter: string;
  setDeadlineAfter: (date: string) => void;
  showBookmarkedOnly: boolean;
  setShowBookmarkedOnly: (v: boolean) => void;
  bookmarkedCount: number;
  t: Dictionary;
}

const DEGREES = [
  { id: "bachelor", label: "S1 Bachelor" },
  { id: "master",   label: "S2 Master"   },
  { id: "doctoral", label: "S3 Doctoral" },
];

const FUNDING = [
  { id: "full",    label: "Full Funded" },
  { id: "partial", label: "Partial"     },
];

export default function FilterBar({
  searchQuery, setSearchQuery,
  selectedDegrees, toggleDegree,
  selectedFunding, toggleFunding,
  selectedLocations, toggleLocation,
  selectedStatuses, toggleStatus,
  deadlineAfter, setDeadlineAfter,
  showBookmarkedOnly, setShowBookmarkedOnly,
  bookmarkedCount,
  t,
}: FilterBarProps) {
  const LOCATIONS = [
    { id: "domestic", label: t.domestic },
    { id: "overseas", label: t.overseas },
  ];
  const STATUSES = [
    { id: "open", label: t.statusOpen },
    { id: "soon", label: t.statusSoon },
    { id: "closed", label: t.statusClosed },
  ];
  return (
    <div className="lg-panel filter-panel anim-fade-up" style={{ animationDelay: "0.08s" }}>

      {/* ── Search ── */}
      <div className="relative">
        {/* Search icon */}
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2"
          style={{ color: "var(--text-soft)", width: "18px", height: "18px" }}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        <input
          type="text"
          placeholder={t.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="lg-input"
        />

        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            style={{
              position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
              color: "var(--text-muted)", fontSize: "0.72rem", fontWeight: 700,
              background: "rgba(255,255,255,0.7)", padding: "0.2rem 0.55rem",
              borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.8)",
              cursor: "pointer", transition: "all 0.2s",
            }}
          >
            Clear
          </button>
        )}
      </div>

      {/* ── Filters Stack ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        
        {/* Degree Levels */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <span className="section-label">{t.degreeLevel}</span>
          <div className="flex flex-wrap gap-2">
            {DEGREES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => toggleDegree(id)}
                className={`filter-chip ${selectedDegrees.includes(id) ? "active" : ""}`}
                style={{ flex: "1 1 calc(50% - 0.5rem)", textAlign: "center" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Funding Types */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <span className="section-label">{t.fundingType}</span>
          <div className="flex flex-wrap gap-2">
            {FUNDING.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => toggleFunding(id)}
                className={`filter-chip ${selectedFunding.includes(id) ? "active" : ""}`}
                style={{ flex: "1 1 calc(50% - 0.5rem)", textAlign: "center" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Study Location */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <span className="section-label">{t.studyLocation}</span>
          <div className="flex flex-wrap gap-2">
            {LOCATIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => toggleLocation(id)}
                className={`filter-chip ${selectedLocations.includes(id) ? "active" : ""}`}
                style={{ flex: "1 1 calc(50% - 0.5rem)", textAlign: "center" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Application Status */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <span className="section-label">{t.applicationStatus}</span>
          <div className="flex flex-wrap gap-2">
            {STATUSES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => toggleStatus(id)}
                className={`filter-chip ${selectedStatuses.includes(id) ? "active" : ""}`}
                style={{ flex: "1 1 calc(33.33% - 0.5rem)", textAlign: "center", fontSize: "0.7rem", padding: "0.4rem 0.2rem" }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Deadline Picker */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <span className="section-label">{t.deadlineAfter}</span>
          <div className="relative" style={{ width: "100%" }}>
            <input
              type="date"
              value={deadlineAfter}
              onChange={(e) => setDeadlineAfter(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(12px)",
                border: "1.5px solid rgba(255,255,255,0.72)",
                borderRadius: "12px",
                padding: "0.48rem 0.85rem",
                fontSize: "0.78rem",
                fontFamily: "var(--font-main)",
                color: "var(--text-primary)",
                outline: "none",
                cursor: "pointer",
                height: "40px",
                width: "100%",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            />
            {deadlineAfter && (
              <button
                onClick={() => setDeadlineAfter("")}
                style={{
                  position: "absolute", right: "12px", top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-soft)", fontSize: "10px", fontWeight: 900,
                  cursor: "pointer", background: "none", border: "none",
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Bookmarks Toggle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.25rem" }}>
          <span className="section-label">{t.savedPrograms}</span>
          <button
            onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
            className={`btn-glass ${showBookmarkedOnly ? "btn-glass-active" : ""}`}
            style={{ width: "100%", justifyContent: "center" }}
          >
            {/* Heart icon */}
            <svg
              className="w-4 h-4"
              style={{ width: "16px", height: "16px", color: showBookmarkedOnly ? "#f43f5e" : "var(--text-muted)" }}
              viewBox="0 0 24 24" strokeWidth="2"
              fill={showBookmarkedOnly ? "#f43f5e" : "none"}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {t.savedPrograms} ({bookmarkedCount})
          </button>
        </div>

      </div>
    </div>
  );
}
