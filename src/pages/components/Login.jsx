import { useState } from "react";
import useFetchAndLoad from "../../hooks/useFetch";
import { getPerfil, login } from "../../services/privateServices";
import  {useDispatch}  from "react-redux";
import { setUser } from "../../Redux/userSlice";
import adapterResLogin from "../../util/adapterRespLogin";
import { Link, useNavigate } from "react-router-dom";
import { valCorreo } from "../../util/validacionesInputs";

function Login() {

    const [form ,setForm] = useState({email:'',password:''})
    const [mensaje, setMensaje] = useState(undefined)
    const {loading, callEndpoint,mesaErros} = useFetchAndLoad()
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const handelOnChange = (e) =>{
        
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const validarCorreo = () =>{
       
        if(form.email.length===0){

            setMensaje(<div className="font-bold" style={{color:'#ef4444'}} >Ingrese un correo</div>)
        }
        
        if(!valCorreo(form.email)){
            setMensaje(<div className="font-bold" style={{color:'#ef4444'}} >Ingrese un correo valido</div>)
        }else{
            setMensaje(undefined)
        }

    }

    const valPassw = () => (form.password.length===0?setMensaje(<div className="text-red font-bold" style={{color:'#ef4444'}}>Ingrese una contraseña</div>):undefined)

    const iniciarSesion = async (e) =>{
            e.preventDefault()

            if(form.email.replace(' ','').length  === 0 && form.password.replace(' ','').length === 0){

                setMensaje(<div className="font-bold" style={{color:'#ef4444'}} >Ingrese sus credenciales</div>)

            }else{

               const res =  await callEndpoint(login(form))
               
                if(res){
                    console.log(res.name)
                    dispatch(setUser(adapterResLogin(res)))
                    location.href = '/perfil/galeria/'+res.name.replace(' ','-')
                }
                
            }
           
    }


    return (
        <div className="max-w-md w-full bg-white rounded-xl shadow-[0_10px_60px_-15px_rgba(0,0,0,0.8)] p-8">
            

            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Iniciar Sesion</h2>
            <form  onSubmit={iniciarSesion} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                        Correo
                    </label>
                
                    <input
                        type="email"
                        onChange={handelOnChange}
                        onBlur={validarCorreo}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                        placeholder="tucorreo@email.com"
                        name="email"
                        required
                        autoComplete="email webauthn"
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
                        name="password"
                        onBlur={valPassw}
                        required
                        autoComplete="new-password"
                    />
                </div>
                {mensaje}

                {
                      mesaErros?.map((element,index )=>(
                        <div  key={index} className="font-bold" style={{color:'#ef4444'}}>
                             {element[0]}
                        </div>
                     ))
                }

                {
                loading?
                <button disabled className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                    <div className="animate-spin inline-block w-5 h-5 border-[3px] border-current border-t-transparent text-yellow-1000 rounded-full" role="status" aria-label="loading">
                         <span className="sr-only">Loading...</span>
                    </div>
                </button>
                 :
                 <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                     Iniciar
                </button>
                }
                
            </form>
            <div className="mt-6 text-center text-sm text-gray-600">
                No tienes cuenta?
                <Link to="/registro" className="text-amber-600 hover:text-amber-500 font-medium pl-1">
                    Registrate
                </Link>
            </div>
        </div>

    )
}

export default Login;