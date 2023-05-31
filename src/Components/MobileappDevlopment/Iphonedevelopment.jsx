import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";

const Iphonedevelopment = () => {
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
        <title>iPhone App Development Services	</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Professional iPhone App Solutions" />
        <meta
          property="og:description"
          content="Professional iPhone app development services to reach your iOS audience effectively. Partner with us for expert app development."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
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
              <h1>Iphone App Development</h1>
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
                <img src="../img/content/about.webp" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">IPhone App Development</h2>

              <p className="in_r_16">
                Avail customised, comprehensive and classic iPhone app
                development services to skyrocket your business.
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
                IPhone app development- why your business needs it?
              </h2>

              <p className="in_r_16">
                Apple iPhones have carved a niche for themselves by offering
                classic, unprecedented and superlative user experience to
                owners. The number of iPhone users are increasing with each
                passing day and you need to have your brand presence there. A
                customised, robust and feature-rich iPhone app can serve the
                core purpose of user engagement and branding.
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
              <p className="in_r_16">
                Through our iPhone app development services we enable users to
                get the best of both worlds i.e.; on the go mobility and
                collaboration for all enterprise management applications. Our
                iPhone apps are famous in the IT domain for their robustness,
                scalability, and robustness which are the main pillars for
                achieving higher productivity and success in the marketplace.
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
                    <h3 className="bi_r_24">
                      CUSTOMISED IPHONE APP DEVELOPMENT
                    </h3>
                    <p className="in_r_16">
                      Our highly efficient team of iPhone app developers have
                      the proficiency of delivering fully-customized and
                      feature-rich iPhone apps by employing cutting-edge
                      technology and trends that are best suited for your
                      business.
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
                    <h3 className="bi_r_24">IPHONE INTEGRATION SERVICES</h3>
                    <p className="in_r_16">
                      Our team of iPhone developers assist in integrating iPhone
                      applications using our iPhone app integration services. We
                      use modern technology to ensure that you get the best
                      iPhone app solutions at your fingertips.
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
                    <h3 className="bi_r_24">ATTRACTIVE IPHONE UI/UX DESIGNS</h3>
                    <p className="in_r_16">
                      In order to make your apps look easy-to-navigate and
                      functional, we create iPhone app UI/UX designs that are
                      not only alluring to the eyes of the users but also quite
                      easy to use by them thus creating a win-win situation.
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
                    <h3 className="bi_r_24">IPHONE APP TESTING</h3>
                    <p className="in_r_16">
                      We have a team of best and expert quality analysts with
                      in-depth understanding of industry quality standards and
                      rich experience in the app testing domain. They are
                      equipped with latest QA tools to offer you the best,
                      highly-functional and superlatively performing iPhone app
                      without any errors, bugs and other functional issues.
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
                    <h3 className="bi_r_24">
                      IPHONE APP SUPPORT AND MAINTENANCE
                    </h3>
                    <p className="in_r_16">
                      Our iPhone developers ensure that all the iPhone apps
                      developed by us are thoroughly maintained and supported
                      for a very long time. We ensure that you do not have to
                      worry about the smooth functioning of your iPhone app once
                      it has been created by us.
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
                    <h3 className="bi_r_24">IPHONE APP CONSULTING SERVICES</h3>
                    <p className="in_r_16">
                      If you have a rough idea about what you expect from the
                      iPhone app discuss it with our iPhone consultants. With a
                      very wide array of experience, they can help you give
                      vision to deliver highly powerful iPhone app through
                      personalized consultation.
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
                Why to choose Infigrity for iPhone app development?
              </h2>

              <p className="in_r_16">
                Infigrity is the leading iPhone app development company which
                has delivered numerous iPhone app projects in various domains.
                In January 2018, it has been ranked amongst the top web design
                and development company globally by the Web Guru Awards and the
                Best Web Firm.
              </p>
              <p className="in_r_16">
                Our ultimate goal at Infigrity is to convert your business ideas
                into reality. Our proficient develops have several years of work
                experience that helps them to provide the best iPhone app
                development service. We have successfully delivered tons of
                iPhone apps with media-rich, scalable, high-performance and
                having latest interactive features within the stipulated amount
                of time.
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

export default Iphonedevelopment;
