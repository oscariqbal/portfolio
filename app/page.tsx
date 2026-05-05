import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FadeInOnScroll } from "@/components/ui/fadeinonscroll";
import { NumberTicker } from "@/components/ui/number-ticker";
import { TextAnimate } from "@/components/ui/text-animate";

import { ArrowUpRight } from 'lucide-react';

import { TechstackMarquee } from "@/components/techstackmarquee";
import { ExperienceTimelines } from "@/components/experiencetimelines";
import { ContactDock } from "@/components/contactsdock";

import { TechnicalArsenals } from "@/data/technicalarsenal";
import { Projects } from "@/data/projects";
import { Experiences } from "@/data/experiences";
import { Contacts } from "@/data/contacts";

export default function Main() {
  return (
    <>
      <section className='relative h-[72vh] sm:h-[80vh] md:h-[82vh] lg:h-[81vh] w-[90vw] sm:w-[88vw] md:w-[86vw] lg:w-[84vw] mx-auto flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6'>
        <div className="absolute z-5 w-full lg:h-full lg:w-auto aspect-square rounded-full bg-[radial-gradient(circle_at_50%_0%,rgb(var(--glow)/0.2)_100%,transparent_0%)] blur-3xl"></div>
        <div className="absolute z-10 bg-foreground/10 w-full lg:h-full lg:w-auto aspect-square rounded-full flex items-center justify-center">
        
        </div>
        <div className="z-20 text-center flex flex-col gap-4 sm:gap-5 md:gap-6 mt-80">
          <div className="flex justify-center gap-2 md:gap-3">
            <TextAnimate animation="blurInUp" by="character" as="h1" className="tracking-wide font-heading font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl" once>
              Hello! 
            </TextAnimate> 
            <TextAnimate delay={0.3} animation="blurInUp" by="character" as="h1" className="font-heading tracking-normal font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl" once>
              I'm Iqbal
            </TextAnimate>
          </div>
          <FadeInOnScroll delay={0.6}>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/60 px-10">
              An Informatics graduate continuously building on <span className="font-semibold text-foreground/80">Data Analytics</span>, <span className="font-semibold text-foreground/80">Artificial Intelligence</span>, and <span className="font-semibold text-foreground/80">Web Development.</span>
            </p>
          </FadeInOnScroll>
        </div>
        <div className="z-20 justify-center flex gap-4 sm:gap-5 md:gap-6 text-center">
          <FadeInOnScroll delay={0.9} direction="right"><Button size={"sm"} className="cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">View Resume<ArrowUpRight /></Button></FadeInOnScroll>
          <FadeInOnScroll delay={1.0} direction="left">
            <Button size={"sm"} variant={"outline"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">
              <Link href='#about'>Get in Touch</Link>
            </Button>
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll delay={1.2} className="z-20">
          <ContactDock data={Contacts}/>
        </FadeInOnScroll>
      </section>
      <Separator />
      {/* About Section */}
      <section id='about' className="flex">
        <div className="hidden lg:flex flex-col justify-around w-[8vw]">
          <div className="w-20 h-40 border-l border-10 border-foreground/80 rounded-r-full"></div>
          <div className="w-20 h-40 border-l border-10 border-foreground/80 rounded-r-full"></div>
        </div>
        <div className="w-[90vw] sm:w-[88vw] md:w-[86vw] lg:w-[84vw] mx-auto flex flex-col gap-20 sm:gap-25 md:gap-30 lg:gap-35">
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
          <div>
            <div className="mb-10 flex flex-col text-center gap-4">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Where It All Begin</h2>
              <p className="text-xs md:text-sm opacity-60">A bunch of my milestone in computer science field</p>
            </div>
            <ExperienceTimelines data={Experiences} />
          </div>
          <div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Technical Arsenal</h2>
              <div className="w-[55px] sm:w-[70px] md:w-[85px] lg:w-[100px] border border-foreground border-2 rounded"></div>
              <p className="text-xs md:text-sm opacity-60">Tech stack which I use on a daily basis.</p>
            </div>
            <div className="sm:w-[95%] md:w-[85%] lg:w-[75%] mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-between text-center">
              {TechnicalArsenals.slice(0, 6).map(({arsenal, techstacks}, i) => (
                <FadeInOnScroll key={arsenal} delay={(i+1) / 6}>
                    <Card className="bg-card/90 w-full shadow-lg">
                      <CardHeader className="mb-2 capitalize text-sm sm:text-md md:text-base tracking-wide font-semibold">{arsenal}</CardHeader>
                      <CardContent>
                        <div className="inline-block mx-auto">
                          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6 items-center justify-center p-3 md:p-4 rounded-xl border border-border bg-border/20">
                            {techstacks.map((techstack, i) => {
                              const Comp = techstack.comp

                              return (
                                <Comp key={i} className="w-10 sm:w-12 md:w-12.5 items-center justify-center"/>
                              )
                            })}
                          </div>
                        </div>
                      </CardContent>
                      <Separator className="mt-auto"/>
                      <CardFooter className="w-auto grid grid-cols-2 gap-1 md:gap-2">
                        {techstacks.map((techstacks, i) => (
                          <p key={i} className="capitalize text-xs sm:text-sm md:text-md opacity-90">{techstacks.name}</p>
                        ))}
                      </CardFooter>
                    </Card>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-end w-[8vw]">
          <div className="w-20 h-40 border-r border-10 border-foreground/80 rounded-l-full"></div>
        </div>
      </section>
      <div className="relative flex w-full overflow-hidden">
        <TechstackMarquee data={TechnicalArsenals} />
      </div>
      {/* Projects Section */}
      <section id='projects' className='w-[90vw] sm:w-[88vw] md:w-[86vw] lg:w-[84vw] mx-auto mb-20 sm:mb-25 md:mb-30 lg:mb-35'>
        <div className="flex flex-col text-center gap-4">
          <h2 className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Featured Projects</h2>
          <p className="text-xs md:text-sm opacity-60">A collection of my recent work, side projects, and experiments</p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {Projects.map(({slug, name, description, content, category, timestamp, link, github, img}) => (
              <Link key={slug} href={`/${slug}`}>
                <Card className="shadow-sm">
                  <Image src={`/img/${img}.png`} alt={name} width={480} height={258} className="rounded-sm"/>
                  <CardHeader>
                    <CardTitle className="text-sm md:text-base line-clamp-2">{name}</CardTitle>
                    <CardDescription className="text-xs md:text-sm line-clamp-2">{description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
        </div>
      </section>
    </>      
  );
}
