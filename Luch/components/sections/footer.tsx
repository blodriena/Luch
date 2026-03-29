"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  explore: [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Style Guide", href: "#" },
    { label: "Licenses", href: "#" },
    { label: "Instructions", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  social: [
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
}

export function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* CTA */}
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16 pb-16 border-b border-primary-foreground/20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-lg text-balance">
            Ready to Elevate Your Online Presence? Reach Out Now!
          </h2>
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition-colors btn-hover"
          >
            Get Template
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Links */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Template</h3>
            <p className="text-primary-foreground/70 text-sm">
              LUCH is a fresh and innovative CMS template ideal for creating a portfolio or personal blog.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-primary-foreground/20 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-6xl md:text-8xl font-bold tracking-tighter">
            LUCH
          </div>
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} LUCH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
