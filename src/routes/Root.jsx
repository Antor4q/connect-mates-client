import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";


const Root = () => {
    return (
        <div className="">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sticky top-0 z-50">
            <Navbar></Navbar>
            </div>
           
            <Outlet></Outlet>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;