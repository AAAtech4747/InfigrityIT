import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";


const Phpdevlopment = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

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

  useEffect(() => {
    document.body.classList.add("inner");

    return () => {
      document.body.classList.remove("inner");
    };
  }, []);

  return (
    <div>
    <Helmet>
        <title>PHP Web Development Services</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Professional PHP Solutions"
        />
        <meta
          property="og:description"
          content="Expert PHP web development services for dynamic and interactive websites. Partner with us for professional development services.	"/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
      </Helmet>
      {/*------------------------------- Banner Section---------------------------------- */}
      <div
        className="breadcrumb"
        style={{ background: "url(../../img/php-BANNER.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Php Development</h1>
            </li>
          </ul>
        </div>
      </div>
      {/* -------------------------Magento Migration Section ------------------------ */}

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner reverse oneimg row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/content/php.jpg" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">PHP Web Development Services</h2>

              <p className="in_r_16">
                With the frontrunner open-source language for web design and
                development across the globe, write your business’s growth story
                with Infigrity’s robust, comprehensive, attractive and
                feature-rich PHP development services.
              </p>
              <Link href="/contact-us" className="btn_fill_black">
                GET PHP DEVELOPMENT SOLUTIONS NOW
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*---------------------------- Infigrity and Magento Ecommerce Development--------------- */}

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
              <span>
                <video playsInline autoPlay muted loop>
                  <source
                    src="../img/content/web-devlopment.mp4"
                    type="video/mp4"
                  />
                </video>
              </span>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                End-to-end PHP Web Development Services by Infigrity
              </h2>

              <p className="in_r_16">
                Infigrity Technologies is a reputed PHP web development company
                that provides customized and flexible PHP solutions. The amazing
                thing is, we as a company adopt contemporary PHP technologies
                and trends which assist us in developing superlative solutions
                that raise the benchmark for others to follow. Our class-apart
                team of professional PHP developers has the prowess of employing
                best-in-class PHP technologies to create amazing websites. On
                top of that, they even have the technical know-how of CSS,
                JQuery, HTML5, MySQL, etc. which makes them develop highly
                creative and imaginative web solutions for our esteemed
                clientele.
              </p>
              <p className="in_r_16">
                We have already delivered some of the best PHP web development
                work by creating eCommerce websites, social networking websites,
                payment gateways, CMS development, web calendars, etc. by
                employing this amazing technology. Our customized PHP
                development solutions are aimed to fulfill your specific
                business requirements so that you only get the best of the
                results for your business. We follow proven methodologies and
                industry standard practices to ensure that the final output you
                receive is above-par.
              </p>
              <Link to={"/contact-us"} className="btn_fill_black">
                GET A FREE PHP DEVELOPMENT QUOTE
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*---------------------------- Infigrity and Magento Ecommerce Development--------------- */}
      <section className="services section">
        <div className="wrapper">
          <div className="services_inner">
            <h2 className="bi_bl_50" style={{ maxWidth: "none" }}>
              Our comprehensive service funnel has rich features such as:
            </h2>
            <ul className="row">
              <li className="col-md-2">
                <div className="services_inner_box">
                  <figure>
                    <img src="../img/web_services.svg" alt="" />
                  </figure>
                  <h3 className="bi_r_20 ">RESPONSIVE</h3>
                  {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                </div>
              </li>
              <li className="col-md-2">
                <div className="services_inner_box">
                  <figure>
                    <img src="../img/digital_services.svg" alt="" />
                  </figure>
                  <h3 className="bi_r_20">UPGRADATION</h3>
                  {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                </div>
              </li>
              <li className="col-md-2">
                <div className="services_inner_box">
                  <figure>
                    <img src="../img/branding_services.svg" alt="" />
                  </figure>
                  <h3 className="bi_r_20 word">SECURITY</h3>
                  {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                </div>
              </li>
              <li className="col-md-2">
                <div className="services_inner_box">
                  <figure>
                    <img src="../img/data_security.svg" alt="" />
                  </figure>
                  <h3 className="bi_r_20">MAINTENANCE</h3>
                  {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                </div>
              </li>
              <li className="col-md-2">
                <div className="services_inner_box">
                  <figure>
                    <img src="../img/digitalmarketing.svg" alt="" />
                  </figure>
                  <h3 className="bi_r_20">MIGRATIONS</h3>
                  {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                </div>
              </li>
              <li className="col-md-2">
                <div className="services_inner_box">
                  <figure>
                    <img src="../img/qualityassurance.svg" alt="" />
                  </figure>
                  <h3 className="bi_r_20">PWA</h3>
                  {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*------------------- Our Magento ecommerce development solutions include:--------------------- */}
      <section className="technologies section words chars splitting">
        {/* <div class="techno_vertical_title">OUR EXPERTISE</div> */}
        <div className="wrapper">
          <div className="technologies_inner">
            <h2 className="bi_bl_50">
              PHP web development services by Infigrity include:
            </h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">PHP WEB DEVELOPMENT SERVICES</h3>
                    <p className="in_r_16">
                      We understand the exclusive demands of your business and
                      then provide solutions that are based on the concept of
                      best PHP web development available in the industry to make
                      your websites and apps look special.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/woocommerce.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">PHP-BASED CMS DEVELOPMENT</h3>
                    <p className="in_r_16">
                      Our PHP developers have the acumen of providing you with
                      an unmatched PHP-based CMS development which is enough to
                      ensure that your final PHP-based output is in alignment
                      with your business strategy.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/magento.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">
                      CUSTOM PHP WEB APPLICATION DEVELOPMENT
                    </h3>
                    <p className="in_r_16">
                      We have gained specialization in customizing websites with
                      excellent and beneficial features that sync in with your
                      business value thus ensuring that you get the best output
                      driven websites and apps for a successful business future.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/shopify.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">FUTURE FOCUSED DEVELOPMENT</h3>
                    <p className="in_r_16">
                      Our developers will design PHP web solutions for your
                      unique business needs while keeping your future business
                      requirements in mind. We evaluate your business nature and
                      future potential scope and benefits and weave them in the
                      services to help you in the future.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/reactjs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">PORTAL DEVELOPMENT SOLUTIONS</h3>
                    <p className="in_r_16">
                      Let our expert PHP developers build a highly functional,
                      user-friendly and comprehensive web portal for enterprise
                      to deploy it in a large network in the future. We offer
                      apt portal development solutions for enterprises.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/nodejs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">E-COMMERCE DEVELOPMENT</h3>
                    <p className="in_r_16">
                      Ecommerce development is our core competency where we
                      create highly-innovative, attractive, user-friendly and
                      competent ecommerce websites with easy to use interface,
                      rich UI/UX design, which offer magnificent user experience
                      to the visitors.{" "}
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/nodejs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">
                      CUSTOM PHP SOCIAL NETWORKING SITES
                    </h3>
                    <p className="in_r_16">
                      Do you want to build a PHP-based social networking site?
                      You have arrived at the right place as we develop highly
                      attractive, engaging, feature-rich and collaborative
                      social networking websites.
                    </p>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/nodejs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">SUPPORT AND MAINTENANCE</h3>
                    <p className="in_r_16">
                      Once the delivery is done, we are not done. We will be
                      there for you at any time you have issues with the website
                      or portal. We offer 360 degree support and maintenance
                      services for any solution related issues such as
                      functionality issues, bug issues or in case of any errors.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*------------------------------------ Why to choose us?---------------------------------- */}

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Reasons to choose Infigrity for PHP web development services
              </h2>

              <p className="in_r_16">
                Infigrity Technologies is renowned for its elite PHP web
                development services. We have the capability of transforming
                your raw ideas into excellent reality using the PHP technology.
                Our highly talented team of PHP developers have already created
                some amazing works using PHP technology which has made us gain
                lots of positive reviews from our clients.
              </p>
              <p className="in_r_16">
                Whatever be your requirements, irrespective of whether it is
                website development or app development we can deliver the best
                output in a timely manner with minimal interference from your
                end. We believe in touching base with the clients at regular
                intervals during the development process so that they know every
                minute details about the progress of their projects. Our
                customer-centric solutions have been highly appreciated by the
                clients. We have a dedicated PHP project manager who ensures
                high-level of qualitative deliverables to our clients at all
                times. You can avail the services of our talented PHP developers
                as your dedicated resources by hiring them on an hourly,
                part-time, or full-time basis.
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                GET A FREE PHP CONSULTATION NOW
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*-----------------------------------Our Blog-------------------------------------- */}
      <section className="blog section">
        <div className="wrapper">
          <div className="blog_inner">
            <div className="blog_inner_title">
              <h2 className="bi_bl_50" data-splitting>
                Our Blog Post
              </h2>
              <p className="in_r_16">
                Get industry updates and latest Magento news here
              </p>
            </div>

            <div className="blog_inner_slider">
              <Slider {...settings}>
                <div className="blog_inner_slider_item">
                  <a href="#">
                    <figure>
                      <img src="../img/blog_img_1.png" alt="" />
                      <span>#industry practices</span>
                    </figure>
                    <h3 className="bi_r_24">
                      Build a closer relationship with your Customers
                    </h3>
                    <p className="in_r_16">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </a>
                </div>
                <div className="blog_inner_slider_item">
                  <a href="#">
                    <figure>
                      <img src="../img/blog_img_2.png" alt="" />
                      <span>#industry practices</span>
                    </figure>
                    <h3 className="bi_r_24">
                      Build a closer relationship with your Customers
                    </h3>
                    <p className="in_r_16">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </a>
                </div>
                <div className="blog_inner_slider_item">
                  <a href="#">
                    <figure>
                      <img src="../img/blog_img_3.png" alt="" />
                      <span>#industry practices</span>
                    </figure>
                    <h3 className="bi_r_24">
                      Build a closer relationship with your Customers
                    </h3>
                    <p className="in_r_16">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </a>
                </div>
                <div className="blog_inner_slider_item">
                  <a href="#">
                    <figure>
                      <img src="../img/blog_img_1.png" alt="" />
                      <span>#industry practices</span>
                    </figure>
                    <h3 className="bi_r_24">
                      Build a closer relationship with your Customers
                    </h3>
                    <p className="in_r_16">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </a>
                </div>
                <div className="blog_inner_slider_item">
                  <a href="#">
                    <figure>
                      <img src="../img/blog_img_2.png" alt="" />
                      <span>#industry practices</span>
                    </figure>
                    <h3 className="bi_r_24">
                      Build a closer relationship with your Customers
                    </h3>
                    <p className="in_r_16">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </a>
                </div>
                <div className="blog_inner_slider_item">
                  <a href="#">
                    <figure>
                      <img src="../img/blog_img_3.png" alt="" />
                      <span>#industry practices</span>
                    </figure>
                    <h3 className="bi_r_24">
                      Build a closer relationship with your Customers
                    </h3>
                    <p className="in_r_16">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </a>
                </div>
              </Slider>
            </div>

            <a href="#" className="btn_fill_black">
              More Blogs
              <span className="browser-window__link">
                <i className="fas fa-chevron-right" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/*-----------------------------------Lets Talk Section-------------------------------------- */}
      <section className="letstalk section">
        <div className="wrapper">
          <div className="letstalk_inner">
            <h2 className="bi_bl_50" data-splitting>
              Digital Transformation begins here!
            </h2>
            <h3 className="bi_r_24">
              Let us write your business’s growth story by offering innovative,
              scalable and result-driven IT solutions. Do you have an idea that
              has a potential to bring a change in the world? Don’t hesitate,
              share with our experts and we will help you to achieve it.
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
      </div>
  );
};

export default Phpdevlopment;
