import React from 'react'
import "bootstrap/dist/js/bootstrap";
import { Link, NavLink } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { $ } from 'react-jquery-plugin'

import "../App.css"
import { Helmet } from 'react-helmet';
import './custom.css'

<Helmet>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</Helmet>

const Header = () => {

 
 
   
 
  
 
  useEffect(() => {
    
  

    $(".navbar ul.navbar-nav li a").on("click", function() {
      $('.menu-item').removeClass('active');
      $(this).closest('li.menu-item').addClass('active');
  });
 
//-------------------------Hide Navbar after click event-----------------------------------// 
const navLinks = document.querySelectorAll('.navbar-nav li a');

    // Attach a click event listener to each anchor element
navLinks.forEach(link => {
  link.addEventListener('click', function() {
       // Check if the clicked link does not have the class 'dropdown-toggle'
    if (!this.classList.contains('dropdown-toggle')) {
      // Hide the navbar by adding the 'collapse' class to the '.navbar-collapse' element
      const navbarCollapse = document.querySelector('.navbar-collapse');
      navbarCollapse.classList.add('collapse');
      navbarCollapse.classList.remove('show');
    }
  });
});

$(document).ready(function() {
  // Close mega menu when clicking on a menu link
  $('.menu-link').click(function() {
    $('.mega-menu').removeClass('megamenu'); // Assuming you have a CSS class to hide or close the mega menu
  });
});


  }, [])


 
       
 
  return (
   <div>
     
  <header  id="header">
    <div className="wrapper">
      <div className="header_content">
        <nav className="navbar navbar-expand-lg p-0">
          <div
            className="collapse navbar-collapse nav justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex flex-rowflex-wrap justify-content-center align-items-center">
            <li className="menu-item">
             
             <Link className='nav-link d-block p-0 in_r_14' id='scroll-to-top-btn' to="/">Home</Link>
             </li>
              
              
              <li className="menu-item dropdownmenu">
                <Link className="nav-link d-block p-0 in_r_14 dropdown_btn" to="/services">
                  Services
                </Link>
                <div className="megamenu">
                  <div className="wrapper">
                    <div className="megamenu_inner">
                      <div className="mega-links">
                        <h2>
                          Magento Solution
                          <span>
                            <img src="img/expert.svg" alt="" />
                          </span>
                        </h2>
                        <ul>
                         
                          <li>
                            <Link to={'/services/magento-2-migration-service'}  >Magento 2 Migration Service</Link>
                          </li>
                          <li>
                            <Link to={'/services/ecommerce-development'}>Ecommerce Development</Link>
                          </li>
                          <li>
                            <Link to={'/services/enterprise-development'}>Enterprise Development</Link>
                          </li>
                          <li>
                            <Link to={'/services/magento-support-plan'}>Magento Support Plan</Link>
                          </li>
                          <li>
                            <Link to={'/services/magento-extension'}>Magento Extension</Link>
                          </li>
                          <li>
                            <Link to={'/services/magento-upgrade-service'}>Magento Upgrade Service</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-links">
                        <h2>Ecommerce Solution</h2>
                        <ul>
                        <li>
                            <Link to={"/services/magento-development"}>Magento Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/shopify-development"}>Shopify Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/woocommerce-development"}>WooCommerce Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/magento-ecommerce"}>Ecommerce Solutions</Link>
                          </li>

                        </ul>
                      </div>
                      <div className="mega-links">
                        <h2>Open Source Development</h2>
                        <ul>
                          <li>
                            <Link to={"/services/php-web-development"}>PHP Web Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/laravel-development"}>Laravel Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/node-js-development"}>Node JS Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/angular-js-development"}>Angular JS Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/reactjs-development"}>React JS Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/custom-web-development"}>Custom Web Design</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-links">
                        <h2>Mobile App Development</h2>
                        <ul>
                          <li>
                            <Link to={"/services/android-app-development"}>Android App Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/iphone-app-development"}>iPhone App Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/flutter-development"}>Flutter Development</Link>
                          </li>
                          <li>
                            <Link to={"/services/react-native-development"}>React Native Development</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-links">
                        <h2>Digital Marketing</h2>
                        <ul>
                          <li>
                            <Link to={"/services/seo-services"}>SEO Services</Link>
                          </li>
                          <li>
                            <Link to={"/services/ppc-management-services"}>PPC Management</Link>
                          </li>
                          <li>
                            <Link to={"/services/social-media-marketing-services"}>Social Media Marketing</Link>
                          </li>
                          <li>
                            <Link to={"/services/content-marketing-services"}>Content Marketing</Link>
                          </li>
                          </ul>
                      </div>
                      <div className="mega-links">
                        <h2>CMS Development</h2>
                        <ul>
                          <li>
                            <Link to={"/services/wordpress-development"}>WordPress Development</Link>
                          </li>
                          
                          <li>
                            <Link to={"/services/responsive-web-design"}>Responsive Web Design</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="mega-links">
                        <h2>Quality Engineering</h2>
                        <ul>
                          <li>
                            <Link  to={"/services/automation-testing-services"}>Automation Testing</Link>
                          </li>
                          <li>
                            <Link to={"/services/performance-testing-services"}>Performance Testing</Link>
                          </li>
                          <li>
                            <Link to={"/services/mobile-testing-services"}>Mobile Testing</Link>
                          </li>
                          <li>
                            <Link to={"/services/security-assessment-and-testing"}>Security Assessment &amp; Testing</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="megamenuconnect">
                    <div className="wrapper">
                      <div className="megamenuconnect_inner d-flex flex-row flex-wrap justify-content-between align-items-center">
                        <p>
                          Let our expert IT brains help you with your IT
                          challenges
                        </p>
                        <Link to="/contact-us" className="btn_fill_white">
                          LET'S CONNECT
                          <span className="browser-window__link">
                            <i className="fas fa-chevron-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className="menu-item">
               
              <Link className='nav-link d-block p-0 in_r_14' id='scroll-to-top-btn' to="/industries">Industries</Link>
              </li>
              <li className="logo">
              
                  <Link to="/">
                  <img src="img/logo.png" alt=""  /> 
              
                </Link>
              </li>
              <li className="menu-item">
              <Link className='nav-link d-block p-0 in_r_14' id='scroll-to-top-btn' to="/work">Work</Link>
               
                
              </li>
              <li className="menu-item">
               
                 <Link className='nav-link d-block p-0 in_r_14' id='scroll-to-top-btn'  to="/about-us">About Us</Link>
                 
                
           
              </li>
              <li className="menu-item">
                {/* <a className="nav-link d-block p-0 in_r_14" href="#">
                  Let's Talk
                </a> */}

                <Link className='nav-link d-block p-0 in_r_14' id='scroll-to-top-btn' to="/contact-us">Let's Talk</Link>
              </li>
            </ul>
          </div>
          {/* #navbarNav */}
          <button
            className="navbar-toggler navbar-toggle navbar-toggle-home"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbar-toggle"
          >
            <div className="button-box button-box-home" id="ButtonBox">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </div>
          </button>
          
          {/* /container */}
        </nav>
        {/* /nav */}
      </div>
    </div>
    {/* header_content */}
  </header>
  
  {/* /header */}
</div>

  )
}

export default Header