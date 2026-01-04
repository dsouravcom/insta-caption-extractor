import Image from "next/image";
import { memo } from "react";

const STEPS_DATA = [
    {
        number: "01",
        title: "Copy URL",
        description:
            "Find the Instagram post you love and copy its link from the address bar or share menu.",
        image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1764868445/caption-extractor/copy-link.webp",
    },
    {
        number: "02",
        title: "Paste & Extract",
        description:
            "Paste the link into our tool. We'll instantly process the post to find the caption.",
        image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1764868445/caption-extractor/paste-and-extract.webp",
    },
    {
        number: "03",
        title: "Copy Text",
        description:
            "Your caption is ready. Copy it with one click and use it wherever you need.",
        image: "https://res.cloudinary.com/dzjujoqyi/image/upload/v1764868445/caption-extractor/copy-text.webp",
    },
] as const;

const HowItWorks = memo(function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-surface overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20">
                    <h2 className="text-4xl font-serif font-medium text-primary mb-6">
                        Simple as <br />
                        <span className="italic text-text-secondary">
                            one, two, three.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {STEPS_DATA.map((step, index) => (
                        <div key={index} className="group relative">
                            <div className="absolute -top-12 left-0 text-8xl font-serif font-bold text-surface-tertiary/50 -z-10 select-none transition-colors duration-500 group-hover:text-secondary/10">
                                {step.number}
                            </div>
                            <div className="pt-8">
                                <div className="relative aspect-4/3 mb-8 rounded-2xl overflow-hidden bg-surface-secondary">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                                </div>
                                <h3 className="text-2xl font-medium text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default HowItWorks;
