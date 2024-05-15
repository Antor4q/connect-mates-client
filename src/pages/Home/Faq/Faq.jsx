import faq from "../../../assets/students-1807505_640.jpg"

const Faq = () => {
    return (
        <div className="lg:mb-10  lg:max-w-[1320px] mx-auto">
            <h2 className="text-3xl font-bold mb-7 pb-5 text-center">Faq</h2>
            <div className="grid grid-cols-1 px-6 lg:px-0 lg:grid-cols-2 gap-5">
            <div className="flex relative items-center lg:flex-row gap-5 lg:gap-0 flex-col justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={faq} alt="" className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    <div className="flex bg-gray-300 opacity-70 mb-5  lg:mb-0 lg:absolute  top-[30%] flex-col  p-6  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className=" leading-none z-10  text-xl lg:text-2xl text-black font-bold">ConnectMates
                            </h1>
                           <p className="text-black z-10 font-medium text-xl">Create, Share, and Track Assignments with ConnectMates</p>
                           
                           
                        </div>
                </div>
                <div className="col-span-1 mt-6 lg:mt-0  mb-10">
                <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                    What is this website about?
                    </div>
                    <div className="collapse-content"> 
                        <p>This website is a platform dedicated to showcasing students attempts at various assignments. It offers a glimpse into the learning journey of individuals as they tackle academic challenges, showcasing their perseverance and growth.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                    Who can participate on this website?
                    </div>
                    <div className="collapse-content"> 
                        <p>Students from all educational backgrounds and levels are welcome to participate. Whether you`re in high school, college, or pursuing advanced studies, if you have assignments you`ve attempted and want to share your experience, this platform is for you.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                    How can I submit my attempted assignments?
                    </div>
                    <div className="collapse-content"> 
                        <p>To share your attempted assignments, simply sign up for an account on the website and follow the submission guidelines provided. You`ll have the opportunity to upload your work, along with any reflections or insights you`d like to share about your learning process.</p>
                    </div>
                    </div>
                    <div className="collapse collapse-plus ">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                    Is there any criteria for the assignments I can submit?
                    </div>
                    <div className="collapse-content"> 
                        <p>While there are no strict criteria for the assignments you can submit, they should ideally reflect your genuine efforts and engagement with the task. Assignments from various subjects and disciplines are welcome, ranging from essays and projects to experiments and presentations.</p>
                    </div>
                    </div>
                </div>
            </div>
             
        </div>
    );
};

export default Faq;