import Link from 'next/link'
import React from 'react'

const GetStartedSection = () => {
    return (
        <section className='w-full bg-[#bc722f] py-24 md:py-42'>
            <div className='max-w-[900px] mx-auto px-6 md:px-12 text-center'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-white mb-8'>
                    Get started today.
                </h2>
                <p className='text-lg md:text-xl text-white/90 leading-relaxed font-normal mb-8'>
                    If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
                </p>
                <p className='text-base md:text-lg lg:text-xl text-white mb-12 leading-relaxed max-w-[800px] mx-auto'>
                    Contact me to book your first session. I look forward to starting this therapeutic journey with you.
                </p>
                <div className='pt-20'>
                    <Link
                        href="/contact"
                        className="inline-block border border-white px-8 py-3 text-white hover:bg-white hover:text-[#bc722f] transition-colors duration-300 uppercase text-sm font-semibold tracking-wider"
                    >
                        GET IN TOUCH →
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default GetStartedSection
