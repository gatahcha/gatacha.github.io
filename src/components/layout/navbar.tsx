import Link from "next/link";


interface NavItem{
    label : string,
    href : string,
}

export default function Navbar(){

    const navItems : NavItem[] = [
        {label : "Blog", href : "\blog" },
        {label : "Project", href : "\project" },
        {label : "Contact", href : "\contact" },
    ]

    return(
        <nav className="fixed top-0 left-0 z-50 bg-[#0F172A] bg-opacity-70 backdrop-blur-md" >

            {/* logo / Name */}
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                href='/'
                className="text-xl font-bold text-[#10E8CC] hover:text-opacity-80 transiton-colors">
                    Charisma Rusdiyanto
                </Link>
            </div>

            {/* menu and links */}
            <div className="flex items-center space-x-4">

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
                <div className="flex space-x-6">
                    {/* github */}
                    
                </div>
            </div>
        </nav>
    )
}

