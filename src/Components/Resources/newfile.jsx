import React from "react";
import "../About Us/bootstrap.css"
function Bootstrap(){
    return(<>
    <div class="accordion" id="accordionExample2">
  

  <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne" >
        <button class="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" id="Element"  >
          <div className="nameing">
       What is a Downey Bail Bond?
        </div>
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
        <div class="accordion-body">
        A Downey Bail Bond is a bond that someone may purchase for the purpose of posting Downey bail bond for a jail inmate. A Downey bail bond is issued by a bail bonds agency and is normally secured by a promissory note. The cost of the bond is a set percentage of the face value.
        </div>
      </div>
    </div>
  
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
        <div className="nameing">
        How can I pay for a Downey Bail Bond?
        </div>
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
        <div class="accordion-body">
        With Downey Bail Bonds you may pay for your bond with cash, card or check. In case the funds to pay for the bonds are not immediately available, we may arrange payment plan to pay for the bond.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
        <div className="nameing">
        Do you charge interest rate on payment plans?
        </div>
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
        <div class="accordion-body">
        No, Downey Bail Bonds don’t charge interest rate on payment arrangements, and neither adds on any fees or charges other than the cost of the bond.
        </div>
      </div>
    </div>
     <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" >
        <div className="nameing">
        How do I qualify for a Downey Bail Bond?
        </div>
        </button>
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample2">
        <div class="accordion-body">
        With Downey Bail Bonds Alhambra, it is fairly easy to get approved for a bail bond. We simply do not turn people down for bail.You will have to come in and fill up a Downey Bail bond application, or call our customer support team to take an application over the phone. You or the defendant will have to agree to sign responsibility and promise that the defendant will show up to court until the court case is resolved.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" >
        <div className="nameing">
        What is Collateral?  </div>
        </button>
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample2">
        <div class="accordion-body">
        Collateral is an asset used to secure the execution of a Downey Bail bond. Asset can simply be anything of value. It also maybe a promissory note signed by the defendant and/or a family member. It can also be a title to a vehicle, or even a trust deed of a property.
        </div>
      </div>
    </div>
    
  
    
  
  
    
  
    
  </div>
  
  
  
    </>)
}
export default Bootstrap;