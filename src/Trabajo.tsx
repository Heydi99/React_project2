import { useState } from "react"

export function Trabajo (){
    const [abierto, setAbierto] = useState<boolean>(true)
    
    if(abierto){
        return(
            <div className ="text -5xl text-lime-500">
            Abierto
            </div>
        )
    }
    return(
        <div>
            <button className="bg-purple-300 p-2">
                Cambiar
            </button>
        </div>
        

        
    )

}