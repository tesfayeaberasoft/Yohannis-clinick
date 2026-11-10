import { Clock, Heart, Layers, MapPin, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { IMAGES } from '@/data/clinic';

const reasons = [
  { icon: Clock, title: '24/7 Availability', description: 'Round-the-clock medical care, every day of the year.' },
  { icon: Heart, title: 'Patient-Centered Approach', description: 'Your comfort and well-being guide everything we do.' },
  { icon: Layers, title: 'Comprehensive Services', description: 'From emergency care to pharmacy — all under one roof.' },
  { icon: MapPin, title: 'Convenient Location', description: 'Easily accessible in Hawassa for the whole community.' },
  { icon: ShieldCheck, title: 'Quality & Safety', description: 'Rigorous standards in every aspect of patient care.' },
];

export default function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-surface py-28 lg:py-36" ref={ref}>
      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal eyebrow">Why Choose Us</p>
          <h2 className="reveal section-title mt-5">
            Healthcare you can trust, every step of the way
          </h2>
          <p className="reveal section-lead mx-auto mt-6 max-w-xl">
            At Yohannes Clinic, we combine professional expertise with genuine
            compassion to deliver care that puts you first.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* Image feature card */}
          <div className="reveal group relative min-h-[18rem] overflow-hidden rounded-2xl border border-border sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <img
              src={IMAGES.whyChooseUs}
              alt="Healthcare team in a welcoming clinical environment"
              className="absolute inset-0 h-full w-full object-cover grayscale-[35%] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="font-display text-5xl font-semibold text-primary">24/7</p>
              <p className="mt-2 max-w-[16rem] text-sm text-foreground/85">
                A dedicated team ready for you — day, night, weekends and holidays.
              </p>
            </div>
          </div>

          {reasons.map((r, i) => (
            <div
              key={r.title}
              data-delay={(i % 3) * 80}
              className={`reveal card-surface card-interactive group p-7 ${
                i === reasons.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="icon-chip group-hover:bg-primary group-hover:text-primary-foreground">
                  <r.icon className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-medium text-muted-foreground/50">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
