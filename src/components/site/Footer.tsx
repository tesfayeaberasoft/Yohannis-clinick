import { Plus, Phone, MapPin, Clock, AlertTriangle, ArrowUp } from 'lucide-react';
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
    <footer className="border-t border-border bg-background text-muted-foreground">
      {/* Emergency disclaimer bar */}
      <div className="border-b border-border bg-primary/5">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-4 lg:px-8">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-primary" />
          <p className="text-sm">
            <span className="font-bold text-primary">Medical Emergency?</span> Call us immediately at{' '}
            <a
              href={CLINIC.phoneHref}
              className="font-bold text-foreground underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary"
            >
              {CLINIC.phone}
            </a>
            . This website is not for emergencies.
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Plus className="h-5 w-5" strokeWidth={3} />
              </span>
              <span className="font-display text-lg font-semibold text-foreground">
                Yohannes<span className="text-primary"> Clinic</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Committed to accessible, compassionate, and professional healthcare in Hawassa.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Services</h3>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <a href={CLINIC.phoneHref} className="text-sm transition-colors hover:text-primary">
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm">
                  {CLINIC.city}, {CLINIC.region}, {CLINIC.country}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm">Open 24 Hours, 7 Days a Week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm">&copy; {new Date().getFullYear()} Yohannes Clinic. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
