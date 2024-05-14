import banner from "../../../assets/banner1.jpeg"
import banner2 from "../../../assets/banner.jpg"
import banner3 from "../../../assets/bann.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
// import 'animate.css';


const Banner = () => {
    return (
        <div>
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
                 <div className="hero lg:h-[700px]" style={{backgroundImage: `url(${banner})`}}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className=" text-neutral-content">
                    <div className="">
                      <h1 className="mb-5 lg:w-2/5 text-5xl font-bold">Join ConnectMates for Enhanced Group Learning</h1>
                      <p className="mb-5 lg:w-1/3">ConnectMates offers a dynamic platform for collaborative study. Join now to create assignments, mark them, and engage with peers effortlessly!</p>
                      <button className="btn bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9]">Get Started</button>
                    </div>
                  </div>
                 </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="hero lg:h-[700px]" style={{backgroundImage: `url(${banner2})`}}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className=" text-neutral-content">
                    <div className="">
                      <h1 className="mb-5 lg:w-2/5 text-5xl font-bold">Elevate Your Learning Experience with ConnectMates</h1>
                      <p className="mb-5 lg:w-1/3">Discover a new way of learning with ConnectMates. Connect with fellow students, create assignments together, and track your progress seamlessly!</p>
                      <button className="btn bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9]">Get Started</button>
                    </div>
                  </div>
                 </div>
                </SwiperSlide>
                <SwiperSlide>
                 <div className="hero lg:h-[700px]" style={{backgroundImage: `url(${banner3})`}}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className=" text-neutral-content">
                    <div className="">
                      <h1 className="mb-5 lg:w-2/5 text-5xl font-bold">Transform Group Study with ConnectMates</h1>
                      <p className="mb-5 lg:w-1/3 lg:1/3">Take your group study sessions to the next level with ConnectMates. Collaborate on assignments, share knowledge, and achieve academic success together!</p>
                      <button className="btn bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9]">Get Started</button>
                    </div>
                  </div>
                 </div>
                </SwiperSlide>
             </Swiper>
        </div>
    );
};

export default Banner;