import Image from "next/image"

const team = [
  {
    name: "Stevie",
    title: "Founder & Creative Director",
    bio: "With over a decade of experience and a passion for colour artistry, Stevie brings a refined eye for detail and a commitment to continuous education. Specialising in balayage and lived-in colour, Stevie creates bespoke looks that enhance natural beauty.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_640434843_18561761860039369_2764646247663709707_n-F87wxNVghPjdY8hpFPF0hq6mAKKyGp.jpg",
    // BOOKING URL: Replace with actual booking URL for Stevie
    bookingUrl: "https://www.phorest.com/salon/steviechair",
  },
  {
    name: "Tara",
    title: "Senior Stylist",
    bio: "Tara brings creativity and precision to every client. Known for her warm approach and technical expertise, she excels at transforming hair with seamless colours and modern cuts that suit each individual&apos;s style and personality.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SnapInsta.to_658821368_18570918937039369_9220421943294825877_n-9Dthnalc02xFVEyL8vjQmsOwR4Exo2.jpg",
    // BOOKING URL: Replace with actual booking URL for Tara
    bookingUrl: "https://booking.clientdiary.com/?bookingsUrl=Tara",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">The Artists</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-light mb-6">
            Meet the Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our talented stylists combine technical expertise with creative vision to deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="bg-card overflow-hidden group">
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Info */}
              <div className="p-8">
                <h3 className="font-serif text-3xl text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm tracking-wider uppercase mb-4">{member.title}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a
                  href={member.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors duration-300"
                >
                  Book with {member.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
