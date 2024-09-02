import React,{useState} from "react";
import './ProfessionalBailServicesBlog.css';
import coworking from '../Photos/coworking.png';
import coWorkingW from '../Photos/coworking (1).png';
import diploma from '../Photos/diploma.png';
import diplomaW from '../Photos/diploma (1).png';
import idea from '../Photos/idea.png';
import ideaW from '../Photos/idea (1).png';
import inspiration from '../Photos/inspiration (1).png';
import inspirationW from '../Photos/inspiration (2).png';
// import object1 from '../ProfessionalBailServices/object-1.png'

function ProfessionalServicesBlog(){

    /******************for coWorking**********/

    const onMouseHoverCo = (e)=>{
        e.currentTarget.querySelector('img').src = coWorkingW;
    }
    const OnMouseOutCo = (e) =>{
        e.currentTarget.querySelector('img').src = coworking;
    }
    /******************for idea**********/

    const onMouseHoverIdea = (e)=>{
        e.currentTarget.querySelector('img').src = ideaW;
    }
    const OnMouseOutIdea = (e) =>{
        e.currentTarget.querySelector('img').src = idea;
    }
    /******************for diploma**********/

    const onMouseHoverDiploma = (e)=>{
        e.currentTarget.querySelector('img').src = diplomaW;
        
    }
    const OnMouseOutDiploma = (e) =>{
        e.currentTarget.querySelector('img').src = diploma;
    }
    /******************for inspiration**********/

    const onMouseHoverInsp = (e)=>{
        e.currentTarget.querySelector('img').src = inspirationW;
    }
    const OnMouseOutInsp = (e) =>{
        e.currentTarget.querySelector('img').src = inspiration;
    }
   
    
    
    return(
        <>
            <section class="page-title">
        <div class="anim-icons full-width">
          <span class="icon icon-bull-eye"></span>
          <span class="icon icon-dotted-circle"></span>
        </div>
        <div class="auto-container-top">
          <div class="title-outer">
            <h1>PROFESSIONAL BAIL SERVICES</h1>
            <ul class="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>PROFESSIONAL BAIL SERVICES</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="PBS-content-two">
        <div className="Content-two-head-and-cards">
            <div className="content-two-head">
                <h3 className="PBS-content-two-head-h3" style={{color:'#fe00c5', marginTop:"3%"}}>PROFESSIONAL BAIL SERVICES</h3>
                <h4 className="PBS-content-two-head-h4" style={{color:'black',fontWeight:'700', fontSize:'21px'}}>What makes Downey Bail Bonds different from other bail companies? Quite simply, our level of professionalism and our level of service.
</h4>
                <span className="PBS-content-two-head-divider"></span>
            </div>
            <div className="PBS-content-two-all-cards">
                <div className="PBS-content-cards" onMouseOver={onMouseHoverDiploma}
                onMouseOut={OnMouseOutDiploma}>
                    <div className="PBS-cards-icons-div">
                        <img style={{width:'90px'}} src={diploma} alt="" />
                        <div className="Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="PBS-cards-Description">
                        <h2 className="PBS-cards-descriptions-head">24 Hour Confidential Downey Bail Bonds</h2>
                        <p className="PBS-cards-description-para">Let Downey Bail Bonds help you through the Downey bail bond process. We are always here to help you through a time in your life you never expected and you likely will not experience again. We are always open, so feel free to call us 24/7: weekends, nights, holidays, even Christmas. We are here for you. For confidential help, our Toll-free number is 1-800-944-1599.</p>
                    </div>
                </div>
                <div className="PBS-content-cards"  onMouseEnter={onMouseHoverIdea}
                    onMouseLeave={OnMouseOutIdea}>
                    <div className="PBS-cards-icons-div">
                        <img style={{width:'90px'}} src={idea} alt="" />
                        <div className="Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="PBS-cards-Description">
                        <h2 className="PBS-cards-descriptions-head">Approval by Phone in Minutes</h2>
                        <p className="PBS-cards-description-para">When you call, you will speak to a bail bondsman who is licensed by the Downey Department of Insurance. We can approve most bonds over the phone in just a few minutes on your first phone call. We will honestly tell you if we can help you and how we can help you. We will always give you the opportunity to have all of your questions answered by phone. When you contact us, we will offer you a realistic time frame in which to complete your bail bond.</p>
                    </div>
                </div>
                <div className="PBS-content-cards" onMouseEnter={onMouseHoverCo}
                onMouseLeave={OnMouseOutCo}>
                    <div className="PBS-cards-icons-div">
                        <img style={{width:'90px'}} src={coworking} alt="" />
                        <div className="Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="PBS-cards-Description">
                        <h2 className="PBS-cards-descriptions-head">Bail by Fax or Email Option</h2>
                        <p className="PBS-cards-description-para">Because fast service is one of the benefits of using Downey Bail Bonds, we offer you the convenience of using our bail bonds by fax / e-mail option. We can deliver all necessary bail documents to you within minutes. Our clients who are out of the area have especially appreciated this option, but the convenience is available on most bonds.</p>
                    </div>
                </div>
                <div className="PBS-content-cards"  onMouseOver={onMouseHoverDiploma}
                    onMouseOut={OnMouseOutDiploma}>
                    <div className="PBS-cards-icons-div">
                        <img style={{width:'90px'}} src={diploma} alt="" />
                        <div className="Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="PBS-cards-Description">
                        <h2 className="PBS-cards-descriptions-head">Credit Cards Accepted</h2>
                        <p className="PBS-cards-description-para" style={{paddingBottom:'80px'}}>With us, paying for a bail bond is made easy with Visa, Master Card, and Discover. You may also pay by cash. Call us to discuss what’s most comfortable for you.</p>
                    </div>
                </div>
                <div className="PBS-content-cards" onMouseEnter={onMouseHoverIdea}
                onMouseLeave={OnMouseOutIdea}>
                    <div className="PBS-cards-icons-div">
                        <img style={{width:'90px'}} src={idea} alt="" />
                        <div className="Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="PBS-cards-Description">
                        <h2 className="PBS-cards-descriptions-head">Downey Bail Bonds with No Collateral</h2>
                        <p className="PBS-cards-description-para">Most of our Downey bail bonds are written with no collateral required. When we go through our initial screening process, we look at many factors such as the length of time the defendant has lived in Downey, their employment situation, credit rating, character, type of crime and similar factors. We do this to assess the risk in assuming the bond. Once complete, we find that most of our customers are eligible for a “signature bail bond” which typically requires no collateral. In general, customers are usually a low “flight risk.” If you do secure bail bond using collateral, it will be returned at the end of the case.</p>
                    </div>
                </div>
                <div className="PBS-content-cards" onMouseEnter={onMouseHoverCo}
                onMouseLeave={OnMouseOutCo}>
                    <div className="PBS-cards-icons-div">
                        <img style={{width:'90px'}} src={coworking} alt="" />
                        <div className="Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="PBS-cards-Description">
                        <h2 className="PBS-cards-descriptions-head">Flexible Financing Options</h2>
                        <p className="PBS-cards-description-para">Typically, Downey bail bonds require payment in advance of the release from jail. We understand that may represent a financial burden. Clearly, bail is not a planned expense. That’s why we offer no interest bail bond financing. We will work out flexible payments for your bond with no additional financing charges, taxes or fees. We can usually let you if you qualify in your first phone call. If this is a consideration for you, let your bondsman know.</p>
                    </div>
                </div>
                <div className="PBS-content-cards" onMouseEnter={onMouseHoverInsp}
                onMouseLeave={OnMouseOutInsp}>
                    <div className="PBS-cards-icons-div">
                        <img style={{width:'90px'}} src={inspiration} alt="" />
                        <div className="Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="PBS-cards-Description">
                        <h2 className="PBS-cards-descriptions-head">When You Have Questions… We Have Answers</h2>
                        <p className="PBS-cards-description-para">When you contact Downey Bail Bonds, we can provide immediate answers regarding the arrest and booking process of someone jailed in Downey. Call us for information about the inmates’s location, charges, bail and more at 1-800-944-1599.</p>
                    </div>
                </div>
                <div className="PBS-content-cards" onMouseEnter={onMouseHoverInsp}
                onMouseLeave={OnMouseOutInsp}>
                    <div className="PBS-cards-icons-div">
                        <img style={{width:'90px'}} src={inspiration} alt="" />
                        <div className="Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="PBS-cards-Description">
                        <h2 className="PBS-cards-descriptions-head">Information and Technology at Your Fingertips</h2>
                        <p className="PBS-cards-description-para">Having a loved one in jail can be a very stressful situation — that is why we want to share important information which is critical for you to know if going through the Downey bail bond process. Caring and Creative Solutions Wherever you are in Downey, We can help. We can process bail bonds quickly and efficiently throughout the entire state. Some situations may be unique, but we always strive for 100 percent total customer satisfaction. Let us assist you today.</p>
                    </div>
                </div>
            </div>
            

        </div>
      </section>
        </>
    );
}
export default ProfessionalServicesBlog;