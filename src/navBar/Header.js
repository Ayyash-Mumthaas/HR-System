import React from "react"
import ICSTlogo from '../img/IcstLogo.png'
import './Header.css'

function Header(){
    return(
        <header className="header">
            <nav>
                <div className="heroSection">
                    <img src={ICSTlogo} />
                    <p>ICST HR System</p>
                </div>
                <div className="navLinks">
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                <div>
                    <a>Logout</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;