import React from "react";
import { useEffect } from "react";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./custom.css";
import ScrollOut from "scroll-out";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import "../Components/custom.css";

const Work = () => {
  useEffect(() => {
    document.body.classList.add("inner");
       //----------------------Splitting Animation Calling Function--------------------------//
       Splitting({
        target: "[data-splitting]",
        by: "chars",
        key: null,
      });
      //---------------------------- Scroll Out---------------------------------------------//
      ScrollOut();

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return () => {
      document.body.classList.remove("inner");

    
    };
  });


  return (
    <div>
      <Helmet>
        <title>Our Work	</title>
        <meta property="og:site_name"  content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."/>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Showcase of Our Projects"/>
        <meta property="og:description" content="Impressive portfolio showcasing expertise in website, eCommerce, mobile app development, and more. Get inspired by our work."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <script type="text/JavaScript" src="js/vendor/jquery-3.4.1.min.js" ></script>
        <script type="text/JavaScript" src="js/vendor/slick.min.js"></script>
        <script type="text/JavaScript" src="js/vendor/all.min.js"></script>
        <script type="text/JavaScript" src="js/vendor/jquery.paroller.min.js"></script>
         <link href="css/ashiq.css" rel="stylesheet" />
         <meta name="theme-color" content="#752C85"/>
         <script type="text/JavaScript" src="js/vendor/Draggable.min.js"></script>
      <script type="text/JavaScript" src="js/vendor/scripts.js"></script>
      </Helmet>

      <div
        className="breadcrumb"
        style={{ background: "url(../img/images_6.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Work</h1>
            </li>
          </ul>
        </div>
      </div>

       <div>
        <div className="centerh">
          <h2 className="bi_bl_50"> Delivering Digital Excellence Across Industries </h2>
        </div>
        <div className="centerp">
          <p className="in_r_16">We employ our expertise, capabilities and insights into curating world-class digital solutions for various industries across the globe.</p>
        </div>
       </div>
       
       <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/content/ZAHRAMEDIPLUS.png"  alt="" />
                </figure>
                <span>
                  
                </span>
              </div>
              <div className="whoweare_inner_right">
                <h2 className="bi_bl_50" data-splitting>
                Zahra Mediplus
                </h2>
                <span className="in_r_20">Client-Centric to the bone</span>
                <p className="in_r_16">
                Zahra Mediplus is a renowned healthcare facility committed to providing comprehensive medical services to patients. With a strong reputation in the industry, Zahra Mediplus sought to elevate their online presence to effectively reach and engage with their target audience. They approached Infigrity to revamp their existing website and create a modern, user-friendly platform that accurately reflected their commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/content/ZAHRAMEDIPLUS.png"  alt="" />
                </figure>
              
              </div>
              <div className="" style={{width:"58.3%" }}>
                <h2 className="bi_bl_50" data-splitting>
                Nuto Wellness
                </h2>
                <p className="in_r_16">
                Nuto Wellness is a well-established brand that specializes in producing candy products that offer a delightful taste experience while also providing essential nutrients. With a mission to revolutionize the confectionery industry, Nuto Wellness sought to expand its reach and establish a strong online presence. They approached Infigrity to develop a website that would serve as a digital storefront, allowing them to showcase their products, connect with their target audience, and drive online sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/content/ZAHRAMEDIPLUS.png"  alt="" />
                </figure>
              
              </div>
              <div className="" style={{width:"58.3%" }}>
                <h2 className="bi_bl_50" data-splitting>
                Medi Surge
                </h2>
                <p className="in_r_16">
                Medi Surge is a trusted name in the healthcare industry, specializing in the distribution of advanced hospital equipment and surgical instruments. With a commitment to delivering cutting-edge medical solutions, Medi Surge recognized the need to create an engaging and informative website that would serve as a comprehensive resource for healthcare professionals and institutions. They approached Infigrity to develop a dynamic website that would effectively highlight their product range, convey their expertise, and streamline the purchasing process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/content/ZAHRAMEDIPLUS.png"  alt="" />
                </figure>
              
              </div>
              <div className="" style={{width:"58.3%" }}>
                <h2 className="bi_bl_50" data-splitting>
                Bliss-Clinic
                </h2>
                <p className="in_r_16">
                Blissclinic is a renowned cardiology clinic, known for its commitment to providing innovative and effective treatments for cardiovascular conditions. With their introduction of Enhanced External Counterpulsation therapy, Blissclinic sought to reach a wider audience and educate patients about this non-invasive and highly beneficial treatment option. They approached Infigrity to develop a comprehensive website that would accurately represent their expertise, highlight the advantages of EECP therapy, and facilitate patient engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/content/ZAHRAMEDIPLUS.png"  alt="" />
                </figure>
              
              </div>
              <div className="" style={{width:"58.3%" }}>
                <h2 className="bi_bl_50" data-splitting>
                Khaleej Tools
                </h2>
                <p className="in_r_16">
                Khaleej Tools is a trusted name in the market, specializing in the distribution of high-quality power tools, hardware, plumbing equipment, outdoor gear, and safety products. With a commitment to providing professionals with reliable and durable tools, Khaleej Tools recognized the need to establish a strong online presence to cater to a wider audience and streamline their sales processes. They approached Infigrity to develop an e-commerce website that would serve as a comprehensive platform for showcasing their products, attracting customers, and facilitating seamless online transactions.


              </p>
              </div>
            </div>
          </div>
        </section>

        <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/content/ZAHRAMEDIPLUS.png"  alt="" />
                </figure>
              
              </div>
              <div className="" style={{width:"58.3%" }}>
                <h2 className="bi_bl_50" data-splitting>
                Hearmo
                </h2>
                <p className="in_r_16">
                Hearmo is a renowned brand in the consumer electronics industry, specializing in the production of neckband earbuds, cables, and chargers. With a strong commitment to delivering exceptional audio quality, ergonomic designs, and reliable charging solutions, Hearmo sought to expand its reach and establish a strong online presence. They approached Infigrity to develop a website that would effectively showcase their product range, educate customers, and provide a seamless purchasing experience.

              </p>
              </div>
            </div>
          </div>
        </section>

        <section className="whoweare section" data-scroll="">
          <div className="wrapper">
            <div className="whoweare_inner row m-0 align-items-md-center">
              <div className="whoweare_inner_left p-0 p1">
                <figure>
                  <img id="p1" src="img/content/ZAHRAMEDIPLUS.png"  alt="" />
                </figure>
              
              </div>
              <div className="" style={{width:"58.3%" }}>
                <h2 className="bi_bl_50" data-splitting>
                Uniqstox
                </h2>
                <p className="in_r_16">
                Before joining forces with Infigrity, UniqStox encountered several challenges in effectively presenting its cutting-edge microchip solutions to its target audience. Their previous website failed to capture the attention of potential customers, lacked intuitive navigation, and didn't reflect the company's innovative nature. UniqStox recognized the need for a comprehensive online platform that would not only showcase their products but also reflect their commitment to excellence, reliability, and technological advancement.
              </p>
              </div>
            </div>
          </div>
        </section>




        {/*----------------------- ZAHRA MEDIPLUS------------------------------------ */}
       <section className="whoweare section mt-2" data-scroll>
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0 zoomin">
              <figure>
                <img src="img/content/ZAHRAMEDIPLUS.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50" data-splitting>
                Zahra-Mediplus
              </h2>
              <p className="in_r_16">
              Zahra Mediplus is a renowned healthcare facility committed to providing comprehensive medical services to patients. With a strong reputation in the industry, Zahra Mediplus sought to elevate their online presence to effectively reach and engage with their target audience. They approached Infigrity to revamp their existing website and create a modern, user-friendly platform that accurately reflected their commitment to excellence.
              </p>    
            </div>
          </div>
        </div>
      </section>
{/*----------------------- NUTO WELLNESS MEDIPLUS------------------------------------ */}
      <section className="whoweare section mt-2" data-scroll>
        <div className="wrapper">
          <div className="whoweare_inner reverse row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0 zoomin">
              <figure>
                <img src="img/content/NUTO.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50" data-splitting>
                Nuto-Wellness
              </h2>
              <p className="in_r_16">
              Nuto Wellness is a well-established brand that specializes in producing candy products that offer a delightful taste experience while also providing essential nutrients. With a mission to revolutionize the confectionery industry, Nuto Wellness sought to expand its reach and establish a strong online presence. They approached Infigrity to develop a website that would serve as a digital storefront, allowing them to showcase their products, connect with their target audience, and drive online sales.
              </p>
              
            </div>
          </div>
        </div>
      </section>
{/*----------------------- MEDI-SURGE MEDIPLUS------------------------------------ */}
      <section className="whoweare section mt-2" data-scroll="">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0 zoomin">
              <figure>
                <img src="img/MediSurge.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50" data-splitting>
                Medi-Surge
              </h2>

              
              <p className="in_r_16">
              Medi Surge is a trusted name in the healthcare industry, specializing in the distribution of advanced hospital equipment and surgical instruments. With a commitment to delivering cutting-edge medical solutions, Medi Surge recognized the need to create an engaging and informative website that would serve as a comprehensive resource for healthcare professionals and institutions. They approached Infigrity to develop a dynamic website that would effectively highlight their product range, convey their expertise, and streamline the purchasing process.
              </p>
              
            </div>
          </div>
        </div>
      </section>
{/*----------------------- BLISS CLINIC MEDIPLUS------------------------------------ */}
      <section className="whoweare section mt-2" data-scroll="">
        <div className="wrapper">
          <div className="whoweare_inner reverse row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0 zoomin">
              <figure>
                <img src="img/content/BLISSCLINIC.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50" data-splitting >
                Bliss-Clinic
              </h2>
              <p className="in_r_16">
              Blissclinic is a renowned cardiology clinic, known for its commitment to providing innovative and effective treatments for cardiovascular conditions. With their introduction of Enhanced External Counterpulsation therapy, Blissclinic sought to reach a wider audience and educate patients about this non-invasive and highly beneficial treatment option. They approached Infigrity to develop a comprehensive website that would accurately represent their expertise, highlight the advantages of EECP therapy, and facilitate patient engagement.
              </p>
              
            </div>
          </div>
        </div>
      </section> 
{/*----------------------- KHALEEJ TOOLS MEDIPLUS------------------------------------ */}

      <section className="whoweare section mt-2" data-scroll="">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0 zoomin">
              <figure>
                <img src="img/content/KHALEEJ TOOLS.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50" data-splitting>
              Khaleej-Tools
              </h2>
              <p className="in_r_16">
              Khaleej Tools is a trusted name in the market, specializing in the distribution of high-quality power tools, hardware, plumbing equipment, outdoor gear, and safety products. With a commitment to providing professionals with reliable and durable tools, Khaleej Tools recognized the need to establish a strong online presence to cater to a wider audience and streamline their sales processes. They approached Infigrity to develop an e-commerce website that would serve as a comprehensive platform for showcasing their products, attracting customers, and facilitating seamless online transactions.
              </p>    
            </div>
          </div>
        </div>
      </section>
{/*----------------------- HEARMO------------------------------------ */}
      <section className="whoweare section mt-2" data-scroll="">
        <div className="wrapper">
          <div className="whoweare_inner reverse row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0 zoomin">
              <figure>
                <img src="img/content/HEARMO.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right" >
              <h2 className="bi_bl_50" data-splitting>
                Hearmo 
              </h2>
              <p className="in_r_16">
              Hearmo is a renowned brand in the consumer electronics industry, specializing in the production of neckband earbuds, cables, and chargers. With a strong commitment to delivering exceptional audio quality, ergonomic designs, and reliable charging solutions, Hearmo sought to expand its reach and establish a strong online presence. They approached Infigrity to develop a website that would effectively showcase their product range, educate customers, and provide a seamless purchasing experience.
              </p>
              
            </div>
          </div>
        </div>
      </section>
{/*----------------------- UNISTOX------------------------------------ */}
      <section className="whoweare section mt-2" data-scroll="">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0 zoomin">
              <figure>
                <img src="img/Unistox.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50" data-splitting>
              Uniqstox
              </h2>

              
              <p className="in_r_16">
              Before joining forces with Infigrity, UniqStox encountered several challenges in effectively presenting its cutting-edge microchip solutions to its target audience. Their previous website failed to capture the attention of potential customers, lacked intuitive navigation, and didn't reflect the company's innovative nature. UniqStox recognized the need for a comprehensive online platform that would not only showcase their products but also reflect their commitment to excellence, reliability, and technological advancement.
               </p>
              
            </div>
          </div>
        </div>
      </section>
{/*----------------------- ZAHRA MEDIPLUS------------------------------------ */}
      <section className="whoweare section mt-2" data-scroll>
        <div className="wrapper">
          <div className="whoweare_inner reverse row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0 zoomin">
              <figure>
                <img src="img/content/BLISSCLINIC.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50" data-splitting >
                Bliss-Clinic
              </h2>
              <p className="in_r_16">
              Blissclinic is a renowned cardiology clinic, known for its commitment to providing innovative and effective treatments for cardiovascular conditions. With their introduction of Enhanced External Counterpulsation therapy, Blissclinic sought to reach a wider audience and educate patients about this non-invasive and highly beneficial treatment option. They approached Infigrity to develop a comprehensive website that would accurately represent their expertise, highlight the advantages of EECP therapy, and facilitate patient engagement.
              </p>
              
            </div>
          </div>
        </div>
      </section>     
      </div>

  );
};

export default Work;
