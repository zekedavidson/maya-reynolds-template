import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SupportSection = () => {
    return (
        <section className='w-full grid grid-cols-1 md:grid-cols-2'>
            {/* Left Image */}
            <div className='relative h-[400px] md:h-auto md:min-h-full lg:min-h-screen 2xl:min-h-[850px] 3xl:min-h-[1080px] w-full order-1'>
                <div className='absolute inset-0 h-full'>
                    <Image
                        src="/section4.jpg"
                        alt="support section"
                        fill
                        className='object-cover'
                    />
                </div>
            </div>

            {/*Right: Text Content */}
            <div className='bg-[#D7E4EE] flex flex-col justify-between order-2 w-full'>
                <div className='flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 py-16 md:py-24'>
                    <div className='max-w-full'>
                        <h2 className='text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[54px] 3xl:text-[66px] font-medium mb-8 text-foreground'>
                            You don't have to do this all alone.
                        </h2>

                        <div className='text-foreground/80 space-y-6 text-[20px] font-[420]'>
                            <p>
                                If you are facing any of these, there’s hope:
                            </p>
                            <ul className='list-disc pl-6 space-y-2'>
                                <li>Persistent feelings of anxiety or overwhelm</li>
                                <li>Difficulty quieting your mind at night</li>
                                <li>Feeling disconnected from your relationships</li>
                                <li>A sense of professional burnout or exhaustion</li>
                                <li>Struggling to move past traumatic experiences</li>
                            </ul>
                            <p>
                                With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                            </p>
                        </div>
                    </div>
                </div>

                <Link
                    href="/contact"
                    className="w-full border-t-2 border-foreground/70 py-8 text-center text-xs font-semibold tracking-wider text-foreground hover:bg-foreground hover:text-[#EAE6DF] transition-colors duration-700 uppercase block"
                >
                    <p className='text-[14px] font-medium'>WORK WITH ME →</p>
                </Link>
            </div>
        </section>
    )
}

export default SupportSection