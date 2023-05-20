import Proyects from "../components/Proyects"

export default function Proyectos() {
    return (
        <>
    <h6 className="subtitle"> Proyectos </h6>
    <h2 style={{'margin-bottom': '50px', 'textAlign': 'center'}}> Personales </h2>

    <div className="section-link">
            <svg width="30" height="46" className="link" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21h6Z"></path>
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3"></path>
            </svg>
            <a href="www.github.com/user/Serphp">
            <h2 className="link"> /Repositorios</h2>
            </a>
        </div>

        <Proyects />
        </>
    )
};
