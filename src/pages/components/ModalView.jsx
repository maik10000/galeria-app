

export default function ModalView({ action, url }) {
    console.log(url)
    return (
        <div
            onClick={()=>action({type:'openmview'})}
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40 flex items-center justify-center"
        >
            <div className="bg-white max-w-[70vh]  scale-[1.8] rounded-lg shadow-xl p-6">
                    <img  className="" src={url} alt="" />
            </div>
        </div>
    )
}