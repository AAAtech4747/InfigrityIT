import React from 'react'
import { useEffect } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import '../Components/custom.css';
import './custom.css';
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";


const Magentomigrationservices = () => {
     
    document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

      const [play, setPlay] = React.useState(false);
      const url = play
        ? `https://www.youtube.com/embed/tu-bgIg-Luo?autoplay=1`
        : `https://www.youtube.com/embed/tu-bgIg-Luo`;
      const TestimonialSlider ={
        arrows: false,
            dots: false,
            infinite: true,
            centerMode: true,
            centerPadding: '2rem',
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
                  centerPadding: '0',
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
        <title>Magento 2 Migration Service </title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Seamless Migration to Magento 2"
        />
        <meta
          property="og:description"
          content="Seamless migration to Magento 2 for enhanced performance. Explore our migration service now."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"/>
      </Helmet>

    {/*------------------------------- Banner Section---------------------------------- */}
    <div
        className="breadcrumb"
        style={{ background: "url(../../img/banner-2-scaled.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
            <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Magento Migration Services</h1>
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
                    <img src="../../img/content/Magento-1-to-Magento-2-Migration.png" alt="" />
                  </figure>
                 
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  Magento Migration Services
                  </h2>
                  <p className="in_r_20" >
                  Now is the time to migrate your eCommerce store from Magento 1 to Magento Commerce 2. As the Magento 1 version support services are going to stop in June 2020...Do you need any better reason than this? The countdown has already begun….

                  </p>
                  <p className="in_r_20 mt-5">
                 
                  It is high time for Magento 1 to Magento 2 migration to unlock the great features and functionalities of the platform. Many online businesses have already performed the Magento 1 to Magento 2 migration and are gaining profits effortlessly.
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
 {/* -------------------------Magento 2 Migration Service ------------------------ */}
         <section className="whoweare section">
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
                  Magento 2 Migration Service
                  </h2>
                  
                  <p className="in_r_16">
                  It is quite difficult to conduct Magento migration services from one Magento version to another. There is a definite need for an expert to deal with this process in a very professional manner. It is extremely critical for you to ensure that the product, customer, and order data is successfully transferred to the recent Magento version i.e., 2.4.3.
                  </p>
                  <p className="in_r_16">
                  You also need to ensure that any existing integrations are ported over and are working perfectly once the migration process gets over. Not only that you also need to make sure that your store’s URL structure and SEO rankings are not affected. Finally once the new version is migrated to the new site loads and functions very swiftly.

                  </p>
                  <p className="in_r_16">

Always make sure that the transition process that is carried out is extremely smooth for both you and the customers. Also, there should not be any down time in your operations. This is where a reliable Magento migration partner like Elsner Technologies can become vital to increase the chances of successful transition.

                  </p>
                  <p className="in_r_16">

Most of the time eCommerce store owners migrate from Magento 1 to the recent version of Magento 2 only when they face problems in their current eCommerce platform. This can be when the customers start complaining about the difficulty they encounter while browsing their online store while placing orders or navigating the website.

                  </p>
                  <p className="in_r_16">

If you are also facing a similar situation it is about time to look for the transition by availing our Magento migration services.
                  </p>
                </div>
              </div>
            </div>
         </section>
 {/* -------------------------Vital Stats about Magento 2 Migration ------------------------ */}
        <section className="blog section" >
            <div className="wrapper">
              <div className="blog_inner">
                <div className="blog_inner_title" style={{maxHeight:"200rem" }}>
                  <h2 className="bi_bl_50" data-splitting>
                  Vital Stats about Magento 2 Migration
                  </h2>
                  <p className="in_r_16"  >
                  Being one of the prominent Magento web development companies in the US, we totally comprehend the fact that eCommerce business is driven by sales. Hence, we have provided certain stats that showcase the improvements in online store after migrating their Magento stores from Magento 1 version to Magento 2.

                  </p>
                  <p className="in_r_16" >

Apart from the benefits of Magento 1 to 2 migration, the essential thing is that Magento has removed its support to Magento 1 from June 2020. No one wants to be left behind from such essential trends in the developing world.

                  </p>
                  <p className="in_r_16" >
Every Magento 1 to Magento 2 Migration is performed in four different stages, namely:
                   
                  </p>
                  <p className="in_r_16 pm" >
                 
Theme Magento 2 Migration: This is not a straightforward process. Developers can help you create a custom theme or install a theme from the Magento marketplace.
                  </p>
                  <p className="in_r_16 pm" >
Extension Migration: Some extensions or plugins might not be compatible with the Magento 2 Migration. You need to know the extensions that are supported by the Magento 2 platform.
                  </p>
                  <p className="in_r_16 pm" >
Customization Magento 2 Migration: There are chances that your Magento store might be running on custom code. It is vital to move the code during Magento 1 to 2 migration safely.
                  </p>
                  <p className="in_r_16 pm" >
Data Migration: This is the final step which includes migration of customers, products, configurations, orders, and more. All the valuable data is migrated to Magento 2 using the right tools.
                  </p>
                  <p className="in_r_16 pm" >
                  It is vital to test each step during the Magento 1 to Magento 2 migration to avoid hindrance in the performance of your website.
                  </p>
                  <p className="in_r_16 pm" >
                  Do you want to migrate your existing ecommerce store to the new Adobe Commerce platform? Well, our Adobe Commerce developers can make it happen like smooth sailing, without any data loss. There are some superlative benefits of switching to Adobe Commerce. It has amazing features and functionalities, better UI/UX experience, third-party extensions, etc. Hire our Adobe Commerce developers now to migrate your store to a more promising Adobe Commerce platform.              </p>

                </div>

                

                
               
              </div>
            </div>
        </section>
{/* -------------------------Vital Stats about Magento 2 Migration ------------------------ */}
        <section className="technologies section words chars splitting" >
            {/* <div class="techno_vertical_title">OUR EXPERTISE</div> */}
            <div className="wrapper">
              <div className="technologies_inner">
                
                <ul className="row">
                  <li className="col-md-4">
                    <div className="technologies_inner_box">
                      <figure>
                        <img src="../img/wordpress.svg" alt="" />
                      </figure>
                      <div className="technologies_inner_box_text">
                        <h3 className="bi_r_24">Latest Magento</h3>
                        <p className="in_r_16">
                        online stores that have migrated to the latest Magento 2 versions have turned their annual revenue to $60 billion
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
                        <h3 className="bi_r_24">Latest Magento</h3>
                        <p className="in_r_16">
                        It has been found that 56801 websites are currently using Magento 2 platform and an additional 70,588 sites have already used Magento 2 historically.
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
                        <h3 className="bi_r_24">Faster Page Load</h3>
                        <p className="in_r_16">
                        Magento 2 provides 50% faster page loads than Magento 1 with a 38% faster checkout process and 135,000 more orders.
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
                        <h3 className="bi_r_24">World Wide Usage</h3>
                        <p className="in_r_16">
                        According to a report from Built with, 44% of the world’s online stores that are using Magento 2 are located in the US.
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
                        <h3 className="bi_r_24">Mobile Friendly</h3>
                        <p className="in_r_16">
                        online stores that migrated from Magento 1 to Magento 2 were able to provide seamless mobile experience to customers ultimately resulting in increased revenue.
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
                        <h3 className="bi_r_24">Fast Order Process</h3>
                        <p className="in_r_16">
                        Magento 2 processes 28% more orders on an hourly basis, reaching 597 orders per hour
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
               
              </div>
            </div>
          </section>
{/* -------------------------What is the Need for Magento 2 Migration? ------------------------ */}
          <section className="whoweare section mt-3">
            <div className="wrapper">
              <div className="whoweare_inner row m-0 align-items-md-center">
                <div className="whoweare_inner_left p-0">
                  <figure>
                    <img src="../img/whoweare_img_1.png" alt="" />
                  </figure>
                  </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  What is the Need for Magento 2 Migration?
                  </h2>
                  
                  <p className="in_r_16">
                  Magento 2.0 and higher versions are not mere upgrades to your Magento store but it is everything that your store can possibly become in the near future. It has the power to transform your online store to the new level of success. By migrating to the latest Magento version it is possible to get a bucket full of new features which were not accessible in Magento 1.
                  In addition to this, your checkout process gets swift and your page loading time improves when you migrate to the latest version of Magento 2. On top of this, if you are someone who likes to take full advantage of SEO for your eCommerce store, Magento 2 provides enhanced SEO options that makes the user experience positive. It even has enhanced functions for the store admin like never before!
                  </p>
                  <p className='in_r_16 fs-1'>
                  Let’s now divert our attention to some of the reasons for migrating to the latest version of Magento i.e., 2.3.2.
                  </p>
                  

  
  <p className="in_r_16">
  Magento is going to stop support for Magento 1 websites in June 2020 so if you have any support issues there would be no guidance available.
 </p>
 <p className="in_r_16">
 Since the launch of Magento 2, eCommerce system developers have stopped adding new features in Magento 1.
 </p>
 <p className="in_r_16">
 There are a whole new set of features that you can now access in Magento 2 which were not there in Magento 1.
 </p>
 <p className="in_r_16">
 Magento 2 is known to have much higher conversion rate compared to Magento 1.
 </p>
 
                </div>
              </div>
            </div>
         </section>


{/*--------------------- Magento 1 to 2 Migration Process-------------------------- */}
        <section className="blog section" >
            <div className="wrapper">
              <div className="blog_inner">
                <div className="blog_inner_title">
                </div>
                 </div>
            </div>
        </section>

{/*-----------------------------------Our work-------------------------------------- */}        
        <section className="blog section">
            <div className="wrapper">
              <div className="blog_inner">
                <div >
                  <h2 className="bi_bl_50" data-splitting>
                    Elevating Brands through innovation in Digital
                    Transformation
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


{/*-----------------------------------Faq Section-------------------------------------- */}   
<div className='faq'>
    <div className='wrapper'>
      <div className='faq_inner'>
      <h2 class="bi_bl_50" data-splitting="true">Magento Migration FAQs</h2>
      <p class="in_r_16">Find answers to your frequently asked questions</p>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Will you install latest Magento security patches during Magento migration?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      At the time of migration to the latest Magento version, our Magento developers ensure that the latest security patches automatically gets installed. This way you do not have to worry about installing the latest Magento security patches from scratch.
        </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Will the new version of Magento enhance the checkout process?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes. Magento 2.2.2, the latest version has a feature known as an instant purchase that enables customers to buy products with the help of a single click. This can be availed for all default shipping, payment, and other information
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How much will it cost us to avail Magento Migrate Service from Infigrity Technologies?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      To tell you the exact cost, it is important for us to review your store and then determine the extent of migration required for your eCommerce store. We suggest you call us or book a free consultation and one of our Magento migration experts will get back to you soon.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Will I be able to get the same functionality that I had in the previous version?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Magento 2 version has some of the far advanced functionalities than any of the previous versions. This way you can rest assured to get comprehensive store productivity. In case, there is a core or theme customization required then our team will review it first before going ahead with the Magento Migrate process
     </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>

{/*-----------------------------------Our Testimonials-------------------------------------- */}
        <section className="ourtestimonial section">
             <div className="wrapper">
    <div className="ourtestimonial_inner">
    {/* <Slider {...TestimonialSlider}> */}
    
      <div className="ourtestimonial_slider">
      <Slider {...TestimonialSlider}>
        <div className="t-item">
          <div className="t-video">
      
            <figure>
            <iframe
        width="560"
        height="315"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
            </figure>
            <span>
              <img src="../img/playbutton.svg" onClick={() => setPlay(true)} alt="" />
            </span>
          </div>
          <div className="t-text">
            <figure className="client_logo">
              <img src="../img/portfolio/sonio.png" alt="" />
            </figure>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              placeat dolorum fugit quasi. Quibusdam consequuntur veritatis
              necessitatibus blanditiis harum? Rerum atque vero quia maxime eos
              veritatis non eum quisquam numquam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eveniet placeat dolorum fugit quasi.
              Quibusdam consequuntur veritatis necessitatibus blanditiis harum?
              Rerum atque vero quia maxime eos veritatis non eum quisquam
              numquam!
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              placeat dolorum fugit quasi. Quibusdam consequuntur veritatis
              necessitatibus blanditiis harum? Rerum atque vero quia maxime eos
              veritatis non eum quisquam numquam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eveniet placeat dolorum fugit quasi.
              Quibusdam consequuntur veritatis necessitatibus blanditiis harum?
              Rerum atque vero quia maxime eos veritatis non eum quisquam
              numquam!
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              placeat dolorum fugit quasi. Quibusdam consequuntur veritatis
              necessitatibus blanditiis harum? Rerum atque vero quia maxime eos
              veritatis non eum quisquam numquam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eveniet placeat dolorum fugit quasi.
              Quibusdam consequuntur veritatis necessitatibus blanditiis harum?
              Rerum atque vero quia maxime eos veritatis non eum quisquam
              numquam!
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              placeat dolorum fugit quasi. Quibusdam consequuntur veritatis
              necessitatibus blanditiis harum? Rerum atque vero quia maxime eos
              veritatis non eum quisquam numquam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eveniet placeat dolorum fugit quasi.
              Quibusdam consequuntur veritatis necessitatibus blanditiis harum?
              Rerum atque vero quia maxime eos veritatis non eum quisquam
              numquam!
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              placeat dolorum fugit quasi. Quibusdam consequuntur veritatis
              necessitatibus blanditiis harum? Rerum atque vero quia maxime eos
              veritatis non eum quisquam numquam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eveniet placeat dolorum fugit quasi.
              Quibusdam consequuntur veritatis necessitatibus blanditiis harum?
              Rerum atque vero quia maxime eos veritatis non eum quisquam
              numquam!
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              placeat dolorum fugit quasi. Quibusdam consequuntur veritatis
              necessitatibus blanditiis harum? Rerum atque vero quia maxime eos
              veritatis non eum quisquam numquam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Eveniet placeat dolorum fugit quasi.
              Quibusdam consequuntur veritatis necessitatibus blanditiis harum?
              Rerum atque vero quia maxime eos veritatis non eum quisquam
              numquam!
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
{/*-----------------------------------FAQ Section------------------------------------------- */}  
         
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

export default Magentomigrationservices