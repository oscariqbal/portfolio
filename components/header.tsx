import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
    return (
      <header className="h-[15vh] w-full sticky top-0 z-50 flex items-center">
        <nav className='h-[50%] w-[90%] md:w-[85%] font-heading mx-auto bg-background/10 backdrop-blur-xs rounded-xl px-2 md:px-4 border border-foreground/15'>
          <ul className='h-full w-full flex items-center gap-6 text-muted-foreground'>
            <li>
              <a href='#hero'>
                <Image src="/logo.svg" alt="icon" width={30} height={30} className="rounded-sm"/>
              </a>
            </li>
            <li>
              <Button variant={"ghost"} size={"sm"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-2.5 md:in-data-[slot=button-group]:rounded-md md:has-data-[icon=inline-end]:pr-2 md:has-data-[icon=inline-start]:pl-2">
                <a className="hover:text-foreground" href='#projects'>Projects</a>
              </Button>
              </li>
            <li>
              <Button variant={"ghost"} size={"sm"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-2.5 md:in-data-[slot=button-group]:rounded-md md:has-data-[icon=inline-end]:pr-2 md:has-data-[icon=inline-start]:pl-2">
                <a className="hover:text-foreground" href='#about'>About</a>
              </Button>
              </li>
          </ul>
        </nav>
      </header>
    )
}