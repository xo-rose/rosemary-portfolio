export default function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
      <div className="pointer-events-none absolute -left-48 top-12 h-96 w-96 rounded-full bg-royal/10 blur-3xl" />
      <div className="relative" data-reveal>
        <p className="mb-6 flex items-center gap-3 font-code text-xs font-medium uppercase tracking-[0.18em] text-royal-soft sm:text-sm">
          <span className="h-px w-8 bg-royal" /> Web Developer
        </p>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Thoughtful websites, <span className="text-slate-500">built with care.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
          I’m Rosemary Ndubuisi, a web developer available for projects. I build clear, engaging websites for businesses, organizations, and individuals—with care for the people who use them.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a href="#projects" className="glass-shine rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-royal/90 hover:shadow-lg hover:shadow-royal/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <a href="#about" className="glass-shine rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/5 hover:text-white">
            A little about me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-sm lg:max-w-none" data-reveal style={{ '--reveal-delay': '120ms' }}>
        <div className="hero-card-frame absolute -inset-5 rounded-[2rem] border border-royal/15" />
        <div className="hero-identity-card relative flex aspect-[4/4.5] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-[#111a2d] p-7 sm:p-9">
          <div className="hero-orbit hero-orbit-outer absolute -right-20 -top-16 h-64 w-64 rounded-full border border-royal/25" />
          <div className="hero-orbit hero-orbit-inner absolute -right-8 -top-4 h-40 w-40 rounded-full border border-royal/25" />
          <div className="hero-glow absolute bottom-16 left-10 h-40 w-40 rounded-full bg-royal/20 blur-3xl" />
          <p className="relative font-code text-xs uppercase tracking-[0.12em] text-slate-400">Portfolio · 2026</p>
          <div className="relative">
            <p className="flex items-baseline gap-2 text-7xl font-semibold tracking-[-0.08em] text-white/95 sm:text-8xl">
              Rose<span className="hero-rose text-[0.68em]" role="img" aria-label="rose">🌹</span>
            </p>
            <div className="mt-5 h-px w-full bg-white/15" />
            <div className="mt-4 flex items-center justify-between font-code text-xs uppercase tracking-[0.12em] text-slate-400">
              <span>Design with purpose</span>
              <span className="text-royal-soft">01 / 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



