import { Clock, Stethoscope, Heart, MapPin } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const indicators = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Medical services available every hour, every day of the week.',
  },
  {
    icon: Stethoscope,
    title: 'Professional Care',
    description: 'Experienced doctors, nurses, and lab professionals at your service.',
  },
  {
    icon: Heart,
    title: 'Patient-Centered',
    description: 'Compassionate healthcare focused on your well-being and comfort.',
  },
  {
    icon: MapPin,
    title: 'Central Hawassa',
    description: 'An easily accessible clinic serving the whole Hawassa community.',
  },
];

export default function TrustIndicators() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-background px-5 py-24 lg:px-8 lg:py-28" ref={ref}>
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {indicators.map((item, i) => (
          <div
            key={item.title}
            data-delay={i * 90}
            className="reveal card-surface card-interactive group p-7"
          >
            <span className="icon-chip group-hover:bg-primary group-hover:text-primary-foreground">
              <item.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-display text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
