
import { useState } from "react";
import {  useSelector } from "react-redux";
import ModalUser from "../components/ModalUser";
import ModalPass from "../components/ModalPass";


export default function Perfil() {

    const user = useSelector(state => state.user)
    const [openModal, setOpenmodal] = useState(false)
    const [openModal2, setOpenmodal2] = useState(false)

    const toggelModal = () => {

        setOpenmodal(!openModal)
    }

    const toggelModalPass = () => {

        setOpenmodal2(!openModal2)
    }
    

    return (
        <div className="w-full flex flex-wrap justify-center ">
            {openModal && (<ModalUser  action={toggelModal} data={{id_user:user.id,name : user.name, email : user.email, phone:user.phone, age:user.age}}  />)}
            {openModal2 && (<ModalPass action={toggelModalPass}  />)}
            <div className="w-1/2 h-[300px] m-4  rounded-lg">
                <img className="w-full h-full rounded-lg" style={{ objectFit: 'cover' }} src="https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="" />
            </div>

            <div className="w-1/2 my-auto py-6 flex flex-col shadow-xl justify-center gap-2 p-5 border-2 border-gray-200 rounded-lg">
                <div className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                        Nombres y Apellidos
                    </dt>
                    <dd className="text-lg font-semibold">{user.name}</dd>
                </div>
                <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                    <div className="w-full">
                        <dl className="text-gray-900 divide-y divide-gray-200  dark:divide-gray-700">

                            <div className="flex flex-col py-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                    Edad:
                                </dt>
                                <dd className="text-lg font-semibold">{user.age}</dd>
                            </div>
                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                    Numero de telefono:
                                </dt>
                                <dd className="text-lg font-semibold">{user.phone}</dd>
                            </div>
                            <div className="flex flex-col pt-3">
                                <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                                    Correo electronico:
                                </dt>
                                <dd className="text-lg font-semibold">
                                    {user.email}</dd>
                            </div>
                            <div className="flex flex-col pt-3">

                            </div>
                        </dl>
                    </div>
                    <div className="w-full">
                      
                    </div>
                </div>

                <div className="flex justify-center items-center" >
                    <button onClick={toggelModalPass} className="m-4 text-blue-500 underline hover:text-blue-600 transition">
                        Cambia contraseña:
                    </button>
                    <button onClick={toggelModal} className="m-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">Editar</button>
                </div>
            </div>
        </div>

    )
}