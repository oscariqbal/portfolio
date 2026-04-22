import Image from "next/image";
import { Card, CardTitle, CardDescription, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MarqueeWithTooltip } from "@/components/ui/marqueewithtooltip";
import { FadeInOnScroll } from "@/components/ui/fadeinonscroll";

const techstack = [
  { name: "Javascript", img: "javascript" },
  { name: "React", img: "react" },
  { name: "NextJS", img: "nextjs" },
  { name: "Typescript", img: "typescript" },
  { name: "Tailwind", img: "tailwind" },
  { name: "Python", img: "python" },
  { name: "Scikit-learn", img: "scikit-learn" },
  { name: "TensorFlow", img: "tensorflow" },
  { name: "Pytorch", img: "pytorch" },
]

export default function Home() {
  return (
    <>
      {/* Profile Section */}
      <section id='top' className='h-[80vh] w-full flex justify-between px-4'>
        <div className="h-full w-[55%] flex flex-col gap-8 justify-center">
          <h1 className="font-heading text-5xl">Oscar Iqbal Mustofa</h1>
          <p className="text-justify opacity-60">
            An Informatics graduate focusing in Data Science, Artificial Intelligence, and Web Development. 
            Proficient in Python and Javascript, I also have substantial experience in managing and contributing to various projects, both independently and collaboratively. 
          </p>
          <Button className="w-[25%] font-heading">Iqbal's Resume</Button>
        </div>
        <div className="h-full w-[35%]">
          <div className="h-full w-full flex items-center justify-end">
            <Image
                className="rounded-xl"
                src="/img/profile.jpg"
                alt="profile.jpg"
                width={360}
                height={360}
            />
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="marquee-skills" className="h-[30vh] w-full">
        <FadeInOnScroll className="h-full w-full flex flex-col items-center justify-center gap-8" delay={0.3}>
          <p className="opacity-60">Tech stack which I use on a daily basis.</p>
          <div className="relative flex w-full overflow-hidden">
            <MarqueeWithTooltip items={techstack}></MarqueeWithTooltip>
          </div>
        </FadeInOnScroll>
      </section>
      {/* Projects Section */}
      <section id='projects' className='h-[125vh] w-full flex flex-col justify-center border border-red-500'>
        <div className="h-[15vh] w-full flex">
          <h2 className="font-heading text-4xl m-auto text-center">Explore Iqbal's Projects</h2>
        </div>
        <div className='h-[70vh] w-full flex justify-between items-center p-4 border border-red-500'>
          <Carousel className="h-full w-full max-w-[12rem] border border-red-500">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle></CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent>

                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="h-[15vh] w-full flex">
          <Button className="w-[12.5%] m-auto font-heading">View All Projects</Button>
        </div>
      </section>
      {/* Contact Section */}
      <section id='contact' className='h-[88vh] w-full'>
        <div className='h-full w-full relative flex items-center justify-center border border-red-500'> 
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[42vw] w-[42vw] z-10 bg-radial from-foreground from-1% to-background to-70% opacity-70 border border-yellow-500'></div>
          <div className="h-[70%] w-[70%] relative flex items-center justify-between z-20 border border-yellow-500">
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
