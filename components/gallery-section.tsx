import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_655198683_18567310630039369_6889621235139493946_n-nj7pdxP78tf6zi2HpD9Lhgf4YTamaz.jpg",
    alt: "Blonde balayage with soft waves",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_658821368_18570918937039369_9220421943294825877_n-9Dthnalc02xFVEyL8vjQmsOwR4Exo2.jpg",
    alt: "Short wavy blonde bob",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_657166491_18571172851039369_6130656112375835746_n-LaMTo1ZPbeaw1fqVv9BL4ZNRY52Wgs.jpg",
    alt: "Long sleek blonde hair",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_657769220_18570923476039369_6236575831971597653_n-fMlpwAK4WhFXlVTONr5yUQVbH1VExT.jpg",
    alt: "Brunette balayage waves",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_640434843_18561761860039369_2764646247663709707_n-F87wxNVghPjdY8hpFPF0hq6mAKKyGp.jpg",
    alt: "Stylist at work",
  },
]

export function GallerySection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Our Work</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A curated collection of our favourite transformations and signature styles.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "aspect-[3/4] md:aspect-[2/3]" : "aspect-square"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">Follow us for more inspiration</p>
          <Link
            href="https://www.instagram.com/steviechair/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-sm tracking-widest uppercase hover:text-primary/80 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            @steviechair
          </Link>
        </div>
      </div>
    </section>
  )
}
