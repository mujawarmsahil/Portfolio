import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {useState} from "react"
import link from "../assets/link.png"
import view from "../assets/view.png"
export default function Project({details}) {
    const[imgUrl,setImgUrl] = useState(details[3]) 
    const[heading,setHeading] = useState(details[0]) 
    const[repoUrl,setRepoUrl] = useState(details[1])
    const[siteUrl,setSiteUrl] = useState(details[2])

    return(
        <div className="p-4 relative mt-2 group overflow-hidden bg-black bg-opacity-65 hover:shadow-[0px_0px_10px_1px_#646cff] rounded-[20px] border-2 border-transparent hover:border-[#646cff] transition-all duration-500 delay-75 border-opacity-45">
            <div className="object-fill">
                <img src={imgUrl} alt="hello" className="md:w-[300px] md:h-[200px] sm:w-[250px] mx-auto sm:h-[200px] group-hover:opacity-50 transition-opacity duration-300"/>
                <p className="text-center text-[20px] group-hover:text-[#646cff]">{heading}</p>
            </div>
            <div className="flex gap-[10px] absolute left-[50%] top-[150%] group-hover:top-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-500 delay-75">
                <a href={siteUrl} target="_blank" ><button className="bg-white rounded bg-opacity-75" type="button"><img src={link} alt="" className="w-[25px] h-[25px]"/></button></a>
                <a href={repoUrl} target="_blank" ><button type="button" className="bg-white rounded bg-opacity-75"><img src={view} alt="" className="w-[25px] h-[25px] "/></button></a>
            </div>
        </div>
    )
}

Project.propTypes = {
    details : PropTypes.array.isRequired,
}