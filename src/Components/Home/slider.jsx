import React, { useEffect } from "react";
import "./slider.css"
import harshita1 from "../Photos/harshita.jpg";
import harshita2 from "../Photos/harshita2.jpg";
import line1 from "../Photos/object-1.png";
import circle1 from "../Photos/circleimage1.png";
import dotted from "../Photos/dotttedimage.png";
import boximage from "../Photos/box.png";
import circle2 from "../Photos/circleimage2.png"
import triangleimage from "../Photos/triangle.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FaLocationPin } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Slide = () => {
    const navigate = useNavigate()
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide explore-carousel" data-bs-ride="carousel" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img id="scroll" src={harshita1} class="d-block w-100" alt="..." />
                        <div>
                            <img src={line1} alt="" className="animation1" />
                            <img src={circle1} alt="" className="animation2" />
                        </div>
                        <div className="lowerimage">
                            <img src={dotted} alt="" className="animation3" />
                            <img src={boximage} alt="" className="animation4" />
                        </div>
                        <div className="rightimage">
                            <img src={circle2} alt="" className="animation5" />
                            <img src={triangleimage} alt="" className="animation6" />
                        </div>

                        <div className="hello">
                            <div className="animi">
                                <h3 className="Our" > <span className="inner-our">20+ Yrs EXP</span>  -  <span className="inner-our" >500+ Cases</span> - <span className="inner-our">99% Success Rate</span></h3>
                            </div>
                            <div className="logo">
                                <h2 className="expertise"><span style={{color:"orange"}}>DOWNEY</span> BAIL BONDS </h2>
                                <h2 className="expertise1">FAMILY BUSINESS SINCE </h2>
                                <h2 className="expertise2">2004 </h2>
                            </div>
                            <div className="usa">
                            <FaLocationPin style={{color:"yellow"}}/> <span style={{marginLeft:"1%"}}>California, USA</span>    <FaCalendar style={{color:"yellow", marginLeft:"2%"}}/><span style={{marginLeft:"1%"}}>24/7</span>
                            </div>
                            {/* <div className="buttonstyling">
                               
                                <button onclick={()=> navigate("/Contactus")} style={{cursor:"pointer"}} className="contactus">Contact Us</button>
                                <button onClick={()=> navigate("https://www.youtube.com/watch?v=GgBfTFNJNto")} className="videodemo">Video Demo</button>
                
                              
                            </div> */}
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <img id="scroll" src={harshita1} class="d-block w-100" alt="..." />
                        <div>
                            <img src={line1} alt="" className="animation1" />
                            <img src={circle1} alt="" className="animation2" />
                        </div>
                        <div className="lowerimage">
                            <img src={dotted} alt="" className="animation3" />
                            <img src={boximage} alt="" className="animation4" />
                        </div>
                        <div className="rightimage">
                            <img src={circle2} alt="" className="animation5" />
                            <img src={triangleimage} alt="" className="animation6" />
                        </div>

                        <div className="hello">
                            <div className="animi">
                                <h3 className="Our" > <span className="inner-our">20+ Yrs EXP</span>  -  <span className="inner-our" >500+ Cases</span> - <span className="inner-our">99% Success Rate</span></h3>
                            </div>
                            <div className="logo">
                                <h2 className="expertise"><span style={{color:"orange"}}>DOWNEY</span> BAIL BONDS </h2>
                                <h2 className="expertise1">FAMILY BUSINESS SINCE </h2>
                                <h2 className="expertise2">2004 </h2>
                            </div>
                            <div className="usa">
                            <FaLocationPin style={{color:"yellow"}}/> <span style={{marginLeft:"1%"}}>California, USA</span>    <FaCalendar style={{color:"yellow", marginLeft:"2%"}}/><span style={{marginLeft:"1%"}}>24/7</span>
                            </div>
                            {/* <div className="buttonstyling">
        
                                  <button style={{cursor:"pointer"}} className="contactus">Contact Us</button>
                            
                              
                               
                                <a href="https://www.youtube.com/watch?v=GgBfTFNJNto" className="videodemo">Video Demo</a>
                            </div> */}
                        </div>
                    </div>

                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </>
    )
}
export default Slide;
