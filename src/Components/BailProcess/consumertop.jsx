import React from "react";
import "./release.css";
import { useEffect } from "react";
// import banner from "./Banner.png"
// import IconKK from "./Icons.jpg"
// import logosKK from "./4logos.png"
// import Agentimg from "./Bail-agent-img.png"
// import signingimg from "./Cosigning-img.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";

function Consumertop() {
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
                    <h1 className="Release-From-Jail" data-aos="fade-up" style={{marginBottom:"2%"}}>Consumer Tips</h1>
                </div>
                <div className="banner-image-inner-content ">
                    <div className="banner-image-inner-content1" data-aos="fade-down-right" >
                        <p >When seeking swift release from jail, rely on our efficient arrest and </p>
                        <p>booking services. We ensure professional handling of legal procedures, </p>
                        <p>including bail processing, for a streamlined experience throughout.</p>
                    </div>
                    <button onClick={()=> {navigate("/Contactus")}}  className="banner-image-inner-content2" data-aos="fade-left">Get In Touch</button>
                </div>

            </div>
           

        </div>

        </>
    )
}
export default Consumertop;