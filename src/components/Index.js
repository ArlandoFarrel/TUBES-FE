
import './css/index.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Index() {
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Ourteam">Our</Link></li>
              <li><Link to="/Index" className='active'>Video</Link></li>
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
      <center>
        <div className="container">
          <div className="video">
            <video controls>
              <source src="../Assets/ada.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </center>
    </section>
  </main>
  <footer>
    <div className="container">
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
    </div>
  </footer>
</div>
  )
}

export default Index
