import React from "react";
import { useState, useRef } from "react";
import "./Contact-us.css";
import contactdivider from "../Photos/contactUs-divider-icon.png"
import dividercenter from "../Photos/conatctUsdivider-center-kk.png"
import contactSettingIcon from "../Photos/contactUs-setting.png"


function ContactUsKK() {

const nameref = useRef();
const emailref = useRef();
const phoneref = useRef();
const subjectref = useRef();

    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            phone: '',
            subject: ''
        }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <>
            <div className="contact-us-setting-fixed-icon">
                <img style={{ width: '15px' }} src={contactSettingIcon} alt="" />
            </div>
            <div className="contact-us-main-main-div">
                <section class="Contact-us-main-heading">
                    <div class="anim-icons-kkp full-width-kkp">
                        <span class="icon-bull-eye-kk"></span>
                        <span class="icon-dotted-circle-kk"></span>
                    </div>
                    <div class="Contact-us-content-div">
                        <div class="Contact-us-content">
                            <h1>Contact Us</h1>
                            {/* <h1>Downey Bail Bonds</h1> */}
                            <ul class="Contact-us-page-breadcrumb" style={{marginLeft:"3%"}}>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 2nd part-content */}

                <section className="contact-section">
                    <div className="contact-auto-container">
                        <div className="contact-sec-title">
                            <span className="contact-sub-title">GET IN TOUCH</span>
                            <h2 className="contact-sub-heading">Southern California Bail Bondsmen</h2>
                            <p className="contact-sub-paragraph">
                                A licensed Downey Bail Bondsmen is available by phone 24 hours a day, 365 days a year to
                                answer your bail questions or provide information about bail.
                                If you have a general question, feel free to contact us via email using the form below.
                            </p>
                            <img className="contact-us-divider-img" src={dividercenter} alt="" />
                        </div>

                        {/* form-part */}

                        <div className="contact-form">
                            <div className="contact-registerForm-Button">
                                <div className="contact-form-div">
                                    <form action="" method="post">
                                        <div className="contact-form-content">

                                            <div className="name-email-div">
                                                <div className="input-box-contact-kk">
                                                    <input type="text" id="name" name="name" placeholder="Name " value={formData.name} maxLength={30} onChange={handleChange} ref={nameref}   required /> <i class="fa-solid fa-user"></i>

                                                    {/* <input type="text" placeholder="Name" name="" required /> <i class="fa-solid fa-user"></i> */}
                                                </div>

                                                <div className="input-box-contact-kk">
                                                    <input type="email" id="email" name="email" placeholder="Email" value={formData.email} ref={emailref} onChange={handleChange} required /><i class="fa-solid fa-envelope"></i>
                                                    {/* <input type="text" placeholder="Email" name="" required /><i class="fa-solid fa-envelope"></i> */}
                                                </div>
                                            </div>

                                            <div className="phone-subject-div">
                                                <div className="input-box-contact-kk">
                                                    <input type="number" id="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} ref={phoneref} required /><i class="fa-solid fa-phone-flip"></i>
                                                    {/* <input type="number" placeholder="Phone" name="" required /><i class="fa-solid fa-phone-flip"></i> */}
                                                </div>
                                                <div className="input-box-contact-kk">
                                                    <input type="text" id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange}  ref={subjectref} required /><i class="fa-solid fa-pen"></i>
                                                    {/* <input type="text" placeholder="Subject" name="" required /><i class="fa-solid fa-pen"></i> */}
                                                </div>
                                            </div>
                                            <div className="input-box-contact-message-kk">
                                                <input type="text" id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
                                                {/* <input type="text" placeholder="Message" name="" /> */}
                                            </div>
                                        </div>
                                        <button onClick={(e) => {
                                            if (nameref.current.value === "" || emailref.current.value === "" || phoneref.current.value ==="" || subjectref.current.value ==="" ) {

                                            }
                                            else{
                                                console.log(formData);
                                                e.preventDefault();
                                            }
                                        }} className="contact-us-btn-theme contact-us-btn-theme-style-one">Submit</button>

                                        {/* <a href="contact.html" className="contact-us-btn-theme contact-us-btn-theme-style-one">
                                            <span className="contact-us-btn-theme-title" type="submit">Submit</span>
                                        </a> */}
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="map-main-div">
                            <div class="contact-map-column">
                                <div class="contact-map-outer">
                                    <iframe className="contact-map-part" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d105900.15328009088!2d-118.10859039135741!3d33.95707658499822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cd9a4ed6e139%3A0x12964415bcef286f!2s10911%20Brookshire%20Ave%2C%20Downey%2C%20CA%2090241!5e0!3m2!1sen!2sus!4v1715696706674!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="quick-contact-part">
                                <h5 className="contact-quick-heading1">QUICK CONTACT</h5>
                                <h2 className="contact-quick-heading2">Need Help? Contact Us</h2>
                                <img className="quick-contact-divider" src={contactdivider} alt="" />
                                <p className="quick-contact-para">Available to our business customers 24 hours a day.</p>
                                <div className="contact-icons-div">
                                    <ul class="contact-info">
                                        <li className="contact-usList">
                                            <span class="contact-Us-icon1 fa fa-map-marker-alt"></span>
                                            <h4 className="contact-icon-headings">Our Location:</h4>
                                            <p className="contact-icon-paras">Downey police Department
                                                10911 Brookshire Ave, Downey, CA 90241, USA</p>
                                        </li>

                                        <li className="contact-usList">
                                            <span class="contact-Us-icon2 fa fa-phone-volume"></span>
                                            <h4 className="contact-icon-headings">24/7 Hotline:</h4>
                                            <p className="contact-icon-paras">Tollfree :1-800-944-1599</p>
                                        </li>

                                        <li className="contact-usList">
                                            <span class="contact-Us-icon3 fa fa-envelope"></span>
                                         <h4 className="contact-icon-headings">Email:</h4>
                                            <p className="contact-icon-paras"><a href="mailto:info@downeybailbonds.com">info@downeybailbonds.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ContactUsKK;