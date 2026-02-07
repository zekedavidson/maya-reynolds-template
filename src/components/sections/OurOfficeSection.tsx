import React from 'react';
import Image from 'next/image';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import Link from 'next/link';

const OurOfficeSection = () => {
    return (
        <section className="min-h-screen bg-background">
            <div className="pt-20 pb-20 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#36575C] mb-8 text-center">
                        Our Office
                    </h1>

                    <div className="max-w-6xl mx-auto text-center mb-16 md:mb-24">
                        <p className="text-lg md:text-2xl text-[#36575C]/80 leading-relaxed font-medium">
                            Our office in Santa Monica is designed to be a sanctuary from the outside world.
                            It is a quiet, private space filled with natural light, soft textures, and a calming atmosphere
                            to help you feel grounded and safe during your sessions.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
                        {/* Image Placeholder 1 */}
                        <div className="relative aspect-4/3 w-full bg-[#dcc5b4] overflow-hidden rounded-sm border-3 border-[#36575C]/70 flex items-center justify-center group">
                            <span className="text-[#36575C]/40 font-semibold">Office Image 1</span>
                            {<Image
                                src="/office1.jpeg"
                                alt="Therapy office seating area with comfortable chairs and natural light"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />}
                        </div>

                        {/* Image Placeholder 2 */}
                        <div className="relative aspect-4/3 w-full bg-[#dcc5b4] overflow-hidden rounded-sm border-3 border-[#36575C]/70 flex items-center justify-center group">
                            <span className="text-[#36575C]/40 font-semibold">Office Image 2</span>
                            <Image
                                src="/office2.jpeg"
                                alt="Calming decor details in the therapy office"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

            {/* My Office Location Section */}
            <section className="w-full bg-[#bc722f] text-white py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left: Text Details */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl md:text-3xl font-semibold mb-6">We look forward to welcoming you into this space.</h2>
                            <Link
                                href="/contact"
                                className="inline-block border-2 border-background p-3 text-white hover:text-[#bc722f]/70 hover:border-[#bc722f]/70 hover:bg-white transition-all text-sm font-semibold tracking-wider uppercase"
                            >
                                Book a Session →
                            </Link>
                        </div>
                        <div>
                            <p className="text-lg md:text-xl font-normal leading-relaxed opacity-90">
                                123 Therapy Blvd, Suite 100<br />
                                Santa Monica, CA 90401
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl md:text-4xl font-semibold mb-6">Hours</h3>
                            <p className="text-lg md:text-xl font-normal leading-relaxed opacity-90">
                                Monday – Friday<br />
                                10am – 6pm
                            </p>
                        </div>
                    </div>

                    {/* Right: Map Container */}
                    <div className="w-full h-[400px] bg-gray-200 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition duration-700">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.13636362483!2d-118.50428355!3d34.0242125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cec29110ad%3A0x2897c8861cf2138!2sSanta%20Monica%2C%20CA!5e0!3m2!1sen!2sus!4v1707321000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location Map"
                        ></iframe>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default OurOfficeSection;
