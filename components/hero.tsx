import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id='hero' className='h-[75vh] md:h-[80vh] w-[90vw] md:w-[85vw] mx-auto flex flex-col md:flex-row px-2 md:px-4 gap-8 md:gap-0 justify-center'>
      <div className="h-auto md:h-full w-full md:w-[60%] lg:w-[65%] flex flex-col order-2 md:order-1">
        <div className="w-[90%] mx-auto my-0 md:mx-0 md:my-auto flex flex-col gap-4 md:gap-6 lg:gap-8 text-center md:text-left">
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Hi! I'm Iqbal</h1>
          <p className="text-xs sm:text-sm md:text-base text-justify leading-relaxed opacity-60">
            An Informatics graduate focusing in Data Science, Artificial Intelligence, and Web Development.
            <span className="hidden md:block"> Proficient in Python and Javascript, I also have substantial experience in managing and contributing to various projects, both independently and collaboratively.</span> 
          </p>
          <Button size={"sm"} className="cursor-pointer font-heading text-xs sm:text-sm md:text-base mx-auto md:mx-0 w-full md:w-[25%] md:h-9 md:gap-1.5 md:px-2.5 md:in-data-[slot=button-group]:rounded-md md:has-data-[icon=inline-end]:pr-2 md:has-data-[icon=inline-start]:pl-2">Iqbal's Resume</Button>
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
  );
}
