import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Courses', href: '#courses' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled
        ? 'bg-slate-900/70 backdrop-blur-md border-b border-white/10 shadow-[inset_0_-1px_0_0_rgba(255,255,255,0.06)]'
        : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/20">
              <BookOpen className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">Harshdeep Classes</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-indigo-400 after:to-fuchsia-400 hover:after:w-full after:transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#portal"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              <User className="h-4 w-4" /> Portal
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow ring-1 ring-black/5 hover:opacity-95"
            >
              Enquire Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-slate-200 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#portal" className="rounded-md px-2 py-2 text-slate-200 hover:bg-white/10" onClick={() => setOpen(false)}>
                Portal
              </a>
              <a href="#contact" className="rounded-md px-2 py-2 text-slate-200 hover:bg-white/10" onClick={() => setOpen(false)}>
                Enquire Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
