import axios from "axios";
import PropTypes from "prop-types"
import { useContext } from "react";
import { ConnectAuth } from "../../routes/AuthContext";


const PendingModal = ({ass}) => {
    const {user} = useContext(ConnectAuth)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.email === ass.email){
            return alert("You Don't have access marked on your submit assignment")
        }
       
        const form = e.target;
        const giveMark = form.mark.value;
        const feedback = form.feedback.value;
        const status = "Completed"
        // console.log(typeof ass._id)
        const result = {giveMark, feedback, status, }
        // console.log(result)
        axios.put(`${import.meta.env.VITE_API_URL}/markAssign/${ass._id}`,result)
        .then(result => {
            console.log(result.data)
            alert("You have successfully marked this assignment")
        })
    }
    return (
        <dialog id="my_modal_3" className="modal ">
        <div className="modal-box bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h2 className="text-xl mt-6 text-black font-semibold">Take This Assignment</h2>
            <p>File URL: <span className="cursor-pointer">{ass.fileURL}</span></p>
            <p>Note: {ass.note}</p>
            <form onSubmit={handleSubmit}>
            <div className="my-3">
                

                <input type="number" name="mark" placeholder="Give Assignment Mark" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            </div>
            <div>
                

                <textarea placeholder="Give a feedback" name="feedback" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                
               
            </div>
            <input type="submit" className="px-8 mt-3 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" value="Submit" />
            </form>
        </div>
        </dialog>
    );
};

export default PendingModal;
PendingModal.propTypes = {
    ass : PropTypes.object
}