import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services & Menu | Stevie C Hair",
  description: "Explore our full range of hair services including cuts, colour, highlights, balayage, treatments, and bridal styling.",
}

const ladiesServices = {
  "Cut & Style": [
    { name: "Short Blow Wave", price: "$70" },
    { name: "Long Blow Wave", price: "$80" },
    { name: "Cut Reshape", price: "$105" },
    { name: "Cut Restyle", price: "$115" },
  ],
  "Permanent & Semi-Permanent Colour": [
    { name: "Regrowth Colour", price: "$120" },
    { name: "Scalp Lightener", price: "$135" },
    { name: "1/4 Head Foils", price: "$145" },
    { name: "1/2 Head Foils", price: "$170" },
    { name: "3/4 Head Foils", price: "$190" },
    { name: "Full Head Foils", price: "$210" },
  ],
  "Fashion Colour": [
    { name: "Root Melt", price: "$135" },
    { name: "Balayage Refresh", price: "$180" },
    { name: "Balayage", price: "$210" },
    { name: "Face Framing Highlights", price: "$165" },
    { name: "Face Framing Highlights + Regrowth Colour", price: "$215" },
  ],
  "Toners & Gloss": [
    { name: "Toner / Gloss Refresh (60g)", price: "$40" },
    { name: "Extra Product", price: "$40" },
  ],
  "Formal & Styling": [
    { name: "Basic Braids with a Service", price: "$10" },
    { name: "Fashion Braids", price: "$30" },
    { name: "Occasion Up Style (45 mins)", price: "$85" },
    { name: "Hair Up (45 mins)", price: "$100" },
    { name: "Bridal Hair Up (60 mins)", price: "$130" },
    { name: "Bridesmaid Hair Up (45 mins)", price: "$110" },
    { name: "Flower Girl Hair Up (45 mins)", price: "$68" },
  ],
  "Treatments": [
    { 
      name: "Personal Custom Hair Mask", 
      price: "$30",
      description: "A personalised scripted mask for the individual. Repairs damaged hair, restores moisture and strength. Includes scalp massage and hot towel experience."
    },
    { 
      name: "Keratin Treatment", 
      price: "From $350",
      description: "Reduces unmanageable frizzy hair by 80%, leaving hair soft, smooth and shiny. Lasts up to 3 months. Pricing depends on length and thickness."
    },
  ],
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Our Expertise</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Services & Menu
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our pricing reflects our commitment to continuous training, education, and experience. 
            All prices include GST and are subject to change without notice.
          </p>
        </div>
      </section>

      {/* Consultation Note */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-secondary/50 p-8 text-center">
            <h2 className="font-serif text-2xl text-foreground mb-4">Complimentary Consultation</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
              Prices shown are a starting guide. We recommend a complimentary consultation for an accurate quote. 
              If you are having colour for the first time, or have experienced sensitivity in the past, 
              we recommend a patch test 48 hours before your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {Object.entries(ladiesServices).map(([category, services]) => (
            <div key={category} className="mb-16 last:mb-0">
              <h2 className="font-serif text-3xl text-foreground mb-8 pb-4 border-b border-border">
                {category}
              </h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex justify-between items-baseline gap-4">
                      <span className="text-foreground">{service.name}</span>
                      <span className="flex-shrink-0 text-primary font-medium">{service.price}</span>
                    </div>
                    {"description" in service && (
                      <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-foreground mb-6">Our Commitment to You</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            If you have any concerns with your results, please get in touch within 7 days so we can look after you.
            For full booking and cancellation details, please refer to our Terms & Conditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.phorest.com/salon/steviechair"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors duration-300"
            >
              Book Appointment
            </Link>
            <Link
              href="https://gift-cards.phorest.com/salons/steviechair"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary text-primary px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              Buy a Gift Card
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
