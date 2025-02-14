import {NavLink} from "react-router-dom"

export default function Header(){
    return(
        <>
            <header className="w-full  z-10">
                <nav className=" ms-auto w-4/5 rounded-l-full ">
                    <ul className="flex   h-[100px] justify-around items-center bg-gray-800 rounded-bl-[100px] w-full z-10 border-2 border-transparent shadow-[inset_0_-5px_10px_1px_#000]">
                        <li>
                            <NavLink to="/" className={({isActive})=>{
                                return `hover:text-white border-2 border-transparent pb-2 ${isActive ? "text-gray-400 border-b-gray-400" : ""} `
                            }}>Profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className={({isActive})=>{
                                return `hover:text-white border-2 border-transparent pb-2 ${isActive ? "text-gray-400 border-b-gray-400" : ""} `
                            }}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/education" className={({isActive})=>{
                                return `hover:text-white border-2 border-transparent pb-2 ${isActive ? "text-gray-400 border-b-gray-400" : ""} `
                            }}>Education</NavLink>
                        </li>
                        <li>
                            <NavLink to="/handles" className={({isActive})=>{
                                return `hover:text-white border-2 border-transparent pb-2 ${isActive ? "text-gray-400 border-b-gray-400" : ""} `
                            }}>Handles</NavLink>
                        </li>
                        <li>
                            <NavLink to="/skill" className={({isActive})=>{
                                return `hover:text-white border-2 border-transparent pb-2 ${isActive ? "text-gray-400 border-b-gray-400" : ""} `
                            }}>Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({isActive})=>{
                                return `hover:text-white border-2 border-transparent pb-2 ${isActive ? "text-gray-400 border-b-gray-400" : ""} `
                            }}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}