import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
      <header className="h-[15vh] w-full sticky top-0 z-50 flex items-center">
        <nav className='h-1/2 w-[90%] md:w-[85%] font-heading mx-auto bg-background/5 backdrop-blur-xs rounded-xl px-2 md:px-4 border border-foreground/15'>
          <ul className='h-full w-full flex items-center text-muted-foreground gap-2'>
            <li>
              <Button variant={"ghost"} size={"sm"} asChild>
                <a href='#hero'>
                  <Image src="/logo.svg" alt="icon" width={20} height={20} className="rounded-sm"/>
                </a>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"} size={"sm"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base ">
                <a className="hover:text-foreground" href='#experience'>Experience</a>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"} size={"sm"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base ">
                <a className="hover:text-foreground" href='#tech-arsenal'>Tech Arsenal</a>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"} size={"sm"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base ">
                <a className="hover:text-foreground" href='#projects'>Projects</a>
              </Button>
            </li>
            <li>
              <Button variant={"ghost"} size={"sm"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base ">
                <a className="hover:text-foreground" href='#profile'>Profile</a>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    )
}