export default function Navbar() {
  return (
    <header className="border-b border-white/[0.08]">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8"
      >
        <a href="#top" className="text-base font-semibold tracking-wide text-white sm:text-lg" aria-label="Rosemary Ndubuisi, home">
          Rose<span className="text-royal-soft"> ND.</span>
        </a>
        <div className="flex items-center gap-4 text-sm text-slate-300 sm:gap-8">
          <a href="#projects" className="hidden transition hover:text-white sm:inline">Projects</a>
          <a href="#about" className="hidden transition hover:text-white sm:inline">About</a>
          <a href="#contact" className="rounded-full bg-royal px-4 py-2 font-medium text-white transition hover:bg-royal/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}

