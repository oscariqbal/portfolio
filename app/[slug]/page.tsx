import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

import { Projects } from "@/data/projects";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
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

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <div>{project.content}</div>
    </div>
  );
}