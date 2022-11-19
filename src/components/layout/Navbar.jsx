import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import PropType from "prop-types"

function Navbar({title}) {

    const chnageTheme = (theme) =>{
        document.documentElement.setAttribute("data-theme",theme)
    }
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
            <div className="flex-none mx-2 px-2"><FaGithub className="inline pr-2 text-3xl" /></div>
            <Link to="/" className="text-lg align-middle">
            {title}
            </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end items-center">
                <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                    Home
                </Link>
                <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
                    About
                </Link>
                <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn m-1">Themes</label>
                <ul tabIndex="0" className="theme-selector dropdown-content menu shadow text-center ">
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>light</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>cyberpunk</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>corporate</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>valentine</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>garden</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>lofi</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>fantasy</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>dracula</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>lemonade</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>coffee</li>
                    <li className="bg-neutral text-neutral-content m-1 p-1 px-3" onClick={(e)=>{chnageTheme(e.target.innerText)}}>winter</li>
                </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}


Navbar.defaultProps = {
    title : 'Github Finder'
}

Navbar.prototype = {
    title: PropType.string,
}
export default Navbar