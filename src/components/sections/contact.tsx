// components/Contact.tsx
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="w-full flex justify-center">
            <div className="flex w-full bg-[#0F172A] justify-center pb-20">

                {/* contact */}
                <div className="justify-start w-full px-6 py-3">
                    <div className="my-2">
                        <p className="text-[#FFFFFF] font-sans text-lg">Contact</p>
                    </div>
                    <a
                        href="mailto:your.email@example.com"
                        className="border-2 border-[#10E8CC] rounded-xl bg-[#343E57] py-1.5 px-3 w-fit flex justify-center items-center text-center my-3 text-[#ffffff]
                                   hover:bg-[#10E8EE] hover:text-[#343e57] hover:scale-105 hover:font-extrabold transition-all duration-500"
                    >
                        <FaEnvelope className="mr-2" />
                        <p className="font-medium">Email</p>
                    </a>
                </div>

                {/* connect */}
                <div className="justify-start w-full px-6 py-3">
                    <div className="my-2">
                        <p className="text-[#FFFFFF] font-sans text-lg">Connect</p>
                    </div>

                    <Link
                        href="https://github.com/your-username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-[#10E8CC] rounded-xl bg-[#343E57] py-1.5 px-3 w-fit flex justify-center items-center text-center my-3 text-[#ffffff]
                                   hover:bg-[#10E8EE] hover:text-[#0F172A] hover:scale-105 hover:font-extrabold transition-all duration-500"
                    >
                        <FaGithub className="mr-2" />
                        <p className="font-medium">Github</p>
                    </Link>

                    <Link
                        href="https://linkedin.com/in/your-username"
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
        </section>
    );
}
