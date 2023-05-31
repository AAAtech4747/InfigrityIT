import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";



const Enterprizedevlopment = () => {

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
        document.body.classList.add('inner');
      
        return () => {
            document.body.classList.remove('inner');
        }
      }, [])

  return (
    <div>
    <Helmet>
        <title>Enterprise Development Services</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Scalable Enterprise Solutions"
        />
        <meta
          property="og:description"
          content="Scalable and secure enterprise development solutions. Unlock your enterprise's full potential with us."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
      </Helmet>
    {/*------------------------------- Banner Section---------------------------------- */}
<div
    className="breadcrumb"
    style={{ background: "url(../../img/Magento-Website-Development.jpg) no-repeat center" }}
  >
    <div className="wrapper">
      <ul>
        <li>
        <Link to={"/"}>home</Link>
        </li>
        <li>
          <h1>Enterprize Devlopment</h1>
        </li>
      </ul>
    </div>
  </div>  
  {/* -------------------------Magento Migration Section ------------------------ */}
    
  <section className="whoweare section mt-2" >
            <div className="wrapper">
              <div className="whoweare_inner reverse oneimg row m-0 align-items-md-center">
                <div className="whoweare_inner_left p-0">
                  <figure>
                    <img src="../img/Magento_enterprize_devlopment.png" alt="" />
                  </figure>
                 
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  Magento Enterprise Development
                  </h2>
                  
                  <p className="in_r_16">
                  Make your ecommerce store highly efficient, promotional and flexible with our cutting edge, customised Magento enterprise development solutions.
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
{/*---------------------------- Elsner and Magento Ecommerce Development--------------- */}
  
        <section className="whoweare section mt-2" >
            <div className="wrapper">
              <div className="whoweare_inner row m-0 align-items-md-center">
                <div className="whoweare_inner_left p-0">
                  <figure>
                    <img src="../img/whoweare_img_1.png" alt="" />
                  </figure>
                  <span>
                    
                    <video playsInline autoPlay muted loop >
                  <source src="../img/content/ecommerce.mp4" type="video/mp4" />
                </video>
                    </span>
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  Top-Notch Magento Enterprise development solutions by Elsner
                  </h2>
                  
                  <p className="in_r_16">
                  Elsner Technologies is a successful Magento enterprise development company that provides superlative development solutions using the Magento platform that enhances or maximizes the number of potential customers and return on investment. We have a team of dedicated Magento developers who have shown consistency in delivering quality deliverables for our esteemed clientele every single time. We employ the most flexible Magento enterprise edition that assists us in delivering a wide array of eCommerce solutions to grow your business.
                  </p>
                  <p className="in_r_16">
                  Our ultimate goal is to deliver high-quality Magento enterprise development solutions that enhance your sales figure & increase your ROI in quick time. With the help of our cost-effective Magento Enterprise solutions you can expect higher conversions ultimately resulting in business growth. The great news is that our Magento Enterprise developers have proper understanding of Magento Enterprise edition which makes them deliver nothing but the best for our clients.
                  </p>
                   <Link to={'/contact-us'} className="btn_fill_black">
                  GET A FREE QUOTE
                    <span className="browser-window__link">
                      <i className="fas fa-chevron-right" />
                    </span>
                    </Link>
                </div>
              </div>
            </div>
         </section>
  {/*---------------------------- Elsner and Magento Ecommerce Development--------------- */}
         <section className="services section" >
            <div className="wrapper">
              <div className="services_inner">
                <h2 className="bi_bl_50" style={{maxWidth:"none"}}>
                Our comprehensive service funnel has rich features such as:
                </h2>
                <ul className="row">
                  <li className="col-md-2">
                    <div className="services_inner_box">
                      <figure>
                        <img src="../img/web_services.svg" alt="" />
                      </figure>
                      <h3 className="bi_r_20 ">
                      RESPONSIVE
                      </h3>
                      {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                    </div>
                  </li>
                  <li className="col-md-2">
                    <div className="services_inner_box">
                      <figure>
                        <img src="../img/digital_services.svg" alt="" />
                      </figure>
                      <h3 className="bi_r_20">
                      UPGRADATION
                      </h3>
                      {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                    </div>
                  </li>
                  <li className="col-md-2">
                    <div className="services_inner_box">
                      <figure>
                        <img src="../img/branding_services.svg" alt="" />
                      </figure>
                      <h3  className="bi_r_20 word">
                      SECURITY
                      </h3>
                      {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                    </div>
                  </li>
                  <li className="col-md-2">
                    <div className="services_inner_box">
                      <figure>
                        <img src="../img/data_security.svg" alt="" />
                      </figure>
                      <h3 className="bi_r_20">
                      MAINTENANCE
                      </h3>
                      {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                    </div>
                  </li>
                  <li className="col-md-2">
                    <div className="services_inner_box">
                      <figure>
                        <img src="../img/digitalmarketing.svg" alt="" />
                      </figure>
                      <h3 className="bi_r_20">
                      MIGRATIONS
                      </h3>
                      {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                    </div>
                  </li>
                  <li className="col-md-2">
                    <div className="services_inner_box">
                      <figure>
                        <img src="../img/qualityassurance.svg" alt="" />
                      </figure>
                      <h3 className="bi_r_20">
                      PWA
                      </h3>
                      {/* <a href="#" class="btn_fill_black">More Info <span class="browser-window__link"><i class="fas fa-chevron-right" ></i></a> */}
                    </div>
                  </li>
                </ul>
                
              </div>
            </div>
          </section>
 {/*------------------- Our Magento ecommerce development solutions include:--------------------- */}
          <section className="technologies section words chars splitting" >
            {/* <div class="techno_vertical_title">OUR EXPERTISE</div> */}
            <div className="wrapper">
              <div className="technologies_inner">
              <h2 className="bi_bl_50">
              Magento Enterprise development solutions include:
                </h2>
                <ul className="row">
                  <li className="col-md-4">
                    <div className="technologies_inner_box">
                      <figure>
                        <img src="../img/wordpress.svg" alt="" />
                      </figure>
                      <div className="technologies_inner_box_text">
                        <h3 className="bi_r_24">CUSTOMISED MAGENTO ENTERPRISE DEVELOPMENT</h3>
                        <p className="in_r_16">
                        Elsner provides highly ingenious features that are key to grow your eCommerce business of any size. We provide customized Magento Enterprise development services that help you configure and optimize Magento tailored business model.
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
                        <h3 className="bi_r_24">MIGRATION TO MAGENTO FROM ANY ONLINE PORTAL</h3>
                        <p className="in_r_16">
                        Our Magento Enterprise eCommerce websites are responsive which makes them run effortlessly on all sizes of the screen. We enhance your customers’ experience with the help of our responsive Magento website development services.
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
                        <h3 className="bi_r_24">RESPONSIVE MAGENTO ENTERPRISE EDITION SOLUTIONS</h3>
                        <p className="in_r_16">
                        Our Magento Enterprise eCommerce websites are responsive which makes them run effortlessly on all sizes of the screen. We enhance your customers’ experience with the help of our responsive Magento website development services.
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
                        <h3 className="bi_r_24">MAGENTO CONSULTING SERVICES</h3>
                        <p className="in_r_16">
                        Are you confused about whether to upgrade to Magento or not? Do you have your own concerns? Hire our Magento consulting team and they will give you insightful guidance after thoroughly studying your business and needs.
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
                        <h3 className="bi_r_24">MAGENTO 2 IMPLEMENTATION</h3>
                        <p className="in_r_16">
                        Do you want a brand new online store for your B2C or B2B business from scratch? We have a fully dedicated team of Magento developers with in-depth understanding of the domain and rich experience in offering Magento enterprise solutions.
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
                        <h3 className="bi_r_24">MAGENTO 2 MIGRATION</h3>
                        <p className="in_r_16">
                        You can migrate from any third party ecommerce platform to Magento to enjoy some superlative features from Magento. Our best Magento brains will ensure that the migration takes place smoothly and seamlessly.
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
                        <h3 className="bi_r_24">MAGENTO BACKEND DEVELOPMENT</h3>
                        <p className="in_r_16">
                        We can help you in improving the productivity of your admin team by personalising your management controls. The teams can collaborate and perform admin tasks easily and quickly by building customised provisions.
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
                        <h3 className="bi_r_24">MAGENTO SUPPORT AND MAINTENANCE</h3>
                        <p className="in_r_16">
                        When it comes to Magento, we are here for you to offer you 360 degree Magento solutions including support and maintenance. We are just a phone call or email away if you are looking for any consulting or guidance.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
               
              </div>
            </div>
          </section>
 {/*------------------------------------ Why to choose us?---------------------------------- */}
  
        <section className="whoweare section mt-2" >
            <div className="wrapper">
              <div className="whoweare_inner row m-0 align-items-md-center">
                <div className="whoweare_inner_left p-0">
                  <figure>
                    <img src="../img/whoweare_img_1.png" alt="" />
                  </figure>
                 
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  Reasons to choose Elsner for Magento Enterprise Development
                  </h2>
                  
                  <p className="in_r_16">
                  Elsner Technologies is one of the best companies to avail Magento Enterprise development services. We have the technology and the manpower resources to deliver amazingly creative Magento Enterprise development solutions for your online store. Our certified Magento developers are skilled professional and technically sound at work. They have already developed hundreds of customized enterprise eCommerce solutions for our reputed clientele across the globe.
                  </p>
                  <p className="in_r_16">
                  We have an experience of more than a decade of providing magento eCommerce development consulting services. Our transparent and open communication during the entire project development phase has won the hearts of our many clients. Want to know the reason? Affiliate with us today!
                  </p>
                  <p className="in_r_16">
                  Elsner is one of the best ecommerce website development companies in the USA and we have carved a niche for ourselves by offering highly scalable, comprehensive, and secure Adobe Commerce enterprise web solutions for our clients. If you want to develop Adobe Commerce enterprise development services, let Elsner help you. 
                  </p>
                  <p className="in_r_16">
                  Adobe is an organization that has leadership in marketing, advertising, content creating, and analysis for real-time experiences. Adobe Commerce and Magento have a vision for a great digital experience. Adobe handles content while Magento manages data with innovations.
                  </p>
                  <Link to={'/contact-us'} className="btn_fill_black">
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
                          <img src="../img/Unlock-the-unique-benefits-and-features-Pim-Core.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        Unlock The Unique Benefits And Features: Pim Core
                        </h3>
                        <p className="in_r_16">
                        When you deal with digital platforms it is essential to make the right choices. Handling multiple tasks becomes challenging and…
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/B2B-features-in-Adobe-Magento-2-Final.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        How to use Adobe Magento 2 for B2B business? Everything you need to know!
                        </h3>
                        <p className="in_r_16">
                        B2B features in Adobe Magento 2 are designed to support the requirements of businesses that sell to other businesses, such…
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/How-to-Use-New-Relic-APM-with-Magento-2-Final.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        Why New Relic is Useful & How to Implement in Magento 2?
                        </h3>
                        <p className="in_r_16">
                        New Relic is an Observation for Adobe Commerce. New Relic enables the efficient management, monitoring, and troubleshooting of your applications…
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/Unlock-the-unique-benefits-and-features-Pim-Core.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        Unlock The Unique Benefits And Features: Pim Core
                        </h3>
                        <p className="in_r_16">
                        When you deal with digital platforms it is essential to make the right choices. Handling multiple tasks becomes challenging and…
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/B2B-features-in-Adobe-Magento-2-Final.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        How to use Adobe Magento 2 for B2B business? Everything you need to know!
                        </h3>
                        <p className="in_r_16">
                        B2B features in Adobe Magento 2 are designed to support the requirements of businesses that sell to other businesses, such…
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/How-to-Use-New-Relic-APM-with-Magento-2-Final.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        Why New Relic is Useful & How to Implement in Magento 2?
                        </h3>
                        <p className="in_r_16">
                        New Relic is an Observation for Adobe Commerce. New Relic enables the efficient management, monitoring, and troubleshooting of your applications…
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

          <section className="letstalk section" >
            <div className="wrapper">
              <div className="letstalk_inner">
                <h2 className="bi_r_24" data-splitting>
                Digital Transformation begins here!
                </h2>
                <h3 className="bi_bl_50">
                Let us write your business’s growth story by offering innovative, scalable and result-driven IT solutions. Do you have an idea that has a potential to bring a change in the world? Don’t hesitate, share with our experts and we will help you to achieve it.
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
  )
}

export default Enterprizedevlopment