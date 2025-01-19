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

export const updateUser = (data) =>{

    const controller  = loadAbort()
    return{
        call:axios.put('http://127.0.0.1:8000/api/auth/user/edit',data, {signal:controller.signal}),
        controller
    }

}

export const resetPassword = (data) => {
    console.log(data)
    const controller = loadAbort()
    return{
        call: axios.post('http://127.0.0.1:8000/api/auth/user/reset-password',data,{signal:controller.signal}),
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
        call:axios.get('http://127.0.0.1:8000/api/auth/img/getPhotos', {signal:controller.signal}),
        controller
    }

}
export const showAuth = (url) => {
    
    const controller  = loadAbort()
    return{
        call:axios.get(`http://localhost:8000/api/auth/img${url}`, {signal:controller.signal, responseType: 'blob',}),
        controller
    }

}

export const uploadImg = (data) =>{
    const controller  = loadAbort()
    return{
        call:axios.post('http://127.0.0.1:8000/api/auth/img/upload-photo',data, {signal:controller.signal}),
        controller
    }
}

export const updateImg = (data) =>{
    const controller  = loadAbort()
    return{
        call:axios.post('http://127.0.0.1:8000/api/auth/img/update-photo',data, {signal:controller.signal}),
        controller
    }
}
export const deleteImg = (data) =>{
 
    const controller  = loadAbort()
    return{
        call:axios.post('http://127.0.0.1:8000/api/auth/img/delete-photo',data, {signal:controller.signal}),
        controller
    }
}


export const  logout = () =>{
    const controller  = loadAbort()
    return{
        call:axios.post('http://127.0.0.1:8000/api/auth/logout', {signal:controller.signal}),
        controller
    }
}

