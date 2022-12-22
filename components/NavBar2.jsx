import '../src/styles/navBar.scss'
export const Navbar2 = () => {
    return (
    <>
        <nav>
            <ul>
                <li class="logo">Serphp</li>
            <li class="nav-item">
                <a class="nav-link" href="/">
                <img className='img' src="./src/nav/home.png"></img>
                    <span class="link-text">about</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about">
                <img className='img' src="./src/nav/id.png"></img>
                    <div class="link-text">mail</div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Certificates">
                <img  className='img' src="./src/nav/certificate.png"></img>
                    <div class="link-text">linkedin</div>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/proyectos">
                <img className='img' src="./src/nav/proyectos.png"></img>
                    <span class="link-text">twitter</span>
                </a>
            </li>
        </ul>
        </nav>
    </>
    )
};
