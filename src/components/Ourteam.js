import React from 'react'
import Header from './Header'
import Footer from './Footer'
import './css/ourteam.css'
import {Link} from 'react-router-dom'
function Ourteam() {
  return (
    <>
    <Header />
    <main>
        <section className="service">
          <div className="container">
            <h1>Group Member Bio</h1>
            <center>
            </center>
            <div className="box">
            
            <div className="col-4"><Link to="/Detail">
                  <img src="/ASSETS/img/farrel.JPG" />
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
                  <img src="/ASSETS/img/zalfa.JPG" />
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
                  <img src="/ASSETS/img/grisel.JPG" />
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
                  <img src="/ASSETS/img/dila.JPG" />
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
<Footer />
</>
  )
}

export default Ourteam
