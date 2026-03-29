"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ReadySection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-8 bg-card border-y border-border"
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-colors mb-8 btn-hover"
        >
          Get LUCH
          <ArrowUpRight className="w-4 h-4" />
        </Link>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to create something amazing?
        </h2>
        <p className="text-xl text-muted-foreground">
          Get LUCH today now.
        </p>
      </div>
    </section>
  )
}
