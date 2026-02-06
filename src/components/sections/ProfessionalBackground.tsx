'use client'

import React, { useState } from 'react'

interface menuItem {
    question: string
    answer: string
}

const menuData: menuItem[] = [
    {
        question: "Education",
        answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
        question: "Licensure",
        answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    },
    {
        question: "Certifications",
        answer: "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    }
]

const ProfessionalBackground = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleMenu = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <section className='w-full bg-[#E5E0DA] py-16 md:py-30'>
            <div className='max-w-[1050px] mx-auto px-6 md:px-15'>
                <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[42px] 3xl:text-[50px] font-medium mb-12 text-[#223614] text-center'>
                    My Professional Background
                </h2>


                <div className='flex flex-col'>
                    {menuData.map((menu, index) => (
                        <div key={index} className='border-t border-b border-[#223614]'>
                            <button
                                onClick={() => toggleMenu(index)}
                                className='w-full py-3 flex justify-between items-center text-left hover:opacity-70 transition-opacity'
                            >
                                <span className='text-xl md:text-2xl lg:text-[28px] font-normal text-[#223614]'>
                                    {menu.question}
                                </span>

                                <span className='text-2xl md:text-3xl lg:text-4xl font-normal text-[#223614] shrink-0'>
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