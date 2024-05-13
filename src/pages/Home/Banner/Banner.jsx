import banner from "../../../assets/bann.jpg"

const Banner = () => {
    return (
        <div className="hero  mx-auto bg-top   lg:h-[700px]" style={{backgroundImage: `url(${banner}`}}>
            <div className="lg:mx-w-[1320px] mx-auto">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" ">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn border-none text-white ">Get Started</button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;