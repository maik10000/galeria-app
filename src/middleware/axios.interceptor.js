import axios from "axios"
import store from "../Redux/store"
export const AxInterceptor = () =>{
    
    const setHeader = (request) =>{
        
       const user = store.getState().user

       if(!request.url.includes('img')) request.headers['Content-Type'] = 'application/json';

       request.headers['Authorization'] = `${user?.token_type} ${user?.token}`
       
       return request

    }

    axios.interceptors.request.use((request)=>{

        if(request.url.includes('auth'))  return setHeader(request);
        return request
    })


}