import Image from "next/image";

import { Card, CardTitle, CardDescription, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FadeInOnScroll } from "@/components/ui/fadeinonscroll";
import { NumberTicker } from "@/components/ui/number-ticker";

import { ProjectsCarousel } from "@/components/projectscarousel";

import { TechnicalArsenals } from "@/data/tech";
import { projects } from "@/data/projects";

export default function Main() {
  return (
    <>
      {/* About Section */}
      <section id='about' className="flex flex-col gap-20 border border-red-500">
        <div className="flex uppercase border border-blue-500">
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
              value={30}
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
      <div className="border border-blue-500">
        <div className="flex flex-col items-center gap-4 border border-yellow-500">
          <h2 className="tracking-wide font-heading font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Technical Arsenal</h2>
          <div className="w-[55px] sm:w-[70px] md:w-[85px] lg:w-[100px] border border-foreground border-2 rounded"></div>
          <p className="text-[10px] sm:text-xs md:text-sm opacity-60">Tech stack which I use on a daily basis.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-10 md:grid-cols-3 md:gap-20 justify-between text-center border border-yellow-500">
          {TechnicalArsenals.slice(0, 6).map(({arsenal, techstacks}) => (
            <Card key={arsenal}>
              <CardHeader className="capitalize border border-red-500">{arsenal}</CardHeader>
              <CardContent className="grid grid-cols-2 border border-red-500">
                {techstacks.map((techstacks) => (
                  <img src={`/svg/${techstacks}.svg`} key={techstacks} alt="Logo" width={50} height={50} className="border border-red-500"/>
                ))}
              </CardContent>
              <CardFooter className="border border-red-500"></CardFooter>
            </Card>
          ))}
        </div>
      </div>
        {/* 
        <FadeInOnScroll className="h-full w-full flex flex-col items-center justify-center gap-8" delay={0.3}>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-60">Tech stack which I use on a daily basis.</p>
          <div className="relative flex w-full overflow-hidden">
            <TechstackMarquee items={techstack} />
          </div>
        </FadeInOnScroll>
        */}
      </section>
      {/* Projects Section */}
      <section id='projects' className='border border-red-500'>
        <FadeInOnScroll delay={0.3}>
          <div className="h-[20vh] w-full flex">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl m-auto text-center">Explore Iqbal's Projects</h2>
          </div>
          <div className='w-[90%] md:w-full md:px-12 mx-auto'>
            <ProjectsCarousel items={projects} />
          </div>
          <div className="h-[15vh] w-[90%] flex mx-auto">
            <Button size={"sm"} className="cursor-pointer font-heading text-xs sm:text-sm md:text-base m-auto w-full md:w-[25%] md:h-9 md:gap-1.5 md:px-2.5 md:in-data-[slot=button-group]:rounded-md md:has-data-[icon=inline-end]:pr-2 md:has-data-[icon=inline-start]:pl-2">View All Projects</Button>
          </div>
        </FadeInOnScroll>
      </section>
      {/* Profile Section */}
      <section id='profile' className='h-[88vh] w-full'>
        <div className='h-full w-full relative flex items-center justify-center'> 
          profile section
        </div>
      </section>
    </>      
  );
}
