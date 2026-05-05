"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import Image from "next/image"

const benefits = [
  {
    title: "Continuous Education",
    description: "Ongoing training and development opportunities with industry leaders and brands.",
  },
  {
    title: "Supportive Team",
    description: "Work alongside passionate stylists in a collaborative and encouraging environment.",
  },
  {
    title: "Creative Freedom",
    description: "Express your skills and develop your unique style while building your career.",
  },
  {
    title: "Gold Accreditation",
    description: "Be part of an Australian Hairdressing Council accredited Gold Salon.",
  },
]

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main>
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-secondary overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Join Our Team</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Careers at Stevie C Hair
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We love welcoming passionate and creative stylists who want to grow with us. 
            If you&apos;re looking for a supportive team environment where you can express 
            your skills and build your career, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_640434843_18561761860039369_2764646247663709707_n-F87wxNVghPjdY8hpFPF0hq6mAKKyGp.jpg"
                alt="Our salon environment"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-primary text-sm tracking-widest uppercase mb-4">Why Stevie C Hair</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light mb-6">
                A Place to Grow
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                At Stevie C Hair, we believe in nurturing talent and fostering creativity. 
                Our salon is more than a workplace — it&apos;s a community where stylists 
                support each other, learn from each other, and celebrate each other&apos;s successes.
              </p>
              <div className="space-y-6">
                {benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h3 className="text-foreground font-medium mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Get Started</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light mb-4">
              Apply Now
            </h2>
            <p className="text-muted-foreground">
              Complete the form below and attach your resume. We&apos;ll be in touch as soon as a position becomes available.
            </p>
          </div>

          {submitted ? (
            <div className="bg-card p-12 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">Thank You!</h3>
              <p className="text-muted-foreground">
                We&apos;ve received your application and will be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card p-8 lg:p-12 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-foreground mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm text-foreground mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Select your experience</option>
                  <option value="student">Currently Studying</option>
                  <option value="0-1">Less than 1 year</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-foreground mb-2">
                  Tell Us About Yourself
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your passion for hairdressing, your specialties, and why you'd like to join our team..."
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm text-foreground mb-2">
                  Upload Resume (PDF)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:bg-primary file:text-primary-foreground file:cursor-pointer"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
