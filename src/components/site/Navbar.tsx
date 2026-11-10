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
      const offset = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= offset) {
          setActive(links[i]!.href);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? 'glass shadow-elevated'
            : 'border border-transparent bg-transparent'
        }`}
      >
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Yohannes Clinic home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-gold transition-transform duration-500 group-hover:rotate-90">
            <Plus className="h-5 w-5" strokeWidth={3} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">
            Yohannes<span className="text-primary"> Clinic</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === l.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Emergency CTA */}
        <a
          href={CLINIC.phoneHref}
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:brightness-110 animate-pulse-ring lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Emergency Call
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-foreground/5 text-foreground transition-colors hover:border-primary/50 hover:text-primary lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl transition-all duration-500 lg:hidden ${
          open ? 'glass max-h-[28rem] opacity-100 shadow-elevated' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                active === l.href
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-foreground/5 hover:text-foreground'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={CLINIC.phoneHref} className="btn-primary mt-2 py-3.5">
            <Phone className="h-4 w-4" />
            Emergency: {CLINIC.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
