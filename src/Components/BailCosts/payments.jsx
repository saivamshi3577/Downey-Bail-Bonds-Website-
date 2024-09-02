import React from 'react'
import "./payments.css"
import pic1 from "../Photos/divider-centered.png"
import dottedBigCircle from '../Photos/circle-3.png';
import yelloCirlce from '../Photos/circle-4.png';

function payments() {
  return (
    <>
         <section className="testimonial-section">
          <div className='rotating-circle-payment-options'>
            <img className='rotating-dotted-cirlce-payment-options' src={dottedBigCircle} alt="" />
            <img src={yelloCirlce} className='yello-Circle-Payment-options' alt="" />
          </div>
                <div className="auto-container2">
                    <div className="sec-title text-center">
                        <span className="sub-title">Downey Bail Bonds</span>
                        <h2>No-interest Bail Financing</h2>

                        <img src={pic1} alt='title' className="divider"/>
                        <div className="text">For some families, even 10% of the bail amount presents a financial challenge. Some clients either don’t have a credit card or a large enough credit line to pay the Downey Bail Bond fee. Some bail companies offer payment plan options to clients, and a few charge interest on bail payments. Look for an agent who offers interest-free bail financing, and make sure you know exactly what you’re agreeing to before you sign.</div>
                        <div className="text">You don’t have to have a perfect credit to qualify for a payment plan. Generally, you need to have credit and use it responsibly. Several factors come into play for determining a payment plan: length of residency, employment and arrest history, ability to make payments and other factors.</div>
                        <div className="text">When you work with a Downey Bail Bond to arrange a payment plan, be realistic about your budget. Don’t offer to pay $500 per month when you can only afford $250. The Downey Bail Bond company will require you to make a down payment that represents a commitment to pay the remainder of the fee.</div>
                        <div className="text">What’s most important is that the client demonstrates a serious attitude about the situation. If the person charged fails to appear in court, then the person who signed the bail contract is liable for the entire bail amount. Never agree to bail someone out if you think that person may not return to court.</div>
                    </div>
        
                 
                </div>
            </section>
        </>
  )
}

export default payments