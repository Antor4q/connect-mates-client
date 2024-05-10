import axios from "axios";
import PropTypes from "prop-types"
import { useContext } from "react";
import { BsEye } from "react-icons/bs";
import { MdSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ConnectAuth } from "../../routes/AuthContext";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

const AssignmentCard = ({assignment,setAssignments,assignments}) => {
    const {title,marks,difficultyLevel,image,_id,userEmail} = assignment;
    const {user} = useContext(ConnectAuth)
    const handleDelete = id => {
      if(userEmail === user.email){
        const procesed = confirm("Are you sure you want delete")
        if(procesed){
            axios.delete(`${import.meta.env.VITE_API_URL}/createAssignment/${id}`)
        .then(result => {
         console.log(result)
         alert("You have delete this assignment")
         const remaining = assignments.filter(ass => ass._id !== id)
         setAssignments(remaining)
        })
        }
      }else{
        alert("You Don't have an access")
      }
    }
    return (
        <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2 h-[100px]">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{difficultyLevel}</p>
    </div>

    <img className="object-cover w-[320px] h-48 mt-2" src={image} alt="NIKE AIR"/>

    <div className="flex items-center text-white justify-between px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-lg font-bold ">{marks} Mark</h1>
        <div className="flex gap-8 items-center justify-center">
         <div className="tooltip" data-tip="View Details">
            <Link to={`/assignmentDetails/${_id}`}><BsEye /></Link>
            </div>
        <div className="tooltip" data-tip="Update"> <button><MdSystemUpdateAlt /></button></div>
         <div className="tooltip" data-tip="Delete">
            <button onClick={()=>handleDelete(_id)}><RiDeleteBin6Line /></button>
            </div>
        </div>
    </div>
</div>
    );
};

export default AssignmentCard;
AssignmentCard.propTypes = {
    assignment : PropTypes.object,
    setAssignments: PropTypes.func,
    assignments : PropTypes.array
}