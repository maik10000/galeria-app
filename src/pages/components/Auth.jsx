
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { expToken } from "../../Redux/userSlice";

export default function Auth({children, type = "no-auth"}){

    const user = useSelector((estado)=> estado.user);
    const dispatch = useDispatch()
    
    useEffect(()=>{
        console.log(type)
        console.log('asd')
    })
    

    switch (type) {
      case 'auth':
         return  user.active ? children : <Navigate to="/" replace />;
      case 'no-auth':    
         return !user.active ? children : <Navigate to={`/${user.name.replace(' ','-')}`}  />;
      default:
        break
    }
} 