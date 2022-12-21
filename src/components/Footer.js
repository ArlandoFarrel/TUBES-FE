import React from 'react'
import './css/home.scss'

function Footer() {
  return (
    <footer>
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
              <li><a href=""><i className="fa-brands fa-instagram fa-2x"></i></a></li>
              <li><a href=""><i className="fa-brands fa-facebook fa-2x"></i></a> </li>
              <li><a href=""><i className="fa-brands fa-twitter fa-2x"></i></a></li>
            </ul>
          </div>
        </div>
    </footer>

  )
}

export default Footer
