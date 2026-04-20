import * as React from "react"
import Image from "next/image";
import { Card, CardTitle, CardDescription, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section id='top' className='h-[60vh] w-full'>
        <div className='h-full w-full flex justify-between border border-red-500'>
          <div className="h-full w-[55%] flex flex-col gap-5 justify-center border border-yellow-500">
            <h1 className="font-heading text-4xl">Oscar Iqbal Mustofa</h1>
            <p className="text-justify opacity-60">
              An Informatics graduate focusing in Data Science, Artificial Intelligence, and Web Development. 
              Proficient in Python and Javascript, also have substantial experience in managing and contributing to various projects, both independently and collaboratively. 
            </p>
            <Button className="w-full">
              Download CV
            </Button>
          </div>
          <div className="h-full w-[35%]">
            <div className="h-full w-full flex items-center justify-center border border-yellow-500">
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
      <section id="accordion-skills">

      </section>
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
            <Card>
              <CardHeader>
                <CardTitle>

                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea>
                  Your scrollable content here.
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>      
  );
}
