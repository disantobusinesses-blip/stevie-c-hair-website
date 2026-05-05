import { Scissors, Palette, Sparkles, Heart } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Scissors,
    title: "Cut & Style",
    description: "From classic cuts to modern reshapes, our expert stylists craft looks that complement your features and lifestyle.",
    price: "From $105",
  },
  {
    icon: Palette,
    title: "Colour & Highlights",
    description: "Dimensional balayage, face-framing highlights, and bespoke colour formulations tailored to your unique tone.",
    price: "From $120",
  },
  {
    icon: Sparkles,
    title: "Treatments",
    description: "Personalised hair masks and keratin smoothing treatments to restore, repair, and rejuvenate your hair.",
    price: "From $30",
  },
  {
    icon: Heart,
    title: "Bridal & Formal",
    description: "Make your special day unforgettable with elegant updos and styling designed for weddings and occasions.",
    price: "From $85",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every service begins with a complimentary consultation to understand your vision and create a personalised experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <service.icon className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-primary text-sm tracking-wider">{service.price}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-block border border-primary text-primary px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
