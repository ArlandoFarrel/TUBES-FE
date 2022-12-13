import React from 'react'
import './css/index.css'
import Header from './Header'
import Footer from './Footer'
function Index() {
  return (
    <>
    <Header />
    <main>
    <section className="wrapper">
        <center>
            <div className="container">
                <div className="video">
                    <video controls>
                        <source src="../Assets/ada.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </center>
    </section>
</main>
<Footer />
</>
  )
}

export default Index
