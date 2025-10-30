import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      {/* Gradient grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_76%,transparent_77%)] bg-[length:3rem_3rem] opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 shadow-sm"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white"><Rocket className="h-3 w-3" /></span>
              Empowering learners to excel
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Harshdeep Classes
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400">Modern coaching for ambitious students</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-slate-300/90 max-w-xl"
            >
              Personalized classes, result-driven approach, and a vibrant community. Prepare for boards, competitive exams, and beyond.
            </motion.p>

            <motion.div
              id="portal"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#student-portal"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-3 text-white font-semibold shadow ring-1 ring-black/5 hover:opacity-95"
              >
                Student Portal <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#teacher-portal"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-white font-semibold hover:bg-white/10"
              >
                Teacher Portal
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 text-sm text-slate-400"
            >
              Our portals are live. Log in to access schedules, materials, and performance analytics.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            {/* Accent ring card */}
            <div className="relative mx-auto w-full aspect-[4/3] rounded-3xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-sky-400/40">
              <div className="h-full w-full rounded-[calc(theme(borderRadius.3xl)-1px)] bg-slate-900/60 backdrop-blur-md ring-1 ring-white/10 flex items-center justify-center overflow-hidden">
                {/* Or replace with a Spline scene later if needed */}
                <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-2xl" />
                <div className="absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-2xl" />

                <div className="relative z-10 p-6 text-center">
                  <div className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">Launch your learning</h3>
                  <p className="mt-2 text-slate-300">Smart dashboards, progress tracking, and on-demand resources — all in one place.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
