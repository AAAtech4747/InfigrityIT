import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";

const Wordpressdevlopment = () => {
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
        <title>WordPress Development Services	</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Professional WordPress Solutions" />
        <meta
          property="og:description"
          content="Professional WordPress development services for robust and scalable websites. Partner with us for expert development services."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
      </Helmet>
      {/*------------------------------- Banner Section---------------------------------- */}
      <div
        className="breadcrumb"
        style={{ background: "url(../../img/images_6.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Wordpress Devlopment</h1>
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
                <img src="../img/Wordpress-Devlopment.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">WordPress Development Services</h2>

              <p className="in_r_16">
                WordPress Development Services for enterprises and organizations
                to improve their digital presence and skyrocket their sales.
              </p>

              <a href="about.html" className="btn_fill_black">
                GET WORDPRESS SOLUTIONS NOW
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
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                High-quality, robust and end-to-end WordPress Development
                Services
              </h2>

              <p className="in_r_16">
                If you wish to set up your very own blogging site or are looking
                to create a feature-rich and interactive business website, then
                look no further than WordPress development service from
                Infigrity Technologies. We are one of the distinguished
                WordPress development companies in the USA and have been in this
                business for the last 12 years. We pride in providing a one-stop
                destination with above-par WordPress development services at a
                quick turnaround time. Our talented team of WordPress developers
                has the acumen of delivering path-breaking web solutions using
                cutting-edge WordPress technology.
              </p>
              <p className="in_r_16">
                As a company, we pride in providing top-notch experience by
                delivering unmatched WordPress development services to clients
                across the globe. Our sole focus is on making sure that whatever
                be your web development requirements, we fulfill it with finesse
                using WordPress technology.
              </p>
              <p className="in_r_16">
                As of now, WordPress accounts for at least 31% of the web
                worldwide. Respecting and keeping this endeavor in mind, we
                extend our class-apart WordPress website development services to
                all the verticals in the industry. Our websites contribute to
                the businesses and are compatible with a wide array of business
                needs.
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                GET A FREE WORDPRESS DEVELOPMENT QUOTE
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
              WordPress Development Services Infigrity offers are:
            </h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">PSD TO WORDPRESS CONVERSION</h3>
                    <p className="in_r_16">
                      Our resourceful WordPress development team meticulously
                      understand your requirements and, based on that, convert
                      your pixel-rich PSD files to super-responsive, and W3C
                      validated WordPress themes.
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
                    <h3 className="bi_r_24">WORDPRESS THEME CUSTOMIZATION</h3>
                    <p className="in_r_16">
                      We provide a wide array of responsive custom wordpress
                      website design themes and services options, which helps us
                      to customize the themes following your preferred designs.
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
                    <h3 className="bi_r_24">WORDPRESS PLUGIN DEVELOPMENT</h3>
                    <p className="in_r_16">
                      At Infigrity, we always strive hard to ensure that the
                      themes work exceptionally well, even on the platforms
                      beyond their defaults. This is made possible with the help
                      of the latest technologies and security updates.
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
                    <h3 className="bi_r_24">
                      WORDPRESS MIGRATION AND MAINTENANCE SERVICE
                    </h3>
                    <p className="in_r_16">
                      We provide a comprehensive set of maintenance and support.
                      On top of this, we are also good at providing migration
                      services to WordPress.
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
                      CUSTOM WORDPRESS WEB DEVELOPMENT
                    </h3>
                    <p className="in_r_16">
                      We provide a range of custom WordPress website development
                      services ensuring that you end up with pixel perfect
                      custom wordpress web design and development services from
                      us!
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
                      WORDPRESS CMS INSTALLATION & CONFIGURATION
                    </h3>
                    <p className="in_r_16">
                      We provide seamless CMS installation & configuration. This
                      includes WordPress websites and blog setup, WordPress
                      design & development, free & paid WordPress theme
                      configuration, etc.
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
                      RESPONSIVE WORDPRESS THEME DEVELOPMENT
                    </h3>
                    <p className="in_r_16">
                      Do you feel your existing website lacks the responsiveness
                      and gets truncated on screen? We provide highly responsive
                      WordPress theme development services as per your
                      individual requirements.
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
                    <h3 className="bi_r_24">WORDPRESS ECOMMERCE DEVELOPMENT</h3>
                    <p className="in_r_16">
                      And here comes the most trending WordPress eCommerce
                      development services, i.e., WooCommerce development. Yes!
                      We also offer WooCommerce Development Services.
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
                Why to choose Infigrity for WordPress Development Services?
              </h2>

              <p className="in_r_16">
                We have so far delivered more than 10,000+ WordPress themes,
                websites, and plug-ins to our global clientele in a career
                spanning more than 12 years. Our experienced WordPress
                development team knows the ins and outs of WordPress development
                which gives us a slight edge over our competitors. They are
                well-versed with all the cutting-edge tools and technology to
                develop a highly improvised web version using WordPress.
              </p>
              <p className="in_r_16">
                From commercial websites to personal portfolios, our
                full-service WordPress development agency can assist you in
                delivering completely responsive and functional websites that
                meet your business objectives. Associate with a renowned
                WordPress development company today and take your online
                business to the threshold of success!
              </p>
              <p className="in_r_16">
                Our talented WordPress development team never use admin
                credentials to test your first version site. Nor do they keep
                any unwanted plug-ins in the backend or in the server. Our
                WordPress Team has immense knowledge of WordPress eCommerce
                development and WordPress frameworks, and they stay updated with
                the latest one. Due to this, we never fail in fulfilling
                business needs.
              </p>
              <p className="in_r_16">
                Let’s connect and see how we can serve you with our Custom
                WordPress Design & Development Services.
              </p>
              <Link to={"/contact-us"} className="btn_fill_black">
                GET A FREE WORDPRESS CONSULTATION NOW
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

export default Wordpressdevlopment;
