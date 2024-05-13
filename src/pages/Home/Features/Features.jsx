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
        <div className="lg:my-16 lg:max-w-[1240px] mx-auto">
            <h2 className="text-3xl text-center mb-5">Features</h2>
           <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
              {
                assignments.slice(0,6).map(assign => <>
                    <div className=" p-6 rounded-md shadow-md  ">
                    <img src={assign.image} alt="" className="object-cover object-center w-full rounded-md h-64 bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{assign.difficultyLevel}</span>
                        <h2 className="text-xl font-semibold tracking-wide">{assign.title}</h2>
                    </div>
                    <p className="">{assign?.description?.slice(0,100)}</p>
                    <div className="text-end">
                    <Link to={`/assignmentDetails/${assign._id}`} className="text-white  px-4 py-1  rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">View Details</Link>
                    </div>
                </div>
                
                </>)
              }
             
           </div>
        </div>
    );
};

export default Features;