import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "R-SERVICE: Autoservis a Pneuservis Veľký Krtíš",
  description:
    "Komplexný autoservis a pneuservis s dôrazom na kvalitu. Opravy, diagnostika, pneumatiky a náhradné diely s rýchlym dodaním.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
