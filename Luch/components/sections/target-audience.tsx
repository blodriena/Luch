"use client"

import { useEffect, useRef, useState } from "react"

const audiences = [
  { name: "AI Creators", number: "01" },
  { name: "Designers", number: "02" },
  { name: "Bloggers", number: "03" },
  { name: "Creative Studios", number: "04" },
  { name: "Researchers", number: "05" },
]

export function TargetAudience() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {audiences.map((audience, index) => (
            <div
              key={audience.number}
              className={`group relative bg-card border border-border rounded-2xl p-6 hover-lift cursor-pointer transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-12">
                <span className="text-xs text-muted-foreground font-mono">
                  [{audience.number}]
                </span>
              </div>
              <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                {audience.name}
              </h3>
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
