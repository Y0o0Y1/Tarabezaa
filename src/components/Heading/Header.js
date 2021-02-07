import React from 'react'
import "./Header.css"
import Logo  from "../tarabezaLogo.png"
const Header = () => {
    return (
       <header className="header">
            <a href="/">
            <img src={Logo} alt=" "/>
           </a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/restaurnts">Restaurants</a></li>
                <li><a href="/">About Us</a></li>
            </ul>
       </header>
    )
}

export default Header
