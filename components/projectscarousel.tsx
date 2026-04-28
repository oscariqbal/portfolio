'use client'

import { Badge } from "@/components/ui/badge"
import { ArrowUpRightIcon } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Lens } from "@/components/ui/lens"
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import type { EmblaCarouselType } from "embla-carousel"


import { useState, useEffect } from 'react';

type Items = {
  name: string
  description: string
  category: string
  timestamp: string
  link: string
  img1: string
  img2: string
}

type ItemProps = {
  items: Items[]
}

function ProjectsCarousel({items}: ItemProps) {
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <>
      <Carousel setApi={setApi} className="bg-card rounded-t-xl">
        <CarouselContent>
          {items.slice(0, 3).map(({ name, description, category, timestamp, link, img1, img2 }) => (
            <CarouselItem key={name}>
              <div className="h-full lg:pt-12 lg:pb-8 lg:px-12 flex flex-col lg:flex-row lg:gap-12">
                <div className="flex flex-col order-2 lg:order-1 lg:w-2/3 px-6 lg:px-0 mt-8 mb-4 lg:m-0">
                  <h3 className="select-none pb-6 font-heading text-center lg:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl leading-normal">{name}</h3>
                  <div className="select-none pb-4 lg:pb-6 mx-auto lg:m-0 flex flex-wrap gap-2 lg:gap-4">
                    <Badge>{category}</Badge>
                    <Badge variant="secondary">{timestamp}</Badge>
                  </div>
                  <Separator />
                  <p className="select-none py-4 lg:py-6 text-justify lg:text-left text-muted-foreground text-xs sm:text-sm md:text-base leading-normal tracking-wide text-base">{description}</p>
                  <Button variant={"outline"} size={"sm"} asChild className="mt-6 cursor-pointer font-heading text-xs sm:text-sm md:text-base w-full lg:w-[25%] md:h-9 md:gap-1.5 md:px-2.5 md:in-data-[slot=button-group]:rounded-md md:has-data-[icon=inline-end]:pr-2 md:has-data-[icon=inline-start]:pl-2">
                    <a href={`${link}`}>
                      View Project <ArrowUpRightIcon data-icon="inline-end" />
                    </a>
                  </Button>
                </div>  
                <div className="order-1 lg:order-2 lg:w-1/3 flex flex-col justify-between gap-8">
                  <Lens
                    zoomFactor={3}
                    lensSize={120}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                  >
                    <Image
                      className="rounded-lg hidden lg:block"
                      src={`/img/${img1}.png`}
                      alt={`${img1}.png`}
                      width={1920}
                      height={1080}
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </Lens>
                  <Lens
                    zoomFactor={3}
                    lensSize={120}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                  >
                    <Image
                      className="rounded-t-lg lg:rounded-lg"
                      src={`/img/${img2}.png`}
                      alt={`${img2}.png`}
                      width={1920}
                      height={1080}
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </Lens>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center gap-3 pt-4 pb-6 lg:pb-8 bg-card rounded-b-xl">
          {[0, 1, 2].map((i) => (
            <div key={i}>{i === current ? "●" : "○"}</div>
          ))}
      </div>
    </>
  )
}

export {ProjectsCarousel}