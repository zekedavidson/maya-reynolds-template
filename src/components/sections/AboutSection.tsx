import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
    return (
        <section className='w-full bg-[#E5E0DA] py-16 md:py-24 pb-32 md:pb-50 pl-8 md:pl-16 lg:pl-20'>
            <div className='grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-12 items-center'>
                {/* Left: Text Content */}
                <div className='flex flex-col gap-6 px-6 md:px-20 2xl:px-24 3xl:px-30 order-2 md:order-1'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl font-medium text-[#223614]'>
                        Hi, I'm Lilac.
                    </h2>

                    <p className='text-base md:text-lg lg:text-xl 2xl:text-xl text-foreground leading-relaxed'>
                        I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                    </p>
                    <div className='flex items-center justify-center'>
                        <Link
                            href="/contact"
                            className="mt-10 border-2 border-[#223614] px-8 py-3 w-fit hover:bg-[#223614] hover:text-[#EAE6DF] transition-colors duration-300 uppercase text-sm font-semibold tracking-wider"
                        >
                            LET'S CHAT →
                        </Link>
                    </div>

                </div>

                {/* Right: Overlapping Circular Images */}
                <div className='relative h-[500px] md:h-[600px] lg:h-[700px] w-full order-1'>
                    {/* Larger image - Top Left */}
                    <div className='absolute top-0 left-0 w-[280px] h-[420px] md:w-[380px] md:h-[580px] lg:w-[420px] lg:h-[630px] 2xl:w-[450px] 2xl:h-[675px] 3xl:w-[520px] 3xl:h-[780px] rounded-t-full overflow-hidden z-10'>
                        <Image
                            src="/about-section1.jpg"
                            alt="Lilac bouquet"
                            fill
                            className='object-cover'
                        />
                    </div>

                    {/* Smaller circle - Bottom Right */}
                    <div className='absolute bottom-0 right-0 md:top-[55%] lg:top-[50%] lg:left-[45%] 2xl:left-[40%] 3xl:top-130 3xl:left-85 w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] 2xl:w-[320px] 2xl:h-[320px] 3xl:w-[360px] 3xl:h-[360px] rounded-full overflow-hidden z-20'>
                        <Image
                            src="/about-section2.jpeg"
                            alt="White hydrangea"
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutSection
