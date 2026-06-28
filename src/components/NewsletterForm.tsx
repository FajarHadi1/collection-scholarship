import React, { useState, useEffect } from "react";
import { Language, Dictionary } from "../data/translations";

interface NewsletterFormProps {
  language: Language;
  t: Dictionary;
}

export default function NewsletterForm({ language, t }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("adiguna_subscribed_email");
      if (saved) {
        setIsSubscribed(true);
      }
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.trim()) {
      setError(language === "id" ? "Email tidak boleh kosong" : "Email cannot be empty");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(language === "id" ? "Format email tidak valid" : "Invalid email format");
      return;
    }

    setLoading(true);

    // Simulate network latency
    setTimeout(() => {
      try {
        localStorage.setItem("adiguna_subscribed_email", email);
        setIsSubscribed(true);
      } catch {}
      setLoading(false);
    }, 800);
  };

  if (isSubscribed) {
    return (
      <div 
        className="lg-panel anim-fade-up" 
        style={{ 
          padding: "1.5rem", 
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(6,182,212,0.04))",
          border: "1.5px solid rgba(16,185,129,0.22)"
        }}
      >
        <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.5rem" }}>🎉</span>
        <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#065f46", marginBottom: "0.25rem" }}>
          {language === "id" ? "Terima Kasih!" : "Thank You!"}
        </h4>
        <p style={{ fontSize: "0.72rem", color: "#047857", lineHeight: 1.5 }}>
          {language === "id" 
            ? "Kamu berhasil berlangganan update beasiswa mingguan." 
            : "You have successfully subscribed to weekly scholarship updates."}
        </p>
      </div>
    );
  }

  return (
    <div className="lg-panel anim-fade-up" style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <div>
        <h4 style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-primary)" }}>
          {language === "id" ? "Newsletter Mingguan" : "Weekly Newsletter"}
        </h4>
        <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.2rem", lineHeight: 1.45 }}>
          {language === "id"
            ? "Dapatkan rangkuman info beasiswa terbaru dan deadline terdekat langsung di email kamu."
            : "Get the latest scholarship summaries and upcoming deadlines directly in your inbox."}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <input
          type="email"
          placeholder={language === "id" ? "Masukkan email kamu..." : "Enter your email..."}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.6rem 0.85rem",
            fontSize: "0.75rem",
            borderRadius: "10px",
            border: "1px solid rgba(0,0,0,0.1)",
            background: "rgba(255,255,255,0.6)",
            color: "var(--text-primary)",
            outline: "none",
            transition: "border-color 0.2s"
          }}
          className="newsletter-input"
        />

        {error && (
          <p style={{ fontSize: "0.65rem", color: "#ef4444", fontWeight: 600 }}>
            ⚠️ {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
          style={{
            width: "100%",
            padding: "0.55rem 1rem",
            fontSize: "0.72rem",
            borderRadius: "10px",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.35rem"
          }}
        >
          {loading ? (
            <div 
              style={{ 
                width: "12px", 
                height: "12px", 
                border: "1.5px solid rgba(255,255,255,0.4)", 
                borderTopColor: "#fff", 
                borderRadius: "50%",
                animation: "spin 0.6s linear infinite" 
              }} 
            />
          ) : (
            language === "id" ? "Berlangganan" : "Subscribe"
          )}
        </button>
      </form>
    </div>
  );
}
