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
  openGraph: {
    title: "Adiguna Scholarship — Portal Info Beasiswa S1, S2, S3 Terlengkap",
    description:
      "Temukan dan pantau peluang beasiswa kuliah S1, S2, hingga S3 di dalam dan luar negeri secara gratis dan terupdate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
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
