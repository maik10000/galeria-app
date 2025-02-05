import  AxiosResponse  from "axios";
import { useEffect, useState } from "react";
import adapError from "../util/adaptarErroAxios";
import { useDispatch } from "react-redux";
import { clearUser } from "../Redux/userSlice";

const useFetchAndLoad = () => {
    const [loading, setLoading] = useState(false);
    const [mesaErros, setErrors] = useState([]);
    const dispatch = useDispatch()

    let controller;

    const callEndpoint = async (axiosCall) => {
        
        if (axiosCall.controller) controller = axiosCall.controller;
        setLoading(true);
        
        let result = null
        try {
            setErrors([])
            const res = await axiosCall.call;
            result = res.data
        } catch (err) {

            setLoading(false);
            if(err.status === 401){
                dispatch(clearUser())
            }
            console.log(err);
            setErrors(adapError(err.response))
            return;
        }
        setLoading(false);
        return result;
    };

    const cancelEndpoint = () => {
        setLoading(false);
        controller && controller.abort();
    };

    useEffect(() => {
        
        return () => {
            cancelEndpoint();
        };
    }, []);

    return { loading, callEndpoint, mesaErros };
};

export default useFetchAndLoad;