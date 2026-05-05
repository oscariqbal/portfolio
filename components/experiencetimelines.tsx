import { ExperienceTypes } from "@/types/experiences";
import { FadeInOnScroll } from "@/components/ui/fadeinonscroll";

type Props = {
  data: ExperienceTypes[];
}

function ExperienceTimelines({data}: Props) {
  return (
    <ol className="sm:w-[95%] md:w-[85%] lg:w-[75%] mx-auto relative space-y-8 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-border">
      {data.map(({title, description, date}, i) => (
        <li key={title} className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
          <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
            <span className="size-3 shrink-0 rounded-full bg-primary"></span>
            <FadeInOnScroll direction={i % 2 === 0 ? "right":"left"} delay={(i+1) / 6}>
              <div className="mt-2">
                <time dateTime={date.toISOString()} className="text-xs/none font-medium text-foreground/60" >{date.toLocaleDateString()}</time>
                <h3 className="text-lg font-bold tracking-wide">{title}</h3>
                <p className="mt-0.5 text-sm text-foreground/60">{description}</p>
              </div>
            </FadeInOnScroll>
          </div>
          <div aria-hidden="true"></div>
        </li>
      ))}
    </ol>
  )
}

export {ExperienceTimelines}