
import React, { useState } from 'react'
import './css/ourteam.scss'
import {Link} from 'react-router-dom'
function Ourteam() {
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
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/Ourteam"  className='active'>Our</Link></li>
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
        <section className="service">
          <div className="container">
            <h1>Group Member Bio</h1>
            <center>
            </center>
            <div className="box">
            
            <div className="col-4"><Link to="/Detail">
                  <img src="/assets/img/farrel.JPG" />
                  <h5>Arlando Muhammad Farrel</h5>
                  <p>Date of birth : 7 March 2006
                    <br /> Age : 16th 
                    <br /> Origin : Malang
                    <br /> Religion : Islam
                    <br /> Goals : Frontend Developer
                  </p>
                  </Link>
              </div>
              <div className="col-4">
              <Link to="/Detail">
                  <img src="/assets/img/zalfa.JPG" />
                  <h5>Fadhila Zalfa Alisya</h5>
                  <p>Date of birth : 22 August 2005 
                    <br /> Age : 17th 
                    <br /> Origin : Malang
                    <br /> Religion : Islam
                    <br /> Goals : Game Developer
                  </p>
                  </Link>
              </div>
              <div className="col-4">
              <Link to="/Detail">
                  <img src="/assets/img/grisel.JPG" />
                  <h5>Griselda Putri Cahyaningtyas</h5>
                  <p>Date of birth : 7 August 2005 
                    <br /> Age : 17th 
                    <br /> Origin : Turen
                    <br /> Religion : Islam
                    <br /> Goals : Designer UI/UX
                  </p>
                  </Link>
              </div>
              <div className="col-4">
              <Link to="/Detail">
                  <img src="/assets/img/dila.JPG" />
                  <h5>Khusnul <br /> Faddila</h5>
                  <p>Date of birth : 11 August 2005 
                    <br /> Age : 17th 
                    <br /> Origin : Madiun
                    <br /> Religion : Islam
                    <br /> Goals : Photographer
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>
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

export default Ourteam
