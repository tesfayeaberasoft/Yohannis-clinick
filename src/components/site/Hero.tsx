import { Plus, Phone, Clock, Stethoscope, Heart, Calendar } from 'lucide-react';
import { CLINIC, IMAGES } from '@/data/clinic';

const highlights = [
  { icon: Clock, label: 'Open 24 Hours' },
  { icon: Stethoscope, label: 'Professional Healthcare' },
  { icon: Heart, label: 'Patient-Centered Care' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy-900">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Professional healthcare provider in a modern clinical environment"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/30" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-16 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-success-400" />
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-400 opacity-75" />
            </span>
            Open Now — 24/7 Healthcare Available
          </div>

          {/* Headline */}
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance animate-fade-up sm:text-5xl lg:text-6xl xl:text-7xl">
            Your Health, Our Priority
            <span className="mt-2 block bg-gradient-to-r from-teal-300 to-teal-400 bg-clip-text text-transparent">
              24/7 Quality Healthcare in Hawassa
            </span>
          </h1>

          {/* Supporting text */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200 animate-fade-up [animation-delay:100ms]">
            Providing compassionate, professional, and comprehensive medical
            services around the clock with experienced health professionals.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-up [animation-delay:200ms]">
            <a
              href="#appointment"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-600/40"
            >
              <Calendar className="h-5 w-5" />
              Book an Appointment
            </a>
            <a
              href={CLINIC.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>

          {/* Highlights */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-8 animate-fade-up [animation-delay:300ms]">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-teal-300 backdrop-blur-sm">
                  <h.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-white/90">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 sm:flex">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="h-12 w-px bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
