

import ExperienceCard from "@/components/ui/experiencecard"
import ExperienceInfo from "@/components/metadata/experience.json"
import { ProjectCardProps, Project } from "../ui/projectcard"


export default function Experiences() {

    const projects : Project[] = ExperienceInfo.experinece;

    return (
        <section className="py-16 bg-[#0F172A] px-4">
            <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl text-center md:text-6xl font-bold mb-16">
                <span className="bg-linear-to-r from-[#0EA5E9] to-[#3B82F6] bg-clip-text text-transparent">
                    Experiences
                </span>
            </h2>
            
            <div className="space-y-8">
                {projects.map((project) => (
                <ExperienceCard
                    key={project.id}
                    project={project}
                />
                ))}
            </div>
            </div>
        </section>
    )
}