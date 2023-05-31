import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";


const Automationtestingservices = () => {
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
        <title>Automation Testing Services	</title>
        <meta
          property="og:site_name"
          content="Responsive Web Design Services"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Efficient Automation Solutions" />
        <meta
          property="og:description"
          content="Efficient automation testing services to ensure the quality of your software applications. Partner with us for reliable testing."/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
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
              <h1>Automation Testing Services</h1>
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
                <img src="../img/Automation Testing.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">ATG – Automation Testing Group</h2>

              <p className="in_r_16">
                Automation testing is a technique to test a software product
                using special automated testing tools. On the contrary to manual
                testing where a tester tests each test case while sitting in
                front of a computer, software automation testing mitigates
                errors and helps to improve the quality of a software product.
              </p>
              <p className="in_r_16">
                No human intervention is required once the test suite is
                automated. The main purpose of hiring test automation services
                is to reduce the number of test cases to be run manually which
                might produce misleading results.
              </p>
              <p className="in_r_16">
                The test automation software can also compare expected and
                actual results for test cases and generate detailed test reports
                to analyze and fix issues or errors.
              </p>
              <p className="in_r_16">
                Elsner is a renowned automation testing company offering
                superior and comprehensive automation testing services by
                employing the best automation testing tools and methodologies.
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
                There are some unparalleled advantages of automation testing. It
                improves effectiveness, test coverage, and execution speed in
                the testing process. Some other benefits are:
              </p>
              <p className="in_r_16">
                Manual testing is time and money consuming. On the other hand,
                automation testing of all workflows, fields, and negative
                scenarios saves a significant amount of time and money.
              </p>
              <p className="in_r_16">
                Automation testing allows testing for multilingual sites.
              </p>
              <p className="in_r_16">
                It eliminates any type of human intervention and can be run
                unattended.
              </p>
              <p className="in_r_16">
                Automation testing improves test execution speed and test
                coverage.
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

export default Automationtestingservices;
