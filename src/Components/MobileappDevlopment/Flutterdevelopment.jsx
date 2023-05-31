import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";

const Flutterdevelopment = () => {
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
        <title>Flutter Development Services	</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Custom Flutter Solutions" />
        <meta
          property="og:description"
          content="Custom Flutter development solutions for high-performance cross-platform apps. Explore our development services."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
      </Helmet>
      {/*------------------------------- Banner Section---------------------------------- */}
      <div
        className="breadcrumb"
        style={{ background: "url(../../img/IOS_BANNER.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Flutter App Development</h1>
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
                <img src="../img/IOS.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Flutter App Development Services</h2>

              <p className="in_r_16">
                Flutter is an open-source web and mobile app SDK that supports
                both iOS and Android platforms. Using Flutter, we help to build
                dynamic feature-loaded apps for mobile, web and desktop using a
                single codebase.
              </p>
              <a href="about.html" className="btn_fill_black">
                Get Started
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
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
                  <source src="../img/content/mobile.mp4" type="video/mp4" />
                </video>
              </span>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Flutter app development- why your business needs it?
              </h2>

              <p className="in_r_16">
                Flutter has quickly become one of the most popular mobile app
                development frameworks in the world. Some of the reasons for its
                popularity include its ability to help developers save time and
                money, its flexibility and scalability, and its robust community
                support.
              </p>
              <p className="in_r_16">
                Infigrity Technologies is a 9001:2008 certified iOS app
                development company that has a skillful team of iPhone
                developers who offer customized iOS app development services at
                cost-effective prices across the globe. Our iPhone app
                development solutions have been highly appreciated by our
                clients, thanks to the innovativeness and out-of-the-box ideas
                generated by our talented developers.
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                GET A FREE QUOTE
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
              Our iPhone app development services include:
            </h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Cost Savings</h3>
                    <p className="in_r_16">
                      Having a single codebase means coding once (most of the
                      time) which reduces efforts in developing, testing, and
                      managing two apps. You can expect to save upwards of 40%
                      in most cases
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
                    <h3 className="bi_r_24">Faster Go-to-Market</h3>
                    <p className="in_r_16">
                      As you spend less time coding, your mobile devs can work
                      on different functionalities rather than replicating it on
                      a different platform. Thus, with the same resources, you
                      can reduce your time-to-market..
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
                    <h3 className="bi_r_24">Better Performance</h3>
                    <p className="in_r_16">
                      Unlike hybrid mobile apps, Flutter doesn’t need a bridge
                      to communicate with the underlying OS. Hence, Flutter apps
                      are equally performant as native mobile apps.
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
                    <h3 className="bi_r_24">Hot Reload</h3>
                    <p className="in_r_16">
                      With the Hot Reload feature, developers can quickly see
                      the changes in the code on a simulator in real time. This
                      saves a daily overhead while building the app and
                      increases productivity.
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
                    <h3 className="bi_r_24"> Support for Older version</h3>
                    <p className="in_r_16">
                      Flutter uses its own rendering engine which gives it an
                      edge over other cross-platform tools. Thus it is able to
                      work with many older versions of Android as well as iOs.
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
                    <h3 className="bi_r_24">Web Support</h3>
                    <p className="in_r_16">
                      Flutter for Web allows our developers to bring your
                      Flutter code to web browsers. We can package your existing
                      mobile apps into PWAs and deploy your mobile app without
                      rewriting it.
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
                Why to choose Infigrity for Flutter app development?
              </h2>
              <h3 className="bi_r_24">Real Experience</h3>
              <p className="in_r_16">
                Though Flutter is relatively new, we foresaw the advantages it
                had over other cross platform technologies and quickly adopted
                it the week it came out of beta. Within months, we started work
                on live projects including an enterprise project within 3 months
                of its launch!
              </p>
              <h3 className="bi_r_24">Proven Knowledge</h3>
              <p className="in_r_16">
                Not only do we dig deep through the official documentation, we
                also have written our own guides to learning flutter as well as
                contributed to the open source community on pub.dev as well as
                Github.
              </p>
              <h3 className="bi_r_24">Community</h3>
              <p className="in_r_16">
                At Infigrity we love to give back to the community and we do it
                by organizing hackathons as well as meetups. We spread the word
                and keep the community active especially within Ahmedabad, which
                we’re based out of.
              </p>
              <h3 className="bi_r_24">Native Development Background</h3>
              <p className="in_r_16">
                Flutter is great, but there are times wherein cross-platform app
                developers need to work natively with Android and iOS platforms.
                Our developers have first hand experience with either Android or
                iOS before they pick up Flutter. This enables them to work
                independently on entire projects and make better decisions on
                which functionalities should be created in Flutter v/s Native
                platforms.
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                START YOUR PROJECT
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

export default Flutterdevelopment;
