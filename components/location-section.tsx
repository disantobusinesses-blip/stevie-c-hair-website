export function LocationSection() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">
            Find Us
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-foreground tracking-tight">
            Visit the Salon
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact & Hours */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            {/* Address */}
            <div className="mb-10">
              <h3 className="font-serif text-xl text-foreground mb-3">Address</h3>
              <a
                href="https://maps.google.com/?q=85+Hoffmans+Rd+Niddrie+VIC+3042+Australia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground leading-relaxed hover:text-primary transition-colors duration-300"
              >
                85 Hoffmans Rd<br />
                Niddrie, VIC 3042<br />
                Australia
              </a>
            </div>

            {/* Phone */}
            <div className="mb-10">
              <h3 className="font-serif text-xl text-foreground mb-3">Contact</h3>
              <a
                href="tel:0393313777"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg"
              >
                03 9331 3777
              </a>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-serif text-xl text-foreground mb-4">Opening Hours</h3>
              <div className="flex flex-col gap-2.5">
                {[
                  { day: "Sunday", hours: "Closed" },
                  { day: "Monday", hours: "Closed" },
                  { day: "Tuesday", hours: "9:00 am — 8:00 pm" },
                  { day: "Wednesday", hours: "9:00 am — 6:00 pm" },
                  { day: "Thursday", hours: "9:00 am — 8:00 pm" },
                  { day: "Friday", hours: "9:00 am — 6:00 pm" },
                  { day: "Saturday", hours: "8:30 am — 1:30 pm" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between items-center text-sm">
                    <span className="text-foreground tracking-wider uppercase text-xs w-28">
                      {day}
                    </span>
                    <span className={`${hours === "Closed" ? "text-muted-foreground/50" : "text-muted-foreground"}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:w-3/5">
            <div className="w-full h-80 lg:h-full lg:min-h-[420px] border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2!2d144.9301!3d-37.743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65b55bc8b3b1f%3A0x4e0d3f0b1f3b9f0e!2s85%20Hoffmans%20Rd%2C%20Niddrie%20VIC%203042%2C%20Australia!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Stevie C Hair salon location — 85 Hoffmans Rd, Niddrie VIC 3042"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
