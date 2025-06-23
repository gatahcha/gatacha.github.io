"use client"

import SkillCard from "../ui/skillcard"
import skillsData from "@/components/metadata/skills.json"

interface SkillItem {
    name: string,
    icon: string,
}

export default function Skills() {
    // Flatten all skill categories into a single array
    const getAllSkills = (): SkillItem[] => {
        const allSkills: SkillItem[] = [];
        
        // Add skills from all categories
        allSkills.push(...skillsData.programmingLanguages);
        allSkills.push(...skillsData.webTechnologies);
        allSkills.push(...skillsData.backendTechnologies);
        allSkills.push(...skillsData.cloudAndDevOps);
        allSkills.push(...skillsData.mobileDevelopment);
        allSkills.push(...skillsData.otherTools);
        
        return allSkills;
    };

    const skillItems = getAllSkills();
    const displayedSkills = skillItems;

    return (
        <section className="w-full py-12 bg-[#121C30]">
            {/* Skills text */}
            <h2 className="text-3xl font-semibold text-center text-[#10E8CC] text-primary mb-8">Skills</h2>

            {/* skill grid container with border */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4 rounded-3xl border-[#10E8CC] border-2 p-8 mx-auto my-4 w-[85%] bg-[#343e57]">
                {
                    displayedSkills.map((item) => (
                        <SkillCard 
                            name={item.name} 
                            image={item.icon}
                            key={item.name} 
                        />
                    ))
                }
            </div>
        </section>
    )
}