
import banner1 from "../../../assets/banner4.jpg"
import banner2 from "../../../assets/banner3.jpg"
import banner3 from "../../../assets/bann.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from "framer-motion"
import 'swiper/css/navigation';
import 'swiper/css';
import Animate from "../../Animate/Animate";
// import 'animate.css';


const Banner = () => {
    return (
        <div >
             <Swiper
               className="relative lg:h-[750px] md:h-[350px]"
               loop={true}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
       
             >
                <SwiperSlide>
                 <div className="hero bg-fixed md:h-[500px] h-[350px]  lg:h-[750px]" style={{backgroundImage: `url(${banner1})`}}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="px-6 lg:px-0 py-8 lg:py-0 text-neutral-content">
                    <motion.div
                     variants={Animate("up",0.2)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{once : false, amount : 0.7}}
                    className="">
                      <h1 className="mb-5 w-3/5 lg:w-2/5 text-xl  lg:text-5xl font-medium lg:font-bold">Join <span className="text-[#18a6b9]">ConnectMates</span> for Enhanced Group Learning</h1>
                      <p className="mb-5 lg:w-1/3">ConnectMates offers a dynamic platform for collaborative study. Join now to create assignments, mark them, and engage with peers effortlessly!</p>
                      <button className="btn  text-white border-none   bg-gradient-to-r from-[#117c8a] to-[#18a6b9]">Get Started</button>
                    </motion.div>
                  </div>
                 </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="hero bg-fixed md:h-[500px] h-[350px] lg:h-[750px]" style={{backgroundImage: `url(${banner2})`}}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="px-6 lg:px-0 py-8 lg:py-0 text-neutral-content">
                    <motion.div
                    variants={Animate("up",0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once : false, amount : 0.7}}
                    className="">
                      <h1 className="mb-5 w-3/5 lg:w-2/5 text-xl  lg:text-5xl font-medium lg:font-bold">Elevate Your Learning Experience with <span className="text-[#18a6b9]">ConnectMates</span></h1>
                      <p className="mb-5 lg:w-1/3">Discover a new way of learning with ConnectMates. Connect with fellow students, create assignments together, and track your progress seamlessly!</p>
                      <button className="btn  text-white border-none   bg-gradient-to-r from-[#117c8a] to-[#18a6b9]">Get Started</button>
                    </motion.div>
                  </div>
                 </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="hero bg-fixed md:h-[500px] h-[350px] lg:h-[750px]" style={{backgroundImage: `url(${banner3})`}}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className=" px-6 lg:px-0 py-8 lg:py-0 text-neutral-content">
                    <motion.div
                      variants={Animate("up",0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once : false, amount : 0.7}}
                    className="">
                      <h1 className="mb-5 w-3/5 lg:w-2/5 text-xl  lg:text-5xl font-medium lg:font-bold">Transform Group Study with <span className="text-[#18a6b9]">ConnectMates</span></h1>
                      <p className="mb-5 lg:w-1/3 ">Take your group study sessions to the next level with ConnectMates. Collaborate on assignments, share knowledge, and achieve academic success together!</p>
                      <button className="btn  text-white border-none   bg-gradient-to-r from-[#117c8a] to-[#18a6b9]">Get Started</button>
                    </motion.div>
                  </div>
                 </div>
                </SwiperSlide>
             </Swiper>
             <div className="lg:max-w-[1320px]  mt-10 lg:mt-0 px-6 lg:px-0 lg:pl-10 mx-auto">
              <div className="shadow-xl lg:-bottom-3 w-full lg:p-12 md:p-10 p-6 rounded-xl lg:w-2/3 mx-auto lg:absolute z-30  bg-gray-200">
                  
                  <div className="flex gap-10 pr-4 lg:pr-0 lg:flex-row md:flex-row flex-col items-center">
                    <motion.h2
                      variants={Animate("right",0.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{once : false, amount : 0.7}}
                    className="lg:text-4xl text-xl font-bold ">Building Bridges,<br></br>  Celebrating Successes</motion.h2>
                  <div className="grid grid-cols-4   gap-14 lg:gap-20">
                     <div >
                        <h2 className="font-bold lg:text-3xl text-lg">+10000</h2>
                        <p className="font-serif">Users</p>
                        <p className="font-serif">Connected</p>
                     </div>
                     <div >
                        <h2 className="font-bold lg:text-3xl text-lg">+900</h2>
                        <p className="font-serif">Active</p>
                        <p className="font-serif">Users</p>
                     </div>
                     <div >
                        <h2 className="font-bold lg:text-3xl text-lg">+2000</h2>
                        <p className="font-serif">Positive </p>
                        <p className="font-serif">Reviews</p>
                     </div>
                     <div >
                        <h2 className="font-bold lg:text-3xl text-lg">+30</h2>
                        <p className="font-serif">Teachers</p>
                     </div>
                  </div>
                  </div>
                </div>
             </div>
        </div>
    );
};

export default Banner;