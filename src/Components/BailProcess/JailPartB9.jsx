import React from "react";
import './JailPartB9c.css'
import plusicon90 from '../Photos/Icon.png'
import client9 from '../Photos/image 22.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Meeting(){
    return(
        <div className="meetout9t">
            <div className="meetingtxt9t">
                <div><img src={plusicon90} alt="" className="plusicon6t"/></div>
                <div className="clienttext9t">Meet<span className="space9t">_</span>The<span className="space9t">_</span>Partners</div>
                <div><img src={plusicon90} alt="" className="plusicon6t"/></div>
            </div>

            <div className="meetclient9t" data-aos = "fade-up">
                <img src={client9} alt="" className="client9t" />
            </div>
        </div>
    );
}

export default Meeting;