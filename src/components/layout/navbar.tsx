"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

interface NavItem {
    label: string,
    target: string,
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navItems: NavItem[] = [
        { label: "Skills", target: "skills" },
        { label: "Project", target: "projects" },
        { label: "Contact", target: "contact" },
    ]

    // Function to handle smooth scrolling without changing URL
    const handleScroll = (targetId: string) => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setIsMenuOpen(false); // Close mobile menu after navigation
    };

    return (
        <>
            {/* Desktop & Tablet Navbar */}
            <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-fit group">
                {/* Glowing background effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#10E8CC] to-[#E879F9] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
                
                {/* Dynamic Island Container */}
                <div className="
                    relative
                    px-3 sm:px-6 py-2 sm:py-3
                    bg-[#1E293B]/90 
                    backdrop-blur-xl 
                    border border-gray-700
                    rounded-full
                    shadow-2xl
                    shadow-[#E879F9]/10
                    hover:shadow-[#E879F9]/20
                    hover:bg-[#334155]/90
                    transition-all duration-300
                    hover:scale-[1.02]
                    flex items-center justify-center
                    min-w-fit
                    max-w-[90vw]
                ">
                    
                    {/* Mobile Layout (screens < 640px) */}
                    <div className="flex sm:hidden items-center space-x-3 w-full justify-between">
                        {/* Logo */}
                        <button
                            onClick={() => handleScroll('hero')}
                            className="relative w-6 h-6 hover:scale-110 transition-transform duration-200 flex-shrink-0">
                            <Image 
                                alt="Logo"
                                src="./logo/logo.jpg"
                                fill={true}
                                className="object-cover rounded-full border border-gray-700" 
                            />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="
                                text-gray-300 
                                hover:text-[#10E8CC] 
                                transition-all duration-200
                                p-2
                                rounded-full
                                hover:bg-[#10E8CC]/10
                            "
                        >
                            <div className="w-4 h-4 flex flex-col justify-center space-y-1">
                                <div className={`w-4 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                                <div className={`w-4 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                                <div className={`w-4 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                            </div>
                        </button>

                        {/* Resume Button (always visible on mobile) */}
                        <Link
                            href="./pdffiles/Charisma_CV_Software_Engineer.pdf"
                            target="_blank"
                            className="
                                px-3 py-1.5
                                bg-gradient-to-r from-[#10E8CC] to-[#0EA5E9]
                                rounded-full
                                text-black
                                text-xs
                                font-semibold
                                hover:shadow-lg
                                hover:shadow-[#10E8CC]/30
                                transition-all duration-200
                                hover:scale-105
                                whitespace-nowrap
                                flex-shrink-0
                            ">
                            CV
                        </Link>
                    </div>

                    {/* Desktop/Tablet Layout (screens >= 640px) */}
                    <div className="hidden sm:flex items-center space-x-4 lg:space-x-6">
                        {/* Logo */}
                        <button
                            onClick={() => handleScroll('hero')}
                            className="relative w-8 h-8 hover:scale-110 transition-transform duration-200">
                            <Image 
                                alt="Logo"
                                src="./logo/logo.jpg"
                                fill={true}
                                className="object-cover rounded-full border border-gray-700" 
                            />
                        </button>

                        {/* Navigation Links */}
                        <div className="flex space-x-2 lg:space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.target}
                                    onClick={() => handleScroll(item.target)}
                                    className="
                                        text-gray-300 
                                        hover:text-[#10E8CC] 
                                        transition-all duration-200
                                        px-2 lg:px-3 py-1.5
                                        rounded-full
                                        hover:bg-[#10E8CC]/10
                                        text-xs lg:text-sm font-medium
                                        whitespace-nowrap
                                    "
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

                        {/* Action Items */}
                        <div className="flex items-center space-x-2 lg:space-x-3">
                            {/* GitHub Icon */}
                            <Link
                                href="https://github.com/gatahcha"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="
                                    text-gray-300 
                                    hover:text-[#10E8CC] 
                                    transition-all duration-200
                                    hover:scale-110
                                    p-1.5 lg:p-2
                                    rounded-full
                                    hover:bg-[#10E8CC]/10
                                "
                            >
                                <FaGithub className="w-3 lg:w-4 h-3 lg:h-4" />
                            </Link>

                            {/* Resume Button */}
                            <Link
                                href="./pdffiles/Charisma_CV_Software_Engineer.pdf"
                                target="_blank"
                                className="
                                    px-3 lg:px-4 py-1.5 lg:py-2
                                    bg-gradient-to-r from-[#10E8CC] to-[#0EA5E9]
                                    rounded-full
                                    text-black
                                    text-xs lg:text-sm
                                    font-semibold
                                    hover:shadow-lg
                                    hover:shadow-[#10E8CC]/30
                                    transition-all duration-200
                                    hover:scale-105
                                    whitespace-nowrap
                                ">
                                Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="sm:hidden fixed top-16 left-1/2 transform -translate-x-1/2 z-40 w-[90vw] max-w-sm group">
                    {/* Glowing background effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#10E8CC] to-[#E879F9] rounded-2xl opacity-20 transition-opacity duration-300 blur-sm"></div>
                    
                    <div className="
                        relative
                        bg-[#1E293B]/95 
                        backdrop-blur-xl 
                        border border-gray-700
                        rounded-2xl
                        shadow-2xl
                        shadow-[#E879F9]/10
                        p-4
                        space-y-3
                    ">
                        {/* Navigation Links */}
                        {navItems.map((item) => (
                            <button
                                key={item.target}
                                onClick={() => handleScroll(item.target)}
                                className="
                                    w-full
                                    text-gray-300 
                                    hover:text-[#10E8CC] 
                                    transition-all duration-200
                                    px-4 py-3
                                    rounded-xl
                                    hover:bg-[#10E8CC]/10
                                    text-sm font-medium
                                    text-left
                                "
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* Divider */}
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-2"></div>

                        {/* GitHub Link */}
                        <Link
                            href="https://github.com/gatahcha"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="
                                w-full
                                text-gray-300 
                                hover:text-[#10E8CC] 
                                transition-all duration-200
                                px-4 py-3
                                rounded-xl
                                hover:bg-[#10E8CC]/10
                                text-sm font-medium
                                text-left
                                flex items-center space-x-3
                            "
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <FaGithub className="w-4 h-4" />
                            <span>GitHub</span>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

// metadata for SEO and accessibility
export const metadata = {
    title: "Charisma Rusdiyanto - Portfolio Navigation",
    description: "Navigation menu for personal portfolio website"
}