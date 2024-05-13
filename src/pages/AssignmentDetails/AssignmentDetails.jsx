
import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ConnectAuth } from "../../routes/AuthContext";

import useSecure from "../../hooks/useSecure";


const AssignmentDetails = () => {
    const assignId = useParams()
    const assignments  = useLoaderData()
    const assignment = assignments.find(ass => ass._id === assignId.id)
    const {title, image, marks, dueDate, difficultyLevel, description,userImage,userName,userEmail} = assignment;
    const {user} = useContext(ConnectAuth)
    const axiosSecure = useSecure()
    const navigate = useNavigate()
    

    const handleAttempted = e => {
        if(user.email === userEmail){
           return alert("You Don't have access to attempted this assignment")
        }
        e.preventDefault()
        const form = e.target;
        const fileURL= form.file.value;
        const note = form.note.value;
        const status = "Pending"
        const assTitle = title
        const email = user?.email
        const name = user?.displayName
        const mark = marks
        const attemptedAss = {
            fileURL,note, status, assTitle, email, name, mark
        }
       axiosSecure.post(`/attempted`,attemptedAss)
        .then(result => {
            console.log(result.data)
            alert("You have Successfully attempted this assignment")
            navigate("/assignments")
        })
        
    }
    
    return (
        <div className="lg:h-screen lg:max-w-[1440px] mx-auto">
            <div className="max-w-2xl lg:my-20 overflow-hidden mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={image} alt="Article"/>

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{difficultyLevel}</span>
                        <p  className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 "  role="link">{title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Assignment Mark {marks}</p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                        
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={userImage} alt="Avatar"/>
                                <p  className="mx-2 font-semibold text-gray-700 dark:text-gray-200" >{userName}</p>
                                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">{dueDate}</span>
                            </div>
                           
                             
                             <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="px-8 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Take Assignment</button>
                             <dialog id="my_modal_3" className="modal ">
                                <div className="modal-box bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                    <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h2 className="text-xl mt-6 text-black font-semibold">Take This Assignment</h2>
                                    <form onSubmit={handleAttempted}>
                                    <div className="my-3">
                                        

                                        <input type="text" name="file" placeholder="Enter Your File Link" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                                    </div>
                                    <div>
                                        

                                        <textarea placeholder="Enter Your Note" name="note" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                                        
                                       
                                    </div>
                                    <input type="submit" className="px-8 mt-3 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" value="Submit" />
                                    </form>
                                </div>
                                </dialog>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;