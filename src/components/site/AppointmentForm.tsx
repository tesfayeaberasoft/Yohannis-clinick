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
      className="relative overflow-hidden bg-background py-28 lg:py-36"
      ref={ref}
    >
      <div className="absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-primary/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-2">
            <p className="reveal eyebrow">
              Contact & Appointments
            </p>
            <h2 className="reveal section-title mt-5">
              How can we <span className="text-gradient-gold">help you?</span>
            </h2>
            <p className="reveal section-lead mt-6">
              Contact Yohannes Clinic or request an appointment. Our team will
              assist you with your inquiry.
            </p>

            {/* Direct contact */}
            <div className="reveal mt-8 space-y-4">
              <a
                href={CLINIC.phoneHref}
                className="card-surface card-interactive group flex items-center gap-4 p-5"
              >
                <span className="icon-chip group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Call us</p>
                  <p className="text-sm text-muted-foreground">{CLINIC.phone}</p>
                </div>
              </a>
              <div className="card-surface flex items-center gap-4 p-5">
                <span className="icon-chip">
                  <MessageSquare className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Request a callback
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fill out the form and we will get back to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy note */}
            <p className="reveal mt-8 text-xs leading-relaxed text-muted-foreground/70">
              This form is for appointment requests and general inquiries only.
              Please do not include sensitive medical information. For
              emergencies, call {CLINIC.phone} directly.
            </p>
          </div>

          {/* Right: form */}
          <div className="reveal lg:col-span-3">
            {submitted ? (
              <div className="glass flex h-full flex-col items-center justify-center rounded-3xl p-10 text-center shadow-elevated animate-scale-in sm:p-12">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success ring-8 ring-success/5">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold text-foreground">
                  Request Received
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  Thank you for reaching out to Yohannes Clinic. We have noted
                  your request and our team will contact you shortly to confirm
                  your appointment. This is a demo form — no information has been
                  transmitted. Please call us directly for urgent matters.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={CLINIC.phoneHref}
                    className="btn-primary px-6 py-3.5"
                  >
                    <Phone className="h-4 w-4" />
                    Call {CLINIC.phone}
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setData(initialData);
                    }}
                    className="btn-outline px-6 py-3.5"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="glass rounded-3xl p-6 shadow-elevated sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="form-label">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={data.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className={`form-input mt-2 ${
                        errors.fullName ? 'border-destructive focus:border-destructive focus:ring-destructive/15' : ''
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
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={data.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+251 ..."
                      className={`form-input mt-2 ${
                        errors.phone ? 'border-destructive focus:border-destructive focus:ring-destructive/15' : ''
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
                      Service Needed <span className="text-primary">*</span>
                    </label>
                    <select
                      id="service"
                      value={data.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={`form-input mt-2 appearance-none ${
                        errors.service ? 'border-destructive focus:border-destructive focus:ring-destructive/15' : ''
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
                      Preferred Date <span className="text-primary">*</span>
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      min={today}
                      value={data.preferredDate}
                      onChange={(e) => handleChange('preferredDate', e.target.value)}
                      className={`form-input mt-2 ${
                        errors.preferredDate ? 'border-destructive focus:border-destructive focus:ring-destructive/15' : ''
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
                      Preferred Time <span className="text-primary">*</span>
                    </label>
                    <select
                      id="preferredTime"
                      value={data.preferredTime}
                      onChange={(e) => handleChange('preferredTime', e.target.value)}
                      className={`form-input mt-2 appearance-none ${
                        errors.preferredTime ? 'border-destructive focus:border-destructive focus:ring-destructive/15' : ''
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
                      Message <span className="font-normal text-muted-foreground">(optional)</span>
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
                  className="btn-primary group mt-8 w-full"
                >
                  <Calendar className="h-5 w-5" />
                  Submit Appointment Request
                </button>
                <p className="mt-4 text-center text-xs text-muted-foreground/70">
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
