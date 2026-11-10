import { Clock, Heart, Layers, MapPin, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { IMAGES } from '@/data/clinic';

const reasons = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Round-the-clock medical care, every day of the year.',
  },
  {
    icon: Heart,
    title: 'Patient-Centered Approach',
    description: 'Your comfort and well-being guide everything we do.',
  },
  {
    icon: Layers,
    title: 'Comprehensive Services',
    description: 'From emergency care to pharmacy — all under one roof.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Easily accessible in Hawassa for the whole community.',
  },
  {
    icon: ShieldCheck,
    title: 'Commitment to Quality & Safety',
    description: 'Rigorous standards in every aspect of patient care.',
  },
];

export default function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-slate-50 py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: content */}
          <div>
            <p className="reveal text-sm font-bold uppercase tracking-[0.15em] text-teal-500">
              Why Choose Us
            </p>
            <h2 className="reveal mt-4 font-display text-4xl font-extrabold tracking-tight text-navy-800 text-balance sm:text-5xl">
              Healthcare you can trust, every step of the way
            </h2>
            <p className="reveal mt-5 text-lg text-slate-500">
              At Yohannes Clinic, we combine professional expertise with
              genuine compassion to deliver care that puts you first.
            </p>

            <div className="reveal mt-10 space-y-3">
              {reasons.map((r, i) => (
                <div
                  key={r.title}
                  data-delay={i * 60}
                  className="flex items-start gap-4 rounded-xl border border-transparent bg-white/60 p-4 transition-all hover:border-slate-200 hover:bg-white hover:shadow-md hover:shadow-navy-900/5"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-600 text-teal-300">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-navy-800">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {r.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image collage */}
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10">
              <img
                src={IMAGES.whyChooseUs}
                alt="Healthcare team in a welcoming clinical environment"
                className="aspect-[4/3] w-full object-cover lg:aspect-[3/4]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-4 top-1/3 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-navy-900/10 lg:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success-500/10 text-success-500">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-800">
                    Quality & Safety
                  </p>
                  <p className="text-xs text-slate-500">At the core of our care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
