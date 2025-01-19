import { Link, useNavigate } from "react-router-dom"
import useFetchAndLoad from "../../hooks/useFetch"
import { useState } from "react"
import { tieneValoresNulosOVacios, valCaracEmail, valSoloLetras, valSoloNumeros } from "../../util/validacionesInputs"
import { register } from "../../services/privateServices"
import adapterResLogin from "../../util/adapterRespLogin"
import { useDispatch } from "react-redux"
import { setUser } from "../../Redux/userSlice"

export default function Registro() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { loading, callEndpoint, mesaErros } = useFetchAndLoad()
    const [mensaje, setMensaje] = useState(undefined)
    const [form, setForm] = useState({ name: '', email: '', age: '', phone: '', password: '', password_confirmation:'' })


    const validator = (target) => {
        switch (target.name) {
            case 'name':
                return valSoloLetras(target.value)

            case 'phone':
                return valSoloNumeros(target.value)

            case 'age':
                return valSoloNumeros(target.value)

            case 'email':
                return valCaracEmail(target.value)
            default:
                return target.value
        }
    }

    const handelOnChange = (e) => {


        const value = validator(e.target)
        setForm({
            ...form,
            [e.target.name]: value
        })
    }



    const registro  = async (e) =>{
        e.preventDefault()
        if(tieneValoresNulosOVacios(form)){

            await callEndpoint(register(form)).then(res=>{

                if(res){
                    console.log(res)
                    dispatch(setUser(adapterResLogin(res)))
                    location.href = '/perfil/galeria/'+res.name.replace(' ','-')
                }
           })

          

        }else{
            setMensaje(<div className="font-bold" style={{color:'#ef4444'}} >Llene todos los campos</div>)
        }

    }

    return (
        <div className="w-screen h-screen  flex justify-center items-center">
            <div className="w-[30%] min-h-[50%] bg-white rounded-xl shadow-[0_10px_60px_-15px_rgba(0,0,0,0.8)] p-8">
               

                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registro</h2>
                <form onSubmit={registro} className="space-y-4">
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
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            Contraseña
                        </label>

                        <input
                            type="password"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="••••••••••••••"
                            required="Ingrese una contraseña minimo 8 caracteres"
                            name="password"
                            autoComplete="new-password"
                            value={form.password}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                            Contraseña Confirma
                        </label>

                        <input
                            type="password"
                            onChange={handelOnChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                            placeholder="••••••••••••••"
                            required="Confirme su contraseña"
                            name="password_confirmation"
                            autoComplete="shipping current-password webauthn"
                            value={form.password_confirmation}
                        />
                    </div>
                    {mensaje}
                    {loading ?
                        <button disabled className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                            <div className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-yellow-1000 rounded-full" role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </button>
                        :
                        <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                            Registrarse
                        </button>
                    }

                </form>
                <div className="mt-6 text-center text-sm text-gray-600">
                    <Link to="/" className="text-amber-600 hover:text-amber-500 font-medium pl-1">
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </div>
    )
}