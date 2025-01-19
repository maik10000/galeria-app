import { useEffect, useState } from "react"
import useFetchAndLoad from "../../hooks/useFetch"
import { showAuth } from "../../services/privateServices"
import gif from '../../assets/loadImg.gif'

const ImgPrivate = ({url, getUrl}) =>{

    const {loading, callEndpoint} = useFetchAndLoad()
    const [binary, setBinary] = useState('')

    const loadImg = async () =>{

        const res = await callEndpoint(showAuth(url))
        
        if(res){    
            
            const imageUrl = URL.createObjectURL(res);
            setBinary(imageUrl)
            getUrl(imageUrl)
        }
    }

    

    useEffect(()=>{
       
       loadImg()
    },[])

    if(loading){
        return(<div className="flex justify-center">
           <img src={gif} alt=""  />
        </div>)
    }
    return(
        <>
        <img
                className="h-[250px] w-[100%] shadow-lg rounded-lg"
                style={{objectFit:'cover',objectPosition:'top'}}
                src={binary}
                alt=""
            />
        </>
    )
}

export default ImgPrivate;