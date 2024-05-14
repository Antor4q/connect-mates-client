import axios from "axios";
import PropTypes from "prop-types"
import { useContext } from "react";
import { ConnectAuth } from "../../routes/AuthContext";
import toast, { Toaster } from "react-hot-toast";


const PendingModal = ({ass}) => {
    const {user} = useContext(ConnectAuth)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.email === ass.email){
            return toast.error("You Don't have access marked on your submit assignment")
        }
       
        const form = e.target;
        const giveMark = form.mark.value;
        const feedback = form.feedback.value;
        const status = "Completed"
       
        const result = {giveMark, feedback, status, }
        
        axios.put(`${import.meta.env.VITE_API_URL}/markAssign/${ass._id}`,result)
        .then(result => {
           
           if(result){
            toast.success("You have successfully marked this assignment")
           }
        })
    }
    return (
        <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9]">
            <form method="dialog">
           
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h2 className="text-xl my-3 text-white font-semibold">Give a mark</h2>
            
            <p  className="my-2 tooltip" data-tip="Click for preview">File URL: <a href={ass.fileURL} target="_blank">{ass.fileURL}</a></p>
            <p>Note: {ass.note}</p>
            <form onSubmit={handleSubmit}>
            <div className="my-3">
                

                <input type="number" name="mark" placeholder="Give Assignment Mark" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            </div>
            <div>
                

                <textarea placeholder="Give a feedback" name="feedback" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                
               
            </div>
            <input type="submit" className="px-8 mt-3 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r  form-[#117c8a] to-[#18a6b9] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" value="Submit" />
            <Toaster/>
            </form>
        </div>
        </dialog>
    );
};

export default PendingModal;
PendingModal.propTypes = {
    ass : PropTypes.object
}