import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-slate-950">
      <div aria-hidden className="pointer-events-none absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold">Harshdeep Classes</h4>
            <p className="mt-2 text-sm text-slate-300">Modern coaching for ambitious students. Learn with clarity, practise with purpose, succeed with confidence.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-slate-400" /> +91 98765 43210</li>
              <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-slate-400" /> hello@harshdeepclasses.com</li>
              <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-slate-400" /> 123 Learning Ave, Your City</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#why-us" className="hover:text-white">Why Us</a></li>
              <li><a href="#portal" className="hover:text-white">Student/Teacher Portal</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Follow</h5>
            <div className="mt-3 flex items-center gap-3 text-slate-300">
              <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Harshdeep Classes. All rights reserved.</p>
          <p>Crafted with care for education.</p>
        </div>
      </div>
    </footer>
  );
}
