import React from "react";
import { useEffect } from "react";
import lawyerSpeak from "../Photos/accept-bail-img1.png";
import yellowframe from "../Photos/img-border.png";
import lawyerContract from "../Photos/accept-bail-img2.png";
import "./WhoMayAcceptBail.css";
import "./mediaQueries.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhoMayAcceptAnother() {
  useEffect(() => {
    AOS.init();
}, [])
AOS.init({
    duration: 400,
    once: false,
})

  return (
    <div>
      <div id='dummy'></div>
      <div className="totalParentDiv">
        <div className="lawyerContentDiv">
          <div className="contentDiv1">
            <div className="whoMayAcceptDiv">
              <h3 className="whoMayHeading" data-aos="slide-right" data-aos-duration="1000">Who May Accept Bail?</h3>
              <p className="whoMayPara" data-aos="slide-left" data-aos-duration="1000">
                In most jurisdictions, a judge, a bail clerk, a court clerk, a
                magistrate, or a designated jailer can accept Bail. Note that
                this usually does not include the arresting officer.
              </p>
            </div>
            <div className="whoSetsBailAmountsDiv">
              <h3 className="whoSetsBailHeading" data-aos="slide-right" data-aos-duration="1000">Who Sets Bail Amounts?</h3>
              <p className="whoSetsBailPara" data-aos="slide-left" data-aos-duration="1000">
                A judge or magistrate normally sets the Bail amount for a
                particular case according to a county Bail Schedule (a.k.a.
                Schedule of Bail for All Bailable Offenses) and the particulars
                of a case. The Bail Schedule itself is usually set annually by a
                majority vote of superior, municipal, and other judges.In
                setting or denying bail, the judge or magistrate's first concern
                is the protection of the public, followed by the seriousness of
                the offense and previous criminal record. Further, the Judge
                must be convinced that no part of the Bail was feloniously
                obtained.
              </p>
            </div>
            <div className="occasionsBailDiv">
              <h3 className="occasionsHeading" data-aos="slide-right" data-aos-duration="1000">
                Occasions When Bail May be Granted
              </h3>
              <p className="occasionsPara" data-aos="slide-left" data-aos-duration="1000">
                Bail is normally granted when:
                <ul>
                  <li>
                    A person is arrested for a bailable offense, prior to
                    appearance before the magistrate or other arraignment.{" "}
                  </li>
                  <li>
                    A person is arrested for a bailable offense, following
                    formal indictment or charges{" "}
                  </li>
                  <li>
                    A person convicted of an offense but awaiting sentencing
                    (when the sentence is likely to be modest)
                  </li>
                  <li>
                    A person convicted of an offense but making an application
                    for probation.
                  </li>
                  <li>
                    A person convicted of an offense making an appeal (usually
                    only after certification that the person is not a flight
                    risk, faces a modest sentence, is not a threat to the
                    community, and has a good court appearance record).
                  </li>
                </ul>
                Note also that most jurisdictions will not grant Bail for
                capital crimes or violent felonies without the defendant first
                attending a hearing for which the prosecuting attorney is
                granted time to prepare (often 2 court days).
              </p>
            </div>
          </div>
          <div className="lawyerDiv">
            <img src={lawyerSpeak} alt="" className="lawyerImage" data-aos="slide-left" data-aos-duration="1000"></img>
            <img src={yellowframe} alt="" className="yellowframeImage" data-aos="slide-up" data-aos-duration="1000"></img>
          </div>
        </div>
      </div>

      <div className="downParentDiv">
        <div className="lawyerContractAndContentDiv">
          <div className="lawyerWithContractDiv">
            <img
              src={lawyerContract}
              alt=""
              className="lawyerContractImg" data-aos="slide-right" data-aos-duration="1000"
            ></img>
            <img src={yellowframe} alt="" className="yellowFrameSecond" data-aos="slide-up" data-aos-duration="1000"></img>
          </div>
          <div className="contentWithoutLawyerDiv">
            <div className="firstHeadingParaDiv">
              <h3 className="firstHeading" data-aos="slide-right" data-aos-duration="1000">Example Bail Agreement</h3>
              <p className="firstPara" data-aos="slide-left" data-aos-duration="1000">
                An order having been made on the 1st day of July, 1997, by J.
                Bench, a judge of the Justice Court of Callahan County, that I.
                B. Busted, be held to answer upon a charge of Spousal Abuse,
                upon which he has been admitted to bail in the sum of twenty
                thousand dollars ($ 20,000); we Mother Busted and Uncle Busted,
                of 111 Blue Jay Way, Callahan City, hereby undertake that the
                above-named I.B. Busted will appear and answer any charge
                mentioned, in whatever court it may be prosecuted, and will at
                all times hold himself amenable to the orders and process of the
                court, and if convicted, will appear for pronouncement of
                judgment or grant of probation, or if he fails to perform either
                of these conditions, that we will pay to the people of the State
                of Downey the sum or twenty thousand dollars ($ 20,000). If the
                forfeiture of this bond be ordered by the court, judgment may be
                summarily made and entered forthwith against the said Mother
                Busted and Uncle Busted, and the defendant if he or she be a
                party to the bond, for the amount of their respective
                undertakings herein, as provide by Sections 1305 and 1306.
              </p>
            </div>
            <div className="secondHeadingParaDiv">
              <h3 className="secondHeading" data-aos="slide-right" data-aos-duration="1000">
                The Right of the Surety and Bail Agent to Pursue Principal Who
                Has Fled
              </h3>
              <p className="secondPara" data-aos="slide-left" data-aos-duration="1000">
                The Surety (and through them, the Bail Agent) in a Bail Bond
                have the right to turn their Principal (the defendant) over to
                the Court (via law enforcement) at any time, and to this end may
                pursue and seize him wherever they may find him, even though
                that be in another state.More plainly, the Bail Agent or Surety
                may cancel the Bail at any time and turn in the defendant if
                they deem necessary (e.g. defendant has left his job, cannot be
                located, or is reported to be planning flight).By common law,
                the Surety may arrest the defendant who has failed to appear at
                any time and in any place. This arrest is legally considered a
                continuation of the original custody and has been likened by the
                U.S. Supreme Court (Taylor v. Taintor 16 Wall, 366) to the
                rearrest of an escaped prisoner by the Sheriff. In the same
                case, the Court also related that Bail was intended to transfer
                custody from the Sheriff to the Surety, not to discharge the
                defendant from custody.More plainly, the Bail Agent may use
                forcible entry and is not required to have a warrant or court
                order. The Supreme Court has also ruled that “Bail have no power
                to arrest the principal in a foreign country” (Reese v. S. 9
                Wall 13).The Surety and its Bail Agent may empower any person of
                suitable age to arrest a defendant (usually by providing written
                authority on a certified copy of the certificate of deposit).In
                summary, Bail Agents have more powers that States do in pursuing
                and arresting principals (defendants). Bail Agents do not need
                warrants or extradition proceedings as States do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="secondTotalParentDiv"> 
       <div className="lawyerContractContentDiv"> 
       <div className="lawyerContractImageDiv">
            <img src={lawyerContract} alt="" className="lawyerContractImage"></img>
            <img src={yellowframe} alt="" className="yellowFrame2"></img>
        </div>           
          <div className="bottomContentDiv">
            <div className="exampleBailAgreementDiv">
              <h3 className="exampleBailAgreementHeading">Example Bail Agreement</h3>
              <p className="exampleBailAgreementPara">
                An order having been made on the 1st day of July, 1997, by J.
                Bench, a judge of the Justice Court of Callahan County, that I.
                B. Busted, be held to answer upon a charge of Spousal Abuse,
                upon which he has been admitted to bail in the sum of twenty
                thousand dollars ($ 20,000); we Mother Busted and Uncle Busted,
                of 111 Blue Jay Way, Callahan City, hereby undertake that the
                above-named I.B. Busted will appear and answer any charge
                mentioned, in whatever court it may be prosecuted, and will at
                all times hold himself amenable to the orders and process of the
                court, and if convicted, will appear for pronouncement of
                judgment or grant of probation, or if he fails to perform either
                of these conditions, that we will pay to the people of the State
                of Downey the sum or twenty thousand dollars ($ 20,000). If the
                forfeiture of this bond be ordered by the court, judgment may be
                summarily made and entered forthwith against the said Mother
                Busted and Uncle Busted, and the defendant if he or she be a
                party to the bond, for the amount of their respective
                undertakings herein, as provide by Sections 1305 and 1306.
              </p>
            </div>
            <div className="rightAndSurityDiv">
              <h3 className="rightAndSurityHeading">
                The Right of the Surety and Bail Agent to Pursue Principal Who
                Has Fled
              </h3>
              <p className="rightAndSurityPara">
                The Surety (and through them, the Bail Agent) in a Bail Bond
                have the right to turn their Principal (the defendant) over to
                the Court (via law enforcement) at any time, and to this end may
                pursue and seize him wherever they may find him, even though
                that be in another state.More plainly, the Bail Agent or Surety
                may cancel the Bail at any time and turn in the defendant if
                they deem necessary (e.g. defendant has left his job, cannot be
                located, or is reported to be planning flight).By common law,
                the Surety may arrest the defendant who has failed to appear at
                any time and in any place. This arrest is legally considered a
                continuation of the original custody and has been likened by the
                U.S. Supreme Court (Taylor v. Taintor 16 Wall, 366) to the
                rearrest of an escaped prisoner by the Sheriff. In the same
                case, the Court also related that Bail was intended to transfer
                custody from the Sheriff to the Surety, not to discharge the
                defendant from custody.More plainly, the Bail Agent may use
                forcible entry and is not required to have a warrant or court
                order. The Supreme Court has also ruled that “Bail have no power
                to arrest the principal in a foreign country” (Reese v. S. 9
                Wall 13).The Surety and its Bail Agent may empower any person of
                suitable age to arrest a defendant (usually by providing written
                authority on a certified copy of the certificate of deposit).In
                summary, Bail Agents have more powers that States do in pursuing
                and arresting principals (defendants). Bail Agents do not need
                warrants or extradition proceedings as States do.
              </p>
            </div>
          </div>
          
        </div>
      </div> */}

      {/* <div className="secondTotalParentDiv">
     <div className="lawyerContractContentDiv"> 
     <div className="lawyerContractImageDiv">
          <img src={lawyerContract} alt="" style={{height:"96%",objectFit:"contain",width:"100%"}} className="lawyerContractImage"></img>
          <img src={yellowframe} alt="" className="yellowframe2"></img> 
        </div>             
        <div className="bottomContentDiv">
          <div className="exampleBailAgreementDiv">
            <h3 className="exampleBailAgreementHeading">
              Example Bail Agreement
            </h3>
            <p className="exampleBailAgreementPara">
              An order having been made on the 1st day of July, 1997, by J.
              Bench, a judge of the Justice Court of Callahan County, that I.
              B. Busted, be held to answer upon a charge of Spousal Abuse,
              upon which he has been admitted to bail in the sum of twenty
              thousand dollars ($ 20,000); we Mother Busted and Uncle Busted,
              of 111 Blue Jay Way, Callahan City, hereby undertake that the
              above-named I.B. Busted will appear and answer any charge
              mentioned, in whatever court it may be prosecuted, and will at
              all times hold himself amenable to the orders and process of the
              court, and if convicted, will appear for pronouncement of
              judgment or grant of probation, or if he fails to perform either
              of these conditions, that we will pay to the people of the State
              of Downey the sum or twenty thousand dollars ($ 20,000). If the
              forfeiture of this bond be ordered by the court, judgment may be
              summarily made and entered forthwith against the said Mother
              Busted and Uncle Busted, and the defendant if he or she be a
              party to the bond, for the amount of their respective
              undertakings herein, as provide by Sections 1305 and 1306.
            </p>
          </div>
          <div className="rightAndSurityDiv">
            <h3 className="rightAndSurityHeading">
              The Right of the Surety and Bail Agent to Pursue Principal Who
              Has Fled
            </h3>
            <p className="rightAndSurityPara">
              The Surety (and through them, the Bail Agent) in a Bail Bond
              have the right to turn their Principal (the defendant) over to
              the Court (via law enforcement) at any time, and to this end may
              pursue and seize him wherever they may find him, even though
              that be in another state.More plainly, the Bail Agent or Surety
              may cancel the Bail at any time and turn in the defendant if
              they deem necessary (e.g. defendant has left his job, cannot be
              located, or is reported to be planning flight).By common law,
              the Surety may arrest the defendant who has failed to appear at
              any time and in any place. This arrest is legally considered a
              continuation of the original custody and has been likened by the
              U.S. Supreme Court (Taylor v. Taintor 16 Wall, 366) to the
              rearrest of an escaped prisoner by the Sheriff. In the same
              case, the Court also related that Bail was intended to transfer
              custody from the Sheriff to the Surety, not to discharge the
              defendant from custody.More plainly, the Bail Agent may use
              forcible entry and is not required to have a warrant or court
              order. The Supreme Court has also ruled that “Bail have no power
              to arrest the principal in a foreign country” (Reese v. S. 9
              Wall 13).The Surety and its Bail Agent may empower any person
              of suitable age to arrest a defendant (usually by providing
              written authority on a certified copy of the certificate of
              deposit).In summary, Bail Agents have more powers that States
              do in pursuing and arresting principals (defendants). Bail
              Agents do not need warrants or extradition proceedings as States
              do.
            </p>
          </div>
        </div>
        
      </div>
    </div>      
           */}

      {/* <div className="secondTotalParentDiv">
      <div className="lawyerContractContentDiv">
        <div className="lawyerContractImageDiv">
        <img style={{height:"98%",objectFit:"contain"}}
            src={lawyerContract}
            alt=""
            id="lawyerContractImage"
          ></img>
          <img src={yellowframe} alt="" className="yellowframe2"></img> 
        </div> 

        <div className="bottomContentDiv">
          <div className="exampleBailAgreementDiv">
            <h3 className="exampleBailAgreementHeading">
              Example Bail Agreement
            </h3>
            <p className="exampleBailAgreementPara">
              An order having been made on the 1st day of July, 1997, by J.
              Bench, a judge of the Justice Court of Callahan County, that I.
              B. Busted, be held to answer upon a charge of Spousal Abuse,
              upon which he has been admitted to bail in the sum of twenty
              thousand dollars ($ 20,000); we Mother Busted and Uncle Busted,
              of 111 Blue Jay Way, Callahan City, hereby undertake that the
              above-named I.B. Busted will appear and answer any charge
              mentioned, in whatever court it may be prosecuted, and will at
              all times hold himself amenable to the orders and process of the
              court, and if convicted, will appear for pronouncement of
              judgment or grant of probation, or if he fails to perform either
              of these conditions, that we will pay to the people of the State
              of Downey the sum or twenty thousand dollars ($ 20,000). If the
              forfeiture of this bond be ordered by the court, judgment may be
              summarily made and entered forthwith against the said Mother
              Busted and Uncle Busted, and the defendant if he or she be a
              party to the bond, for the amount of their respective
              undertakings herein, as provide by Sections 1305 and 1306.
            </p>
          </div>
          <div className="rightAndSurityDiv">
            <h3 className="rightAndSurityHeading">
              The Right of the Surety and Bail Agent to Pursue Principal Who
              Has Fled
            </h3>
            <p className="rightAndSurityPara">
              The Surety (and through them, the Bail Agent) in a Bail Bond
              have the right to turn their Principal (the defendant) over to
              the Court (via law enforcement) at any time, and to this end may
              pursue and seize him wherever they may find him, even though
              that be in another state.More plainly, the Bail Agent or Surety
              may cancel the Bail at any time and turn in the defendant if
              they deem necessary (e.g. defendant has left his job, cannot be
              located, or is reported to be planning flight).By common law,
              the Surety may arrest the defendant who has failed to appear at
              any time and in any place. This arrest is legally considered a
              continuation of the original custody and has been likened by the
              U.S. Supreme Court (Taylor v. Taintor 16 Wall, 366) to the
              rearrest of an escaped prisoner by the Sheriff. In the same
              case, the Court also related that Bail was intended to transfer
              custody from the Sheriff to the Surety, not to discharge the
              defendant from custody.More plainly, the Bail Agent may use
              forcible entry and is not required to have a warrant or court
              order. The Supreme Court has also ruled that “Bail have no power
              to arrest the principal in a foreign country” (Reese v. S. 9
              Wall 13).The Surety and its Bail Agent may empower any person
              of suitable age to arrest a defendant (usually by providing
              written authority on a certified copy of the certificate of
              deposit).In summary, Bail Agents have more powers that States
              do in pursuing and arresting principals (defendants). Bail
              Agents do not need warrants or extradition proceedings as States
              do.
            </p>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default WhoMayAcceptAnother;
