import Image from 'next/image'
import React from 'react'

const specialties = [
    {
        title: "Anxiety & Overwhelm",
        description: "For those who feel functional on the outside but are quietly struggling with constant worry, tension, or a sense of bracing for something to go wrong.",
        image: "/anxiety.jpg"
    },
    {
        title: "Trauma & Healing",
        description: "Navigating the impact of earlier life experiences that affect relationships and safety. Supporting recovery from single-incident trauma and complex, long-standing patterns.",
        image: "/trauma.jpg"
    },
    {
        title: "Professional Burnout",
        description: "Supporting high-achieving professionals, entrepreneurs, and creatives who feel disconnected after years of pushing through stress and perfectionism.",
        image: "/burnout.jpg"
    }
]

const SpecialtiesSection = () => {
    return (
        <section className="w-full py-25 px-6 md:px-16 lg:px-8 xl:px-12 2xl:px-12 3xl:px-16 bg-background">
            <h2 className="text-5xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[52px] 3xl:text-[64px] font-semibold text-center text-foreground mb-16 mt-15">
                My Specialties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-8">
                {specialties.map((item, index) => (
                    <div key={index} className="border-2 border-foreground p-3 md:p-4 2xl:p-5 3xl:p-6 flex flex-col h-full bg-[#e4cebd]">

                        <h3 className="text-xl font-semibold text-foreground mb-10">
                            {item.title}
                        </h3>
                        <p className="text-xs md:text-[14px] text-foreground/80 mb-8 leading-relaxed font-semibold">
                            {item.description}
                        </p>

                        <div className="mt-auto pt-8 flex justify-center mb-4">
                            <div className="border-3 relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden shrink-0">
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        style={{ objectPosition: (item as any).objectPosition || 'center' }}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SpecialtiesSection
