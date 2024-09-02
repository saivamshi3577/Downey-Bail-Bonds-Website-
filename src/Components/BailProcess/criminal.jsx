import React from "react";
import "./criminal.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import IconKK from "../Photos/Icons.jpg"
import logosKK from "../Photos/4logos.png"
import rectangle455 from "../Photos/Rectangle 455.jpg"
import rectangle456 from "../Photos/Rectangle 456.jpg"
import { useNavigate } from "react-router-dom";

function BFC() {
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
const navigate = useNavigate()
  return (


    <>
      <div>
        <div style={{ margin: '0px' }}>
          {/* <div >
                <img src={banner} alt="" className="banner-image" style={{width:'100%', border: "7px solid white"}} />
            </div> */}
          <div className="banner-image-content">
            <div>
              <h1 className="Bail-for-criminal-charges" data-aos="fade-up">Bail for Criminal Charges</h1>
            </div>
            <div className="bail-image-inner-content ">
              <div className="bail-image-inner-content1" data-aos="fade-down-right" >
                <p style={{marginTop:"3%"}} >"Within the labyrinth of criminal proceedings, bail stands as both a key and a lock, </p>
                <p style={{marginTop:"3%"}}>tethering liberty to accountability in the intricate dance of justice."</p>
                {/* <p>bail processing, ensuring streamlined efficiency throughout.</p> */}
              </div>
              <button onClick={()=> {navigate("/Contactus")}}  className="bail-image-inner-content2" data-aos="fade-left">Get In Touch</button>
            </div>

          </div>


        </div>



        <div className="background-container-skbhp25">
          <div className="alignment-for-top-part-skbhp25">
            <div className="top-part-in-subpart-skbhp25">
              <h1 className="heading-for-top-part-skbhp25" data-aos="fade-left">Getting Bail Set For Criminal Charges</h1>
              <p className="para-for-top-part-skbhp25" data-aos="fade-right">We provide Downey Bail Bonds for all criminal charges throughout Southern Downey. If you are looking for Downey Bail Bond information for felonies, misdemeanour, DUI, theft, drug charges or any other criminal law charge, chances are Downey Bail Bonds is in a position to help
                <br />
                <br />You can call me 24/7 at 1-800-944-1599.</p>


              <h1 className="heading-for-top-part-skb" data-aos="fade-left">Criminal Charges We Can Bail Out</h1>
              <p className="para-for-top-part-skb" data-aos="fade-right">
                We provide Bail Bonds for all criminal charges in Downey for Bail amounts from $10,000 to large bonds in excess of a million dollars. This list is intended to be representative of what we see most often. If you don’t see the charge in question here, please call for specific information to meet your needs.</p>
            </div>
            <div className="bottom-part-in-subpart-skb">
              <div class="image-box-tm-bskhp25" id="image-box">



                <div class="image-tm-bskhp25  xtra-image-tm-bskhp25" ><a href="speaker-detail.html">
                  <img src={rectangle455} alt="" className="images-tm-bsk" data-aos="fade-down" /></a>
                  <p className="line-throughhp25" style={{ top: '7%' }} data-aos="fade-up"></p>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="bail_criminal_middle_container">
          <div className="bail_criminal_middle_container101">
            <ul  data-aos="fade-right">
              <li>Bankruptcy & Fraud Charges </li>
              <li>Bribery</li>
              <li>Burglary</li>
              <li>Conspiracy</li>
              <li>Credit Card Fraud</li>
              <li>Cyber Crimes</li>
              <li>Domestic Violence</li>
              <li>Driving Under the Influence (DUI)</li>
              <li>Drug Charges</li>
              <li>Drunk In Public</li>
              <li>Misdemeanor</li>
              <li>Perjury Charges</li>
              <li>Prescription Fraud</li>
              <li>Possession of Controlled Substance</li>
              <li>Shoplifting</li>
              <li>Wire Fraud</li>
              <li>Weapons</li>
            </ul>
          </div>

          <div className="bail_criminal_middle_container102">
            {/* <img src={rectangle456} alt="" className="" /> */}
          </div>
          <div className="bail_criminal_middle_container101">
            <ul data-aos="fade-left">
              <li>Bankruptcy & Fraud Charges </li>
              <li>Bribery</li>
              <li>Burglary</li>
              <li>Conspiracy</li>
              <li>Credit Card Fraud</li>
              <li>Cyber Crimes</li>
              <li>Domestic Violence</li>
              <li>Driving Under the Influence (DUI)</li>
              <li>Drug Charges</li>
              <li>Drunk In Public</li>
              <li>Misdemeanor</li>
              <li>Perjury Charges</li>
              <li>Prescription Fraud</li>
              <li>Possession of Controlled Substance</li>
              <li>Shoplifting</li>
              <li>Wire Fraud</li>
              <li>Weapons</li>
            </ul>
          </div>



        </div>
        <div className="background-container-skb-2hp25 " >
          <div className="alignment-for-top-part-skbhp25">
            <div className="top-part-in-subpart-skbhp25">



              <h1 className="heading-for-top-part-skb-2hp25" data-aos="fade-left">Downey Bail Bond Cost</h1>
              <p className="para-for-top-part-skb-2hp25" data-aos="fade-right">A Downey Bail Bond fee will cost you 10% of the total amount of bail. As an example, if your bail amount is $20,000; you will be charged $2,000 from the bail bond company. This amount is non-refundable. Bail bond companies are regulated by the Downey Department of Insurance. Bail bond fees are established with the DOI so you should be paying the same amount with any Downey Bondsmen. There may be unusual circumstances where extra charges are applied but these charges should all be clearly stated by the Bail Bond company. </p>
            </div>

          </div>

        </div>
        <div className="Lower-images-div">
          <div className='images-div'>
            <img src={IconKK} className='ImageKK'></img>
            <h3 className='patnersKK-heading'>Meet The Partners</h3>
            <img src={IconKK} className='ImageKK'></img>

          </div>
          <div className='logos-div' data-aos="slide-up" data-aos-duration="1000">
            <img src={logosKK} className='logos-images'></img>
          </div>
        </div>

      </div>
    </>)
}
export default BFC;