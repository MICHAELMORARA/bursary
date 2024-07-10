import React, { useState, useEffect } from 'react';
import image2 from './Images/image2.png';
import partner from './Images/partner.png';
import '../App.css';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const spinnerDuration = 4000; // Duration of the spinner in milliseconds

    // Show spinner first
    const spinnerTimer = setTimeout(() => {
      // Hide preloader after animation
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, spinnerDuration);

    return () => clearTimeout(spinnerTimer);
  }, []);

  return (
    <div className="App relative">
      {loading ? (
        <div id="preloader" className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="spinner"></div>
          <div className="left"></div>
          <div className="center">
            <div className="spinner"></div>
          </div>
          <div className="right"></div>
        </div>
      ) : (
        <div className="relative min-h-1/2 mt-28">
          <img src={image2} className="w-full h-screen" alt="" />
          <div className="absolute flex  top-0 right-0 mt-8 mr-6 text-white">
            <img src={partner} className="w-10 mr-2" alt="" />
            <div className="text-start ml-2 text-green-200">
              <h1>You already have an account?</h1>
              <h1>ACCESS PORTAL</h1>
            </div>
          </div>
          <div className="absolute top-96 md:top-28 md:left-2 text-start bg-opacity-100 text-white md:text-9xl text-4xl font-bold animate-swing">
            <h1 className="md:w-screen md:text-8xl w-80">South Mugirango</h1>
            <h2 className="md:w-screen md:text-8xl  md:mt-0 mt-5 w-80">NG-CDF Bursary</h2>
            <h3 className="md:w-screen md:text-8xl md:mt-0 mt-5 w-96 ml-4 md:ml-28">Management System</h3>
          </div>
          <div className="marquee text-white font-bold text-3xl">
            <span>Greatings,The Annual Bursary Application and Verification will be Carried Online this coming 2024/2025. Hon Silvanus Onyiego Osoro Mp South Mugirango</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
