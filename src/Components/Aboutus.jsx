import React from "react";
import { Helmet } from "react-helmet";
import logo from "../favicon_black.png";
import { useEffect, useState } from "react";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import { Link } from "react-router-dom";


const Aboutus = () => {
  useEffect(() => {
    document.body.classList.add("inner");

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

     //----------------------Splitting Animation Calling Function--------------------------//
     
     ScrollOut();
     
     
     Splitting({
      target: "[data-splitting]",
      by: "chars",
      key: null,
    });

    return () => {
      document.body.classList.remove("inner");
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Infigrity IT Services Pvt. Ltd. </title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Trusted Development Partner"
        />
        <meta
          property="og:description"
          content="Leading global digital development company. Learn more about our values, team, and commitment.	"/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"/>
        <script type="text/JavaScript" src="js/vendor/Draggable.min.js"></script>
      <script type="text/JavaScript" src="js/vendor/scripts.js"></script>
      </Helmet>
    
    
      <div
        className="breadcrumb"
        style={{ background: "url(../img/images_1.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <h1>About us</h1>
            </li>
          </ul>
        </div>
      </div>
      {/*---------------------- We have the credentials to deliver great solutions! */}
      
      <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/whoweare_img1.jpg"  alt="" />
                </figure>
                <span>
                  <video playsInline autoPlay muted loop>
                    {/* <source src={Vid2} type="video/mp4" /> */}
                  </video>
                </span>
              </div>
              <div className="whoweare_inner_right">
                <h2 className="bi_bl_50">
                We have the credentials to deliver great solutions!
                </h2>
                
                <p className="in_r_16">
                Infigrity is a global software development company agency that excels in working with clients to create successful and profitable B2C and B2B based digital solutions. Our core business is providing scalable, reliable, and affordable eCommerce, Digital Transformation, and Software Product Engineering to clients worldwide. Our flexible delivery approaches and experienced consultants have delivered projects on time and on budget enabling us to become the technology partner of choice for many organizations across the globe.
                </p>
               
                <Link to="/work" className="btn_fill_black">
                  Read More
                  <span className="browser-window__link">
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      
      <section className="infinite_infigrity" data-scroll="">
        <div className="wrapper">
          <div className="inner">
            <h1 className="bi_bl_50" data-splitting>INFINITE. INTEGRITY.</h1>
            <p>
              Infigrity is a fusion word of Infinite and Integrity, which
              suggests we are boundless, denoted by our logo.Infigrity has the
              ambition to go for limitless integration to accomplish the world's
              digital requirements.We would be really happy to welcome you to
              Integrate with us, Infinitely.
            </p>
          </div>
        </div>
      </section>
      {/*---------------------- We have the credentials to deliver great solutions! */}
      <section className="whoweare" data-scroll="">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="img/aboutus_bg.png" alt="" />
              </figure>
              {/* <span>
            <img src="img/whoweare_img_2.png" alt="" />
          </span> */}
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50 words chars splitting">Our ethos are our foundation</h2>
              <ul>
                <li>
                  <div className="foundation_box">
                    <h5>1</h5>
                    <p>You care about more than just code</p>
                    <strong>WE CREATE VALUE</strong>
                  </div>
                </li>
                <li>
                  <div className="foundation_box">
                    <h5>2</h5>
                    <p>You expect proactiveness</p>
                    <strong>WE SHARE OUR EXPERIENCES</strong>
                  </div>
                </li>
                <li>
                  <div className="foundation_box">
                    <h5>3</h5>
                    <p>You want us to look beyond a deadline</p>
                    <strong>WE AIM TO START A GROWTH JOURNEY</strong>
                  </div>
                </li>
                <li>
                  <div className="foundation_box">
                    <h5>4</h5>
                    <p>We align our success with yours</p>
                    <strong>
                      WE STAND BY YOU WHILE YOU BASK IN YOUR SUCCESS
                    </strong>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*------------------------------------------------------- Success Stories  */}
      <section className="successstories section" data-scroll="">
        <div className="successstories_vertical_title">portfolio</div>
        <div className="wrapper">
          <div className="successstories_inner row m-0 align-items-md-stretch">
            <h2 class="bi_bl_50" data-splitting>Trusted by leading brands</h2>
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
            <div className="successstories_inner_right col-md-6">
              <ul className="row m-0 text-center">
                <li className="col-md-4">
                  <a href="#">
                    <img src="img/LOGO.jpg" alt="Nuto Wellness" />
                  </a>
                </li>
                <li className="col-md-4">
                  <a href="#">
                    <img src="img/LOGO (5).png" alt="Zahra Mediplus Hospital" />
                  </a>
                </li>
                <li className="col-md-4">
                  <a href="#">
                    <img src="img/LOGO (6).png" alt="Uniqstox" />
                  </a>
                </li>
                <li className="col-md-4">
                  <a href="#">
                    <img src="img/LOGO (7).png" alt="" />
                  </a>
                </li>
                <li className="col-md-4">
                  <a href="#">
                    <img src="img/LOGO (8).png" alt="" />
                  </a>
                </li>
                <li className="col-md-4">
                  <a href="#">
                    <img src="img/LOGO (9).png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/*-------------------------------------------------------OUR ESSENCE   */}

      {/*-------------------------------------------------------Foundation   */}
      <section className="letstalk section">
        <div className="wrapper">
          <div className="letstalk_inner">
            <h2 className="bi_r_24 bi_bl_50">OUR ESSENCE</h2>

            <h3 className="bi_bl_50">Professional, Passionate and Proactive</h3>

            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Live, Breathe Technology</h3>
                    <p className="in_r_16">
                      Our hunger for technology innovation and trends topped
                      with extensive domain knowledge makes our footing firm in
                      where we stand.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Delivery Solution</h3>
                    <p className="in_r_16">
                      Our firm belief in continuous growth, learning and value
                      for commitments make us deliver solutions that meet actual
                      business needs and solve problems, not just technical
                      advancements.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Being Humane</h3>
                    <p className="in_r_16">
                      Infigrity fosters a culture of engagement and trust with
                      all it deals with - clients, vendors and employees. We
                      laugh, argue, toil, play and succeed as one big family.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <Link to="/contact-us" className="btn_fill_white">
              Let's talk
              <span className="browser-window__link">
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/*---------------------------------------------------------- /whoweare */}
      <section className="corevalue_block">
        <div className="wrapper">
          <div className="corevalue_block_inner">
            <div className="big-circle">
              <div className="icon-block">
                <span>thinking ahead enabling tomorrow, today</span>
              </div>
              <div className="icon-block">
                <span>courage to go above &amp; beyond</span>
              </div>
              <div className="icon-block">
                <span>integrity in everything we do</span>
              </div>
              <div className="icon-block">
                <span>client-centric to the bone</span>
              </div>
            </div>
            <div className="circle">
              <div className="icon-block">
                <span>respect for each and all</span>
              </div>
              <div className="icon-block">
                <span>teamwork to grow and succeed together</span>
              </div>
              <div className="icon-block">
                <span>teamwork to grow and succeed together</span>
              </div>
              <div className="icon-block">
                <span>Everything starts with inspired people.</span>
              </div>
            </div>
            <div className="center-logo">
              <img src="img/values.svg" alt="" />
              <strong>Our Values</strong>
            </div>
          </div>
        </div>
      </section>
      {/* /.corevalue_block */}
      <section className="corevalue2_block">
        <div className="wrapper">
          <h2 className="bi_bl_50">Core Values</h2>
          <p className="in_r_16">
            Infigrity IT heart and soul revolves around its key values
          </p>
          <div className="corevalue2_block_inner">
            <div className="corevalue2_box">
              <figure>
                <img src="img/valuesimg_1.jpg" alt="" />
              </figure>
              <span>thinking ahead enabling tomorrow, today</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="img/valuesimg_2.jpg" alt="" />
              </figure>
              <span>courage to go above &amp; beyond</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="img/valuesimg_3.jpg" alt="" />
              </figure>
              <span>integrity in everything we do</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="img/valuesimg_4.jpg" alt="" />
              </figure>
              <span>client-centric to the bone</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="img/valuesimg_5.jpg" alt="" />
              </figure>
              <span>respect for each and all</span>
            </div>
            <div className="corevalue2_box">
              <figure>
                <img src="img/valuesimg_6.jpg" alt="" />
              </figure>
              <span>Everything starts with inspired people.</span>
            </div>
          </div>
        </div>
      </section>
      {/* /.corevalue2_block */}

      <section className="letstalk section">
        <div className="wrapper">
          <div className="letstalk_inner">
            <h2 className="bi_r_24" data-splitting>
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

      {/* /letstalk */}

      
      </div>
  );
};

export default Aboutus;
