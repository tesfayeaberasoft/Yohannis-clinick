import { useState } from 'react';
import {
  Calendar,
  Phone,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { CLINIC } from '@/data/clinic';

const serviceOptions = [
  'Emergency Care',
  'General Consultation',
  'Laboratory Services',
  'Pharmacy Services',
  'Maternal & Child Health',
  'Other',
];

interface FormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const initialData: FormData = {
  fullName: '',
  phone: '',
  service: '',
  preferredDate: '',
  preferredTime: '',
  message: '',
};

export default function AppointmentForm() {
  const ref = useReveal<HTMLDivElement>();
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!data.fullName.trim()) e.fullName = 'Please enter your full name.';
    if (!data.phone.trim()) {
      e.phone = 'Please enter your phone number.';
    } else if (!/^[+]?[\d\s()-]{7,}$/.test(data.phone.trim())) {
      e.phone = 'Please enter a valid phone number.';
    }
    if (!data.service) e.service = 'Please select a service.';
    if (!data.preferredDate) e.preferredDate = 'Please choose a date.';
    if (!data.preferredTime) e.preferredTime = 'Please choose a time.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    field: keyof FormData,
    value: string,
  ) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section
      id="appointment"
      className="bg-slate-50 py-24 lg:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <p className="reveal text-sm font-bold uppercase tracking-[0.15em] text-teal-500">
              Contact & Appointments
            </p>
            <h2 className="reveal mt-4 font-display text-4xl font-extrabold tracking-tight text-navy-800 text-balance sm:text-5xl">
              How Can We Help You?
            </h2>
            <p className="reveal mt-5 text-lg text-slate-500">
              Contact Yohannes Clinic or request an appointment. Our team will
              assist you with your inquiry.
            </p>

            {/* Direct contact */}
            <div className="reveal mt-8 space-y-4">
              <a
                href={CLINIC.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-navy-300 hover:shadow-md hover:shadow-navy-900/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-800">Call us</p>
                  <p className="text-sm text-slate-500">{CLINIC.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-800">
                    Request a callback
                  </p>
                  <p className="text-sm text-slate-500">
                    Fill out the form and we will get back to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <p className="reveal mt-8 text-xs leading-relaxed text-slate-400">
              This form is for appointment requests and general inquiries only.
              Please do not include sensitive medical information. For
              emergencies, call {CLINIC.phone} directly.
            </p>
          </div>

          {/* Right: form */}
          <div className="reveal lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success-500/10 text-success-500">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold text-navy-800">
                  Request Received
                </h3>
                <p className="mt-3 max-w-md text-slate-500">
                  Thank you for reaching out to Yohannes Clinic. We have noted
                  your request and our team will contact you shortly to confirm
                  your appointment. This is a demo form — no information has been
                  transmitted. Please call us directly for urgent matters.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CLINIC.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-500"
                  >
                    <Phone className="h-4 w-4" />
                    Call {CLINIC.phone}
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setData(initialData);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="text-emergency-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={data.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className={`form-input mt-2 ${
                        errors.fullName ? 'border-emergency-500 focus:ring-emergency-500/15' : ''
                      }`}
                      aria-invalid={!!errors.fullName}
                    />
                    {errors.fullName && (
                      <p className="form-error flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="text-emergency-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={data.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+251 ..."
                      className={`form-input mt-2 ${
                        errors.phone ? 'border-emergency-500 focus:ring-emergency-500/15' : ''
                      }`}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="form-error flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="form-label">
                      Service Needed <span className="text-emergency-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={data.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={`form-input mt-2 appearance-none ${
                        errors.service ? 'border-emergency-500 focus:ring-emergency-500/15' : ''
                      }`}
                      aria-invalid={!!errors.service}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="form-error flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="preferredDate" className="form-label">
                      Preferred Date <span className="text-emergency-500">*</span>
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      min={today}
                      value={data.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      className={`form-input mt-2 ${
                        errors.preferredDate ? 'border-emergency-500 focus:ring-emergency-500/15' : ''
                      }`}
                      aria-invalid={!!errors.preferredDate}
                    />
                    {errors.preferredDate && (
                      <p className="form-error flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="preferredTime" className="form-label">
                      Preferred Time <span className="text-emergency-500">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      value={data.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className={`form-input mt-2 appearance-none ${
                        errors.preferredTime ? 'border-emergency-500 focus:ring-emergency-500/15' : ''
                      }`}
                      aria-invalid={!!errors.preferredTime}
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (8:00–12:00)</option>
                      <option value="afternoon">Afternoon (12:00–17:00)</option>
                      <option value="evening">Evening (17:00–21:00)</option>
                      <option value="night">Night (21:00–08:00)</option>
                    </select>
                    {errors.preferredTime && (
                      <p className="form-error flex items-center gap-1">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {errors.preferredTime}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="form-label">
                      Message <span className="font-normal text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={data.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us briefly how we can help you..."
                      className="form-input mt-2 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/15"
                >
                  <Calendar className="h-5 w-5" />
                  Submit Appointment Request
                </button>
                <p className="mt-4 text-center text-xs text-slate-400">
                  By submitting, you agree to be contacted by Yohannes Clinic
                  regarding your request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
