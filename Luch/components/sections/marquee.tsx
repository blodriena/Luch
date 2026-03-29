"use client"

interface MarqueeProps {
  items: string[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  className?: string
  separator?: React.ReactNode
}

export function Marquee({
  items,
  direction = "left",
  speed = "normal",
  className = "",
  separator,
}: MarqueeProps) {
  const speedClass = {
    slow: "duration-[60s]",
    normal: "duration-[30s]",
    fast: "duration-[15s]",
  }[speed]

  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse"

  // Double the items to create seamless loop
  const doubledItems = [...items, ...items]

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className={`inline-flex ${animationClass}`}
        style={{
          animationDuration: speed === "slow" ? "60s" : speed === "fast" ? "15s" : "30s",
        }}
      >
        {doubledItems.map((item, index) => (
          <span key={index} className="inline-flex items-center">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-4">
              {item}
            </span>
            {separator || (
              <span className="text-accent text-4xl sm:text-5xl md:text-6xl lg:text-7xl mx-2">
                ✦
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}

export function MarqueeSection() {
  const items1 = ["LUCH", "Framework", "LUCH", "Framework", "LUCH"]
  const items2 = ["Who LUCH is for", "Who LUCH is for", "Who LUCH is for", "Who LUCH is for", "Who LUCH is for"]

  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <Marquee items={items1} direction="left" speed="normal" className="mb-8" />
      <Marquee
        items={items2}
        direction="right"
        speed="normal"
        className="text-muted-foreground/50"
      />
    </section>
  )
}
