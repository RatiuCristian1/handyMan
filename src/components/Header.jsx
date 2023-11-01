import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header--container">
            <header>
        <Link className="site--logo" to="/" >
            <div className="site--logo--image">
            </div>
            {/* <img src="/assets/images/alpina_Caravan_cover.jpg" /> */}
        </Link>
            <nav className="navigation--el">
                <Link className="header--home" to="/">Home</Link>
                <Link to="/login"><span className="material-symbols-outlined header--logo">account_circle</span></Link>
            </nav>
        </header>
        </div>
    )
}