import { useState } from "react";
import useFetchAndLoad from "../../hooks/useFetch";
import { updateUser } from "../../services/privateServices";
import { useDispatch } from "react-redux";
import adapterUSER from "../../util/adapterUser";
import { setUser } from "../../Redux/userSlice";

const ModalUser = ({action,data={}}) => {

    const [form,setForm] = useState(data)
    const [mensaje, setMensaje] = useState(undefined)
    const {loading, callEndpoint} = useFetchAndLoad()
    const dispatch = useDispatch()


    const handelOnChange = (e) => {

        setForm({
            ...form,
            [e.target.name]:e.target.value

        })

    }

    const update = async (e) => {

        e.preventDefault()
        await callEndpoint(updateUser(form)).then(res => {
           if(res) dispatch(setUser(adapterUSER(res.data)))
        }).then(() => {
             location.reload()
        })
    }


    return(
        <div  className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center"
        >
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Actualizar</h2>

                <form onSubmit={update} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            Nombre
                        </label>

                        <input
                            type="text"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="Juan Perez"
                            required="Ingrese un nombre"
                            name="name"
                            autoComplete="additional-name"
                            value={form.name}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            Telefono
                        </label>

                        <input
                            type="text"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="0987654321"
                            name="phone"
                            required="Ingrese un telefono"
                            autoComplete="additional-name"
                            value={form.phone}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            Edad
                        </label>
                        <input
                            type="number"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="10"
                            min="1" step="1"
                            required="Ingrese su edad"
                            name="age"
                            autoComplete="billing bday-day webauthn"
                            value={form.age}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            Correo
                        </label>

                        <input
                            type="email"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="tucorreo@email.com"
                            name="email"
                            required="Ingrese un correo"
                            autoComplete="email webauthn"
                            value={form.email}
                        />
                    </div>
                    {mensaje}
                    <div className="flex justify-center">
                        {loading ?
                            <button disabled className="w-1/2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                                <div className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-yellow-1000 rounded-full" role="status" aria-label="loading">
                                </div>
                            </button>
                            :
                            <button type="submit" className="w-1/2 m-2 bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                                Guardar
                            </button>}
                            <button onClick={action} className="w-1/2 m-2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                                Cancelar
                            </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalUser;