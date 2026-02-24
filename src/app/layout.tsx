import type { Metadata } from "next";
import Toolbar from "@/components/Toolbar";
import Footer from "@/components/Footer";
import ConsentScripts from "@/components/ConsentScripts";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cognitivepsychology.com"),
  title: "Cognitive Psychology — A Complete Reference",
  description:
    "A comprehensive reference to cognitive psychology: perception, attention, memory, learning, language, thinking, development, neuroscience, and modern applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-1296356819566983" />
        <meta name="impact-site-verification" content="166f0f6b-359a-4b6e-8be2-0a4407fdd5cf" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Toolbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ConsentScripts />
        <CookieConsent />
      </body>
    </html>
  );
}
