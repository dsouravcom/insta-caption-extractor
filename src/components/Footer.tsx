import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col space-y-10 md:justify-between md:flex-row md:space-y-0">
                    <div>
                        <Image
                            src="https://img.icons8.com/cotton/64/instagram-new.png"
                            height={160}
                            width={160}
                            alt="i extract logo"
                            className="h-10 w-10"
                        />
                        <p className="mt-4 text-secondary">
                            © {new Date().getFullYear()} IExtract. All rights
                            reserved.
                        </p>
                        <p className="text-secondary">
                            Extract Instagram Captions Instantly with IExtract -
                            100% Free & No Ads!
                        </p>
                        <p></p>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">Company</h5>
                        <ul className="mt-4">
                            <li>
                                <Link
                                    href={"/about-us"}
                                    className="text-secondary hover:text-primary transition-colors duration-200"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/contact-us"}
                                    className="text-secondary hover:text-primary transition-colors duration-200"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/sitemap.xml"}
                                    className="text-secondary hover:text-primary transition-colors duration-200"
                                >
                                    Sitemap
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/terms-and-conditions"}
                                    className="text-secondary hover:text-primary transition-colors duration-200"
                                >
                                    Terms And Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
