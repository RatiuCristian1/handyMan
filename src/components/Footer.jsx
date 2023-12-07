import React from "react";

export default function Footer() {
    return (
        <div className="footer--container">
            <div>
            <h1 className="footer--text">Footer</h1>
            <h3>www.handyman.example</h3>
            </div>
            <div className="footer--images--container">
                <h3>Delivery Partners</h3>
                <img className="footer--images" src="dhl1.png" alt="" />
                <img className="footer--images" src="hermes.webp" alt="" />
                <img className="footer--images" src="ups.png" alt="" />
            </div>
            <div>
                <h3 className="footer--social">Social media</h3>
                <a href="http://www.facebook.com" target="_blank"><img className="social--icon" src="icons8-facebook-100.png" alt="" /></a>
                <a href="http://www.instagram.com" target="_blank"><img className="social--icon" src="icons8-instagram-100.png" alt="" /></a>
                <a href="http://www.youtube.com" target="_blank"><img className="social--icon" src="icons8-youtube-100.png" alt="" /></a>          
            </div>
        </div>
    )
}