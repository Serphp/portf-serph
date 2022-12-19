import { Link } from "react-router-dom"
import User from "../Layout/User"
import '../src/styles/NavBar.scss'


import { useState, useEffect } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState([]);

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
  
  const toogleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', theme)
    } else {
      setTheme('light')
    }

  }

  const navbar = document.querySelector('.navbar');
  const button = document.querySelector('.button');
  
  const handleclick = () => {
    if (navbar.classList.contains('show')) {
    button.addEventListener('click', () => {navbar.classList.toggle('show');
  });
  } else {
    navbar.classList.toggle('show');
  }
}
  

  useEffect(() => {
    document.body.className = theme;
    //console.log(theme)
    //console.log(getThemeInStorage())
    //getThemeInStorage(theme);
    //setThemeSaved(theme);
    
  }, [theme])

    return (


<> 

<nav class="navbar">
  <button onClick={handleclick} class="button">Menu</button>
  <div class="dropdown">
    <a class="menu-item" href="#about">About</a>
    <a class="menu-item" href="#projects">Projects</a>
  </div>
</nav>
</>
    )
}