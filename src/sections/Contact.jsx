export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-8 mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-24">
      <div className="flex flex-col justify-between gap-8 rounded-3xl border border-royal/25 bg-gradient-to-br from-royal/10 to-royal/5 p-8 sm:flex-row sm:items-center sm:p-12">
        <div>
          <p className="font-code text-xs font-medium uppercase tracking-[0.18em] text-royal-soft">Get in touch</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Have a good idea?</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">I’d love to hear about it. Send me an email or find me on LinkedIn and GitHub.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a href="mailto:ndrosee20@gmail.com" className="w-fit rounded-full bg-royal px-5 py-3 text-sm font-semibold text-white transition hover:bg-royal/90">Email me <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/rose-nd-6662a529b/" target="_blank" rel="noreferrer" className="w-fit rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-royal-soft hover:text-royal-soft">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/xo-rose" target="_blank" rel="noreferrer" className="w-fit rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-royal-soft hover:text-royal-soft">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}


