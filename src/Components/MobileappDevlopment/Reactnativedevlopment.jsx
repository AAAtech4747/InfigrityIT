import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";



const Reactnativedevlopment = () => {

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
        <title>React Native Development Services</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Expert React Native Solutions" />
        <meta
          property="og:description"
          content="Expert React Native development services for robust mobile applications. Partner with us for expert development services."/>
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
          <h1>Iphone App Development</h1>
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
                    <img src="../img/content/react-native.png" alt="" />
                  </figure>
                 
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  React Native Development Services
                  </h2>
                  
                  <p className="in_r_16">
                  React Native is an open-source framework that allows developers to build high-quality mobile applications for iOS and Android using a single codebase. By using React Native, developers can create apps that are fast, reliable, and easy to maintain, all while delivering a seamless user experience.
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
  
        <section className="whoweare section mt-2" >
            <div className="wrapper">
              <div className="whoweare_inner row m-0 align-items-md-center">
                <div className="whoweare_inner_left p-0">
                  <figure>
                    <img src="../img/whoweare_img_1.png" alt="" />
                  </figure>
                  <span>
                    
                    <video playsInline autoPlay muted loop >
                  <source src="../img/content/mobile.mp4" type="video/mp4" />
                </video>
                    </span>
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                 React Native app development- why your business needs it?
                  </h2>
                  
                  <p className="in_r_16">
                  React Native has quickly become one of the most popular mobile app development frameworks in the world. Some of the reasons for its popularity include its ability to help developers save time and money, its flexibility and scalability, and its robust community support.
                  </p>
                  <p className="in_r_16">
                  Infigrity Technologies is a 9001:2008 certified iOS app development company that has a skillful team of iPhone developers who offer customized iOS app development services at cost-effective prices across the globe. Our iPhone app development solutions have been highly appreciated by our clients, thanks to the innovativeness and out-of-the-box ideas generated by our talented developers.
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
  {/*---------------------------- Infigrity and Magento Ecommerce Development--------------- */}
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
              Our iPhone app development services include:
                </h2>
                <ul className="row">
                  <li className="col-md-4">
                    <div className="technologies_inner_box">
                      <figure>
                        <img src="../img/wordpress.svg" alt="" />
                      </figure>
                      <div className="technologies_inner_box_text">
                        <h3 className="bi_r_24">Custom React Native App Development</h3>
                        <p className="in_r_16">
                        Let's create craft feature-rich cross-platform application for your business using efficient framework that ensures satisfactory custom react native solutions.
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
                        <h3 className="bi_r_24">React Native App Maintenance and Support</h3>
                        <p className="in_r_16">
                        The framework provides the easiest yet reliable way to reach the market. Save on development costs while getting a cross-platform application that works seamlessly on Android, iOS, and web platforms.
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
                        <h3 className="bi_r_24">React Native App Testing and Optimization</h3>
                        <p className="in_r_16">
                        The React Native testing framework allows you to build web, Android, and iOS apps with the same codebase using ReactJs. Testing is a process for identifying the bugs in the UI of an application after it has undergone development. This article helps you understand how to perform end-to-end testing of React Native apps.
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
                        <h3 className="bi_r_24">React Native App Upgrades and Migration</h3>
                        <p className="in_r_16">
                        The migration process can be done in two ways: with a greenfield or brownfield software development. Let’s go through those two approaches, point out the main differences between them, and describe pros and cons of each one to make you choose the right approach for your product and team.
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
                        <h3 className="bi_r_24"> Cross-Platform App Development</h3>
                        <p className="in_r_16">
                        
                        Mobile apps have become a must for many businesses across various industries and it’s essential that applications run seamlessly on both iOS and Android. By leveraging the cross-platform mobile development approach, you can create such solutions quickly and cost-efficiently.
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
                        <h3 className="bi_r_24">React Native Consulting and Strategy</h3>
                        <p className="in_r_16">
                        Our React Native consulting services and development is unparalleled, and we've got a diverse portfolio of successful work to show for it.
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
                  Why to choose Infigrity for React Native app development?
                  </h2>
                  
                  <p className="in_r_16">
                  At our digital development company, we specialize in providing top-quality React Native development services to businesses of all sizes. Our team of experienced developers is committed to delivering customized solutions that meet your unique business needs. We use cutting-edge tools and technologies to create apps that are fast, reliable, and easy to maintain, all while delivering a seamless user experience.
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
                          <img src="../img/blog_img_1.png" alt="" />
                          <span>#industry practices</span>
                        </figure>
                        <h3 className="bi_r_24">
                          Build a closer relationship with your Customers
                        </h3>
                        <p className="in_r_16">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
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
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
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
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
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
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
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
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
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
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book.
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
          <section className="letstalk section" >
            <div className="wrapper">
              <div className="letstalk_inner">
                <h2 className="bi_bl_50" data-splitting>
                Digital Transformation begins here!
                </h2>
                <h3 className="bi_r_24">
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

export default Reactnativedevlopment