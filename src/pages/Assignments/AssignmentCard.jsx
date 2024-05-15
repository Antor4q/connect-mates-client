import axios from "axios";
import PropTypes from "prop-types"
import { useContext } from "react";
import { BsEye } from "react-icons/bs";
import { MdSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ConnectAuth } from "../../routes/AuthContext";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { motion } from "framer-motion"
import Animate from "../Animate/Animate";


const AssignmentCard = ({assignment,setAssignments,assignments}) => {
    const {title,marks,difficultyLevel,image,_id,userEmail} = assignment;
    const {user} = useContext(ConnectAuth)
    const handleDelete = id => {
      if(userEmail === user.email){
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
          })
          .then(result=>{
            if(result.isConfirmed){
                axios.delete(`${import.meta.env.VITE_API_URL}/createAssignment/${id}`)
                .then(result => {
               if(result){
                
                 toast.success("You have delete this assignment")
                 const remaining = assignments.filter(ass => ass._id !== id)
                 setAssignments(remaining)
               }
             })
            }
          })
       
      }else{
        toast.error("You Don't have an access delete this assignment")
      }
    }
    return (
        <motion.div 
        variants={Animate("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once : false, amount : 0.7}}
        className="max-w-xs mx-auto mb-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2 h-[100px]">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{difficultyLevel}</p>
    </div>

    <div>
    <img className="object-cover  w-[320px] h-48 mt-2 transition delay-100 duration-200 hover:scale-110" src={image} alt="NIKE AIR"/>
    </div>

    <div className="flex items-center text-white justify-between px-4 py-2 bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9]">
        <h1 className="text-lg font-bold ">{marks} Mark</h1>
        <div className="flex gap-8 items-center justify-center">
         <div className="tooltip" data-tip="View Details">
            <Link to={`/assignmentDetails/${_id}`}><BsEye /></Link>
            </div>
        <div className="tooltip" data-tip="Update"> 
        <Link to={`/updateAssignment/${_id}`}><MdSystemUpdateAlt /></Link>
        </div>
         <div className="tooltip" data-tip="Delete">
            <button onClick={()=>handleDelete(_id)}><RiDeleteBin6Line /></button>
            <Toaster/>
            </div>
        </div>
    </div>
</motion.div>
    );
};

export default AssignmentCard;
AssignmentCard.propTypes = {
    assignment : PropTypes.object,
    setAssignments: PropTypes.func,
    assignments : PropTypes.array
}