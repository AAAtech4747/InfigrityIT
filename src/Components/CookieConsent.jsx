import React, { useState } from 'react';
import Cookies from 'js-cookie';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(!Cookies.get('cookieConsent'));

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="cookie-consent">
      <p>This website uses cookies to enhance the user experience.</p>
      <button onClick={handleAccept}>Accept</button>
    </div>
  );
};

export default CookieConsent;