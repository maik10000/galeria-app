import { useState } from "react"
import { tieneValoresNulosOVacios, valCaracEmail } from "../../util/validacionesInputs"
import useFetchAndLoad from "../../hooks/useFetch"
import { updateImg, uploadImg } from "../../services/privateServices"

export default function Modal({ action, data = {title:''} }) {
    
    const [form, setFomr] = useState(data)
    const [mensaje, setensaje] = useState(null)
    const {loading, callEndpoint} = useFetchAndLoad()
    const hadelOnChange = (e) => {
        const value = valCaracEmail(e.target.value)
        console.log(value)
        setFomr({...form,
            [e.target.name]: value
        })

    }

    const hadleChangeFile = (e) => {
        
        const file = e.target.files[0]
        if(file){

            if (!file.type.startsWith("image/")) {
                setensaje(<div className="font-bold" style={{color:'#ef4444'}} >"Por favor selecciona una imagen válida."</div>)
                return;
              }

              setFomr({
                ...form,
                [e.target.name]: file
              })
              
        }
        
        
    }

    const uploadImage = async (e) =>{

        e.preventDefault()
        if(tieneValoresNulosOVacios(form)){
            const f = new FormData()
            f.append('title',form.title)
            f.append('description',form.description)
            f.append('image_path',form.image_path)

            let res = undefined
            if(!data.uuid_name){

                  await callEndpoint(uploadImg(f)).then(res => {
                    if(res){
                        location.reload()
                     }
                 })

            }else{

                f.append('uuid_name',form.uuid_name)
                 await callEndpoint(updateImg(f)).then(res=>{
                    if(res){
                        location.reload()
                     }
                 })
            }

          

        }else{
            setensaje(<div className="font-bold" style={{color:'#ef4444'}} >"Por favor llene todos los campos"</div>)
        }
    }


    return (
        <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center"
        >
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Agregar Imágenes</h2>
                <p className="text-gray-600 mb-6">
                    Sube tus imágenes a la galería seleccionándolas desde tu dispositivo.
                </p>

                <form onSubmit={uploadImage} method="post" encType="multipart/form-data" >
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="title"
                            onChange={hadelOnChange}
                            id="title"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            required
                            value={form.title}
                        />
                        <label
                            htmlFor="title"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Titulo de la imagen
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Descripcion
                        </label>
                        <textarea
                            id="description"
                            rows={4}
                            required
                            onChange={hadelOnChange}
                            name="description"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Describe tu imagen"
                            defaultValue={form.description}
                        />
                       
                    </div>

                    <input
                        type="file"
                        name="image_path"
                        onChange={hadleChangeFile}
                        required
                        accept="image/*" 
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {mensaje}
                    <div className="mt-6 flex justify-end space-x-4">
                        <button
                            onClick={()=>action({type:'openmnew'})}
                            className="py-2 px-4 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            {data.id?"Actualizar":"Subir"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}