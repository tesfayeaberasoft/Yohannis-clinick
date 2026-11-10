import { Phone, Clock, Stethoscope, Heart, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINIC, IMAGES } from '@/data/clinic';

const highlights = [
  { icon: Clock, value: '24/7', label: 'Always open' },
  { icon: Stethoscope, value: '5+', label: 'Core services' },
  { icon: Heart, value: '100%', label: 'Patient-centered' },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-background">
      {/* Background image + overlays */}
      <div className="absolute inset-0 -z-10">
        <img
          src={IMAGES.hero}
          alt="Professional healthcare provider in a modern clinical environment"
          className="h-full w-full scale-105 object-cover object-center grayscale-[35%] animate-fade-in"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ backgroundImage: 'var(--gradient-hero)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-background/60" />
        <div className="absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pt-32 pb-36 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-8">
          {/* Badge */}
          <div className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-foreground opacity-0 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Open Now — 24/7 Healthcare Available
          </div>

          {/* Headline */}
          <h1 className="mt-8 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-foreground text-balance opacity-0 animate-fade-up sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
            Your Health,
            <br />
            Our Priority.
            <span className="text-gradient-gold mt-3 block text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              24/7 Quality Healthcare in Hawassa
            </span>
          </h1>

          {/* Supporting text */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-up [animation-delay:120ms]">
            Compassionate, professional, and comprehensive medical services
            around the clock — delivered by experienced health professionals.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 opacity-0 animate-fade-up [animation-delay:220ms] sm:flex-row">
            <a href="#appointment" className="btn-primary group">
              <Calendar className="h-5 w-5" />
              Book an Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href={CLINIC.phoneHref} className="btn-outline">
              <Phone className="h-5 w-5" />
              Emergency Call
            </a>
          </div>
        </div>

        {/* Floating glass card */}
        <div className="hidden lg:col-span-4 lg:block">
          <div className="glass ml-auto max-w-xs rounded-3xl p-6 shadow-elevated opacity-0 animate-fade-up [animation-delay:400ms]">
            <div className="animate-float">
              <div className="flex items-center gap-3">
                <span className="icon-chip">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-base font-semibold text-foreground">Emergency line</p>
                  <p className="text-xs text-muted-foreground">Answered day &amp; night</p>
                </div>
              </div>
              <a
                href={CLINIC.phoneHref}
                className="mt-5 block rounded-2xl border border-border bg-background/60 px-4 py-3 font-display text-lg font-semibold tracking-wide text-primary transition-colors hover:border-primary/50"
              >
                {CLINIC.phone}
              </a>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Walk in anytime in {CLINIC.city}, {CLINIC.region}.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute inset-x-0 bottom-0 border-t border-border bg-background/40 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-border px-5 lg:px-8">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col items-start gap-1 px-3 py-5 first:pl-0 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
              <h.icon className="hidden h-5 w-5 text-primary sm:block" />
              <span className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{h.value}</span>
              <span className="text-xs text-muted-foreground sm:text-sm">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
