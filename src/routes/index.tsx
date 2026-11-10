import { createFileRoute } from "@tanstack/react-router";

import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import TrustIndicators from "@/components/site/TrustIndicators";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import EmergencySection from "@/components/site/EmergencySection";
import Location from "@/components/site/Location";
import AppointmentForm from "@/components/site/AppointmentForm";
import Footer from "@/components/site/Footer";
import { IMAGES } from "@/data/clinic";

const TITLE = "Yohannes Clinic — 24/7 Quality Healthcare in Hawassa, Sidama";
const DESCRIPTION =
  "Yohannes Clinic provides compassionate, professional, and comprehensive medical services 24/7 in Hawassa, Sidama Region, Ethiopia. Emergency care, consultation, laboratory, pharmacy, and maternal & child health services.";
const SHARE_TITLE = "Yohannes Clinic — 24/7 Quality Healthcare in Hawassa";
const SHARE_DESCRIPTION =
  "Compassionate, professional, and comprehensive medical services around the clock in Hawassa, Sidama Region, Ethiopia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Yohannes Clinic, Hawassa healthcare, clinic Hawassa, Sidama region clinic, emergency care Ethiopia, medical consultation Hawassa, laboratory services, pharmacy, maternal child health",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: SHARE_TITLE },
      { property: "og:description", content: SHARE_DESCRIPTION },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: IMAGES.hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SHARE_TITLE },
      { name: "twitter:description", content: SHARE_DESCRIPTION },
      { name: "twitter:image", content: IMAGES.hero },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <About />
        <Services />
        <WhyChooseUs />
        <EmergencySection />
        <Location />
        <AppointmentForm />
      </main>
      <Footer />
    </>
  );
}
