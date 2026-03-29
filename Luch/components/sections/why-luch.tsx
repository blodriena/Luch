"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"
import Image from "next/image"

const features = [
  "Modern Design",
  "Dynamic CMS",
  "Fully Responsive",
  "Instant Launch",
  "Custom Animations",
  "SEO Optimized",
  "REM Units",
  "Portfolio Ready",
  "Blog Friendly",
]

const videoThumbnails = [
  "/images/video-1.jpg",
  "/images/video-2.jpg",
  "/images/video-3.jpg",
  "/images/video-4.jpg",
  "/images/video-5.jpg",
  "/images/video-6.jpg",
]

export function WhyLuch() {
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
            <h2 className="text-3xl md:text-4xl font-bold">Why LUCH?</h2>
            <span className="text-sm text-muted-foreground">Siteflow</span>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            The ultimate template blends style and simplicity for creatives globally
          </p>
        </div>

        {/* Video Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {videoThumbnails.map((thumb, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-xl overflow-hidden bg-secondary cursor-pointer"
            >
              <Image
                src={thumb}
                alt={`Video thumbnail ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div
          className={`grid md:grid-cols-2 gap-8 mb-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground leading-relaxed">
            LUCH is more than just a template—it&apos;s a tool to bring your creative vision to life. Designed with powerful CMS capabilities, it blends sleek, modern aesthetics with effortless functionality, making it the perfect choice for portfolios and personal blogs. Whether you&apos;re an artist showcasing your latest projects, a designer sharing your process, or a writer crafting your thoughts, LUCH adapts to your needs with a clean layout and intuitive features.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Built for simplicity and impact, LUCH offers a seamless way to elevate your online presence. From quick setup to custom animations, every detail is crafted to help you stand out without the complexity. It&apos;s for those who value style as much as substance—ready to turn ideas into a stunning digital experience.
          </p>
        </div>

        {/* Features */}
        <div
          className={`flex flex-wrap gap-3 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {features.map((feature) => (
            <span
              key={feature}
              className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
