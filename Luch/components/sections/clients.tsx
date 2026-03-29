"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const clients = [
  { name: "PixelCraft Studio", type: "Graphic Design", location: "San Francisco, USA" },
  { name: "PulseVibe", type: "Music Production", location: "Seoul, South Korea" },
  { name: "ThinkFlow", type: "Blogging Platform", location: "Tallinn, Estonia" },
  { name: "AImpact", type: "AI Art Creation", location: "Moscow, Russia" },
  { name: "VisionaryLabs", type: "Creative Tech", location: "Shanghai, China" },
  { name: "FrameShift Media", type: "Videography", location: "Oslo, Norway" },
  { name: "InkVibe", type: "Freelance Writing", location: "Riga, Latvia" },
  { name: "StudioBloom", type: "Illustration", location: "New York, USA" },
  { name: "SparkNest", type: "Marketing Agency", location: "Buenos Aires, Argentina" },
  { name: "SciQuest", type: "Research & Academia", location: "Tokyo, Japan" },
  { name: "NeonLens", type: "Photography", location: "Bangkok, Thailand" },
  { name: "TrendScribe", type: "Lifestyle Blogging", location: "Berlin, Germany" },
  { name: "DataMuse", type: "Science Communication", location: "Sydney, Australia" },
  { name: "IdeaForge", type: "Creative Consulting", location: "Los Angeles, USA" },
  { name: "GlowCanvas", type: "Digital Art", location: "Paris, France" },
]

export function Clients() {
  const [isVisible, setIsVisible] = useState(false)
  const [showAll, setShowAll] = useState(false)
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

  const displayedClients = showAll ? clients : clients.slice(0, 10)

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl text-pretty">
            LUCH fuels creative brilliance globally, from bold designers in New York to AI artists in Tokyo and bloggers in Berlin
          </p>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold">Our Clients</h3>
            <span className="text-sm text-muted-foreground font-mono">[15]</span>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {displayedClients.map((client, index) => (
            <div
              key={client.name}
              className={`group bg-card border border-border rounded-xl p-5 hover-lift transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(index % 10) * 50}ms` }}
            >
              <h4 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                {client.name}
              </h4>
              <p className="text-sm text-muted-foreground">{client.type}</p>
              <p className="text-xs text-muted-foreground/70 mt-2">
                {client.location}
              </p>
            </div>
          ))}

          {/* Show more/less button */}
          <button
            onClick={() => setShowAll(!showAll)}
            className={`flex items-center justify-center gap-2 bg-secondary border border-border rounded-xl p-5 font-medium hover:bg-secondary/80 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {showAll ? (
              <>
                <span>-5</span>
                <ChevronUp className="w-4 h-4" />
                <span className="text-sm text-muted-foreground">Show less</span>
              </>
            ) : (
              <>
                <span>+5</span>
                <ChevronDown className="w-4 h-4" />
                <span className="text-sm text-muted-foreground">Show more</span>
              </>
            )}
          </button>
        </div>

        {/* Stats */}
        <div
          className={`flex flex-wrap gap-12 mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="text-5xl md:text-6xl font-bold text-accent">5+</div>
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
              Creative niches where the LUCH can be effectively used.
            </p>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-bold text-accent">20</div>
            <p className="text-sm text-muted-foreground mt-2 max-w-[200px]">
              Countries with eager clients ready to embrace LUCH.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
