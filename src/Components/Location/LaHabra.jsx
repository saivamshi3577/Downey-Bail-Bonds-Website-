import React from 'react'
import grill from "../Photos/grill.png";
import logos from "../Photos/logos.png";
import pillar from "../Photos/pillar.png";
import weight from "../Photos/weightMeasure.png";
import facebook from "../Photos/Facebook - Negative.png";
import instagram from "../Photos/Instagram - Negative.png";
import twitter from "../Photos/Twitter - Negative.png";
import bottomPillar from "../Photos/bottomPillar.jpg";

//////////////////////////////////////////////////////////

import BIcon1 from "../Photos/BIcon1.png"
import BIcon2 from "../Photos/BIcon2.png";
import BIcon3 from "../Photos/BIcon3.png";
import BIcon4 from "../Photos/BIcon4.png";
import pluto1 from "../Photos/pluto1.png";
import pluto2 from "../Photos/pluto2.png"
import Icon from "../Photos/Iocn.png";

////////////////////////////////////////////////////////

import rightExtend from "../Photos/rightExtend.png"
import centerStar from "../Photos/equalStar.png"
import nyayaMurthi from "../Photos/nyayaMurthi1.png"
import pillerImg from "../Photos/pillers.png"
import "./VanNyus.css";
// import AOS from 'aos';
import 'aos/dist/aos.css';
import AOS from 'aos';
// import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
import  Shiva from '../Photos/dwon arrow img.png'
import  Shiva1 from '../Photos/up arrow img.png'





function  LaHabra() {

    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
    
    /******* idhi on scroll appudu animation avvuthundhi******/

    const [activeQuestion, setActiveQuestion] = useState(null);
 
    const handleClick = (questionId) => {
        setActiveQuestion(activeQuestion === questionId ? null : questionId);
    };
        
      

  return (

    
    <>

    

      <div className="Downy-main-div">
        <div className="los-angeles-container">
          <div className="Downy-bail-bonds-content">
            <img className="img" data-aos="fade-right" src={Icon} alt="" />
            <h1 className="Downy-bail-bonds-heading" data-aos="fade-right">Downey Bail Bonds La Habra</h1>
            <p className="Downy-bail-bonds-para" data-aos="fade-right">If you need a bail bondsman in La Habra, contact Downey Bail Bonds 
La Habra Downtown. Our team of experienced bail bondsmen are available now for free & confidential advice.
            </p>
            <a href='/Contactus'><button className="Get-in-touch-button" data-aos="fade-up">
              Get In Touch
            </button></a>
          </div>
        </div>

        <div className="Bail-process-container">
          <div className="bail-heading-icon">
            <div id="adjustment" data-aos="fade-dwon" >
              <h1 className="bail-process-heading">The Bail Process</h1>
              <img className="bail-process-icon" src={rightExtend} alt="" />
            </div>
          </div>

          <div className="Bail-cards-container">
            <div className="bail-card-one">
              <h3 className="card-one-heading">DOWNEY BAIL BONDS</h3>
              <p className="card-one-para">Click, call, or walk into a Downey Bail Bonds Los Angeles
               office for your free bail consultation. Our friendly, expert staff of bail 
               bond agents will fully explain the bail process .
              </p>
              <hr className="horizantal-line" />
              <div className="card-one-icon">
                <img className="card-one-img" src={BIcon1} alt="" />
              </div>
            </div>

            <div className="bail-card-one">
              <h3 className="card-one-heading">RELEASED FROM JAIL</h3>
              <p className="card-one-para">Next, we will post the bail bond and get your loved one out of jail and home fast!
              </p>
              <hr className="horizantal-line" />
              <div className="card-one-icon">
                <img className="card-one-img" src={BIcon2} alt="" />
              </div>
            </div>

            <div className="bail-card-one">
              <h3 className="card-one-heading">LOW PRICE GUARANTEE</h3>
              <p className="card-one-para">Downey Bail Bonds offers the lowest rate in the industry 
              in california so you can be assured you are getting the best possible
              </p>
              <hr className="horizantal-line" />
              <div className="card-one-icon">
                <img className="card-one-img" src={BIcon3} alt="" />
              </div>
            </div>


            <div className="bail-card-one">
              <h3 className="card-one-heading">DOWNEY BAIL BONDS NEVER EXPIRE</h3>
              <p className="card-one-para">Unlike our competitors, our bail bonds never expire 
              regardless of how long the case lasts. Power Bail Bonds .
              </p>
              <hr className="horizantal-line" />
              <div className="card-four-icon">
                <img className="card-four-img" src={BIcon4} alt="" />
              </div>
            </div>
          </div>

          {/* <div className="fourth-card">
                        <div className="bail-card-four">
                            <h3 className="card-four-heading">RELEASED FROM JAIL</h3>
                            <p className="card-four-para">There are many variations of passages
                                of Lorem Ipsum available, but majority
                                going to use a passage.
                            </p>
                            <hr className="horizantal-line" />
                            <div className="card-four-icon">
                                <img className="card-four-img" src={BIcon4} alt="" />
                            </div>
                        </div>
                    </div> */}
        </div>
      </div>



      {/* The code above belongs to Priya */}





      <div id='losAngelesMainDiv'>

        <div id="losAngelesDiv">

          <div id="bailBondsHeading" data-aos="fade-dwon">La Habra Bail Bonds Services</div>


          <img src={rightExtend} id='pngImg1' data-aos="fade-dwon"></img>


          <div id='bailBondsInfo' data-aos="fade-up">Our local professional staff in La Habra can assist you with any bail bonds services. If you or a loved one have been arrested, call us to see how we can help. Our friendly agents are on hand 24 hours a day, 7 days a week to offer immediate assistance, answer any questions & get your loved one released from jail as quickly as possible. We have helped secure the release of thousands of clients from jail and offer support from start to finish. Downey Bail Bonds will never charge for an initial consultation and we offer 0% down and payment plans. We have expert staff ready to help with all your bail needs. Every situation is different, but we offer the fastest route to get you or your loved one out of jail fast.</div>

        </div>

        {/* <div id='bgImageDiv'>

          <div id='QandADiv'>

          <div className='QandAcolumns'>
 
 <div className='questionAnswerBox'>

    {activeQuestion !== 'question1' && (
     <div className='qustion' onClick={() => handleClick('question1')} >What happens when you're arrested ? <img src={Shiva} alt=""
       onClick={() => handleClick('question1')}
       />
     </div>
    )}

    {activeQuestion === 'question1' &&
       <div className='answer' onClick={() => handleClick('question1')}  >There are many variations of passages
                   of Lorem Ipsum available, but majority
                  going to use a passage. <img src={Shiva1} alt="" onClick={() => handleClick('question1')}/></div>}
  

 </div>


 <div className='questionAnswerBox'>

   {activeQuestion !== 'question2' && (
   <div className='qustion' onClick={() => handleClick('question2')}>How much does the bail bond cost? <img src={Shiva} alt=""
   onClick={() => handleClick('question2')}
   />
   </div>
    )}


       {activeQuestion === 'question2' &&
       <div className='answer' onClick={() => handleClick('question2')}  >There are many variations of passages
                   of Lorem Ipsum available, but majority
                  going to use a passage. <img src={Shiva1} alt="" onClick={() => handleClick('question2')}/></div>}

 </div>

 <div className='questionAnswerBox'>

 {activeQuestion !== 'question3' && (
   <div className='qustion' onClick={() => handleClick('question3')}>How long does it take for a person to be released once bond has been posted? <img src={Shiva} alt=""
   onClick={() => handleClick('question3')}
   />
   </div>
    )}


       {activeQuestion === 'question3' &&
       <div className='answer' onClick={() => handleClick('question3')}  >There are many variations of passages
                   of Lorem Ipsum available, but majority
                  going to use a passage. <img src={Shiva1} alt="" onClick={() => handleClick('question3')}/></div>}

 </div>

  <div className='questionAnswerBox'>

 {activeQuestion !== 'question4' && (
   <div className='qustion' onClick={() => handleClick('question4')}>What happens when you're arrested in VAN NYUS? <img src={Shiva} alt=""
   onClick={() => handleClick('question4')}
   />
   </div>
    )}


       {activeQuestion === 'question4' &&
       <div className='answer' onClick={() => handleClick('question4')}  >There are many variations of passages
                   of Lorem Ipsum available, but majority
                  going to use a passage. <img src={Shiva} alt="" onClick={() => handleClick('question4')}/></div>}

 </div> 

</div>

            <img src={nyayaMurthi} alt="" id='justiceImage' />

            <div className='QandAcolumns'>
 
 <div className='questionAnswerBox'>

 {activeQuestion !== 'question5' && (
   <div className='qustion' onClick={() => handleClick('question5')}>What is the fastest way to arrange bail? <img src={Shiva} alt=""
   onClick={() => handleClick('question5')}
   />
   </div>
    )}


       {activeQuestion === 'question5' &&
       <div className='answer' onClick={() => handleClick('question5')}  >There are many variations of passages
                   of Lorem Ipsum available, but majority
                  going to use a passage. <img src={Shiva1} alt="" onClick={() => handleClick('question5')}/></div>}

 </div>

 <div className='questionAnswerBox'>

 {activeQuestion !== 'question6' && (
   <div className='qustion' onClick={() => handleClick('question6')}>Will Downey Bail Bonds meet clients at a police station or jail? <img src={Shiva} alt=""
   onClick={() => handleClick('question6')}
   />
   </div>
    )}


       {activeQuestion === 'question6' &&
       <div className='answer' onClick={() => handleClick('question6')}  >There are many variations of passages
                   of Lorem Ipsum available, but majority
                  going to use a passage. <img src={Shiva1} alt="" onClick={() => handleClick('question6')}/></div>}

 </div>

 <div className='questionAnswerBox'>

 {activeQuestion !== 'question7' && (
   <div className='qustion' onClick={() => handleClick('question7')}>Do you deal with a certain type of charge? <img src={Shiva} alt=""
   onClick={() => handleClick('question7')}
   />
   </div>
    )}


       {activeQuestion === 'question7' &&
       <div className='answer' onClick={() => handleClick('question7')}  >There are many variations of passages
                   of Lorem Ipsum available, but majority
                  going to use a passage. <img src={Shiva1} alt="" onClick={() => handleClick('question7')}/></div>}

 </div>

 <div className='questionAnswerBox'>

 {activeQuestion !== 'question8' && (
   <div className='qustion' onClick={() => handleClick('question8')}>What happens when you're arrested in VAN NYUS? <img src={Shiva} alt=""
   onClick={() => handleClick('question8')}
   />
   </div>
    )}


       {activeQuestion === 'question8' &&
       <div className='answer' onClick={() => handleClick('question8')}  >There are many variations of passages
                   of Lorem Ipsum available, but majority
                  going to use a passage. <img src={Shiva} alt="" onClick={() => handleClick('question8')}/></div>}

 </div>

</div>

          </div>

        </div> */}

        {/* <div id='pillerDiv'>
          <img src={pillerImg} alt="" id='pillarImage' />
        </div> */}

        <div id='helpDiv' style={{marginTop:"140px"}}>

          <div id='helpDivHeading' data-aos="fade-dwon">If you're in trouble
            we can help.</div>

          <img src={centerStar} alt="" id='equalStarDesign' data-aos="fade-dwon" />

          <div id='helpDivContent'>There are  of Lorem Ipsum available, but the majority have su alteration in some form, by injected humour, oir  which don't look even slightly believable.</div>

        </div>


      </div>





      {/* the code below belongs to saiCharan */}

      <div className='partnersMainDiv'>
        <div className='partnerWithLogoDiv'>
          <div className='imagesWithPartnersDiv'>
            <img src={grill} className='partnerImage'></img>
            <h3 className='meetHeading'>Meet The Partners</h3>
            <img src={grill} className='partnerImage'></img>
          </div>
          <div className='logoDiv' data-aos="fade-up">
            <img src={logos} className='logoImage'></img>
          </div>
        </div>
        <div className='contactUsWithImagePillarDiv'>
          <img src={pillar} className='pillarImage'></img>
          <div className='weightImageWithContactUs'>
            <div className='weightImageDiv'>
              <img src={weight} className='weightImage'></img>
            </div>
            <div className='contactUsDiv'>
              <h3 className='contactHeading'>Contact Us</h3>
              <div className='buttonAndAddressDiv'>
                <div className='buttonContentDiv'>
                  <div className='contentWithLineDiv'>
                    <h4 className='fillContent'>Full Name</h4>
                    <input className='fillinput'></input>
                  </div>
                  <div className='contentWithLineDiv'>
                    <h4 className='fillContent'>E-Mail</h4>
                    <input className='fillinput'></input>

                  </div>
                  <div className='contentWithLineDiv'>
                    <h4 className='fillContent'>Message</h4>
                    <input className='fillinput'></input>
                  </div>
                  <div className='buttonDiv'>
                    <button>Submit Us</button>
                  </div>
                </div>
                <div className='emailAndAddressDiv'>
                  <div className='addressDiv'>
                    <h4 className='contactAndEmailHeading'>Contact</h4>
                    <h5 className='underlineHeading'>info@downeybailbonds.com</h5>
                  </div>
                  <div className='addressDiv'>
                    <h4 className='contactAndEmailHeading'>Based in</h4>
                    <h5 className='address'>10911 Brookshire Ave, Downey, CA 90241, USA</h5>
                  </div>
                  <div className='socialsDiv'>
                    <img src={facebook} className='socials'></img>
                    <img src={instagram} className='socials'></img>
                    <img src={twitter} className='socials'></img>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className='bottomPillarImage'>
          <img src={bottomPillar} className='bottomPillar'></img>
        </div>
      </div>
    </>

  )
}

export default LaHabra;