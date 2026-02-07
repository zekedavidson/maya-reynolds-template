import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds | Licensed Clinical Psychologist",
  description: "Licensed Clinical Psychologist in Santa Monica, California. Offering therapy for anxiety, trauma, and burnout for high-achieving adults.",
  keywords: ["Psychologist Santa Monica", "Anxiety Therapy", "Trauma Therapy", "Burnout", "CBT", "EMDR", "Dr. Maya Reynolds"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable}`}>
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
