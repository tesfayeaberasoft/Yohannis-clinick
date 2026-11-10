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
    <section id="about" className="bg-slate-50 py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div className="relative reveal">
            <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10">
              <img
                src={IMAGES.about}
                alt="Healthcare professionals working together in a clinical setting"
                className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-4 hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-navy-900/10 sm:block lg:-right-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Heart className="h-6 w-6 fill-current" />
                </span>
                <div>
                  <p className="font-display text-2xl font-extrabold text-navy-800">24/7</p>
                  <p className="text-sm text-slate-500">Always available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="reveal text-sm font-bold uppercase tracking-[0.15em] text-teal-500">
              About Us
            </p>
            <h2 className="reveal mt-4 font-display text-4xl font-extrabold tracking-tight text-navy-800 text-balance sm:text-5xl">
              Compassionate Care. Trusted Healthcare.
            </h2>
            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-slate-600">
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
            <div className="reveal mt-10 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md hover:shadow-navy-900/5"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <v.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-navy-800">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {v.description}
                    </p>
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
