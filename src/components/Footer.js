import React from "react";
import little_logo from "../images/little_logo.png"

const Footer = () => {
    return (
        <footer>
            <img id='logo' src={little_logo}></img>
            <ul>Doormat Navigation
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservation</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul>Contact
                <li>Address</li>
                <li>Phone number</li>
                <li>email</li>
            </ul>
            <ul>Social-Media links
                <li>Facebook</li>
                <li>Instagram</li>
                <li>TikTok</li>
            </ul>
        </footer>
    )
}

export default Footer;