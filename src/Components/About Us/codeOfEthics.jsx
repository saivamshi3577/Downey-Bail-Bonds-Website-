import React from "react";
import './codeOfEthics.css'
import news1 from "../Photos/news-1.jpg";
import news2 from "../Photos/news-2.jpg";
import news3 from "../Photos/news-3.jpg";
import thubm1 from '../Photos/author-thumb-1.jpg';
import thumb2 from '../Photos/author-thumb-3.jpg';
import coworking from '../Photos/coworking.png';
import coWorkingW from '../Photos/coworking (1).png';
import diploma from '../Photos/diploma.png';
import diplomaW from '../Photos/diploma (1).png';
import idea from '../Photos/idea.png';
import ideaW from '../Photos/idea (1).png';
import inspiration from '../Photos/inspiration (1).png';
import inspirationW from '../Photos/inspiration (2).png';


function codeOfEthics(){
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
    return (
        <>
             <section class="CE-page-title">
        <div class="CE-anim-icons CE-full-width">
          <span class="CE-icon CE-icon-bull-eye"></span>
          <span class="CE-icon CE-icon-dotted-circle"></span>
        </div>
        <div class="CE-auto-container-top">
          <div class="CE-title-outer">
            <h1>CODE OF ETHICS</h1>
            <ul class="CE-page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>CODE OF ETHICS</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Code-of-Ethics-content-Two">
        <div className="Code-of-Ethics-head-and-cards">
          <div className="Code-of-Ethics-content-two-heads">
            <h3 className="CE-CT-h3" style={{ color: "#fe00c5" , marginTop:"5%"}}>
            ETHICS
            </h3>
            <h1 style={{ fontSize: "38px" }} className="CE-CT-h1">
            Relations with the Client
            </h1>
            <span className="CE-CT-divider"></span>
          </div>
          <div className="CE-CT-all-cards">
            <div className="CE-CT-each-card">
                <div className="CE-CT-each-card-span">Experience</div>
              <div className="CE-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news1} alt="" />
              </div>
              <div className="CE-CT-each-card-desc">
                <h3 className="CE-CT-Each-card-h3">Article 1.</h3>
                <p className="CE-CT-each-card-p">
                In justice to those who place their faith and interests in her or his care, the Downey bail bond licensee should endeavor constantly to be informed regarding current laws, proposed legislation, governmental orders or regulations, and other significant information and public policies which many effect the interests of the client.
                </p>
              </div>
            </div>
            <div className="CE-CT-each-card">
            <div className="CE-CT-each-card-span">Qualitative</div>
              <div className="CE-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news2} alt="" />
              </div>
              <div className="CE-CT-each-card-desc">
                <h3 className="CE-CT-Each-card-h3">Article 2.</h3>
                <p className="CE-CT-each-card-p">
                The Downey bail bond licensee should make a constant practice of full and complete disclosure to all parties, be they principal or indemnitor, of any and all possible liabilities, penalties or detriments which may arise from their involvement in that particular undertaking which secures the release from custody of a person who is charged with a criminal offense.
                </p>
              </div>
            </div>
            <div className="CE-CT-each-card">
            <div className="CE-CT-each-card-span">Affordability</div>
              <div className="CE-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news3} alt="" />
              </div>
              <div className="CE-CT-each-card-desc">
                <div className="CE-CT-bottom-cards-thumbs">
                    <img src={thumb2} alt="" />
                </div>
                <h3 className="CE-CT-Each-card-h3">Article 3.</h3>
                <p className="CE-CT-each-card-p">
                We very well know that a defendant can not continue to work when they’re in custody, which makes the situation very difficult to support them self and prepare for their defense. This is why we offer flexible, interest-free payment plans to those that need it most. If you do not have the full bail premium amount or your money is needed to retain an attorney, just ask us if we can help.
                </p>
              </div>
            </div>
            <div className="CE-CT-each-card">
            <div className="CE-CT-each-card-span">Ethics</div>
              <div className="CE-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news1} alt="" />
              </div>
              <div className="CE-CT-each-card-desc">
              <div className="CE-CT-bottom-cards-thumbs">
                    <img src={thubm1} alt="" />
                </div>
                <h3 className="CE-CT-Each-card-h3">Article 4.</h3>
                <p className="CE-CT-each-card-p">
                The Downey bail bond licensee, upon receipt of notice of forfeiture or breach where notice is required, or upon personal knowledge of forfeiture or breach, should promptly and formally notify any and all indemnitors and real parties of interest of the forfeiture or breach by the principal, and the bail licensee should at that time concisely state the liability thereby incurred or pending.
                </p>
              </div>
            </div>
            <div className="CE-CT-Three-cards-div">
            <div className="CE-content-cards" onMouseOver={onMouseHoverDiploma}
                onMouseOut={OnMouseOutDiploma}>
                    <div className="CE-cards-icons-div">
                        <img style={{width:'90px'}} src={diploma} alt="" />
                        <div className="CE-Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="CE-cards-Description">
                        <h2 className="CE-cards-descriptions-head">Article 5.</h2>
                        <p className="CE-cards-description-para">The Downey bail bond licensee should supply all indemnitors to an undertaking with a true copy of any document representing a binding legal contract to which she or he is to be or is being committed.</p>
                    </div>
                </div>
                <div className="CE-content-cards"  onMouseEnter={onMouseHoverIdea}
                    onMouseLeave={OnMouseOutIdea}>
                    <div className="CE-cards-icons-div">
                        <img style={{width:'90px'}} src={idea} alt="" />
                        <div className="CE-Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="CE-cards-Description">
                        <h2 className="CE-cards-descriptions-head">Article 6.</h2>
                        <p className="CE-cards-description-para">The Downey bail bond licensee should supply all indemnitors to an undertaking with a true copy of any document representing a binding legal contract to which she or he is to be or is being committed.</p>
                    </div>
                </div>
                <div className="CE-content-cards" onMouseEnter={onMouseHoverCo}
                onMouseLeave={OnMouseOutCo}>
                    <div className="CE-cards-icons-div">
                        <img style={{width:'90px'}} src={coworking} alt="" />
                        <div className="CE-Empty-Line-Div" style={{width:'100px',height:'4px',backgroundColor:'black'}}></div>
                    </div>
                    <div className="CE-cards-Description">
                        <h2 className="CE-cards-descriptions-head">Article 7.</h2>
                        <p className="CE-cards-description-para">The Downey bail bondlicensee should not, except as provided by law, engage in activities that constitute the practice of law, and should refrain from making comments and representations which may lead the public to believe that the Downey bail bond licensee is practicing law.</p>
                    </div>
                </div>
            </div>
            <div className="CE-CT-each-card">
                <div className="CE-CT-each-card-span">Experience</div>
              <div className="CE-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news1} alt="" />
              </div>
              <div className="CE-CT-each-card-desc">
                <h3 className="CE-CT-Each-card-h3">Article 8.</h3>
                <p className="CE-CT-each-card-p">
                The Downey bail bond licensee should keep informed as to movements affecting the criminal justice system in the community, state and the nation, so that s/he may be able to constructively contribute to public thinking on matters of legislation, expenditures, public safety, and other questions dealing with the welfare of the general public. The bail licensee shall strive to find more effective means of fighting crime.
                </p>
              </div>
            </div>
            <div className="CE-CT-each-card">
            <div className="CE-CT-each-card-span">Qualitative</div>
              <div className="CE-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news2} alt="" />
              </div>
              <div className="CE-CT-each-card-desc">
                <h3 className="CE-CT-Each-card-h3">Article 9.</h3>
                <p className="CE-CT-each-card-p">
                It is the paramount duty of the Downey bail bond licensee to protect the general public against misrepresentations or unethical business practices in the bail industry. Agents should endeavor to eliminate in their community any practices, which could be damaging to the public or to the dignity and integrity of the bail industry. The bail licensee should assist any regulatory agency or business practices review board charged with regulating the practices of the members of the industry.
                </p>
              </div>
            </div>
            <div className="CE-CT-each-card">
            <div className="CE-CT-each-card-span">Affordability</div>
              <div className="CE-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news3} alt="" />
              </div>
              <div className="CE-CT-each-card-desc">
                <div className="CE-CT-bottom-cards-thumbs">
                    <img src={thumb2} alt="" />
                </div>
                <h3 className="CE-CT-Each-card-h3">Article 10.</h3>
                <p className="CE-CT-each-card-p">
                When an examination of the material factors of a potential undertaking reasonably convinces the Downey bail bond licensee that she or he will be unable to undertake that particular bail relationship, the bail licensee should immediately inform all involved parties that she or he will not be able to secure the release of the defendant so that the defendant or his or her affiliates may promptly seek his or her release by another means.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );

}
export default codeOfEthics;