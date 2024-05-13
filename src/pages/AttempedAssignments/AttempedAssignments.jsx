import { useContext, useEffect, useState } from "react";
import { ConnectAuth } from "../../routes/AuthContext";
// import axios from "axios";
import useSecure from "../../hooks/useSecure";


const AttempedAssignments = () => {
    const {user} = useContext(ConnectAuth)
    const [assigns,setAssigns] = useState([])
   const [loading,setLoading] = useState(true)
   const axiosSecure = useSecure()
    useEffect(()=>{
        axiosSecure.get(`/attempted/${user?.email}`)
        .then(result => {
          setAssigns(result.data)
           setLoading(false)
        })
    },[user?.email,axiosSecure])
  if(loading){
    return <span className="h-screen text-center text-4xl">Loading</span>
  }
    return (
        <div className="lg:h-screen px-6 lg:px-0 lg:max-w-[1440px] mx-auto">
            <h2 className="lg:text-3xl text-xl text-center my-10">The Attempted Assignment`s</h2>
            <div className="grid mb-10 lg:mb-0 grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3  ">
            {
                assigns.map(assign => <>
                
                <div className="card lg:w-96 bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9] text-primary-content">
                <div className="card-body flex items-center">
                     <div className={assign.status === "Completed" ? "bg-gradient-to-r from-green-500 via-green-300 to-green-400 h-[100px] w-1/3  flex items-center justify-center rounded-full" : "bg-white h-[100px] w-1/3  flex items-center justify-center rounded-full"}>
                       <span className="text-center font-bold">{assign.mark}/{assign.giveMark ? assign.giveMark :"00"}</span>
                     </div>
                    <h2 className="card-title">{assign.assTitle}</h2>
                    
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