import Bootstrap from "../assets/skills/bootstrap.png"
import C from "../assets/skills/c.png"
import CPP from "../assets/skills/c++.png"
import HTML from "../assets/skills/html.png"
import CSS from "../assets/skills/css.png"
import JavaScript from "../assets/skills/javascript.png"
import ReactImg from "../assets/skills/react.png"
import Maven from "../assets/skills/maven.svg"
import Java from "../assets/skills/java.png"
import Git from "../assets/skills/git.png"
import Github from "../assets/skills/github.png"
import Tailwind from "../assets/skills/tailwind.png"
import { useState } from "react"
import SkillSet from "./SkillSet"

export default function Skills(){
    const[skillSet,setSkillSet] = useState([
        ["Programming Language", C, CPP, Java],
        ["Front-End Technologies", HTML, CSS, JavaScript],
        ["Framework", Maven, Bootstrap,Tailwind],
        ["Library", ReactImg],
        ["Version Control", Git, Github],
    ])
    
    return(
        <>
            <div className="w-full min-h-screen py-8 flex flex-col justify-center">
            {
                    skillSet.map((skill,index)=>{
                        return <SkillSet key={index} skill={skill}/>
                    })
            }
            </div>
        </>
    )
}