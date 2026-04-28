import Image from "next/image";
import { Card, CardTitle, CardDescription, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FadeInOnScroll } from "@/components/ui/fadeinonscroll";

import { TechstackMarquee } from "@/components/techstackmarquee";
import { ProjectsCarousel } from "@/components/projectscarousel";

import { techstack } from "@/data/techstack";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      {/* Skills Section */}
      <section id="marquee-skills" className="h-[30vh] md:h-[35vh] w-full px-2 md:px-4">
        <FadeInOnScroll className="h-full w-full flex flex-col items-center justify-center gap-8" delay={0.3}>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-60">Tech stack which I use on a daily basis.</p>
          <div className="relative flex w-full overflow-hidden">
            <TechstackMarquee items={techstack} />
          </div>
        </FadeInOnScroll>
      </section>
      {/* Projects Section */}
      <section id='projects' className='h-[125vh] w-full flex flex-col justify-center items-center px-2 md:px-4'>
        <FadeInOnScroll className="h-full w-full" delay={0.3}>
          <div className="h-[20vh] w-full flex mt-10 md:mt-24">
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
      {/* About Section */}
      <section id='about' className='h-[88vh] w-full'>
        <div className='h-full w-full relative flex items-center justify-center'> 
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[42vw] w-[42vw] z-10 bg-radial from-foreground from-1% to-background to-70% opacity-70'></div>
          <div className="h-[70%] w-[70%] relative flex items-center justify-between z-20">
            <Card>
              <Image src="/img/profile.jpg" alt="icon" width={250} height={170} className="rounded-sm"/>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  Hi there, I'm Iqbal!
                </CardTitle>
                <CardDescription >
                  dawdwdsadw
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardFooter>
                <Button className="w-full">
                  Download CV
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </>      
  );
}
