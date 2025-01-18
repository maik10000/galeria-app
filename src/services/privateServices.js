import axios from "axios";
import { loadAbort } from "../util/loadAborController.util";

export const login  = (data) => {

    const controller  = loadAbort()
    return{
        call:axios.post('http://127.0.0.1:8000/api/login',data, {signal:controller.signal}),
        controller
    }
}

export const register = (data) =>{

    const controller  = loadAbort()
    return{
        call:axios.post('http://127.0.0.1:8000/api/register',data, {signal:controller.signal}),
        controller
    }

}
 
export const getPerfil  = () => {

    const controller  = loadAbort()
    return{
        call:axios.post('http://127.0.0.1:8000/api/auth/me', {signal:controller.signal}),
        controller
    }
}

export const getPhotos = () => {

    const controller  = loadAbort()
    return{
        call:axios.get('http://127.0.0.1:8000/api/auth/getPhotos', {signal:controller.signal}),
        controller
    }

}

