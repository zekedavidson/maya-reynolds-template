import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FulfillmentSection = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
            {/* Left: Text Content */}
            {/* Left: Text Content */}
            <div className="bg-[#E5E0DA] min-h-[400px] md:min-h-[600px] lg:min-h-[500px] 2xl:h-[867px] flex flex-col justify-between order-2 md:order-1">
                <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-8 xl:px-12 2xl:px-20 ">
                    <div className="max-w-full">
                        <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[66px] font-medium mb-8 text-[#223614]">
                            Live a fulfilling life.
                        </h2>

                        <div className="space-y-6 text-[20px] text-foreground font-[420]">
                            <p>
                                Life can be challenging—especially when you're trying to balance your personal and professional life.
                            </p>
                            <p>
                                It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="w-full border-t-2 border-[#223614]/70 py-8 text-center text-xs font-semibold tracking-wider text-[#223614] hover:bg-[#223614] hover:text-[#EAE6DF] transition-colors duration-700 uppercase block"
                >
                    <p className='text-[14px] font-medium'>Get in touch →</p>
                </Link>
            </div>

            {/* Right: Image */}
            <div className="relative h-[300px] md:h-auto md:min-h-full w-full order-1 md:order-2">
                <div className="absolute inset-0 bg-gray-200 h-full">
                    <Image
                        src="/home-page-section2.jpg"
                        alt="Desk with coffee and journal"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default FulfillmentSection
