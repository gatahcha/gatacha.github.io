import Image from "next/image";

interface skillProps {
    name: string,
    image: string
}

export default function SkillCard({ name, image }: skillProps) {
    return (
        <div className="group relative">
            {/* Glowing background effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#10E8CC] to-[#E879F9] rounded-full opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-sm"></div>
            
            {/* Main card */}
            <div className="relative flex items-center space-x-2 sm:space-x-3 px-2 sm:px-3 py-1.5 sm:py-2 bg-[#1E293B] border border-gray-700 rounded-full hover:bg-[#334155] transition-all duration-300 group-hover:border-[#10E8CC] min-w-fit">
                
                {/* Icon container */}
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                    <Image 
                        alt={name || "Skill icon"}
                        src={image}
                        fill={true}
                        className="object-contain filter group-hover:brightness-110 transition-all duration-300" 
                    />
                </div>
                
                {/* Skill name */}
                <span className="text-gray-300 group-hover:text-white font-medium text-xs sm:text-sm whitespace-nowrap transition-colors duration-300">
                    {name}
                </span>
            </div>
        </div>
    )
}