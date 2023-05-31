import React from 'react'
import  ReactGA from 'react-ga'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Googleanalytics = () => {
  const location = useLocation();


  useEffect(() => {
    
    ReactGA.initialize('G-ZT489GGD0C'); // Replace with your tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);

    return () => {
      
    }
  }, [location])
  



    return (
    <div></div>
  )
}

export default Googleanalytics