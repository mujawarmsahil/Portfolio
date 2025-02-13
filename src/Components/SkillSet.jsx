import PropTypes from "prop-types";
export default function SkillSet({skill}){
    return(
        <>
            <div className=" mx-auto  my-5">
                <h2 className="text-2xl text-sky-200">{skill[0]}</h2>
                <div className="flex md:w-[400px] sm:w-[250px] flex-wrap gap-5 justify-around mt-5 text-center">
                    {
                        skill.map((each, index) => {
                            return index > 0 ? 
                                (<div key={index} className="border-2 border-transparent p-2">
                                    <img className="hover:scale-105 hover:drop-shadow-[0_4px_6px_rgba(100,108,255,0.5)] transition delay-100 duration-150" src={each} alt={`Skill ${index}`} width="120px" height="120px" onError={(e) => { e.target.onerror = null; e.target.src="default-image-url.jpg"; }}/>
                                </div>) : null;
                        })
                    }
                </div>
            </div>
        </>
    )
}

SkillSet.propTypes = {
    skill : PropTypes.array.isRequired,
};





