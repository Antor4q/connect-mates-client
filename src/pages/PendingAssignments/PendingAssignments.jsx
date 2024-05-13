// import axios from "axios";
import {  useEffect, useState } from "react";
import PendingModal from "./PendingModal";

import useSecure from "../../hooks/useSecure";


const PendingAssignments = () => {
    const [attemptedAssign,setAttemptedAssign] = useState([])
    const [loading,setLoading] = useState(true)
   
    const axiosSecure = useSecure()
   
    useEffect(()=>{
        axiosSecure.get(`/pending`)
        .then(result => {
            
            setAttemptedAssign(result.data)
            setLoading(false)
        })
    },[axiosSecure])
   if(loading){
    return <span className="lg:max-w-[1240px] mx-auto my-5 text-6xl font-bold">Loading....</span>
   }
   
    return (
        <div className="lg:h-screen lg:max-w-[1440px] mx-auto">
            <h2 className="text-3xl">This is Pending Assignments</h2>
            <div className="grid lg:mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
                attemptedAssign.filter(assign => assign.status === "Pending").map(ass => <>
                
                 <div className="card text-white w-96 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{ass.assTitle}</h2>
                        <p>Assignment marks {ass.mark}</p>
                        <p>Submitted By {ass.name}</p>
                        <div className="card-actions justify-end">
                        <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="px-8 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Give Mark</button>
                            <PendingModal ass={ass}></PendingModal>
                        </div>
                    </div>
                    </div>
                </>)
             }
            </div>
               
        </div>
    );
};

export default PendingAssignments;