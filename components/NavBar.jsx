import { Link } from "react-router-dom"

export default function NavBar() {
    return (
      

<nav class="navbar nav-tabs navbar-dark mb-4" id="nav-tab" role="tablist">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">Serph</a>

    <div class="navbar text-white">
      <ul class="navbar me-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Features</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Pricing</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}