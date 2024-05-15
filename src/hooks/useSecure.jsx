import axios from "axios";
import { useContext } from "react";
import { ConnectAuth } from "../routes/AuthContext";
import { useNavigate } from "react-router-dom";

const secure = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    withCredentials : true
})
const useSecure = () => {
    const {logOut} = useContext(ConnectAuth)
    const navigate = useNavigate()
    secure.interceptors.response.use(res => {
        return res;
    }), err => {
       
        if(err.response.status === 401 || err.response.status === 403){
            logOut()
            .then(()=>{
                navigate("/login")
            })
            .catch(()=>{})
        }
    }
   return secure
};

export default useSecure;