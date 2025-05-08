// src/components/sections/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Social link interface
interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export default function HeroSection() {
  // Social links configuration
  const socialLinks: SocialLink[] = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/yourusername',
      label: 'LinkedIn Profile'
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub Profile'
    }
  ];

  return (
    <section className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6 text-white">
          <p className="text-lg text-[#10E8CC]">Hi everyone, I am</p>
          
          <h1 className="text-5xl font-bold text-[#10E8CC] tracking-tight">
            Charisma Rusdiyanto
          </h1>
          
          <p className="text-xl text-gray-300">
            Third year computer engineering student at UBC. 
            I am interested in software development, AI, and Low-level programming.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center 
                  w-12 h-12 
                  bg-[#1E293B] 
                  text-[#10E8CC] 
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
            ))}
          </div>

          {/* Hit Me Up Buttons */}
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 
                bg-[#10E8CC] 
                text-[#0F172A] 
                font-semibold 
                rounded-md 
                hover:bg-opacity-90 
                transition-colors 
                duration-300
              "
            >
              LinkedIn
            </Link>
            
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 
                border border-[#10E8CC] 
                text-[#10E8CC] 
                font-semibold 
                rounded-md 
                hover:bg-[#10E8CC] 
                hover:text-[#0F172A] 
                transition-colors 
                duration-300
              "
            >
              Github
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <div className="
            w-80 h-80 
            rounded-full 
            overflow-hidden 
            border-4 
            border-[#10E8CC] 
            shadow-lg 
            transform 
            hover:scale-105 
            transition-transform 
            duration-300
          ">
            <Image
              src="/images/profile2.jpeg"  // Update with your actual profile image path
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
  );
}

// Metadata for SEO
export const metadata = {
  title: 'Charisma Rusdiyanto - Software Engineering Student',
  description: 'Personal portfolio of Charisma Rusdiyanto, computer engineering student at UBC',
  keywords: ['software development', 'computer engineering', 'UBC', 'portfolio']
};