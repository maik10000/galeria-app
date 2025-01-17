import { useState } from "react";

function Login() {


    const [form ,setForm] = useState({})

    const handelOnChange = (e) =>{
        
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div className="max-w-md w-full bg-white rounded-xl shadow-[0_10px_60px_-15px_rgba(0,0,0,0.8)] p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Iniciar Sesion</h2>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-left text-gray-700 mb-4">
                        Email
                    </label>
                    <input
                        type="email"
                        onChange={handelOnChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                        placeholder="tucorreo@email.com"
                        name="email"
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
                        autoComplete="new-password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-sm  text-gray-600">Recuerdame</span>
                    </label>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                    Sign In
                </button>
            </form>
            <div className="mt-6 text-center text-sm text-gray-600">
                No tienes cuenta?
                <a href="#" className="text-amber-600 hover:text-amber-500 font-medium pl-1">
                    Registrate
                </a>
            </div>
        </div>

    )
}

export default Login;