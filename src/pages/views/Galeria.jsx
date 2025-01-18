import { use, useEffect } from "react"
import { useSelector } from "react-redux"
import useFetchAndLoad from "../../hooks/useFetch"
import { getPhotos } from "../../services/privateServices"

export default function Galeria() {
    const user = useSelector(state => state.user)
    const { loading, callEndpoint } = useFetchAndLoad()


    useEffect(() => {
        const getImages = async () => {

            const res = await callEndpoint(getPhotos())
            console.log(res)
        }
        console.log("HOla")
        getImages()
    }, [])

    return (
        <div className=" p-5 flex justify-around overflo-y-hidden">

            <div className="w-[60%]">
                <h1 className="text-[50px] mb-4">
                    <span className="font-semibold mr-5 text-amber-600">
                        !Bienvenido!
                    </span>
                    <span>
                        {user.name}
                    </span>
                </h1>

                <h3 className="text-center text-lg text-gray-500">Tu Galeria</h3>
                <hr className="border-gray-400 shadow-lg my-4" />
                <dir className="w-full flex justify-center">
                    <button
                        type="button"
                        className="text-white bg-amber-300 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-bold rounded-lg text-sm p-2.5 text-center inline-flex items-center  dark:bg-amber-300 dark:hover:bg-amber-500 dark:focus:ring-amber-800"
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 5v14m-7-7h14"
                            />
                        </svg>

                        <span className="sr-only"></span>
                    </button>
                </dir>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ItemGalery />
                </div>

            </div>

        </div>
    )
}



const ItemGalery = (link) => {

    return (
        <div className="relative hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg overflow-hidden">
            <div className="absolute top-0 left-0 flex w-full h-full space-x-2">

                <button className="text-transparent transition ease-in-out delay-50 bg-transparent rounded-lg  w-1/2 h-1/2 flex  justify-center items-center hover:bg-gray-500/75 hover:text-gray-800 ">
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

                <button className="text-transparent transition ease-in-out delay-50 bg-transparent rounded-lg  w-1/2 h-1/2 flex  justify-center items-center hover:bg-rose-500/75 hover:text-rose-800 ">
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


            <img
                className="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
                alt=""
            />


            <h4 className="text-center m-2 font-semibold">Título</h4>
        </div>

    )
}