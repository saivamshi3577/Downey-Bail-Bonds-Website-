import React from "react";
import "./OurMission.css"; 
import globe from "../Photos/icon-world.png";
function OurMission() {
  return (
    <div>
      <section className="page-title">
        <div class="anim-icons full-width">
          <span className="icon icon-bull-eye"></span>
          <span className="icon icon-dotted-circle"></span>
        </div>
        <div className="auto-container-top">
          <div className="title-outer">
            <h1>OUR MISSION</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Our Mission</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="middleMainContainer">
        {/* <div className="firstGlobeContainer"> */}
        <div className="firstFlexMiddleContainer">
          <h1 style={{marginTop:"8%"}}>Mission</h1>
          <p className="para1">
            At Downey Bail Bonds,Inc our Mission is simple, To Provide Every
            Client Prompt Professional Service at an Affordable Price.” During a
            time of crisis, our clients are looking for someone who’s respectful
            and professional. And in today’s economy, many clients are also
            looking for the most affordable solution. Our entire customer
            service model revolves around these three key customer needs. Rest
            assured, when you call on Downey Bail Bonds, the agent you speak to
            will act promptly, professionally and will find a way to make bail
            affordable for you.
          </p>
        </div>
        {/* </div>  */}

        {/* <div className="secondGlobeContainer">  */}
        <div className="secondFlexMiddleContainer">
          <h1 style={{marginTop:"9%"}}>Vision</h1>
          <p className="para2">
            At Downey Bail Bonds,Inc we have an expectation “To Set the
            Standards of Service and Affordability in the Bail Bonds Business.”
            This means we will never become satisfied that we have done enough
            to serve our client’s core needs. Whether we are researching new
            ways to expedite the release process, upgrading the atmosphere
            within our offices or fine tuning our financing alternatives, our
            clients can be assured we will never stop trying to serve them
            better.
          </p>
        </div>
        {/* </div> */}
      </div>

      <div className="bgImage"> 
      <div className="bgBlue"> 
          
          <div className="flexBallsContainer"> 
            
            <div className="firstBallContainer">  
              <img src={globe} className="globe1"></img>
            </div> 
    
          <div className="contentDivWithoutBalls"> 
              <div className="zIndexDiv"> 
              <div className="contentDiv">
            <h1 style={{color:"#ffba00"}}>Principles</h1>
            <p> 
            At Downey Bail Bonds,Inc our agents follow a set of internal
              principles that ensure we meet the needs of every client. By sharing
              these fundamental behaviors and beliefs, we know we will be successful
              in following the Vision we have set for ourselves. Downey Bail
              Bonds,Inc Agents throughout Downey & Nationwide we are able to service
              the needs of all Downey, 24 hours a day, 7 days a week. Our bail
              agents are professional, courteous, and most of all, prepared to help.
              Just give us a call and let us find a way to make the bail bonds
              process hassle-free and affordable for you. for additional bail bond
              information and answers to your specific questions about Downey bail
              bonds, Inc please call Toll-free at 1-800-944-1599.
            </p>
              
             
             <a href="/Contactus"> <button className="btn1"> Contact Us</button></a>
           
              </div>   
           </div>
              
              
            </div>   
    
            <div className="secondBallContainer"> 
             <img src={globe} className="globe2"></img>
            </div>
        
           </div>
    
          </div>
      </div>


    </div>
  );
}

export default OurMission;
