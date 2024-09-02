import React from "react";
import './InfoPartB9.css'
import certificate9 from "../Photos/certificate.png"
import discussion9 from "../Photos/discussion.png"
import idea9 from "../Photos/creativity.png"
import star9 from "../Photos/object-5.png"
import ring9 from '../Photos/object-4.png'
import divider from "../Photos/divider.png"
import paper9 from "../Photos/paper.jpg"
import papercut9 from "../Photos/pattern-3.png"
import triangle9 from "../Photos/object-2.png"
import { useNavigate } from "react-router-dom";
function InfoPartB9(){
   const navigate = useNavigate()
    return(
        <div className="main9s">
            <div className="part9As">
                <div className="text91s">Our Features</div>
                <div className="text92s">Features For Our Client <br></br>For Your Event</div>
                <div className="text93s"><img src={divider} alt="" /></div>
                <div className="text94s">Having a competent and experienced defense attorney who can present a compelling argument for bail is crucial. They can highlight relevant legal precedents, present mitigating factors, and advocate for your release.<br>
                </br><br />Demonstrating strong ties to the community, such as stable employment, family relationships, and community involvement, can indicate that you're less likely to flee if released on bail.</div>
                <div className="text95s"><button onClick={()=> navigate("/Contactus")} className="text96s">Contact Us</button><div className="star9divs"><img src={star9} alt="" className="star9s" /></div></div>
                <div className="text97s"><img src={ring9} alt="" className="ring9s" /></div>
                <br /><br />
            </div>

            <div className="part9Bs">
                <div className="comp9s comp91sts" style={{ "--i": 1 }}>
                    <div className="item9s item91s"><div className="circle9s circle91stcs"><img src={certificate9} alt="" className="img9s img91sts"/></div></div>
                    <div className="item9s item92s item92texts"><span className="texters">Strong Community Ties and Support </span><div className="abc1s"><img src={certificate9} alt="" className="qwe1s" /></div></div>
                    <div className="item9s item93s"><img src={certificate9} alt="" className="img92nds img92ndends" /></div>
                    
                </div>

                <div className="comp9s comp92nds" style={{ "--i": 1 }}>
                    <div className="item9s item91s"><div className="circle9s circle92nds"><img src={idea9} alt="" className="img9s img9ps"/></div></div>
                    <div className="item9s item92s item922nds"><span className="texters">Stable Residence and Employment</span><div className="abc11s"><img src={idea9} alt="" className="qwe11s" /></div></div>
                    <div className="item9s item93s"><img src={idea9} alt="" className="img92nds img92nd2nds" /></div>
                </div>
                <div className="trianglediv9s"><img src={triangle9} alt="" className="triangle9s" /></div>
                
                <div className="comp9s comp91sts" style={{ "--i": 1 }}>
                    <div className="item9s item91s"><div className="circle9s circle91stcs"><img src={discussion9} alt="" className="img9s img91sts"/></div></div>
                    <div className="item9s item92s item92texts"><span className="texters">Mitigation of Risk to Public Safety</span><div className="abc1s"><img src={discussion9} alt="" className="qwe1s" /></div></div>
                    <div className="item9s item93s"><img src={discussion9} alt="" className="img92nds img92ndends" /></div>
                </div>

                <div className="comp9s comp92nds" style={{ "--i": 1 }}>
                    <div className="item9s item91s"><div className="circle9s circle92nds"><img src={idea9} alt="" className="img9s img9ps"/></div></div>
                    <div className="item9s item92s item922nds"><span className="texters">Mitigate Concerns about Flight Risk</span><div className="abc11s"><img src={idea9} alt="" className="qwe11s" /></div></div>
                    <div className="item9s item93s"><img src={idea9} alt="" className="img92nds img92nd2nds" id="lastimg9s" /></div>
                </div>
            </div>
            <br /><br />
        </div>
    )
}
export default InfoPartB9;