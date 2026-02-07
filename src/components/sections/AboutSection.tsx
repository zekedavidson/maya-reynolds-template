import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
    return (
        <section className='border-b-3 border-foreground w-full bg-[#e4cebd] py-16 md:py-24 pb-32 md:pb-60 pl-8 md:pl-16 lg:pl-20'>
            <div className='grid grid-cols-1 md:grid-cols-[6fr_5fr] gap-12 items-center'>
                {/* Left: Text Content */}
                <div className='flex flex-col gap-6 px-6 md:px-14 2xl:px-18 3xl:px-30 order-2 md:order-1'>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl 2xl:text-6xl font-medium text-foreground'>
                        Hi, I'm Dr. Maya Reynolds.
                    </h2>

                    <p className='text-lg md:text-xl text-foreground/80 leading-relaxed font-[450]'>
                        I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                        <br /><br />
                        Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns. My approach is paced carefully, emphasizing safety and stabilization.
                    </p>
                    <div className='flex items-center justify-center'>
                        <Link
                            href="/contact"
                            className="mt-10 border-2 border-foreground px-8 py-3 w-fit hover:bg-foreground hover:text-[#EAE6DF] transition-colors duration-300 uppercase text-sm font-semibold tracking-wider"
                        >
                            LET'S CHAT →
                        </Link>
                    </div>

                </div>

                {/* Right: Overlapping Circular Images */}
                <div className='relative h-[500px] md:h-[600px] lg:h-[700px] w-full order-1'>
                    {/* Larger image - Top Left */}
                    <div className='border-3 absolute top-0 left-0 2xl:right-[40%] w-[280px] h-[420px] md:w-[380px] md:h-[580px] lg:w-[420px] lg:h-[630px] 2xl:w-[500px] 2xl:h-[770px] rounded-t-full overflow-hidden z-10'>
                        <Image
                            src="/Maya.png"
                            alt="Lilac bouquet"
                            fill
                            className='object-cover'
                        />
                    </div>

                    {/* Smaller circle - Bottom Right */}
                    <div className='border-3 absolute bottom-0 right-0 md:top-[55%] lg:top-[70%] lg:left-[45%] 2xl:left-[40%] 3xl:top-130 3xl:left-85 w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[300px] lg:h-[300px] 2xl:w-[360px] 2xl:h-[360px] rounded-full overflow-hidden z-20'>
                        <Image
                            src="/mockup.png"
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
