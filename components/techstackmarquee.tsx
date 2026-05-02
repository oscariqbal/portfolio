'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

import { Arsenal } from "@/types/technicalarsenal";

type Props = {
  data: Arsenal[];
}

function TechstackMarquee({data}: Props) {
  const language = data.find((item) => item.arsenal === "language")

  return (
    <>
      <Marquee className="[--duration:30s] [--gap:3rem] md:[--gap:6rem]">
        {language?.techstacks.map((tech) => (
          <Tooltip key={tech}>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  "relative rounded-xl border p-2 md:p-4",
                  "bg-foreground/10",
                  "flex items-center justify-center",
                )}
              >
                <img
                  className="rounded-sm"
                  width="30"
                  height="30"
                  alt={tech}
                  src={`/svg/${tech}.svg`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{tech}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </>
  );
}

export {TechstackMarquee}
