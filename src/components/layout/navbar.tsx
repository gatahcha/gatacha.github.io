"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface NavItem {
    label: string,
    target: string, // Changed from href to target (the section ID)
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] bg-opacity-70 backdrop-blur-md">
            {/* logo / Name */}
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    href='/'
                    className="text-xl font-bold text-[#10E8CC] hover:text-opacity-80 transition-colors">
                    Charisma Rusdiyanto
                </Link>

                {/* menu and links */}
                <div className="flex items-center space-x-6">
                    {/* skills, project, and contact */}
                    <div className="flex space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.target}
                                onClick={() => handleScroll(item.target)}
                                className="text-gray-300 hover:text-[#10E8CC] transition-colors cursor-pointer"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* github and resume */}
                    <div className="flex space-x-6 justify-center items-center">
                        {/* github icon */}
                        <Link
                            href="https://github.com/gatahcha"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-gray-300 hover:text-[#10E8CC] transition-colors duration-200"
                        >
                            <FaGithub className="w-6 h-6" />
                        </Link>

                        {/* resume button */}
                        <Link
                            href={"./pdffiles/Charisma_CV_Software_Engineer.pdf"}
                            target="_blank"
                            className="
                            px-4 py-2
                            bg-[#10E8CC]
                            rounded-md
                            text-black
                            hover:bg-opacity-80
                            transition-colors
                            text-sm
                            font-medium
                            ">
                            My Resume
                        </Link>
                    </div>
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