import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectAuth } from "../../routes/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import { CiLock, CiUnlock } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

// import { ToastContainer, toast } from "react-toastify";


const Login = () => {
    const {signIn,google} = useContext(ConnectAuth)
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result => {
          
            form.reset()
            toast.success("You have successfully Sign In")
            console.log(result.user)
          
        })
        .then(error => {
         
            if(error){
                alert("Invalid email and password")
                console.log(error.message)
            }
         
        })
    }
    const handleGoogle =() => {
        google()
        .then((result)=>{
            console.log(result.user)
            navigate("/")
        })
        .catch(()=>{})
    }
    return (
        <div className="lg:h-screen lg:max-w-[1440px] mx-auto">
         
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <div>
                    <form onSubmit={handleLogin} className="w-full max-w-md">
                        <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt=""/>

                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">sign In</h1>

                        <div className="relative flex items-center mt-6">
                        <span className="absolute">
                            
                            <HiOutlineMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
                        </span>

                        <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required name="email" placeholder="Email address"/>
                    </div>

                    <div className="relative w-full flex items-center mt-4">
                        <span onClick={()=>setShowPassword(!showPassword)} className="absolute">
                            
                           {showPassword ?<CiLock className="w-6  h-6 mx-3 text-gray-300 dark:text-gray-500" /> :
                           <CiUnlock className="w-6  h-6 mx-3 text-gray-300 dark:text-gray-500" />}
                        </span>

                        <input type={showPassword ? "text": "password"} className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required name="password" placeholder="Password"/>
                    </div>
                    <input type="submit" value="Sign Up" className="w-full mt-6 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" />
                    <Toaster/>
                       
                    </form>
                    <div className="mt-6">
                       

                       <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>

                       <button onClick={handleGoogle} className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                           
                           <FcGoogle className="w-6 h-6 mx-2" />

                           <span className="mx-2">Sign in with Google</span>
                       </button>

                       <div className="mt-6 text-center ">
                           <span>Don’t have an account yet?</span>
                           <Link to="/signUp" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                               Sign up
                           </Link>
                       </div>
                   </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;