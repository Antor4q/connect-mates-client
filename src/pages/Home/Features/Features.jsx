import axios from "axios";
import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import Animate from "../../Animate/Animate";

const Features = () => {
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
   
    return (
        <div className="lg:my-16 my-10 lg:max-w-[1320px] mx-auto">
            <h2 className="text-3xl lg:font-bold font-medium text-center mb-5">Lates`t Assignments</h2>
           <div className="grid px-6 lg:px-0  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
              {
                assignments.slice(0,6).map(assign => <>
                    <motion.div
                    variants={Animate("left",0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once : false, amount : 0.7}}
                     className=" transition duration-200 hover:scale-110 p-6 rounded-md shadow-md  bg-white dark:bg-gray-900">
                    <div>
                    <img src={assign.image} alt="" className="object-cover object-center  w-full rounded-md h-[150px] lg:h-64 bg-gray-500" />
                    </div>
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase text-[#77B0AA]">{assign.difficultyLevel}</span>
                        <h2 className="text-xl font-semibold tracking-wide">{assign.title}</h2>
                    </div>
                    <p className="">{assign?.description?.slice(0,100)}</p>
                    <div className="text-end">
                    <Link to={`/assignmentDetails/${assign._id}`} className="text-white mt-2 px-4 py-1  rounded-xl bg-[#135D66]">View Details</Link>
                    </div>
                </motion.div>
                
                </>)
              }
             
           </div>
        </div>
    );
};

export default Features;