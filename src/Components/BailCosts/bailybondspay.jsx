import React from 'react'
import { useEffect } from 'react'
import "./bailybondspay.css"
import pic2  from "../Photos/5.png"
import client1 from '../Photos/1.png'
import client2 from '../Photos/client-2.png';
import client3 from '../Photos/client-3.png';
import client4 from '../Photos/client-4.png';
import client5 from '../Photos/client-5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Bailybondspay() {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: true,
        });
      }, []);
  return (
    <>
    <section className='payment-options-content-four'>
        <div className='content-four-description'>
            <div className='alligned-text' data-aos="fade-up">
                <h3 className='content-four-desc-h3'>Downey Bail Bonds</h3>
                <h2 className='content-four-desc-h2'>Real Estate Liens and Collateral Bonds</h2>
                <p className='four-desc-p1'>When collateral is required for a Downey Bail Bond, it is taken in the form of a real estate lien on Downey property. Generally all owners of the property must sign the lien and the property should have equity.</p>
                <p className='four-desc-p1'>Clients often use a real estate lien when the bail is a high-dollar amount – $100,000 or more. It may also be necessary if the person has one or more high-risk factors: few ties to the community, short work history, or other such extenuating circumstances. A real estate lien provides additional incentive for the person arrested to return to court. The person knows that the family member who signed the bail contract has put his or her house on the line and could lose the property if the defendant skips bail.</p>
                <p className='four-desc-p1'>The law requires the Downey Bail Bond company to return all collateral and release all liens when the defendant’s case is completed. It is advisable to contact your bail agent as soon as possible to arrange for release of the lien. The bondsman will release the lien anyway once notified of completion of the case by the court, but often courts are slow to move on notification. When someone puts up their home, they don’t want a lien any longer than necessary.</p>
            </div>
        </div>
    </section>
    <section className='content-five-payments-option'>
        <div className='content-five-description'>
            <div className='content-five-left'>
                <h3 className='content-five-h3'>Clients</h3>
                <h2 className='content-five-h2'>WE ARE A PROUD MEMBER OF FOLLOWING REPUTABLE ORGANIZATIONS</h2>
                <span className='content-five-divider'></span>
                <p className='content-five-p'>A leader among Downey Bail Bonds companies . Downey Bail Bonds has been a valuable business leader and trusted member of the community for decades. Downey Bail Bonds excellence has earned it membership in the following organizations:</p>

            </div>
            <div className='content-five-right'>

                <div className='content-five-images' data-aos="fade-left"  data-aos-delay="100">
                <img style={{width:'250px'}} src={client1} alt="" />
                </div>
                <div className='content-five-images' data-aos="fade-left"  data-aos-delay="200">
                <img style={{width:'250px'}} src={client2} alt="" />
                </div>
                <div className='content-five-images' data-aos="fade-left"  data-aos-delay="300">
                <img style={{width:'250px'}} src={client3} alt="" />
                </div>
                <div className='content-five-images' data-aos="fade-left"  data-aos-delay="100">
                <img style={{width:'250px'}} src={client4} alt="" />
                </div>
                <div className='content-five-image' data-aos="fade-left"  data-aos-delay="200">
                <img style={{width:'150px'}} src={client5} alt="" />
                </div>
                <div className='content-five-images' data-aos="fade-left"  data-aos-delay="300">
                <img style={{width:'250px'}} src={client1} alt="" />
                </div>
                
            </div>
        </div>
    </section>
           
    </>
  )
}

export default Bailybondspay;