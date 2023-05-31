import React from 'react'
import logo from "../favicon_black.png"
import { Helmet } from 'react-helmet'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { $ } from 'react-jquery-plugin'

const Contactus = () => {
  
  
    const [formData, setFormData] = useState({
      fname: '',
      lname:'',
      email: '',
      number: '',
      message: '',
    });
  
    const handleInputChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const serviceId = 'service_5v011tj';
      const templateId = 'template_p3be5ul';
      const userId = 'QKRpYywxIccEMImaD';
  
      emailjs.send(serviceId, templateId, formData, userId)
        .then((result) => {
          alert('Email sent successfully');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        }, (error) => {
          console.error(error);
          alert('Error sending email');
        });
    };
 
    const location = useLocation();

    useEffect(() => {

      document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
      document.body.classList.add('inner');    
      var typeWriterElement = document.getElementById('typewriter');

      var textArray = ["नमस्ते !", "مرحبا !", "Hola !", "こんにちは !"];
      
      function delWriter(text, i, cb) {
        if (i >= 0) {
          typeWriterElement.innerHTML = text.substring(0, i--);
          var rndBack = 10 + Math.random() * 100;
          setTimeout(function() {
            delWriter(text, i, cb);
          }, rndBack);
        } else if (typeof cb == 'function') {
          setTimeout(cb, 1000);
        }
      }
      
      function typeWriter(text, i, cb) {
        if (i < text.length + 1) {
          typeWriterElement.innerHTML = text.substring(0, i++);
          var rndTyping = 250 - Math.random() * 100;
          setTimeout(function() {
            typeWriter(text, i++, cb)
          }, rndTyping);
        } else if (i === text.length + 1) {
          setTimeout(function() {
            delWriter(text, i, cb);
          }, 1000);
        }
      }
      
      function startWriter(i) {
        if (typeof textArray[i] == "undefined") {
          setTimeout(function() {
            startWriter(0);
          }, 1000);
        } else if (i < textArray[i].length + 1) {
          typeWriter(textArray[i], 0, function() {
            startWriter(i + 1);
          });
        }
      }
      
      setTimeout(function() {
        startWriter(0);
      }, 1000);
      
      if (parseInt($(window).width()) < 991) {
        $('.logo_mobile').remove();
        $(
          '<div class="logo_mobile"><a href="/"><img src="img/logo.png" alt="Infigrity IT Services Pvt. Ltd."/></a></div>'
        ).appendTo(".navbar ");
       }
  
    
      
      return () => {
        document.body.classList.remove('inner');
      }
    }, [location])
    
 
  return (
     <div>
     <Helmet>
      <title>Contact Infigrity IT Services Pvt. Ltd.</title>
      <meta property="og:site_name" content="Infigrity IT Services Pvt. Ltd. - Infinite. Integrity." />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Get in Touch with Our Experts" />
      <meta property="og:description" content="Have a question or want to discuss your requirements? Contact us today." />
      <meta property="og:url" content="https://infigrityit.com/" />
      <meta property="og:image" content={logo} />
      <meta property="og:image:secure_url" content={logo} />
      <meta name="theme-color" content="#0c0c0c"></meta>
      <script type="text/JavaScript" src="js/vendor/Draggable.min.js"></script>
      <script type="text/JavaScript" src="js/vendor/scripts.js"></script>
      </Helmet>
      
  <div
    className="breadcrumb"
    style={{ background: "url(../img/images_3.jpg) no-repeat center" }}
  >
    <div className="wrapper">
      <ul>
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <h1>Contact us</h1>
        </li>
      </ul>
    </div>
  </div>
  {/* /breadcrumb */}
  <div className="stranger">
    <div className="wrapper">
      <div className="stranger_inner d-flex flex-row flex-wrap justify-content-center align-items-center">
        <h3>
          Don’t be a stranger. Say 
          {/* <span className="typed-text"></span> */}
          <span id="typewriter" data-array="" className="typed-text"></span>
          <span className="cursor">&nbsp;</span>
        </h3>
      </div>
    </div>
  </div>
  <section className="contact_block">
    <div className="wrapper">
      <div className="contact_block_inner">
        <div className="contact_block_inner_info">
          <h2>Contact Info</h2>
          <ul>
            <li>
              <img src="img/address_icon.svg" alt="" />
              <address>
                720, City Gate, Near Vishala Hotel, New Vasna, Ahmedabad,
                Gujarat 380007
              </address>
            </li>
            <li>
              <img src="img/call.svg" alt="" />
              <a href="tel:+91 9081 118704">+91 9081 118704</a>
            </li>
            <li>
              <img src="img/mail.svg" alt="" />
              <a href="mailto:contact@infigrityit.com">
                contact@infigrityit.com
              </a>
            </li>
          </ul>
          <div className="contact_social">
            <a   href="https://www.facebook.com/infigrityit"
                  target="_blank"
                  className="browser-window__link">
              <svg
                className="svg-inline--fa fa-facebook-f fa-w-10"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
              {/* <i class="fab fa-facebook-f"></i> Font Awesome fontawesome.com */}
            </a>
            <a  href="https://twitter.com/infigrityit"
                  target="_blank" className="browser-window__link">
              <svg
                className="svg-inline--fa fa-twitter fa-w-16"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
              {/* <i class="fab fa-twitter"></i> Font Awesome fontawesome.com */}
            </a>
            <a  href="https://www.linkedin.com/company/infigrityit"
                  target="_blank" className="browser-window__link">
              <svg
                className="svg-inline--fa fa-linkedin-in fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                />
              </svg>
              {/* <i class="fab fa-linkedin-in"></i> Font Awesome fontawesome.com */}
            </a>
            <a  href="https://www.instagram.com/infigrity/"
                  target="_blank" className="browser-window__link">
              <svg
                className="svg-inline--fa fab fa-instagram fa-w-14"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram-in"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                />
              </svg>
              {/* <i class="fab fa-linkedin-in"></i> Font Awesome fontawesome.com */}
            </a>
          </div>
        </div>
        <div className="contact_block_inner_form">
          <h2>Send a Message</h2>
          <form action="">
            <div className="form_row">
              <div className="form-item--with-scaling-label js-form-item form-item form-item-textfield">
               
                <input placeholder='First name' name='fname' value={formData.fname} onChange={handleInputChange} className="form-text form-item__input" type="text" />
              </div>
              <div className="form-item--with-scaling-label js-form-item form-item form-item-textfield">
               
                <input placeholder=' Last name' name='lname' value={formData.lname} onChange={handleInputChange} lassName="form-text form-item__input" type="text" />
              </div>
            </div>
            <div className="form_row">
              <div className="form-item--with-scaling-label js-form-item form-item form-item-textfield">
               
                <input placeholder='Email Address' name='email'  value={formData.email} onChange={handleInputChange} lassName="form-text form-item__input" type="email" />
              </div>
              <div className="form-item--with-scaling-label js-form-item form-item form-item-textfield">
                
                <input placeholder='Mobile Number' name='number' value={formData.number} onChange={handleInputChange} className="form-text form-item__input" type="text" />
              </div>
            </div>
            <div className="form-item--with-scaling-label js-form-item form-item form-item-textfield textarea">
              
              <textarea
                placeholder=' Write your message here...'
                name='message'
                className="form-text form-item__input"
                cols={30}
                rows={10}
                value={formData.message}   
                onChange={handleInputChange}             
              />
            </div>
            <button className="btn_fill_black" onClick={handleSubmit}>
              Send
              <span className="browser-window__link">
                <svg
                  className="svg-inline--fa fa-chevron-right fa-w-10"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  />
                </svg>
                {/* <i class="fas fa-chevron-right"></i> Font Awesome fontawesome.com */}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* /.contact_block */}
  <section className="mapwithinfo">
    <div className="wrapper">
      <div className="mapwithinfo_inner d-flex flex-row flex-wrap justify-content-start align-items-center">
        <div className="mapwithinfo_inner_left">
          <iframe
            src="https://snazzymaps.com/embed/454176"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        </div>
        <div className="mapwithinfo_inner_right">
          <h4 className="bi_bl_50">Drop us a line</h4>
          <ul className="d-flex flex-row flex-wrap justify-content-start align-items-start">
            <li>
              <strong>Phone</strong>
              <a href="tel:+91 9081 118704">+91 9081 118704</a>
            </li>
            <li>
              <strong>New Business</strong>
              <a href="mailto:contact@infigrityit.com">
                contact@infigrityit.com
              </a>
            </li>
            <li>
              <strong>Location</strong>
              <address>
                720, City Gate, Near Vishala Hotel, New Vasna, Ahmedabad,
                Gujarat 380007
              </address>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>

   
  )
}

export default Contactus