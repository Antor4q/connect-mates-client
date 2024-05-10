import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";

const Assignments = () => {
    const [assignments,setAssignments] = useState([])
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/createAssignment`)
        .then(result => {
           
            setAssignments(result.data)
        })
    },[])
   
    return (
        <div className="lg:h-screen lg:max-w-[1440px] mx-auto">
            <h2 className="text-3xl text-center my-20">This is Assignment Section</h2>
            <div className="grid gap-5 mt-10 md:grid-cols-3 grid-cols-1 lg:grid-cols-4">
                {
                    assignments.map(assignment => <AssignmentCard key={assignment._id} assignment={assignment} setAssignments={setAssignments} assignments={assignments}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;