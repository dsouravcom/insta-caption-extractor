import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Tool from "@/components/Tool";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://caption.pocketutils.com" />
      </Head>
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
