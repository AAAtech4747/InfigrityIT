import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Scrolltopcustom = () => {
 
 
    function ScrollToTop() {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, [pathname]);
      
 
 
}
}
export default Scrolltopcustom