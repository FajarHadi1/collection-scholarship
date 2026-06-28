import React from "react";
import { scholarships } from "../../../data/scholarships";
import { translations, Language } from "../../../data/translations";
import Link from "next/link";
import { Metadata } from "next";

export const dynamic = "force-static";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return scholarships.map((sc) => ({
    id: sc.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const sc = scholarships.find((s) => s.id === id);
  if (!sc) {
    return {
      title: "Beasiswa Tidak Ditemukan | Adiguna Scholarship",
    };
  }

  return {
    title: `Pendaftaran ${sc.name.id} 2026 - Syarat & Cakupan | Adiguna`,
    description: `Informasi lengkap mengenai ${sc.name.id} oleh ${sc.provider.id}. Simak rincian cakupan pendanaan, kriteria kelayakan, dan tenggat waktu pendaftaran resmi.`,
    alternates: {
      canonical: `https://adiguna-scholarship.vercel.app/scholarship/${id}`,
    },
    openGraph: {
      title: `Pendaftaran ${sc.name.id} 2026 - Syarat & Cakupan | Adiguna`,
      description: `Informasi lengkap mengenai ${sc.name.id} oleh ${sc.provider.id}. Simak rincian cakupan pendanaan, kriteria kelayakan, dan tenggat waktu pendaftaran resmi.`,
      url: `https://adiguna-scholarship.vercel.app/scholarship/${id}`,
      type: "website",
    },
  };
}

const DEGREE_LABEL: Record<string, string> = {
  bachelor: "S1",
  master:   "S2",
  doctoral: "S3",
};

export default async function ScholarshipDetailPage({ params }: PageProps) {
  const { id } = await params;
  const sc = scholarships.find((s) => s.id === id);

  if (!sc) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6" style={{ background: "linear-gradient(135deg, #dbeafe, #ede9fe, #fce7f3, #cffafe)" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 900 }}>404</h1>
        <p style={{ margin: "1rem 0" }}>Beasiswa tidak ditemukan.</p>
        <Link href="/" className="btn btn-primary">Kembali ke Portal</Link>
      </div>
    );
  }

  const lang: Language = "id";
  const t = translations[lang];

  return (
    <div className="page-wrapper min-h-screen flex items-center justify-center">
      <div 
        className="lg-panel lg-panel-strong modal-panel anim-fade-up" 
        style={{ 
          width: "100%", 
          maxWidth: "780px", 
          margin: "2rem 0",
          boxShadow: "var(--glass-shadow-lg)",
          padding: "2.5rem"
        }}
      >
        {/* Header navigation */}
        <div className="flex items-center justify-between" style={{ marginBottom: "2rem", borderBottom: "1.5px solid rgba(0,0,0,0.06)", paddingBottom: "1rem" }}>
          <Link href="/" className="btn-glass" style={{ textDecoration: "none", fontSize: "0.72rem", padding: "0.5rem 1rem", borderRadius: "10px", textTransform: "none" }}>
            ← Kembali ke Portal
          </Link>
          <span className="badge badge-pill">ID Language</span>
        </div>

        {/* Content Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <div>
            <p className="section-label" style={{ marginBottom: "0.25rem" }}>{sc.provider[lang]}</p>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--text-primary)", lineHeight: 1.25 }}>
              {sc.name[lang]}
            </h1>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5">
            <span className={`badge badge-open`}>
              ● Terbuka
            </span>
            <span className="badge badge-degree">
              {sc.fundingType === "full" ? "Pendanaan Penuh" : "Sebagian"}
            </span>
            {sc.degreeLevels.map((lvl) => (
              <span key={lvl} className="badge badge-degree">
                {DEGREE_LABEL[lvl]}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 className="section-label" style={{ marginBottom: "0.5rem" }}>{t.aboutProgram}</h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
              {sc.description[lang]}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="section-label" style={{ marginBottom: "0.5rem" }}>{t.coverageBenefits}</h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {sc.coverage[lang].map((cov: string, i: number) => (
                <li key={i} style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{cov}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="section-label" style={{ marginBottom: "0.5rem" }}>{t.eligibilityReqs}</h4>
            <ul style={{ listStyleType: "disc", paddingLeft: "1.2rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {sc.requirements[lang].map((req: string, i: number) => (
                <li key={i} style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Deadline info */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem", borderTop: "1.5px solid rgba(255,255,255,0.6)", paddingTop: "1.5rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "0.15rem" }}>{t.deadlineLabel}</p>
              <p style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)" }}>
                {new Date(sc.deadline).toLocaleDateString("id-ID", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </p>
            </div>

            <a href={sc.applicationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: "none", fontSize: "0.75rem", padding: "0.6rem 1.25rem", borderRadius: "10px" }}>
              {t.applyBtn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
