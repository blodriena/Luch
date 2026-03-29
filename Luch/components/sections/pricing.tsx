"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const features = [
  "Sleek Aesthetics",
  "Fully Responsive",
  "Custom Animations",
  "SEO Optimized",
]

const benefits = [
  {
    title: "Stunning Visual Impact",
    description: "Sleek design and animations captivate your audience instantly.",
  },
  {
    title: "Seamless CMS Power",
    description: "Dynamic, intuitive system simplifies content creation effortlessly.",
  },
  {
    title: "Global Creative Reach",
    description: "Responsive, SEO-optimized template boosts your online presence.",
  },
]

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
            <span className="text-sm text-muted-foreground">All Templates</span>
          </div>
          <p className="text-xl md:text-2xl font-semibold mb-4">
            Unlock LUCH&apos;s Creative Power
          </p>
          <p className="text-muted-foreground max-w-2xl">
            LUCH delivers sleek, powerful tools at an affordable rate, empowering bold creatives to craft stunning portfolios and blogs effortlessly.
          </p>
        </div>

        {/* Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Benefits */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 bg-card border border-border rounded-2xl"
              >
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Price Card */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
                Best Deal
              </span>
            </div>
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold">$29</span>
              <span className="text-lg text-primary-foreground/70">/ USD</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Elevate your bold creative presence effortlessly now.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors w-full justify-center mb-8 btn-hover"
            >
              Buy Template
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Buy Now Marquee */}
        <div
          className={`mt-12 py-4 bg-accent text-accent-foreground rounded-full overflow-hidden transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="animate-marquee whitespace-nowrap">
            {Array(10)
              .fill(null)
              .map((_, i) => (
                <span key={i} className="inline-flex items-center mx-8">
                  <span className="font-semibold">LUCH Template</span>
                  <span className="mx-4">•</span>
                  <span>Buy Now</span>
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
