import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Features = () => {
    const [assignments,setAssignments] = useState([])
   
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/createAssignment`)
        .then(result => {
           
            setAssignments(result.data)
           
        })
    },[])
    console.log(assignments)
    return (
        <div className="lg:my-16 my-10 lg:max-w-[1320px] mx-auto">
            <h2 className="text-3xl text-center mb-5">Late`st Assignments</h2>
           <div className="grid px-6 lg:px-0  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
              {
                assignments.slice(0,6).map(assign => <>
                    <div className=" p-6 rounded-md shadow-md  bg-white dark:bg-gray-900">
                    <img src={assign.image} alt="" className="object-cover object-center w-full rounded-md h-[150px] lg:h-64 bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-[#77B0AA]">{assign.difficultyLevel}</span>
                        <h2 className="text-xl font-semibold tracking-wide">{assign.title}</h2>
                    </div>
                    <p className="">{assign?.description?.slice(0,100)}</p>
                    <div className="text-end">
                    <Link to={`/assignmentDetails/${assign._id}`} className="text-white mt-2 px-4 py-1  rounded-xl bg-[#135D66]">View Details</Link>
                    </div>
                </div>
                
                </>)
              }
             
           </div>
        </div>
    );
};

export default Features;