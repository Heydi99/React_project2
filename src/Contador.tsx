import {useState} from "react"

export function Contador(){
    const [numero, setNumero] = useState<number>(8)

    const handleClick =()=> {
        setNumero(numero+1)
    }
    return (
      <div className="bg-teal-500 h-96 flex flex-col items-center justify-center">
        <p className="text-3xl text-red-700">
        {numero}
        </p>
      
      <button onClick={handleClick} className="bg-blue-500 rounded-lg p-5 mx-10 my-5">
        Click!
      </button>
      </div>
    )
  }