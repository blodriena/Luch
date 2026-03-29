"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
  {
    title: "Fiber Network",
    category: "3D",
    aiModel: "Leonardo AI",
    client: "Unknown",
    year: "2023",
    image: "/images/project-detail-1.jpg",
  },
  {
    title: "Flowing Design",
    category: "Art",
    aiModel: "DALL-E 3",
    client: "Unknown",
    year: "2022",
    image: "/images/project-detail-2.jpg",
  },
  {
    title: "Flowing Waves",
    category: "Photo",
    aiModel: "Leonardo AI",
    client: "Unknown",
    year: "2022",
    image: "/images/project-detail-3.jpg",
  },
]

export function LatestProjects() {
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
          className={`flex items-center justify-between mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Latest Projects</h2>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All Projects
          </Link>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href="#"
              className={`group block transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-6 p-6 bg-card border border-border rounded-2xl hover:border-accent transition-colors">
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-secondary">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>Project</span>
                      <span className="px-2 py-1 bg-secondary rounded text-xs">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground mb-1">AI Model</p>
                        <p className="font-medium">{project.aiModel}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Date</p>
                        <p className="font-medium">{project.year}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-sm font-medium group-hover:text-accent transition-colors">
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
