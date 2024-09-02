import React from "react";
import "./clients.css";
import img1 from "../Photos/1.png";
import img2 from "../Photos/client-2.png";
import img3 from "../Photos/client-3.png";
import img4 from "../Photos/client-4.png";
import img5 from "../Photos/client-3.png";
import img6 from "../Photos/1.png";
import divider from "../Photos/divider.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import "./animate.css";
import { useEffect } from "react";

function Clients() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    useEffect(() => {
        AOS.refresh();
    }, []);
    return (


        <div>
            <div className="clients-proud-members">
                <div className="container">
                    <span className="clients">Clients</span>
                    <h6 className="header">WE ARE A PROUD MEMBER OF FOLLOWING REPUTABLE ORGANIZATIONS</h6>
                    <img style={{ marginTop: "30px", marginBottom: "30px" }} src={divider} alt="" />
                    <div className="paragraph">A leader among Downey Bail Bonds companies . Downey Bail Bonds has been a valuable business leader and trusted member of the community for decades. Downey Bail Bonds excellence has earned it membership in the following organizations:  </div>
                    <a href="/Contactus" style={{ marginTop: "30px" }} class="theme-btn btn-style-one"><span class="btn-title">Contact Us</span></a>
                </div>
                <div className="w5">
                    <div className="container1">
                        <div className=" mainimg" data-aos="fade-left" data-aos-delay="200">
                            <a href="#"><img className="w4  image-box" src={img1} alt="" /></a>
                        </div>
                        <div className=" mainimg" data-aos="fade-left" data-aos-delay="400">
                            <a href="#"><img className="w4 image-box" src={img2} alt="" /></a>
                        </div>

                        <div className=" mainimg" data-aos="fade-left" data-aos-delay="600">
                            <a href="#"><img className="w4 image-box" src={img3} alt="" /></a>
                        </div>
                    </div>
                    <div className="container1" >
                        <div className="mainimg" data-aos="fade-left" data-aos-delay="800">
                            <a href="#"><img className="w4 image-box" src={img4} alt="" /></a>
                        </div>
                        <div className="mainimg" data-aos="fade-left" data-aos-delay="1000">
                            <a href="#"><img className="w4 image-box" src={img5} alt="" /></a>
                        </div>
                        <div className="mainimg" data-aos="fade-left" data-aos-delay="1200">
                            <a href="#"><img className="w4 image-box" src={img6} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Clients;