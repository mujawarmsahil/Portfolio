export default function Handles(){
    return(
        <>
            <div className="w-full min-h-[80vh] flex flex-col gap-4 justify-center items-center " >
                <h2 className="md:text-5xl sm:text-3xl">Watch Me Here</h2>
                <ul className="flex flex-col gap-6 text-center">
                    <li className="bg-black p-3 transition-all  duration-300  rounded border-2 border-transparent hover:bg-slate-900 hover:border-[#646cff]">
                        <a className="hover:text-blue-700" href="https://www.google.com" target="_blank" rel="noopener noreferrer">LinkedIN</a>
                    </li>
                    <li className="bg-black p-3 transition-all duration-300  rounded border-2 border-transparent hover:bg-slate-900 hover:border-[#646cff]">
                        <a className="hover:text-black" href="https://github.com/mujawarmsahil" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li className="bg-black p-3 transition-all duration-300  rounded border-2 border-transparent hover:bg-slate-900 hover:border-[#646cff]">
                        <a className="hover:text-yellow-500" href="https://leetcode.com/u/sahil_mujawar28/" target="_blank" rel="noopener noreferrer">LeetCode</a>
                    </li>
                    <li className="bg-black p-3 transition-all duration-300  rounded border-2 border-transparent hover:bg-slate-900 hover:border-[#646cff]">
                        <a className="hover:text-white" href="https://www.frontendmentor.io/profile/mujawarmsahil" target="_blank" rel="noopener noreferrer">FrontEnd Mentor IO</a>
                    </li>
                </ul>
            </div>
        </>
    )
}