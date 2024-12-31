import { Link } from "react-router-dom"

export default function Conatact(){
    return(
        <>
        <div className="flex items-center h-screen justify-center">
        <div className="modal-box justify-center">
        <form>
        <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Contact</h3>
        <Link to="/">
        <button>X</button>
        </Link>
        </div>
        <div className="flex flex-col gap-y-10 mt-4">
        <div>
        <span className="block">Name</span>
        <input type="text" className="input input-bordered w-3/4" placeholder="Enter your Name"/>
        </div>
        <div>
        <span className="block">Email</span>
        <input type="email" className="input input-bordered w-3/4" placeholder="Enter your Email"/>
        </div>
        <div>
        <span className="block">Message</span>
        <textarea className="textarea h-24 textarea-bordered w-3/4" placeholder="Enter your message"></textarea>
        </div>
        </div>
        <div className="flex justify-between items-center mt-6">
        <button className="btn btn-secondary">Submit</button>       
        </div>
        </form>
        </div>
        </div>
       </>
    )
}