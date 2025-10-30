import { BookOpen, Users, Award, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Courses',
    desc: 'Board + competitive exam-oriented curriculum with weekly assessments and doubt sessions.',
  },
  {
    icon: Users,
    title: 'Expert Mentors',
    desc: 'Small batch sizes with personal attention and tailored study plans for every learner.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    desc: 'Consistent top scores and selections across boards and entrance exams.',
  },
  {
    icon: Headphones,
    title: 'Anytime Support',
    desc: 'Dedicated support channel for queries, feedback, and academic guidance.',
  },
];

export default function Features() {
  return (
    <section id="courses" className="relative py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What we offer</h2>
          <p className="mt-2 text-slate-300/90">From foundational concepts to advanced problem-solving — we cover it all.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="group rounded-2xl p-[1px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(56,189,248,0.35),rgba(99,102,241,0.35))]"
            >
              <div className="h-full rounded-2xl bg-slate-900/60 backdrop-blur-md p-6 ring-1 ring-white/10 transition-all group-hover:ring-white/20 group-hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.35)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow shadow-indigo-500/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div id="why-us" className="mt-16 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/40 to-sky-400/40"
          >
            <div className="rounded-2xl bg-slate-900/60 backdrop-blur-md p-8 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold">Smart learning with live portals</h3>
              <p className="mt-2 text-slate-300">Students and teachers collaborate in real-time with schedules, assignments, and analytics.</p>
              <div className="mt-4 flex gap-3">
                <a href="#student-portal" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-white font-medium ring-1 ring-black/5 hover:opacity-95">Student Portal</a>
                <a href="#teacher-portal" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white font-medium hover:bg-white/10">Teacher Portal</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-[1px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,0.35),rgba(168,85,247,0.35),rgba(56,189,248,0.35),rgba(99,102,241,0.35))]"
          >
            <div className="rounded-2xl bg-slate-900/60 backdrop-blur-md p-8 ring-1 ring-white/10">
              <h3 className="text-xl font-semibold">Structured pathways for success</h3>
              <ul className="mt-3 space-y-2 text-slate-300 list-disc list-inside">
                <li>Concepts → Practice → Assess → Improve</li>
                <li>Weekly goals and check-ins</li>
                <li>Performance dashboards for parents</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
