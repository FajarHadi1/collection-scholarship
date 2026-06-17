import React from "react";
import { Scholarship } from "../data/scholarships";
import { Language, Dictionary } from "../data/translations";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onOpenDetails: () => void;
  index?: number;
  t: Dictionary;
  language: Language;
}

function daysUntil(dateStr: string): number {
  return Math.max(0, Math.ceil((new Date(dateStr).getTime() - Date.now()) / 86400000));
}

function deadlineProgress(dateStr: string): number {
  // Show 100% bar when 90+ days left, shrinks as deadline approaches
  const days = daysUntil(dateStr);
  return Math.min(100, Math.round((days / 90) * 100));
}

const STATUS_CONFIG: Record<string, { label: { id: string; en: string }; cls: string }> = {
  open:   { label: { id: "Buka", en: "Open" },             cls: "badge-open"   },
  closed: { label: { id: "Tutup", en: "Closed" },          cls: "badge-closed" },
  soon:   { label: { id: "Segera Buka", en: "Opening Soon" }, cls: "badge-soon"   },
};

const DEGREE_LABEL: Record<string, string> = {
  bachelor: "S1",
  master:   "S2",
  doctoral: "S3",
};

const DELAY_CLASSES = [
  "anim-delay-1","anim-delay-2","anim-delay-3",
  "anim-delay-4","anim-delay-5","anim-delay-6",
];

export default function ScholarshipCard({
  scholarship,
  isBookmarked,
  onToggleBookmark,
  onOpenDetails,
  index = 0,
  t,
  language,
}: ScholarshipCardProps) {
  const { name, provider, degreeLevels, fundingType, status, deadline, description } = scholarship;
  const { label: statusLabels, cls: statusCls } = STATUS_CONFIG[status];
  const statusLabel = statusLabels[language];
  const days = daysUntil(deadline);
  const progress = deadlineProgress(deadline);
  const delayClass = DELAY_CLASSES[index % DELAY_CLASSES.length];

  return (
    <article
      className={`lg-panel lg-panel-hover card-panel anim-fade-up ${delayClass}`}
      style={{ minHeight: "360px" }}
    >
      {/* ── Top row: provider + bookmark ── */}
      <div className="flex items-start justify-between gap-3" style={{ marginBottom: "1.25rem" }}>
        <p
          className="section-label truncate"
          style={{ maxWidth: "210px" }}
          title={provider[language]}
        >
          {provider[language]}
        </p>

        <button
          onClick={(e) => { e.stopPropagation(); onToggleBookmark(); }}
          aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          style={{
            padding: "0.45rem",
            borderRadius: "10px",
            background: isBookmarked ? "rgba(244,63,94,0.12)" : "rgba(255,255,255,0.55)",
            border: `1.5px solid ${isBookmarked ? "rgba(244,63,94,0.35)" : "rgba(255,255,255,0.75)"}`,
            cursor: "pointer",
            transition: "all 0.2s ease",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg
            viewBox="0 0 24 24" strokeWidth="2.2"
            style={{
              width: "15px", height: "15px",
              fill: isBookmarked ? "#f43f5e" : "none",
              stroke: isBookmarked ? "#f43f5e" : "var(--text-soft)",
              transition: "all 0.2s",
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* ── Title ── */}
      <h3
        className="font-bold leading-snug"
        style={{
          fontSize: "1.1rem",
          color: "var(--text-primary)",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          marginBottom: "1rem",
        }}
      >
        {name[language]}
      </h3>

      {/* ── Badges ── */}
      <div className="flex flex-wrap gap-1.5" style={{ marginBottom: "1.25rem" }}>
        <span className={`badge ${statusCls}`}>
          {status === "open" && "● "}{statusLabel}
        </span>
        <span className="badge badge-degree">
          {fundingType === "full" ? (language === "id" ? "Pendanaan Penuh" : "Full Funded") : (language === "id" ? "Sebagian" : "Partial")}
        </span>
        {degreeLevels.map((lvl) => (
          <span key={lvl} className="badge badge-degree">{DEGREE_LABEL[lvl]}</span>
        ))}
      </div>

      {/* ── Description ── */}
      <p
        className="text-xs leading-relaxed flex-1"
        style={{
          color: "var(--text-muted)",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          marginBottom: "1.75rem",
        }}
      >
        {description[language]}
      </p>

      {/* ── Deadline bar ── */}
      {status !== "closed" && (
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              height: "3px", borderRadius: "9999px",
              background: "rgba(255,255,255,0.4)",
              overflow: "hidden",
            }}
          >
            <div
              className="deadline-bar"
              style={{ width: `${progress}%`, height: "100%", transition: "width 0.6s ease" }}
            />
          </div>
          <p
            className="mt-1.5"
            style={{ fontSize: "0.65rem", color: days <= 14 ? "#ef4444" : "var(--text-soft)", fontWeight: 600 }}
          >
            {days > 0 ? `${days} ${t.daysRemaining}` : t.deadlinePassed}
          </p>
        </div>
      )}

      {/* ── Footer: deadline + CTA ── */}
      <div
        className="flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(255,255,255,0.55)", paddingTop: "1.25rem" }}
      >
        <div>
          <p className="section-label" style={{ marginBottom: "0.15rem" }}>{t.deadlineLabel}</p>
          <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-primary)" }}>
            {new Date(deadline).toLocaleDateString(language === "id" ? "id-ID" : "en-US", {
              day: "numeric", month: "short", year: "numeric",
            })}
          </p>
        </div>

        <button onClick={onOpenDetails} className="btn-glass" style={{ fontSize: "0.72rem", padding: "0.55rem 1rem" }}>
          {t.detailsBtn}
        </button>
      </div>
    </article>
  );
}
