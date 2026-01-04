import { memo } from "react";

const FAQS_DATA = [
    {
        question: "Is IExtract free to use?",
        answer: "Yes! Iextract is completely free to use, and we offer a fresh, clean UI with no annoying ads. Our goal is to keep it simple and accessible for everyone.",
    },
    {
        question: "How can I support IExtract?",
        answer: (
            <div className="flex flex-col gap-4">
                <p>
                    If you find this tool helpful and want to support our
                    ads-free mission, you can help us keep the servers running
                    smoothly.
                </p>
                <a
                    href="https://ko-fi.com/souravdotdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-fit px-4 py-2 bg-surface border border-border-primary rounded-lg hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                >
                    <div className="w-5 h-5 transition-transform duration-300 group-hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="Ko-Fi"
                            role="img"
                            viewBox="0 0 512 512"
                        >
                            <rect
                                width="512"
                                height="512"
                                rx="15%"
                                fill="#478db1"
                            />
                            <path
                                fill="#fff"
                                d="M371 140H100c-18 0-20 20 -20 20v184s3 40 40 40h188c41 0 40-40 40 -40v-26h23a89 89 0 000-178m0 132h-23v-86h23a43 43 0 010 86"
                            />
                            <path
                                fill="#f1464d"
                                d="M286 219c-10-30-63-33-77 3-15-36-67-33-77-3-7 19-4 35 9 54s68 64 68 64 56-45 68-64 15-35 9-54"
                            />
                        </svg>
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Support IExtract on Ko-fi
                    </span>
                </a>
            </div>
        ),
    },
    {
        question: "Can I extract captions from private accounts?",
        answer: "No, our tool only works with public Instagram posts. You can't extract captions from private accounts due to privacy restrictions.",
    },
    {
        question: "Is IExtract secure?",
        answer: "Yes, absolutely. We do not store any data or track any links you enter. Everything happens in real-time without saving anything on our servers.",
    },
    {
        question: "Can I use the extracted captions anywhere?",
        answer: "Absolutely! You can copy the extracted captions and use them anywhere you want - no formatting needed.",
    },
] as const;

const Faq = memo(function Faq() {
    return (
        <section
            id="faq"
            className="py-24 bg-background relative overflow-hidden"
        >
            {/* Decorative background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-30">
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] left-[5%] w-72 h-72 bg-stone-200/50 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                        Everything you need to know about using IExtract.
                    </p>
                </div>

                <div className="space-y-6">
                    {FAQS_DATA.map((faq, index) => (
                        <div
                            key={index}
                            className="group bg-surface-secondary/50 backdrop-blur-sm border border-border-primary rounded-xl p-8 transition-all duration-300 hover:shadow-soft hover:border-primary/20"
                        >
                            <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors">
                                {faq.question}
                            </h3>
                            <div className="text-muted-foreground leading-relaxed font-light">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Faq;
