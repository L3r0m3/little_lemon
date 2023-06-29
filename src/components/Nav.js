import React from "react";
import little_logo from "../images/little_logo.png"


const Nav = () => {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="logo-nav">
                        <a href="#/home"><img className="logo-nav" src={little_logo}></img></a>
                    </div>
                    <div className="nav-col">
                        <ul class="links">
                            <li><a href="#/Home">Home</a></li>
                            <li><a href="#/About">About</a></li>
                            <li><a href="#/Menu">Menu</a></li>
                            <li><a href="#/Reservation">Reservation</a></li>
                            <li><a href="#/Order Online">Order Online</a></li>
                            <li><a href="#/Login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;