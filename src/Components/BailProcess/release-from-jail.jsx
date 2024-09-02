import React from "react";
import "./release-from-jail-sk.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import jail from "../Photos/jail-img.jpg"
import call from "../Photos/call-img.jpg"
import IconKK from "../Photos/Icons.jpg"
import logosKK from "../Photos/4logos.png"
import Releasetop from "./release";
function RFJ() {
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
       <Releasetop/>
    <div className="complete-div-container-skb-112">
      <div className="background-container-skb-112">
        <div className="alignment-for-top-part-skb-112">
          <div className="top-part-in-subpart-skb-112">
            <h1 className="heading-for-top-part-skb-112" data-aos="fade-left" style={{marginBottom:"3%"}}>Release by Downey Bail Bond</h1>
            <p className="para-for-top-part-skb-112" data-aos="fade-right">A judge or magistrate normally sets the Bail amount for a particular case according to a county Bail Schedule (a.k.a. Schedule of Bail for All Bailable Offenses) and the particulars of a case. The Bail Schedule itself is usually set annually by a majority vote of superior, municipal, and other judges. In setting or denying bail, the judge or magistrate's first concern is the protection of the public, followed by the seriousness of the offense and previous criminal record. Further, the Judge must be convinced that no part of the Bail was feloniously obtained.
              <ul style={{marginLeft:"3%"}}><li>The Downey Bail Bond Process</li>
                <li>Frequently Asked Questions (FAQs)</li>
                <li>Bail Bond Costs</li></ul>
              Or, you may call for information specific to your case or to start the process for your Downey bail bonds. phone number is 562-287-8388. After an arrestee has been booked and processed, they may be eligible for release from jail. In Downey, options for jail release include</p>
            <h1 className="heading-for-top-part-skb-112" data-aos="fade-left">Types of Release From Jail</h1>
            <p className="para-for-top-part-skb-112" data-aos="fade-right">



              <ul style={{marginLeft:"3%"}}><li> After an arrestee has been booked and processed, they may be eligible for release from jail. In Downey, options for jail release include:</li>
                <li>Bail Bonds</li>
                <li>
                  Own Recognizance (“O.R.”)</li>
                <li>Property Bond</li>
                <li>
                  Cash Bond</li>
                <li>
                  Citation Release (“Cite Out”)</li></ul>
            </p>
          </div>
          <div className="bottom-part-in-subpart-skb-112">
            <div class="image-box-tm-bsk-112" id="image-box">



              <div class="image-tm-bsk-112  xtra-image-tm-bsk-112" ><a href="speaker-detail.html">
                <img src={jail} alt="" className="images-tm-bsk-112" data-aos="fade-down" /></a>
                <p className="line-through-112" style={{ top: '7%' }} data-aos="fade-up"></p>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="background-container-skb-2-112 " >
        <div className="alignment-for-top-part-skb-112">
          <div className="top-part-in-subpart-skb-112">

            <h1 className="heading-for-top-part-skb-2-112" data-aos="fade-left">Release on Own Recognizance (or "O.R.")</h1>
            <p className="para-for-top-part-skb-2-112" data-aos="fade-right">
              When the defendant is released with a promise to return to court as directed by the court on his or her "own recognizance", this is known as "O.R.". In this type of case, the judge believes the defendant is not a flight risk and will return for court dates without the added inducement of bail. Paperwork is provided to the defendant at the time of O.R, indicating all necessary information about returning to court. A bail bond company is not necessary when the defendant is released on their Own Recognizance.

            </p>
            <h1 className="heading-for-top-part-skb-2-112" data-aos="fade-left">Property Bond Release</h1>
            <p className="para-for-top-part-skb-2-112" data-aos="fade-right">A defendant may occasionally have the option to use
              a property bond to post bail. With property bond, the court is able to record a lien on
              the property for the amount of bail. The property must have equity equaling 150% of the
              full bond amount. If for any reason the arrestee does not make the court date, the court may
              foreclose on the lien to receive the bail amount.
              Property bonds are rare because they take a considerable amount of time,
              money and effort to secure. The process is similar to that of a real estate transaction,
              requiring a certified appraisal of the property value, title search, equity and the like.
              The equity in the property must be at least 150% of the total bail amount. Most defendants are
              interested in obtaining release from jail as quickly as possible, making the use of a bail bond company
              more appealing.</p>
            <h1 className="heading-for-top-part-skb-2-112" data-aos="fade-left">Cash Bail </h1>
            <p className="para-for-top-part-skb-2-112" data-aos="fade-right">Cash bail is another option.
              Courts generally take cash or cashier's checks only (not credit cards or personal checks).
              If you plan to do a cash bond, check with the specific court or jail for accepted forms of payment and
              appropriate payee. When the case is finished, the cash is returned. Cash bail does not require a bail bond
              company. </p>
            <h1 className="heading-for-top-part-skb-2-112" data-aos="fade-left">Citation Release</h1>
            <p className="para-for-top-part-skb-2-112" data-aos="fade-right">A Citation Release is also known as the "Cite Out".
              The arrestee is given written charges and court appearance information. A "Cite Out" is generally
              used for very minor infractions. </p>
          </div>
          <div className="bottom-part-in-subpart-skb-112">
            <div class="image-box-tm-bsk-2-112 " id="image-box">


              <div class="image-tm-bsk-2-112  xtra-image-tm-bsk-112"><a href="speaker-detail.html"><img src={call} alt="" className="images-tm-bsk-2-112 " data-aos="fade-down" /></a>
                <p className="line-through-2-112" style={{ top: '7%' }} data-aos="fade-up"></p></div>
            </div>

          </div>
        </div>

      </div>
      <div className="Lower-images-div-112">
        <div className='images-div-112'>
          <img src={IconKK} className='ImageKK-112'></img>
          <h3 className='patnersKK-heading-112'>Meet The Partners</h3>
          <img src={IconKK} className='ImageKK-112'></img>

        </div>
        <div className='logos-div-112' data-aos="slide-up" data-aos-duration="1000">
          <img src={logosKK} className='logos-images-112'></img>
        </div>
      </div>

    </div>
  </>)
}
export default RFJ;