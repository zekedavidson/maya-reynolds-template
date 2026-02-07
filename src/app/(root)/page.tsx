import Image from "next/image";
import FulfillmentSection from "@/components/sections/FulfillmentSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import SupportSection from "@/components/sections/SupportSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import ProfessionalBackground from "@/components/sections/ProfessionalBackground";
import GetStartedSection from "@/components/sections/GetStartedSection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="px-6 md:px-12 2xl:px-16 pt-12 pb-0">
                <RevealOnScroll className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Image with rounded top */}
                    <div className="flex px-12 pt-2 pb-0 justify-start max-h-[1500px]">
                        <div className="w-full h-full max-w-[716px]">
                            <div className="bg-gray-300 border-3 rounded-t-full aspect-2/3 w-full h-full relative">
                                <Image
                                    src="/Maya.png"
                                    alt="section1"
                                    fill
                                    className="object-cover rounded-t-full"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Text content */}
                    <div className="flex flex-col gap-6 items-center text-center justify-center hero-offset-monitor relative pb-50">
                        <h1
                            className="hero-title-monitor font-medium leading-tight text-5xl md:text-6xl xl:text-7xl 2xl:text-[80px]"
                        >
                            Find Calm <br /> In The Chaos
                        </h1>

                        <p className="text-xl font-medium">
                            Therapy for Adults in Santa Monica, California.
                        </p>
                        <div className="py-8">
                            <button className="items-center border-2 border-foreground px-6 py-3 w-fit hover:bg-foreground hover:text-background transition-colors font-medium">
                                CONNECT WITH ME →
                            </button>
                        </div>

                    </div>
                </RevealOnScroll>
            </section>


            {/* Second Section: Live a fulfilling life */}
            <RevealOnScroll delay={100}>
                <FulfillmentSection />
            </RevealOnScroll>

            {/* Third Section: My Specialties */}
            <RevealOnScroll delay={100}>
                <SpecialtiesSection />
            </RevealOnScroll>

            {/* Support Section */}
            <RevealOnScroll delay={100}>
                <SupportSection />
            </RevealOnScroll>

            {/* About Section */}
            <RevealOnScroll delay={100}>
                <AboutSection />
            </RevealOnScroll>

            {/* FAQ Section */}
            <RevealOnScroll delay={100}>
                <FAQSection />
            </RevealOnScroll>

            {/*Professional Background */}
            <RevealOnScroll delay={100}>
                <ProfessionalBackground />
            </RevealOnScroll>

            {/* Get Started CTA */}
            <RevealOnScroll delay={100}>
                <GetStartedSection />
            </RevealOnScroll>
        </main>
    );
}
