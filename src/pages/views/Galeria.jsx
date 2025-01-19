import { createContext, useEffect, useReducer, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import useFetchAndLoad from "../../hooks/useFetch"
import { getPerfil, getPhotos } from "../../services/privateServices"
import MensajeTriste from "../components/MensajeTriste"
import Modal from "../components/Modal"
import ModalView from "../components/ModalView"
import ItemGalery from "../components/ItemGalery"
import adapterUSER from "../../util/adapterUser"
import { setUser } from "../../Redux/userSlice"

const reducer = (state, action) =>{

   

    switch (action.type) {

        case 'openmnew':
            
            return {open: !state.open, model:'new'}
    
        case 'openmview':
          
            return {open: !state.open, model:'view', url:action.url}
    
        case 'openmedit':
            
            return {open: !state.open, model:'edit', uuid:action.uuid}
        
        default:
            return state
    }
}

export  const ContexImgModal = createContext()

export default function Galeria() {
    const user = useSelector(state => state.user)
    const { loading, callEndpoint } = useFetchAndLoad()
    const [state, dispatch] = useReducer(reducer,{open:false})
    const [fotos, setFotos] = useState([]);
    const dispat = useDispatch()

    const getMe = async ()  =>{
       
        await callEndpoint(getPerfil()).then(res=>{
               if(res) dispat(setUser(adapterUSER(res)))
        })
    }


    useEffect(() => {
        const getImages = async () => {

            const res = await callEndpoint(getPhotos())

            if (res) {
                console.log(res.images)
                setFotos(res?.images)
            }
        }

        getImages()
        getMe()

    }, [])

    return (
        <div className=" p-5 flex justify-around overflo-y-hidden">
         
            {(state.open && state.model === 'new' )&& (<Modal action={dispatch} />)}
            {(state.open && state.model === 'edit' )&& (<Modal action={dispatch} data={fotos.filter(item => item.uuid_name === state.uuid)[0]} />)}
            {(state.open && state.model === 'view' )&& (<ModalView action={dispatch} url={state.url} />)}

            <div className="w-[60%]">
                <h1 className="text-[40px] mb-4">
                    <span className="font-semibold mr-5 text-amber-600">
                        !Bienvenido!
                    </span>
                    <span>
                        {user.name}
                    </span>
                </h1>

                <h3 className="text-center text-lg text-gray-500">Tu Galeria</h3>
                <hr className="border-gray-400 shadow-lg my-4" />
                {
                    !loading ?
                        fotos.length === 0 ?
                            <MensajeTriste action={dispatch} texto={"Puedes agregar nuevas imágenes haciendo clic en el botón de abajo."} mensaje={"No tienes imágenes en tu galería"} />
                            :
                            <>
                                <button onClick={()=>dispatch({type:'openmnew'})} className="m-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                                    Agregar Imágenes
                                </button>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    <ContexImgModal.Provider value={{state,dispatch}}>
                                        {fotos.map((item) => (

                                            <ItemGalery key={item.uuid_name} img={item} />
                                        ))}
                                    </ContexImgModal.Provider>
                                </div>
                            </>
                        :
                        <div className="flex flex-col items-center mt-20 h-screen  text-center">
                            <div
                                className="animate-spin inline-block w-[50px] h-[50px] border-[6px] border-gray-400 border-t-transparent rounded-full"
                                role="status"
                                aria-label="loading"
                            >
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}



