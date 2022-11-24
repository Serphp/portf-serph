import { Link } from "react-router-dom"

export default function NavBar() {
    return (
      

<nav class="navbar navbar-dark mb-4" id="nav-tab" role="tablist">
  <div class="container-fluid">
    <span class="logo">Serph</span>

    <div class="navbar text-white">
      <ul class="navbar me-auto">
        <li class="nav-item">
          <Link class="navlink" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="navlink" href="#">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="navlink" to="/About">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}