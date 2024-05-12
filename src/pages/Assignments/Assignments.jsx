import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";


const Assignments = () => {
    const [assignments,setAssignments] = useState([])
    
   const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/createAssignment`)
        .then(result => {
           
            setAssignments(result.data)
            setLoading(false)
        })
    },[])
    if(loading){
        return <>
        <div className="h-screen lg:max-w-[1440px] mx-auto flex justify-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </>
    }
    const handleSort = level => {
        if(level === "Easy"){
            
            const remaining = [...assignments].filter(ass=> ass?.difficultyLevel === "Easy")
          
           setAssignments(remaining)
            setLoading(false)
        }
        if(level === "Medium"){
           
            const remaining = [...assignments].filter(ass=> ass?.difficultyLevel === "Medium")
           setAssignments(remaining)
          
           setLoading(false)
        }
        if(level === "Heard"){
            
            const remaining = [...assignments].filter(ass=> ass?.difficultyLevel === "Heard")
          setAssignments(remaining)
          
           setLoading(false)
        }
    }
    return (
        <div className="lg:h-screen lg:max-w-[1440px] mx-auto">
            <h2 className="text-3xl text-center my-20">This is Assignment Section</h2>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Sort by  Difficulty Level</div>
                <ul tabIndex={0} className="dropdown-content gap-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li className="bg-white rounded-xl"><button onClick={()=>handleSort("Easy")}>Easy</button></li>
                    <li className="bg-white rounded-xl"><button onClick={()=>handleSort("Medium")}>Medium</button></li>
                    <li className="bg-white rounded-xl"><button onClick={()=>handleSort("Heard")}>Heard</button></li>
                   
                </ul>
                </div>
            <div className="grid gap-5 mt-10 md:grid-cols-3 grid-cols-1 lg:grid-cols-4">
                {
                    assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} setAssignments={setAssignments} assignments={assignments}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;