import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";

const LMSDevlopment = () => {
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
    document.body.classList.add("inner");

    return () => {
      document.body.classList.remove("inner");
    };
  }, []);

  return (
    <div>
    <Helmet>
        <title>LMS Development Services		</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Custom LMS Solutions	" />
        <meta
          property="og:description"
          content="Custom Learning Management System (LMS) development solutions for streamlined education and training. Discover our services."/>
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
              <h1>LMS Devlopment</h1>
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
                <img src="../img/content/lms_development.png" alt="" />
              </figure>
              
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                Custom LMS Development Services to enhance your learning
                experience
              </h2>

              <p className="in_r_16">
                Insightful, resourceful and highly intuitive learning management
                system development services as per your custom business needs to
                boost your learning experiences.
              </p>

              <a href="about.html" className="btn_fill_black">
                GET LMS SOLUTIONS NOW
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*---------------------------- Infigrity and Magento Ecommerce Development--------------- */}

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
              <span>
                  <video playsInline autoPlay muted loop>
                    <source src="../img/content/learning.mp4" type="video/mp4" />
                  </video>
                </span>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">
                LMS Development Services by Infigrity
              </h2>

              <p className="in_r_16">
                Infigrity Technologies is a proficient LMS development company
                that provides custom eLearning course development services that
                can provide a good learning curve for your organization. We have
                developed and implemented LMS solutions for hospitals, colleges,
                government corporations, training centers, K-12, government
                agencies, organizations, companies, etc. We have a team of LMS
                developers that work to create a comprehensive eLearning
                solution from scratch. Irrespective of whether you require a
                simple eLearning website or an intricate one – we can help! We
                always evaluate our learning and development programs on the
                basis of the results derived.
              </p>
              <p className="in_r_16">
                It has generally been found that training the new employees,
                delivering How-tos and FAQ’s for a major software rollout is a
                very tough job. Many organizations invest in the tools but
                struggle in the process of making their employees implement
                them. This is where our LMS development services come into the
                picture.
              </p>

              <Link to={"/contact-us"} className="btn_fill_black">
                HIRE LMS DEVELOPER NOW
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*------------------- Our Magento ecommerce development solutions include:--------------------- */}
      <section className="technologies section words chars splitting">
        {/* <div class="techno_vertical_title">OUR EXPERTISE</div> */}
        <div className="wrapper">
          <div className="technologies_inner">
            <h2 className="bi_bl_50">Our LMS Development Services</h2>
            <ul className="row">
              <li className="col-md-4">
                <div className="technologies_inner_box">
                  <figure>
                    <img src="../img/wordpress.svg" alt="" />
                  </figure>
                  <div className="technologies_inner_box_text">
                    <h3 className="bi_r_24">E-Learning courses</h3>
                    <p className="in_r_16">
                      It is time to set your ROI percentages in action by
                      transforming your LMS into an eCommerce money churning
                      platform. Once the resource is ready, sell the content as
                      a subscription or individual course.
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
                    <h3 className="bi_r_24">Customize User Interface</h3>
                    <p className="in_r_16">
                      Our LMS developers stay true to your brand by providing
                      fully customized user interface of your LMS. Alternatively
                      it is even possible for you to upload your logo.
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
                    <h3 className="bi_r_24">Responsive LMS</h3>
                    <p className="in_r_16">
                      Our talented bunch of LMS developers have the acumen of
                      making your learning courses mobile responsive. This
                      ultimately ensures that they can be viewed by large
                      target.
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
                    <h3 className="bi_r_24">Live Chat Option LMS</h3>
                    <p className="in_r_16">
                      It is time to set your ROI percentages in action by
                      transforming your LMS into an eCommerce money churning
                      platform. Once the resource is ready, sell the content.
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
                    <h3 className="bi_r_24">LMS Development Solution</h3>
                    <p className="in_r_16">
                      Our LMS developers stay true to your brand by providing
                      fully customized user interface of your LMS. Alternatively
                      it is even possible for you to upload your logo & select
                      theme colors.
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
                    <h3 className="bi_r_24">
                      WORDPRESS CMS INSTALLATION & CONFIGURATION
                    </h3>
                    <p className="in_r_16">
                      We provide seamless CMS installation & configuration. This
                      includes WordPress websites and blog setup, WordPress
                      design & development, free & paid WordPress theme
                      configuration, etc.
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
                    <h3 className="bi_r_24">
                      RESPONSIVE WORDPRESS THEME DEVELOPMENT
                    </h3>
                    <p className="in_r_16">
                      Do you feel your existing website lacks the responsiveness
                      and gets truncated on screen? We provide highly responsive
                      WordPress theme development services as per your
                      individual requirements.
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
                    <h3 className="bi_r_24">WORDPRESS ECOMMERCE DEVELOPMENT</h3>
                    <p className="in_r_16">
                      And here comes the most trending WordPress eCommerce
                      development services, i.e., WooCommerce development. Yes!
                      We also offer WooCommerce Development Services.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*------------------------------------ Why to choose us?---------------------------------- */}

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Looking for LMS Development?</h2>

              <p className="in_r_16">
                Looking for the finest solutions to build up a software for
                e-learning management system? Infigrity’s LMS system development
                services is the perfect place for you. LMS system is a free and
                open-source software learning management system. When technology
                is evolving at such a high speed, how can education system stay
                back?
              </p>
              <p className="in_r_16">
                Being the best LMS development company, we leverage our sheer
                expertise to offer you unmatched results.
              </p>
              <p className="in_r_16">
                Our state-of-the-art tools and technologies help us to cater to
                the unique needs of the businesses.
              </p>
              <p className="in_r_16">
                Highly intuitive and attractive user interface to offer superior
                user experience.
              </p>
              <p className="in_r_16">
                Expert LMS developers with a vast experience in developing
                tailor-made LMS development solutions.
              </p>
              <Link to={"/contact-us"} className="btn_fill_black">
                GET A FREE WORDPRESS CONSULTATION NOW
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Reasons to Choose Us</h2>

              <p className="in_r_16">
                Infigrity Technologies is your ultimate destination when it
                comes to ingenious LMS development. We understand that you need
                support for your current and future talent initiatives which is
                delivered by us in the form of LMS platform.
              </p>

              <a href="about.html" className="btn_fill_black">
                GET LMS SOLUTIONS NOW
                <span className="browser-window__link">
                  <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Hire our LMS Developers</h2>

              <p className="in_r_16">
                We envisage and implement a learning and development program
                that is specifically targeted towards the needs and objectives
                of your organization. The beautiful part is, it can be used to
                track measurable results. Our LMS developers have the acumen of
                delivering an all-inclusive learning strategy that is solely
                contingent on your organizational goals. We can deliver highly
                effective training program and manage its execution to get the
                desired results.
              </p>
              <p className="in_r_16">
                With the help of our LMS development solution, rest assured you
                do not have to remember your username and password combinations.
                Thanks to the SSO solution, we provide options to integrate it
                with Microsoft Azure, Google, and many more..
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Having a Learned Team Is Bliss</h2>

              <p className="in_r_16">
                Modern technologies are evolving almost every day. For example,
                Google changes its algorithms multiple times in a year. To pace
                with such evolving technologies, you need to have a sound team
                of professionals who are highly skilled and trained too. With an
                efficient LMS development services, you can achieve the goal.
              </p>
              <p className="in_r_16">
                Infigrity will develop a tailor-made LMS model for you that
                serves the core purpose and offer a unique opportunity to train
                your employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="whoweare section mt-2">
        <div className="wrapper">
          <div className="whoweare_inner row m-0 align-items-md-center">
            <div className="whoweare_inner_left p-0">
              <figure>
                <img src="../img/whoweare_img_1.png" alt="" />
              </figure>
            </div>
            <div className="whoweare_inner_right">
              <h2 className="bi_bl_50">Other Solutions</h2>

              <p className="in_r_16">
                Infigrity is a leading IT and digital marketing solutions
                provider that has carved a niche for itself by offering
                valuable, tailor-made, innovative and feasible solutions to our
                esteemed clients. Some other services offered by us are:
              </p>
              <img src="../img/angular.png" alt="" />
              <img src="../img/react.png" alt="" />
              <img src="../img/laravel.png" alt="" />
              <img src="../img/php.png" alt="" />
              <img src="../img/nodejs.png" alt="" />
              <img src="../img/codiginter.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/*-----------------------------------Our Blog-------------------------------------- */}

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

export default LMSDevlopment;
