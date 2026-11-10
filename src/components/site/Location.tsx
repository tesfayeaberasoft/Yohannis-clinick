import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { CLINIC } from '@/data/clinic';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Location() {
  const ref = useReveal<HTMLDivElement>();

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Yohannes Clinic, Hawassa, Sidama Region, Ethiopia',
  )}`;

  const contact = [
    { icon: MapPin, label: 'Address', value: `${CLINIC.city}, ${CLINIC.region}, ${CLINIC.country}` },
    { icon: Phone, label: 'Phone', value: CLINIC.phone, href: CLINIC.phoneHref },
    { icon: Clock, label: 'Hours', value: 'Open 24 Hours, 7 Days' },
  ];

  return (
    <section id="location" className="bg-surface py-28 lg:py-36" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="reveal eyebrow">Visit Us</p>
            <h2 className="reveal section-title mt-5">Visit Yohannes Clinic</h2>
          </div>
          <p className="reveal section-lead max-w-md">
            Conveniently located in Hawassa, ready to serve you 24 hours a day.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Info + hours */}
          <div className="space-y-6">
            <div className="reveal card-surface p-7">
              <h3 className="font-display text-lg font-semibold">Contact Information</h3>
              <div className="mt-6 space-y-5">
                {contact.map((c) => (
                  <div key={c.label} className="flex items-start gap-4">
                    <span className="icon-chip h-10 w-10">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a href={c.href} className="text-sm font-medium text-foreground transition-colors hover:text-primary">
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-foreground">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-7 w-full py-3.5">
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            <div className="reveal card-surface p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold">Working Hours</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-bold text-success">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  Open Now
                </span>
              </div>
              <div className="mt-5">
                {days.map((day) => (
                  <div key={day} className="flex items-center justify-between border-b border-border py-2.5 last:border-0">
                    <span className="text-sm text-muted-foreground">{day}</span>
                    <span className="text-sm font-semibold text-foreground">24 Hours</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-center">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Open 24 Hours — 7 Days a Week
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal lg:col-span-2">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
              <iframe
                title="Map showing the location of Hawassa, Sidama Region, Ethiopia"
                src="https://www.google.com/maps?q=Hawassa,+Sidama+Region,+Ethiopia&output=embed"
                className="map-dark h-full w-full"
                style={{ border: 0, minHeight: '420px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Open in Google Maps
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
