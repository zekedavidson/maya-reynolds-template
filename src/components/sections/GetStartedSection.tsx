import Link from 'next/link'
import React from 'react'

const GetStartedSection = () => {
    return (
        <section className='w-full bg-[#7E7B46] py-24 md:py-42'>
            <div className='max-w-[900px] mx-auto px-6 md:px-12 text-center'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-medium text-white mb-8'>
                    Get started today.
                </h2>

                <div className='text-base md:text-lg lg:text-xl text-white mb-12 leading-relaxed max-w-[800px] mx-auto'>
                    <p>
                        Ready to take the first step towards a happier, healthier you?
                    </p>
                    <p>
                        Contact me to book your first session. I look forward to starting this therapeutic journey with you.
                    </p>
                </div>
                <div className='pt-20'>
                    <Link
                        href="/contact"
                        className="inline-block border border-white px-8 py-3 text-white hover:bg-white hover:text-[#8B8C6C] transition-colors duration-300 uppercase text-sm font-semibold tracking-wider"
                    >
                        GET IN TOUCH →
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default GetStartedSection
