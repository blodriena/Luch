"use client"

import { useEffect, useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "What is LUCH and who is it for?",
    answer:
      "LUCH is a modern CMS template designed for portfolios and blogs. It's perfect for artists, bloggers, or anyone looking to showcase creative projects, share ideas, or build a stylish online presence with ease.",
  },
  {
    question: "What pages are included in the LUCH template?",
    answer:
      "LUCH comes with Home, About, Blog (CMS), Blog Post (CMS), Projects (CMS), Project Page (CMS), Contact, and Subscribe pages, plus additional resources like Style Guide, Licenses, Instructions, and Changelog.",
  },
  {
    question: "Is LUCH responsive and mobile-friendly?",
    answer:
      "Absolutely! LUCH is fully responsive, ensuring your site looks sleek and functions perfectly on all devices—desktops, tablets, and phones.",
  },
  {
    question: "Can I customize the design of LUCH?",
    answer:
      "Yes, LUCH offers easy color and style customization. With fully customizable sections, REM units for scalability, and an intuitive class naming system, you can tweak it to match your vision.",
  },
  {
    question: "How does the CMS functionality work in LUCH?",
    answer:
      "LUCH uses CMS for dynamic content management. You can easily add, edit, or organize blog posts and project pages directly, no coding required.",
  },
  {
    question: "What makes LUCH different from other templates?",
    answer:
      "LUCH stands out with its clean, modern design, quick setup, custom animations, and SEO optimization. It's built for flexibility and style, making your work shine effortlessly.",
  },
]

export function FAQ() {
  const [isVisible, setIsVisible] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)
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
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`flex items-center justify-between mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Ask a Question
          </Link>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-border rounded-2xl overflow-hidden transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 shrink-0" />
                )}
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
