import Image from "next/image";
import { Card, CardTitle, CardDescription, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

const techstack = [
  {
    name: "PHP",
    img: "php",
  },
  {
    name: "Laravel",
    img: "laravel",
  },
  {
    name: "Javascript",
    img: "javascript",
  },
  {
    name: "React",
    img: "react",
  },
  {
    name: "NextJS",
    img: "nextjs",
  },
  {
    name: "Typescript",
    img: "typescript",
  },
  {
    name: "Tailwind",
    img: "tailwind",
  },
  {
    name: "Python",
    img: "python",
  },
  {
    name: "Scikit-learn",
    img: "scikit-learn",
  },
  {
    name: "TensorFlow",
    img: "tensorflow",
  },
  {
    name: "Pytorch",
    img: "pytorch",
  },
]

const row = techstack.slice(0)

const TechstackPict = ({
  img,
  name,
}: {
  img: string
  name: string
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            "relative cursor-pointer rounded-xl border p-4",
            " bg-foreground/10",
            "flex items-center justify-center",
            "cursor-default"
          )}
        >
          <img
            className="rounded-sm"
            width="40"
            height="40"
            alt={name}
            src={`${img}.svg`}
          />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default function Home() {
  return (
    <>
      {/* Profile Section */}
      <section id='top' className='h-[70vh] w-full'>
        <div className='h-full w-full flex justify-between'>
          <div className="h-full w-[55%] flex flex-col gap-8 justify-center">
            <h1 className="font-heading text-5xl">Oscar Iqbal Mustofa</h1>
            <p className="text-justify opacity-60">
              An Informatics graduate focusing in Data Science, Artificial Intelligence, and Web Development. 
              Proficient in Python and Javascript, I also have substantial experience in managing and contributing to various projects, both independently and collaboratively. 
            </p>
            <Button className="w-[30%]">Iqbal's Resume</Button>
          </div>
          <div className="h-full w-[35%]">
            <div className="h-full w-full flex items-center justify-center">
              <Image
                  className="rounded-xl"
                  src="/img/profile.jpg"
                  alt="profile.jpg"
                  width={360}
                  height={360}
              />
            </div>
          </div> 
        </div>
      </section>
      {/* Skills Section */}
      <section id="marquee-skills" className="h-[40vh] w-full flex items-center">
        <div className="relative flex w-full flex-col items-center gap-10 overflow-hidden">
          <p className="opacity-60">Tech stack which I use on a daily basis.</p>
          <Marquee pauseOnHover className="[--duration:30s] [--gap:4rem]">
            {row.map((techstack) => (
              <TechstackPict key={techstack.name} {...techstack} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </section>
      {/* Case Study Section */}
      <section id='case-study' className='h-[164vh] w-full'>
        <div className='h-full w-full flex justify-between items-center border border-red-500'>
          <div className="h-[90%] w-[47.5%] flex flex-col justify-between border border-yellow-500">
            <Card>
              <CardContent className="border border-white-500">
                <div className="">
                  
                </div>
                <div className="">
                  
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>
                  Awakowak
                </CardTitle>
                <CardDescription>
                  Aawokowa owkdowkda
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardContent>
                Awkowakaw dowkodwa dksokowd awokaowkwa okwawko.
              </CardContent>
              <CardHeader>
                <CardTitle>
                  Awakowak
                </CardTitle>
                <CardDescription>
                  Aawokowa owkdowkda
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="h-[90%] w-[47.5%] border border-yellow-500"></div>
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
