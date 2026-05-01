import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section id='home' className='h-[75vh] md:h-[80vh] w-[90vw] md:w-[85vw] mx-auto flex flex-col gap-4 border border-red-500'>
      <div className="text-center flex flex-col gap-4 md:gap-6 lg:gap-8 border border-blue-500">
        <h1 className="tracking-wide font-heading font-thin text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Hello! <span className="tracking-normal font-semibold">I'm Iqbal</span></h1>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/60">
          An Informatics graduate continuously building in <span className="font-semibold text-foreground/80">Data Analytics</span>, <span className="font-semibold text-foreground/80">Machine Learning</span>, and <span className="font-semibold text-foreground/80">Web Development.</span>
        </p>
      </div>
      <div className="justify-center flex gap-4 md:gap-6 lg:gap-8 text-center border border-blue-500">
        <Button size={"sm"} className="cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">View Resume</Button>
        <Button size={"sm"} variant={"outline"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">
          <a href='#about'>Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}
