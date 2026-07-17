import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { AnalyticsScripts } from "@/components/shared/analytics-scripts";
import { Providers } from "@/components/shared/providers";
import { SkipToContent } from "@/components/shared/skip-to-content";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { BackgroundFx } from "@/components/shared/background-fx";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { CommandPalette } from "@/components/shared/command-palette";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { LoadingScreen } from "@/components/shared/loading-screen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = buildMetadata();

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <JsonLd />
        <Providers>
          <LoadingScreen />
          <SkipToContent />
          <ScrollProgress />
          <BackgroundFx />
          <CustomCursor />
          <CommandPalette />
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </Providers>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
