import React from 'react'
import { useEffect } from "react";
import logo from "../favicon_black.png";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./custom.css"



const Mobilemarketinginecommerce = () => {

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
              <h1>Mobile Marketing in eCommerce</h1>
            </li>
          </ul>
        </div>
      </div>


      {/*----------------------------- BLOG SECTION--------------------  */}
    <section className="infinite_infigrity" >
        <div className="wrapper">
          <div className="inner">
            <h2 >Customers are commanding a different experience. It hinges on mobile.</h2>
            <p >
            The device is not the future of marketing, it’s the present. Today, the customer journey often begins and ends on a smartphone. So, as a marketer, it’s your job to engage with your customers on their choice of device. Marketers can’t ignore the surge in M-Commerce, as consumers command an experience that rests on mobile optimization. Brands need to prioritize the mobile marketing in their eCommerce strategies.
            </p>

            <p>
            Today, it has become crucial to maximize conversions on mobile – the consumer’s preferred platform for communication, shopping, and everything in between. The device has deepened the brand-customer relationship and empowered customers to quickly access information and purchase at their convenience. 
            </p>

            <p >
            Mobile marketing plays a pivotal role in eCommerce as more and more people are shopping online using their mobile devices. Here are some ways in which mobile marketing can be used in eCommerce:
            </p>

            <p>
            <span className='bold'>Mobile-Optimized Website:</span> It is crucial to have a mobile-optimized website as more than 50% of online shoppers use their mobile devices to browse eCommerce websites. A mobile-optimized website should be easy to navigate, load quickly, and have clear calls-to-action.
            </p>
             

             <p>
             <span className='bold'>Mobile Apps:</span> Developing a mobile app can be an effective way to engage with customers and provide them with a seamless shopping experience. Mobile apps can offer personalized recommendations, exclusive deals, and loyalty programs.
             </p>


             <p >
             <span className='bold'>SMS Marketing:</span>  SMS marketing is a great way to reach out to customers directly on their mobile devices. SMS marketing can be used to send personalized offers, alerts, and notifications about new products or sales.
             </p>

            <p>
            <span className='bold'>Push Notifications:</span>  Push notifications are a powerful tool for engaging customers and keeping them informed about new products, discounts, and promotions. Push notifications can be used to remind customers about abandoned carts or to provide personalized recommendations.
            </p>

            <p >
            <span className='bold'>Social Media:</span>Social media is an important channel for mobile marketing in eCommerce. Platforms like Instagram and Facebook offer a range of advertising options that can be targeted to specific audiences.
            </p>

            <p>
            <span className='bold'>Mobile Payment Options:</span>It is essential to provide customers with a range of mobile payment options such as Apple Pay, Google Pay, and PayPal. Mobile payment options make it easy for customers to make purchases quickly and securely.
            </p>

            <p >
            In summary, mobile marketing is a critical part of eCommerce as it allows businesses to reach customers directly on their mobile devices and provide them with a seamless shopping experience. 
            </p>

            <p className="bold">
            Achieve an uninterrupted reach on mobile
            </p>

            <p  >
            Mobile devices allow brands to reach customers directly and in real time. Channels native to mobile, such as SMS and app push, are like digital real estate for businesses. They’re valuable. Combine these platforms with email and you can make a pretty powerful and compelling proposition.
            </p>

            <p className='bold'>
            A mobile-first strategy is imperative
            </p>

            <p>
            Effective mobile marketing is about delivering personalized, timely and location-sensitive communications to customers wherever they are. These are the messages that matter. Seamless customer journeys are a collection of joined-up micro moments on mobile:
            </p>

            <p>
            Customers can get what they want where they want. And while marketers strive tirelessly to make their websites and emails responsive on mobile, few have adopted a mobile-first approach.
            </p>

            <p>
            The premise is simple: design everything for a mobile device in the first instance. This strategy is the best way to deliver a consistent and seamless customer journey to your mobile audience.
            </p>

            
            </div>
        </div>
      </section>

      </div>
  )
}

export default Mobilemarketinginecommerce