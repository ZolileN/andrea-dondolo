import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Andrea Dondolo — Actress · Author · Speaker · Coach",
    template: "%s | Andrea Dondolo",
  },
  description:
    "Andrea Dondolo is one of South Africa's most compelling creative voices — award-winning actress, author, keynote speaker, and transformational coach.",
  keywords: [
    "Andrea Dondolo",
    "South African actress",
    "keynote speaker",
    "author",
    "transformation coach",
    "The River",
    "SAFTA",
    "South Africa",
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://andrea-dondolo.co.za",
    siteName: "Andrea Dondolo",
    title: "Andrea Dondolo — Actress · Author · Speaker · Coach",
    description:
      "Award-winning South African actress, author, keynote speaker, and transformational coach.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrea Dondolo",
    description:
      "Award-winning South African actress, author, keynote speaker, and transformational coach.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://andrea-dondolo.co.za"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
