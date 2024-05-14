
import { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSecure from "../../hooks/useSecure";
import toast, { Toaster } from "react-hot-toast";

const UpdateAssignment = () => {
    const assignId = useParams()
    const axiosSecure = useSecure()
    const [assignment,setAssignment] = useState([])
    const {title,marks,difficultyLevel : levelDe,image,dueDate,description} = assignment;
    const [level,setLevel] = useState("")
    const navigate = useNavigate()
    const handleLevel = e => {
        setLevel(e.target.value)
    }
    useEffect(()=>{
        axiosSecure.get(`/updateAssignment/${assignId.id}`)
        .then(result => {
            setAssignment(result.data)
        })
    },[assignId.id,axiosSecure])

    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const marks = form.marks.value;
        const dueDate = form.date.value;
        const difficultyLevel =level ? level : levelDe;
        const description = form.description.value;
        const assignment = {title, image, marks, dueDate,difficultyLevel,  description}
        axiosSecure.patch(`/updateAssignment/${assignId.id}`,assignment)
        .then(result => {
          if(result){
            
           toast.success("You Have successfully Update")
            navigate("/assignments")
          }
        })
    }
   
    return (
        <div className="lg:h-screen px-6 py-10 lg:py-0 lg:px-0 lg:max-w-[1440px] mx-auto">
            
            <section className="max-w-4xl lg:my-20 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <Link to="/assignments" className="text-2xl rounded-full text-center w-8 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"><IoArrowBackCircleOutline  /></Link>
             <h2 className="text-lg font-semibold text-center text-gray-700 capitalize dark:text-white">Update Assignment</h2>

                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                           
                            <input id="username" name="title" defaultValue={title} required placeholder="Assignment Title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            
                            <input id="emailAddress" type="text" defaultValue={image} name="image" required placeholder="Image URL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            
                            <input id="password" type="number" defaultValue={marks} name="marks" required placeholder="Marks" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                          
                            <input id="passwordConfirmation" defaultValue={dueDate} name="date" required  type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                           
                        </div>
                    </div>
                        <select required   onChange={handleLevel}  className="select mt-6 block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            <option disabled  value={levelDe} selected hidden>{levelDe}</option>
                            <option value={"Easy"}>Easy</option>
                            <option value={"Medium"}>Medium</option>
                            <option value={"Heard"}>Heard</option>
                        </select>
                    <div className="mt-6">
                      

                        <textarea required defaultValue={description} placeholder="Write Your Description" name="description" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                        
                       
                    </div>

                    <div className="flex justify-end mt-6">
                        <input type="submit" value="Update" className="px-8 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9] rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                        <Toaster/>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateAssignment;