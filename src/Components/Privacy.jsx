import React from 'react'
import logo from "../favicon_black.png";
import { Helmet } from "react-helmet";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
        <title> Privacy Policy</title>
        <meta
          property="og:site_name"
          content="Infigrity IT Services"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Your Privacy Matters to Us		" />
        <meta
          property="og:description"
          content="We value your privacy. Learn how we collect, use, and protect your personal information. Read now.	"/>
        <meta property="og:url" content="https://infigrityit.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:secure_url" content={logo} />
        <link href="css/ashiq.css" rel="stylesheet"/>
        <meta name="theme-color" content="#752C85"></meta>
        
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
              <h1>Privacy Policy</h1>
            </li>
          </ul>
        </div>
      </div>

    <section className="infinite_infigrity" >
        <div className="wrapper">
          <div className="inner">
            <h2 >Privacy Policy</h2>
           
           
           
           <p>
           At Infigrity IT PVT LTD  we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you interact with our services or visit our website. By using our services or accessing our website, you consent to the practices described in this Privacy Policy.
            </p>

            <p className='bold'>
            1.Information We Collect
            </p>

            <p>
            We may collect and process the following categories of personal information:
            </p>

            <p>
            1.1. Personal Information Provided by You: When you interact with our services or communicate with us, we may collect personal information that you provide, such as your name, email address, postal address, telephone number, and any other information you voluntarily provide to us.
            </p>

            <p>
            1.2. Automatically Collected Information: We may collect certain information automatically when you visit our website or use our services. This may include your IP address, browser type, device type, operating system, referring URLs, and other usage information.
            </p>
            
            <p>
            1.3. Cookies and Similar Technologies: We may use cookies and similar technologies to collect information about your interactions with our website. Cookies are small text files that are stored on your device to help us enhance your experience, improve our services, and understand how our website is used. You can manage your cookie preferences through your browser settings.
            </p>

            <p className='bold'>
            2.Use of Information
            </p>

            <p>
            We use the collected information for the following purposes:
            </p>

            <p>
            2.1. Providing Services: To provide, maintain, and improve our services, and to fulfill your requests and inquiries.
            </p>

            <p>
            2.2. Communication: To communicate with you, respond to your inquiries, and provide updates regarding our services, promotions, and events. We may also send you marketing communications if you have opted-in to receive them.
            </p>
            
            <p>
            2.3. Analytics and Research: To analyze usage patterns, conduct research, and improve the quality of our services. This includes monitoring and analyzing trends, preferences, and interactions to enhance user experience.
            </p>
            
            <p>
            2.4. Legal Compliance: To comply with applicable laws, regulations, legal processes, or enforceable governmental requests, as well as to protect our rights, privacy, safety, or property, and that of our users and the public.
            </p>

            <p className='bold'>
            3.Sharing of Information
            </p>

            <p>
            We may share your personal information in the following circumstances:
            </p>

            <p>
            3.1. Service Providers: We may share your information with trusted third-party service providers who assist us in operating our business, delivering services, or conducting business-related activities on our behalf. These service providers are obligated to protect your information and only process it as necessary to provide the requested services.
            </p>

            <p>
            3.2. Business Transfers: In the event of a merger, acquisition, or any form of sale or transfer of some or all of our assets, we may disclose or transfer your personal information to the acquiring party as part of the transaction, subject to applicable data protection laws.
            </p>
            
            <p>
            3.3. Legal Requirements: We may disclose your personal information if required to do so by law or in response to valid legal requests from public authorities.
            </p>

            <p className='bold'>
            4. Data Security
            </p>

            <p>
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security of your information.
            </p>

            <p>
           5.Your Rights
            </p>

            <p>
            You may have certain rights regarding your personal information, which may include the right to access, correct, update, or delete your information. If you wish to exercise any of these rights, please contact us using the contact information provided below.
            </p>
            
            <p className='bold'>
            6.Children's Privacy
            </p>
            
            <p>
            Our services are not directed to individuals under the age of 16. We do not knowingly collect or solicit personal information from anyone under the age of 16. If we become aware
            </p>
           
        
            </div>
        </div>
      </section>


    </div>
  )
}

export default Privacy