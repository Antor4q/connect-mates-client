import { FaPeopleArrows } from "react-icons/fa";
import { MdCreateNewFolder, MdFeedback } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { motion } from "framer-motion"
import Animate from "../../Animate/Animate";

const Feature = () => {
    return (
        <div className="lg:max-w-[1320px] lg:mt-16 lg:mb-10 mx-auto">
           <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <motion.h1
         variants={Animate("right",1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{once : false, amount : 0.7}}
        className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br></br> Feature`s</motion.h1>

        <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-[#135D66] rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-[#135D66] rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-[#135D66] rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                <motion.div
                variants={Animate("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once : false, amount : 0.7}}
                 className="space-y-3 shadow-md hover:shadow-xl p-3">
                    <span className="inline-block p-3 text-[#135D66] bg-[#a0dad4] rounded-xl dark:text-white dark:bg-[#003C43]">
                    <MdCreateNewFolder className="w-6 h-6" />
                    </span>

                    <h1 className="text-xl  font-semibold text-gray-700 capitalize dark:text-white">Assignment Creation </h1>

                    <p className="text-gray-500 dark:text-gray-300">
                    Users can easily create, customize, and schedule assignments, quizzes, and assessments tailored to their specific course requirements. They can set deadlines, attach resources.
                    </p>
                </motion.div>

                <motion.div
                variants={Animate("right",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once : false, amount : 0.7}}
                className="space-y-3 p-3">
                    <span className="inline-block p-3 text-[#135D66] bg-[#a0dad4] rounded-xl dark:text-white dark:bg-[#003C43]">
                    <MdFeedback className="w-6- h-6 " />
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Grading and Feedback System</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                    The platform provides a robust grading and feedback system that allows educators to efficiently evaluate student submissions, provide personalized feedback, and assign grades.
                    </p>
                </motion.div>

                <motion.div
                variants={Animate("right",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once : false, amount : 0.7}}
                 className="space-y-3 p-3">
                    <span className="inline-block p-3 text-[#135D66] bg-[#a0dad4] rounded-xl dark:text-white dark:bg-[#003C43]">
                    <RiCommunityFill className="w-6 h-6" />
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Integrated Communication Tools</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                    ConnectMates includes integrated communication tools such as messaging, discussion forums, and announcement boards to facilitate communication.
                    </p>
                </motion.div>

                <motion.div
                variants={Animate("up",0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once : false, amount : 0.7}}
                 className="space-y-3 shadow-md hover:shadow-xl p-3">
                    <span className="inline-block p-3 text-[#135D66] bg-[#a0dad4] rounded-xl dark:text-white dark:bg-[#003C43]">
                    <FaPeopleArrows className="w-6 h-6" />
                    </span>

                    <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Collaborative Learning Spaces</h1>

                    <p className="text-gray-500 dark:text-gray-300">
                    ConnectMates offers collaborative learning spaces where students can collaborate on assignments, projects, and group activities in real-time. Users can create virtual study groups, share resources.
                    </p>
                </motion.div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem]   flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://i.ibb.co/jJtMMNj/online-study-group2-blog-banner.jpg" alt=""/>
            </div>
        </div>
    </div>
</section> 
        </div>
    );
};

export default Feature;