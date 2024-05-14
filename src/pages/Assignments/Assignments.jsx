import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import { CirclesWithBar } from "react-loader-spinner";


const Assignments = () => {
    const [assignments,setAssignments] = useState([])
    const [ass,setAss] = useState([...assignments])
    
   const [loading,setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/createAssignment`)
        .then(result => {
           
            setAssignments(result.data)
            setAss(result.data)
            setLoading(false)
        })
    },[])
    if(loading){
        return <span className="h-[800px] lg:max-w-[1320px] mx-auto flex justify-center items-center">
        <CirclesWithBar
        height="100"
        width="100"
        color="#117c8a"
        outerCircleColor="#117c8a"
        innerCircleColor="#117c8a"
        barColor="#117c8a"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></span>
    }
    const handleSort = level => {
        if(level === "Easy"){
            
            const remaining = [...ass].filter(ass=> ass?.difficultyLevel === "Easy")
           
           setAssignments(remaining)
            setLoading(false)
        }
        if(level === "Medium"){
           
            const remaining = [...ass].filter(ass=> ass?.difficultyLevel === "Medium")
          
           setAssignments(remaining)
          
           setLoading(false)
        }
        if(level === "Heard"){
            
            const remaining = [...ass].filter(ass=> ass?.difficultyLevel === "Heard")
           
          setAssignments(remaining)
          
           setLoading(false)
        }
    }
    return (
        <div className=" px-6 lg:px-0 lg:max-w-[1440px] mx-auto">
            <h2 className="lg:text-3xl text-xl font-bold text-center mt-10 lg:mt-20">All Assignments Overview</h2>
            <p className="text-center lg:w-1/3 lg:mx-auto my-6 font-semibold">Access all your assignments in one centralized location with the All Assignments page. Quickly navigate through your course workload, view upcoming deadlines</p>
            <div className="dropdown  px-6 lg:px-0">
                <div tabIndex={0} role="button " className="btn m-1 text-white bg-gradient-to-r  from-[#117c8a] to-[#18a6b9]">Sort by  Difficulty Level</div>
                <ul tabIndex={0} className="dropdown-content gap-3 bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9] z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
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