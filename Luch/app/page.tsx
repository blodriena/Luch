import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Intro } from "@/components/sections/intro"
import { MarqueeSection } from "@/components/sections/marquee"
import { TargetAudience } from "@/components/sections/target-audience"
import { BlogPreview } from "@/components/sections/blog-preview"
import { CTABanner } from "@/components/sections/cta-banner"
import { Clients } from "@/components/sections/clients"
import { ReadySection } from "@/components/sections/ready-section"
import { WhyLuch } from "@/components/sections/why-luch"
import { LatestProjects } from "@/components/sections/latest-projects"
import { LatestPosts } from "@/components/sections/latest-posts"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { TagsMarquee } from "@/components/sections/tags-marquee"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Intro />
      <MarqueeSection />
      <TargetAudience />
      <BlogPreview />
      <CTABanner />
      <Clients />
      <ReadySection />
      <WhyLuch />
      <LatestProjects />
      <LatestPosts />
      <Pricing />
      <FAQ />
      <TagsMarquee />
      <CTABanner />
      <Footer />
    </main>
  )
}
