"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Intro() {
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

  const links = [
    { label: "Style Guide", href: "#" },
    { label: "Licenses", href: "#" },
    { label: "Instructions", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Siteflow", href: "#" },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-4xl text-balance">
            LUCH is a fresh and innovative CMS template ideal for creating a portfolio or personal blog. Showcase your projects, ideas, and thoughts in a modern and stylish format with ease.
          </h2>
        </div>

        <div
          className={`mt-12 flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors btn-hover"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-full font-medium hover:bg-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
