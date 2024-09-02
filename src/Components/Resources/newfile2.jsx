import React from "react";
import "../About Us/bootstrap.css"
function Bootstrap2(){
    return(<><div class="accordion" id="accordionExample1">
  

    <div class="accordion-item">
        <h2 class="accordion-header" id="heading1" >
          <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" id="Element"  >
            <div className="nameing">
            What is a Felony?
          </div>
          </button>
        </h2>
        <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          A felony is a degree of a crime that is usually higher in level than infractions or misdemeanor. 
          Felonies are generally punished more severely than other types of crimes.
          </div>
        </div>
      </div>
    
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading2">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2" >
          <div className="nameing">
          What is a Misdemeanor?
          </div>
          </button>
        </h2>
        <div id="collapse2" class="accordion-collapse collapse " aria-labelledby="heading2" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          A misdemeanor is a lesser degree of crime, such as major traffic violations or minor moral crimes. Misdemeanor cases usually carry a lesser punishment that felonies.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading3">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3" >
          <div className="nameing">
          What do I do if I miss my court date?
          </div>
          </button>
        </h2>
        <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          If you miss your court date, the court will automatically issue a bench warrant for you. You will need to immediately contact your Downey Bail bond, who on his part will provide you with the proper re-assumption paperwork needed to recall the warrant and reinstate the bond so you may remain free for the duration of the case. You will be asked to return to court with the paperwork as soon as possible.
          </div>
        </div>
      </div>
       <div class="accordion-item">
        <h2 class="accordion-header" id="heading4">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" >
          <div className="nameing">
          How long do you hold Collateral for?
          </div>
          </button>
        </h2>
        <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          Collateral is held for the duration of the case, or until payment plans are satisfied. You will receive your collateral back within 14 days of the end of the case
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading5">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5" >
          <div className="nameing">
          What if I have more questions?
          </div>
          </button>
        </h2>
        <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          Downey Bail Bonds has agents ready to answer all the questions you may have 24 hours a day, 7 days a week. 
          Please free to call us at 1-800-944-1599 and a live agent will immediately answer your concerns.
          </div>
        </div>
      </div>
      
    
    
      
    
      
    </div></>)
}
export default Bootstrap2;
