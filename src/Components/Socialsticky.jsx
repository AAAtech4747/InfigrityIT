import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Socialsticky = () => {

  function scrollTop () {
  
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <main id='main'>
    <div>
 <div className="social_sticky">
            <ul>
              <li>
                <a
                
                  href="https://www.facebook.com/infigrityit"
                  target="_blank"
                  className="browser-window__link"
                >
                <FontAwesomeIcon icon={faFacebook} />
                  {/* <i className="fab fa-facebook-f" /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/infigrityit"
                  target="_blank"
                  className="browser-window__link"
                >
                <FontAwesomeIcon icon={faTwitter} />
                  {/* <i className="fab fa-twitter" /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/infigrityit"
                  target="_blank"
                  className="browser-window__link"
                >
                 <FontAwesomeIcon icon={faLinkedin} />
                  {/* <i className="fab fa-linkedin-in" /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/infigrity/"
                  target="_blank"
                  className="browser-window__link"
                >
                  {/* <i className="fab fa-instagram" /> */}
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="scroll_sticky">
              <Link onClick={scrollTop}>Scroll Top</Link>
            </div>
          </div>


          </div>
          </main>
  )
}

export default Socialsticky