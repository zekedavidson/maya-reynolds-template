'use client'

import Image from 'next/image'
import React, { useState } from 'react'

interface FAQItem {
    question: string
    answer: string
}

const faqData: FAQItem[] = [
    {
        question: "Do you offer in-person sessions?",
        answer: "Yes, I offer in-person therapy at my office in Santa Monica. It’s a quiet, private space designed to feel calm and grounding, with natural light and a comfortable environment."
    },
    {
        question: "Do you offer telehealth?",
        answer: "Yes, I provide secure video sessions for clients located anywhere in California. This allows for flexibility if you have a busy schedule or prefer meeting from home."
    },
    {
        question: "What is your approach to therapy?",
        answer: "I work collaboratively, using evidence-based methods like CBT, EMDR, and mindfulness. My goal is to help you understand both the emotional and physiological sides of your experience."
    },
    {
        question: "Who do you work with?",
        answer: "I specialize in working with adults—often high-achieving professionals, creatives, and entrepreneurs—who are navigating anxiety, burnout, trauma, or perfectionism."
    }
]

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className='w-full bg-background py-16 md:py-24'>
            <div className='grid grid-cols-1 md:grid-cols-[1.5fr_2fr] gap-12 md:gap-40 items-start max-w-[1500px] mx-auto pl-6 md:pl-12 lg:pl-16 2xl:pl-20 pr-4 lg:pr-8'>
                {/* Left: Flower Image */}
                <div className='relative h-[400px] md:h-[500px] lg:h-[700px] 2xl:h-[780px] order-1'>
                    <div className='border-3 absolute inset-0 rounded-t-full overflow-hidden'>
                        <Image
                            src="/faq (1).jpg"
                            alt="Lilac flowers"
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>

                {/* Right: FAQs */}
                <div className='flex flex-col gap-7 order-2 '>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-foreground mb-10 mt-32 2xl:mt-40 3xl:mt-50'>
                        FAQs
                    </h2>


                    <div className='flex flex-col'>
                        {faqData.map((faq, index) => (
                            <div key={index} className='border-t border-b border-foreground'>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className='w-full py-4 flex gap-4 items-center text-left hover:opacity-70 transition-opacity'
                                >
                                    <span className='text-2xl md:text-5xl font-medium text-foreground shrink-0'>
                                        {openIndex === index ? '−' : '+'}
                                    </span>

                                    <span className='text-xl md:text-2xl lg:text-4xl font-semibold text-foreground'>
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
