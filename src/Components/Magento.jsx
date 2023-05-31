import React from 'react'
import { useEffect } from 'react';
import logo from "../favicon_black.png"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom';
import "./custom.css"
import Slider from 'react-slick';


const Magento = () => {

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
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        document.body.className = 'inner';
        return () => { document.body.className = 'inner'; }
      });
  return (
   <div>
    <Helmet>
      <title>Magento Upgrade Service </title>
      <meta property="og:site_name" content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity." />
<meta property="og:type" content="article" />
<meta property="og:title" content="Seamless Magento Upgrade" />
<meta property="og:description" content="Stay up-to-date with the latest Magento version. Learn more about our upgrade service." />
<meta property="og:url" content="https://infigrityit.com/" />
<meta property="og:image" content={logo} />
<meta property="og:image:secure_url" content={logo} />
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
              <div className="whoweare_inner row m-0 align-items-md-center">
                <div className="whoweare_inner_left p-0">
                  <figure>
                    <img src="../img/content/magento support.png" alt="" />
                  </figure>
                 
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  Exciting Magento Support Packages just for you!
                  </h2>
                  
<ol class="list-group list-group-numbered">
  <li class="list-group-item">1. Absolutely no downtime riskfree operation.</li>
  <li class="list-group-item">2. Comprehensive Magento core upgrade service.</li>
  <li class="list-group-item">3. Seamless upgrading of the Magento database.</li>
  <li class="list-group-item">4. Enhanced store performance, speed, checkout, and shopping cart processes.</li>
  <li class="list-group-item">5. Modernization of your checkout process giving a fresh appeal to your online store</li>
  <li class="list-group-item">6. Ensured reduction in cart rejection rate..</li>
  <li class="list-group-item">7. Advanced conversion rate.</li>
</ol>
                  <p className="in_r_16">
                   
                  </p>
                  <a href="about.html" className="btn_fill_black">
                    GET STARTED
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
              <div className="whoweare_inner reverse row m-0 align-items-md-center">
                <div className="whoweare_inner_left p-0">
                  <figure>
                    <img src="../img/whoweare_img_1.png" alt="" />
                  </figure>
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
{/* -------------------------Magento Upgrade Service ------------------------ */}
<h2 className="bi_bl_50 align-center">
Why upgrade your Magento to latest version?
                  </h2>
           <div className="timeline">
    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
      <div className="timeline__event__icon ">
        <i className="lni-cake" />
      </div>
      <div className="timeline__event__date">20-08-2019</div>
      <div className="timeline__event__content ">
        <div className="timeline__event__title">Certified Magento Developers</div>
        <div className="timeline__event__description">
          <p>
          Looking for Magento upgrade service? Get help from our professional Magento certified developers with 100% precision rate.


          </p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
      <div className="timeline__event__icon">
        <i className="lni-burger" />
      </div>
      <div className="timeline__event__date">20-08-2019</div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">No Downtime</div>
        <div className="timeline__event__description">
          <p>
          During the Magento upgrade, our experienced developers ensure that you experience zero downtime since we know that time is money. 
          </p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
      <div className="timeline__event__icon">
        <i className="lni-slim" />
      </div>
      <div className="timeline__event__date">20-08-2019</div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">
150+ Stores Upgraded</div>
        <div className="timeline__event__description">
          <p>
          Having been in the Magento development industry for more than a decade now, we have upgraded 150+ stores successfully.
          </p>
        </div>
      </div>
    </div>
    <div className="timeline__event animated fadeInUp timeline__event--type1">
      <div className="timeline__event__icon">
        <i className="lni-cake" />
      </div>
      <div className="timeline__event__date">20-08-2019</div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">Quick Turnaround Time</div>
        <div className="timeline__event__description">
          <p>
          If time is of critical importance for your online store, we promise to complete our Magento upgrade services at a quick turnaround time.


          </p>
        </div>
      </div>
    </div>
    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
      <div className="timeline__event__icon ">
        <i className="lni-cake" />
      </div>
      <div className="timeline__event__date">20-08-2019</div>
      <div className="timeline__event__content ">
        <div className="timeline__event__title">100% Data Protection</div>
        <div className="timeline__event__description">
          <p>
          Our Magento latest version upgrades are 100% protected from potential hackers. Rest assured of comprehensive data protection from our developers.


          </p>
        </div>
      </div>
    </div>
  
    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
      <div className="timeline__event__icon">
        <i className="lni-burger" />
      </div>
      <div className="timeline__event__date">20-08-2019</div>
      <div className="timeline__event__content">
        <div className="timeline__event__title">Zero Data Loss</div>
        <div className="timeline__event__description">
          <p>
          Our experienced Magento developers have gained prowess in Magento latest version upgrade, ensuring that you do not experience data loss during the process.
          </p>
        </div>
      </div>
    </div>
  
          </div>


           {/* -------------------------Magento Migration Section ------------------------ */}
    
           <section className="whoweare section mt-2" >
            <div className="wrapper">
              <div className="whoweare_inner row m-0 align-items-md-center">
                <div className="whoweare_inner_left p-0">
                  <figure>
                    <img src="../img/banner-image5.jpg" alt="" />
                  </figure>
                 
                </div>
                <div className="whoweare_inner_right">
                  <h2 className="bi_bl_50">
                  Why upgrade your Magento to latest version?
                  </h2>
                  
                  <p className="in_r_16">
                  In case, you are still using the older version of your Magento store, chances are you are at a premium risk of getting your information hacked. This will take a fraction of time, but the results on your online store can be damaging. There are times when the entire database gets lost or even the aggregate customer data. You run privacy risks when you do not upgrade to Magento latest version.
                  </p>
                  <p className="in_r_16">
                  By opting for Magento latest version., you can avail better scalability and security. It is also a great way to take advantage of the new features coupled with better store performance. On top of this, you get enhanced security, which can protect your online store from potential threats and bugs.
                  </p>
                  <p className="in_r_16">
                  Despite these advantages, certain Magento store owners are still adamant about continuing with the old age Magento versions that can have disastrous results to your online store in the long run.
                  </p>
                  <p className="in_r_16">
                  Do you want to upgrade from your existing store to Magento? Hire our Magento upgrade service where our expert Adobe Commerce developers will upgrade your store without any data loss. The process will be flawless like smooth sailing. Hire our Magento upgrade service now.
                  </p>
                  
                  <a href="about.html" className="btn_fill_black">
                    GET STARTED
                    <span className="browser-window__link">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
        
            <div className='container'>
           
              <div className='row'>
               
            <img src='/../img/magento upgrade.png'></img>
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
          </div>
  )
}

export default Magento