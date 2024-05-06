import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { arSA } from "@clerk/localizations";
import { dark } from "@clerk/themes";

const inter = Cairo({
  subsets: ["latin"],
  weight: ["900", "800", "700", "600", "500"],
});

export const metadata: Metadata = {
  title: "Coursat Academy",
  description: "Coursat Academy to tech courses and more fields.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={arSA}
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="ar" dir="rtl">
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
