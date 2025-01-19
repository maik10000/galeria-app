import { useState } from "react"
import useFetchAndLoad from "../../hooks/useFetch"
import { logout, resetPassword } from "../../services/privateServices"

export default function ModalPass({action}){
    const [form, setForm] = useState({password:'', oldpassword:'', password_confirmation:''})
    const [mensaje, setMensaje] = useState()
    const {loading, callEndpoint} = useFetchAndLoad()
    const handelOnChange = (e) =>{

        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const resetPass = async (e) =>{
        e.preventDefault()
        await callEndpoint(resetPassword(form)).then(async res =>{
            console.log(res)
                if(res){
                    await callEndpoint(logout()).then(res => {
                        location.reload()
                    })
                }
        })
       
    }

    return(
        <div  className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center"
        >
            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Cambio de contraseña</h2>

                <form onSubmit={resetPass} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            Ingrese su contraseña actual
                        </label>

                        <input
                            type="password"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="********"
                            required
                            name="oldpassword"
                            autoComplete="additional-name"
                            value={form.oldpassword}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            TIngrese su nueva contraseña
                        </label>

                        <input
                            type="password"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="********"
                            name="password"
                            required
                            autoComplete="additional-name"
                            value={form.password}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            Confirme su contraseña
                        </label>
                        <input
                            type="password"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="********"
                            min="1" step="1"
                            required
                            name="password_confirmation"
                            autoComplete="billing bday-day webauthn"
                            value={form.password_confirmation}
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