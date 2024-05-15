import { useContext, useEffect, useState } from "react";
import { ConnectAuth } from "../../routes/AuthContext";

import useSecure from "../../hooks/useSecure";


const AttempedAssignments = () => {
    const {user} = useContext(ConnectAuth)
    const [assigns,setAssigns] = useState([])
 
   const axiosSecure = useSecure()
    useEffect(()=>{
        axiosSecure.get(`/attempted/${user?.email}`)
        .then(result => {
          setAssigns(result.data)
          
        })
    },[user?.email,axiosSecure])
 
    return (
        <div className="lg:h-screen px-6 lg:px-0 lg:max-w-[1440px] mx-auto">
            <h2 className="lg:text-3xl font-bold text-xl text-center my-10"> Attempted Assignment`s</h2>
            <div className="grid mb-10 lg:mb-0 grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3  ">
            {
                assigns.map(assign => <>
                
                <div className="card lg:w-96 bg-gradient-to-r from-[#8cb3b9] via-[#95b8bc] to-[#a3c9ce] text-primary-content">
                <div className="card-body flex items-center">
                     <div className={assign.status === "Completed" ? "bg-white h-[100px] w-1/3  flex items-center justify-center text-green-700 font-bold rounded-full" : "bg-white h-[100px] w-1/3  flex items-center justify-center text-black font-bold rounded-full"}>
                       <span className="text-center font-bold">{assign.mark}/{assign.giveMark ? assign.giveMark :"00"}</span>
                     </div>
                    <h2 className="card-title text-white">{assign.assTitle}</h2>
                    
                    <p className={assign.status === 'Completed' ?"text-green-600 font-bold" : "text-black font-semibold"}>{assign.status}</p>
                    
                </div>
                </div>
                </>)
            }
            </div>
        </div>
    );
};

export default AttempedAssignments;