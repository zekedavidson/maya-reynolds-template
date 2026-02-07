import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FulfillmentSection = () => {
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 border-b-3">
            {/* Left: Text Content */}
            {/* Left: Text Content */}
            <div className="bg-[#36575C] min-h-[400px] md:min-h-[600px] lg:min-h-[500px] 2xl:h-[770px] 3xl:h-[867px] flex flex-col justify-between order-2 md:order-1">
                <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 py-12 md:py-0">
                    <div className="max-w-full">
                        <h2 className="text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[54px] 3xl:text-[66px] font-medium mb-8 text-[#E8D6C8]">
                            A Warm, Collaborative Approach
                        </h2>

                        <div className="text-[#eee1d7] space-y-6 text-[20px] font-[420]">
                            <p>
                                I take a warm, collaborative approach, integrating methods like CBT, EMDR, and mindfulness to support both your emotional and physiological well-being.
                            </p>
                            <p>
                                My goal is to help you develop insight, resilience, and a stronger relationship with yourself—not just simple symptom relief.
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="w-full border-t-2 border-[#eee1d7]/70 py-8 text-center text-xs font-semibold tracking-wider text-[#eee1d7] hover:bg-[#eee1d7] hover:text-[#36575C] transition-colors duration-700 uppercase block"
                >
                    <p className='text-[14px] font-medium'>Get in touch →</p>
                </Link>
            </div>

            {/* Right: Image */}
            <div className="relative h-[400px] md:h-auto md:min-h-full w-full order-1 md:order-2">
                <div className="absolute inset-0 bg-gray-200 h-full">
                    <Image
                        src="/section-2.jpg"
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
