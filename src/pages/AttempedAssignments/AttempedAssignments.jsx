import { useContext, useEffect, useState } from "react";
import { ConnectAuth } from "../../routes/AuthContext";
import axios from "axios";


const AttempedAssignments = () => {
    const {user} = useContext(ConnectAuth)
    const [assigns,setAssigns] = useState([])
   
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/attempted/${user?.email}`)
        .then(result => {
          setAssigns(result.data)
           
        })
    },[user?.email])
  
    return (
        <div className="lg:h-screen lg:max-w-[1440px] mx-auto">
            <h2 className="text-3xl text-center my-10">This is AttemptedAssignments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3  ">
            {
                assigns.map(assign => <>
                
                <div className="card w-96 bg-gray-300 text-primary-content">
                <div className="card-body flex items-center">
                     <div className="bg-white h-[100px] w-1/3  flex items-center justify-center rounded-full">
                       <span className="text-center font-bold">{assign.mark}</span>
                     </div>
                    <h2 className="card-title">{assign.assTitle}</h2>
                    
                    <p>{assign.status}</p>
                    
                </div>
                </div>
                </>)
            }
            </div>
        </div>
    );
};

export default AttempedAssignments;