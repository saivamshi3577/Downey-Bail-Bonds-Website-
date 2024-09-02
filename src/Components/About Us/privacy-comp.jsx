import React from "react";
import "./privacy-comp.css";
import divider from "../Photos/divider.png";
import Bootstrap3 from "./newfile3";
import Bootstrap4 from "./newfile4";
function Privacy2222() {


    return (<>
        <div className="bail_by_fax_and_email_image-hk-py">
            <div class="anim-icons-hk-py full-width-hk-py">
                <span class="icon-hk-py icon-bull-eye-hk-py"></span>
                <span class="icon-hk-py icon-dotted-circle-hk-py"></span>
                <h1 style={{ color: 'white' }}>PRIVACY </h1>
                <div>
                    <a href="/"><h4 style={{ color: 'white' }}> Home | Privacy</h4></a>
                </div>
            </div>
        </div>

        <div>
            <div className="bottom-part-py">
                <h1 className="second-sub-title-py">REFUND AND PRIVACY POLICY</h1>
                <img style={{ padding: "2%" }} src={divider} alt="" />
            </div>
            <div className="faq-section-py">
                <div class="anim-icons-py full-width-py">

                    <span class="icon icon-dotted-world left-py"></span>

                    <span class="icon icon-dotted-world right-py"></span>

                </div>
                <div className="top-bottom-sub-part-py">
                    <p style={{ color: "pink" }}>Some FAQ'S </p>
                    <h1 className="second-sub-title-py">REFUND AND PRIVACY POLICY</h1>
                    <img src={divider} alt="" />
                    <div className="div-for-privacy-top1" style={{ opacity: "0.9" }}>




                        <Bootstrap3 />



                    </div>
                </div>
            </div>
        </div>

        <div>

            <div className="faq-section-py">
                <div class="anim-icons-py full-width-py">

                    <span class="icon icon-dotted-world left-py"></span>

                    <span class="icon icon-dotted-world right-py"></span>

                </div>
                <div className="top-bottom-sub-part-py">
                    <div className="div-for-privacy-top2" style={{ opacity: "0.9" }}>




                        <Bootstrap4 />



                    </div>
                </div>
            </div>
        </div>









    </>)
}
export default Privacy2222;