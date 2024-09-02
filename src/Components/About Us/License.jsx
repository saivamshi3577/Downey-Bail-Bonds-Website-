import React, { useEffect, useState, useRef } from "react";
import "./License.css";
// import {useState} from "react"
import Licensepageimg from "../Photos/license-page-img.jpg"
import licenseimg1 from "../Photos/License-icon1.png";
import licenseimg2 from "../Photos/License-icon2.png";
import licenseimg3 from "../Photos/License-icon3.png";
import licenseimg4 from "../Photos/License-icon4.png";
import licenseimg5 from "../Photos/License-icon5.png";
import licenseimg6 from "../Photos/License-icon6.png";
import AOS from "aos";
import "aos/dist/aos.css";
function InsuranceLicense() {
    const firstNameref = useRef();
    const lnameref = useRef();
    const dateref = useRef();
    const cityref = useRef();
    const yfirstref = useRef();
    const ylastref = useRef();
    const mailthor = useRef();
    const phonethor = useRef();

    //span ref

    const firstnameSpanRef = useRef();
    const [formData, setFormData] = useState(
        {
            name: '',
            lname: '',
            date: '',
            city: '',
            yfirst: '',
            ylast: '',
            mail: '',
            phone: ''

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


    useEffect(() => {
        AOS.init({ duration: 1500 });
    });
    return (
        <>
            <div className="license-main-div">

                <section class="Insurance-license-main-heading">
                    <div class="anim-icons-kkp full-width-kkp">
                        <span class="icon-bull-eye-kk"></span>
                        <span class="icon-dotted-circle-kk"></span>
                    </div>
                    <div class="Insurance-license-content-div">
                        <div class="license-content">
                            <h1>Insurance License #1843073</h1>
                            <h1 style={{ marginTop: "40px" }}>Downey Bail Bonds</h1>
                            <ul class="Insurance-license-page-breadcrumb">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>LICENSE</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div>
                    <div className="Fully-licensed-part-div">
                        <h1 className="Fully-licensed-part-heading">Insurance License # 1843073</h1>
                        <p className="Fully-licensed-part-para">
                            Downey Bail Bonds are fully licensed with the department of insurance and every agent who we employ we
                            take great pride in this and work yearly for better service through more and more continue education.
                        </p>
                        <img className="Fully-licensed-page-img" src={Licensepageimg} alt="" />
                    </div>
                </div>
                <div className="Our-locations-div">
                    <h1 className="our-locatons-heading">OUR LOCATIONS</h1>
                    <p className="our-locations-para">Helping People Regain Their Freedom Throughout Southern California and nationwide.</p>
                </div>

                <div className="contact-our-california-div">

                    <div className="contact-california-div">
                        <h6 className="contact-california-heading">Contact Our California</h6>
                        <p className="contact-california-para1">Downey Bail Bond Company Today</p>
                        <p className="contact-california-para2">
                            If you or your loved one is arrested for a crime in California and cannot afford bail, call us immediately to help you.
                            We will devise a payment option that fits your needs and situation. Do not let your loved ones spend another night in jail.
                        </p>
                        <p className="contact-california-para3">
                            Call us at +1 234567890 now and one of our highly qualified bail agents will adviseyou on your options.
                        </p>
                    </div>

                    {/* register form */}

                    <div className="registerForm-Button">
                        <div className="license-register-form-div">
                            <form >
                                <div className="license-register-form-content">
                                    <div className="input-box-kk">
                                        <label for="firstname">Inmate First Name</label>
                                        <input type="text" placeholder="Enter your Inmate First Name" maxLength={30} value={formData.name} onChange={handleChange} name="name" ref={firstNameref} required />
                                        {/* <span className="spantext" style={{width:'30px',height:'13px'}} ref={firstnameSpanRef}></span> */}
                                    </div>
                                    <div className="input-box-kk">
                                        <label for="lastname">Inmate Last Name</label>
                                        <input type="text" placeholder="Enter your Inmate Last Name" maxLength={30} value={formData.lname} onChange={handleChange} ref={lnameref} name="lname" required />
                                    </div>
                                    <div className="input-box-kk">
                                        <label for="dateofbirth">Date of Birth</label>
                                        <input type="date" placeholder="Enter your Date of Birth" value={formData.date} onChange={handleChange} ref={dateref} name="date" required />
                                    </div>
                                    <div className="input-box-kk">
                                        <label for="city">City of Inmate Arrest</label>
                                        <input type="text" placeholder="Enter your City of Inmate Arrest" maxLength={30} value={formData.city} onChange={handleChange} ref={cityref} name="city" required />
                                    </div>
                                    <div className="input-box-kk">
                                        <label for="name">Your First Name</label>
                                        <input type="text" placeholder="Enter your First Name" maxLength={30} value={formData.yfirst} onChange={handleChange} ref={yfirstref} name="yfirst" required />
                                    </div>
                                    <div className="input-box-kk">
                                        <label for="name">Your Last Name</label>
                                        <input type="text" placeholder="Enter your last Name" maxLength={30} value={formData.ylast} onChange={handleChange} ref={ylastref} name="ylast" required />
                                    </div>
                                    <div className="input-box-kk">
                                        <label for="name">Email</label>
                                        <input type="email" placeholder="Enter your Email" value={formData.mail} onChange={handleChange} ref={mailthor} name="mail" required />
                                    </div>
                                    <div className="input-box-kk">
                                        <label for="name">Your Phone Number</label>
                                        <input type="number" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} ref={phonethor} name="phone" required />
                                    </div>
                                    <div className="drop-down-div">
                                        <p className="drop-down-para">Inmate Relationship to Inmate</p>
                                        <select className="drop-down-part">Immediate Family
                                            <option className="drop-down-option">Immediate Family</option>
                                            <option className="drop-down-option">Immediate Family</option>
                                        </select>
                                    </div>
                                    <div className="check-box-div">
                                        <label>
                                            <input type="checkbox" />
                                            I am atleast 18 years old of age; I am hereby requesting bail services from Downey
                                            Bail Bonds and also authorize any bail agent of DowneyBail Bonds to conduct a jail visit and/or
                                            contact the defendant.
                                        </label>
                                    </div>
                                </div>
                                <button  onClick={(e) => {
                                    if (firstNameref.current.value === "" || lnameref.current.value === "" || dateref.current.value === "" || cityref.current.value === "" || yfirstref.current.value === "" || ylastref.current.value === "" || mailthor.current.value === "" || phonethor.current.value.length === 0) {
                                    }
                                    else  {

                                       console.log(formData);  
                                        e.preventDefault();
                                    //    handleSubmit();
                                    }

                                }} className="register-form-button">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>

                {/* last part */}

                <div className='content-five-description-kk'>
                    <div className='content-five-left-kk'>
                        <h3 className='content-five-h3-kk'>Clients</h3>
                        <h2 className='content-five-h2-kk'>WE ARE A PROUD MEMBER OF FOLLOWING REPUTABLE ORGANIZATIONS</h2>
                        <span className='content-five-divider-kk'></span>
                        <p className='content-five-p-kk'>
                            A leader among Downey bail bonds companies .
                            Downey Bail Bonds has been a valuable business leader and trusted member of the community for decades.
                            Downey Bail Bonds excellence has earned it membership in the following organizations:
                        </p>
                        <a href="/Contactus"><button className="clients-button">Contact Us</button></a>
                    </div>
                    <div className='content-five-right-kk'>

                        <div className='content-five-images-kk' data-aos="fade-left" data-aos-delay="100">
                            <img style={{ width: '250px' }} src={licenseimg1} alt="" />
                        </div>
                        <div className='content-five-images-kk' data-aos="fade-left" data-aos-delay="200">
                            <img style={{ width: '250px' }} src={licenseimg2} alt="" />
                        </div>
                        <div className='content-five-images-kk' data-aos="fade-left" data-aos-delay="300">
                            <img style={{ width: '250px' }} src={licenseimg3} alt="" />
                        </div>
                        <div className='content-five-images-kk' data-aos="fade-left" data-aos-delay="100">
                            <img style={{ width: '250px' }} src={licenseimg4} alt="" />
                        </div>
                        <div className='content-five-images-kk' data-aos="fade-left" data-aos-delay="200">
                            <img  src={licenseimg5} alt="" />
                        </div>
                        <div className='content-five-images-kk' data-aos="fade-left" data-aos-delay="300">
                            <img style={{ width: '250px' }} src={licenseimg6} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default InsuranceLicense;