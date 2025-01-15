import { useState } from "react"

export function Trabajo (){
    const [abierto, setAbierto] = useState<boolean>(false);
    const cambiar = () => {
        setAbierto(!abierto);
           
        };

  
    
    return(
        <div>
            <button onClick={cambiar} className="bg-purple-300 p-2">
                Cambiar
            </button>
        {abierto ? (
            <div className="text -5xl text-lime-500">Abierto</div>
        ): (
            <div className="text -5xl text-lime-500">Cerrado</div>
        )}
        </div>
       
    );
}
