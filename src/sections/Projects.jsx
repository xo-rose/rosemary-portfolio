import { useEffect, useRef, useState } from 'react'
import agroPlugMarket from '../assets/agroplug-market.jpg'
import materDeiCathedral from '../assets/mater-dei-cathedral.jpg'
import pikahabitMascot from '../assets/pikahabit-mascot.gif'
import rovelleVelvetRose from '../assets/rovelle-velvet-rose.png'

const projects = [
  {
    id: '01',
    category: 'Farm-to-buyer marketplace',
    title: 'AgroPlug',
    description:
      'AgroPlug connects farmers in Abia with nearby buyers. My work includes the storefront, produce search and filters, farmer and buyer sign-up, and the farmer dashboard UI.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: agroPlugMarket,
    imageAlt: 'A farmer and buyer exchanging produce at a local market',
    websiteUrl: 'https://agroplug.vercel.app/',
  },
  {
    id: '02',
    category: 'Community website',
    title: 'Mater Dei Cathedral Parish Website',
    description:
      'I built a multi-page website for Mater Dei Cathedral Parish to help visitors find Mass times, sacrament details, parish life, events, and announcements. I also configured Pages CMS for Sunday updates and event listings.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'Pages CMS'],
    image: materDeiCathedral,
    imageAlt: 'Exterior of Mater Dei Cathedral Parish',
    sourceUrl: 'https://github.com/xo-rose/MATER-DEI',
  },
  {
    id: '03',
    category: 'Gentle reminder app',
    title: 'PikaHabit',
    description:
      'A friendly reminder app for the little things that are easy to forget, like drinking water or studying. Add a reminder, choose when it repeats, and get a gentle browser nudge.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Browser Notifications'],
    image: pikahabitMascot,
    imageAlt: 'Animated Pikachu mascot from PikaHabit',
    imageFit: 'contain',
    artStyle: 'pikahabit',
    websiteUrl: 'https://pikahabit-rho.vercel.app/',
  },
  {
    id: '04',
    category: 'Deodorant storefront demo',
    title: 'Rovelle',
    description:
      'A polished demo store for a personal deodorant brand, with a searchable collection of spray and roll-on scents, size options, a shopping bag, and a sample customer dashboard.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: rovelleVelvetRose,
    imageAlt: 'Rovelle Velvet Rose spray deodorant with roses',
    artStyle: 'rovelle',
    websiteUrl: 'https://rovelle-nine.vercel.app/',
  },
]

const projectsPerSlide = 3
const slides = Array.from(
  { length: Math.ceil(projects.length / projectsPerSlide) },
  (_, index) => projects.slice(index * projectsPerSlide, (index + 1) * projectsPerSlide),
)

export default function Projects() {
  const trackRef = useRef(null)
  const scrollTimer = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  const goToSlide = (index) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' })
  }

  const updateActiveSlide = () => {
    window.clearTimeout(scrollTimer.current)
    scrollTimer.current = window.setTimeout(() => {
      const track = trackRef.current
      if (!track || !track.clientWidth) return
      setActiveSlide(Math.round(track.scrollLeft / track.clientWidth))
    }, 140)
  }

  useEffect(() => () => window.clearTimeout(scrollTimer.current), [])

  return (
    <section
      id="projects"
      className="scroll-mt-8 border-y border-white/[0.08] bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end" data-reveal>
          <div>
            <p className="font-code text-xs font-medium uppercase tracking-[0.18em] text-royal-soft">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Projects
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Websites and digital tools built to make useful information easier to find.
          </p>
        </div>

        <div
          ref={trackRef}
          onScroll={updateActiveSlide}
          role="region"
          aria-label="Selected projects"
          aria-roledescription="carousel"
          tabIndex={0}
          className="mt-10 flex snap-x snap-mandatory [scroll-snap-stop:always] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide) => (
            <div
              key={slide[0].id}
              aria-label={`Projects ${slide[0].id} to ${slide.at(-1).id}`}
              aria-roledescription="slide"
              className="w-full shrink-0 snap-start"
            >
              <div className={`grid gap-4 ${slide.length === 1 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {slide.map((project, projectIndex) => (
                  <article
                    key={project.id}
                    data-reveal
                    style={{ '--reveal-delay': `${projectIndex * 80}ms` }}
                    className="project-card group min-w-0 rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-royal/50 sm:p-6"
                  >
                    <div
                      className={`project-art relative mb-6 flex aspect-[1.4/1] items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] ${
                        project.artStyle === 'pikahabit'
                          ? 'bg-[#100f15]'
                          : project.artStyle === 'rovelle'
                            ? 'bg-[#f3ddd8]'
                            : 'bg-gradient-to-br from-slate-800 to-slate-950'
                      }`}
                    >
                      {project.artStyle === 'pikahabit' && (
                        <>
                          <div aria-hidden="true" className="absolute h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,211,44,0.24),transparent_68%)] blur-sm" />
                          <div aria-hidden="true" className="absolute h-36 w-36 rounded-full border border-yellow-300/20" />
                          <span aria-hidden="true" className="absolute right-[24%] top-[17%] text-xl text-yellow-300">✦</span>
                          <span aria-hidden="true" className="absolute bottom-[22%] left-[22%] text-lg text-yellow-300/80">✧</span>
                        </>
                      )}
                      {project.image && (
                        <>
                          {project.artStyle === 'rovelle' && (
                            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,250,247,0.8),_rgba(243,221,216,0)_72%)]" />
                          )}
                          <img
                            src={project.image}
                            alt={project.imageAlt}
                            className={`absolute inset-0 h-full w-full transition duration-500 group-hover:scale-[1.03] ${
                              project.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'
                            } ${project.artStyle === 'pikahabit' ? 'drop-shadow-[0_0_24px_rgba(255,211,44,0.35)]' : ''}`}
                          />
                          {project.artStyle !== 'rovelle' && (
                            <div
                              aria-hidden="true"
                              className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${
                                project.artStyle === 'pikahabit' ? 'from-[#100f15]/35' : 'from-[#080b12]/75'
                              }`}
                            />
                          )}
                          <span
                            className={`absolute bottom-3 left-4 rounded-full px-2.5 py-1 font-code text-[0.65rem] uppercase tracking-[0.15em] ${
                              project.artStyle === 'rovelle'
                                ? 'bg-white/80 text-[#681d32]'
                                : 'text-white'
                            }`}
                          >
                            {project.title} · {project.id}
                          </span>
                        </>
                      )}
                    </div>

                    <p className="font-code text-xs uppercase tracking-[0.14em] text-royal-soft">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1 font-code text-[0.65rem] text-slate-300"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>

                    {(project.websiteUrl || project.sourceUrl) && (
                      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                        {project.websiteUrl && (
                          <a
                            href={project.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-royal-soft"
                          >
                            View live site <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        {project.sourceUrl && (
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-royal-soft"
                          >
                            View source <span aria-hidden="true">↗</span>
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                ))}
                {slide.length < projectsPerSlide && (
                  <aside
                    data-reveal
                    style={{ '--reveal-delay': `${slide.length * 100}ms` }}
                    className="contact-card relative flex min-h-[290px] flex-col justify-between overflow-hidden rounded-2xl border border-royal/25 bg-gradient-to-br from-royal/15 via-slate-900/80 to-slate-900/60 p-6 sm:p-8"
                  >
                    <div aria-hidden="true" className="hero-orbit hero-orbit-outer absolute -right-16 -top-20 h-56 w-56 rounded-full border border-royal/20" />
                    <div className="relative">
                      <p className="font-code text-xs uppercase tracking-[0.16em] text-royal-soft">Have an idea?</p>
                      <h3 className="mt-4 max-w-xs text-2xl font-semibold leading-tight text-white sm:text-3xl">
                        Let’s make something people love.
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-slate-400">
                        I’m always happy to hear about a thoughtful new project.
                      </p>
                    </div>
                    <a
                      href="#contact"
                      className="glass-shine relative z-10 mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-sm font-medium text-white transition hover:border-royal-soft hover:text-royal-soft"
                    >
                      Let’s talk <span aria-hidden="true">↗</span>
                    </a>
                  </aside>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <p className="font-code text-xs uppercase tracking-[0.12em] text-slate-400" aria-live="polite">
            Projects {slides[activeSlide][0].id}–{slides[activeSlide].at(-1).id} of {projects.length}
          </p>

          {slides.length > 1 && (
            <div className="flex items-center gap-2" aria-label="Project slides">
              {slides.map((slide, index) => (
                <button
                  key={slide[0].id}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Show projects ${slide[0].id} to ${slide.at(-1).id}`}
                  aria-current={activeSlide === index ? 'true' : undefined}
                  className={`h-2 rounded-full transition-all ${
                    activeSlide === index ? 'w-7 bg-royal-soft' : 'w-2 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
              <span className="mx-2 h-5 w-px bg-white/10" aria-hidden="true" />
              <button
                type="button"
                onClick={() => goToSlide(Math.max(activeSlide - 1, 0))}
                disabled={activeSlide === 0}
                aria-label="Previous projects"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-lg text-white transition hover:border-royal-soft/50 hover:text-royal-soft disabled:cursor-not-allowed disabled:opacity-35"
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => goToSlide(Math.min(activeSlide + 1, slides.length - 1))}
                disabled={activeSlide === slides.length - 1}
                aria-label="Next projects"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-lg text-white transition hover:border-royal-soft/50 hover:text-royal-soft disabled:cursor-not-allowed disabled:opacity-35"
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
