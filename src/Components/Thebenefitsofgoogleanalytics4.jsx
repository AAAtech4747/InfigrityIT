import React from 'react'
import { useEffect } from "react";
import logo from "../favicon_black.png";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./custom.css"


const Thebenefitsofgoogleanalytics4 = () => {

    useEffect(() => {
        document.body.classList.add("inner");
    
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        return () => {
          document.body.classList.remove("inner");
        };
      }, []);
         
   return (
   <div>
    <Helmet>
        <title>About Us Infigrity </title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Infigrity - Software Development Company in India"
        />
        <meta
          property="og:description"
          content="Leading Enterprise software development company in India, provides digital transformation, product engineering, and eCommerce solutions."
        />
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
      </Helmet>
     
     
     {/*----------------------------- BANNER SECTION--------------------  */}
     
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
              <h1>The benefits of Google Analytics 4</h1>
            </li>
          </ul>
        </div>
      </div>


      {/*----------------------------- BLOG SECTION--------------------  */}
    <section className="infinite_infigrity" >
        <div className="wrapper">
          <div className="inner">
            <h2 >6 benefits of GA4 (Google Analytics 4)</h2>
            <p className="bold">
            1. You can now track across both your web and your app.
            </p>

            <p>
            Previously, you had to use Google Analytics for your website tracking and Firebase for your app tracking. Now you can do it all together in one place (website and app). Less martech = happy marketer.
            </p>

            <p className="bold">
            2. Enhanced measurements based on events.
            </p>

            <p>
            Previously, GA just tracked basic events automatically and anything else had to be set up manually in GA and in Google Tag Manager. In fact, in the old GA, everything was really just a hit and events were a type of hit. But that gets pretty complicated, so if you want to read more about it, check out this blog post about setting up events in GA4.
            </p>
             

             <p>
             The point is, whilst you will still need to create custom events to get the most out of GA4. It does have more available measurements out of the box such as scrolling, outbound link clicks, document link clicks, and website searches. Meaning you, the marketer, can now track more without the need for developers to help you set up everything as custom events.
             </p>


             <p className="bold">
             3. Pathways to visualize the buyer journey
            </p>

            <p>
            This allows you to better visualize the buyer journey and understand the flow users take on your website. You can get a better grasp of how they get to your final conversion point and create hypotheses on how to optimize those steps. You could even work backward from a conversion point and build the conversion journey that way. This is something we have actually done at Funnel which has provided some really valuable insights on our buyer journey.
            </p>

            <p className="bold">
            4. Custom reports have become explores
            </p>

            <p>
            They are much more user friendly in that you can easily choose segments to work with then add dimensions + metrics —— which sort of just enables simpler more flexible analysis. It isn’t a huge difference in functionality, but it is easier to use.
            </p>

            <p className="bold">
            5. Free BigQuery Exports
            </p>

            <p>
            In Universal Analytics you had to upgrade to GA 360 in order to get raw data out, which is an expensive produce, especially for smaller businesses. Now you can export raw event-level data for free to BigQuery. Which is great news for all of you out there who work with your data in a data warehouse.
            </p>

            <p className="bold" >
            6. Strategic review
            </p>

            <p>
            The entry of GA4 is a fantastic opportunity to review your entire tracking setup and really dig into if what you have matches your strategic KPI plan. Think of it as an opportunity for spring cleaning!
            </p>

            <p>
            In summary, GA4 is easier and slightly more powerful than GA, meaning it is lowering the barrier for marketers to make use of their data. But don’t just switch right over from GA to GA4, run both at the same time and see which insights and interface you prefer. 
            </p>

            <p>
            However, keep in mind that GA4 is where Google is spending their time and energy making improvements, so don’t be surprised if GA4 continues its development and certain features and functionality in Google Analytics are sunsetted. Don't wait to be forced to make the change, be proactive and get better insights today!
            </p>

            <p>
            Huge thanks to our good friends over at Bluebird Media in Stockholm for sharing their GA4 expertise with us.
            </p>
        
            </div>
        </div>
      </section>

      </div>
  )
}

export default Thebenefitsofgoogleanalytics4