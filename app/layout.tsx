import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip"

import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({subsets:['latin'],variable:'--font-inter'});
const manrope = Manrope({subsets:['latin'],variable:'--font-manrope'});

export const metadata: Metadata = {
  title: "Hinoyojin!",
  description: "Beware of fire! Inspired by Hinoyojin, a Japanese phrase meaning 'beware of fire' that often assicoated with fire patrol tradition, this is Oscar Iqbal Mustofa's portfolio showing my personality and skills with vigilance, precision, and innovation.",
  keywords: "AI Engineering, AI Development, Machine Learning, Deep Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans", inter.variable, manrope.variable, "dark", "scroll-smooth")}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="container mx-auto bg-background border border-green-500">
          <TooltipProvider>{children}</TooltipProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
