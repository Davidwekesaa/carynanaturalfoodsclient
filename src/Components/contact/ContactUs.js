import React from "react";
import Header from "../Header";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div>
      <Header />
      <div className="">
        <div className="toToUsSection">
          <span className="to_to_us">TALK TO US</span>
          <span className="request_demo">Request a Demo</span>
          <span className="schedule_text">
            Schedule a 20 minute meeting with our experts to understand how you
            can use spatial analysis in your organization.
          </span>
          <div className="form-input">
            <div className="input-cintainer">
              <div className="input-field">
                <div className="first-last-name">
                  <div className="field-others">
                    <input
                      type="text"
                      placeholder="First name*"
                      className="field"
                      id="firstname"
                    />
                    <label htmlFor="firstname">First name*</label>
                  </div>
                  <div className="field-others">
                    <input
                      type="text"
                      placeholder="Last name*"
                      className="field"
                      id="lastname"
                    />
                    <label htmlFor="lastname">Last name*</label>
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="first-last-name">
                  <div className="field-others one">
                    <input
                      type="text"
                      className="field one"
                      id="Businessemail"
                      placeholder="Business email*"
                    />
                    <label htmlFor="Businessemail">Business email*</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-cintainer">
              <div className="input-field">
                <div className="first-last-name">
                  <div className="field-others"></div>
                  <div className="field-others">
                    <input type="text" className="field" />
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="first-last-name">
                  <div className="field-others one">
                    <input
                      type="text"
                      className="field one"
                      id="Organisation"
                      placeholder="Organisation*"
                    />
                    <label htmlFor="Organisation">Organisation*</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-cintainer">
              <div className="input-field">
                <div className="first-last-name">
                  <div className="field-others one"></div>
                </div>
              </div>
              <div className="input-field">
                <div className="first-last-name">
                  <div className="field-others one">
                    <input
                      type="text"
                      className="field one"
                      placeholder="Job Title*"
                      id="JobTitle"
                    />
                    <label htmlFor="JobTitle">Job Title*</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-cintainer">
              <div className="input-field">
                <div className="first-last-name">
                  <div className="field-others one"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="input-cintainer">
            <div className="input-field">
              <div className="check">
                <div className="ch">
                  <input type="checkbox" className="checkbox" />
                  <span className="agreestament">
                    Yes, I would like to receive marketing communications
                    regarding CARTO products, services, and events. I can
                    unsubscribe at any time.
                  </span>
                </div>
                <span className="agreestament agrr">
                  By registering, I acknowledge my personal data will be
                  processed in accordance with CARTO's <u>Privacy Notice</u>.
                </span>
              </div>
            </div>
            <div className="input-field p">
              <div className="first-last-name u">
                <div className="field-others one k">
                  <button className="readmore">Request a demo </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
