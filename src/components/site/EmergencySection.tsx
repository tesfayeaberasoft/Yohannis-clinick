import { Phone, Clock, Activity } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { CLINIC, IMAGES } from '@/data/clinic';

const cards = [
  { icon: Clock, title: 'Always Open', text: 'No appointment needed for emergencies. Walk in any time, day or night.' },
  { icon: Phone, title: 'Call Anytime', text: 'Speak with our team directly. We are ready to help.', phone: true },
  {
    icon: Activity,
    title: 'Urgent Medical Attention',
    text: 'If you or someone near you is experiencing a medical emergency, call us immediately. Quick action saves lives.',
    wide: true,
  },
];

export default function EmergencySection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative isolate overflow-hidden bg-background py-28 lg:py-36" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.emergency}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-15 grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="reveal glass inline-flex items-center gap-3 rounded-full px-5 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-destructive" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                24 Hours · 7 Days a Week
              </span>
            </div>

            <h2 className="reveal section-title mt-7">
              Healthcare when you <span className="text-gradient-gold">need it most.</span>
            </h2>

            <p className="reveal section-lead mt-6 max-w-lg">
              Your health cannot wait. Yohannes Clinic is available 24 hours a
              day, 7 days a week, to support your healthcare needs.
            </p>

            <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={CLINIC.phoneHref} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call Emergency Support
              </a>
              <a href="#appointment" className="btn-outline">
                Request Appointment
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((c, i) => (
              <div
                key={c.title}
                data-delay={i * 100}
                className={`reveal glass card-interactive group rounded-2xl p-7 ${c.wide ? 'sm:col-span-2' : ''}`}
              >
                <span className="icon-chip group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                {c.phone && (
                  <a
                    href={CLINIC.phoneHref}
                    className="mt-4 inline-block font-display text-base font-semibold text-primary transition-colors hover:text-primary-glow"
                  >
                    {CLINIC.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
