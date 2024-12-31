import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

type Inputs = {
    username: string;
    password: string;
};

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    
    const onSubmit: SubmitHandler<Inputs> = async(data) =>{
           const body={
            username:data.username,
            password:data.password
        }
            try{
                const value=await axios.post("http://localhost:3000/login",body);
                const value1= await value.data;
                console.log(value1);
                if(value1.status===200){
                    toast(value1.message);
                }
                else{
                    toast("Invalid username or password")
                }
            }catch(e){
                toast("Internal server error")
            }
           
        }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button for modal */}
                        <Link to="/">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </Link>
                        <h3 className="font-bold text-lg">Login</h3>

                        <div className="flex flex-col gap-y-10 mt-4">
                            <div>
                                <span className="block">Username</span>
                                <input 
                                    type="username"
                                    className={`input input-bordered w-3/4 ${errors.username ? 'input-error' : ''}`}
                                    placeholder="Enter your username"
                                    {...register("username", { required: "username is required" })} 
                                />
                                {errors.username && <p className="text-red-500">{errors.username?.message}</p>}
                            </div>
                            <div>
                                <span className="block">Password</span>
                                <input 
                                    type="password"
                                    className={`input input-bordered w-3/4 ${errors.password ? 'input-error' : ''}`}
                                    placeholder="Enter your password"
                                    {...register("password", { required: "Password is required" })} 
                                />
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                            <button className="btn btn-secondary">Login</button>

                            <div className="flex">
                                <p>Not registered?</p>
                                <Link to="/signup">
                                    <span className="text-blue underline">Signup</span>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}
