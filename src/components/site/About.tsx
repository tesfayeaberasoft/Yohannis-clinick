import { Shield, Sparkles, Award, Users, Heart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { IMAGES } from '@/data/clinic';

const values = [
  { icon: Users, title: 'Patient-First Care', description: 'Every decision starts with what is best for you.' },
  { icon: Shield, title: 'Integrity', description: 'Honest, ethical, and transparent healthcare.' },
  { icon: Award, title: 'Excellence', description: 'A commitment to the highest medical standards.' },
  { icon: Sparkles, title: 'Safety', description: 'Your health and safety are non-negotiable.' },
];

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative bg-surface py-28 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image side */}
          <div className="reveal relative">
            <div className="absolute -inset-4 -z-0 rounded-[2.25rem] bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-elevated">
              <img
                src={IMAGES.about}
                alt="Healthcare professionals working together in a clinical setting"
                className="aspect-[4/5] w-full object-cover grayscale-[25%] sm:aspect-[4/3] lg:aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="glass absolute -bottom-8 right-4 rounded-2xl p-5 shadow-elevated sm:right-8 lg:-right-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Heart className="h-6 w-6 fill-current" />
                </span>
                <div>
                  <p className="font-display text-3xl font-semibold text-foreground">24/7</p>
                  <p className="text-sm text-muted-foreground">Always available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="reveal eyebrow">About Us</p>
            <h2 className="reveal section-title mt-5">
              Compassionate care. <span className="text-gradient-gold">Trusted</span> healthcare.
            </h2>
            <div className="reveal mt-7 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Yohannes Clinic was founded with a mission to deliver accessible
                and trusted healthcare services to the community of Hawassa.
              </p>
              <p>
                With a commitment to professional healthcare, the clinic is
                supported by doctors, nurses, and laboratory professionals
                dedicated to patient well-being.
              </p>
            </div>

            {/* Core values */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  data-delay={i * 80}
                  className="reveal card-surface card-interactive group flex items-start gap-4 p-5"
                >
                  <span className="icon-chip h-10 w-10 group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold">{v.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
