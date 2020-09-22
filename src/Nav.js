import React from 'react'
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <img 
                className="nav__logo"
                src = "https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=21"
                alt="Netflix Logo"
            />

            <img 
                className="nav__logo"
                src = "https://miro.medium.com/fit/c/256/256/1*7ysB83lEAkeoS4d9Dg0g5A.jpeg"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav;
