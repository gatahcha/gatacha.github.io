import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"


interface SocialLink {
    icon : React.ReactNode,
    href : string,
    label : string
}

export default function Hero() {

    const socialLinks : SocialLink[] = [
        {
            icon : <FaLinkedin className="w-6 h-6 " />,
            href : 'https://www.linkedin.com/in/charisma-pramudya-286ab3230/',
            label : 'LinkedIn Profile',
        },
        {
            icon: <FaGithub className="w-6 h-6" />,
            href : 'https://github.com/gatahcha',
            label : 'gitHub profile'
        }

    ]
    
    return(
        <section className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 pt-16">
            <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center ">
                {/* text content */}
                <div className="space-y-6 text-white">
                    <p className="text-lg text-[#10E8CC]"> Hi everyone, I am</p>

                    <h1 className="text-5xl font-bold text-[#10E8CC] tracking-tight">
                        Charisma Rusdiyanto
                    </h1>

                    <p className="text-xl text-gray-300">
                        Third year computer engineering student at UBC.
                        I am interested in software development, Deep Learning, and Low-level programming.
                        
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-4">
                        {socialLinks.map( (link) => (
                            <Link 
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                flex items-center justify-center
                                w-12 h-12
                                bg-[#1E293B]
                                text-[#10E8CC]
                                font-semibold
                                rounded-md
                                hover:bg-[#10E8CC]
                                hover:text-[#0F172A]
                                transition-colors
                                duration-300
                                "
                                aria-label={link.label}
                                >
                                    {link.icon}
                                </Link>
                        ) )}
                    </div>
                </div>

                {/* Profile picture */}
                    <div className="justify-center items-center flex">
                        <div className="
                        w-80 h-80
                        rounded-full
                        border-4
                        overflow-hidden
                        border-[#10E8CC]
                        shadow-xl
                        transform
                        hover:scale-105
                        transition-transform
                        duration-500
                        ">
                            <Image
                                src="./images/profile.jpeg"
                                alt="Charisma Rusdiyanto"
                                width={320}
                                height={320}
                                priority
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
            </div>
        </section>
    )
}