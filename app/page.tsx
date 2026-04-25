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

const projects = [
  /*{
    name: "",
    description: "", problem, dataset, approach, model, evaluation, conclusion
    category: "",
    timestamp: "",
    img1: "",
    img2: ""
  },*/
  {
    name: "Corporate Governance Audit Retrieval System Evaluation",
    description: "Facing several challenges in corporate governance audit process, this project proposed dense-and-rerank retrieval system that has been evaluated as an appropriate approach for developing an AI-based corporate governance audit solution.",
    category: "Individual",
    timestamp: "Sept 2025 - Feb 2026",
    img1: "1-1v2",
    img2: "1-2v2"
  },
  {
    name: "Retainly - Customer Churn Analysis and Prediction",
    description: "",
    category: "",
    timestamp: "",
    img1: "",
    img2: ""
  },
  {
    name: "Corn Disease Detection",
    description: "",
    category: "",
    timestamp: "",
    img1: "",
    img2: ""
  },
  {
    name: "Satria Wijaya Wedding Organizer Landingpage",
    description: "",
    category: "",
    timestamp: "",
    img1: "",
    img2: ""
  },
  {
    name: "Bakso Arema Caknan Landingpage",
    description: "",
    category: "",
    timestamp: "",
    img1: "",
    img2: ""
  },
  {
    name: "Student Performance Analysis and Prediction",
    description: "",
    category: "",
    timestamp: "",
    img1: "",
    img2: ""
  },
  {
    name: "Obesity Factor Analysis",
    description: "",
    category: "",
    timestamp: "",
    img1: "",
    img2: ""
  },
  { name: "Hotel System Design",
    description: "",
    category: "",
    timestamp: "",
    img1: "",
    img2: ""
  },
]

export default function Home() {
  return (
    <>
      {/* Profile Section */}
      <section id='top' className='h-[75vh] md:h-[80vh] w-full flex flex-col md:flex-row px-2 md:px-4 gap-8 md:gap-0 justify-center'>
        <div className="h-auto md:h-full w-full md:w-[60%] lg:w-[65%] flex flex-col order-2 md:order-1">
          <div className="w-[90%] mx-auto my-0 md:mx-0 md:my-auto flex flex-col gap-4 md:gap-6 lg:gap-8 text-center md:text-left">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Oscar Iqbal Mustofa</h1>
            <p className="text-xs sm:text-sm md:text-base text-justify leading-relaxed opacity-60">
              An Informatics graduate focusing in Data Science, Artificial Intelligence, and Web Development.
              <span className="hidden md:block"> Proficient in Python and Javascript, I also have substantial experience in managing and contributing to various projects, both independently and collaboratively.</span> 
            </p>
            <Button size={"sm"} className="font-heading text-xs sm:text-sm md:text-base mx-auto md:mx-0 w-full md:w-[25%] md:h-9 md:gap-1.5 md:px-2.5 md:in-data-[slot=button-group]:rounded-md md:has-data-[icon=inline-end]:pr-2 md:has-data-[icon=inline-start]:pl-2">Iqbal's Resume</Button>
          </div>
        </div>
        <div className="h-auto md:h-full w-full md:w-[40%] lg:w-[35%] flex order-1 md:order-2">
          <div className="w-[80%] md:w-3/4 m-auto">
            <Image
                className="rounded-xl w-full"
                src="/img/profile.jpg"
                alt="profile.jpg"
                width={500}
                height={500}
                sizes="(max-width: 768px) 81vw, (max-width: 1024px) 25.5vw"
                priority
            />
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="marquee-skills" className="h-[30vh] w-full px-2 md:px-4">
        <FadeInOnScroll className="h-full w-full flex flex-col items-center justify-center gap-8" delay={0.3}>
          <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-60">Tech stack which I use on a daily basis.</p>
          <div className="relative flex w-full overflow-hidden">
            <MarqueeWithTooltip items={techstack}></MarqueeWithTooltip>
          </div>
        </FadeInOnScroll>
      </section>
      {/* Projects Section */}
      <section id='projects' className='h-[125vh] w-full flex flex-col justify-center items-center px-2 md:px-4 border border-red-500'>
        <div className="h-[15vh] w-full flex">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl m-auto text-center">Explore Iqbal's Projects</h2>
        </div>

        <div className='h-[70vh] w-[90%] md:w-full md:px-12'>
          <Carousel className="h-full border border-green-500">
            <CarouselContent className="border border-yellow-500">
              {projects.map(({ name, description, category, timestamp, img1, img2 }) => (
                <CarouselItem key={name} className="border border-blue-500">
                  <div className="">
                    daw
                  </div>
                </CarouselItem>
              ))}
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
