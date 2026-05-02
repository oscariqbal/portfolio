import Image from "next/image";

import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FadeInOnScroll } from "@/components/ui/fadeinonscroll";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Badge } from "@/components/ui/badge"

import { ProjectsCarousel } from "@/components/projectscarousel";
import { TechstackMarquee } from "@/components/techstackmarquee";

import { TechnicalArsenals } from "@/data/technicalarsenal";
import { Projects } from "@/data/projects";

export default function Main() {
  return (
    <>
      {/* About Section */}
      <section id='about' className="w-[90vw] md:w-[85vw] mx-auto flex flex-col gap-20 md:gap-40">
        <div className="flex uppercase">
          <div className='w-1/2 text-4xl md:text-5xl lg:text-6xl'>
            <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed opacity-60 mb-2">Years of learning</p>
            <NumberTicker
              value={3}
              className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter whitespace-pre-wrap"
            />
            +
          </div>
          <div className='w-1/2 text-4xl md:text-5xl lg:text-6xl'>
            <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed opacity-60 mb-2">Projects completed</p>
            <NumberTicker
              value={10}
              className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter whitespace-pre-wrap"
            />
            +
          </div>
        </div>
        {/*
        <div>
          * EXPERIENCE TIMELINE *
        </div>
        */}
        <div>
          <div className="flex flex-col items-center gap-4">
            <h2 className="tracking-wide font-heading font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Technical Arsenal</h2>
            <div className="w-[55px] sm:w-[70px] md:w-[85px] lg:w-[100px] border border-foreground border-2 rounded"></div>
            <p className="text-[10px] sm:text-xs md:text-sm opacity-60">Tech stack which I use on a daily basis.</p>
          </div>
          <div className="md:w-[75%] md:mx-auto mt-10 grid grid-cols-2 gap-5 sm:gap-10 md:grid-cols-3 md:gap-20 justify-between text-center">
            {TechnicalArsenals.slice(0, 6).map(({arsenal, techstacks}, i) => (
              <FadeInOnScroll key={arsenal} delay={(i+1) / 5}>
                  <Card className="bg-card/90 w-full shadow-lg">
                    <CardHeader className="mb-2 capitalize text-sm sm:text-md md:text-base tracking-wide font-semibold">{arsenal}</CardHeader>
                    <CardContent>
                      <div className="inline-block mx-auto">
                        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-center justify-center p-3 md:p-4 rounded-xl border border-border bg-border/20">
                          {techstacks.map((techstacks) => (
                            <img src={`/svg/${techstacks}.svg`} key={techstacks} alt={techstacks} width={50} height={50} className="w-10 sm:w-12 md:w-12.5 shadow-xl rounded-sm items-center justify-center"/>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <Separator className="mt-auto"/>
                    <CardFooter className="w-auto grid grid-cols-2 gap-1 md:gap-2">
                      {techstacks.map((techstacks) => (
                        <p key={techstacks} className="capitalize text-xs sm:text-sm md:text-md opacity-90">{techstacks}</p>
                      ))}
                    </CardFooter>
                  </Card>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </section>
      <div className="relative flex w-full overflow-hidden">
        <TechstackMarquee data={TechnicalArsenals} />
      </div>
      {/* Projects Section */}
      <section id='projects' className='w-[90vw] md:w-[85vw] mx-auto mb-20 md:mb-40'>
        <div className="flex flex-col items-center gap-4">
          <h2 className="tracking-wide font-heading font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Featured Projects</h2>
          <p className="text-[10px] sm:text-xs md:text-sm opacity-60">A collection of my recent work, side projects, and experiments</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10">
            {Projects.map(({name, description, content, category, timestamp, link, img}) => (
              <Card key={name}>
                <Image src={`/img/${img}.png`} alt={name} width={480} height={258} className="rounded-sm"/>
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
        </div>
      </section>
    </>      
  );
}
