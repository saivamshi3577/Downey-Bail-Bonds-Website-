import React from "react";
import "./customerComments.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile1 from '../Photos/testi-thumb-1.jpg'
import profile2 from '../Photos/testi-thumb-2.jpg';
import profile3 from '../Photos/testi-thumb-3.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import triangle from '../Photos/arrow-point-to-down (1).png';
import invertedComas from '../Photos/invertedComas.jpg';

function CustomerComments() {
  const slideData1 = [
    {
      id: 1,
      profileImg: `${profile1}`,
      name: "Monika Vance",
      role: "Development Expert",
      description: "Your agent were there for us. I would highly recommend your bail bond services to my family and friends also any one who need bailbonds service…A+++++ …",
      rating:'5'
  },
  {
      id: 2,
      profileImg: `${profile2}`,
      name: "Thomas Jaksone",
      role: "Development Expert",
      description: "Thanks Al, u were the best. AL is highly experienced & knowledgeable person in this business so i highly recommend to all my freinds, families & everyone. Also he is very helpful & understanding. He got my girlfriend out in no time. Thanks AL for all ur help.",
      rating:'5'
  },
  {
      id: 3,
      profileImg: `${profile3}`,
      name: "Thomas Jaksone",
      role: "Development Expert",
      description: "Downey Bail Bonds are very professional & confidential. They help me getting my brother out of jail in the middle of night in no time. One phone call was all it took for me to know this was the company I could trust. If you need a bail bonds, I highly recommend call Downey Bail Bonds!!!!!. Great customer service. …?",
      rating:'5'
  }
  ,
  {
      id: 4,
      profileImg: `${profile3}`,
      name: "Thomas Jaksone",
      role: "Development Expert",
      description: "Thanks Al for all your help. you bailed me out in no time and thanks for guiding my parents in right direction. they called so many bail bond company but nobody answered them properly, they all were in hurry of winding up the bond, but you answered all the questiond ans solved all their querries. you are highly professional and excellent. once again thank you so much.",
      rating:'5'
  }

  ]
  const slideData = [
    {
        id: 1,
        profileImg: `${profile1}`,
        name: "Monika Vance",
        role: "Development Expert",
        description: " These guys really know what they are doing! They are very professional & experienced, and seems like they have been Downey doing bail bond for many years. They were at the jail within 10 minutes of calling and prepared to get the job done. So if ever you need bail bond service in Downey! Call themÂ…Â… They were nice, friendly & very helpful!?",
        rating:'5'
    },
    {
        id: 2,
        profileImg: `${profile2}`,
        name: "Thomas Jaksone",
        role: "Development Expert",
        description: "Downey Bail Bonds are compassionate, professional & friendly people. They help me bail out my girlfirend who was in jail in no time. Excellant service and they worked with me explaining the whole process and paperwork step by step. Thanks for all that you have helped us with.They are very professional in every aspect of this field. If anyone ever needs a bondsman we would highly recommend you. Many thanks.",
        rating:'5'
    },
    {
        id: 3,
        profileImg: `${profile3}`,
        name: "Thomas Jaksone",
        role: "Development Expert",
        description: "Thanks Al for all your help. you bailed me out in no time and thanks for guiding my parents in right direction. they called so many bail bond company but nobody answered them properly, they all were in hurry of winding up the bond, but you answered all the questiond ans solved all their querries. you are highly professional and excellent. once again thank you so much.",
        rating:'5'
    }
    
];
const renderStars = (rating) => {
  return Array.from({ length: rating }, (_, index) => (
    <FontAwesomeIcon 
      key={index} 
      icon={faStar} 
      className={index < rating ? "filled-star" : "empty-star"} 
    />
  ));
};


var settings = {
    dots: false,
    infinite:true,
    speed:1000,
    slidesToShow:3,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHOver: true,
    responsive:[
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }

        },
        {
            breakpoint: 768,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint: 650,
            settings:{
                slidesToShow:1
            }
        }
       
    ]
}
  return (
    <>
      <section class="CC-page-title">
        <div class="CC-anim-icons CC-full-width">
          <span class="CC-icon CC-icon-bull-eye"></span>
          <span class="CC-icon CC-icon-dotted-circle"></span>
        </div>
        <div class="CC-auto-container-top">
          <div class="CC-title-outer">
            <h1>CUSTOMER COMMENTS</h1>
            <ul class="CC-page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>CUSTOMER COMMENTS</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="CC-content-two"> 
      <div className="CC-content-headings"> 
        <h3 className="CC-heading-h3" style={{color:'#fe00c5',textAlign:'center'}}>Testimonials – What Clients Say</h3>
        <h1 className="CC-heading-h1">Happy Clients</h1>
        <span className="CC-content-heading-divider"></span>
      </div>
      <Slider {...settings} className="CC-slider">
                {slideData.map((slide) => (
                    <div key={slide.id} className="customer-comments-cards" style={{width:'100px'}}>
                      <div className="Customer-comments-desc">
                            <p className="customer-comments-desc-p">{slide.description}</p>
                        </div>
                        <div className="CC-carrot-down">
                          <img style={{width:'40px'}} src={triangle} alt="" />
                          </div> 
                        <div className="CC-profile">
                            <img src={slide.profileImg} alt="" />
                            <div className="CC-details">
                            <h4 className="CC-stars">{renderStars(slide.rating)}</h4>
                                <h4 className="customer-name">{slide.name}</h4>
                                <p className="customer-role">{slide.role}</p>
                            </div>
                        </div> 
                    </div>
                ))}
      </Slider>
      <Slider {...settings} className="CC-slider1">
                {slideData1.map((slide) => (
                    <div key={slide.id} className="customer-comments-cards" style={{width:'100px'}}>
                      <div className="Customer-comments-desc">
                            <p className="customer-comments-desc-p">{slide.description}</p>
                        </div>
                        <div className="CC-carrot-down">
                          <img style={{width:'40px'}} src={triangle} alt="" />
                          </div> 
                        <div className="CC-profile">
                            <img src={slide.profileImg} alt="" />
                            <div className="CC-details">
                            <h4 className="CC-stars">{renderStars(slide.rating)}</h4>
                                <h4 className="customer-name">{slide.name}</h4>
                                <p className="customer-role">{slide.role}</p>
                            </div>
                        </div> 
                    </div>
                ))}
      </Slider>
      
      </section>
    </>
  );
}
export default CustomerComments;
