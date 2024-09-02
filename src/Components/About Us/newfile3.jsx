import React from "react";
import "./bootstrap.css"
function Bootstrap3(){
    return(<><div class="accordion" id="accordionExample1">
  

    <div class="accordion-item">
        <h2 class="accordion-header" id="heading1" >
          <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" id="Element"  >
            <div className="nameing">
            Our Refund Policy
          </div>
          </button>
        </h2>
        <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          All payments processed are final. You assume the responsibility for your payment and no refunds will be issued.
          </div>
        </div>
      </div>
      <h4 style={{color:'white'}}>Privacy Policy :</h4>
    
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading2">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2" >
          <div className="nameing">
          What information do we collect?
             </div>
          </button>
        </h2>
        <div id="collapse2" class="accordion-collapse collapse " aria-labelledby="heading2" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          At Downey bail bonds,Inc we collect information from you when make a payment, respond to a survey or communication such as e-mail, or participate in another site feature. When making a payment or sending an email communication, we may ask you for your name, e-mail address, mailing address, phone number,
           credit card information or other information. You may, however, visit our site anonymously.  </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading3">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3" >
          <div className="nameing">
          How do we use your information?
          </div>
          </button>
        </h2>
        <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          We may use the information that we collect from you in the following ways:
<ul>To personalize your site experience and to allow us to deliver the type of content and product offerings in which you are most interested.<li></li><li>To allow us to better service you in responding to your customer service requests.</li><li>To quickly process your transactions.</li><li>To administer a contest, promotion, survey or other site feature.</li></ul>

          </div>
        </div>
      </div>
       <div class="accordion-item">
        <h2 class="accordion-header" id="heading4">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" >
          <div className="nameing">
          How do we protect visitor information?
          </div>
          </button>
        </h2>
        <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample1">
          <div class="accordion-body">
          At Downey bail bonds,Inc we implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. When you place a payment or access your personal information, we offer the use of a secure server. All sensitive/credit information you supply is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our databases to be only accessed as stated above.
          </div>
        </div>
      </div>
    
      
    
    
      
    
      
    </div></>)
}
export default Bootstrap3;
