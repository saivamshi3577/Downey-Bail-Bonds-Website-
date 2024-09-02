import React from "react";
import atmCard from "../Photos/atm-card.png";
import moneyCard from "../Photos/money.png";
import shadded from "../Photos/pattern-1.png";
import settingIcon from '../Photos/setting.png'
import "./PaymentOptions.css";

function Payment() {
  return (
    <>

    <div className="fixed-icon-payment-options">
        <img style={{width:'15px'}} src={settingIcon} alt="" />
    </div>
      <section class="page-title">
        <div class="anim-icons full-width">
          <span class="icon icon-bull-eye"></span>
          <span class="icon icon-dotted-circle"></span>
        </div>
        <div class="auto-container-top">
          <div class="title-outer">
            <h1>PAYMENT OPTIONS</h1>
            <ul class="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>PAYMENT OPTIONS</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-two-paymnet-options">
        <div className="content-two-description">
          <div className="description-left">
            <h3 className="descripiton-two-h3">DOWNEY BAIL BONDS</h3>
            <h1>Bail Payment with Cash or Credit Cards</h1>
            <span className="content-two-divider"></span>
            <p className="description-two-p1">
              {" "}
              Downey Bail Bond companies take cash as payment, generally in
              advance of service. However, paying for a Downey Bail Bond with a
              credit card may be the most convenient form of payment for the
              client and the bondsman.
            </p>
            <p className="description-two-p2">
              {" "}
              Paying by credit card is the quickest way to expedite the bail
              process and thereby get the defendant out of jail faster. With a
              credit card payment, Downey Bail Bond payment and paperwork can be
              completed by email or fax. Clients are surprised to find that they
              can arrange bail without coming to the office. This convenience
              helps them avoid going out late at night or taking time off work
              to complete the bail contract process. Paying for a Downey Bail
              Bond by credit card often is the best option for parents of
              college students or anyone who lives far away.
            </p>
          </div>
          <div className="decription-right">
            <div className="outer-box-right-div">
              <div className="Atm-cards-div" >
                <img src={atmCard} alt="" className="Atm-card-img" style={{width:'150px'}} />
              </div>
              <div className="Money-coins-div">
                <img src={moneyCard} alt="" className="money-coins-img" style={{width:'150px'}} />
              </div>
              <div className="shaded-box-div">
                <img src={shadded} alt="" className="pattern-img" style={{width:'220px'}} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Payment;
