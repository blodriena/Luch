"use client"

import { useState, useEffect } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Contact", href: "#" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tight">
              LUCH
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get Template
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-colors mt-4"
          >
            Get Template
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  )
}
