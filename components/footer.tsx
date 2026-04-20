import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='h-[24vh] w-full bg-background'>
        <div className='h-full w-full flex container mx-auto pt-2'>
          <div className="my-auto mx-auto font-heading flex flex-col items-center gap-2">
            <p className="text-lg font-semibold">Oscar Iqbal Mustofa</p>
            <ul className="flex text-2xl">
              <li className="p-2 m-1 bg-foreground/10 backdrop-blur-sm rounded-lg">
                <a href="#">
                  <FaEnvelope className="text-muted-foreground hover:text-foreground"/>
                </a>
              </li>
              <li className="p-2 m-1 bg-foreground/10 backdrop-blur-sm rounded-lg">
                <a href="#">
                  <FaLinkedin className="text-muted-foreground hover:text-foreground"/>
                </a>
              </li>
              <li className="p-2 m-1 bg-foreground/10 backdrop-blur-sm rounded-lg">
                <a href="#">
                  <FaGithub className="text-muted-foreground hover:text-foreground"/>
                </a>
              </li>
              <li className="p-2 m-1 bg-foreground/10 backdrop-blur-sm rounded-lg">
                <a href="#">
                  <FaInstagram className="text-muted-foreground hover:text-foreground"/>
                </a>
              </li>
            </ul>
            <p className="opacity-80">Central Java, Indonesia • Open to Work</p>
            <p className="pt-3 text-sm opacity-40">©2026 Oscar Iqbal Mustofa — All rights reserved</p>
          </div>
        </div>
      </footer>
    )
}