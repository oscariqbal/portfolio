import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Header from '@/components/header';
import Home from '@/components/home';
import Footer from '@/components/footer';
import { Providers } from "@/components/ui/tooltipwrapper"

import { LightRays } from "@/components/ui/light-rays";
import { Meteors } from "@/components/ui/meteors"

import { ThemeProvider } from "next-themes"

const inter = Inter({subsets:['latin'],variable:'--font-inter'});
const manrope = Manrope({subsets:['latin'],variable:'--font-manrope'});

export const metadata: Metadata = {
  title: "Hi! Iqbal",
  description: "Oscar Iqbal Mustofa's portfolio showing my personality and skills with vigilance, precision, and innovation.",
  keywords: "AI Engineering, AI Development, Machine Learning, Deep Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans", inter.variable, manrope.variable, "scroll-smooth", "scroll-pt-[12vh]", "sm:scroll-pt-[13vh]", "md:scroll-pt-[14vh]", "lg:scroll-pt-[15vh]")} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {/* 
          <section className="overflow-hidden">
            <LightRays count={5} blur={28} speed={17}/>
            <Meteors />
            <div className="absolute pointer-events-none inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-70% md:via-70% to-background to-100%" />
          </section>
          */}
          <main className="flex flex-col gap-20 sm:gap-25 md:gap-30 lg:gap-35">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
