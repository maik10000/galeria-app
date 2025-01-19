const MensajeTriste = ({texto, mensaje, action}) => {
    return (<div className="flex flex-col items-center  h-screen  text-center">
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md">
      <div className="text-gray-700 text-lg font-semibold">
        {mensaje} <span className="text-2xl">😢</span>
      </div>
      <p className="text-gray-500 mt-2">
        {texto}
      </p>
      <button onClick={()=>action({type:'openmnew'})} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Agregar Imágenes
      </button>
    </div>
  </div>)
} 

export default MensajeTriste;