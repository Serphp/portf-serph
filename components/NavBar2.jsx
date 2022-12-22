

export const Navbar2 = () => {
    return (
    <>
        <nav>
            <ul>
                <li className="logo">Serphp</li>
            <li className="nav-item">
                <a className="nav-link" href="/">
                <img className='img' src="./src/nav/home.png"></img>
                    <span className="link-text">about</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/about">
                <img className='img' src="./src/nav/id.png"></img>
                    <div className="link-text">mail</div>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Certificates">
                <img  className='img' src="./src/nav/certificate.png"></img>
                    <div className="link-text">linkedin</div>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/proyectos">
                <img className='img' src="./src/nav/proyectos.png"></img>
                    <span className="link-text">twitter</span>
                </a>
            </li>
        </ul>
        </nav>
    </>
    )
};
