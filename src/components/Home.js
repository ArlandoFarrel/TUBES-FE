import React from 'react'
import './css/home.css'
import Header from './Header'
import Footer from './Footer'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <>
    <Header />
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
                    <span><Link to="/Ourteam">Our Team</Link></span>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    </>
  )
}

export default Home
