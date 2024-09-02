import React from "react";
import "./b-by-fax.css";
import pic1 from "../Photos/1c.png";
import pic2 from "../Photos/2c.png";
import pic3 from "../Photos/3c.png";
import pic4 from "../Photos/4c.png";
import pic5 from "../Photos/5c.png";
import pic6 from "../Photos/6c.png";
import { useEffect } from "react";
import FaxandEmail from "../BailCosts/component";

import AOS from 'aos';
import 'aos/dist/aos.css';
function BailBottomPart(){

        useEffect(() => {
            AOS.init({
              duration: 800,
              once: true,
            });
          }, []);
    return(<>
    <FaxandEmail/>
    <section class="testimonial-section-bbp">
        <div class="auto-container-bbp">
            <div class="sec-title-bbp text-center-bbp">
                <h4 className="mini-heading-bbp">Returning the Bail Paperwork</h4>
                <p>After the paperwork is filled out, and you have signed it for your own protection, you can fax it back or scan it and return it to us by email. bailbondsdowney@gmail.com
                    
                </p>
                
            </div>

          
         
        </div>
    </section>

<section class="call-to-action-two-bbp bg-img-bbp" >
        <div class="auto-container-bbp">
            <div class="row-bbp">
                <div class="content-column-bbp col-lg-6-bbp offset-lg-6-bbp">
                    <div class="content-box-bbp" style = {{visibility: 'visible'}}>
                        <h2>We’re Here For You</h2>
                        <span class="text">Our unique blend of personal, hands-on service and Internet technology provides the fastest and most efficient service to people who have a family member, loved one or friend in a Downey jail.

                          <br/>Of course, if you prefer to work with a bondsman in person, right from the start, we have that option available to you, too. You can either come to our office or we can meet you at the jail or in your home or office.  </span>
                          <p style={{color:"white"}} className="paras-bbp">A licensed bondsman is happy to answer all your questions and help you.</p>
                      
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="clients-section-bbp">

<div class="auto-container-bbp">

    <div class="row-bbp">


        <div class="title-column1">

            <div class="sec-title-bbp">

                <span class="sub-title">Clients</span>

                <h6 className="mini-heading-bbp">WE ARE A PROUD MEMBER OF FOLLOWING REPUTABLE ORGANIZATIONS</h6>

                <div class="divider-bbp"></div>

                <div class="text-bbp">A leader among Downey Bail Bonds companies . Downey Bail Bonds has been a valuable business leader and trusted member of the community for decades. Downey Bail Bonds excellence has earned it membership in the following organizations:  </div> 

                <a href="/Contactus" class="theme-btn-bbp btn-style-one-bbp"><a href="/Contactus" class="btn-title-bbp">Contact Us</a></a>

            </div>

        </div>

        <div class="title-column2">

            <div class="sponsors-outer-bbp">

                <div class="row1-bbp">

        

                    <div class="client-block-bbp " style={{visibility: 'visible', animationDelay: '300ms',  animationName: 'fadeInRight'}} data-aos="fade-left" >

                        <div class="image-box-bbp"><a href="#"><img src={pic1} alt="" /></a></div>

                    </div>


                    <div class="client-block-bbp" data-wow-delay="300ms" style={{visibility: 'visible', animationDelay: '300ms',  animationName: 'fadeInRight'}} data-aos="fade-left">

                        <div class="image-box-bbp"><a href="#"><img src={pic2} alt="" /></a></div>

                    </div>



                    {/* <!-- Client Block --> */}

                    <div class="client-block-bbp" data-wow-delay="600ms" style={{visibility: 'visible', animationDelay: '600ms',  animationName: 'fadeInRight'}} data-aos="fade-left">

                        <div class="image-box-bbp"><a href="#"><img src={pic3} alt="" /></a></div>

                    </div>



                    {/* <!-- Client Block --> */}

                    <div class="client-block-bbp" data-wow-delay="900ms" style={{visibility: 'visible', animationDelay: '900ms',  animationName: 'fadeInRight'}} data-aos="fade-left">

                        <div class="image-box-bbp"><a href="#"><img src={pic4} alt="" /></a></div>

                    </div>



                    {/* <!-- Client Block --> */}

                    <div class="client-block-bbp" data-wow-delay="1200ms" style={{visibility: 'visible', animationDelay: '1200ms',  animationName: 'fadeInRight'}} data-aos="fade-left">

                        <div class="image-box-bbp larger-one"><a href="#"><img src={pic5} alt="" /></a></div>

                    </div>



                    {/* <!-- Client Block --> */}

                    <div class="client-block-bbp" data-wow-delay="1500ms" style={{visibility: 'visible', animationDelay: '1500ms',  animationName: 'fadeInRight'}} data-aos="fade-left">

                        <div class="image-box-bbp"><a href="#"><img src={pic6} alt="" /></a></div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>

</section>
    </>)
}
export default BailBottomPart;