export default function DuoForceWebsite() {
  const services = [
    {
      title: "Moving Help",
      description: "Carry furniture, boxes, appliances, and more.",
      icon: "📦",
    },
    {
      title: "Junk Removal",
      description: "We haul unwanted items to the dumpster fast and easy.",
      icon: "🗑️",
    },
    {
      title: "Cleanups",
      description: "Trash, clutter, and small messy jobs — we handle it.",
      icon: "🧹",
    },
    {
      title: "Heavy Lifting",
      description: "Delivered, moved, or need muscle? We’ve got it.",
      icon: "💪",
    },
  ];

  const reasons = [
    "Young and motivated",
    "Fast and reliable",
    "Affordable and fair pricing",
    "Strong work ethic",
    "We treat every job like it’s our own",
  ];

  const notes = [
    "Helping two teenagers build their first business.",
    "Every job supports our hustle, future, and dreams.",
    "We’re learning, working hard, and giving 100% on every job.",
    "Your support helps us grow into young entrepreneurs.",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(57,255,20,0.18),transparent_30%),radial-gradient(circle_at_left,rgba(57,255,20,0.12),transparent_25%)] pointer-events-none" />

      <section className="relative border-b border-lime-500/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-2xl bg-lime-500/15 border border-lime-400/30 flex items-center justify-center shadow-[0_0_30px_rgba(132,255,0,0.25)]">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black tracking-widest uppercase">
                <span className="text-zinc-100">DUO</span>
                <span className="text-lime-400 ml-2">FORCE</span>
              </div>
              <div className="text-xs text-zinc-400 tracking-[0.3em] uppercase">Two Guys. One Team. We Get It Done.</div>
            </div>
          </div>
          <a
            href="tel:4797151258"
            className="hidden md:inline-flex rounded-2xl bg-lime-400 text-black font-bold px-5 py-3 shadow-[0_0_25px_rgba(132,255,0,0.35)] hover:scale-105 transition"
          >
            Call Now
          </a>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-lime-300 text-sm mb-6">
              <span>Local & Trusted Teen Business</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] uppercase">
              Need a hand?
              <span className="block text-lime-400 mt-2">DuoForce is ready.</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-300 max-w-xl leading-relaxed">
              Fast, strong, reliable help for moving, junk removal, cleanups, and heavy lifting. Small job or big job, we treat every task like it matters.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:4797151258"
                className="rounded-2xl bg-lime-400 text-black font-extrabold px-6 py-4 text-center shadow-[0_0_30px_rgba(132,255,0,0.35)] hover:scale-105 transition"
              >
                Text or Call: 479-715-1258
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-zinc-700 bg-zinc-900/70 px-6 py-4 text-center font-semibold hover:border-lime-400/50 hover:text-lime-300 transition"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                ["$20", "Starting price"],
                ["Fast", "Response time"],
                ["7 Days", "Availability"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-zinc-800 bg-zinc-950/80 p-5 shadow-xl">
                  <div className="text-3xl font-black text-lime-400">{value}</div>
                  <div className="text-sm text-zinc-400 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-lime-500/10 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] border border-lime-400/20 bg-zinc-950 p-8 shadow-[0_0_50px_rgba(132,255,0,0.15)]">
              <div className="rounded-[1.5rem] border border-zinc-800 bg-black p-8">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-black tracking-widest uppercase">
                    <span className="text-zinc-100">DUO</span>
                    <span className="text-lime-400 block md:inline md:ml-3">FORCE</span>
                  </div>
                  <div className="mt-3 text-zinc-400 uppercase tracking-[0.35em] text-xs">Fast Hands • Hard Work • Fair Prices</div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    "Moving Help",
                    "Junk Removal",
                    "Cleanups",
                    "Heavy Lifting",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-4 text-center font-semibold text-zinc-200">
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-lime-400/20 bg-lime-400/10 p-5 text-center">
                  <div className="text-lime-300 text-sm uppercase tracking-[0.25em]">Prices</div>
                  <div className="mt-2 text-4xl font-black text-white">$20 – $150+</div>
                  <div className="mt-2 text-zinc-300 text-sm">Depending on the size and job</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-lime-400 uppercase tracking-[0.3em] text-sm">Services We Offer</div>
            <h2 className="text-3xl md:text-5xl font-black mt-2">What we can help with</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[2rem] border border-zinc-800 bg-zinc-950/80 p-6 hover:border-lime-400/40 hover:-translate-y-1 transition-all shadow-xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-3xl">
                {service.icon}
              </div>
              <h3 className="mt-5 text-2xl font-black text-white">{service.title}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-[2rem] border border-lime-400/20 bg-zinc-950/90 p-8 shadow-xl">
            <div className="text-lime-400 uppercase tracking-[0.3em] text-sm">Pricing</div>
            <h3 className="text-3xl font-black mt-2">Affordable and fair</h3>
            <div className="mt-6 rounded-3xl bg-black border border-zinc-800 p-8 text-center">
              <div className="text-zinc-400 uppercase tracking-[0.25em] text-sm">Prices Start At</div>
              <div className="text-5xl md:text-6xl font-black text-lime-400 mt-3">$20 – $150+</div>
              <p className="mt-4 text-zinc-300">Small jobs or big projects — we adapt to your needs.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/90 p-8 shadow-xl">
            <div className="text-lime-400 uppercase tracking-[0.3em] text-sm">Why Choose Us?</div>
            <h3 className="text-3xl font-black mt-2">Fast, respectful, dependable</h3>
            <div className="mt-6 grid gap-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3 rounded-2xl bg-black border border-zinc-800 px-4 py-4">
                  <div className="h-8 w-8 rounded-full bg-lime-400 text-black font-black flex items-center justify-center">✓</div>
                  <div className="text-zinc-200 font-medium">{reason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="rounded-[2rem] border border-lime-400/20 bg-gradient-to-br from-zinc-950 to-black p-8 shadow-xl">
            <div className="text-lime-400 uppercase tracking-[0.3em] text-sm">Note</div>
            <h3 className="text-3xl font-black mt-2">Helping two teenagers build their first business</h3>
            <div className="mt-6 grid gap-4">
              {notes.map((note) => (
                <div key={note} className="rounded-2xl border border-zinc-800 bg-black/70 px-5 py-4 text-zinc-200 leading-relaxed">
                  {note}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-lime-400 uppercase tracking-[0.3em] text-sm">Available Anytime</div>
              <h3 className="text-3xl font-black mt-2">Ready when you need us</h3>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                Weekdays and weekends. Quick replies. Respectful service. Let us handle the heavy work so you don’t have to.
              </p>
            </div>

            <div className="mt-8 rounded-3xl border border-lime-400/20 bg-lime-400/10 p-6">
              <div className="text-sm uppercase tracking-[0.25em] text-lime-300">Contact</div>
              <a href="tel:4797151258" className="block mt-3 text-3xl md:text-4xl font-black text-white hover:text-lime-300 transition">
                479-715-1258
              </a>
              <div className="mt-3 text-zinc-300">Text or call us today.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16 pt-6">
        <div className="max-w-7xl mx-auto rounded-[2rem] border border-lime-400/20 bg-lime-400/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(132,255,0,0.12)]">
          <div>
            <div className="text-lime-300 uppercase tracking-[0.3em] text-sm">DuoForce</div>
            <h3 className="text-3xl md:text-4xl font-black mt-2">Let us handle the work so you don’t have to.</h3>
          </div>
          <a
            href="tel:4797151258"
            className="rounded-2xl bg-lime-400 text-black font-extrabold px-8 py-4 text-lg shadow-[0_0_30px_rgba(132,255,0,0.35)] hover:scale-105 transition"
          >
            Call 479-715-1258
          </a>
        </div>
      </section>
    </div>
  );
}
