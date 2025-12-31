// components/Contact.tsx
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Connect() {
    return (
        <section className="w-full flex justify-center">

            <div className="w-full bg-[#0F172A] justify-center pb-20">
                
                <div className="my-2 px-6">
                        <p className="text-[#FFFFFF] font-sans text-2xl">Connect</p>
                </div>

                <div className="flex">
                    {/* connect */}
                    <div className="justify-start w-full px-6 py-3">
                        
                        <a
                            href="mailto:charismaformal@gmail.com"
                            className="border-2 border-[#10E8CC] rounded-xl bg-[#343E57] py-1.5 px-3 w-fit flex justify-center items-center text-center my-3 text-[#ffffff]
                                    hover:bg-[#10E8EE] hover:text-[#343e57] hover:scale-105 hover:font-extrabold transition-all duration-500"
                        >
                            <FaEnvelope className="mr-2" />
                            <p className="font-medium">Email</p>
                        </a>
                    </div>

                    {/* connect */}
                    <div className="justify-start w-full px-6 py-3">

                        <Link
                            href="https://github.com/gatahcha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-[#10E8CC] rounded-xl bg-[#343E57] py-1.5 px-3 w-fit flex justify-center items-center text-center my-3 text-[#ffffff]
                                    hover:bg-[#10E8EE] hover:text-[#0F172A] hover:scale-105 hover:font-extrabold transition-all duration-500"
                        >
                            <FaGithub className="mr-2" />
                            <p className="font-medium">Github</p>
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/charisma-pramudya-286ab3230/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-[#10E8CC] rounded-xl bg-[#343E57] py-1.5 px-3 w-fit flex justify-center items-center text-center my-3 text-[#ffffff]
                                    hover:bg-[#10E8EE] hover:text-[#0F172A] hover:scale-105 hover:font-extrabold transition-all duration-500"
                        >
                            <FaLinkedin className="mr-2" />
                            <p className="font-medium">Linkedin</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
