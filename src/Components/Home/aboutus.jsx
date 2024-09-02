import React from "react";
import girl from "../Photos/girl.png";
import writer from "../Photos/writer.png";
import vector from "../Photos/vector.png";
import { FaPlay } from "react-icons/fa";
import "./aboutus.css";
// import "./responsive.css";
function About() {
    return (<>
        {/* <!-- About Section --> */}

        <section className="about-section">

            <div className="about-row">

                {/* <!-- Image Column --> */}

                <div className="about-image-wrapper">

                    <figure className="about-image-3 wow zoomIn" data-wow-delay="900ms"><img src={girl} alt="" /></figure>

                    <figure className="about-image-2 wow zoomIn" data-wow-delay="600ms"><img src={writer} alt="" /></figure>

                    <figure className="about-image-1 wow zoomIn" data-wow-delay="300ms"><img src={vector} alt="" /></figure>

                    <a href="https://www.youtube.com/watch?v=GgBfTFNJNto" className=" about-play-btn wow zoomIn" data-wow-delay="1200ms"><span className="about-icon"><FaPlay /></span></a>

                </div>


                {/* <!-- Content Column --> */}


                <div className="about-inner-column">

                    <div className="about-sec-title">

                        <span className="about-sub-title">WELCOME TO Downey Bail Bonds</span>

                        <h2>ABOUT US</h2>

                        <span className="about-divider"></span>

                    </div>

                    <p className="about-p"> An arrest occurs every three seconds in the United States and each arrest is different from one another. If an agent is not familiar with the various laws, arrest procedures, jail release requirements, court procedures and lacks familiarity with the clerks and staff members in each county, the chances are you will be misinformed and left at a disadvantage. Having been in the bail bonds industry for a number of years, we pride ourselves at being the best in the business when it comes to having the knowledge and experience to serve you properly. </p>


                    <div className="about-btn-box">

                        <a href="/Contactus" className="about-btn-style-one"><span>Contact Us</span></a>

                    </div>

                </div>

            </div>

        </section>

        {/* <!-- End About Section --> */}


    </>)
}

export default About;