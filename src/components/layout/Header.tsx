'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    React.useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY

                // Always show if at the top or if menu is open
                if (currentScrollY < 10 || isMenuOpen) {
                    setIsVisible(true)
                } else {
                    // Show if scrolling up, hide if scrolling down
                    if (currentScrollY < lastScrollY) {
                        setIsVisible(true)
                    } else {
                        setIsVisible(false)
                    }
                }
                setLastScrollY(currentScrollY)
            }
        }

        window.addEventListener('scroll', controlNavbar)

        // Cleanup
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY, isMenuOpen])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        // Ensure navbar is visible when menu is opened
        if (!isMenuOpen) setIsVisible(true)
    }

    return (
        <>
            <header
                className={`w-full bg-background sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                <nav className="w-full mx-auto px-6 md:px-19 py-3 flex items-center justify-between">
                    {/* Burger Menu Icon - Shows on mobile (< 799px), positioned on LEFT */}
                    <button
                        onClick={toggleMenu}
                        className="flex flex-col gap-1.5 md:hidden z-50"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>

                    {/* Logo/Brand - On mobile goes to RIGHT, on desktop stays LEFT */}
                    <Link href="/" className="text-foreground transition-opacity font-medium md:order-first" style={{ fontSize: 'clamp(18px, 2vw + 12px, 41px)' }}>
                        Dr. Maya Reynolds
                    </Link>

                    {/* Desktop Navigation Links - Hidden on mobile (< 799px) */}
                    <div className="hidden md:flex items-center gap-15">
                        <Link
                            href="/blog"
                            className="text-foreground hover:opacity-70 transition-opacity"
                            style={{ fontSize: 'clamp(14px, 1.5vw + 8px, 21px)' }}
                        >
                            Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="text-foreground hover:opacity-70 transition-opacity"
                            style={{ fontSize: 'clamp(14px, 1.5vw + 8px, 21px)' }}
                        >
                            Contact
                        </Link>
                        <Link
                            href="/our-office"
                            className="text-foreground hover:opacity-70 transition-opacity"
                            style={{ fontSize: 'clamp(14px, 1.5vw + 8px, 21px)' }}
                        >
                            Our Office
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Dropdown - Now OUTSIDE header to escape transform containing block */}
            <div className={`md:hidden fixed inset-0 bg-background transition-all duration-300 z-40 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-screen gap-8">
                    <Link
                        href="/blog"
                        className="text-foreground hover:opacity-70 transition-opacity font-medium"
                        style={{ fontSize: 'clamp(32px, 5vw + 20px, 48px)' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className="text-foreground hover:opacity-70 transition-opacity font-medium"
                        style={{ fontSize: 'clamp(32px, 5vw + 20px, 48px)' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/our-office"
                        className="text-foreground hover:opacity-70 transition-opacity"
                        style={{ fontSize: 'clamp(32px, 5vw + 20px, 48px)' }}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Our Office
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header   
