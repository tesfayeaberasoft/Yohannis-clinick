import { useEffect, useState } from 'react';
import { Plus, Phone, Menu, X } from 'lucide-react';
import { CLINIC } from '@/data/clinic';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#appointment' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) => document.querySelector(l.href));
      const offset = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= offset) {
          setActive(links[i].href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-navy-900/5 border-b border-slate-200'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-2.5" aria-label="Yohannes Clinic home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <Plus className="h-5 w-5" strokeWidth={3} />
          </span>
          <span
            className={`font-display text-lg font-extrabold tracking-tight transition-colors ${
              scrolled ? 'text-navy-800' : 'text-white'
            }`}
          >
            Yohannes<span className="text-teal-400"> Clinic</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                active === l.href
                  ? scrolled
                    ? 'bg-navy-50 text-navy-800'
                    : 'bg-white/10 text-white'
                  : scrolled
                    ? 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Emergency CTA */}
        <a
          href={CLINIC.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-emergency-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emergency-600 hover:shadow-md animate-pulse-ring lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Emergency Call
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${scrolled ? 'text-navy-800' : 'text-white'}`}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 border-t border-slate-200' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                active === l.href
                  ? 'bg-navy-50 text-navy-800'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={CLINIC.phoneHref}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emergency-500 px-5 py-3 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4" />
            Emergency: {CLINIC.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
