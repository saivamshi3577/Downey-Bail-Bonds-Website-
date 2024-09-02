import React from 'react'
import "./about.css"
import about1 from "../Photos/about1image.jpg";
import about2 from "../Photos/about2image.jpg";
import about3 from "../Photos/cta-bg.png"
import news1 from "../Photos/news-1.jpg"
import news3 from "../Photos/news-3.jpg"
import thumb1 from '../Photos/author-thumb-1.jpg';
import thumb2 from '../Photos/author-thumb-3.jpg';




function about() {
  return (
    <>

      <section className="page-title">
        <div className="anim-icons full-width">
          <span className="icon icon-bull-eye"></span>
          <span className="icon icon-dotted-circle"></span>
        </div>
        <div className="auto-container-top">
          <div className="title-outer">
            <h1>ABOUT DOWNEY BAIL BONDS</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home </a>
              </li>
              <li>ABOUT DOWNEYBAIL BONDS</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="about-section-three">



        <div class="row101">

          {/* <!-- Image Column --> */}



          <div class="about-image-wrapper col-lg-6 col-md-12 col-sm-12">


            <img src={about1} alt=" photo 1" className="photo" />
            <img src={about2} alt="photo 2" className="photo" />
            
            {/* <img src={about3} alt=" photo 3" className="photo" /> */}
            <div className='photo blue' alt=" photo 3" style={{backgroundColor:" #001376"}}>
              <span className='text1'>+1560</span><br />
              <span className='text2'>&nbsp;&nbsp;&nbsp;Successful</span>
              <span className='text3'>Cases</span>
            </div>


          </div>
          <div className="content-right col-lg-6 col-md-12 col-sm-12">
            <div>
              <span class="sub-title">ABOUT DOWNEY BAIL BONDS</span>
            </div>

            <div>
              <h2 className='hello1'>Why Choose Experience</h2>
            </div>
            <div>
              <h2 className='hello1'>Experience</h2>
              <p className='para11'>There are many arrest situations occur every day and all are different. If an agent is not familiar with Downey law, arrest procedures, jail release requirements, courtprocedures and a general familiarity with the clerks and staff members in each county, the chances are you will be misinformed or mislead. Having been in business for number of years we proud ourselves at being the best in the business when it comes to knowledge and experience that need.</p>
            </div>
            <div>
              <h2 className='hello1'>Qualitative Service</h2>

              <p className='para11'>Services like always being personally available to you. When you call us your call directly attended by Expert Downey Bail Bond Agent. If it’s convenient, we will reach to your place. Apart from bail, if you are planning to take attorney, we can arrange for you. Our every client treated with care, respect and honesty.</p>

            </div>
            <br />
            <br />
            <div class="btn-box">

              <a href="/Contactus" class="theme-btn1012 btn-style-two1"><span class="btn-title" style={{color:"white", fontSize:"20px"}}><b>Contact Us</b></span></a>

            </div>
          </div>






















        </div>



        {/* </div>

        </div> */}

      </section>


      <section className='aboutus-content-three'>
      <div className='All-cards-div-about-us'>
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
                We very well know that a defendant cannot continue to work when they’re in custody ,which makes the situation very difficult to support them self and prepare for their defense. This is why we offer flexible, interest-free payment plans to those that need it most. If you do not have the full bail premium amount or your money is needed to retain an attorney, just ask us if we can help.
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
                    <img src={thumb1} alt="" />
                </div>
                <h3 className="BM-CT-Each-card-h3">Ethics</h3>
                <p className="BM-CT-each-card-p">
                We will study the defendants in-custody situation and analyse if arrangement of bail is the most logical and cost effective thing to do. In lot of sitiutations, bail is reduced or eliminated by the court if the defendant stays in custody just one additional day. In this kind of situations, we will advice you to come to a decision regarding bail together. Our approach is in the best interest of yours not by being unethical or misleading.
                </p>
              </div>
            </div>
      </div>
      </section>
      
      {/* <section className='bottompart'>
        <div className='twocards'>
          <div className='card101'>

          </div>

        </div>

      </section> */}





    </>
  )
}

export default about;