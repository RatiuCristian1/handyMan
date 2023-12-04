import React from "react";

export default function Footer() {
    return (
        <div className="footer--container">
            <h1 className="footer--text">Footer</h1>
            <div className="footer--images--container">
                <h3>Delivery Partners</h3>
                <img className="footer--images" src="dhl1.png" alt="" />
                <img className="footer--images" src="hermes.webp" alt="" />
                <img className="footer--images" src="ups.png" alt="" />
            </div>
            <h3 className="footer--social">Social media</h3>
        </div>
    )
}