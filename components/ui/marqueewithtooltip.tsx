'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Marquee } from "@/components/ui/marquee"
import { cn } from "@/lib/utils"

type Items = {
  name: string
  img: string
}

type ItemProps = {
  items: Items[]
}

function MarqueeWithTooltip({items}: ItemProps) {
  return (
    <>
      <Marquee className="[--duration:30s] [--gap:4rem]">
        {items.map((items) => (
          <Tooltip key={items.name}>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  "relative rounded-xl border p-4",
                  "bg-foreground/10",
                  "flex items-center justify-center",
                )}
              >
                <img
                  className="rounded-sm"
                  width="40"
                  height="40"
                  alt={items.name}
                  src={`${items.img}.svg`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{items.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </>
  );
}

export {MarqueeWithTooltip}
