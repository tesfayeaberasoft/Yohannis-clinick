import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { CLINIC, IMAGES } from '@/data/clinic';

const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export default function Location() {
  const ref = useReveal<HTMLDivElement>();

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Yohannes Clinic, Hawassa, Sidama Region, Ethiopia',
  )}`;

  return (
    <section id="location" className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="reveal text-sm font-bold uppercase tracking-[0.15em] text-teal-500">
            Visit Us
          </p>
          <h2 className="reveal mt-4 font-display text-4xl font-extrabold tracking-tight text-navy-800 text-balance sm:text-5xl">
            Visit Yohannes Clinic
          </h2>
          <p className="reveal mt-5 text-lg text-slate-500">
            Conveniently located in Hawassa, ready to serve you 24 hours a day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Info + hours */}
          <div className="space-y-6">
            {/* Contact info */}
            <div className="reveal rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <h3 className="font-display text-lg font-bold text-navy-800">
                Contact Information
              </h3>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-500" />
                  <div>
                    <p className="text-sm font-semibold text-navy-800">Address</p>
                    <p className="text-sm text-slate-500">
                      {CLINIC.city}, {CLINIC.region}, {CLINIC.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-500" />
                  <div>
                    <p className="text-sm font-semibold text-navy-800">Phone</p>
                    <a
                      href={CLINIC.phoneHref}
                      className="text-sm text-slate-500 transition-colors hover:text-teal-600"
                    >
                      {CLINIC.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-500" />
                  <div>
                    <p className="text-sm font-semibold text-navy-800">Hours</p>
                    <p className="text-sm text-slate-500">Open 24 Hours, 7 Days</p>
                  </div>
                </div>
              </div>
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-blue-500"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Working hours */}
            <div className="reveal rounded-2xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-navy-800">
                  Working Hours
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success-500/10 px-3 py-1 text-xs font-bold text-success-600">
                  <span className="h-2 w-2 rounded-full bg-success-500" />
                  Open Now
                </span>
              </div>
              <div className="mt-5 space-y-2">
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-slate-200 py-2 last:border-0"
                  >
                    <span className="text-sm font-medium text-slate-600">
                      {day}
                    </span>
                    <span className="text-sm font-semibold text-success-600">
                      Open 24 Hours
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-blue-600 px-4 py-3 text-center">
                <p className="font-display text-sm font-bold uppercase tracking-wider text-teal-300">
                  Open 24 Hours — 7 Days a Week
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="reveal lg:col-span-2">
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Map showing the location of Hawassa, Sidama Region, Ethiopia"
                src="https://www.google.com/maps?q=Hawassa,+Sidama+Region,+Ethiopia&output=embed"
                className="h-full w-full"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-bold text-navy-800 shadow-lg transition-colors hover:bg-slate-50"
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
