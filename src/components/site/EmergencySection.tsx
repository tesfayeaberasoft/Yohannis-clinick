import { Phone, Clock, Activity } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { CLINIC, IMAGES } from '@/data/clinic';

export default function EmergencySection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-32" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.emergency}
          alt="Professional emergency healthcare environment"
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-800/80" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            {/* 24/7 visual indicator */}
            <div className="reveal inline-flex items-center gap-3 rounded-2xl border border-emergency-500/30 bg-emergency-500/10 px-5 py-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emergency-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emergency-500" />
              </span>
              <span className="font-display text-sm font-bold uppercase tracking-wider text-emergency-400">
                24 Hours · 7 Days a Week
              </span>
            </div>

            <h2 className="reveal mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-5xl">
              Healthcare When You Need It Most.
            </h2>

            <p className="reveal mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
              Your health cannot wait. Yohannes Clinic is available 24 hours a
              day, 7 days a week, to support your healthcare needs.
            </p>

            <div className="reveal mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CLINIC.phoneHref}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-emergency-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emergency-500/20 transition-all hover:bg-emergency-600 hover:shadow-xl hover:shadow-emergency-500/30"
              >
                <Phone className="h-5 w-5" />
                Call Emergency Support
              </a>
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                Request Appointment
              </a>
            </div>
          </div>

          {/* Right: info cards */}
          <div className="reveal grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <Clock className="h-8 w-8 text-teal-400" />
              <h3 className="mt-4 font-display text-base font-bold text-white">
                Always Open
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                No appointments needed for emergencies. Walk in any time, day
                or night.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <Phone className="h-8 w-8 text-teal-400" />
              <h3 className="mt-4 font-display text-base font-bold text-white">
                Call Anytime
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Speak with our team directly. We are ready to help.
              </p>
              <a
                href={CLINIC.phoneHref}
                className="mt-3 inline-block text-sm font-bold text-teal-400 transition-colors hover:text-teal-300"
              >
                {CLINIC.phone}
              </a>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:col-span-2">
              <Activity className="h-8 w-8 text-teal-400" />
              <h3 className="mt-4 font-display text-base font-bold text-white">
                Urgent Medical Attention
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                If you or someone near you is experiencing a medical emergency,
                call us immediately. Quick action saves lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
