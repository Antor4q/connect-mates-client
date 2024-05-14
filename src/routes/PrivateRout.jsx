import { useContext } from "react";
import { ConnectAuth } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { CirclesWithBar } from "react-loader-spinner";

const PrivateRout = ({children}) => {
    const {user,loading} = useContext(ConnectAuth)
    const location = useLocation()
    if(loading){
        return <span className="h-[800px] lg:max-w-[1320px] mx-auto flex justify-center items-center">
        <CirclesWithBar
        height="100"
        width="100"
        color="#117c8a"
        outerCircleColor="#117c8a"
        innerCircleColor="#117c8a"
        barColor="#117c8a"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></span>
    }
    if(user){
        return children;
    }
   return <Navigate to="/login" state={location?.pathname} replace={true}></Navigate>
};

export default PrivateRout;
PrivateRout.propTypes = {
    children : PropTypes.node
}