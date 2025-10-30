import { BookOpenCheck, Users, Award, Headphones } from 'lucide-react';

const features = [
  {
    icon: BookOpenCheck,
    title: 'Comprehensive Courses',
    desc: 'Board + competitive exam-oriented curriculum with weekly assessments and doubt sessions.'
  },
  {
    icon: Users,
    title: 'Expert Mentors',
    desc: 'Small batch sizes with personal attention and tailored study plans for every learner.'
  },
  {
    icon: Award,
    title: 'Proven Results',
    desc: 'Consistent top scores and selections across boards and entrance exams.'
  },
  {
    icon: Headphones,
    title: 'Anytime Support',
    desc: 'Dedicated support channel for queries, feedback, and academic guidance.'
  }
];

export default function Features() {
  return (
    <section id="courses" className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">What we offer</h2>
          <p className="mt-2 text-slate-600">From foundational concepts to advanced problem-solving — we cover it all.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div id="why-us" className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Smart learning with live portals</h3>
            <p className="mt-2 text-slate-600">Students and teachers collaborate in real-time with schedules, assignments, and analytics.</p>
            <div className="mt-4 flex gap-3">
              <a href="#student-portal" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:opacity-95">Student Portal</a>
              <a href="#teacher-portal" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-800 font-medium hover:bg-slate-50">Teacher Portal</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Structured pathways for success</h3>
            <ul className="mt-3 space-y-2 text-slate-600 list-disc list-inside">
              <li>Concepts → Practice → Assess → Improve</li>
              <li>Weekly goals and check-ins</li>
              <li>Performance dashboards for parents</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
