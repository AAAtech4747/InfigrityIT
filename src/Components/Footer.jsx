import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset,faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="wrapper">
          <div className="footer_inner row">
            <div className="footer_inner_box col-md-4">
              <a href="#" className="foot_logo">
                <h2>
                  Infinite. <span>Integrity.</span>
                </h2>
                <p>Enabling tomorrow</p>
                <img src="img/infigrity_icon.png" alt="" />
              </a>
            </div>
            <div className="footer_inner_box col-md-3">
              <h3 className="bi_r_24">Featured Services</h3>
              <ul>
                <li>
                  <Link to="/services/ecommerce-development" className="in_r_14">
                    Ecommerce Solution
                  </Link>
                </li>
                <li>
                  <Link to="/services/magento-development" className="in_r_14">
                    Magento Solution
                  </Link>
                </li>
                <li>
                  <Link to="/services/php-web-development" className="in_r_14">
                    Open Source Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/social-media-marketing-services" className="in_r_14">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/services/flutter-development" className="in_r_14">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link to="/services/wordpress-development" className="in_r_14">
                    CMS Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_inner_box col-md-2">
              <h3 className="bi_r_24">Company</h3>
              <ul>
                
                <li>
                  <Link className="in_r_14" to="/about-us">
                    About us
                  </Link>
                </li>
                <li>
                  <Link className="in_r_14" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer_inner_box col-md-3">
              <div className="footer_info">
                <address>
                  <img src="img/address_icon.svg" alt="" />
                  720, City Gate, Near Vishala Hotel, New Vasna, Ahmedabad
                  380007, Gujarat - India
                </address>
                <p>
                  <a href="tel:+919081118704">
                  <FontAwesomeIcon icon={faHeadset} />
                   
                    +91 9081 118704
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:contact@infigrityit.com"
                    onClick={() =>
                      (window.location = "mailto:contact@infigrityit.com")
                    }
                  >
                    <FontAwesomeIcon icon={faEnvelope} /> contact@infigrityit.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /wrapper */}
        <div className="copyright">
          <div className="wrapper">
            <div className="row">
              <p className="in_r_16">
                © Copyright Infigrity 2023. All Rights Reserved.
              </p>
              <ul>
                <li>
                  <Link className="in_r_14" to="/cookies">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link className="in_r_14" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* /copyright */}
      </footer>
      </div>
  );
};

export default Footer;
