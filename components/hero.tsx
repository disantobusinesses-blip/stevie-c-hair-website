"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_655198683_18567310630039369_6889621235139493946_n-nj7pdxP78tf6zi2HpD9Lhgf4YTamaz.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_640434843_18561761860039369_2764646247663709707_n-F87wxNVghPjdY8hpFPF0hq6mAKKyGp.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_658821368_18570918937039369_9220421943294825877_n-9Dthnalc02xFVEyL8vjQmsOwR4Exo2.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_657166491_18571172851039369_6130656112375835746_n-LaMTo1ZPbeaw1fqVv9BL4ZNRY52Wgs.jpg",
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background Images */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Stevie C Hair Salon"
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wide mb-6">
          Stevie C Hair
        </h1>
        <p className="text-white/90 text-lg md:text-xl tracking-widest uppercase mb-4">
          Where Artistry Meets Elegance
        </p>
        <p className="text-white/70 text-sm tracking-wider max-w-md mb-10">
          An accredited Gold Salon, part of The Australian Hairdressing Council
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://www.phorest.com/salon/steviechair"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-10 py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors duration-300"
          >
            Book Your Appointment
          </Link>
          <Link
            href="/services"
            className="border border-white text-white px-10 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-foreground transition-colors duration-300"
          >
            View Services
          </Link>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentImage ? "bg-primary" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
