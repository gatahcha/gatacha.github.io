"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

interface NavItem {
    label: string,
    target: string,
}

export default function Navbar() {
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
    };

    return (
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
            {/* Dynamic Island Container */}
            <div className="
                px-6 py-3
                bg-[#0F172A]/80 
                backdrop-blur-xl 
                border border-[#10E8CC]/20
                rounded-full
                shadow-2xl
                shadow-[#10E8CC]/10
                hover:shadow-[#10E8CC]/20
                transition-all duration-300
                hover:scale-[1.02]
                flex items-center space-x-6
                min-w-fit
            ">
                {/* Logo */}
                <Link
                    href='/'
                    className="relative w-8 h-8 hover:scale-110 transition-transform duration-200">
                    <Image 
                        alt="Logo"
                        src="./logo/logo.jpg"
                        fill={true}
                        className="object-cover rounded-full border border-[#10E8CC]/30" 
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-4">
                    {navItems.map((item) => (
                        <button
                            key={item.target}
                            onClick={() => handleScroll(item.target)}
                            className="
                                text-gray-300 
                                hover:text-[#10E8CC] 
                                transition-all duration-200
                                px-3 py-1.5
                                rounded-full
                                hover:bg-[#10E8CC]/10
                                text-sm font-medium
                                whitespace-nowrap
                            "
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-[#10E8CC]/30 to-transparent"></div>

                {/* Action Items */}
                <div className="flex items-center space-x-3">
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
                            p-2
                            rounded-full
                            hover:bg-[#10E8CC]/10
                        "
                    >
                        <FaGithub className="w-4 h-4" />
                    </Link>

                    {/* Resume Button */}
                    <Link
                        href="./pdffiles/Charisma_CV_Software_Engineer.pdf"
                        target="_blank"
                        className="
                            px-4 py-2
                            bg-gradient-to-r from-[#10E8CC] to-[#0EA5E9]
                            rounded-full
                            text-black
                            text-sm
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
        </nav>
    )
}

// metadata for SEO and accessibility
export const metadata = {
    title: "Charisma Rusdiyanto - Portfolio Navigation",
    description: "Navigation menu for personal portfolio website"
}