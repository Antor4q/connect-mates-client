

import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ConnectAuth } from "../../routes/AuthContext";
import axios from "axios";

const CreateAssignments = () => {
    const [level,setLevel] = useState("")
    const {user} = useContext(ConnectAuth)
    console.log(import.meta.env.VITE_API_URL)
    const handleLevel = e => {
        setLevel(e.target.value)
    }
    const handleCreateAssignment = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const marks = form.marks.value;
        const dueDate = form.date.value;
        const difficultyLevel =level
        const description = form.description.value;
        const userEmail = user.email;
        const assignment = {
            title, image, marks, dueDate, difficultyLevel, description, userEmail, userImage : user.photoURL, userName : user.displayName
        }
        axios.post(`${import.meta.env.VITE_API_URL}/createAssignment`,assignment)
        .then(result => {
            alert("Assignment Created success")
            console.log(result?.data)
        })
    }

    return (
        <div className="lg:h-screen lg:max-w-[1440px] mx-auto">
            
            <section className="max-w-4xl lg:my-20 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
             <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Create Your Assignment</h2>

                <form onSubmit={handleCreateAssignment}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Title</label>
                            <input id="username" name="title" required placeholder="Assignment Title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Image URL</label>
                            <input id="emailAddress" type="text" name="image" required placeholder="Image URL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Marks</label>
                            <input id="password" type="number" name="marks" required placeholder="Marks" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Due Date</label>
                            <input id="passwordConfirmation" name="date" required  type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                        </div>
                        <div>
                           
                        </div>
                    </div>
                        <select required  onChange={handleLevel} className="select mt-6 block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                            <option disabled  value={"Difficulty Level"} selected>Difficulty Level</option>
                            <option value={"Easy"}>Easy</option>
                            <option value={"Medium"}>Medium</option>
                            <option value={"Heard"}>Heard</option>
                        </select>
                    <div className="mt-6">
                        <label  className="block text-sm text-gray-500 dark:text-gray-300">Description</label>

                        <textarea required placeholder="Write Your Description" name="description" className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"></textarea>
                        
                       
                    </div>

                    <div className="flex justify-end mt-6">
                        <input type="submit" value="Create Now" className="px-8 cursor-pointer py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default CreateAssignments;