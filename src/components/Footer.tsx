
const githubMark = new URL('../assets/github-mark-white.png', import.meta.url).href;

export default function Footer() {
    return (
        <footer className="w-full bg-gray-600 rounded-xl flex items-center px-4 py-2">
            <a
                href="https://github.com/TonyQuezada/calculadora-creditos-escom"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open repository on GitHub"
                className="flex items-center hover:opacity-70"
            >
                <img src={githubMark} alt="GitHub repository" className="h-6 w-6 object-contain" />
            </a>

            <div className="mx-5 text-sm text-gray-200">
                Una página por{' '}
                <a
                    href="https://github.com/TonyQuezada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline hover:opacity-70"
                >
                    Tony Quezada
                </a>
            </div>
        </footer>
    );
}