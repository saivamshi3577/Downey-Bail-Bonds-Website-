import React, { useState } from "react";
import "./Meetthebondsmen.css";
import "../About Us/bootstrap.css";

function MeettheBoundsmen() {
  const [openDescription, setOpenDescription] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const [isOpen1, setIsOpen1] = useState("");
  const [isOpen2, setIsOpen2] = useState("");
  const [isOpen3, setIsOpen3] = useState("");

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleOpen1 = () => {
    setIsOpen1(!isOpen1);
  };
  const handleOpen2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleOpen3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleDescription = (descriptionId) => {
    setOpenDescription(openDescription === descriptionId ? "" : descriptionId);
    setActiveButton(descriptionId);
  };

  return (
    <>
      <div>
        <div class="faq-section mt-5 bg-img">
          <div class="anim-icons full-width">
            <span class="icon icon-dotted-world left"></span>

            <span class="icon icon-dotted-world right"></span>
          </div>

          <div class="auto-container">
            <div class="sec-title light meetthebondsmen-header">
              <span class="sub-title">MEET THE BONDSMEN</span>

              <h2>Southern California Bail Bondsman</h2>

              <span class="divider"></span>
            </div>

            <div class="row">
              <div className="list-container" style={{ width: "50%" }}>
                <div class="accordion" id="accordionExample11">


                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1m" >
                      <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse1m" aria-expanded="false" id="Element"  >
                        <div className="nameing">
                          Experience
                        </div>
                      </button>
                    </h2>
                    <div id="collapse1m" class="accordion-collapse collapse show" aria-labelledby="heading1m" data-bs-parent="#accordionExample11">
                      <div class="accordion-body">
                        There are many arrest situations occur every day and all are different. If an agent is not familiar with California law, arrest procedures, jail release requirements, court procedures and a general familiarity with the clerks and staff members in each county, the chances are you will be misinformed or mislead. Having been in business for number of years we proud ourselves at being the best in the business when it comes to knowledge and experience. that need.
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading2m">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2m" aria-expanded="false" aria-controls="collapse2m" >
                        <div className="nameing">
                          Qualitative Service
                        </div>
                      </button>
                    </h2>
                    <div id="collapse2m" class="accordion-collapse collapse " aria-labelledby="heading2m" data-bs-parent="#accordionExample11">
                      <div class="accordion-body">
                        Services like always being personally available to you. When you call us your call directly attended by Expert Bail Bond Agent. If it’s convenient, we will reach to your place. Apart from bail, if you are planning to take attorney, we can arrange for you. Our every client treated with care, respect and honesty.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading3m">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3m" aria-expanded="false" aria-controls="collapse3m" >
                        <div className="nameing">
                          Affordability
                        </div>
                      </button>
                    </h2>
                    <div id="collapse3m" class="accordion-collapse collapse" aria-labelledby="heading3m" data-bs-parent="#accordionExample11">
                      <div class="accordion-body">
                        We very well know that a defendant can not continue to work when they’re in custody, which makes the situation very difficult to support them self and prepare for their defense. This is why we offer flexible, interest-free payment plans to those that need it most. If you do not have the full bail premium amount or your money is needed to retain an attorney, just ask us if we can help.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="heading4m">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4m" aria-expanded="false" aria-controls="collapse4m" >
                        <div className="nameing">
                          Ethics
                        </div>
                      </button>
                    </h2>
                    <div id="collapse4m" class="accordion-collapse collapse" aria-labelledby="heading4m" data-bs-parent="#accordionExample11">
                      <div class="accordion-body">
                        When someone is arrested, We will study the defendants in-custody situation and analyse if arrangement of bail is the most logical and cost effective thing to do. In lot of sitiutations, bail is reduced or eliminated by the court if the defendant stays in custody just one additional day. In this kind of situations, we will advice you to come to a decision regarding bail together. Our approach is in the best interest of yours not by being unethical or misleading.
                      </div>
                    </div>
                  </div>







                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
              <div class="faq-section mt-5 bg-img" >
   
                  <div class="anim-icons full-width">
   
                      <span class="icon icon-dotted-world left"></span>
   
                      <span class="icon icon-dotted-world right"></span>
   
                  </div>
   
   
                  <div className="dropdown-container">
                      <button onClick={() => toggleDescription('description1')} className="dropdown-trigger">
                          Toggle Description 1
                      </button>
                      <div className={`description ${openDescription === 'description1' ? 'open' : ''}`}>
                          Your description content for button 1
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
                          Description 1 <br />
   
                      </div>
   
                      <button onClick={() => toggleDescription('description2')} className="dropdown-trigger">
                          Toggle Description 2
                      </button>
                      <div className={`description ${openDescription === 'description2' ? 'open' : ''}`}>
                          Your description content for button 2
                          Description 2 <br />
   
                      </div>
   
                      <button onClick={() => toggleDescription('description3')} className="dropdown-trigger">
                          Toggle Description 3
                      </button>
                      <div className={`description ${openDescription === 'description3' ? 'open' : ''}`}>
                          Your description content for button 3
                          Description 3 <br />
   
                      </div>
   
                      <button onClick={() => toggleDescription('description4')} className="dropdown-trigger">
                          Toggle Description 4
                      </button>
                      <div className={`description ${openDescription === 'description4' ? 'open' : ''}`}>
                          Your description content for button 4
                          Description 4 <br />
                      </div>
                  </div>
   
              </div>
          </div> */}
    </>
  );
}
export default MeettheBoundsmen;
