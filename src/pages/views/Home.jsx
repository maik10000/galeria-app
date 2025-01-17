import Login from "../components/Login";

function Home() {

    return (
            <div className="flex-1 w-screen  flex justify-center items-center h-screen">
              
                <div className="relative w-1/2 h-screen overflow-hidden">
                    <DesingPhoto />
                    <h1 className="logo-name absolute text-[100px] top-[40%] right-0">
                        <span className="font-bold text-amber-500">Gallery</span>
                        <span>.Ec</span>
                    </h1>
                </div>
                {/* Right: Login Form */}
                <div className=" flex md:p-52 sm:20 overflow-hidden p-8 w-full h-screen lg:w-1/2">
                    <Login />
                </div>
            </div>
    )
}


const DesingPhoto = () =>(
    <div className="flex relative  w-full h-1/2 ">
    <div className="img boder-green border border-neutral-400 rounded-lg  bg-white absolute flex justify-center p-5 top-0 left-[20px] w-[4in] h-[4in] rotate-[-15deg] px-5">
    <div className="w-full h-[70%]">
            <img className="" src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="" />
        </div> 
    </div>
    <div className="img border border-neutral-400 rounded-lg bg-white absolute flex justify-center p-5 top-[250px] left-[20px] w-[4in] h-[4in] rotate-[30deg]">
        <div className="w-full h-[70%]">
            <img className="" src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="" />
        </div>
    </div>
    <div className="img border border-neutral-400 rounded-lg bg-white absolute flex justify-center p-5 top-[550px] left-[20px] w-[4in] h-[4in] rotate-[-10deg]  ">
        <div className="w-full h-[70%]">
            <img className="" src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826" alt="" />
        </div>
    </div>
</div>
)

export default Home;