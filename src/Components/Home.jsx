import React from "react";
import Helmet from "react-helmet";
import logo from "../favicon_black.png";
import { useEffect } from "react";
import banner_video from "../video/Infigrity.mp4";
import Vid2 from "../video/keyboardvideo.mp4";
import ScrollOut from "scroll-out";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Slider from "react-slick";
import Splitting from "splitting";
import { $ } from "react-jquery-plugin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import "react-modal-video/scss/modal-video.scss";
import { Power1, Elastic, gsap } from "gsap";
import { Link } from "react-router-dom";
import "react-modal-video/scss/modal-video.scss";
import { useLocation } from 'react-router-dom';
import "./custom.css"
import Cookies from 'js-cookie';


const Home = () => {


  
  
  
  //-------------------------------Scroll top Javascript---------------------------------//

  // $(document).ready(function() {
  //   $('.popup-youtube').magnificPopup({
  //     type: 'iframe'
  //   });
  // });
  
  //------------------ Testimonial Slider--------------------------//
  const TestimonialSlider = {
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "2rem",
    adaptiveHeight: true,
    speed: 600,
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
          centerMode: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  };
  //------------------ Usps Slider--------------------------//
  const UspSlider = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  //------------------ Slick Home Slider--------------------------//
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  
  //------------------------------- USEEFFECT START-------------------------------// 
  
  const location = useLocation();


  useEffect(() => {
    document.getElementById("p1").style.width="100% !important" ;
   
    //-----------------------Auto Animation--------------------------//
    const textLines = gsap.utils.toArray(".text-single");
    const loops = textLines.map((line, i) => {
      const links = line.querySelectorAll(".js-text"),
        tl = gsap.timeline({
          repeat: -1,
          defaults: { duration: 2 },
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            toggleActions: "restart none none reverse",
          },
        });
      tl.to(links, { xPercent: -100, stagger: 0.5, ease: "none" });
      return tl;
    });

    let currentScroll = 0;
    let scrollDirection = 1;

    function updateAnimations(direction) {
      loops.forEach((tl) => {
        tl.timeScale(direction);
      });
    }

    function handleScroll1() {
      const direction = window.pageYOffset > currentScroll ? 1 : -1;
      if (direction !== scrollDirection) {
        updateAnimations(direction);
        scrollDirection = direction;
      }
      currentScroll = window.pageYOffset;
    }

    textLines.forEach((line, i) => {
      const links = line.querySelectorAll(".js-text");
      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          loops[i].pause();
        });
        link.addEventListener("mouseleave", () => {
          loops[i].play();
        });
      });
    });

    window.addEventListener("scroll", handleScroll1);
    var menubcg = document.getElementById("navbar-toggle");

  //------------------------------SCROLL TOP-----------------------------------------//               
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    //------------------------ Add Sticky Class in Navbar------------------------------//
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        document.getElementById("header").classList.add("sticky"); // Add Class Sticky
      } else {
        document.getElementById("header").classList.remove("sticky"); // Remove Class Sticky
      }
    };

    //----------------------Splitting Animation Calling Function--------------------------//
    Splitting({
      target: "[data-splitting]",
      by: "chars",
      key: null,
    });
    //---------------------------- Scroll Out---------------------------------------------//
    ScrollOut();
    //-------------------------------Add Logo in Navabar---------------------------------//
    if (parseInt($(window).width()) < 991) {
      $('.logo_mobile').remove();
      $(
        '<div class="logo_mobile"><a href="/"><img src="img/logo.png" alt="Infigrity IT Services Pvt. Ltd."/></a></div>'
      ).appendTo(".navbar ");
     }

  
    //-------------------------------------video popup----------------------------------//
    // Wait for the document to finish loading
    document.addEventListener("DOMContentLoaded", function () {
      // Get the popup button and add a click event listener
      var popupBtn = document.querySelector(".popup-btn");
      popupBtn.addEventListener("click", function (event) {
        // Show the popup
        var videoPopup = document.querySelector(".video-popup");
        videoPopup.style.display = "block";

        // Prevent the default behavior of the link or button
        event.preventDefault();
      });

      // Get the popup background and add a click event listener
      var popupBg = document.querySelector(".popup-bg");
      popupBg.addEventListener("click", function (event) {
        // Hide the popup
        var videoPopup = document.querySelector(".video-popup");
        videoPopup.style.display = "none";

        // Prevent the default behavior of the element
        event.preventDefault();
      });

      // Get the close button and add a click event listener
      var closeBtn = document.querySelector(".close-btn");
      closeBtn.addEventListener("click", function (event) {
        // Hide the popup
        var videoPopup = document.querySelector(".video-popup");
        videoPopup.style.display = "none";

        // Prevent the default behavior of the element
        event.preventDefault();
      });
    });
  }, [location]);

  return (
  <div>
      <Helmet>
        <title>Infigrity IT Services - Infinite. Digital. Integrity.</title>
        <meta name="site_name" content="Infigrity IT Services - Infinite. Integrity."/>
        <meta name="type" content="article" />
        <meta name="title" content="Trusted Digital Development Company"/>
        <meta name="url" content="https://infigrityit.com/" />
        <meta name="image" content={logo} />
        <meta name="image:secure_url" content={logo} />
        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
        <script type="text/JavaScript" src="js/vendor/Draggable.min.js"></script>
        <script type="text/JavaScript" src="js/vendor/scripts.js"></script>
        <link href="css/ashiq.css" rel="stylesheet" />
        {/* <!-- Magnific Popup core CSS file --> */}
        <link rel="stylesheet" href="css/magnific-popup.css" />
        {/* <!-- jQuery 1.7.2+ or Zepto.js 1.0+ --> */}
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        {/* <script type="text/JavaScript" src="js/vendor/jquery-3.4.1.min.js"></script> */}
        {/* <script type="text/JavaScript" src="js/vendor/main.js"></script> */}
        
        <meta name="theme-color" content="#0c0c0c"></meta>
        <meta name="description" content="Leading global digital development company empowering businesses to thrive. Contact us for reliable digital development services."></meta>
      </Helmet>

        {/*-------------------------------------- Banner Section -------------------------------------- */}
        <section className="banner section">
          <div className="banner_inner">
            <video playsInline autoPlay muted loop id="banner_video">
              <source src={banner_video} type="video/mp4" />
            </video>
            <div className="banner_skills">
              <p>
              <span>Infinite</span>
              <span>Digital</span>
              <span>Integrity</span>
              <span>Infinite</span>
              <span>Design</span>
              <span>Integrity</span>
              <span>Infinite</span>
              <span>Develop</span>
              <span>Integrity</span>
              
              </p>
            </div>
            <div className="banner_inner_text">
              <div className="wrapper">
                <h1 className="bi_bl_80">
                  Infinite. <span>Integrity.</span>
                </h1>
                <p>
                  Enabling tomorrow
                  {/*?xml version="1.0" encoding="UTF-8"?*/}
                  <svg
                    id="Layer_2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32.16 9.5"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".cls-1{fill:#fff;}.cls-2{fill:#b2b5b5;}.cls-3{fill:#7f7f7f;}",
                        }}
                      />
                    </defs>
                    <g id="Layer_1-2">
                      <g>
                        <path
                          className="cls-1"
                          d="M11.36,3.73l-.45,2.01H0L.45,3.73H11.36Z"
                        />
                        <path
                          className="cls-2"
                          d="M19.17,0h3.01l3.98,4.75-5.65,4.75h-3.01l5.67-4.75L19.17,0Z"
                        />
                        <path
                          className="cls-3"
                          d="M13.17,0h3.01l3.98,4.75-5.65,4.75h-3.01l5.67-4.75L13.17,0Z"
                        />
                        <path
                          className="cls-1"
                          d="M25.17,0h3.01l3.98,4.75-5.65,4.75h-3.01l5.67-4.75L25.17,0Z"
                        />
                      </g>
                    </g>
                  </svg>
                </p>
                <figure>
                  <img src="img/header_shape.png" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/*-------------------------------------- /Usps Section-------------------------------------- */}
        <section className="usps_block section">
          <div className="wrapper">
            <div className="usps_block_inner">
              <ul>
                <Slider {...UspSlider}>
                  <li>
                    <div className="usps_block_inner_box">
                      <figure>
                        <img src="img/usps_icon_3.svg" alt="" />
                      </figure>
                      <div className="usps_block_inner_box_text">
                        <h3 className="bi_sm_20">Lower Initial Cost</h3>
                        <p className="in_r_14">
                        Your business is our business. We analyze to reduce your initial cost. We are budget friendly!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="usps_block_inner_box">
                      <figure>
                        <img src="img/usps_icon_2.svg" alt="" />
                      </figure>
                      <div className="usps_block_inner_box_text">
                        <h3 className="bi_sm_20">
                          Fully Flexible and Scalable
                        </h3>
                        <p className="in_r_14">
                          We are agile &amp; understand requirements. We
                          have the credentials to deliver great solutions!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="usps_block_inner_box">
                      <figure>
                        <img src="img/usps_icon_1.svg" alt="" />
                      </figure>
                      <div className="usps_block_inner_box_text">
                        <h3 className="bi_sm_20">Fast Time to Market</h3>
                        <p className="in_r_14">
                          Accelerator - Quick time to launch to the market. We
                          bring velocity to your business!
                        </p>
                      </div>
                    </div>
                  </li>
                </Slider>
              </ul>
            </div>
          </div>
        </section>

        {/*-------------------------------------- /.Simplify -----------------------------*/}
        <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/whoweare_img_1.png"  alt="" />
                </figure>
                <span>
                  <video playsInline autoPlay muted loop>
                    <source src={Vid2} type="video/mp4" />
                  </video>
                </span>
              </div>
              <div className="whoweare_inner_right">
                <h2 className="bi_bl_50">
                  Infigrity <strong>Infinite. Integrity.</strong>
                </h2>
                <span className="in_r_20">Client-Centric to the bone</span>
                <p className="in_r_16">
                Welcome to Infigrity, a leading global software development agency specializing in creating successful and profitable digital solutions for both B2C and B2B clients. With a strong focus on eCommerce, Digital Transformation, and Software Product Engineering, we offer scalable, reliable, and cost-effective services to clients worldwide.
                </p>
                <p className="in_r_16">
                Our team of experienced consultants excels in understanding client requirements and delivering projects on time and within budget. As a result, we have earned the reputation of being the preferred technology partner for organizations around the globe. Explore our website to learn more about our comprehensive solutions and how we can help drive your business forward.
                 </p>
                 <p className="in_r_16">
                 Connect with us today! Let's create a robust, feature-rich, future-forward solution for your business.
                 </p>
                <Link to="/about-us" className="btn_fill_black">
                  Read More
                  <span className="browser-window__link">
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*-------------------------------------- /whoweare --------------------------------------*/}
        <section className="services section" data-scroll="">
          <div className="wrapper">
            <div className="services_inner">
              <h2 className="bi_bl_50" data-splitting>
                We create extraordinary digital experiences.
              </h2>
              <p className="in_r_16">
                With perfect blend of passion and technology expertise, we help
                businesses to drive value by creating value for their customers.
              </p>
              <ul className="row">
                <li className="col-md-2">
                  <div className="services_inner_box">
                    <figure>
                      <img src="img/web_services.svg" alt="" />
                    </figure>
                    <h3 className="bi_r_20 " data-splitting>
                      Web Development
                    </h3>
                    {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                  </div>
                </li>
                <li className="col-md-2">
                  <div className="services_inner_box">
                    <figure>
                      <img src="img/digital_services.svg" alt="" />
                    </figure>
                    <h3 className="bi_r_20" data-splitting>
                      E-Commerce Development
                    </h3>
                    {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                  </div>
                </li>
                <li className="col-md-2">
                  <div className="services_inner_box">
                    <figure>
                      <img src="img/branding_services.svg" alt="" />
                    </figure>
                    <h3 className="bi_r_20 word" data-splitting="word">
                      Mobile App Development
                    </h3>
                    {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                  </div>
                </li>
                <li className="col-md-2">
                  <div className="services_inner_box">
                    <figure>
                      <img src="img/data_security.svg" alt="" />
                    </figure>
                    <h3 className="bi_r_20" data-splitting>
                      Graphic Designing
                    </h3>
                    {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                  </div>
                </li>
                <li className="col-md-2">
                  <div className="services_inner_box">
                    <figure>
                      <img src="img/digitalmarketing.svg" alt="" />
                    </figure>
                    <h3 className="bi_r_20" data-splitting>
                      Digital Marketing
                    </h3>
                    {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                  </div>
                </li>
                <li className="col-md-2">
                  <div className="services_inner_box">
                    <figure>
                      <img src="img/qualityassurance.svg" alt="" />
                    </figure>
                    <h3 className="bi_r_20" data-splitting>
                      Quality Assurance
                    </h3>
                    {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                  </div>
                </li>
              </ul>
              <Link to="/services" className="btn_fill_black">
                More Services{" "}
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </section>
        {/*-------------------------------------- /services --------------------------------------*/}
        <section section
          className="technologies section words chars splitting"
          data-scroll=""
        >
          {/* <div class="techno_vertical_title">OUR EXPERTISE</div> */}
          <div className="wrapper">
            <div className="technologies_inner">
              <h2 className="bi_bl_50">
                <span>OUR EXPERTISE</span> Technologies we work with
              </h2>
              <ul className="row">
                <li className="col-md-3">
                  <div className="technologies_inner_box">
                    <figure>
                     <Link to="/wordpress-development"> <img src="img/wordpress.svg" alt="" /></Link>
                    </figure>
                    <div className="technologies_inner_box_text">
                      <h3 className="bi_r_24">WordPress</h3>
                      <p className="in_r_16">
                        Written in the PHP language, WordPress is one of the
                        leading content management systems across the globe.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="technologies_inner_box">
                    <figure>
                      <Link to="/woocommerce-development"><img src="img/woocommerce.svg" alt="" /></Link>
                    </figure>
                    <div className="technologies_inner_box_text">
                      <h3 className="bi_r_24">WooCommerce</h3>
                      <p className="in_r_16">
                      Do you want to develop a smart eCommerce store at a low cost? WooCommerce plugin offers a scalable and superior features to the store owners.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="technologies_inner_box">
                    <figure>
                      <img src="img/magento.svg" alt="" />
                    </figure>
                    <div className="technologies_inner_box_text">
                    <Link to="/magento-development"><h3 className="bi_r_24">Magento</h3></Link>
                      <p className="in_r_16">
                        Magento has set a benchmark in the eCommerce industry by
                        offering some innovative benefits to the eCommerce store
                        owners.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="technologies_inner_box">
                    <figure>
                      <img src="img/shopify.svg" alt="" />
                    </figure>
                    <div className="technologies_inner_box_text">
                    <Link to="/shopify-development"><h3 className="bi_r_24">Shopify</h3></Link>
                      <p className="in_r_16">
                      Shopify is an online store builder that has more than 1,00,000 stores. Infigrity offers reliable and secure Shopify services for eCommerce stores.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="technologies_inner_box">
                    <figure>
                      <img src="img/reactjs.svg" alt="" />
                    </figure>
                    <div className="technologies_inner_box_text">
                    <Link to="/reactjs-development"> <h3 className="bi_r_24">React Js</h3></Link>
                      <p className="in_r_16">
                        Easily one of the top front-end JavaScript frameworks
                        out there, React is a popular choice for enterprise
                        apps.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="technologies_inner_box">
                    <figure>
                      <img src="img/nodejs.svg" alt="" />
                    </figure>
                    <div className="technologies_inner_box_text">
                      <Link to="/node-js-development"><h3 className="bi_r_24">Node Js</h3></Link>
                      <p className="in_r_16">
                      Node.js is a back-end JavaScript runtime environment and executes JavaScript code outside a web browser.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="technologies_inner_box">
                    <figure>
                      <img src="img/flutter.svg" alt="" />
                    </figure>
                    <div className="technologies_inner_box_text">
                      <Link to="/flutter-development"><h3 className="bi_r_24">Flutter</h3></Link>
                      <p className="in_r_16">
                        One of the hottest mobile technologies, Flutter has been
                        adopted by many global giants like eBay, Alibaba, and
                        Google.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="col-md-3">
                  <div className="technologies_inner_box">
                    <figure>
                      <img src="img/others.svg" alt="" />
                    </figure>
                    <div className="technologies_inner_box_text">
                      <Link to="/services"><h3 className="bi_r_24">Many Others</h3></Link>
                      <p className="in_r_16">
                        We are full fledge digital development company working
                        on many other technologies.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <Link to="/services"  className="btn_fill_white">
                More Technologies
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </section>
        
        {/*-------------------------------------- /.marquee --------------------------------------*/}
        <section className="successstories section mt-1" data-scroll="">
          <div className="successstories_vertical_title">portfolio</div>
          <div className="wrapper">
            <div className="successstories_inner row m-0 align-items-md-stretch">
              <div className="successstories_inner_left col-md-6">
                <h2 className="bi_bl_50" data-splitting>
                  We Create Success Stories
                </h2>
                <p className="in_r_16">
                  Explore our diverse projects and case studies, and it will
                  tell you more about our depth of expertise and the kind of
                  work we do, and how we approach it.
                </p>
                <Link to="/work" className="btn_fill_white">
                  Our Work{" "}
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
        {/*-------------------------------------- /successstories --------------------------------------*/}
        <section className="blog section" data-scroll="">
          <div className="wrapper">
            <div className="blog_inner">
              <div className="blog_inner_title">
                <h2 className="bi_bl_50" data-splitting>
                  Elevating Brands through innovation in Digital Transformation
                </h2>
                <p className="in_r_16">
                  Checkout our latest blogs which helps brand to become for
                  customer centric.
                </p>
              </div>

              <div className="blog_inner_slider">
                <Slider {...settings}>
                  <div className="blog_inner_slider_item">
                    <Link to="/the-benefits-of-google-analytics-4">
                      <figure>
                        <img src="img/blog_img_1.png" alt="" />
                        <span>#industry practices</span>
                      </figure>
                      <h3 className="bi_r_24">
                      The benefits of Google Analytics 4
                      </h3>
                      <p className="in_r_16">
                      Now is the time to start looking into the features and functionality GA4 offers, so you can proactively reap the benefits of the new version before Google actually forces you to move over which is always just stressful.Now is the time to start looking into the features and functionality GA4 offers, so you can proactively reap the benefits of the new version.
                      </p>
                    </Link>
                  </div>
                  <div className="blog_inner_slider_item">
                    <Link to="/mobile-marketing-in-ecommerce">
                      <figure>
                        <img src="img/blog_img_2.png" alt="" />
                        <span>#industry practices</span>
                      </figure>
                      <h3 className="bi_r_24">
                      Mobile Marketing in eCommerce
                      </h3>
                      <p className="in_r_16">
                      The device is not the future of marketing, it’s the present. Today, the customer journey often begins and ends on a smartphone. So, as a marketer, it’s your job to engage with your customers on their choice of device. Marketers can’t ignore the surge in M-Commerce, as consumers command an experience that rests on mobile optimization.
                      </p>
                    </Link>
                  </div>
                  <div className="blog_inner_slider_item">
                    <Link to="/ecommerce-digital-marketing-trends">
                      <figure>
                        <img src="img/blog_img_3.png" alt="" />
                        <span>#industry practices</span>
                      </figure>
                      <h3 className="bi_r_24">
                      Top 8 eCommerce Digital Marketing Trends in 2023
                      </h3>
                      <p className="in_r_16">
                      The eCommerce industry is constantly changing along with the eCommerce digital marketing trends, and this year was no different. More than ever, retailers are coming up with and improving their eCommerce businesses to cater to customers wherever they are.
                      </p>
                    </Link>
                  </div>
                  <div className="blog_inner_slider_item">
                    <Link to="/the-benefits-of-google-analytics-4">
                      <figure>
                        <img src="img/blog_img_1.png" alt="" />
                        <span>#industry practices</span>
                      </figure>
                      <h3 className="bi_r_24">
                      The benefits of Google Analytics 4
                      </h3>
                      <p className="in_r_16">
                      Now is the time to start looking into the features and functionality GA4 offers, so you can proactively reap the benefits of the new version before Google actually forces you to move over which is always just stressful.Now is the time to start looking into the features and functionality GA4 offers, so you can proactively reap the benefits of the new version.
                      </p>
                    </Link>
                  </div>
                  <div className="blog_inner_slider_item">
                    <Link to="/mobile-marketing-in-ecommerce">
                      <figure>
                        <img src="img/blog_img_2.png" alt="" />
                        <span>#industry practices</span>
                      </figure>
                      <h3 className="bi_r_24">
                      Mobile Marketing in eCommerce
                      </h3>
                      <p className="in_r_16">
                      The device is not the future of marketing, it’s the present. Today, the customer journey often begins and ends on a smartphone. So, as a marketer, it’s your job to engage with your customers on their choice of device. Marketers can’t ignore the surge in M-Commerce, as consumers command an experience that rests on mobile optimization.
                      </p>
                    </Link>
                  </div>
                  <div className="blog_inner_slider_item">
                    <Link to="/ecommerce-digital-marketing-trends">
                      <figure>
                        <img src="img/blog_img_3.png" alt="" />
                        <span>#industry practices</span>
                      </figure>
                      <h3 className="bi_r_24">
                      Top 8 eCommerce Digital Marketing Trends in 2023
                      </h3>
                      <p className="in_r_16">
                      The eCommerce industry is constantly changing along with the eCommerce digital marketing trends, and this year was no different. More than ever, retailers are coming up with and improving their eCommerce businesses to cater to customers wherever they are.
                      </p>
                    </Link>
                  </div>
                  
                  
                </Slider>
              </div>

              <a href="#" className="btn_fill_black">
                More Blogs{" "}
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </section>

         {/*-------------------------- OUR TESTINOMIAL-------------------------  */}
        {/* <section className="ourtestimonial section">
          <div className="wrapper">
            <div className="ourtestimonial_inner">
            
              
              <div className="ourtestimonial_slider">
                <Slider {...TestimonialSlider}>
                  <div className="t-item">
                    <div className="t-video">
                      <figure>
                      
                        <img className="popup-youtube" href="https://youtu.be/ryhI8VhAyYU?t=14" src="img/blog_img_1.png" alt="" />
                     
                      </figure>

                      <span>
                        <img
                          src="img/playbutton.svg"
                          class="helpLink"
                          alt=""
                          for='helpmodel'
                          data-assist="Click to View a Help Video"
                        />
                      </span>
                    </div>
                    <div className="t-text">
                      <h2 className="bi_bl_50" style={{color:"white"}}>Nuto-Wellness</h2>
                      <p>
                      I am truly grateful for Infigrity's expertise, creativity, and unwavering support throughout the website development journey. Thanks to their exceptional skills, we now have a website that perfectly represents Nuto Wellness and effectively communicates our mission to promote holistic well-being.I wholeheartedly recommend Infigrity IT Services to anyone seeking a talented web developer who is not only skilled but also deeply invested in their clients' success. 
                      Working with Infigrity has been an absolute pleasure, and I look forward to collaborating on future projects.
                      </p>
                      <div className="engineers_hired">
                        <p>Technologies Used:</p>
                        <div className="dev_images">
                          <figure>
                            <img src="img/wordpress.svg" alt="" />
                          </figure>
                          <figure>
                            <img src="img/woocommerce.svg" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="t-item">
                    <div className="t-video">
                      <figure>
                        <img src="img/blog_img_1.png" alt="" />
                      </figure>
                      <span>
                        <img src="img/playbutton.svg" alt="" />
                      </span>
                    </div>
                    <div className="t-text">
                      <h2 className="bi_bl_50" style={{color:"white"}}>Nuto-Wellness</h2>
                      <p>
                      I am truly grateful for Infigrity's expertise, creativity, and unwavering support throughout the website development journey. Thanks to their exceptional skills, we now have a website that perfectly represents Nuto Wellness and effectively communicates our mission to promote holistic well-being.I wholeheartedly recommend Infigrity IT Services to anyone seeking a talented web developer who is not only skilled but also deeply invested in their clients' success. 
                      Working with Infigrity has been an absolute pleasure, and I look forward to collaborating on future projects.
                      </p>
                      <div className="engineers_hired">
                        <p>Technologies Used:</p>
                        <div className="dev_images">
                        <figure>
                            <img src="img/wordpress.svg" alt="" />
                          </figure>
                          <figure>
                            <img src="img/woocommerce.svg" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="t-item">
                    <div className="t-video">
                      <figure>
                        <img src="img/blog_img_1.png" alt="" />
                      </figure>
                      <span>
                        <img src="img/playbutton.svg" alt="" />
                      </span>
                    </div>
                    <div className="t-text">
                    <h2 className="bi_bl_50" style={{color:"white"}}>Nuto-Wellness</h2>
                      <p>
                      I am truly grateful for Infigrity's expertise, creativity, and unwavering support throughout the website development journey. Thanks to their exceptional skills, we now have a website that perfectly represents Nuto Wellness and effectively communicates our mission to promote holistic well-being.I wholeheartedly recommend Infigrity IT Services to anyone seeking a talented web developer who is not only skilled but also deeply invested in their clients' success. 
                      Working with Infigrity has been an absolute pleasure, and I look forward to collaborating on future projects.
                      </p>
                      <div className="engineers_hired">
                      <p>Technologies Used:</p>
                        <div className="dev_images">
                          <figure>
                            <img src="img/wordpress.svg" alt="" />
                          </figure>
                          <figure>
                            <img src="img/woocommerce.svg" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="t-item">
                    <div className="t-video">
                      <figure>
                        <img src="img/blog_img_1.png" alt="" />
                      </figure>
                      <span>
                        <img src="img/playbutton.svg" alt="" />
                      </span>
                    </div>
                    <div className="t-text">
                    <h2 className="bi_bl_50" style={{color:"white"}}>Nuto-Wellness</h2>
                      <p>
                      I am truly grateful for Infigrity's expertise, creativity, and unwavering support throughout the website development journey. Thanks to their exceptional skills, we now have a website that perfectly represents Nuto Wellness and effectively communicates our mission to promote holistic well-being.I wholeheartedly recommend Infigrity IT Services to anyone seeking a talented web developer who is not only skilled but also deeply invested in their clients' success. 
                      Working with Infigrity has been an absolute pleasure, and I look forward to collaborating on future projects.
                      </p>
                      <div className="engineers_hired">
                      <p>Technologies Used:</p>
                        <div className="dev_images">
                          <figure>
                            <img src="img/wordpress.svg" alt="" />
                          </figure>
                          <figure>
                            <img src="img/woocommerce.svg" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="t-item">
                    <div className="t-video">
                      <figure>
                        <img src="img/blog_img_1.png" alt="" />
                      </figure>
                      <span>
                        <img src="img/playbutton.svg" alt="" />
                      </span>
                    </div>
                    <div className="t-text">
                    <h2 className="bi_bl_50" style={{color:"white"}}>Nuto-Wellness</h2>
                      <p>
                      I am truly grateful for Infigrity's expertise, creativity, and unwavering support throughout the website development journey. Thanks to their exceptional skills, we now have a website that perfectly represents Nuto Wellness and effectively communicates our mission to promote holistic well-being.I wholeheartedly recommend Infigrity IT Services to anyone seeking a talented web developer who is not only skilled but also deeply invested in their clients' success. 
                      Working with Infigrity has been an absolute pleasure, and I look forward to collaborating on future projects.
                      </p>
                      <div className="engineers_hired">
                      <p>Technologies Used:</p>
                        <div className="dev_images">
                          <figure>
                            <img src="img/wordpress.svg" alt="" />
                          </figure>
                          <figure>
                            <img src="img/woocommerce.svg" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="t-item">
                    <div className="t-video">
                      <figure>
                        <img src="img/blog_img_1.png" alt="" />
                      </figure>
                      <span>
                        <img src="img/playbutton.svg" alt="" />
                      </span>
                    </div>
                    <div className="t-text">
                    <h2 className="bi_bl_50" style={{color:"white"}}>Nuto-Wellness</h2>
                      <p>
                      I am truly grateful for Infigrity's expertise, creativity, and unwavering support throughout the website development journey. Thanks to their exceptional skills, we now have a website that perfectly represents Nuto Wellness and effectively communicates our mission to promote holistic well-being.I wholeheartedly recommend Infigrity IT Services to anyone seeking a talented web developer who is not only skilled but also deeply invested in their clients' success. 
                      Working with Infigrity has been an absolute pleasure, and I look forward to collaborating on future projects.
                      </p>
                      <div className="engineers_hired">
                      <p>Technologies Used:</p>
                        <div className="dev_images">
                          <figure>
                            <img src="img/wordpress.svg" alt="" />
                          </figure>
                          <figure>
                            <img src="img/woocommerce.svg" alt="" />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section> */}
        {/* --------------------------------------/blog --------------------------------------*/}
        <section className="letstalk section" data-scroll="">
          <div className="wrapper">
            <div className="letstalk_inner">
              <h2 className="bi_r_24" data-splitting>
                We’re here to help
              </h2>
              <h3 className="bi_bl_50">
                Here’s a set of tailored solutions to help you and your
                customers navigate these times and beyond
              </h3>
              <Link to={"/contact-us"} className="btn_fill_white">
                Let's talk
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>




            </div>
            </div>
        </section>
        {/*-------------------------------------- /letstalk-------------------------------------- */}
        
   
      </div>
  );
};

export default Home;
