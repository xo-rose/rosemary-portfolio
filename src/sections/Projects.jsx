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
    websiteUrl: 'https://rovelle-nine.vercel.app/',
  },
]

export default function Projects() {
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

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-1 hover:border-royal/50 sm:p-6"
            >
              <div className={`relative mb-6 flex aspect-[1.6/1] items-center justify-center overflow-hidden rounded-xl border border-white/[0.06] ${project.artStyle === 'pikahabit' ? 'bg-[#100f15]' : 'bg-gradient-to-br from-slate-800 to-slate-950'}`}>
                {project.artStyle === 'pikahabit' && (
                  <>
                    <div aria-hidden="true" className="absolute h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,211,44,0.24),transparent_68%)] blur-sm" />
                    <div aria-hidden="true" className="absolute h-36 w-36 rounded-full border border-yellow-300/20" />
                    <span aria-hidden="true" className="absolute right-[24%] top-[17%] text-xl text-yellow-300">✦</span>
                    <span aria-hidden="true" className="absolute bottom-[22%] left-[22%] text-lg text-yellow-300/80">✧</span>
                  </>
                )}
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className={`absolute inset-0 h-full w-full transition duration-500 group-hover:scale-[1.03] ${project.imageFit === 'contain' ? 'object-contain p-3' : 'object-cover'} ${project.artStyle === 'pikahabit' ? 'drop-shadow-[0_0_24px_rgba(255,211,44,0.35)]' : ''}`}
                    />
                    <div
                      aria-hidden="true"
                      className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${project.artStyle === 'pikahabit' ? 'from-[#100f15]/35' : 'from-[#080b12]/75'}`}
                    />
                    <span className="absolute bottom-3 left-4 font-code text-[0.65rem] uppercase tracking-[0.15em] text-white/90">
                      {project.title} · {project.id}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-light tracking-[-0.06em] text-slate-600 transition group-hover:text-royal-soft/70">
                    {project.id}
                  </span>
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

              {project.technologies.length > 0 && (
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
              )}

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
        </div>
      </div>
    </section>
  )
}

