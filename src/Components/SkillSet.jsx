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
                                (<div key={index} className="border-2 border-transparent p-4">
                                    <img className="hover:scale-105 hover:drop-shadow-[0_4px_4px_rgba(255,255,255,0.3)] transition-all delay-100 duration-200" src={each.logo} alt={`Skill ${index}`} width="120px" height="120px"/>
                                    <div className="w-full h-[10px] flex justify-start items-center p-2 ps-1  mt-6  rounded overflow-hidden bg-[#00000075]">
                                        <div className={`h-[8px] rounded bg-white`} style={{ width: each.skilled }}></div>
                                    </div>
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





