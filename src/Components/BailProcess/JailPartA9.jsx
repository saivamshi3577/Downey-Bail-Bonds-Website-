import {React, useEffect} from "react";
import './JailPartA9c.css'
import jailbg from '../Photos/Jail.png'
import plusicon from '../Photos/Icon.png'
import globedown from '../Photos/image 28.png'
import globeup from '../Photos/image 29.png'
import star from '../Photos/star.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Bail(){
    useEffect(()=>{
        AOS.init({duration:1500, once:'true'});
    },[])
    return(
        <div className="totaljail9a">
        <div className="outer9a">
            <div className="serial1a serial1sta" data-aos = "fade-down">
                <div className="goldenrod9a">Jail Communication and Setting Bail</div>
                <div><img src={plusicon} alt=""className="icon9a" /></div>
            </div>

            <div className="serial1a serial12a "  data-aos = "fade-up">
                <div className="leftmaina "  >
                    <div className="leftmainsuba "  data-aos="fade-right">
                    <div className="lefttxt1a">Phone Privileges</div>
                    <div className="lefttxt1a">Diligent Processing</div>
                    <div className="lefttxt1a">Bail Determination</div>
                    <div className="lefttxt1a">Bail Bonds</div>
                    <div className="lefttxt1a">Arraignment</div>
                    <div className="lefttxt1a">Guidance and Support</div>
                    <div className="lefttxt1a">Maintaining Normalcy</div>
                    <div className="lefttxt1a">Flexibility in Payments</div>
                    </div>
                </div>

                <div className="rightmaina" >
                    <div className="fullwidtha" >
                    <div className="lefthalf9a" >

                    <div className="boxforwarda"  data-aos = "fade-left">
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a"/></div>
                        <div className="righttext9a">Inmates are typically allowed limited phone privileges, which enable them to communicate with contacts outside the jail. These calls serve as a vital means for inmates to convey important information about their situation, such as their location, charges, and potential need for bail assistance.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a" /></div>
                        <div className="righttext9a" >The processing of individuals within the jail is carried out diligently by dedicated jail staff. However, the duration of this process can vary significantly depending on factors such as the size of the jail facility and external circumstances like weekends, shift changes, or high volumes of arrests.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a" /></div>
                        <div className="righttext9a">During the booking process, bail is determined based on various factors, including the severity of the alleged offense, the individual's criminal history, and flight risk. Downey Bail Bonds assists individuals in understanding their bail options and facilitates the process of securing release through bail bonds.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a"/></div>
                        <div className="righttext9a">Bail bonds provide an avenue for individuals to secure release from jail pending trial by paying a percentage of the total bail amount to a bail bondsman. This enables individuals to avoid prolonged detention while awaiting trial.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a" /></div>
                        <div className="righttext9a">In cases where bail cannot be immediately arranged, individuals may be held in custody until their arraignment, during which a judge will review the case and determine whether bail is appropriate.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a"/></div>
                        <div className="righttext9a">Downey Bail Bonds offers professional guidance and support throughout the bail process, ensuring that individuals and their families are well-informed about their rights and options for securing release.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a" /></div>
                        <div className="righttext9a">The availability of bail options provides individuals with an opportunity to address their legal matters while maintaining their employment, family responsibilities, and other personal commitments outside of jail.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a" /></div>
                        <div className="righttext9a">Downey Bail Bonds works closely with clients to expedite the bail process, minimizing the time spent in custody and enabling individuals to return to their normal lives as soon as possible.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a"/></div>
                        <div className="righttext9a">By offering flexible payment plans and personalized assistance, Downey Bail Bonds strives to alleviate the financial burden associated with bail, making it more accessible to individuals from all walks of life.</div>
                        </div>
                    </div>
                    <div className="rightcontenta">
                        <div className="rightcontenttext0a">
                        <div><img src={star} alt="" className="starmargin9a"/></div>
                        <div className="righttext9a">Throughout the entire bail process, Downey Bail Bonds remains committed to upholding the rights and dignity of individuals, ensuring fair treatment and due process within the criminal justice system. </div>
                        </div>
                    </div>
                    
                    </div>
                    
                    
                   
                   
                   
                    
                    </div>
                    <div className="righthalf9a">
                        <div className="topicona">f</div>
                        <div className="middlespacea"></div>
                        <div className="bottomicona"></div>
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Bail;