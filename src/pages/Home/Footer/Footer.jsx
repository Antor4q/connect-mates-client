import { Link } from "react-router-dom";

import cLogo from "../../../assets/clogo.png"
import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="md:h-[600px] lg:h-auto">
      <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 text-white gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              <div className="sm:col-span-2">
                  <h1 className="max-w-lg text-xl font-semibold tracking-tight  xl:text-2xl ">Subscribe our newsletter to get update.</h1>
  
                  <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                      <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900  dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
              
                      <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gradient-to-r from-[#0d434a] via-[#117c8a] to-[#18a6b9] rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                          Subscribe
                      </button>
                  </div>
              </div>
  
              <div>
                  <p className="font-semibold   ">Quick Link</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <a href="#" className="transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                      <a href="#" className=" transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                      <a href="#" className=" transition-colors duration-300  dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                  </div>
              </div>
  
              <div className="">
                  <p className="font-semibold  ">Industries</p>
  
                  <div className="flex flex-col items-start mt-5 space-y-2">
                      <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                      <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                      <a href="#" className=" transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                  </div>
              </div>
          </div>
          
          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>
          
          <div className="flex items-center text-white justify-between">
               <Link to="/" className="text-xl h-[60px] w-[280px] flex items-center text-center"><img src={cLogo} alt="" /></Link>
              <div>
              <p className="mt-4 text-sm  sm:mt-0 ">© Copyright ConnectMates 2024. All Rights Reserved.</p>
              </div>
              <div className="flex  -mx-2">
                  <a href="#" className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                  <FaReddit className="w-6 h-6" />
                  </a>
  
                  <a href="#" className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                  <FaFacebook className="w-6 h-6" />
                  </a>
  
                  <a href="#" className="mx-2  transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                  <FaGithub className="w-6 h-6" />
                  </a>
              </div>
          </div>
      </div>
  </footer>
    );
};

export default Footer;