import Image from "next/image";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <p className="mt-4 text-xl text-secondary max-w-3xl mx-auto">
                        Extract Instagram captions in just a few simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="relative">
                        <div className="absolute -left-4 -top-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold text-brand">
                            1
                        </div>
                        <div className="bg-surface rounded-xl shadow-custom-lg p-6 h-full border border-tertiary">
                            <Image
                                src="https://i.imgur.com/Tl2qTD2.png"
                                alt="IExtract - Free Instagram Caption Extractor"
                                height={160}
                                width={160}
                                loading="lazy"
                                className="w-full h-40 object-cover rounded-lg mb-6"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Copy Instagram URL
                            </h3>
                            <p className="text-secondary">
                                Find the Instagram post you want to extract the
                                caption from and copy its URL from the address
                                bar.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-4 -top-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold text-brand">
                            2
                        </div>
                        <div className="bg-surface rounded-xl shadow-custom-lg p-6 h-full border border-tertiary">
                            <Image
                                src="https://i.imgur.com/amPliF8.png"
                                alt="Copy Instagram Captions Instantly with IExtract"
                                height={160}
                                width={160}
                                loading="lazy"
                                className="w-full h-40 object-cover rounded-lg mb-6"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Paste URL & Extract
                            </h3>
                            <p className="text-secondary">
                                Paste the URL into our tool and click the
                                "Extract Caption" button to process the
                                Instagram post.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-4 -top-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold text-brand">
                            3
                        </div>
                        <div className="bg-surface rounded-xl shadow-custom-lg p-6 h-full border border-tertiary">
                            <Image
                                src="https://i.imgur.com/PN4hjC5.png"
                                alt="Best Instagram Caption Grabber - No Ads, No Tracking"
                                height={160}
                                width={160}
                                loading="lazy"
                                className="w-full h-40 object-cover rounded-lg mb-6"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                Copy & Use Caption
                            </h3>
                            <p className="text-secondary">
                                Copy the extracted caption with a single click
                                and use it anywhere you want - no formatting
                                needed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
