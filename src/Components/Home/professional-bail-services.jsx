import React,{useState} from "react";
import cirlce1 from "../Photos/circle-1.png";
import inspiration from '../Photos/inspiration (1).png';
import meeting from '../Photos/coworking.png';
import idea from '../Photos/idea.png';
import cirtificate from '../Photos/diploma.png';
import './professional-bail-services.css';

function ProfessionalBailServices(){
    return(
        <>
        <div className="profcontainer">
        <div className="Bail-services-headings">
            <div className="bail-headings">
            <h3 className="bailServices">PROFESSIONAL BAIL SERVICES</h3>
            <h1 className="Best-servcies">We Serve The Best Service</h1>
            <p className="Bail-p-31">We will meet you at Convenient Location to Arrange Bail anywhere in California</p>
            <span className="divider"></span>
            </div>
            <div className="Bail-services-animation">
            <img src={cirlce1} alt="" style={{width:'300px'}} />
        </div>
        </div>

        <div className="bail-servcies-cards">
            <div className="servcies-cards">
                <div className="inner-services-cards">
                <div className="icons">
                    <img style={{width:"60px"}} src={cirtificate} alt="" />
                </div>
                <div className="cards-desc">
                    <h2 className="desc-h2-3131">24 Hours <br /> Confidential Bail Bonds</h2>
                    <p className="desc-p-3131">We are here for you. <br /> For confidential help,<br /> Please Call 1-800-944-1599.</p>
                    <div className="desc-a-3131">
                        <a href="/ProfessionalBail">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="vertical-line-3131"></div>
            <div className="servcies-cards">
                <div className="inner-services-cards">
                <div className="icons">
                    <img style={{width:"60px"}} src={idea} alt="" />
                </div>
                <div className="cards-desc">
                    <h2 className="desc-h2-3131">Approval by <br /> phone in minutes</h2>
                    <p className="desc-p-3131">We are here for you. <br /> For confidential help,<br /> Please Call 1-800-944-1599.</p>
                    <div className="desc-a-3131">
                        <a href="/ProfessionalBail">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="vertical-line-3131-2"></div>
            <div className="servcies-cards">
                <div className="inner-services-cards">
                <div className="icons">
                    <img style={{width:"60px"}} src={meeting} alt="" />
                </div>
                <div className="cards-desc">
                    <h2 className="desc-h2-3131">Bail by Fax or <br /> Email Option</h2>
                    <p className="desc-p-3131">We are here for you. <br /> For confidential help,<br /> Please Call 1-800-944-1599.</p>
                    <div className="desc-a-3131">
                        <a href="/Byfax">Read more</a>
                    </div>
                </div>
                </div>
            </div>
            <div className="vertical-line-3131"></div>
            {/* <div className="servcies-cards">
                <div className="inner-services-cards">
                <div className="icons">
                    <img style={{width:"60px"}} src={inspiration} alt="" />
                </div>
                <div className="cards-desc">
                    <h2 className="desc-h2-3131">Approval by <br /> phone in minutes</h2>
                    <p className="desc-p-3131">We are here for you. <br /> For confidential help,<br /> Please Call 1-800-944-1599.</p>
                    <div className="desc-a-3131">
                        <a href="">Read more</a>
                    </div>
                </div>
                </div>
            </div> */}
        </div>
        </div>      
        </>
    )
}
export default ProfessionalBailServices


