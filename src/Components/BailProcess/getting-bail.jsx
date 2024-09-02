import React from "react";
import "./ggetting-bail.css";
import { useEffect } from "react";
import handbook from "../Photos/hand-book.jpg";

// import banner from "./Banner.png"
import IconKK from "../Photos/Icons.jpg"
import logosKK from "../Photos/4logos.png"
// import Agentimg from "./Bail-agent-img.png"
// import signingimg from "./Cosigning-img.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

function GettingBail() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
    const navigate = useNavigate()
    return (
        <><div style={{overflow:"hidden"}}>
            <div className="bail-upper-bg-sm">
                <div>
                <h1 className="bail-upper-heading-sm">Bail Process Downey Bail Bonds</h1>
                <div style={{display:"flex"}} className="alignmebt-of-para-button">
                    <div className="top-part-sm">
                    <h4 className="bail-uppper-para-sm">"Downey Bail Bonds: Guiding you through the intricate maze of the bail process, ensuring swift release and a pathway towards legal resolution."</h4>
                    </div>
                    <div className="bottom-part-sm">
                    <button onClick={()=> {navigate("/Contactus")}} className="banner-image-inner-content2-sm" data-aos="fade-left">Get In Touch</button>
                    </div>
                </div>
                </div>

            </div>
            <div className="background-container-skb-sm">
            <div className="alignment-for-top-part-skb-sm">
                <div className="top-part-in-subpart-skb-sm">
            <h1 className="heading-for-top-part-skb-sm" data-aos="fade-left">How a Downey Bail Bond Works</h1>
            <h4 className="mini-heading-sm">The Downey Bail Bonds Process</h4>
            <p className="para-for-top-part-skb-sm" data-aos="fade-right">Downey Bail Bonds has created a Downey Bail bond Process Infographic that explains the bail process easier to clients. As part of its 10th anniversary, the company will make this infographic available so that future and existing clients understand better the level of services available to them from Downey Bail Bonds.
</p><p className="para-for-top-part-skb-sm">Downey Bail Bond agents are experts in guiding you through the bail process. We make it simple and easy to understand. Let us find a solution for your Downey Bail bond needs we are available 24 hours a day 7 days a week. 
</p>

            </div>
            <div className="bottom-part-in-subpart-skb-sm">
            <div class="image-box-tm-bsk-sm" id="image-box">
           
   

<div class="image-tm-bsk-sm  xtra-image-tm-bsk" ><a href="speaker-detail.html">
<img src={handbook} alt="" className="images-tm-bsk-sm" data-aos="fade-down" /></a>
<p className="line-through-sm" style={{top:'-10%'}} data-aos="fade-up"></p>
</div>
</div>

            </div>
            </div>

        </div>

        <div className="Lower-images-div">
                    <div className='images-div'>
                        <img src={IconKK} className='ImageKK'></img>
                        <h3 className='patnersKK-heading'>Meet The Partners</h3>
                        <img src={IconKK} className='ImageKK'></img>

                    </div>
                    <div className='logos-div'  data-aos="slide-up" data-aos-duration="1000">
                        <img src={logosKK} className='logos-images'></img>
                    </div>
                </div>
           

        </div>

        </>
    )
}
export default GettingBail;
    