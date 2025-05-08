import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

// Define menu items type
interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  // Navigation menu items
  const navItems: NavItem[] = [
    { label: 'Blog', href: '/blog' },
    { label: 'Project', href: '/projects' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] bg-opacity-70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Name/Logo on the left */}
        <Link 
          href="/" 
          className="text-xl font-bold text-[#10E8CC] hover:text-opacity-80 transition-colors"
        >
          Charisma Rusdiyanto
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {/* Main Navigation Items */}
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

          {/* GitHub Link with Resume Button */}
          <div className="flex items-center space-x-4">
            {/* GitHub Icon */}
            <Link 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#10E8CC] transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </Link>

            {/* Resume Button */}
            <Link
              href="/resume.pdf"
              target="_blank"
              className="
                px-4 py-2 
                bg-[#10E8CC] 
                text-black 
                rounded-md 
                hover:bg-opacity-80 
                transition-colors 
                text-sm 
                font-medium
              "
            >
              My Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Metadata for SEO and accessibility
export const metadata = {
  title: 'Charisma Rusdiyanto - Portfolio Navigation',
  description: 'Navigation menu for personal portfolio website'
};