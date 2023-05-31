import React from "react";
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cookies = () => {
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
        <title> Cookie Policy</title>
        <meta property="og:site_name" content="Infigrity IT Services" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Clear and Transparent Policy	" />
        <meta
          property="og:description"
          content="Learn about our clear and transparent cookie policy for enhanced browsing experience. Read now.	"
        />
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet" />
        <meta name="theme-color" content="#752C85"></meta>
      </Helmet>

      <div
        className="breadcrumb"
        style={{ background: "url(../img/images_1.jpg) no-repeat center" }}
      >
        <div className="wrapper">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <h1>Cookies Policy</h1>
            </li>
          </ul>
        </div>
      </div>

      <section className="infinite_infigrity">
        <div className="wrapper">
          <div className="inner">
            <h2>Cookies Policy</h2>

            <p>
              At Infigrity IT PVT LTD , We use cookies and similar technologies
              on our website. This Cookie Policy explains how we use cookies,
              the types of cookies we use, and your choices regarding cookies.
            </p>

            <p className="bold">1. What are Cookies?</p>

            <p>
              Cookies are small text files that are placed on your device
              (computer, smartphone, tablet) when you visit a website. They are
              widely used to enhance your browsing experience, provide website
              functionality, and collect information about how you interact with
              websites.
            </p>

            <p className="bold">2.Types of Cookies We Use</p>

            <p>
              2.1. Essential Cookies: These cookies are necessary for the
              functioning of our website and enable you to navigate and use its
              features. They are usually set in response to your actions, such
              as filling out forms or setting preferences.
            </p>

            <p>
              2.2. Analytics Cookies: We use analytics cookies to collect
              information about how visitors use our website, such as the pages
              visited, the time spent on each page, and any error messages
              encountered. This helps us analyze and improve the performance and
              usability of our website.
            </p>

            <p>
              2.3. Functional Cookies: Functional cookies allow our website to
              remember choices you make (such as your language or region) and
              provide enhanced features and personalized content. These cookies
              may also be used to provide services you have requested, such as
              live chat support.
            </p>

            <p>
              2.4. Advertising Cookies: We may use advertising cookies to
              deliver targeted advertisements and measure the effectiveness of
              our marketing campaigns. These cookies track your browsing habits
              and enable us to show you relevant ads based on your interests.
            </p>

            <p className="bold">3.Third-Party Cookies</p>

            <p>
              We may allow third-party service providers, such as analytics or
              advertising partners, to place cookies on your device through our
              website. These cookies may collect information about your online
              activities across different websites and services. We do not have
              control over the content or privacy practices of these third
              parties. Therefore, we encourage you to review their respective
              privacy policies.
            </p>

            <p className="bold">4. Your Cookie Choices</p>

            <p>
              4.1. Cookie Consent: By continuing to use our website, you consent
              to the placement of cookies on your device as described in this
              Cookie Policy.
            </p>

            <p>
              4.2. Browser Settings: You can manage your cookie preferences
              through your browser settings. Most web browsers allow you to
              control cookies, including blocking or deleting them. However,
              please note that blocking or deleting certain cookies may impact
              the functionality and performance of our website.
            </p>

            <p>
              4.3. Cookie Opt-Out: Some third-party advertising networks, such
              as Google AdSense or Facebook Audience Network, may provide
              options to opt-out of targeted advertising. You can visit their
              respective websites for more information on how to manage your
              preferences.
            </p>

            <p>5.Updates to this Cookie Policy</p>

            <p>
              We may update this Cookie Policy from time to time to reflect
              changes in our practices or applicable laws. We encourage you to
              review this policy periodically for any updates.
            </p>

            <p className="bold">6.Contact Us</p>

            <p>
              If you have any questions or concerns about our use of cookies or
              this Cookie Policy, please contact us using the following
              information:
            </p>
            <ul className="ule">
              <li>Infigrity IT Pvt. Ltd.</li>
              <li>
                720, City Gate, Near Vishala Hotel, New Vasna, Ahmedabad 380007,
                Gujarat - India
              </li>
              <li>contact@infigrityit.com</li>
              <li>+91 9081 118704</li>
            </ul>
            <p>
              Please note that this Cookie Policy should be read in conjunction
              with our Privacy Policy, which provides further information on how
              we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
