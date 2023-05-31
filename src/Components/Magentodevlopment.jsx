import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './custom.css'
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";


const Magentodevlopment = () => {
 
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
        <title>Magento Development Services	</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Professional Magento Solutions"
        />
        <meta
          property="og:description"
          content="Professional Magento development services for robust e-commerce stores. Partner with us for development solutions."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
      </Helmet>
    {/*------------------------------- Banner Section---------------------------------- */}
<div
    className="breadcrumb"
    style={{ background: "url(../../img/magento-BANNER.jpg) no-repeat center" }}
  >
    <div className="wrapper">
      <ul>
        <li>
        <Link to={"/"}>home</Link>
        </li>
        <li>
          <h1>Magento Development</h1>
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
                    <img src="../img/content/magento-development.jpg" alt="" />
                  </figure>
                 
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  Magento Development Services
                  </h2>
                  
                  <p className="in_r_16">
                  Expect highly robust, scalable, seamless and comprehensive Magento ecommerce development services with expert Magento brains
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
  
        <section className="whoweare section mt-2 " >
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
                  Offering World-class customised Magento ecommerce Solutions to our clients
                  </h2>
                  
                  <p className="in_r_16">
                  One of the most preferred and user-friendly ecommerce platform, Magento is a name that has carved a niche for itself by offering superlative benefits for online merchants with high functionalities, more control over the look and a highly versatile and flexible shopping cart system. It is an open source technology that offers highly powerful marketing, SEO and catalog-management tools.
                  </p>
                  <p className="in_r_16">
                  Elsner is a leading Magento Development Company where you can find Magento skills at an expert level. We strive to provide robust storefront models to our clients by working with various Magento versions like Magento 1.9, Magento 2.0.
                  </p>
                  <p className="in_r_16">
                  We have a team of Magento certified developers at our Magento development company are with over 12 years of experience with a specialization in the Magento ecommerce orientation at the web and therefore we also offer custom Magento web designs.
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
              Our cutting edge Magento Development Services include:
                </h2>
                <ul className="row">
                  <li className="col-md-4">
                    <div className="technologies_inner_box">
                      <figure>
                        <img src="../img/wordpress.svg" alt="" />
                      </figure>
                      <div className="technologies_inner_box_text">
                        <h3 className="bi_r_24">CUSTOM MAGENTO WEB DEVELOPMENT</h3>
                        <p className="in_r_16">
                        Do you want a feature-rich and highly customised B2B or B2C ecommerce store? Our Magento developers can explore the potential of open source Magento to offer 3rd party integrations for Magento CE and EE, ERP and POS integrations with Magento site, multi-vendor implementation and migration services.
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
                        <h3 className="bi_r_24">MAGENTO THEME DEVELOPMENT FROM PSD</h3>
                        <p className="in_r_16">
                        Are you looking for a white labelled Magento theme for your website? Elsner is a name to rely on. We can deliver highly functional, fully admin manageable frontend Magento theme development from PSDs AI, JPG, PNG, and SKETCH.
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
                        <h3 className="bi_r_24">CUSTOM MAGENTO EXTENSION DEVELOPMENT</h3>
                        <p className="in_r_16">
                        If you are looking for a Magento extension for your personal ecommerce store or want a custom Magento extension to facilitate your SAAS services, we can build for you. You can expect bug free coding as per the Magento standards, extensions that are approved by the Magento marketplace.
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
                        <h3 className="bi_r_24">CUSTOMIZED WEBSITE DESIGN</h3>
                        <p className="in_r_16">
                        Our team makes out the fluent navigation by creating passages for the visitor to have a beautiful and extraordinary user interface design. The design is highly responsive and can give a superior and engaging time to the visitors.
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
                        <h3 className="bi_r_24">MAGENTO WEBSITE MANAGEMENT</h3>
                        <p className="in_r_16">
                        We offer real time management of your website along with the functional upgrades that are available at professional desk of Magento. We have a team of dedicated Magento developers with adequate experience and expertise to manage your Magento website.
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
                        <h3 className="bi_r_24">PAYMENT GATEWAY INTEGRATION</h3>
                        <p className="in_r_16">
                        We know that the Magento platform supports multiple currencies, therefore our team make sure that your payment gateway integration is optimized fully as per the requirements.
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
                        <h3 className="bi_r_24">CUSTOMIZED MODULE DEVELOPMENT</h3>
                        <p className="in_r_16">
                        Our custom module development would make your ecommerce website work more prospering. With customization of module we also offer Magento 2 migration service at a cost-effective rate.
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
                        If your customers are reporting about website issues or you want to change the theme or design of the website, we are here to help you out in the best manner possible. Our Magento developers will work round the clock to monitor and optimize your store.
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
                  Why to choose our Magento Development Company?
                  </h2>
                  
                  <p className="in_r_16">
                  Magento offers the dedicated platform for Magento enterprise development interfacing capabilities to secure the best commercial presence in the web domain. We would make out the most prominent and efficient models of Magento Enterprise Development for your ecommerce development. As a leading Magento development company, we can escort your commerce presence too through our e-commerce development expertise.
                  </p>
                  <p className="in_r_16">
                  As a flag bearer and leading Magento Development Company, you will find Magento skills at an expert level at Elsner. Providing robust storefront models to our clients is our motto and thus, you can now also add and enhance features to your ecommerce store which will boost your scalability. Our Magento development company follows standard Magento development methods of using the latest IDE’s and Being a leading Magento development company, we ensure quick and satisfying solutions for all of our clients.
                  </p>
                  <p className="in_r_16">
                  Magento Commerce Cloud is now known as Adobe Commerce. However, the features and functionalities are the same and robust. Elsner is a top-notch adobe commerce development service provider with a full-fledged team of adobe commerce developers to take care of your tailor-made business requirements. Let’s discuss your project now to develop a highly comprehensive, secure, and personalized adobe commerce store.
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
                          <img src="../img/blog_img_2.png" alt="" />
                          <span>#industry practices</span>
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
                          <img src="../img/blog_img_3.png" alt="" />
                          <span>#industry practices</span>
                        </figure>
                        <h3 className="bi_r_24">
                        Magento 2.4.6 Release – What are the Main Highlights?
                        </h3>
                        <p className="in_r_16">
                        Magento is one of the most popular e-commerce platforms available today. With every new update, the developers will get access…
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
      How many team members will you assign to my Magento project? Please define their roles.
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      FAQ

We follow an agile methodology while assigning a team to your Magento project. There is a minimum number of 5 members that are initially assigned to your project.
This includes:
</div>
    <div class="accordion-body">
    1. A business analyst that looks after the onboarding process by conducting the feasibility study of your requirements. After this, he/she provides an initial consultation wherein he/she discusses requirement breakdown, the total budget for the project, and submission of the project proposal.
</div>
<div class="accordion-body">
2. After successful completion of this stage, you will be introduced to a Project delivery manager and the dedicated Magento developer who will be working on your project.
</div>
<div class="accordion-body">
3. There will also be a Quality Analyst who will be testing your website and ensuring that your deliverables are met as promised.
</div>
<div class="accordion-body">
4. The last person will be a Server Administrator who will set up your server and deploy your Magento website in such a way that it gets ready to go live.
</div>
 </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Who will be my Point of Contact in case I hire Magento development services from Elsner Technologies Pvt. Ltd.?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      You can stay in contact with either of the assigned team members during any given point of time of project execution. However, to make things simple, we recommend you to have a single point of contact to ensure that there is no scope of miscommunication. Here, we recommend you to stay in direct touch with the Project delivery manager who is the right person to provide you with the regular progress of the project. You can take feedback on the project progress from him/her. This way, it will become easier for you to receive the utmost transparency from our end during the project duration.
     </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Do you have the understanding of handling all the Magento project development tasks in-house? What is the overall work experience of your Magento team?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      At Elsner Technologies Pvt. Ltd. we have a dedicated team of more than 20 in-house Magento web developers and an overall strength of more than 150 employees working in unison. We do not outsource any work as our in-house team has the experience and acumen of delivering highly creative Magento web development solutions for our esteemed clients.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Is there a specific pricing model that you follow? What steps do you take if your projects go over budget?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      We follow both fixed price and hourly rate model. However, usually, the pricing depends totally on the individual requirements of the projects and clarity in terms of execution strategy and requirements. It is essential to have a comprehensive requirements analysis to ensure that there is no ambiguity in terms of the scope of Magento website development requirements. We adopt this strategy to come up with an accurate quotation for the project. On top of that, we even keep track of any change requests throughout the development cycle so that there is no unexpected increase in the budget.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Will we get the sole ownership of the source files once the project gets over?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, we will send across the source files to you. Rest assured, we do not keep the source code to ourselves.



      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What is the support period provided by your company?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      To ensure consistent performance, we provide a 90-days Magento web development support to all our clients which starts when your last milestone is accomplished and delivered. It is even possible for you to extend the support by paying an incremental amount.


      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>

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

export default Magentodevlopment