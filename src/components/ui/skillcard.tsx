import Image from "next/image";

interface skillProps {
    name : string,
    image : string
}


export default function SkillCard( {name, image} : skillProps ){

    return(
        <div className="flex justify-center p-2"> 
            <div className="bg-[#0F172A] h-44 w-full border-2 text-white border-[#10E8CC] rounded-2xl justify-center text-center items-center flex flex-col hover:bg-[#ffffff] hover:text-[#0F172A] hover:scale-105 transition-all hover:duration-700">
                <div className="relative w-20 h-20 flex items-center justify-center">
                    <Image 
                    alt={name || "Skill icon"}
                    src={image}
                    sizes="5rem"
                    fill={true}
                    className="object-contain p-1 " />
                </div>
                <p className="text-sm font-medium truncate w-full">{name}</p>
            </div>
        </div>
    )
}