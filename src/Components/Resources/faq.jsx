import React from "react";
import "./faq.css";
import divider from "../Photos/divider.png";
import pic1 from "../Photos/1c.png";
import pic2 from "../Photos/2c.png"
import pic3 from "../Photos/3c.png";
import pic4 from "../Photos/4c.png"
import pic5 from "../Photos/5c.png";
import pic6 from "../Photos/6c.png";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bootstrap from "../Resources/newfile";
import Bootstrap2 from "../Resources/newfile2";


function FaqComponent() {
   



    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    return (<>
    <div className="complete-div-for-faqs">
        {/* <div className="bail_by_fax_and_email_image-hk-py-faq">
            <div class="anim-icons-hk-py-faq full-width-hk-py-faq">
                <span class="icon-hk-py-faq icon-bull-eye-hk-py-faq"></span>
                <span class="icon-hk-py-faq icon-dotted-circle-hk-py-faq"></span>
                <h1 style={{ color: 'white' }}>FAQ's </h1>
                <div>
                    <a href="/"><h4 style={{ color: 'white' }}> Home | FAQ's</h4></a>
                </div>
            </div>
        </div> */}
        <div >
            <div className="banner-image-content-opo california-top-heading-opo">
                <div style={{paddingTop:"10%",paddingBottom:"6%"}}>
                    <h1  className="Release-From-Jail-opp" data-aos="fade-right" style={{color:"#FFAE00", fontSize:"5vw", paddingTop:"10%", paddingBottom:"20%", marginLeft:"30%"}}>FAQ's</h1>
                </div>
            </div>
            </div>
        <div className="bottom-part-py-faq">
            <h5 style={{ color: "#fe00c5" }}>Some FAQ's</h5>
            <h1 className="second-sub-title-py-faq">GENERAL QUESTIONS</h1>
            <img style={{ padding: "2%" }} src={divider} alt="" />
        </div>
        <div className="alignment-faq">
            <div className="top-part-for-faqs">
           <Bootstrap/>
           </div >
           <div className="bottom-part-for-faqs">
           <Bootstrap2/>
           </div>
        </div>
<div className="client-section-for-faqs">
        {/* ///clients-section */}
        <section class="clients-section-bbp-faq">

            <div class="auto-container-bbp">

                <div class="row-bbp-faq">


                    <div class="title-column1-faq">

                        <div class="sec-title-bbp-faq">

                            <span class="sub-title">Clients</span>

                            <h6 className="mini-heading-bbp">WE ARE A PROUD MEMBER OF FOLLOWING REPUTABLE ORGANIZATIONS</h6>

                            <div class="divider-bbp"></div>

                            <div class="text-bbp-faq">A leader among Downey Bail Bonds companies.Downey Bail Bonds has been a valuable business leader and trusted member of the community for decades. Downey Bail Bonds excellence has earned it membership in the following organizations:  </div>

                            <a href="/Contactus" class="theme-btn-bbp-faq btn-style-one-bbp-faq"><a href="/Contactus" style={{color:"white"}}><span class="btn-title-bbp">Contact Us</span></a></a>

                        </div>

                    </div>

                    <div class="title-column2-faq">

                        <div class="sponsors-outer-bbp-faq">

                            <div class="row1-bbp-faq">



                                <div class="client-block-bbp-faq " style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInRight' }} data-aos="fade-left" >

                                    <div class="image-box-bbp"><a href="#"><img src={pic1} alt="" /></a></div>

                                </div>


                                <div class="client-block-bbp-faq" data-wow-delay="300ms" style={{ visibility: 'visible', animationDelay: '300ms', animationName: 'fadeInRight' }} data-aos="fade-left">

                                    <div class="image-box-bbp"><a href="#"><img src={pic2} alt="" /></a></div>

                                </div>



                                {/* <!-- Client Block --> */}

                                <div class="client-block-bbp-faq" data-wow-delay="600ms" style={{ visibility: 'visible', animationDelay: '600ms', animationName: 'fadeInRight' }} data-aos="fade-left">

                                    <div class="image-box-bbp"><a href="#"><img src={pic3} alt="" /></a></div>

                                </div>



                                {/* <!-- Client Block --> */}

                                <div class="client-block-bbp-faq" data-wow-delay="900ms" style={{ visibility: 'visible', animationDelay: '900ms', animationName: 'fadeInRight' }} data-aos="fade-left">

                                    <div class="image-box-bbp"><a href="#"><img src={pic4} alt="" /></a></div>

                                </div>



                                {/* <!-- Client Block --> */}

                                <div class="client-block-bbp-faq" data-wow-delay="1200ms" style={{ visibility: 'visible', animationDelay: '1200ms', animationName: 'fadeInRight' }} data-aos="fade-left">

                                    <div class="image-box-bbp larger-one"><a href="#"><img src={pic5} alt="" /></a></div>

                                </div>



                                {/* <!-- Client Block --> */}

                                <div class="client-block-bbp-faq" data-wow-delay="1500ms" style={{ visibility: 'visible', animationDelay: '1500ms', animationName: 'fadeInRight' }} data-aos="fade-left">

                                    <div class="image-box-bbp"><a href="#"><img src={pic6} alt="" /></a></div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
        </div>
        </div>

    </>)
}
export default FaqComponent;