import {React, useRef} from "react";
import "./InfoPartA9.css";
import CountUp from "react-countup";
import infoimg91 from "../Photos/fun-fact-one.png";
import infoimg92 from "../Photos/fun-fact-two.png";
import infoimg93 from "../Photos/fun-fact-three.png";
import infoimg94 from "../Photos/fun-fact-four.png";

function InfoPartA9() {
 
 
  return (
    <>
    <div className="height9g">
    <div className="total9g">
      <div className="blue9g"></div>
      <div className="imgboxoutg">
        <div className="start9g"></div>
        <div className="imgboxin1g imgboxin91g">
          <div className="imgbox9g imgbox91g"  >
            <div className="imgboxdiv91g" style={{ "--i": 1 }} >
              <div className="img-num9g">
                <div className="img-num91g">
                  <img src={infoimg91} alt="" className="img9g" />
                </div>
                <div className="img-num92g">
                  <h1 className="infoCount9g">
                    <CountUp start={0} end={20} duration={8}></CountUp>
                  </h1>
                </div>
              </div>
              <div className="imgboxdiv92g">+ Years of Experienced</div>
            </div>
          </div>
          <div className="imgbox9g imgbox91g " >
            <div className="imgboxdiv91g" style={{ "--i": 2 }}>
              <div className="img-num9g">
                <div className="img-num91g">
                  <img src={infoimg92} alt="" className="img9g" />
                </div>
                <div className="img-num92g">
                  <h1 className="infoCount9g">
                    <CountUp start={0} end={980} duration={10}></CountUp>
                  </h1>
                </div>
              </div>
              <div className="imgboxdiv92g">+Total Completed Case</div>
            </div>
          </div>

        </div>
       
        <div className="imgboxin1g imgboxin92g">
        <div className="imgbox9g imgbox91g" >
            <div className="imgboxdiv91g" style={{ "--i": 3 }}>
              <div className="img-num9g">
                <div className="img-num91g">
                  <img src={infoimg93} alt="" className="img9g" />
                </div>
                <div className="img-num92g">
                  <h1 className="infoCount9g">
                    <CountUp start={0} end={980} duration={10}></CountUp>
                  </h1>
                </div>
              </div>
              <div className="imgboxdiv92g">+Happy Customers</div>
            </div>
          </div>
          
          
           <div className="imgbox9g imgbox91g" >
            <div className="imgboxdiv91g" style={{ "--i": 4 }}>
              <div className="img-num9g">
                <div className="img-num91g">
                  <img src={infoimg94} alt="" className="img9g" />
                </div>
                <div className="img-num92g">
                  <h1 className="infoCount9g">
                    <CountUp start={0} end={99} duration={10}></CountUp>
                    
                  </h1>
                </div>
              </div>
              <div className="imgboxdiv92g">%Case Success Rate</div>
            </div>
          </div>
          
        </div>
        
        <div className="start9g"></div>
      </div>
      
    </div>
    </div>
    </>
  );
}

export default InfoPartA9;
