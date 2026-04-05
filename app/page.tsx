import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "RotateMD",
  url: "https://rotatemd.com",
  description:
    "Connect with other medical students rotating at the same hospital, city, and dates. Split housing costs and make your away rotations unforgettable.",
  applicationCategory: "EducationApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Trust />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
