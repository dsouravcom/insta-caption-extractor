import { memo } from "react";

const TESTIMONIALS_DATA = [
    {
        content:
            "IExtract is a lifesaver! I just paste the link and get the caption instantly. It saves me so much time when I need to repost content.",
        author: "Sarah Jenkins",
        role: "Social Media Manager",
    },
    {
        content:
            "The cleanest tool I've found. No ads, no popups, just does what it says. Highly recommended for anyone working with Instagram.",
        author: "Mike Chen",
        role: "Content Creator",
    },
    {
        content:
            "I use this daily for my marketing agency. It's fast, reliable, and free. Can't ask for more than that.",
        author: "Emma Wilson",
        role: "Digital Marketer",
    },
] as const;

const Testimonials = memo(function Testimonials() {
    return (
        <section className="py-24 bg-surface-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-serif font-medium text-primary mb-6">
                        Loved by <br />
                        <span className="italic text-text-secondary">
                            creators worldwide.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS_DATA.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-surface p-8 rounded-3xl border border-border-primary hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex text-secondary mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg text-primary mb-8 leading-relaxed font-light">
                                "{testimonial.content}"
                            </p>
                            <div>
                                <p className="font-medium text-primary">
                                    {testimonial.author}
                                </p>
                                <p className="text-sm text-text-secondary">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Testimonials;
