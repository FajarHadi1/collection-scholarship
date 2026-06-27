import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adiguna Scholarship — Portal Info Beasiswa S1, S2, S3 Terlengkap",
  description:
    "Temukan dan pantau peluang beasiswa kuliah S1, S2, hingga S3 di dalam dan luar negeri secara gratis dan terupdate.",
  keywords: ["beasiswa", "info beasiswa", "beasiswa s1", "beasiswa s2", "beasiswa s3", "beasiswa luar negeri", "beasiswa dalam negeri", "adiguna scholarship"],
  authors: [{ name: "Adiguna Scholarship" }],
  alternates: {
    canonical: "https://adiguna-scholarship.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Adiguna Scholarship — Portal Info Beasiswa S1, S2, S3 Terlengkap",
    description:
      "Temukan dan pantau peluang beasiswa kuliah S1, S2, hingga S3 di dalam dan luar negeri secara gratis dan terupdate.",
    url: "https://adiguna-scholarship.vercel.app",
    siteName: "Adiguna Scholarship",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adiguna Scholarship — Portal Info Beasiswa S1, S2, S3 Terlengkap",
    description:
      "Temukan dan pantau peluang beasiswa kuliah S1, S2, hingga S3 di dalam dan luar negeri secara gratis dan terupdate.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://adiguna-scholarship.vercel.app/#website",
        "url": "https://adiguna-scholarship.vercel.app",
        "name": "Adiguna Scholarship",
        "description": "Portal Info Beasiswa S1, S2, S3 Terlengkap",
        "publisher": {
          "@id": "https://adiguna-scholarship.vercel.app/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://adiguna-scholarship.vercel.app/?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "id-ID"
      },
      {
        "@type": "Organization",
        "@id": "https://adiguna-scholarship.vercel.app/#organization",
        "name": "Adiguna Scholarship",
        "url": "https://adiguna-scholarship.vercel.app",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://adiguna-scholarship.vercel.app/#logo",
          "url": "https://adiguna-scholarship.vercel.app/favicon.ico",
          "caption": "Adiguna Scholarship Logo"
        },
        "image": {
          "@id": "https://adiguna-scholarship.vercel.app/#logo"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://adiguna-scholarship.vercel.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Di mana mencari info beasiswa S1, S2, dan S3 terlengkap?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Adiguna Scholarship menyediakan portal informasi beasiswa terlengkap untuk jenjang S1, S2, dan S3 baik di dalam negeri maupun luar negeri, lengkap dengan info persyaratan, besaran dana, dan tautan pendaftaran resmi."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah info beasiswa di Adiguna Scholarship selalu terupdate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, database beasiswa di Adiguna Scholarship diperbarui secara berkala menggunakan sistem otomatis untuk memeriksa keaktifan tautan pendaftaran dan memantau tenggat waktu (deadline) beasiswa terbaru."
            }
          },
          {
            "@type": "Question",
            "name": "Apa saja jenis pendanaan beasiswa yang tersedia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tersedia dua jenis pendanaan utama: beasiswa penuh (fully funded) yang menanggung seluruh biaya kuliah dan biaya hidup, serta beasiswa sebagian (partially funded) yang memberikan bantuan uang kuliah tunggal (UKT) atau stimulan dana pendidikan."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

