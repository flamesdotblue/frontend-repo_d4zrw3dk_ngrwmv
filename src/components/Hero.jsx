import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-white to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white"><Rocket className="h-3 w-3" /></span>
              Empowering learners to excel
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Harshdeep Classes
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Modern coaching for ambitious students</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">
              Personalized classes, result-driven approach, and a vibrant community. Join us to prepare for boards, competitive exams, and beyond.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3" id="portal">
              <a
                href="#student-portal"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-3 text-white font-semibold shadow hover:opacity-95"
              >
                Student Portal <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#teacher-portal"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-800 font-semibold hover:bg-slate-50"
              >
                Teacher Portal
              </a>
            </div>
            <p className="mt-3 text-sm text-slate-500">Our portals are live. Log in to access schedules, materials, and performance analytics.</p>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600/10 via-indigo-500/10 to-fuchsia-500/10 p-3 ring-1 ring-inset ring-slate-200">
              <div className="h-full w-full rounded-xl bg-white shadow-sm flex items-center justify-center">
                <div className="p-6 text-center">
                  <div className="mx-auto h-16 w-16 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 text-white flex items-center justify-center shadow">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">Launch your learning</h3>
                  <p className="mt-2 text-slate-600">Smart dashboards, progress tracking, and on-demand resources — all in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
