import React, { useRef, useState } from "react";

// import "./navbar.css";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import "./style.css";
import "./responsive.css";
import { RiMenu3Line } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import logo1 from "../Photos/logo.png";
import { FaSearch } from "react-icons/fa";
import { MdChairAlt } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [aboutOptionsVisible, setAboutOptionsVisible] = useState(false);
  const [bailProcessOptionsVisible, setBailProcessOptionsVisible] = useState(false);
  const [clientOptionsVisible, setClientOptionsVisible] = useState(false);
  const [contactOptionsVisible, setContactOptionsVisible] = useState(false)
  const [BailCostsVisible, setBailCostsVisible] = useState(false)
  const toggleOptions = (option) => {
    switch (option) {
      case "about":
        setAboutOptionsVisible(!aboutOptionsVisible);
        break;
      case "bailProcess":
        setBailProcessOptionsVisible(!bailProcessOptionsVisible);
        break;
      case "client":
        setClientOptionsVisible(!clientOptionsVisible);
        break;
      case "Contact":
        setContactOptionsVisible(!contactOptionsVisible);
        break;
      case "BailCosts":
        setBailCostsVisible(!BailCostsVisible);
        break;
      default:
        break;
    }
  };


  const onClickOfSideMenu = (action) => {
    console.log("hello");
    document.getElementById("mySidenav").style.width = action === 'open' ? "100%" : "0%";
  }
  return (
    <>
      <header className="main-header header-style-one">
        {/* <!-- Header top --> */}

        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="top-left">
                <ul className="social-icon-one">
                  <li>
                    <a href="#">
                      <span>
                        <FaDribbble />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span>
                        <FaFacebookF />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span>
                        <FaTwitter />
                      </span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span>
                        <FaPinterest />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="top-right">
                <ul className="contact-list-one">
                  <li>
                    <i className="flaticon-location">
                      <FaMapLocationDot />
                    </i>{" "}
                    Downey Police Department 10911 Brookshire Ave, Downey, CA
                    90241, USA{" "}
                  </li>

                  <li>
                    <i className="flaticon-email-1">
                      <MdOutlineEmail />
                    </i>{" "}
                    <a href="mailto:info@downeybailbonds.com">
                      info@downeybailbonds.com
                    </a>{" "}
                  </li>
                </ul>

                <button className="nav-toggler">
                  <i className="flaticon flaticon-menu-2">
                    <CgMenuGridR />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End Header Top --> */}

        {/* <!-- Header Lower --> */}

        <div className="header-lower" style={{ backgroundColor: "white" }}>
          <div className="auto-container">
            {/* <!-- Main box --> */}

            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
                    <img src={logo1} alt="" title="" />
                  </a>
                </div>
              </div>

              <div className="nav-outer">
                {/* <!-- Main Menu --> */}

                <nav className="main-menu navbar-expand-md">
                  <div
                    className="navbar-collapse collapse clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current " style={{ listStyle: "none" }}>
                        <a href="/">Home</a>
                      </li>

                      {/* <li className="dropdown" style={{listStyle:"none"}}>
                        <a href="#">About <MdOutlineKeyboardArrowDown className="drop" /></a>
                       
                        
                        <ul className="nav-ul">
                          <li>
                            <a href="about.html">About Us</a>
                          </li>

                          <li>
                            <a href="buy-ticket.html">Buy Ticket</a>
                          </li>

                          <li>
                            <a href="faq.html">Faq</a>
                          </li>

                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>

                          <li>
                            <a href="testimonial.html">Testimonials</a>
                          </li>

                          <li>
                            <a href="comming-soon.html">Comming Soon</a>
                          </li>
                        </ul>
                      </li> */}

                      <li className="dropdown has-mega-menu">
                        <a href="#">Bail Process <MdOutlineKeyboardArrowDown className="drop" /></a>

                        <div className="mega-menu" style={{ width: "45%", right: "20%" }}>
                          <div
                            className="mega-menu-bar row clearfix"
                            style={{
                              width: "208%"
                            }}
                          >
                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/ArrestAndBooking">ARREST & BOOKING</a>
                                </li>

                                <li>
                                  <a href="/HowBailWorks">HOW BAIL WORKS</a>
                                </li>

                                <li>
                                  <a href="/Releasefromjail">RELEASE FROM JAIL</a>
                                </li>

                                <li>
                                  <a href="/Consumer">CONSUMER TIPS</a>
                                </li>
                              </ul>
                            </div>

                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/History">HISTORY OF BAIL</a>
                                </li>

                                <li>
                                  <a href="/Questions">QUESTIONS AND ANSWERS</a>
                                </li>

                                <li>
                                  <a href="/Criminal">BAIL FOR CRIMINAL CHARGES</a>
                                </li>

                                <li>
                                  <a href="/Process">PROCESS</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>



                      <li className="dropdown has-mega-menu">
                        <a href="#">Bail Costs <MdOutlineKeyboardArrowDown className="drop" /></a>

                        <div className="mega-menu" style={{ width: "30%" }}>
                          <div
                            className="mega-menu-bar row clearfix"
                            style={{
                              width: "300%"
                            }}
                          >
                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/Bailcosts">PAYMENT OPTIONS</a>
                                </li>

                                <li>
                                  <a href="/Costfees">BAIL COST AND FEES</a>
                                </li>

                                <li>
                                  <a href="/Byfax">BAIL BY FAX OR EMAIL</a>
                                </li>


                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>


                      <li className="dropdown has-mega-menu">
                        <a href="#">About <MdOutlineKeyboardArrowDown className="drop" /></a>

                        <div className="mega-menu" style={{ width: "48%" }}>
                          <div
                            className="mega-menu-bar row clearfix"
                            style={{
                              width: "209%"
                            }}
                          >
                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/License">LICENSE</a>
                                </li>

                                <li>
                                  <a href="/Bondsmen">MEET THE BONDS MEN</a>
                                </li>

                                <li>
                                  <a href="/About">ABOUT US</a>
                                </li>

                                <li>
                                  <a href="/ProfessionalBail">PROFESSSIONAL BAIL SERVICES</a>
                                </li>

                                <li>
                                  <a href="/Contactus">CONTACT US</a>
                                </li>
                              </ul>
                            </div>

                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/Privacy">PRIVACY</a>
                                </li>

                                <li>
                                  <a href="/Customercomments">CUSTOMER COMMENTS</a>
                                </li>

                                <li>
                                  <a href="/Ourmission">OUR MISSION</a>
                                </li>

                                <li>
                                  <a href="/codeOfEthics">CODE OF ETHICS</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="dropdown has-mega-menu">
                        <a href="#">Resources <MdOutlineKeyboardArrowDown className="drop" /></a>

                        <div className="mega-menu" style={{ left: "34%", width: "47%" }}>
                          <div
                            className="mega-menu-bar row clearfix"
                            style={{
                              width: "209%"
                            }}
                          >
                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/Innamatelocator">INMATE LOCATOR</a>
                                </li>

                                <li>
                                  <a href="/Jailocator">JAIL LOCATOR</a>
                                </li>

                                <li>
                                  <a href="/Courtlocator">COURT LOCATOR</a>
                                </li>

                                <li>
                                  <a href="/CaliforniaBail">CALIFORNIA BAIL SCHEDULES</a>
                                </li>
                              </ul>
                            </div>

                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/CaliforniaBailLaw">CALIFORNIA BAIL LAW</a>
                                </li>

                                <li>
                                  <a href="/Faq">FAQs</a>
                                </li>

                                <li>
                                  <a href="/Usefullinks">USEFUL LINKS</a>
                                </li>


                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="dropdown has-mega-menu">
                        <a href="#">Location <MdOutlineKeyboardArrowDown className="drop" /></a>

                        <div className="mega-menu" style={{ width: "80%" }} >
                          <div
                            className="mega-menu-bar row clearfix"
                            style={{
                              width: "100%",

                            }}
                          >
                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/LosAngels">LOS ANGELES</a>
                                </li>

                                <li>
                                  <a href="/VanNuys">VAN NUYS</a>
                                </li>

                                <li>
                                  <a href="/Orangecountry">ORANGE COUNTY</a>
                                </li>

                                <li>
                                  <a href="/SanBernardino">SAN BERNARDINO</a>
                                </li>
                                <li>
                                  <a href="/Whittier">WHITTIER</a>
                                </li>
                              </ul>
                            </div>

                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/Riverside">RIVERSIDE</a>
                                </li>

                                <li>
                                  <a href="/LongBeach">LONG BEACH</a>
                                </li>

                                <li>
                                  <a href="/Azusa">AZUSA</a>
                                </li>

                                <li>
                                  <a href="/sandiego">SAN DIEGO</a>
                                </li>
                                <li>
                                  <a href="/Brea">BREA</a>
                                </li>
                              </ul>
                            </div>

                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/Picorivera">PICO RIVERA</a>
                                </li>

                                <li>
                                  <a href="/Lynwood">LYNWOOD</a>
                                </li>

                                <li>
                                  <a href="/Compton">COMPTON</a>
                                </li>

                                <li>
                                  <a href="/Lakewood">LAKEWOOD</a>
                                </li>


                              </ul>
                            </div>

                            <div className="column col-lg-3 col-md-3 col-sm-12">
                              <ul className="nav-ul">
                                <li>
                                  <a href="/Cerritos">CERRITOS</a>
                                </li>

                                <li>
                                  <a href="/Norwalk">NORWALK</a>
                                </li>

                                <li>
                                  <a href="/SouthGate">SOUTH GATE</a>
                                </li>

                                <li>
                                  <a href="/Lahabra">LA HABRA</a>
                                </li>
                              </ul>
                            </div>


                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>

                {/* <!-- Main Menu End--> */}

                <div className="outer-box clearfix">
                  {/* <!-- Search Btn --> */}

                  {/* <div className="search-box-btn search-btn search-box-outer">
                    <span className="icon fa fa-search">
                      <FaSearch />
                    </span>
                  </div> */}

                  {/* <!-- Quote Btn --> */}

                  <div className="btn-box">
                    <a href="/Contactus" className="theme-btn btn-style-one">
                      <span className="btn-title">
                        <i className="flaticon-chair">
                          <MdChairAlt />
                        </i>{" "}
                        Contact Us
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Sticky Header  --> */}

        <div className="sticky-header">
          <div className="auto-container">
            <div className="main-box">
              <div className="logo-box">
                <div className="logo">
                  <a href="index.html">
                    <img src={logo1} alt="" title="" />
                  </a>
                </div>

                <div className="upper-right">
                  <div className="search-box">
                    <button className="search-btn mobile-search-btn">
                      <i className="flaticon-search-2"></i>
                    </button>
                  </div>



                  <a
                    href="#nav-mobile"
                    className="mobile-nav-toggler navbar-trigger"
                  >
                    {/* <i className="flaticon-menu">
                      <RiMenu3Line  />
                    </i> */}
                  </a>
                </div>
              </div>

              <nav className="main-menu navbar-expand-md">
                {/* <!--Keep This Empty / Menu will come through Javascript--> */}
              </nav>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Header --> */}

        <div className="mobile-header">
          <div className="logo">
            <a href="index.html">
              <img src={logo1} alt="" title="" />
            </a>
          </div>

          {/* <!--Nav Box--> */}

          <div className="nav-outer clearfix">
            <div className="outer-box">
              {/* <!-- Search Btn --> */}

              <div className="nav-outer clearfix">
                <div className="outer-box">
                  <a
                    href="#nav-mobile"
                    className="mobile-nav-toggler navbar-trigger"

                  >
                    <i className="flaticon-menu" onClick={() => onClickOfSideMenu('open')}>
                      <RiMenu3Line />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id="mySidenav" class="sidenav">
            <div class="menuCls">
              <div><img src={logo1} style={{
                marginTop: "1%", marginTop: "1%",
                width: "170px",
              }} /></div>
              <div className="div3456" style={{ marginTop: "25px", display: "flex", flexDirection: "column", textAlign: "start" }}>
                <a href="javascript:void(0)" class="closebtn" onClick={() => onClickOfSideMenu('close')}>&times;</a>
                <a href="/" className="line" style={{ fontSize: "18px", border: "0px solid grey", color: "#e11376" }}>Home</a>
                <div>
                  <a href="#" className="line" style={{ fontSize: "18px", border: "1px solid grey", color: "black" }} >About Us <MdOutlineKeyboardArrowDown onClick={() => toggleOptions('about')} style={{ marginLeft: "184px" }} /></a>
                  {aboutOptionsVisible && (
                    <div className="options">
                      <a href="/License" className="line">License</a>

                      <a href="/Bondsmen" className="line">Meet the Bonds Men</a>
                      <a href="/AboutUs" className="line">About Us</a>
                      <a href="/ProfessionalBail" className="line">Professional Bail Service</a>
                      <a href="/Contactus" className="line">Contact Us</a>
                      <a href="/Privacy" className="line">Privacy</a>
                      <a href="/Customercomments" className="line">Customer Comments</a>
                      <a href="/Ourmission" className="line">Our Mission</a>
                      <a href="/codeOfEthics" className="line">Code of Ethics</a>
                    </div>
                  )}
                </div>


                <a href="#" className="line" style={{ fontSize: "18px", border: "0px solid grey", color: "black" }}>Bail Process <MdOutlineKeyboardArrowDown onClick={() => toggleOptions('bailProcess')} style={{ marginLeft: "160px" }} /></a>
                {bailProcessOptionsVisible && (
                  <div className="options">
                    <a href="/ArrestAndBooking" className="line">Arrest & Booking</a>

                    <a href="/HowBailWorks" className="line">How Bail Works</a>
                    <a href="/Releasefromjail" className="line">Release from jail</a>
                    <a href="/Consumer" className="line">Consumer tips</a>
            
                    <a href="/History" className="line">Histoy Of Bail</a>
                    <a href="/Questions" className="line">Questions and Answers</a>
                    <a href="/Criminal" className="line">Bail For Criminal Charges</a>
                    <a href="/Process" className="line">Process</a>


                  </div>
                )}

<a href="#" className="line" style={{ fontSize: "18px", border: "1px solid grey", color: "black" }}>Bail Costs <MdOutlineKeyboardArrowDown onClick={() => toggleOptions('BailCosts')} className="line" style={{ marginLeft: "178px" }} /></a>
                {BailCostsVisible && (
                  <div className="options">
                    <a href="/Bailcosts" className="line">Payment Options</a>
                    <a href="/Costfees" className="line">Bail Costs and Fees</a>
                    <a href="/Byfax" className="line">Bail By Fax Or Email</a>

                  </div>
                )}

                <a href="#" className="line" style={{ fontSize: "18px", border: "0px solid grey", color: "black" }}>Resources <MdOutlineKeyboardArrowDown onClick={() => toggleOptions('client')} className="line" style={{ marginLeft: "174px" }} /></a>
                {clientOptionsVisible && (
                  <div className="options">
                    <a href="/Innamatelocator" className="line">Inmate Locator</a>
                    <a href="/Jailocator" className="line">Jail Locator</a>
                    <a href="/Courtlocator" className="line">Court Locator</a>
                    <a href="/CaliforniaBail" className="line">California Bail Schedules</a>
                    <a href="/CaliforniaBailLaw" className="line">California Bail Law</a>
                    <a href="/Faq" className="line">Faq's</a>
                    <a href="/Usefullinks" className="line">Useful Links</a>
                  </div>
                )}
                <a href="#" className="line" style={{ fontSize: "18px", border: "1px solid grey", color: "black" }}>Location <MdOutlineKeyboardArrowDown onClick={() => toggleOptions("Contact")} style={{ marginLeft: "190px" }} /></a>
                {contactOptionsVisible && (
                  <div className="options">
                    <a href="/LosAngels" className="line">Los Angeles</a>
                    <a href="/VanNuys" className="line">Van Nuys</a>
                    <a href="/Orangecountry" className="line">Orange Country</a>
                    <a href="/SanBernardino" className="line">San Bernardino</a>
                    <a href="/Whittier" className="line">Whittier</a>
                    <a href="/Riverside" className="line">RiverSide</a>
                    <a href="/LongBeach" className="line">Long Beach</a>
                    <a href="/Azusa" className="line">Azusa</a>
                    <a href="/sandiego" className="line">San Diego</a>
                    <a href="/Brea" className="line">Brea</a>
                    <a href="/Picorivera" className="line">Pico Rivera</a>
                    <a href="/Lynwood" className="line">LynWood</a>
                    <a href="/Compton" className="line">Compton</a>
                    <a href="/Lakewood" className="line">LakeWood</a>
                    <a href="/Cerritos" className="line">Cerritos</a>
                    <a href="/Norwalk" className="line">Norwalk</a>
                    <a href="/SouthGate" className="line">South Gate</a>
                    <a href="/Lahabra" className="line">La Habra</a>
                  </div>
                )}
              </div>
            </div>

            {/* <ul className="contact-list-one" style={{marginLeft:"-55%"}}>
                <li>
                  <i className="flaticon-location"></i> Downey police Department
                  10911 Brookshire Ave, Downey, CA 90241, USA{" "}
                </li>

                <li>
                  <i className="flaticon-email-1"></i>{" "}
                  <a href="mailto:info@downeybailbonds.com">
                    info@downeybailbonds.com
                  </a>{" "}
                </li>
              </ul> */}


          </div>

          {/* <!-- Mobile Menu  --> */}

          <div className="mobile-menu">
            <div className="menu-backdrop"></div>

            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}

            <nav className="menu-box">
              <div className="upper-box">
                <div className="nav-logo">
                  <a href="index.html">
                    <img src={logo1} alt="" title="" />
                  </a>
                </div>

                <div className="close-btn">
                  <i className="icon flaticon-close"></i>
                </div>
              </div>

              <ul className="navigation clearfix"></ul>

              <ul className="contact-list-one">
                <li>
                  <i className="flaticon-location"></i> Downey police Department
                  10911 Brookshire Ave, Downey, CA 90241, USA{" "}
                </li>

                <li>
                  <i className="flaticon-email-1"></i>{" "}
                  <a href="mailto:info@downeybailbonds.com">
                    info@downeybailbonds.com
                  </a>{" "}
                </li>
              </ul>

              <ul className="social-links">
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-f"> <FaFacebookF /></span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span className="fab fa-pinterest"></span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <span className="fab fa-dribbble"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="search-popup">
            <button className="close-search">
              <i className="flaticon-close"></i>
            </button>

            <form
              method="post"
              action="https://themecraze.net/html/volia/blog.html"
            >
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  value=""
                  placeholder="Search"
                  required=""
                />

                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* <!-- End Header Search --> */}
      </header>

      {/* <!--End Main Header --> */}

      {/* <!-- Hidden bar back drop --> */}

      <div className="form-back-drop"></div>

      {/* <!-- Hidden Bar --> */}

      <section className="hidden-bar">
        <div className="inner-box">
          <div className="title-box">
            <h2>Contact Us</h2>

            <div className="cross-icon">
              <span className="fa fa-times"></span>
            </div>
          </div>

          {/* <!--Appointment Form--> */}

          <div className="form-style-one">
            <form action="#" method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="username"
                  placeholder="Your Name *"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="email"
                  placeholder="Your Email *"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  className="phone"
                  value=""
                  placeholder="Your Phone*"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="contact_message"
                  className="message"
                  placeholder="Text Message"
                ></textarea>
              </div>

              <div className="form-group">
                <button
                  className="theme-btn btn-style-one"
                  type="button"
                  id="submit"
                  name="submit-form"
                >
                  <span className="btn-title">Submit Now</span>{" "}
                </button>
              </div>
            </form>
          </div>

          <ul className="contact-list-one">
            <li>
              <i className="flaticon-location"></i> Downey police Department
              10911 Brookshire Ave, Downey, CA 90241, USA{" "}
            </li>

            <li>
              <i className="flaticon-email-1"></i>{" "}
              <a href="mailto:info@downeybailbonds.com">
                info@downeybailbonds.com
              </a>{" "}
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}

export default Navbar;
