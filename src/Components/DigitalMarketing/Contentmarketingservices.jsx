import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../custom.css";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";


const Contentmarketingservices = () => {
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
        <title>Content Marketing Services</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Effective Content Solutions" />
        <meta
          property="og:description"
          content="Effective content marketing services to attract and convert your target audience. Explore our services."/>
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
          background:
            "url(../../img/content-marketing-banner.PNg) no-repeat center",
        }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Content Marketing Services</h1>
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
                <img src="../img/content-marketing.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Content Marketing Services</h2>

              <p className="in_r_16">
                High-quality, engaging, original and state-of-art content
                writing and marketing services to make your brand a highly
                authoritative amongst your target audience
              </p>

              <a href="about.html" className="btn_fill_black">
                GET CONTENT MARKETING CONSULTATION
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
          <div className="whoweare_inner reverse oneimg row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
              <span>
                <video playsInline autoPlay muted loop>
                  <source src="../img/content/ecommerce.mp4" type="video/mp4" />
                </video>
              </span>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Why Brands Need Content Marketing Services?
              </h2>

              <p className="in_r_16">
                Content marketing is the most vital thing of your digital
                marketing strategy and must be taken seriously. As digital
                marketing experts prefer to say, “Content is the King”, you need
                to write and market highly readable, original, engaging and
                relevant content for your brand.
              </p>
              <p className="in_r_16">
                Infigrity Technologies is an award winning B2B and B2C content
                marketing agency that specializes in onsite content creation and
                optimization. We even take care of your offsite promotion to
                make sure that your content is of high value and delivers high
                performance in terms of leads and sales for your business. Our
                content team has the prowess of preparing various types of
                content pieces for your target audience, including landing
                pages, blogs, infographics, whitepapers, press releases, etc.
              </p>
              <p className="in_r_16">
                Our job as a content marketing agency starts with understanding
                the ultimate objective of your business. We conduct competitor
                analysis, prepare content plans, perform keyword research which
                is completely SEO-focused, carefully scrutinize buyer’s journey
                mapping, and provide cross-channel integration/support, all in
                our content marketing services.
              </p>
              <p className="in_r_16">
                We create customized content campaigns that are backed by
                thought-provoking analytics and Professional SEO Services to
                make sure you reap in the benefits. Our vision is to prepare
                ever-lasting content pieces for our esteemed clientele which can
                be useful even after years of publication. Our content writing
                is specially done for people and not robots. We give life to
                your business through our words. Our content pieces are
                specially customized according to the business needs of our
                clients. Since every business is different our writers read lots
                of new stuff to get relevant information for your business so
                that it can grow from strength-to-strength in a very limited
                time frame.
              </p>
              <Link to={"/contact-us"} className="btn_fill_black">
                GET A FREE CONTENT MARKETING QUOTE
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
              Our content marketing services include:
            </h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">CONTENT MARKETING STRATEGY</h3>
                    <p className="in_r_16">
                      Each business has their own content needs and that
                      one-size-fits-all concept does not work for all
                      businesses. Our content marketers will first understand
                      your business requirements and make a unique and relevant
                      content marketing strategy for you.
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
                    <h3 className="bi_r_24">
                      MON-PAGE CONTENT AND GRAPHICS GENERATION
                    </h3>
                    <p className="in_r_16">
                      Our talented content writing team creates page content by
                      synchronizing on-site copy and graphics. We aim to deliver
                      evergreen on-page copy which is SEO backed and
                      quality-driven to attract your target audience.
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
                    <h3 className="bi_r_24">PRODUCT COPYWRITING SERVICES</h3>
                    <p className="in_r_16">
                      We tell your product’s story in the form of copywriting by
                      advertising your product or service which gives a new
                      perspective to your customers. Our copywriting team
                      prepares persuasive copy that provides true value of your
                      products in comparison to the competitors.
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
                    <h3 className="bi_r_24">ARTICLE AND BLOG WRITING</h3>
                    <p className="in_r_16">
                      Our blogs help your customers to get a fair idea about
                      your business. We establish your organization as an
                      industry leader and convert the potential customers into
                      real customers. They help your customers to take better
                      buying decisions.
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
                      PRESS RELEASE AND WEB CONTENT WRITING
                    </h3>
                    <p className="in_r_16">
                      Although press releases might seem to be old school, it
                      still is one of the most effective mediums to produce
                      results in current times. We write press releases and push
                      the content to traditional media outlets in your target
                      area or industry.
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
                    <h3 className="bi_r_24">EMAIL MARKETING</h3>
                    <p className="in_r_16">
                      Emails are a combination of words and graphics that
                      transform a copy into a more portable and easy-to-digest
                      package. We provide personalized emails that encourage
                      your customers to take action. Our team formats the emails
                      properly for effective results.
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
                    <h3 className="bi_r_24">GUEST POST OUTREACH</h3>
                    <p className="in_r_16">
                      Reaching out to the industry-specific websites for guest
                      posting is one of the key strategies to earn
                      high-authority backlinks. Let our content writing team
                      help you write the best guest posts for you.
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
                    <h3 className="bi_r_24">CONTENT PROMOTION</h3>
                    <p className="in_r_16">
                      We have a list of industry influencers who will be
                      promoting your content among the relevant audience to
                      ensure that your content gets maximum visibility from your
                      target audience.
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
                Why Choose Infigrity for Content Marketing Services?
              </h2>

              <p className="in_r_16">
                Infigrity Technologies is a content marketing agency that has
                gained expertise in creating content for businesses across
                virtually any industry vertical. We prepare write-ups for
                small-size, mid-sized to Fortune 500 companies.
              </p>
              <p className="in_r_16">
                We believe the only way to expand your website’s digital
                presence is by constantly distributing, measuring, and
                distributing content that aids in increasing website traffic and
                help generate online leads and conversions.
              </p>
              <p className="in_r_16">
                We have gained experience in driving home the advantage of
                generating huge ROI from your content marketing investment. Our
                ultimate objective is to ensure that you have a clear knowledge
                about the KPIs which will help you to actively scrutinize the
                performance of your content that will help in enhancing the
                results.
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                START YOUR CONTENT MARKETING NOW
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

export default Contentmarketingservices;
