"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "https://gift-cards.phorest.com/salons/steviechair", label: "Gift Vouchers", external: true },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleBookNow = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
    if (href === "#team") {
      e.preventDefault()
      setIsOpen(false)
      const el = document.getElementById("team")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-foreground/95 backdrop-blur-sm border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — mix-blend-mode so white bg disappears on dark nav */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/steviechair-zYN8wtcOQx76qu3RgVtf6Xme2vjxvU.jpg"
              alt="Stevie C Hair"
              width={140}
              height={50}
              className="h-12 w-auto mix-blend-luminosity brightness-125"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm tracking-widest uppercase text-white/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#team"
              onClick={handleBookNow}
              className="text-sm tracking-widest uppercase bg-primary text-primary-foreground px-6 py-2.5 hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-foreground border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="block text-sm tracking-widest uppercase text-white/70 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#team"
              onClick={handleBookNow}
              className="block text-sm tracking-widest uppercase bg-primary text-primary-foreground px-6 py-3 text-center hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
