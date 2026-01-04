import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Tool from "@/components/Tool";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "IExtract - Free Ads-Free Instagram Caption Extractor",
    description:
        "IExtract is a free, ads-free Instagram caption extractor that helps you copy text from any public post instantly. No login required, clean interface, zero hassle.",
    alternates: {
        canonical: "https://caption.dsourav.com",
    },
};

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
