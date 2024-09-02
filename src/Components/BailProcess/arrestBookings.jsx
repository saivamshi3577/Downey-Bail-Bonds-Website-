import React, { useEffect, useState } from "react";
import './arrestBookings.css'
import startIcon from '../Photos/Icon.png'
import lowBalance from '../Photos/Rectangle 434.png'
import globeDown from '../Photos/image 27.png'
import globeUp from '../Photos/image 28.png';
import { useNavigate } from "react-router-dom";

function ArrestAndBookings(){
    const [animated, setAnimated] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        const sections = document.querySelectorAll('.Arrest-And-Bookings-top, .Arrest-Bookings-Content2');
        
        const handleScroll = () => {
            sections.forEach(sec => {
                if (!animated && isElementTopInViewport(sec)) {
                    sec.classList.add('show-animate');
                    setAnimated(true);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [animated]);

    // Function to check if the top of an element is in the viewport
    const isElementTopInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight;
    };
    

    return(
        <>
        <section className="Arrest-bookings-Top-contents">
        <div className="Arrest-And-Bookings-top">
            <div className="Arrest-Bookings-Head">
            <div className="Arrest-bookings-headings-h1h3">
            <h1 className="Arrest-bookings-h1" style={{'--i':'1'}}>Arrest and Booking</h1>
            <h3 className="Arrest-Bookings-h3" style={{'--i':'2'}}>Streamlined arrest and booking services ensuring efficient processing. Trust us for swift and professional handling of legal procedures.</h3>
            </div>
            <button onClick={()=> {navigate("/Contactus")}} className="Arrest-Bookings-Btn" style={{'--i':'2'}}>Get In Touch</button>
            </div>
        </div>
        <div className="Arrest-Bookings-Content2">
            <div className="AB-content-description">
            <div className="AB-content-description-paras">
            <div className="Arrest-booking-content2-head">
                <h1 className="AB-content2-h1" style={{'--i':'1'}}>The Booking and Processing</h1>
                <img className="Ab-content2-icon" src={startIcon} alt="" />
            </div>
            <div className="AB-paras-points" style={{'--i':'2'}} >
                <p className="AB-content-points">1.</p>
                <p className="Ab-content-points-desc">Downey Bail Bonds expedites the formalities involved in the booking and processing of arrested individuals in Downey, minimizing delays and ensuring efficient handling.</p>
            </div>
            <div className="AB-paras-points" style={{'--i':'2'}}>
                <p className="AB-content-points">2.</p>
                <p className="Ab-content-points-desc">Upon arrival at the law enforcement station or jail, individuals undergo meticulous searches for contraband items such as weapons and drugs, while their personal belongings are securely cataloged and stored.</p>
            </div>
            <div className="AB-paras-points" style={{'--i':'2'}}>
                <p className="AB-content-points">3.</p>
                <p className="Ab-content-points-desc">Essential identification procedures, including fingerprinting, are conducted to establish the individual's identity and create a comprehensive record within law enforcement databases.
</p>
            </div>
            <div className="AB-paras-points" style={{'--i':'2'}}>
                <p className="AB-content-points">4.</p>
                <p className="Ab-content-points-desc">Background checks are performed to assess any prior criminal history and identify outstanding warrants associated with the individual.
</p>
            </div>
            <div className="AB-paras-points" style={{'--i':'2'}}>
                <p className="AB-content-points">5.</p>
                <p className="Ab-content-points-desc">The booking process involves thorough cross-referencing of local and national criminal databases to verify the individual's legal status and identify any additional charges or obligations.</p>
            </div>
            <div className="AB-paras-points" style={{'--i':'2'}}>
                <p className="AB-content-points">6.</p>
                <p className="Ab-content-points-desc">Downey Bail Bonds collaborates with law enforcement authorities to ensure accurate documentation and timely entry of information into relevant systems, expediting the overall process.</p>
            </div>
            <div className="AB-paras-points" style={{'--i':'2'}}>
                <p className="AB-content-points">7.</p>
                <p className="Ab-content-points-desc">Throughout the booking and processing phase, Downey Bail Bonds provides invaluable support and guidance to individuals and their families, offering assistance in navigating legal complexities and exploring options for release on bail.</p>
            </div>
            </div>
            <div className="Ab-content2-right-img" style={{'--i':'2'}}>
                    <img src={lowBalance} alt="" />
            </div>
            </div>
        </div>
        
        </section>
        </>
    )
}
export default ArrestAndBookings;