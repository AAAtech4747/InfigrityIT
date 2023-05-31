import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useRef ,useState,useEffect } from 'react'
import Aboutus from './Components/Aboutus'
import Career from './Components/Career'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Work from './Components/Work'
import Services from './Components/Industries'
import Servicesdetails from './Components/Servicesdetails'
import Magento from './Components/Magento'
import { Helmet } from 'react-helmet'
import "bootstrap/dist/js/bootstrap"
import Scrolltopcustom from './Components/Scrolltopcustom'
import Magentomigrationservices from './Components/Magentomigrationservices'
import Magentoecommerce from './Components/Magentoecommerce'
import Enterprizedevlopment from './Components/Enterprizedevlopment'
import Magentodevlopment from './Components/Magentodevlopment'
import Shopifydevelopment from './Components/Shopifydevelopment'
import Magentosupportplan from './Components/Magentosupportplan1'
import Woocommercedevlopment from './Components/Woocommercedevlopment'
import Nodejsdevelopment from './Components/OSDevlopment/Nodejsdevelopment'
import Phpdevlopment from './Components/OSDevlopment/Phpdevlopment'
import Laraveldevelopment from './Components/OSDevlopment/Laraveldevelopment'
import Angularjsdevelopment from './Components/OSDevlopment/Angularjsdevelopment'
import ReactJSdevelopment from './Components/OSDevlopment/ReactJSdevelopment'
import Customwebdesign from './Components/OSDevlopment/Customwebdesign'
import Androidappdevelopment from './Components/MobileappDevlopment/Androidevelopment'
import Iphoneappdevelopment from '../src/Components/MobileappDevlopment/Iphonedevelopment'
import Seoservices from './Components/DigitalMarketing/Seoservices'
import Ppcmanagementservices from './Components/DigitalMarketing/Ppcmanagementservices'
import Socialmediamarketingservices from './Components/DigitalMarketing/Socialmediamarketingservices'
import Contentmarketingservices from './Components/DigitalMarketing/Contentmarketingservices'
import Wordpressdevlopment from './Components/CMSDevlopment/Wordpressdevlopment'
import LMSDevlopment from './Components/CMSDevlopment/LMSDevlopment'
import Responsivedesign from './Components/CMSDevlopment/Responsivedesign'
import Automationtestingservices from './Components/QualityEngineering/Automationtestingservices'
import Performancetestingservices from './Components/QualityEngineering/Performancetestingservices'
import Mobiletestingservices from './Components/QualityEngineering/Mobiletestingservices'
import Securityassessmentandtesting from './Components/QualityEngineering/Securityassessmentandtesting'
// import Woocommercedevlopment from './Components/Woocommercedevlopment'

import { $ } from 'react-jquery-plugin'
import Reactnativedevlopment from './Components/MobileappDevlopment/Reactnativedevlopment'
import Flutterdevelopment from './Components/MobileappDevlopment/Flutterdevelopment'
import Socialsticky from './Components/Socialsticky'
import ServicesMain from './Components/ServicesMain'
import Industries from './Components/Industries'
import Googleanalytics from './Components/Googleanalytics'
import "./Components/custom.css"


import CookieConsent from 'react-cookie-consent'
import Thebenefitsofgoogleanalytics4 from './Components/Thebenefitsofgoogleanalytics4'
import Mobilemarketinginecommerce from './Components/Mobilemarketinginecommerce'
import Ecommercedigitalmarketingtrends from './Components/Ecommercedigitalmarketingtrends'
import Privacy from './Components/Privacy'
import Cookies from './Components/Cookies'


const App = () => {

 <Helmet>
<script type="text/JavaScript" src="js/vendor/scripts.js"></script>
<script type="text/JavaScript" src="js/vendor/Draggable.min.js"></script>
 </Helmet>
  
  var body = document.querySelector("body");
  body.classList.remove("preloader");





  const footerRef = useRef(1);
  const [paddingBottom, setPaddingBottom] = useState();
  
  useEffect(() => {
    
    
   
    Scrolltopcustom();
    if (footerRef.current) {
      const offsetValue = document.getElementById("footer").offsetHeight;
      document.body.style.paddingBottom = offsetValue+"px";
    }
              // Header Sticky Code ===================== // 
    const handleScroll = () => {
      if (window.pageYOffset >= 100) {
        document.getElementById("header").classList.add("sticky"); // Add Class Sticky 
      } else {
        document.getElementById("header").classList.remove("sticky"); // Remove Class Sticky
      }
    };

    window.addEventListener('scroll', handleScroll); // Call Handle scroll event 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
    
 
 
   
   
  }, []);

  return (
   <div>
    

 

    <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="cookieConsent"
        expires={30}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>  
  <div className="circle-cursor circle-cursor--inner" />
  <div className="circle-cursor circle-cursor--outer" />
  <div className="loader">
    <svg
      width="300px"
      height="200px"
      viewBox="0 0 187.3 93.7"
      preserveAspectRatio="xMidYMid meet"
      style={{
        left: "50%",
        top: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%) matrix(1, 0, 0, 1, 0, 0)"
      }}
    >
      <path
        stroke="#ededed"
        id="outline"
        fill="none"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
      />
      <path
        id="outline-bg"
        opacity="0.09"
        fill="none"
        stroke="#ededed"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 				c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z"
      />
    </svg>
    <span>Infigrity</span>
  </div>
  

                  
     <BrowserRouter>
     <Scrolltopcustom/>
     <Googleanalytics/>
     
      <Header/>
      <Socialsticky/>
      {/* <Header1/> */}
            <Routes>
           
        
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/contact-us" element={<Contactus/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/work" element={<Work/>}/> 
        <Route path="/services" element={<ServicesMain/>}/>
        <Route path="/services-details" element={<Servicesdetails/>}/>  
        <Route path="/industries" element={<Industries/>}/>
        
      {/*------------------------ Magento Solution Routes------------------------------  */}  
        <Route path="/services/magento-2-migration-service" element={<Magentomigrationservices/>}/>   
        <Route path="/services/ecommerce-development" element={<Magentoecommerce/>}/>
        <Route path="/services/enterprise-development" element={<Enterprizedevlopment/>}/>
        <Route path="/services/magento-support-plan" element={<Magentosupportplan/>}/>
        <Route path="/services/magento-extension" element={<Magento/>}/>
        <Route path="/services/magento-upgrade-service" element={<Magento/>}/>
  {/*------------------------ E-commerce solution Routes------------------------------  */}
        <Route path="/services/shopify-development" element={<Shopifydevelopment/>}/>
        <Route path="/services/woocommerce-development" element={<Woocommercedevlopment/>}/>
        <Route path="/services/magento-development" element={<Magentodevlopment/>}/>
        <Route path="/services/magento-ecommerce" element={<Magentoecommerce/>}/>
   {/*------------------------ Open Source Devlopment Routes------------------------------  */}
        <Route path="/services/node-js-development" element={<Nodejsdevelopment/>}/>
        <Route path="/services/php-web-development" element={<Phpdevlopment/>}/>
        <Route path="/services/laravel-development" element={<Laraveldevelopment/>}/>
        <Route path="/services/angular-js-development" element={<Angularjsdevelopment/>}/>
        <Route path="/services/reactjs-development" element={<ReactJSdevelopment/>}/>
        <Route path="/services/custom-web-development" element={<Customwebdesign/>}/>
   {/*------------------------ Mobile App Devlopment Routes---------------------------------  */}
        <Route path="/services/android-app-development" element={<Androidappdevelopment/>}/>
        <Route path="/services/react-native-development" element={<Reactnativedevlopment/>}/>
        <Route path="/services/flutter-development" element={<Flutterdevelopment/>}/>
        <Route path="/services/iphone-app-development" element={<Iphoneappdevelopment/>}/>
   {/*------------------------ Digital Marketing Routes---------------------------------  */}     
        <Route path="/services/seo-services" element={<Seoservices/>}/>
        <Route path="/services/ppc-management-services" element={<Ppcmanagementservices/>}/>
        <Route path="/services/social-media-marketing-services" element={<Socialmediamarketingservices/>}/>
        <Route path="/services/content-marketing-services" element={<Contentmarketingservices/>}/>
   {/*------------------------ CMS Devlopment Routes---------------------------------  */}
        
        <Route path="/services/wordpress-development" element={<Wordpressdevlopment/>}/>
        <Route path="/services/learning-management-system-development" element={<LMSDevlopment/>}/>
        <Route path="/services/responsive-web-design" element={<Responsivedesign/>}/>

  {/*------------------------ Quality Engineering Routes---------------------------------  */}    
        <Route path="/services/automation-testing-services" element={<Automationtestingservices/>}/>
        <Route path="/services/performance-testing-services" element={<Performancetestingservices/>}/>
        <Route path="/services/mobile-testing-services" element={<Mobiletestingservices/>}/>
        <Route path="/services/security-assessment-and-testing" element={<Securityassessmentandtesting/>}/>
    
    
    {/* BLOG ROUTE  */}
    <Route path='/services/the-benefits-of-google-analytics-4' element={<Thebenefitsofgoogleanalytics4/>}/>
    <Route path='/services/mobile-marketing-in-ecommerce' element={<Mobilemarketinginecommerce/>}/>
    <Route path='/services/ecommerce-digital-marketing-trends' element={<Ecommercedigitalmarketingtrends/>}/>
     
     {/* PRIVACY POLICY ROUTE */}
     <Route path='/privacy' element={<Privacy/>}/>

     <Route path='/cookies' element={<Cookies/>}/>


     {/* COOKIE POLICY */}
     
     </Routes>
    <Suspense/>
    
    <Footer/>
   </BrowserRouter>
 

</div>
  )
}

export default App