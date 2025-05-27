import Link from "next/link";
import { FaGithub } from "react-icons/fa";


interface NavItem{
    label : string,
    href : string,
}

export default function Navbar(){

    const navItems : NavItem[] = [
        {label : "Skills", href : "#skills" },
        {label : "Project", href : "#projects" },
        {label : "Contact", href : "#contact" },
    ]

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] bg-opacity-70 backdrop-blur-md" >

            {/* logo / Name */}
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                href='/'
                className="text-xl font-bold text-[#10E8CC] hover:text-opacity-80 transiton-colors">
                    Charisma Rusdiyanto
                </Link>
            

                {/* menu and links */}
                <div className="flex items-center space-x-6">

                    {/* skills, project, and contact */}
                    <div className="flex space-x-6">
                        {navItems.map((item) => (
                            <Link
                            key={item.href}
                            href={item.href}
                            className="text-gray-300 hover:text-[#10E8CC] transition-colors"
                            >
                                {item.label}
                            </Link>
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
    title : "Charisma Rusdiyanto - Portofolio Navigation",
    description : "Navigation menu for personal portofolio website"
}

