"use client"

const tags = [
  "Responsive Design",
  "Webflow",
  "User Experience",
  "Page Speed",
  "Prototyping",
  "Frontend",
  "Accessibility",
  "Animation",
  "User Interface",
]

export function TagsMarquee() {
  const doubledTags = [...tags, ...tags, ...tags, ...tags]

  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        {doubledTags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default"
          >
            {tag}
            <span className="mx-4 text-accent">•</span>
          </span>
        ))}
      </div>
    </section>
  )
}
