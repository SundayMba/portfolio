import { motion } from 'framer-motion';
import profilePhoto from '../assets/photo.png';
import SkillTyper from './SkillTyper';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden pt-10 pb-20 sm:pb-24 lg:pt-5 lg:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <motion.div
        className="absolute -right-10 top-10 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl floating-orb"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-10 bottom-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl floating-orb"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-[0.35em] text-slate-400"
            >
              Full Stack / DevOps / Product Builder
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-3xl leading-tight text-white sm:text-4xl md:text-6xl"
            >
              Building modern digital products that feel effortless.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
            >
              I design and engineer end-to-end experiences, from pixel-perfect
              interfaces to resilient cloud infrastructure. Focused on scalable
              systems, delightful UX, and automation that keeps teams shipping.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Tech skills include
              </p>
              <p className="mt-3 text-base text-emerald-200 sm:text-lg">
                <SkillTyper
                  skills={[
                    'React',
                    'TypeScript',
                    'Node.js',
                    'Next.js',
                    'Tailwind CSS',
                    'Framer Motion',
                    'GraphQL',
                    'PostgreSQL',
                    'Redis',
                    'Docker',
                    'Kubernetes',
                    'Terraform',
                    'GitHub Actions',
                    'CI/CD',
                    'AWS',
                    'GCP',
                    'Observability',
                    'OpenTelemetry',
                    'Prometheus',
                    'Grafana',
                    'Argo CD',
                    'Event-Driven Systems',
                    'WebSockets',
                    'REST APIs',
                    'Design Systems',
                    'Testing & QA',
                  ]}
                  speed={85}
                  pauseMs={1400}
                  className="skill-typer"
                />
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:translate-y-[-2px]"
              >
                View Projects
              </a>
              <a
                href="/book"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Book a Call
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative z-0 order-last mt-8 flex items-center justify-center lg:order-none lg:mt-0 lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="ring-animated relative rounded-full p-[6px]">
              <div className="flex h-full w-full items-center justify-center rounded-full p-4">
                <div className="h-full w-full">
                  <img
                    src={profilePhoto}
                    alt="Portrait of Sunday Mba"
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
