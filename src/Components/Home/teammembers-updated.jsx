import React from "react";
import "./teammembers-updated.css";
import { FaPlus } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import photo from "../Photos/photo (1).jpg";
import speaker1 from "../Photos/speaker-1.jpg"
import speaker2 from "../Photos/speaker-2.jpg"
import speaker3 from "../Photos/speaker-3.jpg"
import speaker4 from "../Photos/speaker-4.jpg"
import speaker5 from "../Photos/speaker-5.jpg"
import speaker6 from "../Photos/speaker-6.jpg"
import speaker7 from "../Photos/speaker-7.jpg"

import { LiaPinterestP } from "react-icons/lia";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

function TeamMembersUpdated(){
return(<>
<section class="speakers-section-tm-bsk">

<div>

    <div class="sec-title-tm-bsk text-center-tm-bsk">

        <span class="sub-title-tm-bsk">Our Team</span>

        <h2 className="heading-for-tm-bsk"> Who Are Experts in Their Fields</h2>

        <span class="divider-tm-bsk"></span>

    </div>



    <div class="row-teammembers-bsk">

        

        <div class="speaker-block-tm-bsk" style={{visibility: 'visible', animationName: 'fadeInUp'}}>

            <div class="inner-box-tm-bsk">

                <div class="image-box-tm-bsk">

                    <div class="image-tm-bsk xtra-image-tm-bsk"><a href="speaker-detail.html"><img src={speaker1} alt="" className="images-tm-bsk"/></a></div>

                    <span class="plus-icon-tm-bsk"><FaPlus /></span>

                    <div class="social-links-tm-bsk">

                        <a href="#"><GrInstagram /></a>

                        <a href="#"><FaFacebookF /></a>

                        <a href="#"><FaLinkedinIn /></a>

                        <a href="#"><LiaPinterestP /></a>

                    </div>

                </div>

                <div class="info-box">

                    <h4 class="name"><a href="speaker-detail.html">Patrick Spencer</a></h4>

                    <span class="designation">S&amp;P Analyzer</span>

                </div>

            </div>

        </div>



         {/* <!-- Speaker block --> */}

         <div class="speaker-block-tm-bsk" data-wow-delay="300ms" style={{visibility: 'visible', animationName: 'fadeInUp'}}>

            <div class="inner-box-tm-bsk">

                <div class="image-box-tm-bsk">

                    <div class="image-tm-bsk xtra-image-tm-bsk"><a href="speaker-detail.html"><img src={speaker2} alt="" className="images-tm-bsk"/></a></div>

                    <span class="plus-icon-tm-bsk"> <FaPlus /></span>

                    <div class="social-links-tm-bsk">

<a href="#"><GrInstagram /></a>

<a href="#"><FaFacebookF /></a>

<a href="#"><FaLinkedinIn /></a>

<a href="#"><LiaPinterestP /></a>

</div>

                </div>

                <div class="info-box">

                    <h4 class="name"><a href="speaker-detail.html">Matthew White</a></h4>

                    <span class="designation">Facebook's Co-Founder</span>

                </div>

            </div>

        </div>



        {/* <!-- Speaker block --> */}

        <div class="speaker-block-tm-bsk" data-wow-delay="600ms" style={{visibility: 'visible', animationName: 'fadeInUp'}}>

            <div class="inner-box-tm-bsk">

                <div class="image-box-tm-bsk">

                    <div class="image-tm-bsk xtra-image-tm-bsk"><a href="speaker-detail.html"><img src={speaker3} alt="" className="images-tm-bsk" /></a></div>

                    <span class="plus-icon-tm-bsk"> <FaPlus /></span>

                    <div class="social-links-tm-bsk">

                        <a href="#"><GrInstagram /></a>

                        <a href="#"><FaFacebookF /></a>

                        <a href="#"><FaLinkedinIn /></a>

                        <a href="#"><LiaPinterestP /></a>

                    </div>

                </div>

                <div class="info-box">

                    <h4 class="name"><a href="speaker-detail.html">Michael Dover</a></h4>

                    <span class="designation">Starbuck's CEO</span>

                </div>

            </div>

        </div>



        {/* <!-- Speaker block --> */}

        <div class="speaker-block-tm-bsk" data-wow-delay="900ms" style={{visibility: 'visible', animationName: 'fadeInUp', animationDelay:'900ms'}}>

            <div class="inner-box-tm-bsk">

                <div class="image-box-tm-bsk">

                    <div class="image-tm-bsk xtra-image-tm-bsk"><a href="speaker-detail.html"><img src={speaker4} alt="" className="images-tm-bsk"/></a></div>

                    <span class="plus-icon-tm-bsk"> <FaPlus /></span>

                    <div class="social-links-tm-bsk">

                        <a href="#"><GrInstagram /></a>

                        <a href="#"><FaFacebookF /></a>

                        <a href="#"><FaLinkedinIn /></a>

                        <a href="#"><LiaPinterestP /></a>

                    </div>

                </div>

                <div class="info-box">

                    <h4 class="name"><a href="speaker-detail.html">Angelina Holy</a></h4>

                    <span class="designation">Maxii's Manager</span>
                    

                </div>

            </div>

        </div>



        {/* <!-- Speaker block --> */}

        <div class="speaker-block-tm-bsk" style={{visibility: 'visible', animationName: 'fadeInUp'}}>

            <div class="inner-box-tm-bsk">

                <div class="image-box-tm-bsk">

                    <div class="image-tm-bsk xtra-image-tm-bsk"><a href="speaker-detail.html"><img src={speaker5} alt="" className="images-tm-bsk"/></a></div>

                    <span class="plus-icon-tm-bsk"> <FaPlus /></span>

                    <div class="social-links-tm-bsk">

                        <a href="#"><GrInstagram /></a>

                        <a href="#"><FaFacebookF /></a>

                        <a href="#"><FaLinkedinIn /></a>

                        <a href="#"><LiaPinterestP /></a>

                    </div>

                </div>

                <div class="info-box">

                    <h4 class="name"><a href="speaker-detail.html">Janet Jones</a></h4>

                    <span class="designation">Newyork Post's GM</span>

                </div>

            </div>

        </div>



        {/* <!-- Speaker block --> */}

        <div class="speaker-block-tm-bsk" data-wow-delay="300ms" style={{visibility: 'visible', animationName: 'fadeInUp', animationDelay:'300ms'}}>

            <div class="inner-box-tm-bsk">

                <div class="image-box-tm-bsk">

                    <div class="image-tm-bsk xtra-image-tm-bsk"><a href="speaker-detail.html"><img src={speaker6} alt="" className="images-tm-bsk"/></a></div>

                    <span class="plus-icon-tm-bsk"><FaPlus /></span>

                    <div class="social-links-tm-bsk">

<a href="#"><GrInstagram /></a>

<a href="#"><FaFacebookF /></a>

<a href="#"><FaLinkedinIn /></a>

<a href="#"><LiaPinterestP /></a>

</div>

                </div>

                <div class="info-box">

                    <h4 class="name"><a href="speaker-detail.html">Michael Dover</a></h4>

                    <span class="designation"> Starbuck's CEO</span>

                </div>

            </div>

        </div>



        {/* <!-- Speaker block --> */}

        <div class="speaker-block-tm-bsk" data-wow-delay="600ms" style={{visibility: 'visible', animationName: 'fadeInUp', animationDelay:'600ms'}}>

            <div class="inner-box-tm-bsk">

                <div class="image-box-tm-bsk">

                    <div class="image-tm-bsk xtra-image-tm-bsk"><a href="speaker-detail.html"><img src={speaker7} alt="" className="images-tm-bsk"/></a></div>

                    <span class="plus-icon-tm-bsk"><FaPlus /></span>

                    <div class="social-links-tm-bsk">

<a href="#"><GrInstagram /></a>

<a href="#"><FaFacebookF /></a>

<a href="#"><FaLinkedinIn /></a>

<a href="#"><LiaPinterestP /></a>

</div>

                </div>

                <div class="info-box">

                    <h4 class="name"><a href="speaker-detail.html">Jonathan Elves</a></h4>

                    <span class="designation"> Maxii's Manager</span>

                </div>

            </div>

        </div>



        {/* <!-- Speaker block --> */}

        <div class="speaker-block-tm-bsk" data-wow-delay="900ms" style={{visibility: 'visible', animationName: 'fadeInUp', animationDelay:'600ms'}}>

            <div class="inner-box-tm-bsk">

                <div class="image-box-tm-bsk">

                    <div class="image-tm-bsk  xtra-image-tm-bsk"><a href="speaker-detail.html"><img src={photo} alt="" className="images-tm-bsk" /></a></div>

                    <span class="plus-icon-tm-bsk"><FaPlus /></span>

                    <div class="social-links-tm-bsk">

                        <a href="#"><GrInstagram /></a>

                        <a href="#"><FaFacebookF /></a>

                        <a href="#"><FaLinkedinIn /></a>

                        <a href="#"><LiaPinterestP /></a>

                    </div>

                </div>

                <div class="info-box">

                    <h4 class="name"><a href="speaker-detail.html">Mike Michael</a></h4>

                    <span class="designation">Softer Manager</span>

                </div>

            </div>

        </div>

    </div>

</div>

</section>

</>);
}
export default TeamMembersUpdated;