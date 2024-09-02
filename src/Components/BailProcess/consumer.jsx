import React from "react";
import "./consumertips.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import rectanglephoto from "../Photos/rectanglephoto.png";
import standingphoto from "../Photos/standingphoto.png";

import IconKK from "../Photos/Icons.jpg";
import logosKK from "../Photos/4logos.png";
import Consumertop from "./consumertop.jsx";


function Consumertips() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Function to check if an element is in viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    var imageBox = document.getElementById('image-box');
    if (isInViewport(imageBox)) {
      imageBox.classList.add('show-animation');
      window.removeEventListener('scroll', handleScroll); // Remove event listener once animation is triggered
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  return (<>
    <Consumertop/>
    <div className="kkkksk">
      <div className="background-container-skbsk">
        <div className="alignment-for-top-part-skbsk">
          <div className="top-part-in-subpart-skbsk">
            <h1 className="heading-for-top-part-skbsk" data-aos="fade-left">Consumer Tips</h1>
            <p className="para-for-top-part-skbsk" style={{marginBottom:"6%"}} data-aos="fade-right">Like most businesses, some bail agencies are owned and operated by honest, hard-working, reputable professionals and some are not. Please protect yourself and your family by following these few simple consumer tips: </p>
              <ul className="para-for-top-part-skbsk" style={{color:"white", marginTop:"-5%", marginLeft:"3%"}}>
                <li>Make sure that you only contract with a licensed bail agent. Request to see the bail agent’s license and identification prior to any bail transaction</li>
                <li>Make sure that the bail agent charges you only legal rates. The premium charged for a Downey bail bond in most states is normally 10% of the full bail amount. Additional charges should be categorized and explained till your satisfaction.</li>
                <li>Take receipts for all charges.</li>
                <li>Also collect copies of all signed contracts and agreements.</li>
                <li>If you are concerned about working with a particular bail agency, do not enter into a bail bond agreement with them. There are plenty of qualified bail professionals available to assist you. We hope you choose us for all of your bail bond needs.</li>
              </ul>
              <p className="para-for-top-part-skbsk" style={{marginLeft:"-2%"}}>The Bail Agent will ask you some basic questions relating to who, what, where, and why the person is in custody. The Agent will also ask you questions about the personal history of the person being held such as where they work, previous arrests, time in current residence.</p>
           
            
          </div>
          <div className="bottom-part-in-subpart-skbsk">
            <div class="image-box-tm-bsksk" id="image-box">



              <div class="image-tm-bsksk  xtra-image-tm-bsksk" ><a href="speaker-detail.html">
                <img src={rectanglephoto} alt="" className="images-tm-bsksk" data-aos="fade-down" /></a>
                <p className="line-throughsk" style={{ top: '7%' }} data-aos="fade-up"></p>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="background-container-skb-2sk " >
        <div className="alignment-for-top-part-skbsk">
          <div className="top-part-in-subpart-skbsk">

            <h1 className="heading-for-top-part-skb-2sk" data-aos="fade-left">1 : Get All The Information</h1>
            <p className="para-for-top-part-skb-2sk" data-aos="fade-right">
                <ul>
                    <li>Be sure about which jail he or she is in.</li>
                    <li>If you are not aware, then use our inmate information</li>
                    <li>Is it a county, city, or federal facility?.</li>
                    <li>What is the booking number?</li>
                    <li>What is the charge?</li>
                    <li>Have the person’s full legal name.</li>
                    <li>Try to determine the date of birth, if possible.</li>
                </ul>
              <p style={{marginLeft:"-3%"}}>Try to find out how much the Bail amount is. Downey Bail Bond Agencies are normally required by law to collect 10% of the Bail set as a Premium. You will have to pay this amount or arrange financing with us to assemble the funds. Cash, credit cards, and checks are just some of the ways in which we help our clients assemble the funds needed.The Bail Bond Agency guarantees the full amount of the Bail to the Court as guarantee that the person will appear. You may be required to guarantee that appearance by providing collateral for the entire bond amount. Therefore, try to know what collateral property you could provide (e.g. House, Car, Boat, or other property of value).</p>  
            </p>
            <h1 style={{marginLeft:"-5%"}} className="heading-for-top-part-skb-2sk" data-aos="fade-left">2 : Call DOWNEY BAIL BONDS at 562-287-8388</h1>
            <p className="para-for-top-part-skb-2sk" data-aos="fade-right">
                <ul style={{marginLeft:"-7px"}}>
                    <li>The Downey Bail Bond Agent will ask you some basic questions relating to who, what, where, and why the person is in custody. The Agent will also ask you questions about the personal history of the person being held such as where they work, previous arrests, time in current residence.</li>
                </ul>
            </p>
            <h1 style={{marginLeft:"-5%", width:"106%"}} className="heading-for-top-part-skb-2sk" data-aos="fade-left">3 : Stay Home, Stay Calm, and Be Ready For Phone <span>Calls</span> </h1>
            <p className="para-for-top-part-skb-2sk" data-aos="fade-right">
                <ul style={{marginLeft:"-7px"}}>
                    <li>Go to your home or other place where you can stay for a while and receive telephone calls. We will probably need to contact you several times. Be sure you know the telephone number where you are staying. Try to have access to a fax machine or the number to one you can access (e.g. the local Kinko’s fax number, a friend who has a fax, etc.)There is normally no need for you to go to the jail. In most jurisdictions, only a licensed Bail Bond Agent can post bail. Also, persons who have just been arrested and are being processed are usually not eligible to see visitors for several hours.Try to remain Calm, we are working on your situation as fast as the law allows. Downey Bail Bonds will next call the facility where the person is being held and determine exact bail information and develop a plan to get the person released. A Bail Agent will call you as soon as this determination is made to discuss the plan and make Bail arrangements with you. Remember, many jurisdictions (especially those in major metropolitan areas) are very slow in processing and often have their telephone lines overloaded with calls… </li>
                </ul>
                
            </p>
            
          </div>
          <div className="bottom-part-in-subpart-skbsk">
            <div class="image-box-tm-bsk-2sk " id="image-box">


              <div class="image-tm-bsk-2sk  xtra-image-tm-bsksk"><a href="speaker-detail.html"><img src={standingphoto} alt="" className="images-tm-bsk-2sk " data-aos="fade-down" /></a>
                <p className="line-through-2sk" style={{ top: '7%' }} data-aos="fade-up"></p></div>
            </div>

          </div>
        </div>

      </div>
      <div className="Lower-images-divsk">
        <div className='images-divsk'>
          <img src={IconKK} className='ImageKKsk'></img>
          <h3 className='patnersKK-headingsk'>Meet The Partners</h3>
          <img src={IconKK} className='ImageKKsk'></img>

        </div>
        <div className='logos-divsk' data-aos="slide-up" data-aos-duration="1000">
          <img src={logosKK} className='logos-imagessk'></img>
        </div>
      </div>

    </div>
  </>)
}
export default Consumertips;