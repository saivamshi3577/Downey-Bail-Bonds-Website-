import React from "react";
import footerlogo from "../Photos/footerlogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { CiCircleChevUp } from "react-icons/ci";
import "./dbbfooter.css";

function Footer() {
    return (<>
        <footer className="main-footer">

            <div className="footer-auto-container">

                {/* <!-- Footer Content --> */}

                <div className="footer-content wow fadeInUp">

                    <div className="text-center">

                        <div className="footer-logo"><a href="#"><img src={footerlogo} alt="" /></a></div>


                        <div className="text">Downey Bail Bonds has created a Downey Bail Bond Process Infographic that explains the bail process easier to clients. As part of its 10th anniversary, the company will make this infographic available so that future and existing clients understand better the level of services available to them from Downey Bail Bonds in different sectors, mainly in Europe and other countries.</div>

                    </div>

                    <ul className="footer-social-icon-two footer-ul">
                        <li className="footer-li"><a href=""><span><FaFacebookF /></span></a></li>
                        <li className="footer-li"><a href=""><span ><FaPinterest /></span></a></li>
                        <li className="footer-li"><a href=""><span><FaTwitter /></span></a></li>
                        <li className="footer-li"><a href=""><span><FaDribbble /></span></a></li>
                    </ul>
                    <ul className="footer-contact-list-one footer-ul">

                        <li className="footer-li-location"><i className="flaticon-location"><FaMapLocationDot /></i> Downey Police Department
                            10911 Brookshire Ave, Downey, CA 90241, USA </li>
                        <li className="footer-li-location"><i className="flaticon-email-1"><MdOutlineEmail /></i> <a className="footer-a1" href="mailto:info@downeybailbonds.com">info@downeybailbonds.com</a> </li>

                    </ul>

                </div>

            </div>



            <div className="footer-bottom">

                <div className="footer-auto-container">

                    <div className="footer-inner-container">

                        <ul className="footer-nav footer-ul">

                            <li className="footer-li"><a className="footer-a" href="#">Terms of Service</a></li>

                            <li className="footer-li"><a className="footer-a" href="#">Privacy Policy</a></li>

                        </ul>



                        <div className="footer-copyright-text">

                            <p>Copyright © 2024 All Rights Reserved by <a className="footer-a" href="/">Downey Bail Bonds</a></p>

                        </div>

                    </div>

                </div>

            </div>
            {/* <div className="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-angle-up"><CiCircleChevUp /></span></div> */}

        </footer>


        



    </>
    )
}

export default Footer