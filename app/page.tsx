import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <header className="h-[6vh] w-full bg-background sticky top-0 z-50 flex items-center border border-blue-500">
        <nav className='border border-red-500 font-heading container mx-auto'>
          <ul className='flex items-center gap-6'>
            <li><a href='#top'>Top</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id='top' className='h-[60vh] w-full bg-linear-to-b from-background from-95% to-chart-2 to-100%'>
          <div className='h-full w-full container mx-auto border border-red-500'>
            
          </div>
        </section>
        <section id='projects' className='h-[164vh] w-full bg-linear-to-b from-chart-2 from-10% to-foreground to-100%'>
          <div className='h-full w-full container mx-auto border border-red-500'>

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
