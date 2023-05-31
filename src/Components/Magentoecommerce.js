import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";


const Magentoecommerce = () => {

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
        <title>Custom Ecommerce Solutions</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Tailored Ecommerce Solutions"
        />
        <meta
          property="og:description"
          content="Customized e-commerce solutions for your unique business requirements. Explore our comprehensive solutions."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
      </Helmet>
    {/*------------------------------- Banner Section---------------------------------- */}
<div
    className="breadcrumb"
    style={{ background: "url(../../img/magento-page-banner.jpg) no-repeat center" }}
  >
    <div className="wrapper">
      <ul>
        <li>
        <Link to={"/"}>home</Link>
        </li>
        <li>
          <h1>Magento Ecommerce</h1>
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
                    <img src="../img/content/ecommerce.jpg" alt="" />
                  </figure>
                 
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  Magento eCommerce Development Services
                  </h2>
                  
                  <p className="in_r_16">
                  Highly scalable, robust and end-to-end Magento ecommerce services by Elsner will help you to manage your store seamlessly and give superior user experience to the customers.
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
{/*---------------------------- Elsner and Magento Ecommerce Development--------------- */}
  
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
                  Elsner and Magento Ecommerce Development
                  </h2>
                  
                  <p className="in_r_16">
                  Elsner Technologies is a Magento certified company that provides superlative Magento eCommerce development services with high-quality output. You can always expect optimal deliverables from our Magento developers. We believe in delivering only the best eCommerce development services to our esteemed clientele at a quick turnaround time. We have the acumen of developing supreme extensions that are highly ingenious by nature. Your online Magento eCommerce store will climb the stairway to success once you develop it from us.
                  </p>
                  <p className="in_r_16">
                  A great eCommerce website is all about being responsive, user-friendly, and sales generation machine. Whether planning for a brand new eCommerce store or want to go for a Magento eCommerce web design, we as an all-round Magento eCommerce development team deliver a perfect blend of technical expertise, by identifying your core needs and implementing the same into effective solutions.
                  </p>
                  <p className="in_r_16">
                  Magento is one of the best ecommerce platforms to develop an online store. If you are looking for the best Adobe Commerce development services, Elsner is a name to remember. We have a full-fledged team that will develop your store from scratch, based on your personal business requirements. Hire our experienced Magento eCommerce development team now.
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
              Our Magento ecommerce development solutions include:
                </h2>
                <ul className="row">
                  <li className="col-md-4">
                    <div className="technologies_inner_box">
                      <figure>
                        <img src="../img/wordpress.svg" alt="" />
                      </figure>
                      <div className="technologies_inner_box_text">
                        <h3 className="bi_r_24">MAGENTO ECOMMERCE STORE DEVELOPMENT</h3>
                        <p className="in_r_16">
                        Our Magento eCommerce developers have the expertise and acumen of developing Magento eCommerce stores that range from simple to most complex ones. Expect high levels of accuracy from us to get maximum results.
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
                        <h3 className="bi_r_24">MAGENTO CONSULTING SERVICES</h3>
                        <p className="in_r_16">
                        We have a team of Magento consultants who will understand your business needs and how Magento can help you to achieve your goals. They will give highly precise and thoughtful Magento consulting services related to Magento design and development needs.
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
                        <h3 className="bi_r_24">MAGENTO 1 TO MAGENTO 2 TRANSITION</h3>
                        <p className="in_r_16">
                        Some of our clients want to start from scratch by having a Magento eCommerce store that is developed in Magento 2. Alternatively, we even take the requests to make the transition from Magento 1 to Magento 2 and give first class results at first attempt.
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
                        <h3 className="bi_r_24">PLATFORM MIGRATION</h3>
                        <p className="in_r_16">
                        Do you want to shift your existing ecommerce website to Magento? Our skilled Magento professionals will ensure that your website is migrated smoothly and seamlessly while adding and integrating the most suitable features.
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
                        <h3 className="bi_r_24">CUSTOMIZED MAGENTO THEME DEVELOPMENT</h3>
                        <p className="in_r_16">
                        We understand that each and every business will have a different requirement so we zero-in on a Magento theme after understanding the crux of your business and then delivering customized Magento theme that is in accordance with the requirements of your business.
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
                        <h3 className="bi_r_24">MAGENTO STORE CUSTOMISATION</h3>
                        <p className="in_r_16">
                        We provide the option of customizing your Magento eCommerce store at any given point of time. This means that at any given point of time you can ask us to personalize your online store as per your business requirement.
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
                        <h3 className="bi_r_24">MAGENTO EXTENSIONS DEVELOPMENT</h3>
                        <p className="in_r_16">
                        We customize all your Magento development requirements by understanding your business requirements. We even assist you in developing a range of different extensions that support your online store.
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
                        <h3 className="bi_r_24">SUPPORT AND MAINTENANCE</h3>
                        <p className="in_r_16">
                        Our Magento eCommerce development services do not stop once we have developed your Magento eCommerce online store. We provide support by taking care of all the bugs and minor issues that you face during the initial phase of operation.
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
                  Why to choose us?
                  </h2>
                  
                  <p className="in_r_16">
                  Elsner Technologies is a premier Magento eCommerce development company that delivers amazing online stores with high-quality maintenance and support. We provide great value to your eCommerce stores by integrating seamless extensions that beautify your eCommerce sites to another level.
                  </p>
                  <p className="in_r_16">
                  Our expert Magento developers are well-equipped to deliver a class apart eCommerce store using the Magento Development technology. They are proficient in delivering highly ingenious online stores that are not only ingenious but also highly creative by nature.
                  </p>
                  <p className="in_r_16">
                  According to Adobe commerce, the addition of Magento Commerce Cloud will bring immense experience to the Cloud services. While Magento still has its roots as an open-source. This is believed to be a scalable technology that is supported by a vibrant community.
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
                          <img src="../img/Maropost-eCommerce.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        How Is Maropost eCommerce Bringing Great Change In The future?
                        </h3>
                        <p className="in_r_16">
                        What are the best solutions for your eCommerce platform? Every business owner aims to maximize returns while making smart investments. …
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/Microsoft-Power-BI-7.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        Microsoft Power BI: 7 reasons to use it
                        </h3>
                        <p className="in_r_16">
                        Power BI is a business intelligence and data visualisation application for transforming data from diverse data sources into interactive dashboards…
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/HeadlessE-Commerce.png" alt="" />
                         
                        </figure>
                        <h3 className="bi_r_24">
                        Leading Headless eCommerce Platforms for Business Development
                        </h3>
                        <p className="in_r_16">
                        In the twenty-first century, the eCommerce market has peaked. The IoT, mobile apps, progressive web apps, and other ways are…
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/Maropost-eCommerce.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        How Is Maropost eCommerce Bringing Great Change In The future?
                        </h3>
                        <p className="in_r_16">
                        What are the best solutions for your eCommerce platform? Every business owner aims to maximize returns while making smart investments. …
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/Microsoft-Power-BI-7.jpg" alt="" />
                          
                        </figure>
                        <h3 className="bi_r_24">
                        Microsoft Power BI: 7 reasons to use it
                        </h3>
                        <p className="in_r_16">
                        Power BI is a business intelligence and data visualisation application for transforming data from diverse data sources into interactive dashboards…
                        </p>
                      </a>
                    </div>
                    <div className="blog_inner_slider_item">
                      <a href="#">
                        <figure>
                          <img src="../img/HeadlessE-Commerce.png" alt="" />
                         
                        </figure>
                        <h3 className="bi_r_24">
                        Leading Headless eCommerce Platforms for Business Development
                        </h3>
                        <p className="in_r_16">
                        In the twenty-first century, the eCommerce market has peaked. The IoT, mobile apps, progressive web apps, and other ways are…
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

export default Magentoecommerce