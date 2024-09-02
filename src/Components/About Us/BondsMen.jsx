import React from "react";
import "./BondsMen.css";
import news1 from "../Photos/news-1.jpg";
import news2 from "../Photos/news-2.jpg";
import news3 from "../Photos/news-3.jpg";
import thubm1 from '../Photos/author-thumb-1.jpg';
import thumb2 from '../Photos/author-thumb-3.jpg';
import phone from '../Photos/call.png';
import mail from '../Photos/email.png';
import location from '../Photos/location.png';
import cyclone from '../Photos/circle-1.png';

function MeetBondsMen() {
  return (
    <>
      <section class="page-title">
        <div class="anim-icons full-width">
          <span class="icon icon-bull-eye"></span>
          <span class="icon icon-dotted-circle"></span>
        </div>
        <div class="auto-container-top">
          <div class="title-outer">
            <h1>MEET THE BONDSMEN</h1>
            <ul class="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>MEET THE BONDSMEN</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Bonds-Men-content-Two">
        <div className="Bonds-Men-Content-head-and-cards">
          <div className="bonds-men-content-two-heads">
            <h3 className="BM-CT-h3" style={{ color: "#fe00c5" , marginTop:"3%"  }}>
              How We Work
            </h3>
            <h1 style={{ fontSize: "38px" }} className="BM-CT-h1">
              Southern California Bail Bondsmen
            </h1>
            <span className="BM-CT-divider"></span>
          </div>
          <div className="BM-CT-all-cards">
            <div className="BM-CT-each-card">
                <div className="BM-CT-each-card-span">Experience</div>
              <div className="BM-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news1} alt="" />
              </div>
              <div className="BM-CT-each-card-desc">
                <h3 className="BM-CT-Each-card-h3">Experience</h3>
                <p className="BM-CT-each-card-p">
There are many arrest situations occur every day and all are different. If an agent is not familiar with California law, arrest procedures, jail release requirements, court procedures and a general familiarity with the clerks and staff members in each county, the chances are you will be misinformed or mislead. Having been in business for number of years we proud ourselves at being the best in the business when it comes to knowledge and experience. that need.
                </p>
              </div>
            </div>
            <div className="BM-CT-each-card">
            <div className="BM-CT-each-card-span">Qualitative</div>
              <div className="BM-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news2} alt="" />
              </div>
              <div className="BM-CT-each-card-desc">
                <h3 className="BM-CT-Each-card-h3">Qualitative Service</h3>
                <p className="BM-CT-each-card-p">
                  Services like always being personally available to you. When
                  you call us your call directly attended by Expert Daily Bail
                  Bond Agent. If it’s convenient, we will reach to your place.
                  Apart from bail, if you are planning to take attorney, we can
                  arrange for you. Our every client treated with care, respect
                  and honesty.
                </p>
              </div>
            </div>
            <div className="BM-CT-each-card">
            <div className="BM-CT-each-card-span">Affordability</div>
              <div className="BM-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news3} alt="" />
              </div>
              <div className="BM-CT-each-card-desc">
                <div className="BM-CT-bottom-cards-thumbs">
                    <img src={thumb2} alt="" />
                </div>
                <h3 className="BM-CT-Each-card-h3">Affordability</h3>
                <p className="BM-CT-each-card-p">
                We very well know that a defendant can not continue to work when they’re in custody, which makes the situation very difficult to support them self and prepare for their defense. This is why we offer flexible, interest-free payment plans to those that need it most. If you do not have the full bail premium amount or your money is needed to retain an attorney, just ask us if we can help.
                </p>
              </div>
            </div>
            <div className="BM-CT-each-card">
            <div className="BM-CT-each-card-span">Ethics</div>
              <div className="BM-CT-Each-Card-Image">
                <img style={{width:'100%'}} src={news1} alt="" />
              </div>
              <div className="BM-CT-each-card-desc">
              <div className="BM-CT-bottom-cards-thumbs">
                    <img src={thubm1} alt="" />
                </div>
                <h3 className="BM-CT-Each-card-h3">Ethics</h3>
                <p className="BM-CT-each-card-p">
                <a href="/ArrestAndBooking" style={{color:"orange"}}>When someone is arrested</a>
, We will study the defendants in-custody situation and analyse if arrangement of bail is the most logical and cost effective thing to do. In lot of sitiutations, bail is reduced or eliminated by the court if the defendant stays in custody just one additional day. In this kind of situations, we will advice you to come to a decision regarding bail together. Our approach is in the best interest of yours not by being unethical or misleading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Bonds-Men_content-Three" >
      <div className="Bonds-Men-Content-Three-Heading">
            <div className="BM-three-headings">
            <h3 className="BM-Three-H3">Contact Details</h3>
            <p className="BM-THree-H2">Need a Downey Bail Bondsmen? My Bail Bond company can meet your needs. Please call to find out how We can help:</p>
            <span className="BM-Three-divider"></span>
            </div>
            <div className="BM-Three-animation">
            <img src={cyclone} alt="" style={{width:'250px'}} />
        </div>
        </div>
        <div className="BM-Three-All-Cards">
          <div className="BM-Three-Each-Cards">
              <div className="BM-Three-icon">
                <img style={{width:'60px'}} src={phone} alt="" />
              </div>
              <h3 className="BM-Three-cards-h3">Call : 562-287-8388</h3>
              {/* <a className="BM-Three-cards-a" href="">Read More</a> */}
          </div>
          <div className="BM-cards-Seperation"></div>
          <div className="BM-Three-Each-Cards">
              <div className="BM-Three-icon">
                <img style={{width:'60px'}} src={mail} alt="" />
              </div>
              <h3 className="BM-Three-cards-h3">Email : bailbondsdowney@gmail.com</h3>
              {/* <a className="BM-Three-cards-a" href="">Read More</a> */}
          </div>
          <div className="BM-cards-Seperation2"></div>
          <div className="BM-Three-Each-Cards">
              <div className="BM-Three-icon">
                <img style={{width:'60px'}} src={location} alt="" />
              </div>
              <h3 className="BM-Three-cards-h3">Member of : PBUS, GSBAA</h3>
              {/* <a className="BM-Three-cards-a" href="">Read More</a> */}
          </div>
        </div>

        {/* <div className="BM-Three-All-cards">
            <div className="BM-Three-servcies-cards">
                <div className="BM-inner-services-cards">
                <div className="BM-cons">
                    <img style={{width:"60px"}} src={phone} alt="" />
                </div>
                <div className="cards-desc-BM-Three">
                    <h2 className="desc-h2-BM">Call : 562-287-8388</h2>
                    
                    <div className="desc-a-3131">
                        <a href="">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="vertical-line-BM"></div>
            <div className="BM-Three-servcies-cards">
                <div className="BM-inner-services-cards">
                <div className="BM-icons">
                    <img style={{width:"60px"}} src={mail} alt="" />
                </div>
                <div className="cards-desc-BM-Three">
                    <h2 className="desc-h2-BM">Email:</h2>
                    <h2 className="desc-h2-BM" style={{width:'70%'}}>bailbondsdowney@gmail.com</h2>
                    
                    <div className="desc-a-3131-BM">
                        <a href="">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="vertical-line-BM"></div>
            <div className="BM-Three-servcies-cards">
                <div className="BM-inner-services-cards">
                <div className="BM-icons">
                    <img style={{width:"60px"}} src={location} alt="" />
                </div>
                <div className="cards-desc-BM-Three">
                    <h2 className="desc-h2-BM">
Member of : PBUS, GSBAA</h2>
                   
                        <a className="BM-cards-A" href="">Read more</a>
                    
                </div>
                </div>
            </div>
           
        </div> */}
      </section>
    </>
  );
}
export default MeetBondsMen;
