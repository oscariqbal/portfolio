import Image from "next/image";

export default function Header() {
    return (
        <header className="h-[15vh] w-full sticky top-0 z-50 flex items-center">
        <nav className='h-[50%] font-heading container mx-auto bg-foreground/10 backdrop-blur-xs rounded-xl pl-4 border border-foreground/15'>
          <ul className='h-full w-full flex items-center gap-6'>
            <li>
              <a href='#top'>
                <Image src="/logo.svg" alt="icon" width={30} height={30} className="rounded-sm"/>
              </a>
            </li>
            <li><a className="hover:text-muted-foreground" href='#projects'>Projects</a></li>
            <li><a className="hover:text-muted-foreground" href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
    )
}