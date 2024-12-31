import { Link } from "react-router-dom";
import Login from "./login";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

type Inputs = {
    name:string;
    email: string;
    password: string;
};

export default function Signup(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> =async (data) => {
        const body={
            name:data.name,
            email:data.email,
            password:data.password
        }
        console.log(body);
        const value=await axios.post("http://localhost:3000/signup",body);
        const value1= await value.data;
        if(value1.status===200){
            toast.success('Successfully created!');
        }
        else{
            toast.error('user already exists');
        }
    };

    return(
        <div className="flex items-center h-screen justify-center">
        
          
  <div className="modal-box justify-center">
    <form onSubmit={handleSubmit(onSubmit)}>
  <div className="flex items-center justify-between">  
  <h3 className="font-bold text-lg">Signup</h3>
    <Link to="/" >
         <button >X</button>
         </Link>
  </div>
   
    

    <div className="flex flex-col gap-y-10 mt-4">
    <div>
        <span className="block">Name</span>
        <input
         type="text"
          className="input input-bordered w-3/4"
           placeholder="Enter your Name"
           {...register("name", { required: "name is required" })} 
           />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    </div>
    <div>
        <span className="block">Email</span>
        <input 
        type="email"
         className="input input-bordered w-3/4"
          placeholder="Enter your Email"
          {...register("email", { required: "Email is required" })} 
          />
           {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>
    <div>
        <span className="block">password</span>
        <input
         type="password" 
         className="input input-bordered w-3/4"
          placeholder="Enter your password" 
          {...register("password", { required: "password is required" })} 
          />
           {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>
    </div>
        
    <div className="flex justify-between items-center mt-6">
        <button className="btn btn-secondary">Signup</button>
        <div className="flex ">
            <p>Already registered?</p>
            
            <a className="text-blue underline"
           onClick={() => (document.getElementById("my_modal_3") as HTMLDialogElement)?.showModal()}
            >Login</a>
             <Login />
            </div>
            
    </div>
    </form>
  </div>

  
        </div>
    )
}