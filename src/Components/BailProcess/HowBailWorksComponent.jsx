import React from 'react'
import { useEffect } from "react";
import './howBailWorksComponent.css'
import rightGloab from '../Photos/rightGloab.png'
import leftGloab from '../Photos/leftGloab.png'
import lawPerson from '../Photos/orderMyLoard.png'
import borderImg from '../Photos/border.png'
import nyayaMurthi from '../Photos/nyayaMurthi.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function HowBailWorks() {

  /////////////

  useEffect(() => {
    AOS.init();
  }, [])
  AOS.init({
    duration: 400,
    once: false,
  })

  ////////////

 const navigate = useNavigate()
  return (
    <div id="howBailWorksMain">

      {/* Top Div */}
      <div id="ironManDiv">
        <div id='heading' className='bounce'>How Bail Works</div>

        <div id='infoDiv'>
          <div id='info'>Count on our streamlined arrest and booking services for swift and professional handling of legal procedures, including bail processing, ensuring efficiency throughout.</div>
          <button onClick={()=> navigate("/Contactus")} id='getInTouchButton'>Get In Touch</button>
        </div>
      </div>


      {/* Second Div */}
      <div id='blueBoxDiv'>

        <div id='headingWithGloab'>
          <div id='blueBoxHeading'>How Downey Bail Bond Works</div>
          <img src={rightGloab} alt='rightGloabImg' id='gloabRight'></img>
        </div>

        <div id='imageAndInfo'>
          <div id='gloabContainer'>
            <img src={leftGloab} alt='leftGloab' id='leftGloab'></img>
          </div>
          <div id='ninePoints'>
            <ol id='orderedList'>
              <li>Downey Bail Bond is the money required by the court to release a defendant and ensure their appearance.</li>
              <li>Bail amounts vary based on the severity of the offense, ranging from $50 to $1 million.</li>
              <li>Payment can be in cash or through a Bail Bond Agency.</li>
              <li>If bail is high, many opt for a Bail Bond Agency.</li>
              <li>Once posted, the agency is responsible for the defendant's court appearance.</li>
              <li>If the defendant fails to appear, the court forfeits the bond, and the agency must pay.</li>
              <li>The indemnitor pledges property as collateral for the bond.</li>
              <li>The agency charges a non-refundable premium of 10% of the bail amount set by the Downey Department of Insurance.</li>
              <li>The bond remains active until the case concludes, and collateral is returned upon      exoneration</li>
            </ol>
          </div>
          <div id='imgAndBorder'>
            <img src={lawPerson} alt='lawPerson' id='lawPersonImage'></img>
            <img src={borderImg} alt='borderImg' id='borderImage'></img>
          </div>
        </div>

      </div>


      {/* third Div */}
      <div id='overViewDiv'>

        <div id='overViewHeading' data-aos="fade-up">Overview</div>
        <p className='overviewPara' id='overViewPara1'>When an individual is arrested for a crime, the person is typically taken to a local detention facility for booking prior to incarceration in a lock-up station or county jail. Once arrested and booked, the defendant has several options for release pending the conclusion of his or her case.</p>
        <p className='overviewPara'>The Bail system is designed to guarantee the timely appearance of a defendant in court. Bail is also an insurance policy for the state that the defendant will appear to face charges. Further, the legal intent of release on Bail is not to relieve the defendant of obligations except for appearing, it is the retention of control over the defendant to the end that justice might be administered.</p>

        <div id='releaseHeading'>Release Options</div>

        <div id='buttonsDiv'>
          <button className='releaseOptionButtons' id='cashBond' data-aos="fade-right">Cash Bond</button>
          <button className='releaseOptionButtons' id='surveyBond' data-aos="fade-up">Surety Bond(Common Bail Bond)</button>
          <button className='releaseOptionButtons' id='propertyBond' data-aos="fade-down-left">Property Bond</button>
          <button className='releaseOptionButtons' id='ownRecognizance' data-aos="fade-right">Own Recognizance(OR)</button>
          <button className='releaseOptionButtons' id='citeOut' data-aos="fade-down-left">Citation Release(Cite Out)</button>
        </div>

        <h3 className='releaseOptionSideHeadings' id='cashBondSideHeading' data-aos="fade-right">Cash Bond</h3>
        <p id='cashBondPara' className='releaseOptionParas'>Cash Bond requires the full bail amount in cash, held by the court, and forfeited if the defendant fails to appear; recent laws mandate proof of clean funds for narcotics-related cases.</p>
        <h3 className='releaseOptionSideHeadings' data-aos="fade-right">Surety Bond</h3>
        <p id='surveyBondPara' className='releaseOptionParas'>A Surety Bond involves a third-party, typically a bail bondsman, who guarantees the bail amount to the court, ensuring the defendant's appearance; if the defendant fails to appear, the bondsman pays the bail.</p>
        <h3 className='releaseOptionSideHeadings' data-aos="fade-right">Property Bond</h3>
        <p id='propertyBondPara' className='releaseOptionParas'>A Property Bond allows a defendant to use their property, such as real estate, as collateral for their bail, ensuring their appearance in court; failure to appear may result in forfeiture of the property.</p>
        <h3 className='releaseOptionSideHeadings' data-aos="fade-right">Own Recognizance</h3>
        <p id='ownRecognizancePara' className='releaseOptionParas'>"Own Recognizance" release refers to when a defendant is released from custody without posting bail, based on a promise to appear in court; it's typically granted to those with minimal flight risk.</p>
        <h3 className='releaseOptionSideHeadings' data-aos="fade-right">Citation Bond</h3>
        <p id='citeOutPara' className='releaseOptionParas'>A Citation Bond involves the issuance of a citation to the defendant instead of arrest, requiring their appearance in court at a later date; it's often used for minor offenses.</p>

      </div>

    </div>
  )
}

export default HowBailWorks