import React, { useState } from "react";
import "./downeyBonds.css";
import thumb1 from "../Photos/thumb-1.png";
import thumb2 from "../Photos/thumb-2.png";
import thumb3 from "../Photos/thumb-3.png";
import thumb4 from "../Photos/thumb-4.png";
import circle2 from '../Photos/circle-2.png';
import microphone from "../Photos/microphone-black-shape.png"
function DowneyBails() {
  const [description, setDescription] = useState("since 2004");
  const [activeButton, setActiveButton] = useState("since 2004");
  const handleButtonClick = (text) => {
    setDescription(text);
    setActiveButton(text);
  };

  return (
    <>
      <section class="schedule-section">
        <div class="anim-icons full-width">
          <span class="icon icon-circle-2"></span>
        </div>

        <div class="auto-container">
          <div class="sec-title text-center">
            <span class="sub-title">How We Work</span>

            <h2>Why Choose Downey Bail Bonds?</h2>

            <span class="divider"></span>
          </div>

          <div class="schedule-tabs tabs-box">
            <div class="btns-box">
              {/* <!--Tabs Box--> */}
              <div className="circle-animation-pinkAndOrange">
                                <img style={{width:'400px'}} src={circle2} alt="" />
                            </div>

              <ul class="tab-buttons clearfix">
                <li
                  class={`tab-btn active-btn ${
                    activeButton === "since 2004" ? "active" : ""
                  } `}
                  data-tab="#tab-1"
                  onClick={() => handleButtonClick("since 2004")}
                >
                  <span class="day">Since 2004</span>

                  <div class="date-box">
                    <h6 class="" style={{ fontSize: "14px", color: "orange" }}>
                      {/* style="font-size:14px; color:orange " */}
                      Experienced & Trusted Bail Bonds in southern California
                    </h6>

                    {/* <!-- <span class="month"><span class="colored">Jan</span> 2023</span> --> */}
                  </div>
                </li>

                <li
                  class={`tab-btn ${
                    activeButton === "Give Us A Call" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("Give Us A Call")}
                  data-tab="#tab-2"
                >
                  <span class="day">Give Us A Call</span>

                  <div class="date-box">
                    <h6 class="" style={{ fontSize: "14px", color: "orange" }}>
                      {/* style="font-size:14px; color:orange " */}
                      Looking To Bail a Loved One in California ?
                    </h6>
                  </div>
                </li>

                <li
                  class={`tab-btn ${
                    activeButton === "562-287-8388" ? "active" : ""
                  } `}
                  onClick={() => handleButtonClick("562-287-8388")}
                  data-tab="#tab-3"
                >
                  <span class="day">562-287-8388</span>

                  <div class="date-box">
                    <h6 class="" style={{ fontSize: "14px", color: "orange" }}>
                      {/* style="font-size:14px; color:orange " */}
                      Need help? Call us Open 24/7
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
            {description && (
              <div class="tabs-content">
                {/* <!--Tab--> */}
                {description === "since 2004" && (
                  <>
                    <div class="tab active-tab" id="tab-1">
                      <div class="schedule-timeline">
                        {/* <!-- schedule Block --> */}
                        <div class="schedule-block">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>Experience</span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  <img src={thumb1} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                  <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">
                                  Experience you can count on
                                </h5>
                              </div>

                              <p>
                                Over the last decade, we have used our
                                unparalleled industry experience and multi-state
                                presence to help over Thousand of people get
                                help with bail.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="schedule-block even">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  Qualitative <br /> Service
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-2.png" alt=""> */}
                                  <img src={thumb2} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">A partner you can trust</h5>
                              </div>

                              <p>
                                You can trust us as your partner throughout the
                                bail process. We offer a full range of
                                hassle-free services and options to you or your
                                loved one in need. We offer all our customers
                                free initial bail information
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="schedule-block">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>Affordability</span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-3.png" alt=""> */}
                                  <img src={thumb3} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">Excellent customer service</h5>
                              </div>

                              <p>
                                Our experienced, bilingual professionals are
                                committed to providing our customers with the
                                highest level of service all day, every day.
                                Each week, we help thousands of people get out
                                of jail as quickly as possible by guiding them
                                through every step of the bail process.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="schedule-block even">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>Ethics</span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-4.png" alt=""> */}
                                  <img src={thumb4} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">99% Success Rate</h5>
                              </div>

                              <p>
                                Over the last decade, we have used our
                                unparalleled industry experience and multi-state
                                presence to help over Thousand of people get
                                help with bail.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* <!--Tab--> */}
                {description === "Give Us A Call" && (
                  <>
                    <div class="tab" id="tab-2">
                      <div class="schedule-timeline">
                        {/* <!-- schedule Block --> */}

                        <div class="schedule-block">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  8.00 AM <br /> 10.00 AM
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-1.jpg" alt=""> */}
                                  <img src={thumb1} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name" style={{width:"110%"}}>
                                  Experience you can count on
                                </h5>

                                <span class="designation">Historian</span>
                              </div>

                              <p>
                                Over the last decade, we have used our
                                unparalleled industry experience and multi-state
                                presence to help over Thousand of people get
                                help with bail.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* <!-- schedule Block --> */}

                        <div class="schedule-block even">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  10:00 am <br />
                                  11:00 am
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-2.jpg" alt=""> */}
                                  <img src={thumb2} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">Milana Myles</h5>

                                <span class="designation">Art Critic</span>
                              </div>

                              <h4>
                                <a href="schedule-detail.html">
                                  Marine and Oceanic Government Workers
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* <!-- schedule Block --> */}

                        <div class="schedule-block">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  10:00 am <br />
                                  11:00 am
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-3.jpg" alt=""> */}
                                  <img src={thumb3} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">Gabrielle Winn</h5>

                                <span class="designation">
                                  Insurance consultant
                                </span>
                              </div>

                              <h4>
                                <a href="schedule-detail.html">
                                  Home Life Open Entryway Open Occasion of 21
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* <!-- schedule Block --> */}

                        <div class="schedule-block even">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  12:00 pm <br />
                                  01:00 pm
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-4.jpg" alt=""> */}
                                  <img src={thumb4} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">Rene Wells</h5>

                                <span class="designation">Art Critic</span>
                              </div>

                              <h4>
                                <a href="schedule-detail.html">
                                  Developing Force Legislative issues of Arctics
                                  Motivation
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* <!--Tab--> */}
                {description === "562-287-8388" && (
                  <>
                    <div class="tab" id="tab-3">
                      <div class="schedule-timeline">
                        {/* <!-- schedule Block --> */}

                        <div class="schedule-block">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  8.00 AM <br /> 10.00 AM
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-1.jpg" alt=""> */}
                                  <img src={thumb1} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">
                                  Experience you can count on
                                </h5>

                                <span class="designation">Historian</span>
                              </div>

                              <h4>
                                <a href="schedule-detail.html">
                                  Social Profit from Venture (SROI) Gathering
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* <!-- schedule Block --> */}

                        <div class="schedule-block even">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  10:00 am <br />
                                  11:00 am
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-2.jpg" alt=""> */}
                                  <img src={thumb2} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">Milana Myles</h5>

                                <span class="designation">Art Critic</span>
                              </div>

                              <h4>
                                <a href="schedule-detail.html">
                                  Marine and Oceanic Government Workers
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>

                        <div class="schedule-block">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  10:00 am <br />
                                  11:00 am
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-3.jpg" alt=""> */}
                                  <img src={thumb3} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">Gabrielle Winn</h5>

                                <span class="designation">
                                  Insurance consultant
                                </span>
                              </div>

                              <h4>
                                <a href="schedule-detail.html">
                                  Home Life Open Entryway Open Occasion of 21
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* <!-- schedule Block --> */}

                        <div class="schedule-block even">
                          <div class="inner-box">
                            <div class="inner">
                              <div class="date">
                                <span>
                                  12:00 pm <br />
                                  01:00 pm
                                </span>
                              </div>

                              <div class="speaker-info">
                                <figure class="thumb">
                                  {/* <img src="images/resource/thumb-4.jpg" alt=""> */}
                                  <img src={thumb4} alt="" />
                                </figure>

                                <span class="icon fa fa-microphone">
                                <img style={{width:'50px'}} src={microphone} alt="" />
                                </span>

                                <h5 class="name">Rene Wells</h5>

                                <span class="designation">Art Critic</span>
                              </div>

                              <h4>
                                <a href="schedule-detail.html">
                                  Developing Force Legislative issues of Arctics
                                  Motivation
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default DowneyBails;