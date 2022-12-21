import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './css/home.scss'
function Header() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <center>
                <section className="header">
                    <div className="header-left">
                        <h1>Group 3</h1>
                    </div>
                    <div className="header-right">
                        <ul className={nav ? "slide" : ""}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Ourteam">Our Team</Link></li>
                            <li><Link to="/Index">Video</Link></li>
                            <li><Link to="/Detail">Detail</Link></li>
                            <li><Link to="/Calculator">Calculator</Link></li>

                        </ul>
                        <div className="menu-toggle">
                            <a onClick={() => handleNav()}>
                                <i className="fa-solid fa-bars fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </center>

        </>
    )
}

export default Header
