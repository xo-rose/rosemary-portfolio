import { useRef, useState } from 'react'
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
    imageFit: 'contain',
    artStyle: 'rovelle',
    websiteUrl: 'https://rovelle-nine.vercel.app/',
  },
]

export default function Projects() {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const goToProject = (index) => {
    const track = trackRef.current
    if (!track) return
    track.scrollTo({ left: index * track.clientWidth, behavior: 'smooth' })
    setActiveIndex(index)
  }

  const updateActiveProject = () => {
    const track = trackRef.current
    if (!track) return
    setActiveIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  return (
    <section
      id="projects"
      className="scroll-mt-8 border-y border-white/[0.08] bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
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
          onScroll={updateActiveProject}
          role="region"
          aria-label="Selected projects"
          aria-roledescription="carousel"
          tabIndex={0}
          className="mt-10 flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              aria-label={`${project.title}, project ${index + 1} of ${projects.length}`}
              aria-roledescription="slide"
              className="group w-full shrink-0 snap-start"
            >
              <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 transition hover:border-royal/40 lg:grid-cols-2">
                <div
                  className={`relative flex aspect-[1.25/1] items-center justify-center overflow-hidden lg:aspect-auto lg:min-h-[430px] ${
                    project.artStyle === 'pikahabit'
                      ? 'bg-[#100f15]'
                      : project.artStyle === 'rovelle'
                        ? 'bg-[#f3ddd8]'
                        : 'bg-gradient-to-br from-slate-800 to-slate-950'
                  }`}
                >
                  {project.artStyle === 'pikahabit' && (
                    <>
                      <div aria-hidden="true" className="absolute h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,211,44,0.24),transparent_68%)] blur-sm" />
                      <div aria-hidden="true" className="absolute h-48 w-48 rounded-full border border-yellow-300/20" />
                      <span aria-hidden="true" className="absolute right-[24%] top-[17%] text-xl text-yellow-300">✦</span>
                      <span aria-hidden="true" className="absolute bottom-[22%] left-[22%] text-lg text-yellow-300/80">✧</span>
                    </>
                  )}
                  {project.artStyle === 'rovelle' && (
                    <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,250,247,0.9),_rgba(243,221,216,0.15)_72%)]" />
                  )}

                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        className={`absolute inset-0 h-full w-full transition duration-500 group-hover:scale-[1.02] ${
                          project.imageFit === 'contain'
                            ? project.artStyle === 'rovelle'
                              ? 'object-contain p-5 sm:p-8'
                              : 'object-contain p-5'
                            : 'object-cover'
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
                        className={`absolute bottom-5 left-6 rounded-full px-3 py-1.5 font-code text-[0.65rem] uppercase tracking-[0.15em] ${
                          project.artStyle === 'rovelle'
                            ? 'bg-white/80 text-[#681d32]'
                            : 'bg-black/25 text-white'
                        }`}
                      >
                        {project.title} · {project.id}
                      </span>
                    </>
                  ) : (
                    <span className="text-5xl font-light tracking-[-0.06em] text-slate-600 transition group-hover:text-royal-soft/70">
                      {project.id}
                    </span>
                  )}
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
                  <p className="font-code text-xs uppercase tracking-[0.14em] text-royal-soft">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium leading-tight text-white sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  {project.technologies.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-white/10 px-3 py-1.5 font-code text-[0.65rem] text-slate-300"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  )}

                  {(project.websiteUrl || project.sourceUrl) && (
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
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
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
          <p className="font-code text-xs uppercase tracking-[0.12em] text-slate-400" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} <span className="text-slate-600">/</span> {String(projects.length).padStart(2, '0')}
            <span className="ml-3 hidden sm:inline">Swipe or use arrows to explore</span>
          </p>

          <div className="flex items-center gap-2" aria-label="Project navigation">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goToProject(index)}
                aria-label={`Show project ${index + 1}: ${project.title}`}
                aria-current={activeIndex === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? 'w-7 bg-royal-soft' : 'w-2 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
            <span className="mx-2 h-5 w-px bg-white/10" aria-hidden="true" />
            <button
              type="button"
              onClick={() => goToProject(Math.max(activeIndex - 1, 0))}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-lg text-white transition hover:border-royal-soft/50 hover:text-royal-soft disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => goToProject(Math.min(activeIndex + 1, projects.length - 1))}
              disabled={activeIndex === projects.length - 1}
              aria-label="Next project"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-lg text-white transition hover:border-royal-soft/50 hover:text-royal-soft disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
