import { Plus, Phone, MapPin, Clock, AlertTriangle } from 'lucide-react';
import { CLINIC } from '@/data/clinic';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#appointment' },
];

const services = [
  'Emergency Care',
  'General Consultation',
  'Laboratory Services',
  'Pharmacy Services',
  'Maternal & Child Health',
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300">
      {/* Emergency disclaimer bar */}
      <div className="border-b border-white/10 bg-emergency-500/10">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-3 lg:px-8">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-emergency-400" />
          <p className="text-sm text-slate-300">
            <span className="font-bold text-emergency-400">Medical Emergency?</span>{' '}
            Call us immediately at{' '}
            <a
              href={CLINIC.phoneHref}
              className="font-bold text-white underline underline-offset-2 hover:text-emergency-300"
            >
              {CLINIC.phone}
            </a>
            . This website is not for emergencies.
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-400 text-blue-950">
                <Plus className="h-5 w-5" strokeWidth={3} />
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                Yohannes<span className="text-teal-400"> Clinic</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Committed to accessible, compassionate, and professional
              healthcare in Hawassa.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                <a
                  href={CLINIC.phoneHref}
                  className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                >
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                <span className="text-sm text-slate-400">
                  {CLINIC.city}, {CLINIC.region}, {CLINIC.country}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-400" />
                <span className="text-sm text-slate-400">
                  Open 24 Hours, 7 Days a Week
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Yohannes Clinic. All rights
              reserved.
            </p>
            <p className="text-xs text-slate-600">
              Serving the Hawassa community with dedicated healthcare.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
