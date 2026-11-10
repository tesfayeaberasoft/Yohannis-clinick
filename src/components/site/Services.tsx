import { Siren, Stethoscope, FlaskConical, Pill, Baby, ArrowUpRight, Calendar } from 'lucide-react';
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
    badge: 'Around the clock',
  },
  {
    num: '02',
    icon: Stethoscope,
    title: 'General Consultation',
    description:
      'Outpatient department checkups and medical consultations with experienced physicians.',
    image: IMAGES.consultation,
  },
  {
    num: '03',
    icon: FlaskConical,
    title: 'Laboratory Services',
    description: 'Diagnostic laboratory services, blood tests, and medical screenings.',
    image: IMAGES.laboratory,
  },
  {
    num: '04',
    icon: Pill,
    title: 'Pharmacy Services',
    description: 'Access to essential medications and prescription fulfillment.',
    image: IMAGES.pharmacy,
  },
  {
    num: '05',
    icon: Baby,
    title: 'Maternal & Child Health',
    description:
      'Maternal healthcare, prenatal care, routine checkups, and vaccination services.',
    image: IMAGES.maternal,
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="bg-background py-28 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="reveal eyebrow">Our Services</p>
            <h2 className="reveal section-title mt-5">Comprehensive healthcare services</h2>
          </div>
          <p className="reveal section-lead max-w-md">
            Quality medical services designed to support your health and
            well-being — all under one roof.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.num}
              data-delay={(i % 3) * 90}
              className="reveal card-surface card-interactive group relative flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 font-display text-xs font-semibold text-foreground">
                  {s.num}
                </span>
                {s.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    {s.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="relative -mt-8 flex flex-1 flex-col p-7 pt-0">
                <span className="icon-chip bg-card group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <a
                  href="#appointment"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                >
                  Request this service
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}

          {/* CTA card */}
          <div
            className="reveal relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 text-primary-foreground shadow-gold"
            style={{ backgroundImage: 'var(--gradient-gold)' }}
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-primary-foreground/10" />
            <div className="relative">
              <h3 className="font-display text-2xl font-semibold leading-tight text-primary-foreground">
                Not sure which service you need?
              </h3>
              <p className="mt-3 text-sm font-medium text-primary-foreground/75">
                Our team can help guide you to the right care.
              </p>
            </div>
            <a
              href="#appointment"
              className="relative mt-10 inline-flex items-center justify-center gap-2 self-start rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <Calendar className="h-4 w-4" />
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
