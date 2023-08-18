import React from 'react';
import './Team.css'
import { FaFacebook, FaGooglePlus, FaLinkedin, FaTwitter } from 'react-icons/fa';
import team1 from '../../../assets/images/team/coming-soon.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Team = () => {
    return (
        <>
            <SectionTitle heading="The People Who Will Serve You" subHeading="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></SectionTitle>
            <section id="team_section">
                <div class="team_section">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div class="team-container">
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <div class="team-member wow fadeInRight">
                                                <figure>
                                                    <img height="280px" width="250px" src={team1}
                                                        alt="Team Member" />
                                                    <figcaption>
                                                        <p class="member-name">Coming soon</p>
                                                        <p class="designation">
                                                            Other Member
                                                        </p>

                                                    </figcaption>
                                                </figure>
                                                <div class="social-btn-container">
                                                    <div class="team-socail-btn">
                                                        <span class="social-btn-box facebook-btn-container">
                                                            <a href="#" class="facebook-btn">
                                                                <FaFacebook></FaFacebook>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box twitter-btn-container">
                                                            <a href="#" class="twitter-btn">
                                                                <FaTwitter></FaTwitter>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box linkedin-btn-container">
                                                            <a href="#" class="linkedin-btn">
                                                                <FaLinkedin></FaLinkedin>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box github-btn-container">
                                                            <a href="#" class="google-plus-btn">
                                                                <FaGooglePlus></FaGooglePlus>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="team-member wow fadeInRight">
                                                <figure>
                                                    <img height="280px" width="250px" src={team1}
                                                        alt="Team Member" />
                                                    <figcaption>
                                                        <p class="member-name">Coming soon</p>
                                                        <p class="designation">
                                                            Other Member
                                                        </p>

                                                    </figcaption>
                                                </figure>
                                                <div class="social-btn-container">
                                                    <div class="team-socail-btn">
                                                        <span class="social-btn-box facebook-btn-container">
                                                            <a href="#" class="facebook-btn">
                                                                <FaFacebook></FaFacebook>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box twitter-btn-container">
                                                            <a href="#" class="twitter-btn">
                                                                <FaTwitter></FaTwitter>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box linkedin-btn-container">
                                                            <a href="#" class="linkedin-btn">
                                                                <FaLinkedin></FaLinkedin>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box github-btn-container">
                                                            <a href="#" class="google-plus-btn">
                                                                <FaGooglePlus></FaGooglePlus>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="team-member wow fadeInRight">
                                                <figure>
                                                    <img height="280px" width="250px" src={team1}
                                                        alt="Team Member" />
                                                    <figcaption>
                                                        <p class="member-name">Coming soon</p>
                                                        <p class="designation">
                                                            Other Member
                                                        </p>

                                                    </figcaption>
                                                </figure>
                                                <div class="social-btn-container">
                                                    <div class="team-socail-btn">
                                                        <span class="social-btn-box facebook-btn-container">
                                                            <a href="#" class="facebook-btn">
                                                                <FaFacebook></FaFacebook>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box twitter-btn-container">
                                                            <a href="#" class="twitter-btn">
                                                                <FaTwitter></FaTwitter>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box linkedin-btn-container">
                                                            <a href="#" class="linkedin-btn">
                                                                <FaLinkedin></FaLinkedin>
                                                            </a>
                                                        </span>

                                                        <span class="social-btn-box github-btn-container">
                                                            <a href="#" class="google-plus-btn">
                                                                <FaGooglePlus></FaGooglePlus>
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Team;