
import './App.css'
import Countdown from './components/Coundown/Countdown'
import icon1 from './assets/images/social/icon-dribbble.png'
import icon2 from './assets/images/social/icon-twitter.png'
import icon3 from './assets/images/social/icon-google.png'
import icon4 from './assets/images/social/icon-linkedin.png'
import icon5 from './assets/images/social/icon-pinterest.png'
import icon6 from './assets/images/social/icon-facebook.png'

function App() {


  return (
    <header className="header_part" id="header_part">

      <ul className="cb-slideshow">
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
      </ul>
      <div className="overlay">
        <div id="head">
          <div className="start_part">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="row">



                    <nav className="social-nav">
                      <ul>
                        <li><a href="#"><img src={icon1} alt="" /></a></li>
                        <li><a href="#"><img src={icon2} alt="" /></a></li>
                        <li><a href="#"><img src={icon3} alt="" /></a></li>
                        <li><a href="#"><img src={icon4} alt="" /></a></li>
                        <li><a href="#"><img src={icon5} alt="" /></a></li>
                        <li><a href="#"><img src={icon6} alt="" /></a></li>
                      </ul>
                    </nav>
                    <div className="site_title">
                      <a href="#" title="">
                        <h1>Rokkha</h1>
                      </a>
                    </div>
                    <div className="site_title">
                      <h1>We Go Live Very Soon.</h1>
                      <p>
                        Exciting things are happening with our new site. Make sure you're subscribed
                        for updates.<br />
                        STAY TUNED!
                      </p>
                    </div>



                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="menu_area" id="stick_menu">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                      <div className="collapse navbar-collapse mainnavmenu"
                      >




                        <ul className="nav navbar-nav navbar-right mainnav">
                          <li><a href="#header_part">Home</a></li>
                          <li><a href="#services_section">Services</a></li>
                          <li><a href="#team_section">Team</a></li>
                          <li><a href="#email_subscribe_section">Subscribe</a></li>
                          <li><a href="#contact_section">Get Touch</a></li>
                        </ul>

                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <Countdown></Countdown>
        </div>
      </div>
    </header >
  )
}

export default App
