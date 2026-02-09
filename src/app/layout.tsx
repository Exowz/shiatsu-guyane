// src/app/layout.tsx

import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  // For now, we'll use French as default since this is the root layout
  // In a more advanced setup, you could detect language from headers
  return {
    title: 'Shiatsu Guyane - Nathalie Jean - Soin Holistique',
    description: 'Cabinet de Shiatsu en Guyane pour la gestion du stress, des douleurs et le rééquilibrage énergétique.',
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // This file ONLY contains the main html and body tags
    <html lang="fr" suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://analytics.shiatsu-guyane.com/script.js"
          data-website-id="be253ce8-b074-47a9-8a6b-fbe38cdf3c07"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}