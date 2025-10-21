interface AsignaturaProps {
    nombre?: string;
    creditos?: number;
    color?: string;
    selected?: boolean;
    onClick?: () => void
    existe: boolean
}

export default function Asignatura ( { nombre, creditos, color, selected, existe, onClick}: AsignaturaProps) {

    if(existe){
        return (
        <button type="button" className={`w-full h-full relative overflow-hidden opacity-50 hover:opacity-90 ${selected ? "ring-4 ring-emerald-400 opacity-100" : ""} cursor-pointer`}
        style={{backgroundColor: color}} onClick={onClick}>
            <span className="absolute inset-2 flex items-center justify-center text-center px-2 text-sm">
                {nombre}
            </span>
            <span className="absolute right-2 bottom-2 text-xs font-bold">{creditos}</span>
        </button>
        )
    }
    else {
        return (
           <div className="w-full h-full"></div>
        )
    }
    
}