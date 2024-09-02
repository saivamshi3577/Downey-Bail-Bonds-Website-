import React from "react";
import "./contactus.css";

import img from "../Photos/icon-world.png"

function Contactus(){
    return (
<div class="call-to-action  backgroundimg"  >

<div class="anim-icons full-width">

    <span class="icon icon-dotted-world left"></span>

    <span class="icon icon-dotted-world right"></span>

</div>



<div class="auto-container1">

    <div class="content-box wow fadeInUp">

        <h2 className="contact-header">Contact Us immediately for fast and reliable services</h2>

        <span class="text content-box">Our dedicated and professional bail bonds agents are available 24 hours a day, 7 days a week to support you, answer any of your questions, and to get you or your loved one out of jail as quickly as possible.</span>

        <a href="/Contactus"  class="theme-btn btn-style-two"><span class="btn-title">Contact Us</span></a>

    </div>
    {/* <div class="world-animation">
    <img src={img} alt="" />
    </div> */}


</div>

</div>
    )
}

export default Contactus;