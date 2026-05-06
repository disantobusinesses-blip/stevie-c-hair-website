import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <TeamSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </main>
  )
}
