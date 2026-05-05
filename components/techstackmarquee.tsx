import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

import { TechnicalArsenalTypes } from "@/types/technicalarsenal";

type Props = {
  data: TechnicalArsenalTypes[];
}

function TechstackMarquee({data}: Props) {
  const language = data.find((item) => item.arsenal === "language")

  return (
    <>
      <Marquee className="[--duration:30s] [--gap:2rem] sm:[--gap:3rem] md:[--gap:4rem] lg:[--gap:5rem]">
        {language?.techstacks.map(({name, comp}, i) => {
          const Comp = comp

          return (
            <div key={i} className={cn( "relative rounded-xl border-background/30 p-2 sm:p-3 md:p-4 bg-foreground/25 flex items-center justify-center shadow-xl")}>
              <Comp className="rounded-sm size-10" />
            </div>
          )
      })}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </>
  );
}

export {TechstackMarquee}
