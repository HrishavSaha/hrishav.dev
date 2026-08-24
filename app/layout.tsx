import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    // every other page exports a bare title; this suffixes it
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: "/",
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    // hand-drawn prompt mark; the 180px apple touch icon is generated to match
    icon: [
      { url: "/favicon32px.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon16px.png", sizes: "16x16", type: "image/png" },
    ],
    // declaring `icons` replaces the file convention wholesale, so the
    // generated apple-icon route has to be listed too
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    telephone: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
				<Navbar />
				<div className="pt-nav flex-1 flex flex-col">{children}</div>
			</body>
    </html>
  );
}
