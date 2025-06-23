import Link from "next/link";
import Image from "next/image";
import ProjectInfo from "@/components/metadata/project.json"

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
}

export default function Projects() {
  const projects: Project[] = ProjectInfo.project;

  return (
    <section className="py-16 bg-[#343e57] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#10E8CC] mb-16">Project</h2>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="
                bg-[#1E293B]
                rounded-lg
                p-6
                hover:border
                hover:border-[#10E8CC]
                transition-all
                duration-300
              "
            >
              <div className="md:flex md:gap-6 md:items-center">
                <div className={project.image ? "md:w-2/3" : "w-full"}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="text-sm text-gray-400">{project.period}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-[#0F172A] text-[#10E8CC] px-3 py-1 text-sm rounded-full"
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
                          text-white
                          bg-[#0F172A]
                          px-4
                          py-2
                          rounded-md
                          hover:bg-[#10E8CC]
                          hover:text-[#0F172A]
                          transition-colors
                          duration-300
                        "
                      >
                        GitHub
                      </Link>
                    )}
                    
                    {project.demo && (
                      <Link 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-white
                          bg-[#0F172A]
                          px-4
                          py-2
                          rounded-md
                          hover:bg-[#10E8CC]
                          hover:text-[#0F172A]
                          transition-colors
                          duration-300
                        "
                      >
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
                
                {project.image && (
                  <div className="mt-6 md:mt-0 md:w-1/3">
                    <div className="relative w-full rounded-lg overflow-hidden shadow-lg border border-[#0F172A] hover:border-[#10E8CC] transition-colors duration-300" style={{ paddingTop: "55%" }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}