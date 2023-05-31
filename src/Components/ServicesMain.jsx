import React from "react";
import { useEffect } from "react";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import "../Components/custom.css";

const ServicesMain = () => {
  useEffect(() => {
    document.body.classList.add("inner");

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    //----------------------Splitting Animation Calling Function--------------------------//
    Splitting({
      target: "[data-splitting]",
      by: "chars",
      key: null,
    });
    //---------------------------- Scroll Out---------------------------------------------//
    ScrollOut();

    return () => {
      document.body.classList.remove("inner");
    };
  });

  return (
    <div>
      <Helmet>
        <title>Digital Development Services</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Professional Development Services" />
        <meta
          property="og:description"
          content="Comprehensive range of digital development services. Contact us to discuss your requirements.	
"
        />
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />

        <script
          type="text/JavaScript"
          src="js/vendor/jquery-3.4.1.min.js"
        ></script>
        <script type="text/JavaScript" src="js/vendor/slick.min.js"></script>
        <script type="text/JavaScript" src="js/vendor/all.min.js"></script>
        <script
          type="text/JavaScript"
          src="js/vendor/jquery.paroller.min.js"
        ></script>
        <link href="css/ashiq.css" rel="stylesheet" />
        <script
          type="text/JavaScript"
          src="js/vendor/Draggable.min.js"
        ></script>
        <script type="text/JavaScript" src="js/vendor/scripts.js"></script>
      </Helmet>
      {/*------------------------ Banner Section---------------------------------- */}
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
              <h1>Services</h1>
            </li>
          </ul>
        </div>
      </div>

      {/*------------------------- Main Section ------------------------------------- */}

      <section
        className="services section"
        data-scroll=""
        style={{ maxWidth: "auto" }}
      >
        <div className="wrapper">
          <div className="services_inner">
            <h2 className="bi_bl_50" data-splitting>
              Your Navigational Unit in Digital Sphere
            </h2>
            <p className="in_r_16">
              In the vast and ever-evolving digital space, we are your trusted
              compass, guiding you towards success. Each client brings their
              unique challenges, and we are here to provide the direction you
              need. With expertise in commerce, technology, and data, we help
              individuals and businesses find their perfect balance in the
              digital realm. We excel at delivering efficient solutions,
              measuring deployment in weeks rather than months. But don't just
              take our word for it – explore the diverse range of services we
              offer below, and see how we can empower your digital journey.
            </p>

            <Link to="/services" className="btn_fill_black">
              CHECK OUT OUR SERVICES
              <span className="browser-window__link">
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="expertise">
        <div className="expertise_inner">
          <div className="expertise_box" data-scroll="">
            <div className="wrapper">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h2 className="bi_bl_50" data-splitting>
                    Website Development
                  </h2>
                  <div className="services_list">
                    <ul>
                      <li>
                        <figure>
                          <img src="img/icon_1.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="img/icon_8.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="img/icon_15.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="img/icon_13.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="img/react_svg.svg" alt="" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-md-7">
                  <p className="in_r_16">
                    Our website development services are tailored to meet the
                    unique needs of each client. Whether you're starting from
                    scratch or looking to revamp your existing website, our team
                    of experienced developers will create a visually stunning
                    and user-friendly website that aligns perfectly with your
                    brand. From responsive design to seamless navigation, we
                    ensure that your website not only attracts visitors but also
                    engages and converts them into loyal customers. With a focus
                    on cutting-edge technologies and industry best practices, we
                    deliver websites that are not just aesthetically pleasing
                    but also optimized for performance, security, and
                    scalability.
                  </p>
                  <ul>
                    <li>
                      <Link to="/php-web-development">
                        PHP Web Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/laravel-development">
                        Laravel Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/node-js-development">
                        Node JS Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        Angular JS Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <Link to="/reactjs-development">
                        React JS Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/custom-web-development">
                        Custom Web Design
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise_box" data-scroll="">
            <div className="wrapper">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h2 className="bi_bl_50" data-splitting>
                    CMS Development
                  </h2>
                  <div className="services_list">
                    <ul>
                      <li>
                        <figure>
                          <img src="../img/icon_6.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/responsive_svg.svg" alt="" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <p className="in_r_16">
                    Efficient content management is the backbone of any
                    successful website. Our CMS development services provide you
                    with a robust and user-friendly platform to manage and
                    publish your website content effortlessly. We specialize in
                    developing custom CMS solutions tailored to your specific
                    needs, ensuring that you have full control over your
                    website's content, structure, and functionality. Whether you
                    require a simple blog or a complex enterprise-level content
                    management system, our team has the expertise to deliver a
                    scalable and flexible solution. With our CMS development
                    services, you can streamline your content workflow, enhance
                    collaboration, and keep your website up-to-date with ease.
                  </p>
                  <ul></ul>
                  <ul>
                    <li>
                      <Link to="/wordpress-development">
                        WordPress Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/responsive-web-design">
                        Responsive Web Design
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise_box" data-scroll="">
            <div className="wrapper">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h2 className="bi_bl_50" data-splitting>
                    Ecommerce Solution
                  </h2>
                  <div className="services_list">
                    <ul>
                      <li>
                        <figure>
                          <img src="img/icon_3.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="img/icon_9.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/woocommerce_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/ecommerce_svg.svg" alt="" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <p className="in_r_16">
                    Unlock the potential of online selling with our
                    comprehensive ecommerce solutions. We understand the
                    complexities of running an online store and provide
                    end-to-end services to ensure your success. From designing
                    intuitive and attractive user interfaces to implementing
                    secure payment gateways and robust inventory management
                    systems, we create ecommerce platforms that drive
                    conversions and maximize sales. Our team works closely with
                    you to understand your target audience and business goals,
                    tailoring the solution to meet your specific requirements.
                    With our expertise in ecommerce platforms and frameworks, we
                    empower you to establish a strong online presence and tap
                    into the vast world of digital commerce.
                  </p>
                  <ul>
                    <li>
                      <Link to="/magento-development">
                        Magento Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shopify-development">
                        Shopify Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/woocommerce-development">
                        WooCommerce Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/magento-ecommerce">
                        Ecommerce Solutions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise_box" data-scroll="">
            <div className="wrapper">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h2 className="bi_bl_50" data-splitting>
                    Magento Solution
                  </h2>
                  <div className="services_list">
                    <ul>
                      <li>
                        <figure>
                          <img src="img/icon_3.svg" alt="" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <p className="in_r_16">
                    As experts in Magento, one of the leading ecommerce
                    platforms, we offer specialized solutions that leverage the
                    full potential of this powerful system. Whether you need a
                    new Magento store, custom module development, theme design,
                    or migration from another platform, our team has the
                    experience and technical know-how to deliver outstanding
                    results. We understand the intricacies of Magento and can
                    optimize its features to create a seamless and efficient
                    ecommerce experience. From setting up complex product
                    catalogs to implementing advanced shopping cart
                    functionalities, we ensure that your Magento store is
                    tailored to your unique business requirements and delivers
                    exceptional performance, scalability, and security.
                  </p>
                  <ul>
                    <li>
                      <Link to="/magento-2-migration-service">
                        Magento 2 Migration Service
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/ecommerce-development">
                        Ecommerce Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/enterprise-development">
                        Enterprise development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/magento-support-plan">
                        Magento Support Plan
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/magento-extension">
                        Magento Extension
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/magento-upgrade-service">
                        Magento Support Plan
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise_box" data-scroll="">
            <div className="wrapper">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h2 className="bi_bl_50" data-splitting>
                    Mobile App Development
                  </h2>
                  <div className="services_list">
                    <ul>
                      <li>
                        <figure>
                          <img src="../img/android_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/iphone_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/flutter_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/react_svg.svg" alt="" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <p className="in_r_16">
                    In today's mobile-driven world, having a strong mobile
                    presence is essential for businesses. Our mobile app
                    development services cover all aspects of the process, from
                    conceptualization and design to development and deployment.
                    We create engaging and intuitive mobile applications for
                    both iOS and Android platforms, focusing on delivering an
                    exceptional user experience. Our team follows the latest
                    design trends and utilizes cutting-edge technologies to
                    build feature-rich and high-performance apps that align with
                    your brand identity and business objectives. Whether you
                    need a standalone app or integration with existing systems,
                    we have the expertise to turn your ideas into reality and
                    help you stay connected with your customers on the go.
                  </p>
                  <ul>
                    <li>
                      <Link to="/android-app-development">
                        Android App Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/iphone-app-development">
                        Iphone App Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/flutter-development">
                        Flutter Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/react-native-development">
                        React Native Development
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise_box" data-scroll="">
            <div className="wrapper">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h2 className="bi_bl_50" data-splitting>
                    Digital Marketing
                  </h2>
                  <div className="services_list">
                    <ul>
                      <li>
                        <figure>
                          <img src="../img/seo_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/ppc_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/smm_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/content_svg.svg" alt="" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <p className="in_r_16">
                    In the competitive digital landscape, effective digital
                    marketing strategies are crucial for business growth. Our
                    digital marketing services are designed to boost your online
                    presence, attract targeted traffic, and drive conversions.
                    We offer a comprehensive range of services, including search
                    engine optimization (SEO), pay-per-click (PPC) advertising,
                    social media marketing, content marketing, and email
                    marketing. Our team of digital marketing experts stays
                    up-to-date with the latest industry trends and best
                    practices to deliver tailored strategies that resonate with
                    your target audience. With our data-driven approach and
                    in-depth analytics, we continuously optimize campaigns to
                    maximize your return on investment (ROI) and help you
                    achieve your marketing goals.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        SEO Services
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <Link to="/ppc-management-services">
                        PPC Management
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/social-media-marketing-services">
                        Social Media Marketing
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/content-marketing-services">
                        Content Marketing
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise_box" data-scroll="">
            <div className="wrapper">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h2 className="bi_bl_50" data-splitting>
                    Quality Engineering
                  </h2>
                  <div className="services_list">
                    <ul>
                      <li>
                        <figure>
                          <img src="../img/automation_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/performance_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/mobile_testing_svg.svg" alt="" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/security_svg.svg" alt="" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <p className="in_r_16">
                    Delivering high-quality software solutions requires rigorous
                    testing and quality assurance processes. Our quality
                    engineering services ensure that your digital products meet
                    the highest standards of performance, reliability, and
                    security. We employ a comprehensive range of testing
                    methodologies, including functional testing, performance
                    testing, security testing, and usability testing, to
                    identify and address any potential issues. Our experienced
                    quality engineers work closely with your development team to
                    ensure seamless integration and a smooth user experience
                    across all platforms and devices.
                  </p>
                  <ul>
                    <li>
                      <Link to="/automation-testing-services">
                        Automation Testing
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/performance-testing-services">
                        Performance Testing
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/mobile-testing-services">
                        Mobile Testing
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/security-assessment-and-testing">
                        Security Assessment & Testing
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20.81"
                          height="21.204"
                          viewBox="0 0 20.81 21.204"
                        >
                          <text
                            id="_"
                            data-name=""
                            transform="matrix(0.799, 0.602, -0.602, 0.799, 2.002, 11.783)"
                            fill="#000"
                            font-size="16"
                            font-family="FontAwesome6Free-Solid, 'Font Awesome \36  Free Solid'"
                          >
                            <tspan x="0" y="0">
                              
                            </tspan>
                          </text>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="expertise_box" data-scroll="">
            <div className="wrapper">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h2 className="bi_bl_50" data-splitting>
                    UI / UX Designing
                  </h2>
                  <div className="services_list">
                    <ul>
                      <li>
                        <figure>
                          <img src="../img/visual_studio_svg.svg" alt="visual studio" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/adobe-fireworks-svg.svg" alt="firework" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/photoshop_svg.svg" alt="photoshop" />
                        </figure>
                      </li>
                      <li>
                        <figure>
                          <img src="../img/illustrator_svg.svg" alt="illustrator" />
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-7">
                  <p className="in_r_16">
                    User experience (UX) and user interface (UI) design play a
                    crucial role in captivating and engaging your audience. Our
                    UI/UX design services focus on creating visually stunning
                    and intuitive interfaces that provide exceptional user
                    experiences. Our talented designers combine creativity and
                    functionality to design interfaces that are not only
                    aesthetically appealing but also user-friendly and
                    accessible. From wireframing and prototyping to visual
                    design and interaction design, we pay meticulous attention
                    to every detail to ensure that your digital products deliver
                    an immersive and delightful user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Expertise // =================== */}
    </div>
  );
};

export default ServicesMain;
