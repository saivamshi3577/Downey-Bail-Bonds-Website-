import React from "react";
import { useEffect } from "react";
import "./BailAgentEthics.css";
import IconKK from "../Photos/IocnKK.png"
import logosKK from "../Photos/4logos.png"
import Agentimg from "../Photos/Bail-agent-img.png"
import borderimg from "../Photos/borderImage.png"
import signingimg from "../Photos/Cosigning-img.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


function AgentEthics() {
    useEffect(() => {
        AOS.init();
    }, [])
    AOS.init({
        duration: 400,
        once: false,
    })

    return (
        <>
            <div className="Agent-main-main-div">

                {/* Fisrt part */}

                <div className="Bail-Agent-main-div">
                    <div className="Bail-agent-div">
                        <div className="top-part-in-subpart-skk">
                            <h1 className="Bail-Agent-heading" data-aos="slide-left" data-aos-duration="1000">Bail Agent Ethics</h1>
                            <p className="Bail-Agent-paragraph" data-aos="slide-right" data-aos-duration="1000">
                                The bail licensee should endeavor constantly to be informed regarding current laws, proposed legislation, governmental orders or regulations, and other significant information and public policies which may affect the interests of the client.
                                <br />
                                The bail licensee should make a constant practice of full and complete disclosure to all parties, be they principal or indemnitor, of any and all possible liabilities, penalties or detriments which may arise from their involvement in that particular undertaking which secures the release from custody of a person who is charged with a criminal offense.
                                <br />
                                The bail licensee should not, prior to forfeiture or breach, arrest or surrender any principal and thereby terminate his or her release from governmental custody unless the licensee can materially show good cause for such action.
                                <br />
                                The bail licensee, upon receipt of notice of forfeiture or breach where notice is required, or upon personal knowledge of forfeiture or breach, should promptly and formally notify any and all indemnitors and real parties of interest of the forfeiture or breach by the principal, and the bail licensee should at that time concisely state the liability thereby incurred or pending.
                                <br />
                                The bail licensee should supply all indemnitors to an undertaking with a true copy of any document representing a binding legal contract to which she or he is to be or is being committed.
                                <br />
                                When an examination of the material factors of a potential undertaking reasonably convinces the bail licensee that she or he will be unable to undertake that particular bail relationship, the bail licensee should immediately inform all involved parties that she or he will not be able to secure the release of the defendant so that the defendant or his or her affiliates may promptly seek his or her release by another means.
                                <br />
                                Every bail licensee should comply in full with the laws and regulations governing the transaction of bail. Such compliance must necessarily include those matters dealing with the trust and fiduciary relationship as it relates to moneys and properties which may secure and undertaking. The highest moral and ethical practice should be maintained when entering into a trust or fiduciary relationship.
                                <br />
                                The bail licensee should not, except as provided by law, engage in activities that constitute the practice of law, and should refrain from making comments and representations which may lead the public to believe that the bail licensee is practicing law. [Practicing attorneys are generally not allowed to hold Bail Agent licenses]
                                Unless compelled to do so by law or by court order, the bail licensee should not divulge or disclose to any person or agency personal information regarding the principal or indemnitor of an undertaking which has not been forfeited or breached. The inherent right to privacy of the individual, and the position of trust of the bail licensee, demand compliance with this concept.
                                <br />
                                The bail licensee should make great efforts to verify and confirm any information which he or she may give to a court, law enforcement agency, or any other public agency.<br />
                                The bail licensee shall not conspire with other bail licensees to regulate rates or restrict trade with the bail profession. The bail licensee should avoid controversy and conflicts with fellow bail licensees, and should not voluntarily disparage the business practice of a competitor, nor volunteer an opinion of a competitor’s transaction. However, the bail licensee should also inform fellow bail licensees
                                of established hazards involving a prospective client if such hazards truly exist.
                            </p>
                        </div>

                        <div className="Bail-Agent-image-div">
                            <div class="Bail-image-box-div" id="image-box">
                                <a href="speaker-detail.html">
                                    <img src={Agentimg} alt="" className="images-kkp" data-aos="slide-left" data-aos-duration="1000" /></a>
                                <p className="line-through-kk" style={{ top: '9%' }} data-aos="slide-up" data-aos-duration="1000"></p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* second part */}

                <div className="Co-Signing-bail-div " >
                    <div className="Co-Signing-bail">
                        <div className="top-part-in-subpart-skk">
                            <div>
                                <h1 className="Co-Signing-bail-heading" data-aos="slide-left" data-aos-duration="1000">Co-Signing on a Bail Bond? Know the Facts Before you Sign Documents</h1>
                                <p className="Co-Signing-bail-paragraph" data-aos="slide-right" data-aos-duration="1000">
                                    Co-signing a bail bond means that a person signs a promissory note or an indemnity agreement
                                    financially obligating themselves to pay the full amount of the bond if the accused person does not appear
                                    in court. Once the bail bond has been co-signed, the accused will be released from jail pending resolution of
                                    the charges against him or her by a court of law.
                                    <br />
                                    Co-signing a bail bond means that a person signs a promissory
                                    note or an indemnity agreement financially obligating themselves to pay the full amount of the bond if the
                                    accused person does not appear in court. Once the bail bond has been co-signed, the accused will be released
                                    from jail pending resolution of the charges against him or her by a court of law.
                                    <br />
                                    Many times, co-signing involves pledging tangible property, such as cash, cars, homes and other items. This ensures that the bail bondsman will
                                    get the money back that he or she has pledged with a surety bond to the court. If the accused flees and cannot be
                                    found and taken to court within a certain amount of time, the co-signer must either pay the entire bond or
                                    surrender the property that was pledged to the bail bondcompany for collateral.
                                    <br />
                                    A co-signer does have certain rights. If the he or she believes that the accused will not appear in court, he or she can contact the bondsman
                                    and request that the bond be withdrawn. The bondsman will then have the accused picked up and returned to jail.
                                    <br />
                                    According to a national bail website, the bail bond company will receive a percentage of the bond as his or her
                                    fee for guaranteeing the bond and securing the release of the accused. The fee is usually 10 percent of the total
                                    amount.
                                    <br />
                                    That portion of the bond must generally be paid with cash and will not be returned to the co-signer.
                                </p>
                                <h1 className="Co-Signing-bail-heading" data-aos="slide-left" data-aos-duration="1000">Below are some important things to know about co-signing a bail bond</h1>
                                <ul className="Co-Signing-bail-2nd-para" data-aos="slide-right" data-aos-duration="1000" >
                                    <li>The accused will be released from jail.</li>
                                    <li>The co-signer has the authority and duty to make sure the accused appears at all court hearings and meets any other bond requirements.</li>
                                    <li>The co-signer can request stipulations before co-signing, such as a requirement that the accused attend a drug treatment program or undergo a mental health evaluation.</li>
                                    <li>If the co-signer becomes uncomfortable with the accused actions, such as other illegal acts, he or she can ask the bail bond company to cancel the bond and return the accused to jail.</li>
                                    <li>If the accused flees or refuses to go to court, the co-signer can contact the bail bond company and let them know where the accused is so that he or she can be picked up and returned to jail.</li>
                                </ul>
                            </div>
                            <p className="Co-Signing-bail-para" data-aos="slide-right" data-aos-duration="1000">
                                Not everyone can co-sign bail bonds. The person must be a citizen of the United States and have lived in the same area for a
                                predetermined period, have stable employment and have sufficient credit. Laws may vary by state.
                            </p>
                        </div>

                        <div className="Co-Signing-image-div">
                            <div class="image-box-tm-bsk-2  " id="image-box">
                                <div class="image-tm-bsk-2  xtra-image-tm-bsk">
                                    <a href="speaker-detail.html">
                                        <img src={signingimg} alt="" className="images-tm-bsk-2 " data-aos="slide-left" data-aos-duration="1000" />
                                    </a>
                                    <p className="line-through-2-kk" style={{ top: '11%' }} data-aos="slide-up" data-aos-duration="1000"></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Line div */}

                <div className="bail-agent-hr-line-div">
                    <hr className="bail-agent-hr-line" style={{ width: "90%", marginLeft: "5%", marginBottom: "4%" }} data-aos="slide-up" />
                </div>

                {/* Third part */}

                <div className="Lower-images-div">
                    <div className='images-div'>
                        <img src={IconKK} className='ImageKK'></img>
                        <h3 className='patnersKK-heading'>Meet The Partners</h3>
                        <img src={IconKK} className='ImageKK'></img>
                    </div>
                    <div className='logos-div' data-aos="slide-up" data-aos-duration="1000">
                        <img src={logosKK} className='logos-images'></img>
                    </div>
                </div>
            </div >
        </>
    )
}
export default AgentEthics;