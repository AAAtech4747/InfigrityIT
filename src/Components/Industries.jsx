import React from "react";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollOut from "scroll-out";
// import "./custom.css"
import Splitting from "splitting";
import "./custom.css"

const Industries = () => {
  useEffect(() => {
    document.body.classList.add("inner");
       //----------------------Splitting Animation Calling Function--------------------------//
       Splitting({
        target: "[data-splitting]",
        by: "chars",
        key: null,
      });
      //---------------------------- Scroll Out---------------------------------------------//
      ScrollOut();

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return () => {
      document.body.classList.remove("inner");

    
    };
  });
  return (
    <div>
      <Helmet>
        <title>Industries We Serve</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Trusted Development Company for Industries"
        />
        <meta property="og:description" content="Custom digital development solutions for various industries. Explore our industry-specific services." />
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script> */}
        {/* <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css" /> */}
{/* <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting-cells.css" /> */}
{/* <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script> */}
<link href="css/ashiq.css" rel="stylesheet" />
<script type="text/JavaScript" src="js/vendor/Draggable.min.js"></script>
      <script type="text/JavaScript" src="js/vendor/scripts.js"></script>
<meta name="theme-color" content="#0c0c0c"></meta>
      </Helmet>

      <div
        className="breadcrumb"
        style={{ background: "url(../img/images_4.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Industries</h1>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="centerh">
          <h2 className="bi_bl_50">Delivering Digital Excellence Across Industries </h2>
        </div>
        <div className="centerp">
          <p className="in_r_16">We employ our expertise, capabilities and insights into curating world-class digital solutions for various industries across the globe.</p>
        </div>
       </div>

       <section className="corevalue2_block">
        <div className="wrapper">
          
          <div className="corevalue2_block_inner">
            <div className="corevalue2_box">
              <figure>
                <img src="../img/retail and ecommerce.jpg" alt="" />
              </figure>
              <span>E-commerce and Retail</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="../img/Fashion & Apparels.jpg" alt="" />
              </figure>
              <span>Fashion and Apparel &amp; beyond</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="../img/healthcare.webp" alt="" />
              </figure>
              <span>Healthcare and Medical</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="../img/education.png" alt="" />
              </figure>
              <span>Education</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="../img/travel_hospility.jpg" alt="" />
              </figure>
              <span>Travel and Hospitality</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="../img/Fashion & Apparels.jpg" alt="" />
              </figure>
              <span>Manufacturing and Industrial</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="../img/food-and-beverage-service.jpg" alt="" />
              </figure>
              <span>Food and Beverage</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="../img/Professional-Service.jpg" alt="" />
              </figure>
              <span>Professional Services</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="../img/non profetional.webp" alt="" />
              </figure>
              <span>Non-profit Organizations</span>
            </div>
          </div>
        </div>
      </section>
    

    {/*-------------------------------------- SUCCESS STORIES --------------------------------------*/}
    <section className="successstories section mt-1" data-scroll="">
          <div className="successstories_vertical_title">portfolio</div>
          <div className="wrapper">
            <div className="successstories_inner row m-0 align-items-md-stretch">
              <div className="successstories_inner_left col-md-6">
                <h2 className="bi_bl_50" data-splitting>
                We align our success with our client’s success
                </h2>
                <p className="in_r_16">
                Our client-centric approach delivers client satisfaction consistently.
                </p>
                <Link to="/work" className="btn_fill_white">
                  Our Work
                  <span className="browser-window__link">
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
              <div className="successstories_inner_right col-md-6">
                <ul className="row m-0 text-center">
                  <li className="col-md-4">
                    <a href="#">
                      <img src="img/portfolio/Nuto.png" alt="Nuto Wellness" />
                    </a>
                  </li>
                  <li className="col-md-4">
                    <a href="#">
                      <img
                        src="img/portfolio/ZMH.png"
                        alt="Zahra Mediplus Hospital"
                      />
                    </a>
                  </li>
                  <li className="col-md-4">
                    <a href="#">
                      <img src="img/portfolio/uniqstox.png" alt="Uniqstox" />
                    </a>
                  </li>
                  <li className="col-md-4">
                    <a href="#">
                      <img src="img/portfolio/AIO.png" alt="" />
                    </a>
                  </li>
                  <li className="col-md-4">
                    <a href="#">
                      <img src="img/portfolio/frutopop.png" alt="" />
                    </a>
                  </li>
                  <li className="col-md-4">
                    <a href="#">
                      <img src="img/portfolio/ishqbiryani.gif" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

       {/*---------------------------------- LETS TALK-------------------------  */}
      <section className="letstalk section">
        <div className="wrapper">
          <div className="letstalk_inner">
            <h2 className="bi_r_24">
              We’re here to help
            </h2>
            <h3 className="bi_bl_50">
              Here’s a set of tailored solutions to help you and your customers
              navigate these times and beyond
            </h3>
            <Link to="/contact-us" className="btn_fill_white">
              Let's talk
              <span className="browser-window__link">
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
     
      </div>
  );
};

export default Industries;
