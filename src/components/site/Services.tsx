import {
  Siren,
  Stethoscope,
  FlaskConical,
  Pill,
  Baby,
  ArrowUpRight,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { IMAGES } from '@/data/clinic';

const services = [
  {
    num: '01',
    icon: Siren,
    title: 'Emergency Care (24/7)',
    description:
      'Immediate response and critical care support for patients requiring urgent medical attention.',
    image: IMAGES.emergency,
    accent: 'bg-emergency-500',
    accentSoft: 'bg-emergency-50 text-emergency-600',
    featured: true,
  },
  {
    num: '02',
    icon: Stethoscope,
    title: 'General Consultation',
    description:
      'Outpatient department checkups and medical consultations with experienced physicians.',
    image: IMAGES.consultation,
    accent: 'bg-blue-600',
    accentSoft: 'bg-blue-50 text-blue-700',
  },
  {
    num: '03',
    icon: FlaskConical,
    title: 'Laboratory Services',
    description:
      'Diagnostic laboratory services, blood tests, and medical screenings.',
    image: IMAGES.laboratory,
    accent: 'bg-teal-500',
    accentSoft: 'bg-teal-50 text-teal-600',
  },
  {
    num: '04',
    icon: Pill,
    title: 'Pharmacy Services',
    description:
      'Access to essential medications and prescription fulfillment.',
    image: IMAGES.pharmacy,
    accent: 'bg-blue-500',
    accentSoft: 'bg-blue-50 text-blue-700',
  },
  {
    num: '05',
    icon: Baby,
    title: 'Maternal & Child Health',
    description:
      'Maternal healthcare, prenatal care, routine checkups, and vaccination services.',
    image: IMAGES.maternal,
    accent: 'bg-teal-600',
    accentSoft: 'bg-teal-50 text-teal-600',
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="reveal text-sm font-bold uppercase tracking-[0.15em] text-teal-500">
            Our Services
          </p>
          <h2 className="reveal mt-4 font-display text-4xl font-extrabold tracking-tight text-navy-800 text-balance sm:text-5xl">
            Comprehensive Healthcare Services
          </h2>
          <p className="reveal mt-5 text-lg text-slate-500">
            Quality medical services designed to support your health and
            well-being.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.num}
              data-delay={(i % 3) * 80}
              className={`reveal group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/8 ${
                s.featured ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent" />
                <span className="absolute top-4 left-4 rounded-lg bg-white/90 px-2.5 py-1 font-display text-xs font-bold text-navy-800 backdrop-blur-sm">
                  {s.num}
                </span>
                <span
                  className={`absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl ${s.accent} text-white shadow-lg`}
                >
                  <s.icon className="h-5 w-5" />
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold text-navy-800">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                  {s.description}
                </p>
                <a
                  href="#appointment"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 transition-colors hover:text-teal-600"
                >
                  Request this service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <div className="reveal flex flex-col items-center justify-center rounded-2xl bg-blue-600 p-8 text-center">
            <h3 className="font-display text-xl font-bold text-white">
              Not sure which service you need?
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Our team can help guide you to the right care.
            </p>
            <a
              href="#appointment"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-blue-600 transition-all hover:bg-slate-100"
            >
              Book an Appointment
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
