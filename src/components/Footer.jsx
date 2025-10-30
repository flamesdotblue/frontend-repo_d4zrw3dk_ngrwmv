import { Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold text-slate-900">Harshdeep Classes</h4>
            <p className="mt-2 text-sm text-slate-600">Modern coaching for ambitious students. Learn with clarity, practise with purpose, succeed with confidence.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
              <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@harshdeepclasses.com</li>
              <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Learning Ave, Your City</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#courses" className="hover:text-slate-900">Courses</a></li>
              <li><a href="#why-us" className="hover:text-slate-900">Why Us</a></li>
              <li><a href="#portal" className="hover:text-slate-900">Student/Teacher Portal</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-slate-900">Follow</h5>
            <div className="mt-3 flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Instagram" className="hover:text-slate-900"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-slate-900"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-slate-900"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Harshdeep Classes. All rights reserved.</p>
          <p>Built with passion for education.</p>
        </div>
      </div>
    </footer>
  );
}
