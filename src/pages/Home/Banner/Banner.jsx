import React from 'react';
import './Banner.css'
import icon1 from '../../../assets/images/social/icon-dribbble.png'
import icon2 from '../../../assets/images/social/icon-twitter.png'
import icon3 from '../../../assets/images/social/icon-google.png'
import icon4 from '../../../assets/images/social/icon-linkedin.png'
import icon5 from '../../../assets/images/social/icon-pinterest.png'
import icon6 from '../../../assets/images/social/icon-facebook.png'
import Countdown from '../../../components/Coundown/Countdown';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (

        <header className="header overlay">
            <ul className="cb-slideshow">
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
                <li><span></span></li>
            </ul>


            <div class="">
                <div class="start_part">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="row">
                                    <div class="site_title">
                                        <a href="#" title="">
                                            <h1>Rokkha</h1>
                                        </a>
                                    </div>

                                    {/* <!-- Social Links --> */}
                                    <nav class="social-nav">
                                        <ul>
                                            <li><a href="#"><img src={icon1} alt="" /></a></li>
                                            <li><a href="#"><img src={icon2} alt="" /></a></li>
                                            <li><a href="#"><img src={icon3} alt="" /></a></li>
                                            <li><a href="#"><img src={icon4} alt="" /></a></li>
                                            <li><a href="#"><img src={icon5} alt="" /></a></li>
                                            <li><a href="#"><img src={icon6} alt="" /></a></li>
                                        </ul>
                                    </nav>
                                    {/* <!-- Site Title start--> */}
                                    <div class="site_title">
                                        <h1>We Go Live Very Soon.</h1>
                                        <p>
                                            Exciting things are happening with our new site. Make sure you're subscribed
                                            for updates.<br />
                                            STAY TUNED!
                                        </p>
                                    </div>
                                    {/* <!-- Site Title end--> */}
                                    {/* <!-- Countdown start --> */}
                                    <Countdown></Countdown>
                                    <div class="wow zoomIn">

                                        <div class="countdown countdown-container container">
                                            <div class="clock row">
                                                <div
                                                    class="clock-item clock-days countdown-time-value col-sm-6 col-md-3">
                                                    <div class="wrap">
                                                        <div class="inner">
                                                            <div id="canvas-days" class="clock-canvas"></div>

                                                            <div class="text">
                                                                <p class="val">0</p>
                                                                <p class="type-days type-time">DAYS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="clock-item clock-hours countdown-time-value col-sm-6 col-md-3">
                                                    <div class="wrap">
                                                        <div class="inner">
                                                            <div id="canvas-hours" class="clock-canvas"></div>

                                                            <div class="text">
                                                                <p class="val">0</p>
                                                                <p class="type-hours type-time">HOURS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="clock-item clock-minutes countdown-time-value col-sm-6 col-md-3">
                                                    <div class="wrap">
                                                        <div class="inner">
                                                            <div id="canvas-minutes" class="clock-canvas"></div>

                                                            <div class="text">
                                                                <p class="val">0</p>
                                                                <p class="type-minutes type-time">MINUTES</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="clock-item clock-seconds countdown-time-value col-sm-6 col-md-3">
                                                    <div class="wrap">
                                                        <div class="inner">
                                                            <div id="canvas-seconds" class="clock-canvas"></div>

                                                            <div class="text">
                                                                <p class="val">0</p>
                                                                <p class="type-seconds type-time">SECONDS</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Countdown end--> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Banner;