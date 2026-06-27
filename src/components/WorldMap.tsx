import React, { useState } from "react";
import { Dictionary } from "../data/translations";

interface WorldMapProps {
  scholarships: any[];
  activeCountry: string | null;
  onCountrySelect: (country: string | null) => void;
  language: "id" | "en";
  t: Dictionary;
}

interface MapCountry {
  id: string;
  name: { id: string; en: string };
  x: number;
  y: number;
  tags: string[]; // matches tags in scholarships
}

const COUNTRIES: MapCountry[] = [
  { id: "indonesia", name: { id: "Indonesia", en: "Indonesia" }, x: 770, y: 320, tags: ["Indonesia", "Dalam Negeri"] },
  { id: "japan", name: { id: "Jepang", en: "Japan" }, x: 875, y: 140, tags: ["Jepang", "Japan"] },
  { id: "usa", name: { id: "Amerika Serikat", en: "United States" }, x: 180, y: 150, tags: ["Amerika Serikat", "USA", "United States"] },
  { id: "uk", name: { id: "Inggris", en: "United Kingdom" }, x: 460, y: 125, tags: ["Inggris", "UK", "United Kingdom"] },
  { id: "australia", name: { id: "Australia", en: "Australia" }, x: 860, y: 400, tags: ["Australia"] },
  { id: "singapore", name: { id: "Singapura", en: "Singapore" }, x: 760, y: 300, tags: ["Singapura", "Singapore"] },
  { id: "netherlands", name: { id: "Belanda", en: "Netherlands" }, x: 480, y: 130, tags: ["Belanda", "Netherlands"] },
  { id: "germany", name: { id: "Jerman", en: "Germany" }, x: 495, y: 140, tags: ["Jerman", "Germany"] },
  { id: "south_korea", name: { id: "Korea Selatan", en: "South Korea" }, x: 840, y: 155, tags: ["Korea Selatan", "South Korea"] },
  { id: "canada", name: { id: "Kanada", en: "Canada" }, x: 170, y: 100, tags: ["Kanada", "Canada"] },
  { id: "france", name: { id: "Prancis", en: "France" }, x: 475, y: 155, tags: ["Prancis", "France"] },
  { id: "new_zealand", name: { id: "Selandia Baru", en: "New Zealand" }, x: 920, y: 440, tags: ["Selandia Baru", "New Zealand"] },
  { id: "sweden", name: { id: "Swedia", en: "Sweden" }, x: 510, y: 95, tags: ["Swedia", "Sweden"] },
  { id: "swiss", name: { id: "Swiss", en: "Switzerland" }, x: 495, y: 158, tags: ["Swiss", "Switzerland"] },
  { id: "italy", name: { id: "Italia", en: "Italy" }, x: 505, y: 175, tags: ["Italia", "Italy"] },
  { id: "thailand", name: { id: "Thailand", en: "Thailand" }, x: 740, y: 260, tags: ["Thailand"] },
  { id: "turkey", name: { id: "Turki", en: "Turkey" }, x: 565, y: 195, tags: ["Turki", "Turkey"] },
  { id: "belgium", name: { id: "Belgia", en: "Belgium" }, x: 480, y: 140, tags: ["Belgia", "Belgium"] },
  { id: "ireland", name: { id: "Irlandia", en: "Ireland" }, x: 440, y: 130, tags: ["Irlandia", "Ireland"] },
  { id: "saudi_arabia", name: { id: "Arab Saudi", en: "Saudi Arabia" }, x: 615, y: 240, tags: ["Arab Saudi", "Saudi Arabia"] },
  { id: "austria", name: { id: "Austria", en: "Austria" }, x: 510, y: 150, tags: ["Austria"] },
  { id: "china", name: { id: "Tiongkok", en: "China" }, x: 780, y: 180, tags: ["Tiongkok", "China"] },
  { id: "brunei", name: { id: "Brunei Darussalam", en: "Brunei" }, x: 780, y: 300, tags: ["Brunei Darussalam", "Brunei"] },
  { id: "kuwait", name: { id: "Kuwait", en: "Kuwait" }, x: 605, y: 230, tags: ["Kuwait"] }
];

export default function WorldMap({
  scholarships,
  activeCountry,
  onCountrySelect,
  language,
  t
}: WorldMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<MapCountry | null>(null);
  const [viewBox, setViewBox] = useState<string>("0 0 1000 500");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Helper to count scholarships for each country based on tags
  const getScholarshipCount = (country: MapCountry) => {
    return scholarships.filter((sc) => {
      // For Indonesia, also check studyLocation
      if (country.id === "indonesia" && sc.studyLocation.includes("domestic")) {
        return true;
      }
      // Check tags
      const allTags = [...sc.tags.id, ...sc.tags.en];
      return country.tags.some((ctag) =>
        allTags.some((tag) => tag.toLowerCase() === ctag.toLowerCase())
      );
    }).length;
  };

  const handleCountryClick = (country: MapCountry) => {
    if (activeCountry === country.id) {
      // Reset zoom
      setViewBox("0 0 1000 500");
      setIsZoomed(false);
      onCountrySelect(null);
    } else {
      // Zoom into the country coords
      const zoomWidth = 250;
      const zoomHeight = 150;
      const x = Math.max(0, Math.min(1000 - zoomWidth, country.x - zoomWidth / 2));
      const y = Math.max(0, Math.min(500 - zoomHeight, country.y - zoomHeight / 2));
      setViewBox(`${x} ${y} ${zoomWidth} ${zoomHeight}`);
      setIsZoomed(true);
      onCountrySelect(country.id);
    }
  };

  const handleResetZoom = () => {
    setViewBox("0 0 1000 500");
    setIsZoomed(false);
    onCountrySelect(null);
  };

  return (
    <div className="lg-panel map-outer-container anim-fade-up" style={{ padding: "1.25rem", position: "relative" }}>
      {/* Map Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: "1rem" }}>
        <div>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text-primary)" }}>
            {language === "id" ? "Peta Sebaran Beasiswa" : "Scholarship Distribution Map"}
          </h3>
          <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>
            {language === "id"
              ? "Klik pin negara untuk melihat beasiswa yang tersedia"
              : "Click a country pin to view available programs"}
          </p>
        </div>

        {isZoomed && (
          <button
            onClick={handleResetZoom}
            className="btn btn-secondary"
            style={{
              padding: "0.35rem 0.75rem",
              fontSize: "0.72rem",
              fontWeight: 800,
              borderRadius: "8px",
            }}
          >
            {language === "id" ? "← Reset Zoom & Filter" : "← Reset Zoom & Filter"}
          </button>
        )}
      </div>

      {/* SVG Canvas Map */}
      <div
        style={{
          width: "100%",
          height: "280px",
          background: "radial-gradient(circle at center, rgba(30, 41, 59, 0.15), rgba(15, 23, 42, 0.25))",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1.5px solid rgba(255,255,255,0.06)",
          position: "relative"
        }}
      >
        <svg
          viewBox={viewBox}
          style={{
            width: "100%",
            height: "100%",
            transition: "viewBox 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {/* Graticule/Grid Lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1000" height="500" fill="url(#grid)" />

          {/* Minimalist World Continents Layout */}
          <g fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" strokeLinejoin="round">
            {/* North America */}
            <path d="M 80 100 L 150 70 L 250 80 L 280 120 L 240 180 L 180 200 L 150 250 L 130 250 L 140 200 L 80 150 Z" />
            {/* South America */}
            <path d="M 190 280 L 240 270 L 290 320 L 260 420 L 220 460 L 200 400 Z" />
            {/* Africa */}
            <path d="M 420 220 L 490 220 L 540 270 L 520 350 L 460 410 L 430 400 L 390 280 Z" />
            {/* Eurasia (Europe + Asia) */}
            <path d="M 360 120 L 440 80 L 600 60 L 800 80 L 920 120 L 900 240 L 800 320 L 740 310 L 710 260 L 620 250 L 560 290 L 500 280 L 440 240 L 360 220 Z" />
            {/* Australia */}
            <path d="M 820 380 L 890 370 L 910 420 L 830 430 Z" />
          </g>

          {/* Pulsing Hotspots (Map Pins) */}
          {COUNTRIES.map((country) => {
            const count = getScholarshipCount(country);
            if (count === 0) return null; // Only show pins for countries with scholarships

            const isSelected = activeCountry === country.id;

            return (
              <g
                key={country.id}
                style={{ cursor: "pointer" }}
                onClick={() => handleCountryClick(country)}
                onMouseEnter={() => setHoveredCountry(country)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                {/* Glowing Outer Ring */}
                <circle
                  cx={country.x}
                  cy={country.y}
                  r={isSelected ? 14 : 9}
                  fill="rgba(99, 102, 241, 0.15)"
                  stroke={isSelected ? "rgba(99, 102, 241, 0.6)" : "rgba(99, 102, 241, 0.3)"}
                  strokeWidth="1.5"
                />

                {/* Pulse Ring Animation */}
                <circle
                  cx={country.x}
                  cy={country.y}
                  r={isSelected ? 22 : 16}
                  fill="none"
                  stroke="rgba(99, 102, 241, 0.4)"
                  strokeWidth="1"
                  style={{
                    transformOrigin: `${country.x}px ${country.y}px`,
                    animation: "map-pulse 2s infinite ease-out"
                  }}
                />

                {/* Core Pin */}
                <circle
                  cx={country.x}
                  cy={country.y}
                  r={isSelected ? 6 : 4}
                  fill="var(--accent)"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              </g>
            );
          })}
        </svg>

        {/* Live Floating Tooltip */}
        {hoveredCountry && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "rgba(15, 23, 42, 0.85)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              padding: "0.5rem 0.75rem",
              color: "white",
              fontSize: "0.72rem",
              pointerEvents: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              gap: "2px"
            }}
          >
            <span style={{ fontWeight: 800 }}>
              {language === "id" ? hoveredCountry.name.id : hoveredCountry.name.en}
            </span>
            <span style={{ color: "var(--accent-light)" }}>
              {getScholarshipCount(hoveredCountry)} {language === "id" ? "Program Beasiswa" : "Scholarship Programs"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
