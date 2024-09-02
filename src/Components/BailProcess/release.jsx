import React from "react";
import "./release.css";
import { useEffect } from "react";
// import banner from "./Banner.png"
// import IconKK from "../Icons.jpg"
// import logosKK from "../4logos.png"
// import Agentimg from "./Bail-agent-img.png"
// import signingimg from "./Cosigning-img.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

function Releasetop() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
 const navigate = useNavigate()   
    return (
        <><div style={{margin:'0px'}}>
            {/* <div >
                <img src={banner} alt="" className="banner-image" style={{width:'100%', border: "7px solid white"}} />
            </div> */}
            <div className="banner-image-content">
                <div>
                    <h1 className="Release-From-Jail" data-aos="fade-up">Release From Jail</h1>
                </div>
                <div className="banner-image-inner-content ">
                    <div className="banner-image-inner-content1" data-aos="fade-down-right" >
                        <p >Rely on our efficient arrest and booking services for swift release</p>
                        <p>from jail, with professional handling of legal procedures, including</p>
                        <p>bail processing, ensuring streamlined efficiency throughout.</p>
                    </div>
                    <button onClick={()=> navigate("/Contactus")} className="banner-image-inner-content2" data-aos="fade-left">Get In Touch</button>
                </div>

            </div>
           

        </div>

        </>
    )
}
export default Releasetop;