import Personal from "../assets/Personal.png"
import Pdf from "../assets/cv/SahilMujawar.pdf"

export default function Profile() {
    return(<>
        <div className="w-full min-h-[80vh] flex items-center md:flex-row sm:flex-col">
            <div className="md:h-full  w-2/4 flex justify-center items-center object-contain"><img src={Personal} alt="" width="500px " height="250px" className="drop-shadow-[0_4px_6px_rgba(0,10,55,0.7)]"/></div>
            <div className="md:h-full w-2/4 flex flex-col justify-center items-center  px-3">
                <h1 >SAHIL M. MUJAWAR</h1>
                <div className="flex flex-col gap-5">
                    <h2 className="font-medium text-2xl text-[#535bf2] underline">
                        WEB DESIGNER
                    </h2>
                    <p className="text-start">
                        <q>
                            I am a driven and adaptable student, currently pursuing a career in full stack development. Constantly seeking growth and new challenges, I embrace opportunities to expand my knowledge and skills. My transition from civil engineering to technology has strengthened my ability to adapt and pursue continuous progress. With a strong problem-solving mindset, I am focused on innovation and always look for ways to evolve and achieve greater success in both my academic and professional journey.
                        </q>
                    </p>
                    <div>
                        <button type="button"><a download={Pdf} href={Pdf}>Download Resume</a></button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}