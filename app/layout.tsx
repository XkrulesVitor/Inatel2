import type { Metadata } from "next";
import { Geist, Geist_Mono, Aboreto } from "next/font/google";
import "./globals.css";
import bgBook from '../public/Background.png'
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
});

export const metadata: Metadata = {
  title: "Inatel²",
  description: "Calcule suas notas em Inatel²",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body 
        className={`${aboreto.variable} relative min-h-screen`}
      >
       <div className="fixed inset-0 bg-[#0054A6] -z-20" />
        <img 
            src={bgBook.src} 
            alt="background" 
            className="fixed inset-0 w-full h-full object-cover opacity-20 -z-10 pointer-events-none"
        />
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
