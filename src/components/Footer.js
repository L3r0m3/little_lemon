import React from "react";
import little_logo from "../images/little_logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="logo-footer">
                        <a href='/'>
                            <img
                             alt='logo-footer'
                             className="logo-footer"
                             src={little_logo}>
                            </img>
                        </a>
                    </div>
                    <div className="footer-col">
                        <ul><h4>Doormat Navigation</h4>
                            <li><a href="/">Home</a></li>
                            <li><a href="#/About">About</a></li>
                            <li><a href="/booking">Reservation</a></li>
                            <li><a href="#/Order Online">Order Online</a></li>
                            <li><a href="#/Login">Login</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul><h4>Contact</h4>
                            <li><a href="#/Address">Address</a></li>
                            <li><a href="#/Phone number">Phone number</a></li>
                            <li><a href="#/email">Email</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <ul><h4>Social-Media Links</h4>
                            <li><a href="#/Facebook">Facebook</a></li>
                            <li><a href="#/Instagram">Instagram</a></li>
                            <li><a href="#/Twitter">Twitter</a></li>
                            <li><a href="#/TikTok">TikTok</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;