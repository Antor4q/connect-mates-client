import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { IoCallOutline, IoNotifications } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { ConnectAuth } from "./AuthContext";
import useSecure from "../hooks/useSecure";
import Notify from "./Notify";



const Root = () => {
    const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const {count,setCount} = useContext(ConnectAuth)
    
    const axiosSecure = useSecure()
    const [assigns,setAssigns] = useState([])
    const [ass,setASs] = useState([...assigns])
    const [loading,setLoading] = useState(true)
    
    
    
    const handleToggle = e => {
        if(e.target.checked){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    useEffect(()=>{
        localStorage.setItem("theme", theme)
        const themeLocal = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme",themeLocal)
    },[theme])


    
   
    const handleNotify = () => {
        setCount(0)
       const remaining = [...ass].sort((a,b) => b?._id.localeCompare(a?._id) )
       
       setAssigns(remaining)
      
      
    }

    
    useEffect(()=>{
        axiosSecure.get("/createAssignment")
        .then(result => {
            
            setAssigns(result.data)
            setASs(result.data)
            setLoading(false)
        })
    },[axiosSecure])
    if(loading){
        return <span>Loading.....</span>
    }
    return (
        <div >
            <div className="bg-[#003C43] lg:py-4 px-4 lg:px-0">
             <div className="lg:max-w-[1320px] flex justify-between mx-auto  py-1">
              <div className="text-white flex  hidden lg:inline-block md:block-inline-block  gap-3 lg:gap-5 items-center">
                    
                  <div className="flex gap-5 flex-row">
                  <div className="flex items-center gap-1">
                    <span><IoCallOutline /></span>
                    <p> +0912324364</p>
                    </div>
                    <div className="flex items-center gap-1">
                    <span><MdOutlineEmail /></span>
                    <p>connectmates@gmail.com</p>
                    </div>
                  </div>
             </div>
    
               <div className="flex items-center pl-5 lg:justify-between lg:pl-0  gap-5 ">
               <fieldset className="w-full space-y-1 ">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                            <IoIosSearch className="w-4 h-4" />
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none  text-  focus:border-violet-400" />
                    </div>
                </fieldset>
                    <div className="navbar-end text-white">
                    
                     <label className="swap mr-4 mt-1 swap-rotate">
                    
                    
                        <input type="checkbox" onChange={handleToggle} />
                        
                        
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                        
                        
                        <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                        
                        </label>
                    </div>
                    
                    <div className="text-white dropdown dropdown-end text-xl font-semibold">
                    <div tabIndex={0} role="button" aria-haspopup="true" aria-expanded="true" onClick={handleNotify} className="">
                        <div className="indicator">
                        <IoNotifications />
                            <span className="badge text-white border-none badge-xs bg-red-500 indicator-item">{ count}</span>
                        </div>
                        </div>
                        <div tabIndex={0} className="dropdown-content text-black py-10 flex flex-col bg-gray-300 z-50 menu p-2 shadow rounded-box w-80">
                        <ul >
                           <div className=" h-[200px]">
                            { 
                                assigns.slice(0,6).map(ass => <Notify key={ass._id} ass={ass} ind={ass.ind}></Notify>)
                            }
                           
                           </div>
                            
                        </ul>
                        </div>
                        
                    </div>
                    
             </div>
             </div>
            
            </div>
            <div className="sticky shadow-lg bg-white top-0 z-40">
            <Navbar></Navbar>
            </div>
           
            <Outlet></Outlet>
            <div className="bg-[#003C43] lg:py-20 lg:h-[500px]">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;