
import Swiper from './Swiper'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tabs from './Tabs'
import './css/detail.scss'
function Detail() {
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
              <li><Link to="/Index">Video</Link></li>
              <li><Link to="/Detail"  className='active'>Detail</Link></li>
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
      <main className="main">
        <Swiper />
        <Tabs />
        {/*  <div className="container">
      <div className="tab">
        <ul>
          <li data-tab-target="#anggota1" className="tab">Anggota 1</li>
          <li data-tab-target="#anggota2" className="tab">Anggota 2</li>
          <li data-tab-target="#anggota3" className="tab">Anggota 3</li>
          <li data-tab-target="#anggota4" className="tab">Anggota 4</li>
        </ul>
      </div>


      <div className="bio-wrapper">
        <div className="container">
          <div className="bio-content" id="anggota1" data-tab-content class="active">
 

            <div className="bio-main">
              <div className="main-content">
                <h1>Arlando Muhammad Farrel</h1>
                <p>Farrel menyukai hal yang berbau video game</p>
                <p>Bermain video game merupakan kegiatan yang menyenangkan. Dengan bermain game kita dapat sedikit melepaskan penat</p>
              </div>
              <div className="bio-photo">
                <img src="ASSETS/img/fotof.jpeg" alt="" />
              </div>
            </div>

            <div className="bio-add">
              <h3>My Favorite Place</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.180863931178!2d112.94425741487807!3d-7.942472106495005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sGn.%20Bromo!5e0!3m2!1sid!2sid!4v1667263783625!5m2!1sid!2sid" 
              width={300} 
              height={200} 
              style={{"border":"0"}} 
              title="iframe Arlando"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>


      <div className="bio-wrapper">
        <div className="container">
          <div className="bio-content" id="anggota2" data-tab-content >

            <div className="bio-main">
              <div className="main-content">
                <h1>Fadhila Zalfa Alisya</h1>
                <p>Zalfa menyukai hal yang berbau seni</p>
                <p>Seni khususnya melukis merupakan kegiatan yang menyenangkan. Dengan melukis dia dapat menuangkan seluruh ide dan kreativitas yang di miliki.</p>
              </div>
              <div className="bio-photo">
                <img src="../img/zalfadetail.jpg" alt="" />
              </div>
            </div>

            <div className="bio-add">
              <h3>My Favorite Place</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31633.86475473561!2d111.19276826961415!3d-7.658068613523901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e798c1656a347e7%3A0x620fc673454fac69!2sSarangan%2C%20Kec.%20Plaosan%2C%20Kabupaten%20Magetan%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1667264567692!5m2!1sid!2sid" 
              width={500} 
              height={300} 
              style={{"border":"0"}}
              title="iframe Zalfa"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>


      <div className="bio-wrapper">
        <div className="container">
          <div className="bio-content" id="anggota3" data-tab-content >

            <div className="bio-main">
              <div className="main-content">
                <h1>Griselda Putri Cahyaningtyas</h1>
                <p>Grisel menyukai kegiatan menulis</p>
                <p>Menulis merupakan kegiatan yang menyenangkan. Dengan menulis kita bisa mengapresiasikan semua yang kita rasakan melalui sebuah tulisan.</p>
              </div>
              <div className="bio-photo">
                <img src="../img/icen.jpg" alt="" />
              </div>
            </div>

            <div className="bio-add">
              <h3>My Favorite Place</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.213651172963!2d112.65682731401466!3d-7.976856681733584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd6285c5c1b44e3%3A0xf6c889ac7452dc3a!2sTelkom%20School%20-%20SMK%20Telkom%20Malang!5e0!3m2!1sid!2sid!4v1667264630618!5m2!1sid!2sid" 
              width={500}
              height={300} 
              style={{"border":"0"}}
              title="iframe Grisel" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>


      <div className="bio-wrapper">
        <div className="container">
          <div className="bio-content" id="anggota4" data-tab-content>
            
            <div className="bio-main">
              <div className="main-content">
                <h1>Khusnul Faddila</h1>
                <p>Dila menyukai hal yang berbau multimedia</p>
                <p>Multimedia merupakan kegiatan yang sangat menyenangkan. Di bidang multimedia ini, dila dapat mengasah semua potensi dan bakat yang dila miliki khususnya dalam bidang fotografi.</p>
              </div>
              <div className="bio-photo">
                <img src="ASSETS/img/diladetail.jpg" alt="" />
              </div>
            </div>

            <div className="bio-add">
              <h3>My Favorite Place</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.3825149062955!2d112.49451371401337!3d-7.854975280247541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7887fbc3e96b31%3A0x959ffe132aa1bd4e!2sParalayang!5e0!3m2!1sid!2sid!4v1667264694441!5m2!1sid!2sid" width="500" 
              height="300" 
              style={{"border":"0"}}
              title="iframe Dila"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>*/}
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

export default Detail
