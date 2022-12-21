import '../src/styles/navBar.scss'
export const Navbar2 = () => {
    return (
        <>
        <>

<nav>
    <ul>
        <li class="logo">Serphp</li>
    <li class="nav-item">
        <a class="nav-link" href="#about-me">
        <img className='img' src="./src/nav/certificate.png"></img>
            <span class="link-text">about</span></a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="mailto:#">
        <img className='img' src="./src/nav/certificate.png"></img>
            <span class="link-text">mail</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://www.linkedin.com/in/#">
        <img  className='img' src="./src/nav/certificate.png"></img>
            <span class="">linkedin</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" target="_blank" href="https://twitter.com/#">
        <img className='img' src="./src/nav/certificate.png"></img>
            <span class="link-text">twitter</span>
        </a>
    </li>
</ul>
</nav>
</>
        </>
    )
};
