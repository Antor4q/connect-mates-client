import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ConnectAuth } from "../../../routes/AuthContext";
import { FiLogOut } from "react-icons/fi";

import logo from "../../../assets/clogo.png"

const Navbar = () => {
   
    const {user,logOut} = useContext(ConnectAuth)
    const navigate = useNavigate()
    const nav = <>
        <li><NavLink style={({isActive}) => isActive ? {color: 'white',background: "#003C43"} : {} } to="/" >Home</NavLink></li>
        <li><NavLink style={({isActive}) => isActive ? {color: 'white',background: "#003C43"} : {} } to="/assignments" >Assignments</NavLink></li>
        {
            user && <>
             <li><NavLink style={({isActive}) => isActive ? {color: 'white',background: "#003C43"} : {} }  to="/create" >Create Assignments</NavLink></li>
             <li><NavLink style={({isActive}) => isActive ? {color: 'white',background: "#003C43"} : {} } to="/pending" >Pending Assignments</NavLink></li>
            
            </>
        }
        
    </>
    const handleLogOut = ()=> {
        logOut()
        .then(()=>{
            navigate("/login")
        })
        .catch(()=>{})
    }
    return (
        <div className="navbar  bg-white  lg:max-w-[1320px] mx-auto bg-opacity-50 ">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {
                    nav
               }
            </ul>
            </div>
            <Link to="/" className="text-xl h-[60px] w-[200px] flex items-center text-center"><div> <img className="h-[200px] w-[200px]" src={logo} alt="" /></div></Link>
           
        </div>
        
        <div className="navbar-end">
        <div className="navbar-center mr-10 hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
               {
                nav
               }
            </ul>
        </div>
         
            {user ? <div className="dropdown dropdown-end">
                <div className="avatar" tabIndex={0} role="button">
                <div className="w-10 rounded-full ">
                    <img src={user.photoURL} />
                </div>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] bg-[#135D66] menu p-2 shadow  rounded-box w-52 text-white">
                    <li><Link to="/attempted">Attempted Assignments</Link></li>
                    <li><button onClick={handleLogOut}><FiLogOut />Logout</button></li>
                </ul>
            </div>  : <>
           
            <Link to="/login" className=" ">Log In</Link>
            </>}
        </div>
        </div>
    );
};

export default Navbar;