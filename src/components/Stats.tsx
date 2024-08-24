"use client"

import { cn } from "@/lib/utils"
import CountUp from "react-countup"

interface StatItem {
  num: number
  text: string
}

const stats: StatItem[] = [
  {
    num: 12,
    text: "Years of experience",
  },
  {
    num: 26,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 500,
    text: "Code commits",
  },
]

type StatsProps = {}

const Stats: React.FC<StatsProps> = () => {
  return (
    <section className="pt-4 pb-12 xl:py-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold min-w-16 xl:max-w-[40] w-auto"
              />
              <p className={cn("leading-snug text-white/80 min-w-20  w-full h-full max-w-[150px]")}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
