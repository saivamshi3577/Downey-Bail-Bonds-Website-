import React from "react";
import { useEffect, useState } from "react";
import "./question.css";
// import "./release-from-jail-sk.css";
import call1 from "../Photos/Rectangle 453.png";
import IconKK from "../Photos/Icons.jpg"
import logosKK from "../Photos/4logos.png";
import call2 from "../Photos/Rectangle 454.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
function Question() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".Arrest-And-Bookings-top, .Arrest-Bookings-Content2"
    );

    const handleScroll = () => {
      sections.forEach((sec) => {
        if (!animated && isElementTopInViewport(sec)) {
          sec.classList.add("show-animate");
          setAnimated(true);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animated]);

  // Function to check if the top of an element is in the viewport
  const isElementTopInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= window.innerHeight;
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const navigate = useNavigate()
  return (
    <>
      <section className="Arrest-bookings-Top-contents">
        <div className="Arrest-And-Bookings-top">
          <div className="Arrest-Bookings-Head">
            <div className="Arrest-bookings-headings-h1h3">
              <h1 className="Arrest-bookings-h1" style={{ "--i": "1" }}>
                Questions And Answers
              </h1>
              <h3 className="Arrest-Bookings-h3" style={{ "--i": "2" }}>
                "Delivering into the tapestry of bail history reveals a nuanced
                narrative where the evolution of justice intertwines with fabric
                of societal values"
              </h3>
            </div>
            <button onClick={()=> {navigate("/Contactus")}}  className="Arrest-Bookings-Btn" style={{ "--i": "2" }}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="background-color">
          <div className="heading-sa">
            <h1 data-aos="fade-left">
              Questions often Asked of a Downey Bail Bond Company
            </h1>
          </div>
          <div className="para-sa">
            <p className="paragraph-sa" data-aos="fade-right">
              We are providing answers to the questions most frequently asked of
              a Downey Bail Bond company for additional Downey Bail Bond
              information and answers to your specific questions about Downey
              Bail Bonds, please call me Toll-free at 1-800-994-1599.
            </p>
            <p className="paragraph-sa">
              <ul data-aos="fade-up">
                <li>What happens when a person is arrested?</li>
                <li>What is the procedure for bailing someone out of jail</li>
                <li>What is the cost for Downey bail bonds?</li>
                <li>What is colleteral and will i need it for my bail bond?</li>
                <li>
                  what is my responsibility when bailing someone out of jail?
                </li>
                <li>What if the person 1 bail out of jail "skips" town?</li>
                <li>Should i bail out my son or daughter?</li>
              </ul>
            </p>
          </div>
          <div className="heading-sa">
            <h1 data-aos="fade-right">
              Questions often Asked of a Downey Bail Bond Company
            </h1>
          </div>
          <div className="para-sa">
            <p className="paragraph-sa" data-aos="fade-right">
              We are providing answers to the questions most frequently asked of
              a Downey Bail Bond company for additional Downey Bail Bond
              information and answers to your specific questions about Downey
              Bail Bonds, please call me Toll-free at 1-800-994-1599.
            </p>
            <p className="paragraph-sa">
              <ul data-aos="fade-up">
                <li>The Arrest and Booking process</li>
                <li>Options for jail Release</li>
                <li>What happens when the Pesrson is Not Bailed Out?</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="background-container-skb-2-1122">
          <div className="alignment-for-top-part-skb-1122">
            <div className="top-part-in-subpart-skb-1122">
              <h1
                className="heading-for-top-part-skb-2-1122"
                data-aos="fade-left"
              >
                Downey Bail Bond Cost
              </h1>
              <p className="para-for-top-part-skb-2-1122" data-aos="fade-right">
                A Downey Bail Bond fee will cost you 10% of the total amount of
                bail. As an example, if your bail amount is $20,000; you will be
                charged $2,000 from the bail bond company. This amount is
                non-refundable. Bail bond companies are regulated by the Downey
                Department of Insurance. Bail bond fees are established with the
                DOI so you should be paying the same amount with any Downey
                bondsman. There may be unusual circumstances where extra charges
                are applied but these charges should all be clearly stated by
                the bail bond company.
              </p>
              <h1
                className="heading-for-top-part-skb-2-1122"
                data-aos="fade-left"
              >
                Bail Without Collateral
              </h1>
              <p className="para-for-top-part-skb-2-1122" data-aos="fade-right">
                We are able to write most Downey  Bail Bonds with no collateral.
                I will ask questions to determine the risk involved with the and
                try to do the bail bond without collateral. I will want to know
                information about the defendant as well as the indemnitor
                (person guaranteeing and signing the bond) for example: How long
                have they been at their current job? How long have they been a
                part of the community? What type of crime was it? We understand
                that your background may not be perfect. We are looking to make
                sure that those involved in the bond are able to appear in court
                and have the means to pay if the defendant unexpectedly “skips
                bail” and is unable to be located. Collateral is sometimes
                required by a bail bond company to help ensure that the
                defendant will appear in court. If for some reason the defendant
                does not show up for court and cannot be located, the bail bond
                company will use the collateral to pay a “forfeiture” of the
                full bail amount. With Downey Bail Bonds, collateral may be in
                the form of Downey real estate or cash deposit. If you secure a
                bail bond with collateral, it will be returned at the end of the
                case.
              </p>
            </div>
            <div className="bottom-part-in-subpart-skb-1122">
              <div class="image-box-tm-bsk-2-1122 " id="image-box">
                <div class="image-tm-bsk-2-112  xtra-image-tm-bsk-112">
                  <a href="speaker-detail.html">
                    <img
                      src={call1}
                      alt=""
                      className="images-tm-bsk-2-1122 "
                      data-aos="fade-down"
                    />
                  </a>
                  <p
                    className="line-through-2-1122"
                    style={{ top: "7%" }}
                    data-aos="fade-up"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background-container-skb-2-1122" style={{paddingTop:"5%"}}>
          <div className="alignment-for-top-part-skb-1122">
            <div className="top-part-in-subpart-skb-1122">
              <h1
                className="heading-for-top-part-skb-2-1122"
                data-aos="fade-left"
              >
                Indemnitor Responsibilities
              </h1>
              <p className="para-for-top-part-skb-2-1122" data-aos="fade-right">
              When you bail somebody out of jail, you sign a legally binding bail bond contract and are the “indemnitor”. You take full responsibility that the individual shows up in court. If the person you bail out fails to appear in court, you will be held responsible to help the bail bond company find the defendant and return them to court. If the defendant can not be located, you will be responsible for the full amount of bail. Keep in mind that the vast majority of bail bond issues can be easily resolved. They rarely escalate beyond a phone call to straighten out the situation.
              </p>
              <h1
                className="heading-for-top-part-skb-2-1122"
                data-aos="fade-left"
              >
               Failure to Appear
              </h1>
              <p className="para-for-top-part-skb-2-1122" data-aos="fade-right">
              If a defendant misses a court appearance, we will call both the bail bond signer and the defendant. If there was a misunderstanding on the date, or the defendant was sick, stuck in traffic, etc., the bond company will make arrangements with the court for a new date. This happens often and there is an easy fix.
If you have used my bail company and this has happened to you, please call Downey Bail Bonds now, so this can be addressed immediately.
A warrant for arrest may be issued if a defendant fails to appear in front of the judge. This is called a “forfeiture”. Usually, a missed court appearance is a simple mistake and can be corrected with a few phone calls. If, however, the defendant is trying to avoid prosecution, the bondsman must locate and return the defendant. In Downey, a bail bond company has 6 months to get the defendant back into court. If the bondsman is unable to locate the defendant and bring them back into custody, then they may use a bail recovery person.
When bailing someone out of jail, the two most important points about “Bail Skips” are
Bail Bond Skips are very rare.
If for any reason you may think the person you are bailing out may skip bail, please leave them in jail.
              </p>
            </div>
            <div className="bottom-part-in-subpart-skb-1122">
              <div class="image-box-tm-bsk-2-1122 " id="image-box">
                <div class="image-tm-bsk-2-112  xtra-image-tm-bsk-112">
                  <a href="speaker-detail.html">
                    <img
                      src={call2}
                      alt=""
                      className="images-tm-bsk-2-1122 "
                      data-aos="fade-down"
                    />
                  </a>
                  <p
                    className="line-through-2-1122"
                    style={{ top: "7%" }}
                    data-aos="fade-up"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line-through-2-11222">
        <div className='images-div-1122'>
          <img src={IconKK} className='ImageKK-1122'></img>
          <h3 className='patnersKK-heading-112'>Meet The Partners</h3>
          <img src={IconKK} className='ImageKK-1122'></img>

        </div>
        <div className='logos-div-1122' data-aos="slide-up" data-aos-duration="1000">
          <img src={logosKK} className='logos-images-1122'></img>
        </div>
      </div>

      </section>
    </>
  );
}

export default Question;
