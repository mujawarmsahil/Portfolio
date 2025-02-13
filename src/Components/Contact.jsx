import {useState , useRef} from "react"

export default function Contact(){
    const messageShower = useRef()
    const[email,setEmail] = useState("")
    const[contact,setContact] = useState("")
    const[message,setMessage] = useState("")

    function showMessage(){
        if(!email || !contact || !message)
            return
        messageShower.current.style.top = "15px"
        setTimeout(removeMessage,1000);
    }

    function removeMessage(){
        messageShower.current.style.top = "-100%"
    }
    return(<>
        <form 
            onSubmit={(e)=>{e.preventDefault();setContact("");setEmail("");setMessage("")}}
            className="flex min-h-[100vh] flex-col justify-center  gap-[30px] items-center pb-6 pt-4 transition-all delay-0 duration-100">
            <div className="message absolute top-[-100%] p-6 rounded bg-white  " ref={messageShower}>
                <h4 className="text-green-500">Got you! will contact soon..!</h4>
                <div className="absolute bottom-0 w-full h-[5px] bg-green-500 left-0"></div>
            </div>
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Contact</h1>
            <div className="flex flex-col gap-[10px] ">
                <div>
                    <input 
                        placeholder="Enter the email"
                        value={email}
                        className="w-full p-3 text-rose-700 rounded border-[1px] border-transparent focus:border-sky-800 outline-none shadow-[inset_0px_0px_10px_1px_#000]"
                        onChange={(e)=>setEmail(e.target.value)}
                        type="text"/>
                </div>
                <div>
                    <input 
                        placeholder="Enter the Contact"
                        value={contact}
                        className="w-full p-3 text-blue-600 rounded border-[1px] border-transparent focus:border-sky-800 outline-none shadow-[inset_0px_0px_10px_1px_#000]"
                        onChange={(e)=>setContact(e.target.value)}
                        type="text"/>
                </div>
                <div>
                    <textarea 
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        className="w-full p-3 text-sky-500 rounded resize-none border-[1px] border-transparent focus:border-sky-800 outline-none shadow-[inset_0px_0px_10px_1px_#000]"
                        name="" 
                        placeholder="Enter your greetings"
                        cols={50}
                        rows={10}
                        id="">
                    </textarea>
                </div>
                <div className="mx-auto">
                    <button 
                        type="submit"
                        onClick={()=>showMessage()} >
                        Contact Me!
                    </button>
                </div>
            </div>
        </form>
    </>)
}