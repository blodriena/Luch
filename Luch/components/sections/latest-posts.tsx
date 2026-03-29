"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const posts = [
  {
    title: "How to Stand Out in Web Design with the LUCH Template",
    date: "Sep 3, 2024",
    image: "/images/post-1.jpg",
  },
  {
    title: "Elevate Your Personal Brand with the LUCH Template",
    date: "Sep 3, 2024",
    image: "/images/post-2.jpg",
  },
  {
    title: "Why LUCH Is the Perfect Choice for Your Portfolio",
    date: "Sep 3, 2024",
    image: "/images/post-3.jpg",
  },
]

export function LatestPosts() {
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
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`flex items-center justify-between mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Latest Posts</h2>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            All Posts
          </Link>
        </div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post, index) => (
            <Link
              key={post.title}
              href="#"
              className={`group flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-background border border-border rounded-2xl hover:border-accent transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative w-full md:w-32 h-32 md:h-20 rounded-xl overflow-hidden bg-secondary shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>Blog Post</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
              </div>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Read Post
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
