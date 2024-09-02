import React from "react";
// import "./important-links.css";
import "./californiabaillaw.css";
import { useEffect } from "react";
import californiabaillawiocn from "../Photos/californiabaillawiocn.png";
import standingphoto from "../Photos/standingphoto.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tables from "./tables.jsx";

function Californiabaillaw() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);




    return (<>
        <div className="banner-image-californiabaillaw">
            <div>
                <h1 className="opp-californiabaillaw" data-aos="fade-right" style={{color:"orange"}}>California Bail Law</h1>
            </div>
        </div>

        <div className="alignment-californiabaillaw" style={{backgroundColor:"#00082E"}}>
            <div className="div-californiabaillaw">
                <h1 className="heading-californiabaillaw" data-aos="fade-down">Downey Bail Bond Regulations and Laws Index</h1>
                <img src={californiabaillawiocn} className='Image-californiabaillaw' data-aos="fade-down"></img>
                <p className="para-californiabaillaw" data-aos="fade-up">
                    For many states the regulations on the Downey bail bond industry are found in multiple state codes. In the case of California, the regulatory body is the Insurance Department, but the bail bond industry is also subject to California’s Penal Code.
                </p>
            </div>
        </div>

        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1">

                <h1 className="heading-californiabaillaw-1" data-aos="fade-right">I. Applicable State Statutes</h1>
                <p className="para-californiabaillaw-1"  >
                    <ol>
                        <li>California Insurance Code, Div. 1, Part 2, Ch. 7, Sections 11-800-1823, (hereafter referred to as IC). Under IC 11-800.6, cities and counties are free to enact further regulations not in conflict with the IC sections cited above in A.</li>
                        <li>California Penal Code, Part 2, Title 10, Ch. 1, Article 5.5, Sections 1299-1317 (hereafter referred to as PC).</li>
                        <li>California Code of Regulations, Title 10, Ch. 5, Sections 2053 et seq.</li>
                    </ol>
                </p>

            </div>
        </div>
        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1" style={{marginTop:"-3%"}}>

                <h1 className="heading-californiabaillaw-1" data-aos="fade-right">II. Licensing Requirements for Agents</h1>
                <p className="para-californiabaillaw-1"  >
                    Downy Bail Bonds provides for three kinds of bail licenses [IC 1801]: the bail agents’ license [IC 1802], the bail permitees’ license [IC 1802.5], and the bail solicitors’ license [IC 1803]. Of concern here will be the bail agents’license, which permits the holder to solicit, negotiate, and effect undertakings of bail on behalf of any admitted surety. (A license may also be held by a corporation [IC 1810(b)]). The requirements of which license are:
                    <ul>
                        <li>A surety bond of $1000 for proper handling of money collected [IC 1802],</li>
                        <li>A notice of appointment on file with commissioner by a surety insurer [IC 1802.1],</li>
                        <li>Filing an application in the form prescribed by the commissioner with such supporting documents as required [IC 1804],</li>
                        <li>Filing of annual notices and applications to keep licenses in force and payment of fees by 1 May annually [IC 1808],</li>
                        <li>Taking and passing a written examination given by the commissioner [IC 1810.5, 1810.6], to qualify for which the applicant must take 12 hours of classroom education in pertinent subjects [IC 1810.7(a)],</li>
                        <li>Completion annually of not less than six hours of continuing classroom education on pertinent subjects prior to renewal of license [IC 1810.7(a)],</li>
                        <li>Payment of a license application fee of $118.00 [IC 1811(a)],</li>
                        <li>The regulatory body is the Insurance Department. III. Notice of Forfeiture [PC 1305-1308]. Upon the court’s declaration of a forfeiture [PC 1305(a)(1)-(5)],The clerk of the court must mail notice to both surety and bail agent within 30 days of the declaration [1305(b)],The forfeiture period is 180 days extended by five days for mailing [1305(b)],</li>
                    </ul>
                </p>

            </div>
        </div>
        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1" style={{marginTop:"-3%"}}>

                <h1 className="heading-californiabaillaw-1 heading-californiabaillaw-3" data-aos="fade-right">III. Allotted Time Between Forfeiture Declaration and Payment Due Date</h1>
                <p className="para-californiabaillaw-1"  >
                    When the bond is forfeited and the period of time in PC 1305 has elapsed, the court in question enters a summary judgement [PC 1306(a)] and the district attorney or county counsel must demand immediate payment within 30 days after the summary judgement becomes final [PC 1306(e)(1)]. The clerk of the court must serve notice of the entry of judgment within five days of the date of the judgment [PC 1308(b)].
                    The court can extend the time period not to exceed 180 days from its order [PC 1305.4] or permit tolling [PC 1305(e)].
                </p>

            </div>
        </div>
        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1" style={{marginTop:"-3%"}}>

                <h1 className="heading-californiabaillaw-1" data-aos="fade-right">IV. Forfeiture Defenses</h1>
                <p className="para-californiabaillaw-1"  data-aos="fade-up">
                    The California Penal Code establishes a number of conditions under which the forfeiture is set aside:
                    <ol>
                        <li>If case is dismissed or no complaint is filed within 15 days of arraignment [1305(a)(5)],</li>
                        <li>If the clerk fails to mail forfeiture notice within 30 days or fail to mail to both agent and surety [1305(b)(1)-(3)],</li>
                        <li> If defendant is returned to court within the 180 period [1305(b)(1)-(3)],</li>
                        <li> If defendant is permanently disabled [PC 1305(d)], deceased or otherwise permanently unable to appear [PC 1305(d)(1)], temporarily disabled [PC 1305(e)(1)-(3)], or in custody beyond jurisdiction of the court [PC 1305(f)(g)],</li>
                        <li>A motion is filed by the agent/surety within the 180 day period to be heard within 30 of the expiration of the 180 day period [PC 1305(I)], 1305.4,</li>
                        <li>If the court has reason to believe there is a sufficient excuse for a failure to appear, it may continue the case for a period it deems reasonable [PC 1305.1].</li>
                    </ol>
                </p>

            </div>
        </div>
        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1" style={{marginTop:"-3%", width:"100%"}}>

                <h1 className="heading-californiabaillaw-1" data-aos="fade-right">V. Remission</h1>
                <p className="para-californiabaillaw-1 "  style={{paddingLeft:"3%"}} >
                    California has no remission period.
                </p>

            </div>
        </div>
        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1" style={{marginTop:"-3%", width:"100%"}}>

                <h1 className="heading-californiabaillaw-1" data-aos="fade-right">VI. Bail Agent’s Arrest Authority</h1>
                <p className="para-californiabaillaw-1 "  style={{paddingLeft:"3%"}} data-aos="fade-left">
                    California Penal code allows the agent to arrest the principal himself or empower another to do so. [PC 1301].
                </p>

            </div>
        </div>
        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1" style={{marginTop:"-3%", width:"100%"}}>

                <h1 className="heading-californiabaillaw-1" data-aos="fade-right">VII. Other Noteworthy Provisions</h1>
                <p className="para-californiabaillaw-1 "  style={{paddingLeft:"3%"}} data-aos="fade-left">
                    A bail agent’s license may also be held by a corporation [IC 1810(b)].
                </p>

            </div>
        </div>
        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1" style={{marginTop:"-3%"}}>

                <h1 className="heading-californiabaillaw-1" data-aos="fade-right">VIII. Noteworthy State Appellate Decisions</h1>
                <div className="div-header-californiabaillaw">
                    <h1 className="header-californiabaillaw">A. Unexcused Non-Appearance</h1>
                    <p className="para-californiabaillaw-1"  >
                        <ol>
                            <li>People v. American Bankers Ins. Co. (1989) 264 Cal.Rptr. 152, 215 Cal. App.3d 1363. If defendant fails to appear and court continues the matter without forfeiting bail, the excuse for defendant’s failure to appear must be “on the record.”After defendant failed to appear at his probation and sentencing hearing, the trial court continued the matter and ultimately ordered bail forfeited. Summary judgment was entered in favor of the People. The trial court denied the bail bond company’s motion to vacate the summary judgment and to exonerate the bond. (Superior Court of Orange County, No. C-63343, Myron S. Brown, Judge.)The Court of Appeals reversed the trial court’s order denying the motion to vacate the summary judgment and exonerate the bond. The court held that where, as in this case, there is no indication on the record that either the defendant or defense counsel presented any information to the court which could be said to constitute a sufficient basis to entertain a reasonable belief that the defendant’s nonappearance may have been with sufficient excuse. Thus, it held that the failure of the trial court to declare forfeiture of defendant’s bail bond on the first day he neglected to appear for his probation and sentencing hearing deprived it of jurisdiction to later forfeit the bond, since there was nothing in the record to show that the trial court had any reason to believe sufficient cause existed for his failure to appear. (Opinion by Scoville, P.J. with Wallin and Sonenshine, JJ., concurring.)</li>
                            <li>People v. Frontier Pacific Ins. Co.(1998) 74 Cal.Rptr.2d 316, 63 Cal.App. 4th 889.If upon the non-appearance of a defendant, the trial court continues a case without forfeiting bail, and the surety later brings a motion for relief from a subsequently entered forfeiture, the court may not consider evidence not part of the record from the first hearing to determine whether there was a rational basis for a sufficient excuse.In criminal prosecution, the Superior Court, Santa Clara County, No. 191155, Leonard B. Sprinkles, J., declared bail forfeited after defendant’s second failure to appear for sentencing. Surety’s motion to vacate forfeiture and exonerate bail was denied, and surety appealed. The Court of Appeal, Mihara, J., held that:</li>
                            <li>People v. American Bankers Ins. Co. (1989) 264 Cal.Rptr. 152, 215 Cal. App.3d 1363. If defendant fails to appear and court continues the matter without forfeiting bail, the excuse for defendant’s failure to appear must be “on the record.”After defendant failed to appear at his probation and sentencing hearing, the trial court continued the matter and ultimately ordered bail forfeited. Summary judgment was entered in favor of the People. The trial court denied the bail bond company’s motion to vacate the summary judgment and to exonerate the bond. (Superior Court of Orange County, No. C-63343, Myron S. Brown, Judge.)The Court of Appeals reversed the trial court’s order denying the motion to vacate the summary judgment and exonerate the bond. The court held that where, as in this case, there is no indication on the record that either the defendant or defense counsel presented any information to the court which could be said to constitute a sufficient basis to entertain a reasonable belief that the defendant’s nonappearance may have been with sufficient excuse. Thus, it held that the failure of the trial court to declare forfeiture of defendant’s bail bond on the first day he neglected to appear for his probation and sentencing hearing deprived it of jurisdiction to later forfeit the bond, since there was nothing in the record to show that the trial court had any reason to believe sufficient cause existed for his failure to appear. (Opinion by Scoville, P.J. with Wallin and Sonenshine, JJ., concurring.)</li>
                            <li>People v. Frontier Pacific Ins. Co.(1998) 74 Cal.Rptr.2d 316, 63 Cal.App. 4th 889.If upon the non-appearance of a defendant, the trial court continues a case without forfeiting bail, and the surety later brings a motion for relief from a subsequently entered forfeiture, the court may not consider evidence not part of the record from the first hearing to determine whether there was a rational basis for a sufficient excuse.In criminal prosecution, the Superior Court, Santa Clara County, No. 191155, Leonard B. Sprinkles, J., declared bail forfeited after defendant’s second failure to appear for sentencing. Surety’s motion to vacate forfeiture and exonerate bail was denied, and surety appealed. The Court of Appeal, Mihara, J., held that:</li>
                            <li>Trial court lacked jurisdiction to forfeit bail bond upon defendant’s second failure to appear, in absence of showing on the record that court found sufficient excuse at time of first nonappearance for defendant’s absence; and</li>
                            <li>Declaration submitted by district court in opposing motion to vacate forfeiture, detailing an alleged in camera discussion with judge at time of defendant’s first nonappearance that allegedly explained his absence, did not change result. Reversed.</li>
                            <li> Reinstatement Without Notice</li>
                        </ol>
                        County of Madera v. Ranger Ins. Co. (1991) 281 Cal.Rptr. 230, 230 Cal. App.3d 271.<br></br>
                        County sought to recover from surety on bail bond when defendant failed to appear in criminal case. The Madera Justice Court, No. 020641, Victor C. Dahman, J., granted summary judgment in favor of county. Surety Appealed.<br></br>
                        The Court of Appeal, Dibiaso, Acting P.J., held that:
                        <ol>
                            <li>court may not reinstate defendant on previously forfeited bail bond without prior notice to the surety, and</li>
                            <li>failure of court to provide prior notice requires release of surety obligation. Reversed.</li>
                            <li>No Election Required by Prosecution Where Extradition Infeasible</li>
                        </ol>
                        County of Orange V. Ranger Ins. Co. (1998) 61 Cal.App.4th 795, 71 Cal.Rptr.2d 811.<br></br>
                        In bail forfeiture proceedings, the trial court ruled that Â§Pen. Code, 1304, subd. (g), which provides for relief from forfeiture of bail when the prosecuting agency elects not to seek extradition after being informed of the location of a fugitive defendant, did not provide relief to a surety whose bond posted for a Mexican national convicted of drug offenses had been forfeited after defendant fled to Mexico. (Superior Court of Orange County, No. 95NF1458, David O. Carter, Judge.)<br></br>
                        The Court of Appeal affirmed. The court held that Â§Pen. Code, 1305, subd. (g), applies to defendants in foreign countries, but that it not triggered when extradition is not feasible. The term “elect” implies a choice of options, and the implication is that the prosecutor will have the option whether or not to seek extradition. Accordingly, the court held that the prosecution, having given evidence of Mexico’s demonstrated reluctance to extradite its own nationals for nonheinous offenses, was not required to make a formal request for defendant’s extradition from the Mexican government, and the trial court properly found that extradition was infeasible. (Opinion by Sonenshine, Acting P.J., with Rylaarsdam and Bedsworth, JJ., concurring.)
                    </p>
                </div>
                <div className="div-header-californiabaillaw">
                    <h1 className="header-californiabaillaw">B. When Is A Bailee Required to Appear in Court?</h1>
                    <p className="para-californiabaillaw-1"  >
                        People v. Ranger Ins. Co. (1998) 66 Cal.App.4th 1549, 78 Cal.Rptr. 2d 763. Defendant must appear at a “<span style={{color:"#FFAE00"}}><b>master trial calendar hearing</b></span>.”
                    </p>
                    <p className="para-californiabaillaw-1">
                        In a felony criminal prosecution, the trial court properly granted defendant’s surety’s motion to vacate the bail forfeiture ordered when defendant failed to appear at a hearing on a defense motion to continue the trial. The trial court lost jurisdiction when it failed to forfeit the bail bond two days earlier on the occasion of defendant’s failure to appear at the master trial calendar hearing and so it was without jurisdiction to order the forfeiture two days later.
                    </p>
                    <p className="para-californiabaillaw-1">
                        Pen. Code, 1305, requires a defendant’s presence at “trial,” which includes the date set for the appearance in the master trial calendar department. If the court fails to declare forfeiture at that time, it loses jurisdiction and the bond is exonerated by operation of law. Even though defendant had executed a Pen. Code, 977, waiver, which allows a felony defendant to be absent on specific occasions, Pen. Code, 1305, which governs forfeiture procedure, was the more specific statute and thus it took precedence. When there is a conflict between a general and a special law, the special law must control.
                    </p>
                    <p className="para-californiabaillaw-1">
                        [See 4 Witkin & Epstein, Cal. Criminal Law (2d ed. 1989) 2023 et seq.] (2) Bail and Recognizance Â§9 — Forfeiture of Bond or Deposit. The forfeiture or exoneration of bail is entirely a statutory procedure, and forfeiture proceedings are governed entirely by the special statutes applicable thereto (Pen. Code, 1305-1309). Because the law abhors forfeitures, these statutes are to be strictly construed in favor of the surety.
                    </p>
                </div>
                <div className="div-header-californiabaillaw">
                    <h1 className="header-californiabaillaw">C. Timeliness of Entry of Summary Judgment</h1>
                    <p className="para-californiabaillaw-1"  >
                        People v. Topa Ins. Co. (1995) 38 Cal.Rptr.2d 167, 32 Cal. App.4th 296. Summary judgment must be filed within 90 days after the date it may first be filed, or the trial court loses jurisdiction over the bond.
                    </p>
                    <p className="para-californiabaillaw-1">
                        Surety filed motion to vacate forfeiture of, reinstate and exonerate bail bond. The Superior Court, Sonoma County, No. 16737, R. Bryan Jamar, J., granted summary judgment on forfeiture, and denied surety’s motion to set aside summary judgment and exonerate bail. Surety Appealed. The Court of Appeal, Merrill, J., held that: (1) trial court was without jurisdiction to do anything other than enter summary judgment of forfeiture following expiration of 180-days period for seeking relief from forfeiture, absent tolling of 180-days period, and (2) trial court’s failure to enter summary judgment forfeiting bail within 90 days after lapse of 180-day period for seeking relief from forfeiture meant that its jurisdiction to enter summary judgment had expired and bail was exonerated. Reversed.                    
                    </p>
                    
                </div>
                <div className="div-header-californiabaillaw">
                    <h1 className="header-californiabaillaw">D. Notice</h1>
                    <p className="para-californiabaillaw-1"  >
                        People v. Ranger Ins. Co.(1996) 59 Cal.Rptr.2d 777, 51 Cal.App.4th 1379. The court must give notice to the surety at its proper address. After receiving notice of summary judgment of forfeiture, surety on bail bond moved to discharge forfeiture, set aside judgment, and exonerate bail, based on procedural irregularities in giving of notice. The Superior Court, Santa Clara County, No. 172001, John A. Flaherty, J., denied motion. Surety appealed The Court of Appeal, Wunderlich, J., held that:
                    </p>
                    <p className="para-californiabaillaw-1">
                        notice of original forfeiture forwarded to surety by defunct general agent to whom it was mailed achieved statutory goal of actual notice; order, naming wrong surety, that surety reassume its obligations under reinstated bond was ineffective; and even if reassumption had been effective, notice to address known to be incorrect was ineffective. Reversed.              
                    </p>
                    
                </div>
                <div className="div-header-californiabaillaw">
                    <h1 className="header-californiabaillaw">E. Deportation</h1>
                    <p className="para-californiabaillaw-1"  >
                        People v. American Surety Ins. Co. (2000) 92 Cal.Rptr.2d 216. Deportation of a bailee entitles the surety to relief from a forfeiture (and to have its liability extinguished).<br></br>
                        Surety which had posted bail for defendant who was arrested on drug charges, and who was unable to appear for preliminary hearing due to his deportation by Immigration and Naturalization Service (INS), moved to vacate forfeiture and exonerate bail. The Superior Court, Ventura County, Nos. CR44361, 187541, John J. Hunter, J., denied motion. Surety appealed. The Court of Appeal, Yegan, J., held that defendant’s deportation rendered him unable to appear due to “detention” by civil authorities, and thus operated under statute to exonerate bail. Reversed.
                    </p>
                    
                </div>
            </div>
        </div>
        <div className="alignment-californiabaillaw" >
            <div className="div-californiabaillaw-1" style={{marginTop:"-3%", width:"100%"}}>

                <h1 className="heading-californiabaillaw-1" data-aos="fade-right">IX. Bounty Hunter Provisions</h1>
                <div className="div-header-californiabaillaw">
                    <h1 className="header-californiabaillaw">A. Licensing Requirements. [PC 1299.04(a)(1)-(5)]</h1>
                    <p className="para-californiabaillaw-1"  >
                        <ol>
                            <li>Be at least 18 years old [PC 1299.04(a)(1)],</li>
                            <li>Completion of a 40 hour power of arrest course [PC 1299.04(a)(2)],</li>
                            <li>Completion of a minimum of 12 hours classroom education pursuant to IC 1810.7 [PC 1299.04(a)(3)]</li>
                            <li>Completion of a training course in the exercise of the power to arrest pursuant to Section 7583.7 of Business and Professions Code [PC 1299.04(a)(4)],</li>
                            <li>No felony convictions [PC 1299.03(a)(5)].</li>
                            <li>Arrest Authority. [PC 1299.02]</li>
                        </ol>
                    </p>
                    
                </div>

            </div>
        </div>
        <Tables/>    
    </>)
}
export default Californiabaillaw;