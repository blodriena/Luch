"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function CTABanner() {
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
      className="py-16 px-4 md:px-8 bg-primary text-primary-foreground"
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left text-balance">
          Ready to Elevate Your Online Presence? Reach Out Now!
        </h2>
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap btn-hover"
        >
          Get Template
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
