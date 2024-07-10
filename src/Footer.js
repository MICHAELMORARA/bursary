import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faCopyright, faEnvelope, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import image1 from './Components/Images/image1.png';
import './App.css'; // Adjusted path if necessary

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='relative h-40'>
      <div className='bg-gradient-to-b from-slate-950 via-white to-slate-950 relative'>
        <div className='bg-slate-700 rounded-b-lg pb-6 md:flex justify-between p-6 leading-8'>
          <div className='text-white mt-4 text-start relative z-10'>
            <img className='w-20 h-20 rounded-full ' src={image1} alt='' />
            <h2 className='mt-2'>Bursary Management System</h2>
            <h3 className='italic mt-2 mb-3'>Enlightening the society</h3>
            <div className='leading-10 flex'>
              <a href='https://facebook.com' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="p-2 rounded-sm bg-black hover:bg-blue-700 mr-2" />
              </a>
              <a href='https://twitter.com' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="p-2 rounded-sm bg-black hover:bg-blue-700 mr-2" />
              </a>
              <a href='https://linkedin.com' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="p-2 rounded-sm bg-black hover:bg-blue-700 mr-2" />
              </a>
              <a href='https://instagram.com' target='_blank' rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="p-2 rounded-sm bg-black hover:bg-red-700 mr-2" />
              </a>
            </div>
          </div>
          <div className='text-white mt-3 text-start relative z-10'>
            <h2 className='first-letter:text-2x text-white text-xl font-bold relative pl-4'>
              <span className='absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-red-700'></span>
              Our Connective
            </h2>
            <ul className=' ml-10'>
              <li className='hover:text-amber-300'><Link to="/home">Student Login</Link></li>
              <li className='hover:text-amber-300'><Link to="/aboutus">Admin Login</Link></li>
            </ul>
          </div>
          <div className='text-white mt-3 text-start relative z-10'>
            <h2 className='text-xl font-bold text-white relative pl-4'>
              <span className='absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-4 bg-red-700'></span>
              Get In Touch
            </h2>
            <ul className='ml-4 block'>
              <li className='flex mt-2'><FontAwesomeIcon icon={faMapMarker} className='mr-2 p-2 bg-black hover:bg-red-700 rounded-sm'/> South Mugirango</li>
              <li className='ml-11'>Gucha South & Etago Sub County</li>
              <li className='ml-11'>Kisii County</li>
              <li className='ml-11'>Kenya</li>
            </ul>
            <div className='block items-center'>
              <span className='ml-4 mr-2 flex mt-2 '><FontAwesomeIcon icon={faPhone} className='mr-1 bg-black p-2 hover:bg-red-700' /> +254724662381</span>
              <h3 className='ml-4 mr-2 flex mt-4 '><FontAwesomeIcon icon={faEnvelope} className='mr-1 bg-black p-2 hover:bg-red-700' /> Osorocareclub@gmail.com</h3>
            </div>
          </div>
        </div>
        <div className="hill-container absolute top-0 w-full h-16 overflow-hidden">
          <div className="hill bg-slate-950 rounded-b-full"></div>
          <div className="circle">
            <div className="string"></div>
          </div>
        </div>
      </div>
      {showScrollButton && (
        <button
          className="fixed bottom-1 right-2 bg-white hover:bg-slate-950 hover:text-white text-red p-2 rounded-full transition duration-300"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" />
        </button>
      )}
      <div className='text-center italic p-6 bg-gradient-to-r from-black to bg-slate-700 text-white border-t-2 border-gray-950'>
        <span>
          <FontAwesomeIcon icon={faCopyright} /> 2024 Bursary Management System. Developed By Engineer Michael Morara. All Rights Reserved
        </span>
      </div>
    </div>
  );
}

export default Footer;
