"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const opacity = Math.max(0, 1 - scrollY / 500)
  const scale = Math.max(0.8, 1 - scrollY / 2000)
  const translateY = scrollY * 0.3

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: opacity * 0.5,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-48 h-48 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Main content */}
      <div
        className="relative z-10 text-center max-w-5xl mx-auto"
        style={{
          opacity,
          transform: `scale(${scale}) translateY(${translateY * 0.5}px)`,
        }}
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-8">
          <span className="block">Fresh &amp;</span>
          <span className="block">Modern</span>
          <span className="block text-accent bg-primary px-4 py-2 inline-block rounded-2xl mt-2">
            CMS Template
          </span>
        </h1>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        style={{ opacity }}
      >
        <span className="text-sm text-muted-foreground tracking-widest uppercase">
          Scroll for more
        </span>
        <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>

      {/* Back to top button (appears on scroll) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 ${
          scrollY > 500 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowDown className="w-5 h-5 rotate-180" />
      </button>
    </section>
  )
}
