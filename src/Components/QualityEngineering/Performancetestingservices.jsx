import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";


const Performancetestingservices = () => {
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
        <title>Performance Testing Services		</title>
        <meta
          property="og:site_name"
          content="Responsive Web Design Services"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Comprehensive Performance Solutions" />
        <meta
          property="og:description"
          content="Comprehensive performance testing services to validate the scalability of your applications. Discover our services."/>
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
              <h1>Performance Testing Services</h1>
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
                <img src="../img/PT.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Performance Testing Services</h2>

              <p className="in_r_16">
                Having performance issues in the live software product might
                damage your brand reputation. Hence, it is vital to go for
                formal web performance testing of your application to determine
                application behavior at peak performance and scalability levels.
              </p>
              <p className="in_r_16">
                Elsner is a name you can rely on when you are looking for the
                best performance testing company. We are equipped with the best
                performance testing tools and experts to offer you unmatched
                performance testing services.
              </p>
              <p className="in_r_16">
                Our software performance testing experts will test the
                application behavior and performance in a real-life environment
                to save you from embarrassing situations later which might annoy
                customers and ruin your reputation.
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
                You can identify potential performance issues during the
                development phase by incorporating component-level performance
                testing.
              </p>
              <p className="in_r_16">
                You can design scalability plans quickly when you have
                performance predictions of the product.
              </p>
              <p className="in_r_16">
                Better cost optimization as you can identify load and
                performance issues early.
              </p>
              <p className="in_r_16">
                You can have the best and detailed result analysis documentation
                for stakeholders with the best performance testing tools and
                methodologies.
              </p>
              <p className="in_r_16">
                You can get full-cycle performance testing and quality
                engineering services.
              </p>
              <p className="in_r_16">
                The satisfaction that your product is competitive and matches
                the market standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="simplify section">
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

export default Performancetestingservices;
