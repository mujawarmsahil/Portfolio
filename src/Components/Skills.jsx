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
import Postman from "../assets/skills/Postman.png"
import Spring from "../assets/skills/Spring.png"
import Tailwind from "../assets/skills/tailwind.png"
import { useState } from "react"
import SkillSet from "./SkillSet"

export default function Skills(){
    const[skillSet,setSkillSet] = useState([
        ["Programming Language", {logo : C,skilled : "80%"}, {logo :CPP,skilled : "80%"},{logo : Java,skilled : "80%"}],
        ["Front-End Technologies", {logo :HTML,skilled : "90%"}, {logo :CSS,skilled : "90%"}, {logo :JavaScript,skilled : "80%"}],
        ["Framework", {logo :Maven,skilled:"50%"}, {logo :Bootstrap,skilled : "80%"},{logo :Tailwind,skilled : "80%"},{logo:Spring,skilled:"60%"}],
        ["Library", {logo :ReactImg,skilled : "70%"}],
        ["Version Control",{ logo :Git,skilled : "60%"}, {logo :Github,skilled : "60%"}],
        ["Testing Tool",{logo : Postman,skilled:"70%"}]
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