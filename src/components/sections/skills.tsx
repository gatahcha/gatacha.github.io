"use client"

import SkillCard from "../ui/skillcard"
import SkillsInfo from "@/components/metadata/skills.json"


interface SkillItem {
    name : string,
    icon : string,
}


export default function Skills() {

    //const [ showAll, setShowAll_ ] = useState(false);
  
    

    const displayedSkills = SkillsInfo.skills;

    return(
        <section className="w-full py-12 bg-[#121C30] ">

            {/* Skills text */}
            <h2 className="text-3xl font-semibold text-center text-[#10E8CC] text-primary mb-8" >Skills</h2>

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