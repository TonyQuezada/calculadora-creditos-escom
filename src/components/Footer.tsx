
export default function Footer(){
    return (
        <div className="w-ful h-1/24 bg-gray-600 rounded-xl flex flex-row items-center px-10 py-2">
            <a href="https://github.com/TonyQuezada/calculadora-creditos-escom" target='_blank' rel='noopener noreferrer' className="h-full hover:opacity-70 cursor-pointer">
                <img src="./assets/github-mark-white.png" className="h-full"/>
            </a>
            <div className="mx-5 text-sm text-gray-400">Una página por <a href="https://github.com/TonyQuezada" target='_blank' rel='noopener noreferrer' className="font-bold text-gray-300 underline hover:opacity-70 cursor-pointer">Tony Quezada</a></div>
        </div>
    )
}