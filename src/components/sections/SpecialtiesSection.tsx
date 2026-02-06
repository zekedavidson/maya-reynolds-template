import Image from 'next/image'
import React from 'react'

const specialties = [
    {
        title: "Self-Esteem",
        description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
        image: "/specialties-1.jpg",
        objectPosition: "left"
    },
    {
        title: "Relationships",
        description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
        image: "/specialties-2.jpg",
        objectPosition: "bottom"
    },
    {
        title: "Burnout",
        description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
        image: "/specialties-3.jpg",
        objectPosition: "center"
    }
]

const SpecialtiesSection = () => {
    return (
        <section className="w-full py-25 px-6 md:px-16 lg:px-8 xl:px-12 2xl:px-16 bg-[#FFFBF5]">
            <h2 className="text-5xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-[64px] font-medium text-center text-[#223614] mb-16 mt-15">
                My Specialties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-8">
                {specialties.map((item, index) => (
                    <div key={index} className="border border-[#223614] p-3 md:p-4 2xl:p-6 flex flex-col h-full bg-[#E5E0DA]">
                        <h3 className="text-xl font-medium text-[#223614] mb-10">
                            {item.title}
                        </h3>
                        <p className="text-xs md:text-[14px] text-foreground/80 mb-8 leading-relaxed font-medium">
                            {item.description}
                        </p>

                        <div className="mt-auto pt-8 flex justify-center mb-4">
                            <div className="relative w-full max-w-[400px] aspect-square rounded-full overflow-hidden shrink-0">
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
