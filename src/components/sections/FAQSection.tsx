'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "Do you take insurance?",
        answer: "Answer goes here."
    },
    {
        question: "What are your rates?",
        answer: "Answer goes here."
    },
    {
        question: "Do you have any openings?",
        answer: "Answer goes here."
    }
]

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className='w-full bg-[#FBF6F1] py-16 md:py-24'>
            <div className='grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-15 items-start max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-16 3xl:px-20'>
                {/* Left: Flower Image */}
                <div className='relative h-[400px] md:h-[500px] lg:h-[700px] 2xl:h-[750px] 3xl:h-[900px] order-1'>
                    <div className='absolute inset-0 rounded-t-full overflow-hidden'>
                        <Image
                            src="/faq-section.jpg"
                            alt="Lilac flowers"
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>

                {/* Right: FAQs */}
                <div className='flex flex-col gap-8 order-2 '>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl 3xl:text-6xl font-medium text-[#223614] mb-10 mt-32 2xl:mt-40 3xl:mt-50'>
                        FAQs
                    </h2>


                    <div className='flex flex-col'>
                        {faqData.map((faq, index) => (
                            <div key={index} className='border-t border-b border-[#223614]'>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className='w-full py-6 flex gap-4 items-center text-left hover:opacity-70 transition-opacity'
                                >
                                    <span className='text-2xl md:text-5xl font-normal text-[#223614] shrink-0'>
                                        {openIndex === index ? '−' : '+'}
                                    </span>

                                    <span className='text-xl md:text-2xl lg:text-5xl font-medium text-[#223614] pr-4'>
                                        {faq.question}
                                    </span>

                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'
                                        }`}
                                >
                                    <p className='text-base md:text-lg text-foreground'>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
