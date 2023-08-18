import React from 'react';
import './Service.css'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { HiCode, HiDatabase } from 'react-icons/hi';
import { RiPushpin2Fill } from 'react-icons/ri';
import { LuFileSearch2 } from 'react-icons/lu';

const Service = () => {
    return (
        <>
            <SectionTitle heading="OUR SERVICES" subHeading="Lorem Ipsum is simply dummy text of the printing and typesetting industry."></SectionTitle>

            <div class="services_section">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {/* <!-- About service part start--> */}
                            <div class="row">
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <div class="welcome_part wow fadeInLeft">
                                        <div class="welcome_icon">
                                            <HiCode></HiCode>
                                        </div>
                                        <h2>Front End Development</h2>
                                        <p>Nullam quis arcu a elit feugiat congue nec non orci. Pellentesque feugiat
                                            bibendum placerat. Nullam eu massa.</p>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <div class="welcome_part wow fadeInUp">
                                        <div class="welcome_icon">
                                            <HiDatabase></HiDatabase>
                                        </div>
                                        <h2>Back End Development</h2>
                                        <p>Nullam quis arcu a elit feugiat congue nec non orci. Pellentesque feugiat
                                            bibendum placerat. Nullam eu massa.</p>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <div class="welcome_part wow fadeInDown">
                                        <div class="welcome_icon">
                                            <RiPushpin2Fill></RiPushpin2Fill>
                                        </div>
                                        <h2>Software Development</h2>
                                        <p>Nullam quis arcu a elit feugiat congue nec non orci. Pellentesque feugiat
                                            bibendum placerat. Nullam eu massa.</p>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <div class="welcome_part wow fadeInRight">
                                        <div class="welcome_icon">
                                            <LuFileSearch2></LuFileSearch2>
                                        </div>
                                        <h2>Search Engine Optimization</h2>
                                        <p>Nullam quis arcu a elit feugiat congue nec non orci. Pellentesque feugiat
                                            bibendum placerat. Nullam eu massa.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- About service part end--> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Service;