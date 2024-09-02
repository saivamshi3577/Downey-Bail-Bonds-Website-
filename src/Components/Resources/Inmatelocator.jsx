import React from "react";
import "./Inmatelocator.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import rectangle443 from "../Photos/Rectangle 443.png";
import IconKK from "../Photos/Icons.jpg";
import logosKK from "../Photos/4logos.png";
function Inmatelocator() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);




    return (<>
        <div >
            <div className="banner-image-content-opoin california-top-heading-opoin">
                <div>
                    <h1 className="Release-From-Jail-oppin" data-aos="fade-right" style={{ color: "#FFAE00" }}>Inmate Locator</h1>
                </div>
            </div>
        </div>


        <div>
            <h1 className="heading-for-top-part-skb-2-oppin" style={{ textAlign: "center" }} data-aos="fade-left">INMATE SEARCH</h1>
        </div>
        <div className="kkkk-oppin">
            <div className="background-container-skb-2-oppin " >
                <div className="alignment-for-top-part-skb-oppin">
                    <div className="top-part-in-subpart-skb-oppin">


                        <p className="para-for-top-part-skb-2-oppin" data-aos="fade-right">
                            <ul>
                                <li>Los Angeles County Jail </li>
                                <li>Los Angeles County Patrol station   </li>
                                <li>Orange County  </li>
                                <li>Riverside County  </li>
                                <li>San Diego County  </li>
                                <li>San Bernardino County </li>
                                <li>Kern County </li>
                                <li>San Diego County Jail </li>
                                <li>Federal Inmate Search </li>
                                <li>California Department of Corrections Inmate Search </li>
                                <li>Clark County Jail Inmate Search, Nevada  </li>
                                <li>Ventura County Jail</li>
                                <li>U.S. Immigration & Customs Enforcement (ICE) detainee locator</li>
                            </ul>
                        </p>

                    </div>
                    <div className="bottom-part-in-subpart-skb-oppin">
                        <div className="image-box-tm-bsk-2-oppin " id="image-box">
                            <div className="image-tm-bsk-2-oppin  xtra-image-tm-bsk-oppin"><a href="speaker-detail.html"><img src={rectangle443} alt="" className="images-tm-bsk-2-oppin image-modifiction1in " data-aos="fade-down" /></a>
                                <p className="line-through-2-oppin" style={{ top: '7%' }} data-aos="fade-up"></p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="Lower-images-div-oppin">
                <div className='images-div-oppin'>
                    <img src={IconKK} className='ImageKK-oppin'></img>
                    <h3 className='patnersKK-heading-oppin'>Meet The Partners</h3>
                    <img src={IconKK} className='ImageKK-oppin'></img>

                </div>
                <div className='logos-div-oppin' data-aos="slide-up" data-aos-duration="1000">
                    <img src={logosKK} className='logos-images-oppin'></img>
                </div>
            </div>


        </div>
    </>)
}
export default Inmatelocator;