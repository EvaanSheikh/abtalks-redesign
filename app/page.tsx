import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import FAQSection from "../components/landing/FAQSection";
import Testimonials from "../components/landing/Testimonials";
import TimelineSection from "../components/landing/TimelineSection";
import BenefitsGrid from "../components/landing/BenefitsGrid";
import HowItWorks from "../components/landing/HowItWorks";
import SocialProof from "../components/landing/SocialProof";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
export default function Home() {
  return (
    <main className="w-full">

      <Navbar />
      <HeroSection />
      <SocialProof />
      <HowItWorks />
      <BenefitsGrid />
      <TimelineSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />

    </main>
  );
}
