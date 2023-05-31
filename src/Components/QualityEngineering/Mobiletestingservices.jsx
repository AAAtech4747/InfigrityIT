import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";


const Mobiletestingservices = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  useEffect(() => {
    document.body.classList.add("inner");

    return () => {
      document.body.classList.remove("inner");
    };
  }, []);

  return (
    <div>
    <Helmet>
        <title>Mobile Testing Services		</title>
        <meta
          property="og:site_name"
          content="Responsive Web Design Services"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Robust Mobile Testing Solutions	" />
        <meta
          property="og:description"
          content="Robust mobile testing services to ensure flawless and user-friendly mobile applications. Explore our testing solutions."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"/>
      </Helmet>
      {/*------------------------------- Banner Section---------------------------------- */}
      <div
        className="breadcrumb"
        style={{ background: "url(../../img/images_6.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to={"/"}>home</Link>
            </li>
            <li>
              <h1>Mobile Testing Services</h1>
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
                <img src="../img/mobile-pt.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Mobile Testing Services</h2>

              <p className="in_r_16">
                Smartphones have given a paradigm shift to the world and
                especially to the behavior patterns of human lives. Having a
                mobile-ready application is no more an option, but a necessity.
                You need to keep your mobile consumers happy who turn to their
                mobile devices to access your applications.
              </p>
              <p className="in_r_16">
                Mobile testing has become more relevant and vital for
                enterprises. Elsner, a mobile app performance testing company
                offers high-quality, reliable, and superior mobile application
                automation testing and performance testing services.
              </p>
              <p className="in_r_16">
                With a team of mobile automation testing experts and mobile
                performance testing tools, we offer highly scalable,
                comprehensive mobile testing services such as mobile functional
                testing, mobile performance testing, compatibility testing,
                compliance testing, and mobile security testing.
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
      {/*---------------------------- Elsner and Magento Ecommerce Development--------------- */}

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
              <span>
                <video playsInline autoPlay muted loop>
                  <source src="../img/content/testing.mp4" type="video/mp4" />
                </video>
              </span>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Our Quality Engineering Experts at Your Service
              </h2>

              <p className="in_r_16">
                1.SDET (Software Development Engineer in Test)
              </p>
              <p className="in_r_16">2.Selenium Testing Experts</p>
              <p className="in_r_16">3.HPE UFT Testing Experts</p>
              <p className="in_r_16">4.Katalon Studio Testing Experts</p>
              <p className="in_r_16">5.Protector Testing Experts</p>
              <p className="in_r_16">6.API Testing Experts</p>
            </div>
          </div>
        </div>
      </section>
      {/*---------------------------- Elsner and Magento Ecommerce Development--------------- */}
      <section className="services section">
        <div className="wrapper">
          <div className="services_inner">
            <img
              src="../img/qa-software-testing-process.png"
              className="img-fluid"
              alt="..."
            />
          </div>
        </div>
      </section>
      {/*------------------- Our Magento ecommerce development solutions include:--------------------- */}
      <section className="technologies section words chars splitting">
        {/* <div class="techno_vertical_title">OUR EXPERTISE</div> */}
        <div className="wrapper">
          <div className="technologies_inner">
            <h2 className="bi_bl_50">
              Testing Capability – Software/Application
            </h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">WEB</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure></figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">API</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/magento.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">MOBILE</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/shopify.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Front End Technology</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/reactjs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">ERPs</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/nodejs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">E-Commerce</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/nodejs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">DBs</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/nodejs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">Middleware</h3>
                  </div>
                </div>
              </li>
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/nodejs.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">POS</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* -------------------------Magento Migration Section ------------------------ */}

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Business Benefits</h2>

              <p className="in_r_16">
                Cross-platform mobile automated testing ensures that your mobile
                application is performing fine with android and iOS platforms.
              </p>
              <p className="in_r_16">
                With mobile app testing tools, the time required for testing
                reduces significantly.
              </p>
              <p className="in_r_16">
                It improves testing speed and efficiency. In a short amount of
                time, developers can run several tests with the help of mobile
                testing tools.
              </p>
              <p className="in_r_16">
                Automated testing for mobile applications reduces overall app
                development costs by reducing the number of bugs found
                post-deployment. It will also save your brand from quick
                uninstalls, poor user reviews, and negative brand perception.
              </p>
              <p className="in_r_16">
                The overall time to develop a mobile application reduces
                significantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="simplify section" data-scroll>
        <div className="wrapper">
          <div className="simplify_inner">
            <div className="bi_bl_50">
              <h2 data-splitting>Requirement understanding</h2>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 process-block">
                <div className="process-box">
                  <div className="icon-box">
                    <img
                      src="../img/ic-new-process-discover.svg"
                      alt="Discover"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 data-splitting>Define Scope of automation</h3>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 process-block">
                <div className="process-box">
                  <div className="icon-box">
                    <img
                      src="../img/ic-new-process-design.svg"
                      alt="Design"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 data-splitting>Selecting the right tool</h3>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 process-block">
                <div className="process-box">
                  <div className="icon-box">
                    <img
                      src="../img/ic-new-process-build.svg"
                      alt="Build"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 data-splitting>Framework creation</h3>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 process-block">
                <div className="process-box">
                  <div className="icon-box">
                    <img
                      src="../img/ic-new-process-deliver.svg"
                      alt="Deliver"
                      width={48}
                      height={48}
                    />
                  </div>
                  <h3 data-splitting>Scripting Test cases</h3>
                </div>
              </div>
            </div>
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
      </div>
  );
};

export default Mobiletestingservices;
