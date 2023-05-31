import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useEffect } from "react";
import "../custom.css";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";

const Seoservices = () => {
  //-------------------------------Scroll top Javascript---------------------------------//

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
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
  useEffect(() => {
    document.body.classList.add("inner");

    return () => {
      document.body.classList.remove("inner");
    };
  }, []);
  return (
    <div>
    <Helmet>
        <title>SEO Services</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Professional SEO Solutions" />
        <meta
          property="og:description"
          content="Improve online visibility and drive organic traffic with our professional SEO services. Discover our services."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
      </Helmet>
      {/*------------------------------- Banner Section---------------------------------- */}
      <div
        className="breadcrumb"
        style={{
          background: "url(../../img/seo-services-BANNER.jpg) no-repeat center",
        }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>SEO Services</h1>
            </li>
          </ul>
        </div>
      </div>

      <section className="whoweare section">
        <div className="wrapper">
          <div className="whoweare_inner reverse oneimg row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/content/search_engine_optimization.jpg" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Professional SEO Services</h2>
              <h2>Boost Traffic, Conversions and Credibility</h2>
              <p className="in_r_16">
                Are you looking for SEO services? Do you wish to see your
                website rank at the top of the search engine results? Elsner can
                do it for you. Our best SEO brains will help in providing
                guaranteed SEO services to build a strong strategy in the
                digital market.
              </p>
              <p className="in_r_16">
                When it comes to Search Engine Optimization (SEO), Our
                professional SEO Services will help your website for short and
                long-term SEO success, website traffic, and conversion growth.
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                GET FREE SEO CONSULTATION
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*---------------------------- Infigrity and Magento Ecommerce Development--------------- */}

      <section className="whoweare section">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
              <span>
                  <video playsInline autoPlay muted loop>
                    <source src="../img/content/seo.mp4" type="video/mp4" />
                  </video>
                </span>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Looking for SEO Services? Hire Infigrity as your SEO Partner
              </h2>

              <p className="in_r_16">
                You might have pondered Why SEO is important? SEO is a method
                used to get the higher rank of your website on Search Engine
                Results Page (SERP). It is a fact that search engine provides
                traffic to your website but the ranking is the initiative of
                SEO. Infigrity is one of the best Local SEO Company in the USA.
                We offer professional SEO services in USA as well as in many
                other countries.
              </p>
              <p className="in_r_16">
                Our highly talented SEO professionals aim to provide SEO
                services for small businesses to large-scale organizations in
                many niches. We also help in providing top search engine ranking
                to your website which will, in turn, generate more number of
                qualified leads for your website. Our certified SEO experts will
                look into every aspect regarding the structure of your website
                and outreach your niche network. Our professional SEO services
                will let you achieve the maximum out of your website. We plan
                effective strategies for both onpage and offpage SEO. Read More
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                SEO PRICING & PACKAGES
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*------------------- Our Magento ecommerce development solutions include:--------------------- */}
      <section className="technologies section words chars splitting">
        {/* <div class="techno_vertical_title">OUR EXPERTISE</div> */}
        <div className="wrapper">
          <div className="technologies_inner">
            <h2 className="bi_bl_50">Our Professional SEO Services include</h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Mobile SEO</h3>
                    <p className="in_r_16">
                      We also optimize your website with our unique strategies
                      which would facilitate quick and easy viewing of your
                      website...
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
                    <h3 className="bi_r_24">Website Assessment</h3>
                    <p className="in_r_16">
                      At Infigrity, we provide a depth analysis of their website
                      to our clients. The main goal of SEO services is to
                      increase website performance based on the...
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
                    <h3 className="bi_r_24">Website Optimization Service</h3>
                    <p className="in_r_16">
                      Website Optimization is a process which includes adding a
                      relevant keyword, a phrase to the website and editing Meta
                      tags, image tags and...
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
                    <h3 className="bi_r_24">Local SEO Service</h3>
                    <p className="in_r_16">
                      A keen analysis of our digital marketing team will help
                      you optimize your website for a local seo which would...
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
                    <h3 className="bi_r_24">Google Penalty Assessment</h3>
                    <p className="in_r_16">
                      We believe content marketing as an evergreen trend for
                      marketing. A Content Marketing strategy is an...
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
                      Off Page SEO & Authoritative link Building
                    </h3>
                    <p className="in_r_16">
                      At Infigrity, we follow a wide range of methods and
                      techniques in order to attract valuable & relevant links
                      which...
                    </p>
                  </div>
                </div>
              </li>
            </ul>
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
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Why to Hire our SEO Services?</h2>

              <p className="in_r_16">
                Our SEO experts are enthusiastic about our SEO services so they
                find out their own tactics to gain success. It is a different
                kind of excitement when our client reaches on the first page of
                Google. Our professional SEO teams invest several hours to test
                new innovative SEO methods before deploying our SEO services in
                USA. We work with any type of website, be it WordPress SEO,
                eCommerce SEO, and SEO services for Shopify. We are a one-stop
                destination for all kinds of SEO solutions. We have certain
                planned strategies to meet every kind of requirement in order to
                reach out to your targeted audience. All of our professional SEO
                services feature a basic SEO package. If you’re ready for
                starting a campaign, explore our SEO Packages.
              </p>
              <p className="in_r_16">
                As the best professional SEO company USA, we believe in
                delivering quality results with the best suitable SEO Packages.
                We believe the best website will not generate revenue if no one
                sees it. So we work to let your website gain the highest ranking
                in the search engine results. As a leading Digital Marketing
                Agency, We have a team of passionate digital marketers who are
                experts in search who will update you regarding all the
                information of your website.
              </p>
              <p className="in_r_16">
                Find the perfect roadmap to boost your online presence with our
                Dedicated and Professional SEO Services.
              </p>
              <Link to={"/contact-us"} className="btn_fill_black">
                HIRE SEO PROFESSIONAL
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="blog section">
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
              More Blogs{" "}
              <span className="browser-window__link">
                <i className="fas fa-chevron-right" />
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* OUR TESTIMONIAL SECTION  */}
      <section className="ourtestimonial section">
        <div className="wrapper">
          <div className="ourtestimonial_inner">
            {/* <Slider {...TestimonialSlider}> */}

            <div className="ourtestimonial_slider">
              <Slider {...TestimonialSlider}>
                <div className="t-item">
                  <div className="t-video">
                    <figure>
                      <img src="../img/blog_img_1.png" alt="" />
                    </figure>
                    <button>Open Video Popup</button>

                    <span>
                      <img src="../img/playbutton.svg" alt="" />
                    </span>
                  </div>
                  <div className="t-text">
                    <figure className="client_logo">
                      <img src="../img/portfolio/sonio.png" alt="" />
                    </figure>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet placeat dolorum fugit quasi. Quibusdam
                      consequuntur veritatis necessitatibus blanditiis harum?
                      Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam! Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eveniet placeat dolorum fugit quasi.
                      Quibusdam consequuntur veritatis necessitatibus blanditiis
                      harum? Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam!
                    </p>
                    <div className="engineers_hired">
                      <p>Engineers hired:</p>
                      <div className="dev_images">
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t-item">
                  <div className="t-video">
                    <figure>
                      <img src="../img/blog_img_1.png" alt="" />
                    </figure>
                    <span>
                      <img src="../img/playbutton.svg" alt="" />
                    </span>
                  </div>
                  <div className="t-text">
                    <figure className="client_logo">
                      <img src="../img/portfolio/sonio.png" alt="" />
                    </figure>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet placeat dolorum fugit quasi. Quibusdam
                      consequuntur veritatis necessitatibus blanditiis harum?
                      Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam! Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eveniet placeat dolorum fugit quasi.
                      Quibusdam consequuntur veritatis necessitatibus blanditiis
                      harum? Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam!
                    </p>
                    <div className="engineers_hired">
                      <p>Engineers hired:</p>
                      <div className="dev_images">
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t-item">
                  <div className="t-video">
                    <figure>
                      <img src="../img/blog_img_1.png" alt="" />
                    </figure>
                    <span>
                      <img src="../img/playbutton.svg" alt="" />
                    </span>
                  </div>
                  <div className="t-text">
                    <figure className="client_logo">
                      <img src="../img/portfolio/sonio.png" alt="" />
                    </figure>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet placeat dolorum fugit quasi. Quibusdam
                      consequuntur veritatis necessitatibus blanditiis harum?
                      Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam! Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eveniet placeat dolorum fugit quasi.
                      Quibusdam consequuntur veritatis necessitatibus blanditiis
                      harum? Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam!
                    </p>
                    <div className="engineers_hired">
                      <p>Engineers hired:</p>
                      <div className="dev_images">
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t-item">
                  <div className="t-video">
                    <figure>
                      <img src="../img/blog_img_1.png" alt="" />
                    </figure>
                    <span>
                      <img src="../img/playbutton.svg" alt="" />
                    </span>
                  </div>
                  <div className="t-text">
                    <figure className="client_logo">
                      <img src="../img/portfolio/sonio.png" alt="" />
                    </figure>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet placeat dolorum fugit quasi. Quibusdam
                      consequuntur veritatis necessitatibus blanditiis harum?
                      Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam! Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eveniet placeat dolorum fugit quasi.
                      Quibusdam consequuntur veritatis necessitatibus blanditiis
                      harum? Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam!
                    </p>
                    <div className="engineers_hired">
                      <p>Engineers hired:</p>
                      <div className="dev_images">
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t-item">
                  <div className="t-video">
                    <figure>
                      <img src="../img/blog_img_1.png" alt="" />
                    </figure>
                    <span>
                      <img src="../img/playbutton.svg" alt="" />
                    </span>
                  </div>
                  <div className="t-text">
                    <figure className="client_logo">
                      <img src="../img/portfolio/sonio.png" alt="" />
                    </figure>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet placeat dolorum fugit quasi. Quibusdam
                      consequuntur veritatis necessitatibus blanditiis harum?
                      Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam! Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eveniet placeat dolorum fugit quasi.
                      Quibusdam consequuntur veritatis necessitatibus blanditiis
                      harum? Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam!
                    </p>
                    <div className="engineers_hired">
                      <p>Engineers hired:</p>
                      <div className="dev_images">
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="t-item">
                  <div className="t-video">
                    <figure>
                      <img src="../img/blog_img_1.png" alt="" />
                    </figure>
                    <span>
                      <img src="../img/playbutton.svg" alt="" />
                    </span>
                  </div>
                  <div className="t-text">
                    <figure className="client_logo">
                      <img src="../img/portfolio/sonio.png" alt="" />
                    </figure>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eveniet placeat dolorum fugit quasi. Quibusdam
                      consequuntur veritatis necessitatibus blanditiis harum?
                      Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam! Lorem ipsum, dolor sit amet consectetur
                      adipisicing elit. Eveniet placeat dolorum fugit quasi.
                      Quibusdam consequuntur veritatis necessitatibus blanditiis
                      harum? Rerum atque vero quia maxime eos veritatis non eum
                      quisquam numquam!
                    </p>
                    <div className="engineers_hired">
                      <p>Engineers hired:</p>
                      <div className="dev_images">
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                        <figure>
                          <img src="../img/user_img.jpg" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* /blog */}
      <section className="letstalk section">
        <div className="wrapper">
          <div className="letstalk_inner">
            <h2 className="bi_bl_50" data-splitting>
              We’re here to help
            </h2>
            <h3 className="bi_r_24">
              Here’s a set of tailored solutions to help you and your customers
              navigate these times and beyond
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
      {/* /letstalk */}
      </div>
  );
};

export default Seoservices;
