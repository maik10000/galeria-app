import { useCallback, useContext, useState } from "react";
import { ContexImgModal } from "../views/Galeria";
import ImgPrivate from "./ImgPrivate";
import { useSelector } from "react-redux";
import useFetchAndLoad from "../../hooks/useFetch";
import { deleteImg } from "../../services/privateServices";

const ItemGalery = ({ img }) => {
   const {state, dispatch} = useContext(ContexImgModal)
   const {loading, callEndpoint} = useFetchAndLoad()
   const user = useSelector(state => state.user)
    const [ruta, setUrl] = useState('')
    
    const getUrl = (url) => setUrl(url)
    
    const deletImg =  async () => {
        
         callEndpoint(deleteImg({uuid_name:img.uuid_name})).then(res=>{
            if(res) location.reload()
         })
    }

    return (
        
            <div className="relative hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] overflow-hidden">
                
                <div className="absolute top-0 left-0 flex w-full h-1/2 space-x-2">

                    <button onClick={()=>dispatch({type:'openmedit', uuid:img.uuid_name})} className="text-transparent transition ease-in-out delay-50 bg-transparent rounded-lg  w-1/2 h-1/2 flex  justify-center items-center hover:bg-gray-500/75 hover:text-gray-800 ">
                        <svg
                            className="w-20 h-20  "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <button onClick={deletImg} className="text-transparent transition ease-in-out delay-50 bg-transparent rounded-lg  w-1/2 h-1/2 flex  justify-center items-center hover:bg-rose-500/75 hover:text-rose-800 ">
                        <svg
                            className="w-20 h-20  "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                                clipRule="evenodd"
                            />
                        </svg>



                    </button>
                </div>

                <ImgPrivate  url={img.image_link} getUrl={getUrl}  />

                <div onClick={()=>dispatch({type:'openmview',url:ruta})}>
                    
                    <h4 className="text-center mt-4 font-semibold">{img.title}</h4>
                    <p className="text-gray-700 italic text-[12px] p-5 leading-relaxed">
                    Descripcion:  {img?.description}
                    </p>
                </div>
            </div>
     

    )
}

export default ItemGalery ;