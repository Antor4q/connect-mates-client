import banner1 from "../../../assets/team.jpg"
import team1 from "../../../assets/team1.webp"
import team2 from "../../../assets/team2.webp"
import team3 from "../../../assets/team3.jpeg"
import Animate from "../../Animate/Animate";
import { motion } from "framer-motion"
const Team = () => {
    return (
        <div className="hero bg-fixed my-20   lg:my-20 lg:h-[600px]" style={{backgroundImage: `url(${banner1})`}}>
                  <div className="hero-overlay flex flex-col items-start  bg-opacity-60"></div>
                        <div >
                        <h2 className="text-4xl text-center text-white py-10 lg:py-0 lg:mb-8 font-semibold ">Meet our team</h2>
                       
                   <div className="grid px-6 py-5 lg:py-0 lg:px-0 grid-cols-1 lg:grid-cols-3 gap-6">
                   
                         <div>
                         <motion.div 
                         variants={Animate("up",0.2)}
                         initial="hidden"
                         whileInView={"show"}
                         viewport={{once : false, amount : 0.7}}
                         className="card lg:w-96 bg-[#135D66] text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Emma Sanchez</h2>
                                <p>With a passion for storytelling and a keen eye for character development, Emma brings a wealth of literary knowledge to our team. She`s dedicated to helping readers find their next favorite book.</p>
                               
                            </div>
                            </motion.div>
                                <div className="flex items-center gap-4">
                                <img className="w-20 mt-4 h-20 rounded-full" src={team1} alt="" />
                                <span className="text-white font-medium"> Literary Consultant</span>
                                </div>
                         </div>
                          <div>
                          <motion.div
                          variants={Animate("up",0.2)}
                          initial="hidden"
                          whileInView={"show"}
                          viewport={{once : false, amount : 0.7}}
                           className="card lg:w-96 bg-[#135D66] text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Alexis Miller</h2>
                                <p>  Alexis`s love affair with books began at a young age and has only grown stronger over the years. With a background in literature and a knack for uncovering hidden gems, she`s committed to sharing her enthusiasm. </p>
                                
                            </div>
                            </motion.div>
                            <div className="flex items-center gap-4">
                                <img className="w-20 mt-4 h-20 rounded-full" src={team3} alt="" />
                                <span className="text-white font-medium"> Book Concierge</span>
                                </div>
                          </div>
                          <div>
                          <motion.div
                          variants={Animate("up",0.2)}
                          initial="hidden"
                          whileInView={"show"}
                          viewport={{once : false, amount : 0.7}}
                           className="card lg:w-96 bg-[#135D66] text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Daniel Johnson</h2>
                                <p>Daniel`s journey into the world of literature was sparked by a childhood fascination with adventure tales. As a seasoned reader and critical thinker, he excels at guiding others through the vast literary landscape,</p>
                                
                            </div>
                            </motion.div>
                            <div className="flex items-center gap-4">
                                <img className="w-20 mt-4 h-20 rounded-full" src={team2} alt="" />
                                <span className="text-white font-medium"> Narrative Specialist</span>
                                </div>
                          </div>
                   </div>
                        </div>
                 </div>
    );
};

export default Team;