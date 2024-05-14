
import {  useEffect, useState } from "react";
import PendingModal from "./PendingModal";

import useSecure from "../../hooks/useSecure";


const PendingAssignments = () => {
    const [attemptedAssign,setAttemptedAssign] = useState([])
  
    const axiosSecure = useSecure()
   
    useEffect(()=>{
        axiosSecure.get(`/pending`)
        .then(result => {
            
            setAttemptedAssign(result.data)
           
        })
    },[axiosSecure])
   
   
    return (
        <div className="lg:h-screen px-6 lg:px-0 lg:max-w-[1320px] mx-auto">
            <h2 className="text-3xl text-center  lg:mt-10 mt-8 font-bold">Pending Assignments</h2>
            <p className="text-center lg:w-1/3 lg:mx-auto my-3">Stay organized and on top of your coursework with the Pending Assignments feature. Easily view a list of all your pending assignments, quizzes, and assessments in one convenient location. </p>
            <div className="grid lg:mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
                attemptedAssign.filter(assign => assign.status === "Pending").map(ass => <>
                
                 <div className="card text-white mb-8 lg:w-96 bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{ass.assTitle}</h2>
                        <p>Assignment marks {ass.mark}</p>
                        <p>Submitted By {ass.name}</p>
                        <div className="card-actions justify-end">
                        <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="px-8 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r  form-[#117c8a] to-[#18a6b9] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Give Mark</button>
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