import { Clock, Stethoscope, Heart, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const indicators = [
  {
    icon: Clock,
    title: '24/7 Healthcare Availability',
    description: 'Medical services available every hour, every day of the week.',
  },
  {
    icon: Stethoscope,
    title: 'Professional Medical Services',
    description: 'Experienced doctors, nurses, and lab professionals at your service.',
  },
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Compassionate healthcare focused on your well-being and comfort.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location in Hawassa',
    description: 'Easily accessible clinic serving the Hawassa community.',
  },
];

export default function TrustIndicators() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative z-10 -mt-16 bg-white px-5 pb-20 lg:px-8" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-navy-900/5 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map((item, i) => (
            <div
              key={item.title}
              data-delay={(i % 4) * 80}
              className="reveal flex flex-col items-start gap-4 bg-white p-8 transition-colors hover:bg-slate-50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                <item.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-navy-800">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
