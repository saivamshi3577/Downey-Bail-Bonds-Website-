import React, { useEffect } from "react";
import "./HistoryOfBail.css";
import orderImage from "../Photos/order.png";
import yellowFrame1 from "../Photos/Rectangle 446.png";
import orderImage2 from "../Photos/Rectangle 440.png";
import yellowFrame2 from "../Photos/Rectangle 442 (1).png";
import weightImage from "../Photos/Rectangle 440 (1).png";
import yellowFrame3 from "../Photos/Rectangle 442 (2).png";
import statue from "../Photos/Rectangle 452.png";
import america from "../Photos/Rectangle 452 (1).png";
import palace from "../Photos/Rectangle 452 (2).png";
import grill from "../Photos/Iocn.png";
import logos from "../Photos/image 22.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";


function HistoryOfBail() { 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const navigate = useNavigate()
  return (
    <div>
      <div className="Arrest-And-Bookings-top">
        <div className="Arrest-Bookings-Head">
          <div className="Arrest-bookings-headings-h1h3">
            <h1 className="Arrest-bookings-h1" style={{ "--i": "1" }}>
              History Of Bails
            </h1>
            <h3 className="Arrest-Bookings-h3" style={{ "--i": "2" }}>
              The history of bails is a narrative woven with the threads of
              judicial evolution, reflecting the ever-changing landscape of
              justice and societal values
            </h3>
          </div>
          <button onClick={()=> {navigate("/Contactus")}} className="Arrest-Bookings-Btn" style={{ "--i": "2" }}>
            Get In Touch
          </button>
        </div>
      </div>

      {/* second div  */}

      <div className="BailLawsWithImage">
        <div className="BailLawsDiv">
          <h1 data-aos="fade-down-left">Bail Laws</h1>
          <p data-aos="fade-up-right">
            Bail laws in the United States grew out of a long history of English
            statutes and policies. During the colonial period, Americans relied
            on the bail structure that had developed in England hundreds of
            years earlier. When the colonists declared independence in 1776,
            they no longer relied on English law, but formulated their own
            policies which closely paralleled the English tradition. The ties
            between the institution of bail in the United States is also based
            on the old English system. In attempting to understand the meaning
            of the American constitutional bail provisions and how they were
            intended to supplement a larger statutory bail structure, knowledge
            of the English system and how it developed until the time of
            American independence is essential. In medieval England, methods to
            insure the accused would appear for trial began as early as criminal
            trials themselves. Until the 13th century, however, the conditions
            under which a defendant could be detained before trial or released
            with guarantees that he would return were dictated by the local
            Sheriffs.x As the regional representative of the crown, the sheriff
            possessed sovereign authority to release or hold suspects. The
            sheriffs, in other words, could use any standard and weigh any
            factor in determining whether to admit a suspect to bail. This broad
            authority was not always judiciously administered. Some sheriffs
            exploited the bail system for their own gain. Accordingly, the
            absence of limits on the power of the sheriffs was stated as a major
            grievance leading to the Statute of Westminster.xi
          </p>
        </div>
        <div className="BailOrderImageDiv">
          <img src={orderImage} className="orderImage" data-aos="fade-down"></img>
          <img src={yellowFrame1} className="yellowFrame1" data-aos="fade-up"></img>
        </div>
      </div>
      {/* //third div //  */}

      <div className="californiaBailWithImageDiv">
        <div className="californiaParentContentDiv" data-aos="fade-right">
          <div className="listAndHeadingDiv">
            <h1 style={{marginLeft:"-3%"}}>California Bail Bond Laws</h1>
            <ul>
              <li>
                All California Bail Agents are licensed and regulated by the
                California Department of Insurance (DOI) and are required to
                conduct business in a manner meeting all rules and regulation
                set forth under the California Insurance Codes. Additionally,
                the California Penal Code and California Code of Regulations
                include many laws that pertain to the actions and conduct of
                Downey bail agents. I have summarized relevant laws that you as
                a consumer should be aware of.{" "}
                <a href="https://www.insurance.ca.gov/01-consumers/170-bail-bonds/">
                  {" "}
                  Click on the links to view the laws in their entirety.
                </a>
                 
              </li>
            </ul>
          </div>
          <div className="onlyTitleDiv">
            <h1>Title 10, California Code of Regulations</h1>
          </div>
          <div className="paymentDiv">
            <h3>2054.4. Payment of Commissions; Unlawful Rebates: Prohibite</h3>
            <p>
              No person may receive commission on bail unless he holds a bail
              license. Downey Bail Bond business owners cannot pay unlicensed
              people to refer business to them.
            </p>
          </div>
          <div className="suggestingDiv">
            <h3>2071. Suggesting or Recommending Attorney; Prohibited</h3>
            <p>
              No bail licensee shall in any manner, directly or indirectly,
              suggest the name of or recommend any attorney to any arrestee or
              person purporting to act for or represent an arrestee.
            </p>
          </div>
          <div className="unlawfulDiv">
            <h3>2074. Unlawful Solicitations; Place</h3>
            <p>
              No bail licensee shall solicit any person for bail in any prison,
              jail or other place of detention of persons, court or public
              institution connected with the administration of justice; or in
              the halls or corridors adjacent thereto. Downey Bail Bond Agents
              soliciting outside of the Downey Jail are in violation of this
              law.
            </p>
          </div>
          <div className="solicitingDiv">
            <h3>2079. Soliciting of Bail; Persons</h3>
            <p>
              No bail licensee shall give, directly or indirectly, any gift of
              any kind to any public official or employee of any governmental
              agency who has duties, functions or responsibilities in respect to
              the administration of justice or a lace wherein detention of
              persons charged with crime may occur, or to a prisoner any jail or
              place of detention. Downey Bail Bondsman cannot give gifts to
              peace officers, court clerks, judges, Public defenders, etc., etc.{" "}
            </p>
          </div>
        </div>
        <div className="californiaParentImageDiv">
          <img src={orderImage2} data-aos="fade-down-left"></img>
          <img src={yellowFrame2} className="yellowFrame2" data-aos="fade-up-right"></img>
        </div>
      </div>

      {/* fourth div */}

      <div className="californiaPenalWithImageDiv">
        <div className="weightImagesDiv">
          <img src={weightImage} data-aos="fade-down-right"></img>
          <img src={yellowFrame3} className="yellowFrame3" data-aos="fade-up"></img>
        </div>
        <div className="californiaPenalMainDiv">
          <div className="californiaPenalCodeDiv">
            <h1 data-aos="fade-down">California Penal Code</h1>
          </div>
          <div className="illegalDiv">
            <h3 data-aos="fade-up">Illegal for Jail Inmates to Solicit for bail companies</h3>
            <p data-aos="fade-left">
              160. (a) No bail licensee in Downey or anywhere in California may
              employ, engage, solicit, pay, or promise any payment,
              compensation, consideration or thing of value to any person
              incarcerated in any prison, jail, or other place of detention for
              the purpose of that person soliciting bail on behalf of the
              licensee. This includes inmates in the Downey Jail and conspiring
              with Bail Agents. A violation of this section is a misdemeanor.
            </p>
          </div>
          <div className="defendantsDiv">
            <h3 data-aos="fade-up">Defendants entitled to a bail review hearing</h3>
            <p data-aos="fade-left">
              1270.2 When a person is detained in custody on a criminal charge
              prior to conviction, that person is entitled to an automatic
              review of the order fixing the amount of the bail by a judge or
              magistrate within 5 days.
            </p>
          </div>
          <div className="judgeDiv">
            <h3 data-aos="fade-up">Judge or Magistrates setting bail amountHistory of Bail</h3>
            <p data-aos="fade-left">
              1275 (a) In setting, reducing or denying bail, the judge or
              magistrate shall take into consideration the protection of the
              public, the seriousness of the offense charged, the previous
              criminal record, and the probability of a flight risk. In other
              words, Downey Judges can set bail at whatever level they deem
              appropriate.
            </p>
          </div>
          <div className="examinationDiv">
            <h3 data-aos="fade-up">Examination of the source of funds for bail</h3>
            <p data-aos="fade-left">
              1275.1 Bail shall not be accepted unless a judge or magistrate
              finds that no portion of the bail bond premium and collateral was
              received by the bail bond company feloniously. This is common with
              cases involving charges of grand theft, financial fraud and larger
              drug cases. The Downey Court has the right to examine how a
              defendant is arranging to bail out of jail and will prevent their
              release if “dirty” money is being used to do so.
            </p>
          </div>
          <div className="disclosureDiv">
            <h3 data-aos="fade-up">Disclosure of Lien against your home</h3>
            <p data-aos="fade-left">
              1276.5 (a) If using properties to secure a bond and a lien will be
              placed on the home, it is required that the property owner(s) read
              and sign the following statement and a copy be given to them after
              signing:
            </p>
            <p data-aos="fade-left">
              “DISCLOSURE OF LIEN AGAINST REAL PROPERTY, DO NOT SIGN THIS
              DOCUMENT UNTIL YOU READ AND UNDERSTAND IT! THIS BAIL BOND WILL BE
              SECURED BY REAL PROPERTY YOU OWN OR IN WHICH YOU HAVE AN INTEREST.
              THE FAILURE TO PAY THE BAIL BOND PREMIUMS WHEN DUE OR THE FAILURE
              OF THE DEFENDANT TO COMPLY WITH THE CONDITIONS OF BAIL COULD
              RESULT IN THE LOSS OF YOU PROPERTY”!
            </p>
          </div>
          <div className="bailDiv">
            <h3 data-aos="fade-up">Bail Bond Agent’s right to Surrender Defendant</h3>
            <p data-aos="fade-left">
              1300. (a) At any time before the forfeiture, a bail agent may
              surrender the defendant back into custody. The bail agent must
              show just cause for the surrender to the court within 48 hours or
              the judge can order that part or the entire premium be returned to
              the defendant or other person who has paid the premium.
            </p>
          </div>
          <div className="noComplaintDiv">
            <h3 data-aos="fade-up">No complaint filed, Automatic 15 day Bail Bond Exoneration</h3>
            <p data-aos="fade-left">
              1303. If a defendant is out on bail and no complaint has been
              filed against them on or before their first court appearance, the
              bail bond is automatically exonerated after 15 court days from the
              first appearance date.
            </p>
          </div>
        </div>
      </div>

      {/* fifth div */}
      <div className="californiaInsuranceCodeMainDiv">
        <div className="californiaInsuranceCodeDiv">
          <h1 data-aos="fade-down" style={{marginTop:"4%", marginLeft:"1%"}}>California Insurance Code</h1>
        </div>
        <div className="internetDiv">
          <h3 data-aos="fade-right" style={{marginTop:"2%", marginLeft:"3%"}}>Internet Advertising:</h3>
          <p data-aos="fade-left">
           <a style={{marginLeft:"-2%"}}> 1726. (a) A person who is licensed in this state as an insurance
            agent or broker, advertises on the Internet, and transacts insurance
            in this state, shall identify all of the following information on
            the Internet:</a>
            <ol style={{listStyle:"auto"}}>
              <li>Name as it appears on his or her insurance license.</li>
              <li>
                The state of his or her domicile and principal place of
                business.
              </li>
              <li>License number</li>
              <li>
                A person shall be deemed to be transacting insurance in this
                state when the person advertises on the Internet, regardless of
                whether the insurance agent or broker maintains his or her
                internet presence.
              </li>
            </ol>
          </p>
        </div>
        <div className="noSolicitingDiv">
          <h3 data-aos="fade-right" style={{marginLeft:"3%"}}>No Soliciting/Advertising without a License:</h3>
          <p data-aos="fade-left">
            1800. (a) Unless one has a current bail license it is illegal to
            solicit for bail. “Solicit” includes any form of advertising;
            directly in person, by mail, internet, radio, television or other
            without a valid license.
          </p>
        </div>
      </div>

      {/* sixth div */}

      <div className="statuteOfwestminsterMainDiv">
        <div className="flexImageDiv">
          <div className="statuteOfwestminsterDiv">
            <h2 data-aos="fade-down">Statute of Westminster</h2>
            <p data-aos="fade-right">
              The Statute of Westminster in 1275 eliminated the discretion of
              sheriffs with respect to which crimes would be bailable. Under the
              Statute, the bailable and non-bailable offenses were specifically
              listed.xii The sheriffs retained the authority to decide the
              amount of bail and to weigh all relevant factors to arrive at that
              amount. The Statute, however, was far from a universal right to
              bail. Not only were some offenses explicitly excluded from bail,
              but the statutes’ restrictions were confined to the abuses of the
              sheriffs. The justices of the realm were exempt from its
              provisions. Applicability of the statute to the judges was the key
              issue several centuries later when bail law underwent its next
              major change. In the early seventeenth century, King Charles I
              received no funds from the Parliament. Therefore, he forced some
              noblemen to issue him loans. Those who refused to lend the
              sovereign money were imprisoned without bail. Five incarcerated
              knights filed a habeas corpus petition arguing that they could not
              be held indefinitely without trial or bail. The King would neither
              bail the prisoners nor inform them of any charges against them.
              The King’s reason for keeping the charges secret were evident: the
              charges were illegal; the knights had no obligation to lend to the
              King. When the case was brought before the court, counsel for the
              knights argued that without a trial or conviction, the petitioners
              were being detained solely on the basis of an unsubstantiated and
              unstated accusation. Attorney General Heath contended that the
              King could best balance the interests of individual liberty
              against the interests of state security when exercising his
              sovereign authority to imprison. The court upheld this sovereign
              prerogative argument.xiii Parliament responded to the King’s
              action and the court’s ruling with the Petition of Right of 1628.
              The Petition protested that contrary to the Magna Carta and other
              laws guaranteeing that no man be imprisoned without due process of
              law, the King had recently imprisoned people before trial “without
              any cause showed.” The Petition concluded that “no freeman, in any
              manner as before mentioned, be imprisoned or detained…” The act
              guaranteed, therefore, that man could not be held before trial on
              the basis of an unspecific accusation. This did not, however,
              provide an absolute right to bail. The offenses enumerated in the
              Statute of Westminster remained bailable and on-bailable.
              Therefore, an individual charged with a non-bailable offense could
              not contend that he had a legal entitlement to bail. onditions
              when he had committed those offenses that the legislature had
              declared bailable.
            </p>
          </div>
          <div className="statuteOfwestminsterImageDiv">
            <img src={statue} data-aos="fade-down-left"></img>
          </div>
        </div>
        <div className="contentWithoutFlexDiv">
          <p data-aos="fade-up-right">
            The King, the courts and the sheriffs were able to frustrate the
            intent of the Petition of Right through procedural delays in
            granting the writs of habeas corpus. In 1676, for example, when
            Francis Jenkes sought a writ of habeas corpus concerning his
            imprisonment for the vague charge of “sedition,” it was denied at
            first because the court was “outside term,” and later because the
            case was not calendared; furthermore, when the court was requested
            to calendar the case it refused to do so. In response to the rampant
            procedural delays in providing habeas corpus as evidenced by Jenkes
            Case,xv Parliament passed the Habeas Corpus Act of 1677. The act
            strengthened the guarantee of habeas corpus by specifying that a
            magistrate: shall discharge the said Prisoner from his Imprisonment
            taking his or their Recognizance, with one or more Surety or
            Sureties, in any Sum according to their discretion, having regard to
            the Quality of the Prisoner and Nature of the offense, for his or
            their Appearance in the Court of the King’s bench…unless it shall
            appear…that the Party (is)…committed…for such Matter or offenses for
            which by law the Prisoner is not bailable.xvi By requiring early
            designation of the cause for arrest, the Habeas Corpus Act provided
            a suspect with knowledge that the alleged offense was either
            bailable or not. The Statute of Westminster remained the primary
            definition of what offenses would be eligible for bail. Although the
            Habeas Corpus Act improved administration of bail laws, it provided
            no protection against excessive bail requirements. Even if a suspect
            was accused of a bailable offense and therefore was entitled to some
            bail, he could still be detained if the financial condition of
            release was exorbitantly high. As evidence of this abuse reached
            Parliament, it responded with the English bill of Rights of 1689. In
            the Preamble, the bill accused the King of attempting “to
            subvert…the laws and liberties of the kingdom: in the “excessive
            bail hath been required of persons committed in criminal cases, to
            elude the benefit of the laws made for the liberty of the
            subjects.”xvii The Bill of Rights proposed to remedy the situation
            by declaring “that excessive bail ought not to be required.”xviii
            Thus, the precursor of the Eighth Amendment in the U.S. Constitution
            was drafted to prevent those accused of bailable offenses from
            unreasonable bail requirements. It did not alter the categories of
            bailable crimes found in the separate Statute of Westminster and
            certainly did not guarantee a right to bail. The language of the
            English Bill of Rights was only one part of the bail system
            developed through many years of English law. As Caleb Foote has
            explained and this analysis recounts, English protection against
            unjustifiable detention contained three essential elements: first,
            offenses were categorized as bailable or not bailable by statutes
            beginning with Westminster I which also placed limits on which
            judges and officials could effect the statue; second, habeas corpus
            procedures were developed as an effective curb on imprisonment
            without specific changes; and third, the excessive bail clause of
            the 1689 Bill of Rights protected against judicial officers who
            might abuse bail policy by setting excessive financial conditions
            for release. English law never contained an absolute right to bail.
            Bail could always be denied when the legislature determined certain
            offenses were unbailable. Most of the history of bail law after
            Westminster I was an attempt to improve the efficiency of existing
            law and especially to grant the suspect a meaningful chance to
            satisfy bail c
          </p>
        </div>
      </div>

      {/* seventh div */}
      <div className="americaMainDiv">
        <div className="flexImageDiv">
          <div className="americaDiv">
            <h2 data-aos="fade-down">America</h2>
            <p data-aos="fade-right">
              In colonial America, bail law was patterned after the English law.
              While some colonies initiated their own laws which were very
              similar to English statutes, others simply guaranteed their
              subjects the same protections guaranteed to British citizens. When
              the colonies became independent in 1776, however, they could no
              longer simply insure the protections of English law. Accordingly,
              the colonies enacted specific bail laws. Typical of the early
              American bail laws were those enacted in Virginia perpetuating the
              bail system as it had evolved in England. Section 9 of Virginia’s
              Constitution in 1776 declared simply that “excessive bail ought
              not to be required…”xix This constitutional provision was
              supplemented in 1785 with a statute which eliminated judges;
              discretion to grant bail by specifying that: those shall be let to
              bail who are apprehended for any crime not punishable in life or
              limb…But if a crime be punishable by life or limb, or if it be
              manslaughter and there be good cause to believe the party guilty
              thereof, he shall not be admitted to bail.”xx Thus the Virginia
              laws closely paralleled the English system. Statutes defined which
              offenses were bailable while the Constitution protected against
              abuses of those definitions. In fact, the clause in the Virginia
              Constitution was identical to the one in the English Bill of
              Rights which had been included to prevent judges from unreasonable
              holding those accused of bailable offenses by setting bail so high
              as to be unobtainable. Other State constitutions similarly
              proscribed excessive bail for bailable offenses in order to
              prevent this method of thwarting the bail laws passed by the
              legislatures: for example, section 29 of the Pennsylvania
              Constitution of 1776 provided that “Excessive bail shall not be
              exacted for bailable offenses.”xxi With James Madison designated
              to prepare an initial draft for Bill of Rights n 1789, the
              Virginia constitution, often referred to as the Virginia Bill of
              Rights, became the model for the first ten amendments that passed
              congress in 1789 and were ratified in 1791. The Eighth Amendment
              in this Bill of Rights was taken virtually verbatim from Section 9
              of the Virginia Constitution and provided that “Excessive bail
              shall not be required…” The only comment on the clause during the
              congressional debates was made by the perplexed Mr. Livermore:
              “The clause seems to have no meaning to it, I do not think it
              necessary. What is meant by the term excessive bail…!”xxii Indeed,
              it seems the drafters thought relatively little about the meaning
              of the bail clause; the clause was so rooted in American and
              English history that to most, the meaning was obvious. Like the
              identical clause in the English Bill of Rights and the Virginia
              Constitution, the Eighth Amendment bail provision was intended to
              prohibit excessive bail as a means of holding suspects accused of
              offenses deemed bailable by Congress.
            </p>
          </div>
          <div className="americaImageDiv">
            <img src={america} data-aos="fade-down-left"></img>
          </div>
        </div>
        <div className="contentWithoutFlexDiv">
          <p data-aos="fade-up-right">
            The bail clause in the Eighth Amendment was only one part of the
            American bail structure.xxiii As in England, the American system
            also includes guarantees against imprisonment without informing the
            suspect of his crime. The Sixth Amendment to the Constitution, like
            the English Habeas Corpus Act of 1678, insures that when arrested, a
            man “be informed of the nature and cause of the accusation” thereby
            enabling him to demand bail if he has committed a bailable offense.
            The final part of the American bail structure and the element upon
            which the Constitution provisions are based is the statutory
            codification of justice officials’ power concerning bail and the
            categorization of crimes into bailable and nonbailable offenses. The
            Constitution merely guarantees that excessive bail may not be
            employed to hold suspects who by law are entitled to bail; similarly
            the Sixth Amendment enables prisoners to know if they are in fact
            entitled to bail under the law; it does not give them any right to
            bail already existing in the law. Thus, the legislature and not the
            constitution is the real framer of bail law; the constitution
            upholds and protects against abuse of the system which the
            legislature creates. This principle was well understood by the
            Framers of the Bill of rights. In fact, the same Congress that
            proposed the Eighth Amendment also formulated the fundamental bail
            statute that remained in force until 1966. This was accomplished in
            1789, the same year that the Bill of rights was introduced, when
            Congress passed the Judiciary Act. The Act specified which types of
            crime were bailable and set bounds on the judges’ discretion in
            setting bail. Following the tradition of State laws developed during
            the colonial period which in turn were based on English law,xxiv the
            Judiciary Act stated that all noncapital offenses were bailable and
            that in capital offenses, the decision to detain a suspect before
            trial was left up to the judge: Upon all arrests in criminal cases,
            bail shall be admitted, except where punishment may be by death, in
            which cases it shall not be admitted but by the supreme or a circuit
            court, or by a justice of the supreme court, or a judge of a
            district court, who shall exercise their discretion therein,
            regarding the nature and circumstance of the offense, and of the
            evidence, the usages of law.xxv The sequence of events in the First
            Congress pertaining to American bail policy is critical to an
            understanding of the Framers of the Eighth Amendment and the
            Judiciary Act of 1789. Only a few days after final passage of the
            Bill of Rights in Congress on September 21, 1789, and before its
            final adoption, the First Congress passed the Judiciary Act of 1789
            on September 29, 1789. In fact, these two legislative measures were
            debated almost concurrently. Considerable debate time was consumed
            in the House of Representatives over the issue of which should be
            enacted first, the bill creating a federal judiciary and federal
            judicial procedures or the amendments to the Constitution.
            Eventually Madison’s point of view that the Bill of Rights should
            take precedence so that “the independent tribunals of justice will
            consider themselves…the guardians of those rights”xxvi prevailed.
            But the same day the House completed the Bill of Rights it proceeded
            to perfect the Judiciary Act of 1789 which was already approved by
            the Senate. The two legislative proposals passed each other going
            and coming between the House and the Senate. This historical
            footnote illuminated significantly the context in which these
            measures were debated. They were almost considered simultaneously.
            Often representatives argued that changes in one measure were
            unnecessary because the other provided ample protection for vital
            rights.xxviii This context suggests strongly that the First Congress
            acted very purposefully in substantially adopting the English system
            of tripartite protection against bail abuses. The Eighth Amendment
            prohibition against excessive bail meant that bail may not be
            excessive in those cases where Congress has deemed it proper to
            permit bail. The Congress then enacted the Judiciary Act defining
            what offenses would be bailable. Habeas corpus protection was
            afforded by Article I of the Constitution. The argument that the
            excessive bail clause guarantees a right to bail by necessary
            implication and that the provision forbidding excessive bail would
            be meaningless if judges could deny bail altogether in some cases is
            clearly not valid in this historical context. The same Congress
            which drafted the Eighth Amendment enacted the Judiciary Act which
            specifically denied a right to bail to individuals charged with
            capital offense. In the context of its legislative history, the
            Eighth Amendment is illuminated by reading it in conjunction with
            the Judiciary Act of 1789. The First Congress adopted the Amendment
            to prevent judges from setting excessive bail in cases prescribed as
            bailable by Congress. The same legislators then enacted a bill
            prescribing which offenses would be bailable. The Eighth Amendment,
            therefore, is not self-executing. It requires legislation creating
            legal entitlements to bail to give it effect. Recognizing this, the
            First Congress provided almost simultaneously the legislation that
            gave the Amendment effect. The First Congress did not choose a
            strange legal arrangement; it chose precisely the system most
            familiar to these former English citizens. The First Congress
            recognized that the Amendment was not intended to limit
            congressional discretion to determine the cases for which bail would
            be allowed, but was designed to circumscribe the authority of courts
            to ignore or circumvent that congressional policy with excessive
            bail requirements.
          </p>
        </div>
      </div>

      {/* eigth div */}
      <div className="palaceMainDiv">
        <div className="flexImageDiv">
          <div className="palaceDiv">
            <h2 data-aos="fade-down">The Judiciary Act</h2>
            <p data-aos="fade-right">
              The Judiciary Act of 1789 did not differentiate between bail
              before and after conviction. Not until 1946 in the Federal Rules
              of Criminal Procedure was this distinction clearly made. Rule 46
              made the 1789 Act’s language the standard for release, but left
              release after conviction pending an appeal or application for
              certiorari to the judge’s discretion regardless of the crime. In
              1966 Congress enacted the first major substantive change in
              federal bail law since 1789. The Bail Reform Act of 1966 provides
              that a non-capital defendant “shall…be ordered released pending
              trial on his personal recognizance” or on personal bond unless the
              judicial officer determines that these incentives will not
              adequately assure his appearance at trial.xxviii In that case, the
              judge must select the least restrictive alternative from a list of
              conditions designed to guarantee appearance. That list includes
              restrictions on travel, execution of an appearance bond
              (refundable when the defendant appears), and execution of a bail
              bond with a sufficient number of solvent sureties. Individuals
              charged with a capital offense or who have been convicted and are
              awaiting sentencing or appeal are subject to a different standard.
              They are to be released unless the judicial officer has “reason to
              believe” that no conditions “will reasonably assure that the
              person will not flee or pose danger to any other person or to the
              community.” The 1966 Act thus created a presumption for releasing
              a suspect with as little burden as necessary in order to insure
              his appearance at trial. Appearance of the defendant for trial is
              the sole standard for weighing bail decision. In noncapital cases,
              the Act does not permit a judge to consider a suspect’s
              dangerousness to the community. Only in capital cases or after
              conviction is the judge authorized to weigh threats to community
              safety. This aspect of the 1966 Act drew criticism particularly in
              the District of Columbia where all crimes formerly fell under the
              regulation of Federal bail law. In a considerable number of
              instances, persons accused of violent crimes committed additional
              crimes while released on their own personal recognizance.
              Furthermore, these individuals were often released again on
              nominal bail.
            </p>
          </div>
          <div className="palaceImageDiv">
            <img src={palace} data-aos="fade-down-left"></img>
          </div>
        </div>
        <div className="contentWithoutFlexDiv">
          <p data-aos="fade-up-right">
            The problems associated with the 1966 Bail Reform Act were
            considered by the Judicial Council committee to study the Operation
            of the Bail Reform Act in the Distract of Columbia in May 1969. The
            committee was particularly bothered by the release of potentially
            dangerous noncapital suspects permitted by the 1966 law and
            recommended that even in noncapital cases, a person’s dangerousness
            be considered in determining conditions for release. Congress went
            along with the ideas put forth in the committee’s proposals and
            changed the 1966 Bail Reform Act as it applied to persons charged
            with crimes in the District of Columbia. The District of Columbia
            Court Reform and Criminal Procedure Act of 1970 allowed judges to
            consider dangerousness to the community as well as risk of flight
            when setting bail in noncapital cases. The 1970 Act contained
            numerous safeguards against irrational application of the
            dangerousness provisions. For instance, an individual could not be
            detained before trial under the act unless the court finds that (1)
            there is clear and convincing evidence that he falls into one of the
            categories subject to detention under the act, (2) no other pretrial
            release conditions will reasonably assure community safety, and (3)
            there is substantial probability that the suspect committed the
            crime for which he has been arrested. This last finding was an
            overzealous exercise of legislative precaution. The Justice
            Department testified that the burden of meeting this “substantial
            probability” requirement was the principal reason cited by
            prosecutors for the failure over the last 10 years to request
            pretrial detention hearings under the statute. Such a standard also
            had the effect of making the pretrial detention hearing a vehicle
            for pretrial discovery of the Government’s case and harassment of
            witnesses. Moreover, the District of Columbia Court of Appeals in
            its Edwardsxxix decision strongly suggests that the probable cause
            standard consistently sustained by the Supreme Court as a basis for
            imposing “significant restraints on liberty” would be
            constitutionally sufficient in the context of pretrial detention.
          </p>
        </div>
      </div>

      {/* bottomDiv */}
      <div className="partnerWithLogoDiv">
        <div className="imagesWithPartnersDiv">
          <img src={grill} className="partnerImage"></img>
          <h3 className="meetHeading">Meet The Partners</h3>
          <img src={grill} className="partnerImage"></img>
        </div>
        <div className="logoDiv">
          <img
            src={logos} data-aos="fade-up"
            className="logoImage1"
            style={{ width: "100%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HistoryOfBail;
