import React, {Fragment} from 'react';
import getImage from '../../utils/defaultImgMap.js';
import './Footer.css';

const Footer = () => {
  return (
    <Fragment>
      <div className="weekend-task-container">
        <div className="weekend-task">
          <img className="weekend-task-image" src={getImage("weekend")} alt=""/>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-section-container">
          <div className="footer-section">
            <div className="footer-sub-section">
              <h5 className="footer-section-heading">Contact Us</h5>
              <ul className="footer-section-list">
                <li>
                  <a href="tel:+448001078665">0800 107 8665</a>
                </li>
                <li className="footer-section-item">
                  <a href="tel:+441698819000">01698 819 000</a>
                </li>
                <li>
                  <a href="mailto:info@toolstop.co.uk">info@toolstop.co.uk</a>
                </li>
              </ul>
            </div>
            <div className="footer-sub-section">
              <h5 className="footer-section-heading">Opening Hours</h5>
              <ul className="footer-section-list">
                <li>
                  <a href="/">Monday - Friday 8am - 5pm</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <h5 className="footer-section-heading">Help</h5>
            <ul className="footer-section-list">
              <li>
                <a href="https://www.toolstop.co.uk/about-us">About us</a>
              </li>
              <li className="footer-section-item">
                <a href="https://www.toolstop.co.uk/contact-us">Contact us</a>
              </li>
              <li>
                <a href="https://www.toolstop.co.uk/customer-services">Customer services</a>
              </li>
              <li className="footer-section-item">
                <a href="https://www.toolstop.co.uk/frequently-asked-questions">FAQs</a>
              </li>
              <li>
                <a href="https://www.toolstop.co.uk/showroom/">Showroom</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h5 className="footer-section-heading">Shopping</h5>
            <ul className="footer-section-list">
              <li>
                <a href="https://www.toolstop.co.uk/blog/">Blog</a>
              </li>
              <li className="footer-section-item">
                <a href="https://www.toolstop.co.uk/brands">Shop by brand</a>
              </li>
              <li>
                <a href="https://www.toolstop.co.uk/terms-and-conditions/">Terms and conditions</a>
              </li>
              <li className="footer-section-item">
                <a href="https://www.toolstop.co.uk/privacy-policy/">Privacy notice</a>
              </li>
              <li>
                <a href="https://www.toolstop.co.uk/accessibility/">Accessibility</a>
              </li>
              <li className="footer-section-item">
                <a href="https://www.toolstop.co.uk/competitions/">Competitions</a>
              </li>
              <li>
                <a href="https://www.toolstop.co.uk/toolstop-rewards/">Toolstop Rewards</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <div className="footer-sub-section">
              <h5 className="footer-section-heading">Delivery</h5>
              <ul className="footer-section-list">
                <li>
                  <a href="https://www.toolstop.co.uk/track-your-order/">Track your order</a>
                </li>
                <li className="footer-section-item">
                  <a href="https://www.toolstop.co.uk/delivery/">Delivery and collection</a>
                </li>
                <li>
                  <a href="https://www.toolstop.co.uk/returns/">Returns and refunds</a>
                </li>
              </ul>
            </div>
            <div className="footer-sub-section">
              <h5 className="footer-section-heading">Finance</h5>
              <ul className="footer-section-list">
                <li>
                  <a href="https://www.toolstop.co.uk/finance/">Finance options</a>
                </li>
                <li className="footer-section-item">
                  <a href="https://www.toolstop.co.uk/ways-to-pay/">Ways to pay</a>
                </li>
                <li>
                  <a href="https://www.toolstop.co.uk/vat/">VAT information</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="github-container">
        <a href="https://github.com/CrugBarat/toolstop_React">
          <img className="github-image" src={getImage("github")} alt=""/>
        </a>
      </div>
    </Fragment>
  )
}

export default Footer;
