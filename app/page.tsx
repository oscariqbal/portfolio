import Image from "next/image";
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <header className="h-[10vh] w-full sticky top-0 z-50 flex items-end">
        <nav className='h-[70%] font-heading container mx-auto bg-foreground/10 backdrop-blur-sm rounded-md pl-5 border border-foreground/15'>
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
      <main>
        <section id='top' className='h-[60vh] w-full bg-linear-to-b from-background from-95% to-chart-4 to-100%'>
          <div className='h-full w-full container mx-auto flex justify-between'>
            <div className="h-full w-[50%] flex flex-col gap-5 justify-center">
              <h1 className="font-heading text-4xl">Oscar Iqbal Mustofa</h1>
              <p className="text-justify opacity-60">
                I am an Informatics graduate specializing in Data Science, Artificial Intelligence, and Web Development. Proficient in several programming languages, including Python, JavaScript, and PHP.
              </p>
            </div>
            {/*
            <div className="h-full w-[47.5%]">
              <div className="h-full w-full flex items-center justify-center">
                <Image
                    className=""
                    src="/img/fireworks.png"
                    alt="fireworks.png"
                    width={250}
                    height={250}
                />
              </div>
            </div>
            */}
          </div>
        </section>
        <section id='projects' className='h-[164vh] w-full bg-linear-to-b from-chart-4 from-10% to-chart-2 to-100%'>
          <div className='h-full w-full container mx-auto flex justify-between items-center border border-red-500'>
            <div className="h-[90%] w-[47.5%] border border-yellow-500">
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
        <section id='contact' className='h-[75vh] w-full'>
          <div className='h-full w-full relative container mx-auto z-10 border border-red-500 '> 
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35vw] w-[35vw] z-5 bg-radial from-foreground from-1% to-background to-65% opacity-70'></div>
          </div>
        </section>
      </main>
      <footer className='h-[19vh] w-full bg-background'>
        <div className='h-full w-full container mx-auto border border-red-500'>

        </div>
      </footer>
    </div>
  );
}
