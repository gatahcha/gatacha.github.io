import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  period: string;
  github?: string;
  demo?: string;
  image?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative">

      {/* Main card */}
      <div className="
        relative
        bg-[#1E293B]
        border border-gray-700
        rounded-lg
        p-6
        hover:bg-[#334155]
        hover:border-[#10E8CC]
        transition-all
        duration-300
        hover:shadow-[#E879F9]/15
      ">
        <div className="md:flex md:gap-6 md:items-center">
          <div className={project.image ? "md:w-2/3" : "w-full"}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors duration-300">
                {project.title}
              </h3>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {project.period}
              </span>
            </div>
            
            <p className="text-gray-300 group-hover:text-gray-200 mb-4 transition-colors duration-300">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="
                    bg-[#0F172A] 
                    text-[#10E8CC] 
                    px-3 py-1 
                    text-sm 
                    rounded-full
                    border border-gray-600
                    group-hover:border-[#10E8CC]
                    group-hover:bg-[#1E293B]
                    transition-all duration-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4 mt-4">
              {project.github && (
                <Link 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    bg-[#0F172A]
                    border border-gray-600
                    px-4
                    py-2
                    rounded-md
                    hover:bg-[#10E8CC]
                    hover:text-[#0F172A]
                    hover:border-[#10E8CC]
                    transition-all
                    duration-300
                    font-medium
                  "
                >
                  GitHub
                </Link>
              )}

              {project.link && (
                <Link 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    bg-[#0F172A]
                    border border-gray-600
                    px-4
                    py-2
                    rounded-md
                    hover:bg-[#10E8CC]
                    hover:text-[#0F172A]
                    hover:border-[#10E8CC]
                    transition-all
                    duration-300
                    font-medium
                  "
                >
                  Link
                </Link>
              )}
              
              {project.demo && (
                <Link 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-gray-300
                    bg-[#0F172A]
                    border border-gray-600
                    px-4
                    py-2
                    rounded-md
                    hover:bg-[#10E8CC]
                    hover:text-[#0F172A]
                    hover:border-[#10E8CC]
                    transition-all
                    duration-300
                    font-medium
                  "
                >
                  Demo
                </Link>
              )}
            </div>
          </div>
          
          {project.image && (
            <div className="mt-6 md:mt-0 md:w-1/3">
              <div className="
                relative 
                w-full 
                rounded-lg 
                overflow-hidden 
                shadow-lg 
                border border-gray-600 
                group-hover:border-[#10E8CC] 
                transition-all duration-300
                group-hover:shadow-[#E879F9]/20
              " style={{ paddingTop: "55%" }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:brightness-110 transition-all duration-300"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}