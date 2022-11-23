import { Link } from "react-router-dom"

export default function NavBar() {
    return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home
            <span class="visually-hidden">(current)</span>
          </Link>
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