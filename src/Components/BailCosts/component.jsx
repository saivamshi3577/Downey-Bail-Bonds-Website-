import React from "react";
import "./component.css";
import circle1dot from "../Photos/circle-dot.png";
import circle2line from "../Photos/circle-line.png";
import bluebackground from "../Photos/blue.jpg";
import hammer from "../Photos/hammer.png";
import { IoMdSettings } from "react-icons/io";
import divider from "../Photos/divider.png"
import yellowbackground from "../Photos/yelowbanner.png";
import { useNavigate } from "react-router-dom";

// import dotted_circle from "../src/icon-dotted-circle.png"

function FaxandEmail() {
    const navigate = useNavigate()
    return (
        <>
            <div className="fixed-icon-payment-options-hk">
                <IoMdSettings className="settings-icon-hk" />
            </div>
            <div className="complete_component1-hk" style={{ overflow: 'hidden' }}>

                <div className="complete_component-hk">
                <div className="section1">
        <div className="bgchair">
          <div className="pmsize">
            <div className="firstimg1">
              <img src={circle1dot} alt="" className="sideimg1 sideimg11" />
            </div>
            <div className="head1">
              <div className="txt0">BAIL BY FAX OR EMAIL</div>
              <div className="headtxt">
                <a href="/"><div className="txt1">Home</div></a>
                <div className="txt1">
                  <span className="space1">_</span>|
                  <span className="space1">_</span>
                </div>
                <div style={{color:"white", fontSize:"1.8vi"}}>BAIL BY FAX OR EMAIL</div>
              </div>
            </div>
            <div className="secondimg1">
              <img src={circle2line} alt="" className="sideimg1 sideimg12" />
            </div>
          </div>
        </div>
      </div>
                
                        {/* <div class="anim-icons-hk full-width-hk">
                            <span class="icon-hk icon-bull-eye-hk"></span>
                            <span class="icon-hk icon-dotted-circle-hk"></span>
                        </div> */}


                        {/* <div>
                        <div className="text_on_backgroundimage-hk">
                        <p style={{color:"white", zIndex:"30px"}} className="paragraph1-hk">BAIL BY FAX OR EMAIL</p>
                       <a href="/" className="paragraph2-hk"> <span className="paragraph2-hk1" style={{color:"white"}}>Home</span> | BAIL BY FAX OR EMAIL</a> 
                        </div>
                    </div> */}
                        {/* <div className="head1">
                            <div className="txt0">Bail Cost and Fees</div>
                            <div className="headtxt">
                                <a href="/"><div className="txt1">Home</div></a>
                                <div className="txt1">
                                    <span className="space1">_</span>|
                                    <span className="space1">_</span>
                                </div>
                                <div className="txt1">Bail Cost And Fees</div>
                            </div>
                        </div> */}

                    
                    <div className="Downey_bail_bonds_text_image-hk">
                        <div className="para-hk">
                            <div className="text-hk">
                                <p className="Downey_Bail_Bonds-hk">Downey Bail Bonds</p>
                                <p className="How_to_Post_Bail-hk">How to Post Bail</p>
                                <img src={divider} alt="" className="dividerimage-hk" />
                                <p className="mini-para-component-hk">Your Downey Bail Bonds Option As bondsmen, one of the first questions our clients ask when they call us is:
                                    How fast can you get my [son, daughter, husband, wife, sibling, partner, friend or co-worker, etc.] out of jail?
                                    Our answer is always the same: Very fast because we provide the Downey Bail Bond service anywhere in  Downey.<br />
                                    We’ve streamlined the Downey Bail Bonds process by providing our clients with ability to complete The bail
                                    bonds by email or by fax, and by accepting all major credit cards – no matter where our clients are or what time of the day or night it is. We have a Downey Bail Bond application that is easy to understand and fill out. It literally only takes you minutes to do so. With our method of posting bail, you won’t have to go out in the middle of the night or take time off from work. It can all be handled from the comfort and convenience of your own home or office, with the added benefit of the Downey release from jail.
                                    <h4 >To speak with a licensed bondsman about immediate bail service, please call 1-800-944-1599.</h4></p>

                            </div>
                        </div>

                        <div className="hammerimage-hk">
                            <img src={hammer} alt="" className="hammerinnerimage-hk" />
                        </div>

                    </div>
                    <div className="yellowbackgroundimage-hk">
                        <img src={yellowbackground} alt="" className="yellowbackgroundinnerimage-hk" />
                        <div class="count-box-hk">

                            <h4 class="mb-3-hk">E-Document Signing Available</h4>

                            Downey Bail Bonds offers documents by fax / email or on your smartphone.

                            Downey Bail Bonds now uses Acrobat Sign for signing documents . clients can directly sign documents from smartphones or tablet devices. No additional software is needed to use, all you need to have an Active Email account. Our licensed Downey Bail Bond Agents will assist you with any questions or concerns that may arise. Payment can be sent via Zelle or any major credit cards. Upon receipt of Downey  Bail Bond Premium Payment, a receipt will be emailed to you.

                            Below is a list of the documents required to be filled out prior to posting of the Downey Bail Bond. Please feel free to download the documents for review, or we will send them by email.

                            If you select to use our Acrobat Sign please contact our Agent Support department at 1-800-944-1599 . A licensed Bail Agent will send over the required documents in Email or assist you in downloading forms 24 hour a day 7 days a week..

                        </div>
                    </div>
                    <div className="twoblueboxes-hk">
                        <div className="bluebox1-hk">

                            <div class="inner-box-hk">
                                <h4 className="the_bail_documents-hk">The Bail Documents</h4>
                                <p>We will either email of fax you the bail documents – it’s your choice. If you receive them by email, it will be in a “PDF” format. Most computers come with Adobe Reader already loaded so you can instantly open this document. If you don’t have Adobe Reader, you can download Adobe Reader here for adobe download free in a simple process that also only takes minutes. Fill out the basic, but required information. We’ve requested only what is required by the California Department of Insurance.
                                </p>
                                <br />

                                <a href="/Contactus" class="theme-btn1 btn-style-two-hk"><a href="/Contactus"><span class="btn-title" style={{ color: "white" }}>contact us</span></a></a>
                            </div>


                        </div>
                        <div className="bluebox2-hk">
                            <div class="inner-box-hk">
                                <h4 className="easy_steps-hk">Easy Steps to Downey Bail Bonds by Email or Fax:</h4>


                                <ul >
                                    <li style={{ listStyle: "circle" }}>Call us at 1-800-944-1599.</li>
                                    <li style={{ listStyle: "circle" }}>We’ll explain the Downey  bail bond process and answer all of your questions.</li>
                                    <li style={{ listStyle: "circle" }}>When you’re ready, we’ll email or fax you our simple bail bond forms that are specifically customized for your bond. You will receive these documents almost immediately in a PDF file or by fax. All you have to do is fill out basic information and provide your credit card information and fax it back. This generally takes about ten (10) minutes.</li>
                                    <li style={{ listStyle: "circle" }}>We will post the bond at jail. The jail will release the defendant. It’s that simple.</li>


                                </ul>

                            </div>

                        </div>

                    </div>
                </div>
            </div>




        </>
    )
}
export default FaxandEmail;
