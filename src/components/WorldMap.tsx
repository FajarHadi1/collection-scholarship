import React, { useEffect, useRef, useState } from "react";
import { Dictionary } from "../data/translations";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
  lat: number;
  lng: number;
  zoom: number;
  tags: string[];
}

const COUNTRIES: MapCountry[] = [
  { id: "indonesia", name: { id: "Indonesia", en: "Indonesia" }, lat: -0.789275, lng: 113.921327, zoom: 4, tags: ["Indonesia", "Dalam Negeri"] },
  { id: "japan", name: { id: "Jepang", en: "Japan" }, lat: 36.204824, lng: 138.252924, zoom: 5, tags: ["Jepang", "Japan"] },
  { id: "usa", name: { id: "Amerika Serikat", en: "United States" }, lat: 37.09024, lng: -95.712891, zoom: 4, tags: ["Amerika Serikat", "USA", "United States"] },
  { id: "uk", name: { id: "Inggris", en: "United Kingdom" }, lat: 55.378051, lng: -3.435973, zoom: 5, tags: ["Inggris", "UK", "United Kingdom"] },
  { id: "australia", name: { id: "Australia", en: "Australia" }, lat: -25.274398, lng: 133.775136, zoom: 4, tags: ["Australia"] },
  { id: "singapore", name: { id: "Singapura", en: "Singapore" }, lat: 1.352083, lng: 103.819836, zoom: 7, tags: ["Singapura", "Singapore"] },
  { id: "netherlands", name: { id: "Belanda", en: "Netherlands" }, lat: 52.132633, lng: 5.291266, zoom: 6, tags: ["Belanda", "Netherlands"] },
  { id: "germany", name: { id: "Jerman", en: "Germany" }, lat: 51.165691, lng: 10.451526, zoom: 5, tags: ["Jerman", "Germany"] },
  { id: "south_korea", name: { id: "Korea Selatan", en: "South Korea" }, lat: 35.907757, lng: 127.766922, zoom: 6, tags: ["Korea Selatan", "South Korea"] },
  { id: "canada", name: { id: "Kanada", en: "Canada" }, lat: 56.130366, lng: -106.346771, zoom: 4, tags: ["Kanada", "Canada"] },
  { id: "france", name: { id: "Prancis", en: "France" }, lat: 46.227638, lng: 2.213749, zoom: 5, tags: ["Prancis", "France"] },
  { id: "new_zealand", name: { id: "Selandia Baru", en: "New Zealand" }, lat: -40.900557, lng: 174.885971, zoom: 5, tags: ["Selandia Baru", "New Zealand"] },
  { id: "sweden", name: { id: "Swedia", en: "Sweden" }, lat: 60.128161, lng: 18.643501, zoom: 5, tags: ["Swedia", "Sweden"] },
  { id: "swiss", name: { id: "Swiss", en: "Switzerland" }, lat: 46.818188, lng: 8.227512, zoom: 6, tags: ["Swiss", "Switzerland"] },
  { id: "italy", name: { id: "Italia", en: "Italy" }, lat: 41.87194, lng: 12.56738, zoom: 5, tags: ["Italia", "Italy"] },
  { id: "thailand", name: { id: "Thailand", en: "Thailand" }, lat: 15.870032, lng: 100.992541, zoom: 5, tags: ["Thailand"] },
  { id: "turkey", name: { id: "Turki", en: "Turkey" }, lat: 38.963745, lng: 35.243322, zoom: 5, tags: ["Turki", "Turkey"] },
  { id: "belgium", name: { id: "Belgia", en: "Belgium" }, lat: 50.503887, lng: 4.469936, zoom: 6, tags: ["Belgia", "Belgium"] },
  { id: "ireland", name: { id: "Irlandia", en: "Ireland" }, lat: 53.41291, lng: -8.24389, zoom: 6, tags: ["Irlandia", "Ireland"] },
  { id: "saudi_arabia", name: { id: "Arab Saudi", en: "Saudi Arabia" }, lat: 23.885942, lng: 45.079162, zoom: 5, tags: ["Arab Saudi", "Saudi Arabia"] },
  { id: "austria", name: { id: "Austria", en: "Austria" }, lat: 47.516231, lng: 14.5501, zoom: 6, tags: ["Austria"] },
  { id: "china", name: { id: "Tiongkok", en: "China" }, lat: 35.86166, lng: 104.195397, zoom: 4, tags: ["Tiongkok", "China"] },
  { id: "brunei", name: { id: "Brunei Darussalam", en: "Brunei" }, lat: 4.535277, lng: 114.727669, zoom: 6, tags: ["Brunei Darussalam", "Brunei"] },
  { id: "kuwait", name: { id: "Kuwait", en: "Kuwait" }, lat: 29.375859, lng: 47.977405, zoom: 6, tags: ["Kuwait"] },
  { id: "russia", name: { id: "Rusia", en: "Russia" }, lat: 61.52401, lng: 105.318756, zoom: 3, tags: ["Rusia", "Russia"] },
  { id: "hong_kong", name: { id: "Hong Kong", en: "Hong Kong" }, lat: 22.319304, lng: 114.169361, zoom: 8, tags: ["Hong Kong", "Hongkong"] },
  { id: "taiwan", name: { id: "Taiwan", en: "Taiwan" }, lat: 23.69781, lng: 120.960515, zoom: 7, tags: ["Taiwan"] },
  { id: "hungary", name: { id: "Hongaria", en: "Hungary" }, lat: 47.162494, lng: 19.503304, zoom: 6, tags: ["Hongaria", "Hungary"] },
  { id: "europe", name: { id: "Uni Eropa (Regional)", en: "Europe (Regional)" }, lat: 50.850346, lng: 4.351721, zoom: 4, tags: ["Eropa", "Europe", "Uni Eropa", "European Union"] },
  { id: "global", name: { id: "Global / Internasional", en: "Global / International" }, lat: 15.0, lng: -40.0, zoom: 2, tags: ["Internasional", "International", "Global", "Multinasional", "Multinational"] }
];

export default function WorldMap({
  scholarships,
  activeCountry,
  onCountrySelect,
  language,
  t
}: WorldMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Helper to count scholarships for each country based on tags
  const getScholarshipCount = (country: MapCountry) => {
    return scholarships.filter((sc) => {
      if (country.id === "indonesia" && sc.studyLocation.includes("domestic")) {
        return true;
      }
      const allTags = [...sc.tags.id, ...sc.tags.en];
      return country.tags.some((ctag) =>
        allTags.some((tag) => tag.toLowerCase() === ctag.toLowerCase())
      );
    }).length;
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [25, 10],
      zoom: 2,
      minZoom: 1.5,
      maxZoom: 9,
      zoomControl: false,
      scrollWheelZoom: true,
      doubleClickZoom: true,
      boxZoom: true,
      attributionControl: false,
    });

    L.control.zoom({ position: "topright" }).addTo(map);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 20
    }).addTo(map);

    mapInstanceRef.current = map;

    // Add Markers
    COUNTRIES.forEach((country) => {
      const count = getScholarshipCount(country);
      if (count === 0) return; // Skip if no programs

      const label = language === "id" ? country.name.id : country.name.en;
      const tooltipContent = `
        <div style="font-family: var(--font-main); font-size: 0.72rem; padding: 0.1rem 0.2rem;">
          <strong style="color: var(--text-primary);">${label}</strong><br/>
          <span style="color: var(--accent-dark); font-weight: 700;">${count} ${language === "id" ? "Program" : "Programs"}</span>
        </div>
      `;

      // Custom Pulse Marker DIV Icon
      const customIcon = L.divIcon({
        className: "custom-leaflet-marker",
        html: `<div class="pulse-marker-core" id="marker-${country.id}"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      const marker = L.marker([country.lat, country.lng], { icon: customIcon })
        .addTo(map)
        .bindTooltip(tooltipContent, {
          direction: "top",
          offset: [0, -5],
          opacity: 0.95
        });

      marker.on("click", () => {
        handleMarkerClick(country);
      });

      markersRef.current[country.id] = marker;
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      markersRef.current = {};
    };
  }, [scholarships, language]);

  // Handle active marker updates when activeCountry changes externally
  useEffect(() => {
    COUNTRIES.forEach((c) => {
      const el = document.getElementById(`marker-${c.id}`);
      if (el) {
        if (activeCountry === c.id) {
          el.classList.add("selected");
        } else {
          el.classList.remove("selected");
        }
      }
    });

    setIsZoomed(!!activeCountry);
  }, [activeCountry]);

  const handleMarkerClick = (country: MapCountry) => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (activeCountry === country.id) {
      // Zoom out if clicked again
      map.setView([25, 10], 2);
      onCountrySelect(null);
    } else {
      // Pan and zoom in
      map.setView([country.lat, country.lng], country.zoom);
      onCountrySelect(country.id);
    }
  };

  const handleResetZoom = () => {
    const map = mapInstanceRef.current;
    if (map) {
      map.setView([25, 10], 2);
    }
    onCountrySelect(null);
  };

  return (
    <div className="lg-panel map-outer-container anim-fade-up" style={{ padding: "1.25rem", position: "relative" }}>
      {/* CSS injection for Leaflet customized styles */}
      <style>{`
        .pulse-marker-core {
          width: 12px;
          height: 12px;
          background-color: var(--accent);
          border: 2px solid white;
          border-radius: 50%;
          position: relative;
          box-shadow: 0 0 8px rgba(99, 102, 241, 0.7);
          transition: all 0.3s ease;
        }
        .pulse-marker-core::after {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          animation: leaflet-pulsate 2s infinite ease-out;
          opacity: 0;
        }
        .pulse-marker-core.selected {
          background-color: #f59e0b;
          border-color: #fff;
          width: 16px;
          height: 16px;
          transform: translate(-2px, -2px);
          box-shadow: 0 0 14px rgba(245, 158, 11, 0.9);
        }
        .pulse-marker-core.selected::after {
          border-color: #f59e0b;
        }
        @keyframes leaflet-pulsate {
          0% { transform: scale(0.5); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .leaflet-tooltip {
          background: rgba(255, 255, 255, 0.92) !important;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12) !important;
          border-radius: 8px !important;
        }
        .leaflet-tooltip-top::before {
          border-top-color: rgba(255, 255, 255, 0.92) !important;
        }
        .leaflet-control-zoom {
          border: 1px solid rgba(255, 255, 255, 0.7) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
          border-radius: 10px !important;
          overflow: hidden;
        }
        .leaflet-control-zoom-in, .leaflet-control-zoom-out {
          background: rgba(255, 255, 255, 0.85) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          color: var(--text-primary) !important;
          border: none !important;
          font-weight: 800 !important;
          transition: all 0.2s ease !important;
        }
        .leaflet-control-zoom-in:hover, .leaflet-control-zoom-out:hover {
          background: rgba(255, 255, 255, 1) !important;
          color: var(--accent) !important;
        }
      `}</style>

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

      {/* Map Container */}
      <div
        ref={mapContainerRef}
        style={{
          width: "100%",
          height: "320px",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1.5px solid rgba(255,255,255,0.06)",
          position: "relative",
          zIndex: 5,
        }}
      />
    </div>
  );
}
