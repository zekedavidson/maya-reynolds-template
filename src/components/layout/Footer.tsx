import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-[#FBF6F1] text-[#223614]'>
            {/* Main Footer Content */}
            <div className='w-full px-6 md:px-16 py-16 md:py-17'>
                <div className='flex flex-col md:flex-row justify-between items-start gap-12'>
                    {/* Left Column: Branding & Contact */}
                    <div className='flex flex-col space-y-6'>
                        <h3 className='text-4xl md:text-[50px] font-medium mb-10'>
                            Lilac Template
                        </h3>
                        <div className='space-y-1 text-base text-[22px]'>
                            <p>123 Example Road</p>
                            <p>Minneapolis, MN</p>
                        </div>
                        <div className='space-y-1 text-base mt-4'>
                            <p>
                                <a
                                    href="mailto:email@example.com"
                                    className='hover:underline text-[22px]'
                                >
                                    <u>email@example.com</u>
                                </a>
                            </p>
                            <p>
                                <a
                                    href="tel:5555555555"
                                    className='hover:underline text-[22px]'
                                >
                                    <u>(555) 555-5555</u>
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Hours and Find grouped together */}
                    <div className='flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-70'>
                        {/* Middle Column: Hours */}
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-4xl md:text-[50px] font-medium mb-2'>
                                Hours
                            </h3>
                            <div className='space-y-1 text-base text-[22px]'>
                                <p>Monday – Friday</p>
                                <p>10am – 6pm</p>
                            </div>
                        </div>

                        {/* Right Column: Navigation Links */}
                        <div className='flex flex-col gap-4 items-start md:items-end pb-40'>
                            <h3 className='text-4xl md:text-[50px] font-medium mb-2'>
                                Find
                            </h3>
                            <nav className='flex flex-col gap-2 text-base'>
                                <Link href="/" className='hover:underline w-fit text-[22px]'>
                                    <u>Home</u>
                                </Link>
                                <Link href="/contact" className='hover:underline w-fit text-[22px]'>
                                    <u>Contact</u>
                                </Link>
                                <Link href="/blog" className='hover:underline w-fit text-[22px]'>
                                    <u>Blog</u>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className='bg-[#E5E0DA]'>
                <div className='container mx-auto px-6 md:px-8 lg:px-12 py-16'>
                    {/* Legal Links */}
                    <div className='flex flex-wrap justify-center gap-3 md:gap-4 text-[17px] mb-4'>
                        <Link href="/privacy" className='hover:underline'>
                            <u>Privacy & Cookies Policy</u>
                        </Link>
                        <span className='hidden md:inline'>|</span>
                        <Link href="/good-faith" className='hover:underline'>
                            <u>Good Faith Estimate</u>
                        </Link>
                        <span className='hidden md:inline'>|</span>
                        <Link href="/terms" className='hover:underline'>
                            <u>Website Terms & Conditions</u>
                        </Link>
                        <span className='hidden md:inline'>|</span>
                        <Link href="/disclaimer" className='hover:underline'>
                            <u>Disclaimer</u>
                        </Link>
                    </div>

                    {/* Credits */}
                    <div className='text-center text-md mb-4'>
                        <p>
                            Website Template Credits:{' '}
                            <a
                                href="https://gobloomcreative.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='hover:underline'
                            >
                                <u>Go Bloom Creative</u>
                            </a>
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className='text-center text-md mt-20'>
                        <p>All Rights Reserved © 2024 Your Business Name Here, LLC</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
