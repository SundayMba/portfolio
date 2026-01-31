import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

function BookCall() {
  return (
    <div className="section">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="grid gap-12">
          <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Book a Call</p>
              <h1 className="mt-4 font-display text-4xl text-white md:text-5xl">Let&apos;s design your next release.</h1>
              <p className="mt-5 text-lg text-slate-300">
                Share a quick overview of your project, timeline, and goals. I&apos;ll reply with next steps and a
                proposed schedule.
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Availability</p>
                <p className="mt-2 text-lg text-white">Mon - Thu - 10am to 4pm</p>
                <p className="mt-2 text-sm text-slate-300">Remote sessions - Pacific Time</p>
              </div>
            </div>

            <motion.form
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="grid gap-5">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-[#0b0f14] px-4 py-3 text-sm text-white focus:border-emerald-300/60 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="mt-3 w-full rounded-xl border border-white/10 bg-[#0b0f14] px-4 py-3 text-sm text-white focus:border-emerald-300/60 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Project Summary</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the product, scope, and timeline."
                    className="mt-3 w-full rounded-xl border border-white/10 bg-[#0b0f14] px-4 py-3 text-sm text-white focus:border-emerald-300/60 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow"
                >
                  Send Request
                </button>
              </div>
            </motion.form>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="font-display text-2xl text-white">What to expect</h2>
            <div className="mt-6 grid gap-4 text-sm text-slate-300">
              <p>- 30-minute discovery call to align on your goals and constraints.</p>
              <p>- A proposal outlining scope, milestones, and timelines.</p>
              <p>- Dedicated build sprints with weekly shipping cadence.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default BookCall
