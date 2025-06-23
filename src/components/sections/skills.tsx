"use client"

import SkillCard from "../ui/skillcard"
import SkillsInfo from "@/components/metadata/skills.json"
import { useState } from "react"


export default function Skills() {
    const [showAll, setShowAll] = useState(false);
    const displayedSkills = SkillsInfo.skills;
    
    // Show limited skills for 3 lines (approximately 15 skills)
    const visibleSkills = showAll ? displayedSkills : displayedSkills.slice(0, 15);
    const hasMoreSkills = displayedSkills.length > 15;

    return (
        <section className="w-full min-h-[75vh] py-16 bg-[#0F172A] relative overflow-hidden flex flex-col justify-center">
        

            {/* Main content container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 flex-grow flex flex-col justify-center">
                
                {/* Title Section */}
                <div className="text-center mb-16">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">MY SKILLS</p>
                    <h2 className="text-5xl md:text-6xl font-bold">
                        <span className="text-white">The Tech </span>
                        <span className="bg-gradient-to-r from-[#0EA5E9] to-[#3B82F6] bg-clip-text text-transparent">
                            ARSENAL
                        </span>
                    </h2>
                </div>

                {/* Skills Flow Layout */}
                <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-8">
                    {visibleSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="transform transition-all duration-300 hover:scale-105"
                        >
                            <SkillCard name={skill.name} image={skill.icon} />
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                {hasMoreSkills && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="
                                px-6 py-3
                                bg-gradient-to-r from-[#10E8CC] to-[#0EA5E9]
                                text-black
                                rounded-full
                                font-semibold
                                text-sm
                                hover:shadow-lg
                                hover:shadow-[#10E8CC]/30
                                transition-all duration-300
                                hover:scale-105
                                border border-[#10E8CC]/20
                                backdrop-blur-sm
                            "
                        >
                            {showAll ? 'Show Less' : `See More (${displayedSkills.length - 15} more)`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}