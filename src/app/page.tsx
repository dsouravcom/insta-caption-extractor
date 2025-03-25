import Navbar from "@/components/Navbar";
import Tool from "@/components/Tool";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Tool />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
