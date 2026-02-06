import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SupportSection = () => {
    return (
        <section className='w-full grid grid-cols-1 md:grid-cols-2'>
            {/* Left Image */}
            <div className='relative h-[400px] md:h-auto md:min-h-full lg:min-h-screen 2xl:min-h-[1080px] w-full order-1'>
                <div className='absolute inset-0 h-full'>
                    <Image
                        src="/support-section.jpg"
                        alt="support section"
                        fill
                        className='object-cover'
                    />
                </div>
            </div>

            {/*Right: Text Content */}
            <div className='bg-[#C2BFCB] flex flex-col justify-between order-2 w-full'>
                <div className='flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-8 xl:px-12 2xl:px-20 py-16 md:py-24'>
                    <div className='max-w-full'>
                        <h2 className='text-3xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[66px] font-medium mb-8 text-[#223614]'>
                            You don’t have to do this all alone.
                        </h2>

                        <div className='space-y-6 text-[20px] lg:text-base xl:text-lg 2xl:text-[20px] text-foreground font-normal'>
                            <p>
                                If you are facing any of these, there’s hope:
                            </p>
                            <div className='px-10 py-6'>
                                <ul className='list-disc space-y-4'>
                                    <li>Persistent feelings of sadness or hopelessness</li>
                                    <li>Trouble focusing or making decisions</li>
                                    <li>Difficulty maintaining relationships</li>
                                    <li>Feeling constantly exhausted or unmotivated</li>
                                    <li>A pervasive sense of being overwhelmed</li>
                                </ul>
                            </div>

                            <p className='py-6'>
                                With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                            </p>
                        </div>
                    </div>
                </div>
                <Link
                    href="/contact"
                    className="w-full border-t-2 border-[#223614]/70 py-8 text-center text-xs font-semibold tracking-wider text-[#223614] hover:bg-[#223614] hover:text-[#EAE6DF] transition-colors duration-700 uppercase block"
                >
                    <p className='text-[14px] font-medium'>WORK WITH ME →</p>
                </Link>
            </div>
        </section >
    )
}

export default SupportSection