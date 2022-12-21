
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/home.scss'
// import Header from './Header'
// import Footer from './Footer'

function Home() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div>
    <header>
      <center>
        <section className="header">
          <div className="header-left">
            <h1>Group 3</h1>
          </div>
          <div className="header-right">
            <ul className={nav ? "slide" : ""}>
              <li><Link to="/"  className='active'>Home</Link></li>
              <li><Link to="/Ourteam">Our</Link></li>
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
        </section></center>
    </header>
    <main>
      <section className="wrapper">
        <div className="container">
          <div className="main-content">
            <div className="learn">
              <h1>With Us.</h1>
            </div>
            <h1>Learn How To Code.</h1>
            <p>Kami dari kelompok 3 TEFA Telkom DBT Frontend Class</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <div className="message-wrapper">
        <div className="container">
          <div className="heading">
            <h2>Ingin tau lebih dalam tentang kami?</h2>
            <h3>Learn to Code, Learn to be Creative</h3>
            <a href="../ourteam/ourteam.html">Our Team</a>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <section>
        <div className="footer-main-content">
          <div className="footer-content1">
            <h2>Our Team</h2>
            <ul>
              <li>Farrel</li>
              <li>Zalfa</li>
              <li>Grisel</li>
              <li>Dila</li>
            </ul>
            <p>Learn to code, learn to be creative.</p>
          </div>
          <div className="footer-content2">
            <h2>Thanks for</h2>
            <ul>
              <li>SMK Telkom Malang</li>
              <li>Bapak Ahmad Muzzaki</li>
              <li>Teman-Teman Kelompok 3</li>
            </ul>
          </div>
          <div className="footer-content3">
            <h2>Follow Us</h2>
            <ul>
              <li><a href><i className="fa-brands fa-instagram fa-2x" /></a></li>
              <li><a href><i className="fa-brands fa-facebook fa-2x" /></a> </li>
              <li><a href><i className="fa-brands fa-twitter fa-2x" /></a></li>
            </ul>
          </div>
        </div>
      </section></footer>
  </div>
  )
}

export default Home
