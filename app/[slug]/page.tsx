import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent, } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle, } from "@/components/ui/item"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

import { FadeInOnScroll } from "@/components/ui/fadeinonscroll";

import { ArrowUpRight, ArrowLeft, Layers, CodeXml } from "lucide-react";

import { Projects } from "@/data/projects";

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = Projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="relative h-[85vh] flex flex-col gap-2 justify-center items-center">
        <div className="absolute z-5 w-9/10 md:h-9/10 md:w-auto aspect-square rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2)_50%,transparent_50%)] blur-xl"></div>
        <div className="absolute z-10 w-9/10 md:h-9/10 md:w-auto aspect-square bg-foreground/30 rounded-full"></div>
        <div className="absolute z-20 w-9/10 md:h-9/10 md:w-auto aspect-square bg-background rounded-full translate-y-1"></div>
        <div className="z-30 text-center">
          <h1 className="font-heading font-bold text-8xl">404</h1>
          <p className="font-extralight opacity-60">Page not found</p>
          <Button size={"sm"} asChild className="mt-4 cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">
            <Link href='/'>Go to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const {name, content, features, techs, category, timestamp, link, github, img} = project

  return (
    <div className="w-[90vw] sm:w-[88vw] md:w-[86vw] lg:w-[84vw] mx-auto">
      <div className="flex gap-2">
        <Button size={"sm"} asChild variant={"ghost"} className="my-auto cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">
          <Link href={'/#projects'}><ArrowLeft />Back</Link>
        </Button>
        <Separator orientation="vertical"/>
        <Breadcrumb className="flex pl-4">
          <BreadcrumbList>
            <BreadcrumbItem className="text-xs sm:text-sm md:text-base">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-xs sm:text-sm md:text-base">
              <BreadcrumbPage className="leading-5">{name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-6 md:mt-7 grid grid-cols-1 lg:grid-cols-2 gap-9 lg:gap-10 mb-20 sm:mb-25 md:mb-30 lg:mb-35">
        <FadeInOnScroll className="order-2 lg:order-1">
          <div className="px-2 lg:px-0 flex flex-col gap-6 md:gap-7">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">{name}</h2>
            <div className="flex gap-6 md:gap-7">
              <Badge variant={"default"}>{category}</Badge>
              <Badge variant={"secondary"}>{timestamp}</Badge>
            </div>
            <Separator />
            <p className="text-xs md:text-sm md:text-base opacity-60 leading-6">{content}</p>
            <div className="flex gap-6 md:gap-7">
              { link === "-" ? (
                  <Button disabled variant={"default"} size={"sm"} className="font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">
                    Visit Page <ArrowUpRight />
                  </Button>
              ) : (
                <Button variant={"default"} size={"sm"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">
                  <Link href={link}>Visit Page<ArrowUpRight /></Link>
                </Button>
              )}
              { github === "-" ? (
                  <Button disabled variant={"outline"} size={"sm"} className="font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">
                    GitHub Repo
                  </Button>
              ) : (
                <Button variant={"outline"} size={"sm"} asChild className="cursor-pointer font-heading text-xs sm:text-sm md:text-base md:h-9 md:gap-1.5 md:px-4">
                  <Link href={github}>GitHub Repo</Link>
                </Button>
              )}
            </div>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll className="order-1 lg:order-2">
          <div className="relative w-full aspect-[480/258]">
              <Image priority src={`/img/${img}.png`} alt={name} fill className="rounded-xl object-cover"/>
          </div>
        </FadeInOnScroll>
        <div className="flex flex-col gap-8 lg:gap-9 order-3 lg:order-3 px-2 lg:px-0">
          <div className="flex flex-row gap-6" >
            <FadeInOnScroll direction="right" className="flex-1">
              <Item variant={"muted"} className="gap-2.5 lg:gap-3.5 px-3 lg:px-4 py-2.5 lg:py-3.5">
                <ItemMedia variant="image">
                  <CodeXml className="size-4 md:size-5 lg:size-6"/>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="text-lg md:text-xl font-semibold">{techs.length}</ItemTitle>
                  <ItemDescription className="text-xs md:text-sm opacity-80">Tech Used</ItemDescription>
                </ItemContent>
              </Item>
            </FadeInOnScroll>
            <FadeInOnScroll direction="left" className="flex-1">
              <Item variant={"muted"} className="gap-2.5 lg:gap-3.5 px-3 lg:px-4 py-2.5 lg:py-3.5">
                <ItemMedia variant="image">
                  <Layers className="size-4 md:size-5 lg:size-6"/>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle className="text-lg md:text-xl">{features.length}</ItemTitle>
                  <ItemDescription className="text-xs md:text-sm opacity-80">Key Features</ItemDescription>
                </ItemContent>
              </Item>
            </FadeInOnScroll>
          </div>
          <div className="flex flex-col gap-6 md:gap-7">
            <FadeInOnScroll className="flex flex-col gap-4 md:gap-5">
              <h3 className="text-center font-heading font-semibold text-lg md:text-xl lg:text-2xl">Tech Used</h3>
              <div className="mx-auto w-[55px] sm:w-[70px] md:w-[85px] lg:w-[100px] border border-foreground border-2 rounded"></div>
            </FadeInOnScroll>
            <div className="flex flex-wrap gap-6 lg:gap-7">
              {techs.map(({name, icon}, i) => {
                const Comp = icon

                return (
                  <FadeInOnScroll key={i} delay={(i+1) / 10}>
                    <Item variant={"muted"} className="w-fit" size={"sm"}>
                      <ItemMedia variant={"icon"}>
                        <Comp />
                      </ItemMedia>
                      <ItemContent>
                        <ItemTitle>{name}</ItemTitle>
                      </ItemContent>
                    </Item>
                  </FadeInOnScroll>
                )
              })}
            </div>
          </div>
        </div>
        <FadeInOnScroll className="order-4 lg:order-4">
          <div>
            <Card className="bg-card/90 shadow-sm gap-4 lg:gap-6">
              <CardHeader className="px-4 lg:px-6">
                <CardTitle>
                  <Item className="gap-2.5 lg:gap-3.5 px-3 lg:px-4 py-2.5 lg:py-3.5">
                    <ItemMedia variant="image">
                      <Layers className="size-6"/>
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className="text-lg md:text-xl lg:text-2xl font-semibold">Key Features</ItemTitle>
                    </ItemContent>
                  </Item>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 lg:px-6">
                {features.map(({name, description}, i) => (
                  <Accordion key={i} type="multiple">
                    <AccordionItem value={name}>
                      <AccordionTrigger className="text-sm lg:text-base">{name}</AccordionTrigger>
                      <AccordionContent className="text-xs lg:text-sm opacity-60 leading-6">
                        {description}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                ))}
              </CardContent>
            </Card>
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
}