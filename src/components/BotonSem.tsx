type BotonSemProps = {
    texto: string
    onClick: () => void
}

export default function BotonSem ( { texto, onClick }: BotonSemProps) {
    return (
        <button type='button' onClick={onClick}
        className="m-1 py-2 border-gray-400 rounded-xl border-2 cursor-pointer hover:ring-1">
            {texto}
        </button>
    )
}