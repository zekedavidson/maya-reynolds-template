'use client'

import React, { useState } from 'react'

interface menuItem {
    question: string
    answer: string
}

const menuData = [
    {
        question: "CBT & Mindfulness",
        answer: "I integrate Cognitive Behavioral Therapy (CBT) and mindfulness-based practices to help clients identify unhelpful thought patterns and develop more grounded ways of responding to stress."
    },
    {
        question: "EMDR & Trauma Work",
        answer: "I use Eye Movement Desensitization and Reprocessing (EMDR) to help process traumatic memories and reduce their lingering emotional charge, allowing for deeper healing."
    },
    {
        question: "Body-Oriented Techniques",
        answer: "My approach includes somatic and body-oriented techniques to help effective regulation of the nervous system, addressing the physiological side of anxiety and trauma."
    },
    {
        question: "Education & Training",
        answer: "I hold a PsyD in Clinical Psychology and have specialized training in trauma-informed care and evidence-based treatments for anxiety disorders."
    }
]

const ProfessionalBackground = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleMenu = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <section className='w-full bg-[#e4cebd] py-16 md:py-30'>
            <div className='max-w-[1050px] mx-auto px-6 md:px-15'>
                <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[42px] 3xl:text-[50px] font-medium mb-12 text-foreground text-center'>
                    Evidence-Based Methods
                </h2>


                <div className='flex flex-col'>
                    {menuData.map((menu, index) => (
                        <div key={index} className='border-t border-b border-foreground'>
                            <button
                                onClick={() => toggleMenu(index)}
                                className='w-full py-3 flex justify-between items-center text-left hover:opacity-70 transition-opacity'
                            >
                                <span className='text-xl md:text-2xl lg:text-[28px] font-normal text-foreground'>
                                    {menu.question}
                                </span>

                                <span className='text-2xl md:text-3xl lg:text-4xl font-normal text-foreground shrink-0'>
                                    {openIndex === index ? '−' : '+'}
                                </span>

                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <p className='text-base md:text-lg text-foreground'>
                                    {menu.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProfessionalBackground