import React from "react";
import "./californiabailschedules.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import rectangle449 from "../Photos/Rectangle 449.png";
import IconKK from "../Photos/Icons.jpg";
import logosKK from "../Photos/4logos.png";

function Californiabailschedules() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);




    return (<>
        <div >
            <div className="banner-image-content-opoca california-top-heading-opoca">
                <div>
                    <h1 className="Release-From-Jail-oppca" data-aos="fade-right" style={{ color: "#FFAE00" }}>California Bail Schedules</h1>
                </div>
            </div>
        </div>


        <div>
            <h1 className="heading-for-top-part-skb-2-oppca" style={{ textAlign: "center" }} data-aos="fade-left">BAIL SCHEDULE</h1>
        </div>
        <div className="kkkk-oppca">
            <div className="background-container-skb-2-oppca " >
                <div className="alignment-for-top-part-skb-oppca">
                    <div className="top-part-in-subpart-skb-oppca">


                        <p className="para-for-top-part-skb-2-oppca" data-aos="fade-right">
                            <ul>
                                <li>Kern County Superior Court Bail Schedule    </li>
                                <li>Los Angeles County Superior Court FELONY Bail Schedule  </li>
                                <li>Los Angeles County Superior Court INFRACTIONS and MISDEMEANORS Bail Schedule </li>
                                <li>Orange County Superior Court Bail Schedule </li>
                                <li>Orange County Uniform Bailand PenaltySchedules </li>
                                <li>Riverside County Superior Court Bail Schedule</li>
                                <li>California Department of Corrections Inmate Search</li>
                                <li>San Bernardino County Bail Schedule</li>
                                <li>San Diego County Superior Court Bail Schedule</li>
                                <li>Ventura County Superior Court Bail Schedule</li>
                            </ul>
                        </p>

                    </div>
                    <div className="bottom-part-in-subpart-skb-oppca">
                        <div className="image-box-tm-bsk-2-oppca " id="image-box">
                            <div className="image-tm-bsk-2-oppca  xtra-image-tm-bsk-oppca"><a href="speaker-detail.html"><img src={rectangle449} alt="" className="images-tm-bsk-2-oppca image-modifiction1ca " data-aos="fade-down" /></a>
                                <p className="line-through-2-oppca" style={{ top: '7%' }} data-aos="fade-up"></p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="Lower-images-div-oppca">
                <div className='images-div-oppca'>
                    <img src={IconKK} className='ImageKK-oppca'></img>
                    <h3 className='patnersKK-heading-oppca'>Meet The Partners</h3>
                    <img src={IconKK} className='ImageKK-oppca'></img>

                </div>
                <div className='logos-div-oppca' data-aos="slide-up" data-aos-duration="1000">
                    <img src={logosKK} className='logos-images-oppca'></img>
                </div>
            </div>


        </div>
    </>)
}
export default Californiabailschedules;