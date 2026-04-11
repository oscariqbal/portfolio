import Link from 'next/link';

export default function Home() {
  return (
    <div className="border border-red-500">
      <header className="h-[6vh] w-full border border-blue-500">
        <nav>
          <ul className='flex'>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="border border-green-500">
        dwa
      </main>
    </div>
  );
}
