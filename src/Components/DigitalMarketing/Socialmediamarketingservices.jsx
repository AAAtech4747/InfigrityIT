import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";

const Socialmediamarketingservices = () => {
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

  useEffect(() => {
    document.body.classList.add("inner");

    return () => {
      document.body.classList.remove("inner");
    };
  }, []);

  return (
    <div>
    <Helmet>
        <title>Social Media Marketing Services</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Strategic Social Media Solutions" />
        <meta
          property="og:description"
          content="Strategic social media marketing solutions to reach and engage your target audience. Discover our services."/>
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
            "url(../../img/digital_marketing_BANNER.jpg) no-repeat center",
        }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Social Media Marketing Services</h1>
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
                <img src="../img/social_media_services.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Reasons to Choose Us</h2>

              <p className="in_r_16">
                Infigrity Technologies is a name that first comes to mind when
                you want to avail social media marketing services. Our social
                media marketing experts have gained the prowess of performing
                these services on popular platforms like Instagram, Twitter, and
                Facebook.
              </p>
              <p className="in_r_16">
                Our team of social media marketing experts can help you blend
                blog management and content marketing with quality-driven
                SEO-friendly content marketing as a part of our social media
                marketing services. Can it get any better than this?
              </p>
              <a href="about.html" className="btn_fill_black">
                START YOUR SMO CAMPAIGN
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
                Hire the best Social Media Marketers with Infigrity
              </h2>

              <p className="in_r_16">
                Infigrity is an experienced social media marketing services
                Provider Company having a team of Social Media Marketing
                experts, designing campaigns, keeping your customers in mind! No
                one starts a business to become a Social Media Strategist. So
                let us do it for you!
              </p>
              <p className="in_r_16">
                We craft data-driven Inbound Marketing campaigns which don’t
                just increase followers for your brand but also helps generate
                business leads, by converting and delighting them. Our team of
                social media specialists uses their exclusive skill sets and
                experience in social media marketing to deliver high-class
                deliverables.
              </p>
              <p className="in_r_16">
                We link KPIs that provide a clear picture of your inbound and
                digital marketing ROI. This makes the entire social conversation
                impactful. Our creative strategies, tactics, and approaches give
                us the scope of delivering huge success ratio for our clients.
              </p>
              <Link to={"/contact-us"} className="btn_fill_black">
                SOCIAL MEDIA MARKETING PACKAGES
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
      {/*------------------- Our Magento ecommerce development solutions include:--------------------- */}
      <section className="technologies section words chars splitting">
        {/* <div class="techno_vertical_title">OUR EXPERTISE</div> */}
        <div className="wrapper">
          <div className="technologies_inner">
            <h2 className="bi_bl_50">Other Services</h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Content Marketing Services</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/woocommerce.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Online Reputation Management</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/magento.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">PPC Management</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/shopify.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">ASO Services</h3>
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
              <h2 className="bi_bl_50">Why to choose us?</h2>

              <p className="in_r_16">
                Infigrity Technologies is a premier Magento eCommerce
                development company that delivers amazing online stores with
                high-quality maintenance and support. We provide great value to
                your eCommerce stores by integrating seamless extensions that
                beautify your eCommerce sites to another level.
              </p>
              <p className="in_r_16">
                Our expert Magento developers are well-equipped to deliver a
                class apart eCommerce store using the Magento Development
                technology. They are proficient in delivering highly ingenious
                online stores that are not only ingenious but also highly
                creative by nature.
              </p>
              <p className="in_r_16">
                According to Adobe commerce, the addition of Magento Commerce
                Cloud will bring immense experience to the Cloud services. While
                Magento still has its roots as an open-source. This is believed
                to be a scalable technology that is supported by a vibrant
                community.
              </p>
              <p className="in_r_16">
                Adobe is an organization that has leadership in marketing,
                advertising, content creating, and analysis for real-time
                experiences. Adobe Commerce and Magento have a vision for a
                great digital experience. Adobe handles content while Magento
                manages data with innovations.
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
      </div>
  );
};

export default Socialmediamarketingservices;
