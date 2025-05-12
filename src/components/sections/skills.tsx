"use client"

import SkillCard from "../ui/skillcard"


interface SkillItem {
    name : string,
    icon : string,
}


export default function Skills() {

    //const [ showAll, setShowAll_ ] = useState(false);
  
    const skillItems : SkillItem[] = [
        { "name": "Next.js", "icon": "./icons/nextjs.svg" },
        { "name": "React", "icon": "./icons/react.svg" },
        { "name": "Flutter", "icon": "./icons/flutter.svg" },
        { "name": "OpenCV", "icon": "./icons/opencv.svg" },
        { "name": "PyTorch", "icon": "./icons/pytorch.svg" },
        { "name": "TensorFlow", "icon": "./icons/tensorflow.svg" },
        { "name": "Firebase", "icon": "./icons/firebase.svg" },
        { "name": "MongoDB", "icon": "./icons/mongodb.svg" },
        { "name": "SQLite", "icon": "./icons/sqlite.svg" },
        { "name": "Node.js", "icon": "./icons/nodejs.svg" },
        { "name": "AWS", "icon": "./icons/aws.svg" },
        { "name": "Google Cloud Platform", "icon": "./icons/google_cloud.svg" },
        { "name": "Python", "icon": "./icons/python.svg" },
        { "name": "TypeScript", "icon": "./icons/typescript.svg" },
        { "name": "Java", "icon": "./icons/java.svg" },
        { "name": "R", "icon": "./icons/r.svg" },
        { "name": "C", "icon": "./icons/c.svg" },
        { "name": "C++", "icon": "./icons/c++.svg" },
        { "name": "Dart", "icon": "./icons/dart.svg" },
        { "name": "HTML", "icon": "./icons/html.svg" },
        { "name": "CSS", "icon": "./icons/css.svg" },
        { "name": "MATLAB", "icon": "./icons/matlab.svg" }
    ]

    const displayedSkills = skillItems; // showAll ? skillItems : skillItems;

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