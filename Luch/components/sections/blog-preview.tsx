"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    title: "How to Stand Out in Web Design with the LUCH Template",
    date: "Sep 3, 2024",
    tag: "Work",
    image: "/images/blog-1.jpg",
  },
  {
    title: "Elevate Your Personal Brand with the LUCH Template",
    date: "Sep 3, 2024",
    tag: "Review",
    image: "/images/blog-2.jpg",
  },
  {
    title: "Why LUCH Is the Perfect Choice for Your Portfolio",
    date: "Sep 3, 2024",
    tag: "Lifestyle",
    image: "/images/blog-3.jpg",
  },
]

const projects = [
  {
    title: "Flowing Design",
    date: "Sep 4, 2024",
    tag: "DALL-E 3",
    image: "/images/project-1.jpg",
  },
  {
    title: "Flowing Waves",
    date: "Sep 4, 2024",
    tag: "Leonardo AI",
    image: "/images/project-2.jpg",
  },
  {
    title: "Fiber Network",
    date: "Sep 4, 2024",
    tag: "Leonardo AI",
    image: "/images/project-3.jpg",
  },
]

interface CardProps {
  title: string
  date: string
  tag: string
  image: string
  type: "post" | "project"
  index: number
  isVisible: boolean
}

function Card({ title, date, tag, image, type, index, isVisible }: CardProps) {
  return (
    <Link
      href="#"
      className={`group block transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-secondary">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <span>{type === "post" ? "Read Post" : "View Project"}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>{date}</span>
        <span className="text-accent">#{tag}</span>
      </div>
    </Link>
  )
}

export function BlogPreview() {
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
        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {blogPosts.map((post, index) => (
            <Card
              key={post.title}
              {...post}
              type="post"
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              {...project}
              type="project"
              index={index + 3}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
