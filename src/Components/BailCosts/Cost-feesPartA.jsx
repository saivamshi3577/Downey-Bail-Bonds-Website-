import { React, useEffect } from "react";
import "./Cost-feesPartAc.css";
import circle1dot from "../Photos/circle-dot.png";
import circle2line from "../Photos/circle-line.png";
import divider1 from "../Photos/divider1.png";
import hammer1 from "../Photos/hammer.png";
import CountUp from "react-countup";
import starue from "../Photos/1.jpg";
import chair2 from "../Photos/2.jpg";
import client1 from "../Photos/client-1.png";
import client2 from "../Photos/client-2.png";
import client3 from "../Photos/client-3.png";
import client4 from "../Photos/client-4.png";
import client5 from "../Photos/client-5.png";
import client6 from "../Photos/client-6.png";
import circleleft from "../Photos/circle-3.png"
import circledown from "../Photos/circle-4.png"
import AOS from "aos";
import "aos/dist/aos.css";

function CostFee() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div className="total">
      <div className="section1">
        <div className="bgchair">
          <div className="pmsize">
            <div className="firstimg1">
              <img src={circle1dot} alt="" className="sideimg1 sideimg11" />
            </div>
            <div className="head1">
              <div className="txt0">Bail Cost and Fees</div>
              <div className="headtxt">
                <a href="/"><div className="txt1">Home</div></a>
                <div className="txt1">
                  <span className="space1">_</span>|
                  <span className="space1">_</span>
                </div>
                <div className="txt1">Bail Cost And Fees</div>
              </div>
            </div>
            <div className="secondimg1">
              <img src={circle2line} alt="" className="sideimg1 sideimg12" />
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="part2">
          <div className="content1">
            <div className="txt71 txt7">Downey Bail Bonds</div>
            <div className="txt72 txt7">DOWNEY BAIL COST AND FEES</div>
            <div className="txt73 txt7">
              <img src={divider1} alt="" />
            </div>
            <div className="txt74 txt7">
              Most Bail Bond companies, including Downey Bail Bonds, are
              regulated by the California Department of Insurance. This
              government organization has set the standardized fee, or
              “premium,” a Downey Bail Bondsmen can charge at 10%, meaning that
              if a defendant’s bail is set at $5,000, the cost of a Downey Bail
              Bond company’s premium is required, by law, to be no more and no
              less than $500. The Department of Insurance makes certain
              exceptions in the case senior citizens, active members of the
              United States military, union members, and defendants that have
              secured legal representation—for these individuals, a Downey Bail
              Bond may legally charge 8% of the total bail amount.Take Note:
              Downey Bail Bond premiums are always non-refundable, and if the
              defendant fails to appear in court (called a “forfeiture”), the
              person who purchased the Downey Bail Bond (indemnitor) must pay
              the Downey Bail Bond the total amount of the bail.
            </div>
          </div>
          <div className="content2">
            <div className="hammer1"></div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="sideimg9"><img src={circleleft} alt="" className="sideimg9img" /><img src={circledown} alt=""className="sideimg9img2" /></div>
        <div className="bgimg1">
          <div className="part3">
            <div className="numfirsttxt">
              You should be mindful that Downey Bail Bond companies who offer 5%
              Downey Bail Bond fees or “cheap Downey Bail Bond” are violating
              California Law. Any company that offers you these rates or makes
              these claims is either acting illegally or will put you on a
              payment plan when you sign the contract. These “price cutting”
              bail agents are saying and doing whatever they can to get your
              business. if you have any question please call our office.
              1-800-944-1599
            </div>
            <div className="numbox1">
              <div className="num1 " data-aos="zoom-in" data-aos-delay="50">
                <div>
                  <h1 className="num9 ">
                    <CountUp start={0} end={20} duration={10}></CountUp>
                  </h1>
                </div>
                <div className="numtxt2 ">+ YRS EXP</div>
              </div>
              <div className="vline9">
                <span className="space1">.</span>
              </div>
              <div className="num1" data-aos="zoom-in" data-aos-delay="200">
                <div>
                  <h1 className="num9">
                    <CountUp start={0} end={980} duration={10}></CountUp>
                  </h1>
                </div>
                <div className="numtxt2">+ Completed Cases</div>
              </div>
              <div className="vline9">
                <span className="space1">.</span>
              </div>
              <div className="num1" data-aos="zoom-in" data-aos-delay="350">
                <div>
                  <h1 className="num9">
                    <CountUp start={0} end={99} duration={10}></CountUp>
                  </h1>
                </div>
                <div className="numtxt2">% Happy Customers</div>
              </div>
              <div className="vline9">
                <span className="space1">.</span>
              </div>
              <div className="num1" data-aos="zoom-in" data-aos-delay="550">
                <div>
                  <h1 className="num9">
                    <CountUp start={0} end={99} duration={10}></CountUp>
                  </h1>
                </div>
                <div className="numtxt2">% Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="part4">
          <dir className="half1"></dir>
          <div className="half2">
            <div className="borderbox1">
              <div className="bluecolor6">
                <div className="gold0">Bail Bondsmen are Licensed</div>
                <div className="txt117">
                  A Downey Bail Bondsmen is an individual that is licensed by
                  the California Department of Insurance and can legally assist
                  those in need of a Downey Bail Bond to have a defendant
                  released from jail. Typically, the 10% premium is always paid
                  up-front; however, some exceptions may apply to those that are
                  credit-worthy.
                </div>
                <div>
                  <a href="/Contactus"><button className="btn1">Contact Us</button></a>
                </div>
              </div>
            </div>

            <div className="borderbox2">
              <div className="bluecolor6">
                <div className="gold0">
                  How Downey Bail Bonds Evaluates Risk
                </div>
                <div className="txt117">
                  Because a bail bond company is essentially using their own
                  money to pay for the total amount of your friend or loved
                  one’s bail, Downey Bail Bondsmen must evaluate the risk before
                  writing each bond. Risk is evaluated based on a number of
                  different factors, including:
                </div>
                <div className="txt117">
                  <ul>
                    <li>The Nature of the Offense</li>
                    <li>The Criminal Background of the Defendant</li>
                    <li>The Potential Jail Time Facing the Defendant</li>
                    <li>The Relationship Between Indemnitor & Defendant</li>
                    <li>Employment Status of Indemnitor</li>
                    <li>Indemnitor’s Credit Rating & Financial Situation</li>
                    <li>Indemnitor’s Residency Status (Homeowner vs Renter)</li>
                    <li>
                      Assets & Collateral of Either Indemnitor or Defendant
                    </li>
                    <li>Downey Bail Bond Payment Method</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="part5">
          <div className="blacktxt">Negotiating Downey Bail Bond Payment</div>
          <div className="txt74 jst">
            When applying for a Downey Bail Bond, both the Downey Bail Bond
            company and the indemnitor must agree on how the 10% premium will be
            paid. Applicants should always be honest about their financial
            position; even if you have limited funds, Armstrong Downey Bail
            Bonds will work with you to develop a payment plan or leverage your
            assets (collateral) to get your friend or family member out of jail
            as quickly as possible. Types of collateral may include:
          </div>
          <div className="statuetxt9">
            <div className="txt74 qwerty1">
              <ul>
                <li>Real Property</li>
                <li>House</li>
                <li>Vehicle</li>
                <li>Jewelry</li>
                <li>Electronics</li>
              </ul>
            </div>
            <div className="qwerty2">
              <img src={starue} alt="" className="statue1" />
            </div>
          </div>
          <div className="txt74 jst">
            Mutual trust is paramount in the Downey Bail Bond industry, and Our
            Expert bail Agent will constantly strive to find an equitable
            arrangement for all parties.
          </div>
        </div>
      </div>

     <div className="backblue1">
      <div className="section6">
        <div className="part6">
          <div className="p6left" ></div>
          <div className="p6right">
            <div className="padd5">
              <div className="Flexible9">Flexible Payment Plans</div>
              <div className="txt117">
                Payment for Downey Bail Bonds is generally made prior to the
                release of the defendant. we accept Pay with Visa, Mastercard,
                American Express, Discover, or online through PayPal. In
                addition to no collateral bonds, we often offer clients flexible
                payment options to help ease the strain of having to pay a large
                sum of money all at once. To qualify for a payment plan, the
                co-signer of the bond (known as the indemnitor or the one taking
                responsibility for the defendant) would need to have good credit
                and / or be a Downey homeowner.
                <br /> <br />
                Downey Bail Bonds provides several flexible Downey Bail Bond
                payment options. If you are unable to pay the 10% premium
                upfront, Downey Bail Bonds will work with you to develop a
                custom payment plan based on your individual financial
                situation. Call today to speak with one of our friendly bail
                bond agents. 1-800-944-1599.
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="section7">
        <div className="part7">
          <div className="p7left">
            <div className="txt74 l1 jst">
              <ul>
                <li>Cash Or Personal Check</li>
                <li>
                  Downey Bail Bonds gladly accepts cash payments, personal
                  checks, or certified money orders.
                </li>
                <li>Major Credit Cards</li>
                <li>
                  Pay with Visa, Mastercard, American Express, Discover, or
                  online through PayPal.
                </li>
                <li>Flexible Financing</li>
                <li>
                  Unsure about how to pay? Downey Bail Bonds offers financing
                  options for those who qualify.
                </li>
                <div>
                  <a href="/Contactus"><button className="btn2">Contact Us</button></a>
                </div>
              </ul>
            </div>

            <div className="p7right l2">
              <img src={chair2} alt="" className="chair2" />
            </div>
          </div>
        </div>
      </div>

      <div className="section8">
        <div className="blacktxt">Discounted Rates</div>
        <div className="txt74">
          Downey Bail Bonds offers discounts to seniors, union members, and
          active members of the U.S. Military, Those who have private counsel
          (lawyer) Retained, or sufficient collateral. Zero down is available
          and payments. Most qualify based on residence history and employment
          history.
        </div>
      </div>

      <div className="section9">
        <div className="part9">
          <div className="contentleft1">
            <div className="txt71 txt7">Clients</div>
            <div className="txtlast1">
              WE ARE A PROUD MEMBER OF FOLLOWING REPUTABLE ORGANIZATIONS
            </div>
            <div className="txt73 txt7">
              <img src={divider1} alt="" />
            </div>
            <div className="txt74 txt7">
              A leader among Downey Bail Bonds companies . Downey Bail Bonds has
              been a valuable business leader and trusted member of the
              community for decades. Downey Bail Bonds excellence has earned it
              membership in the following organizations:
            </div>
            <div>
              <a href="/Contactus"><button className="btn3">Contact Us</button></a>
            </div>
          </div>

          <div className="contentright1">
            <div className="clienta">
              <div className="clientimg1" data-aos="fade-left" data-aos-delay="100">
                <img src={client1} alt="" className="cltimg1"  />
              </div>
              <div className="clientimg1" data-aos="fade-left" data-aos-delay="200">
                <img src={client2} alt="" className="cltimg1" />
              </div>
              <div className="clientimg1" data-aos="fade-left" data-aos-delay="300">
                <img src={client3} alt="" className="cltimg1" />
              </div>
            </div>
            <div className="clienta">
              <div className="clientimg1" data-aos="fade-left" data-aos-delay="400">
                <img src={client4} alt="" className="cltimg1" />
              </div>
              <div className="clientimg1" data-aos="fade-left" data-aos-delay="500">
              <img src={client6} alt="" className="cltimg1 cltimg1l" />
               
              </div>
              <div className="clientimg1" data-aos="fade-left" data-aos-delay="600">
              <img src={client5} alt="" className="cltimg1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CostFee;
