import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";



const Magentosupportplan1 = () => {
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
        <title>Magento Support Plan	</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Reliable Magento Support"  />
        <meta
          property="og:description"
          content="Comprehensive support plans to ensure smooth functioning of your Magento store. Explore our support plans."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"/>
      </Helmet>
      {/*------------------------------- Banner Section---------------------------------- */}
      <div
        className="breadcrumb"
        style={{
          background: "url(../../img/magento-support-plan.jpg) no-repeat center",
        }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Magento Support Plan</h1>
            </li>
          </ul>
        </div>
      </div>
      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner reverse oneimg row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/content/maintenance-support.png" alt="magento" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Exciting Magento Support Packages just for you!
              </h2>

              <p className="in_r_16">
                Now, step in the game with great Magento Support services. We
                are committed to delivering the best Magento Enterprise
                solutions for your niche. Do not miss this opportunity!
              </p>
              <a href="about.html" className="btn_fill_black">
                Read More
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner  row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
              <span>
                <video playsInline autoPlay muted loop>
                  <source src="../img/content/magento_support.mp4" type="video/mp4" />
                </video>
              </span>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Get our Magento Support Services to run your platform smoothly!
              </h2>

              <p className="in_r_16">
                Infigrity is a leading organization for Magento support and
                maintenance services. The platform is evolving the way people
                build and grow in the ecommerce world. Magento has some amazing
                features and solutions to make your store user-friendly. You get
                to explore the best features and functionalities for your
                e-commerce business.
              </p>
              <p className="in_r_16">
                Our Magento developers do not just build a website, and they
                carve it perfectly based on your requirements and market
                demands. We deal with catalog updates, installation of
                extensions, Magento 1 to Magento 2 migration, SEO, generating
                reports, and many more. As a business owner, we understand your
                expectations and market demands to provide the best solution
                available in the market.
              </p>
              <p className="in_r_16">
                Having an Adobe Commerce site is not enough, you need a team who
                can monitor the website and make amendments in it to facilitate
                a highly satisfying experience to your customers. Hire our Adobe
                Commerce support plan to constantly monitor your website and to
                address bugs and issues in just no time. Infigrity has an
                experienced team of Magento developers and quality analysts who
                will make sure that your online store runs smoothly and
                flawlessly.
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
                Why hire Infigrity as your Magento Support Partner?
              </h2>

              <p className="in_r_16">
                There are over 12+ Magento certified developers in our team. We
                believe in maintaining long-term relationships with our clients.
                That is why we carve the Magento support packages based on their
                requirements. There are monthly and yearly level agreements
                based on your budget and needs. We will maintain complete
                transparency and keep you updated with every step of the
                development phase. We use various communication tools to share
                information and resolve issues instantly.
              </p>
              <p className="in_r_16">
                Get access to great tools, resources, and technologies in one
                place!
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
      <section className="letstalk section">
        <div className="wrapper">
          <div className="letstalk_inner">
            <h2 className="bi_r_24">Digital Transformation begins here!</h2>
            <h3 className="bi_bl_50">
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

export default Magentosupportplan1;
