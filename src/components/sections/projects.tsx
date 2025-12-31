import ProjectCard from "@/components/ui/projectcard";
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
  link?: string;
}

export default function Projects() {
  const projects: Project[] = ProjectInfo.project;

  return (
    <section className="py-16 bg-[#0F172A] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center md:text-6xl font-bold mb-16">
            <span className="bg-linear-to-r from-[#0EA5E9] to-[#3B82F6] bg-clip-text text-transparent">
                Projects
            </span>
        </h2>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}