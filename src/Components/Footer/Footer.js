import React, { Component } from 'react';
import '../Footer/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="wrapper">
          <div className="footer_form">
            <div className="footer1">
              <div className="logo">CLASS404</div>
              <div>Building a world</div>
              <div>where anyone can live doing</div>
              <div>what they love</div>
              <div className="store">🇺🇸 English/ Korean Store</div>
            </div>
            <div className="footer2">
              <p>CLASS404</p>
              <div>Home</div>
              <div>For Business</div>
              <div>Carreer</div>
              <div>User Guide</div>
            </div>
            <div className="footer3">
              <p>Creator</p>
              <div>Become a Creator</div>
              <div>Creator Guide</div>
            </div>
            <div className="footer4">
              <p>Support</p>
              <button>Contact us</button>
              <div>Office hours: 10:00-18:00 </div>
              <div>(KST)</div>
            </div>
          </div>
          <div className="footer_form2">
            <div className="sns">
              <p>
                <a href="https://class101.net/">CLASS404 Korea</a>
                <span> ･ </span>
                <a href="https://class101.net/">CLASS404 USA</a>
                <span> ･ </span>
                <a href="https://class101.net/">CLASS404 Japan</a>
              </p>
              <p>
                <a href="https://class101.net/">Instagram</a>
                <span> ･ </span>
                <a href="https://class101.net/">Youtube</a>
                <span> ･ </span>
                <a href="https://class101.net/">Facebook</a>
                <span> ･ </span>
                <a href="https://class101.net/">Naverpost</a>
              </p>
              <p>
                <a href="https://class101.net/">Naverblog</a>
                <span> ･ </span>
                <a href="https://class101.net/">Playstore</a>
                <span> ･ </span>
                <a href="https://class101.net/">Appstore</a>
              </p>
            </div>
            <div className="terms_conditions">
              <div className="terms">
                <p>
                  <a href="https://class101.net/">Terms and conditions</a>
                  <span> ･ </span>
                  <a href="https://class101.net/">
                    <span>Privacy Policy</span>
                  </a>
                  <span> ･ </span>
                  <a href="https://class101.net/">Refund Policy</a>
                  <span> ･ </span>
                  <a href="https://class101.net/">business information</a>
                  <a href="https://class101.net/">Partnership</a>
                  <span> ･ </span>
                  <a href="https://class101.net/">For Business</a>
                </p>
                <p>
                  <a href="https://class101.net/">Terms for Subscription</a>
                </p>
              </div>
              <p>
                <div className="address">
                  <a href="https://class101.net/">
                    CLASS 101, LLC. | CEO Jiyeon Ko | support@class101.net | The
                    18th floor of the 10 Severance Building in Tongil-ro,
                    Jung-gu, Seoul
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
