import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";

const Ppcmanagementservices = () => {
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
        <title>PPC Management Services	</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Result-Driven PPC Solutions" />
        <meta
          property="og:description"
          content="Result-driven PPC management services to maximize your online advertising ROI. Partner with us for effective management."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
      </Helmet>
      {/*------------------------------- Banner Section---------------------------------- */}
      <div
        className="breadcrumb"
        style={{ background: "url(../../img/ppc_BANNER.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>PPC Management Services</h1>
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
                <img src="../img/content/ppc.jpg" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Best PPC Management Services to Get Instant Traffic
              </h2>

              <p className="in_r_16">
                Our PPC experts are always enthusiastic about handling new
                challenges and bring efficient results to the clients. It gives
                us immense joy when we make it to the first page of search
                engines. As a top PPC Management Company, we work on any type of
                website: Google ads, FB ads, YouTube ads, Instagram ads, etc. We
                have been a one-stop solution for all kinds of PPC management
                services.
              </p>

              <a href="about.html" className="btn_fill_black">
                GET A FREE PPC CONSULTATION
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
                Quality, Result-Driven,PPC Management Services
              </h2>

              <p className="in_r_16">
                In this digital era, many top PPC Advertising Company has been
                an inevitable part on online businesses. PPC is the number of
                clicks on your advertisements or campaigns. The ideal conversion
                rate in PPC advertising is around 1% to 3% only.
              </p>
              <p className="in_r_16">
                Have you been stressing to get your hands on excellent PPC
                management services? Then your search ends right here at
                Infigrity! Being the best PPC management Company, we deliver
                plenty of quality clicks, resulting in higher conversion rates
                for your platforms.
              </p>
              <p className="in_r_16">
                We are the best Digital Marketing Agency as we have a deep
                understanding, focus, and dedicated effective strategies. We
                always aim on providing you with the best PPC management
                services and result-oriented SEO services.
              </p>
              <p className="in_r_16">
                Our experts will first look for the reasons that your website
                has low rankings. Then accordingly plan strategies to implement.
                Then start effective campaigns to bring the intended results and
                meet your business needs.
              </p>
              <p className="in_r_16">
                Being a reputable and top PPC management company, we ensure that
                you get returns from potential customers who are genuinely
                interested. We understand that you have some budget limitations
                and ensure to give the expected result within that.
              </p>
              <p className="in_r_16">
                We make it our responsibility to give the best PPC advertising
                services to our clients. Our strategies and techniques will play
                an influential role in increasing your business to heights. Our
                team will be around the clock until quality traffic is not seen
                on your website.
              </p>
              <Link to={"/contact-us"} className="btn_fill_black">
                PPC PACKAGES & PRICING
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
              <h2 className="bi_bl_50">Our PPC Management Services Include:</h2>
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
                Why we are the expert when it comes to PPC Management?
              </h2>

              <p className="in_r_16">
                Infigrity Technologies has been known as the best PPC Management
                Services provider that manages PPC campaigns and achieves the
                desired targets in a quick turnaround time. Irrespective of
                whether it is Google AdWords to Facebook Ads, we aid our
                esteemed clients to reach their buyers on the paid platforms
                very quickly.
              </p>
              <p className="in_r_16">
                We already have significant experience in handling PPC
                advertising services of several clients. As a top PPC
                advertising company, we recognize what is required to make an
                everlasting relationship between a client and a PPC agency like
                us. We have developed our PPC management program based on the
                tried and tested principles that gave the best results for our
                clients. You can always expect 100% transparency from us while
                we are still working on your project.
              </p>
              <p className="in_r_16">
                We have gained prowess in assisting small, medium, and large
                scale businesses to improve their PPC advertising results. You
                can always rely on our knowledge, experience, and result-driven
                approach to get the maximum results for your business. Our
                management advertising campaigns need little to no alteration to
                your current website’s Content Management. Our experts work with
                consistency and dedication to deliver results for your ad
                campaign.
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                HIRE PPC EXPERT
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
            <h2 className="bi_bl_50">Other Services</h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Social Media Ads Campaigns</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/woocommerce.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Content Marketing Campaigns</h3>
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
                      Online Reputation Management Campaigns
                    </h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/shopify.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">ASO Promotion Services</h3>
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

export default Ppcmanagementservices;
