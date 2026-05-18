import Link from "next/link";
import { ContactTypes } from "@/types/contacts";

type Props = {
  data: ContactTypes[];
  className? : string
}

function ContactDock({data, className}: Props) {
  return (
    <ul className={`flex gap-2 py-2 px-4 rounded-xl border-2 border-border bg-background/20 ${className}`} >
      {data.map(({name, link, comp}, i) => {
        const Comp = comp
        return (
          <li key={name}>
            <Link href={link} target="_blank">
              <Comp className="p-1 size-8 sm:size-9 md:size-10 text-foreground/50 hover:text-foreground hover:bg-background/30 rounded-xl" width={10} height={10}/>
            </Link>
          </li>
        )
      })}
    </ul>
    
  )
}

export {ContactDock}