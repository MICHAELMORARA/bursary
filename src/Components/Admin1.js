import React from 'react';
import { useNavigate } from 'react-router-dom';
import image4 from './Images/image4.png';
import image1 from './Images/image1.png';

const Admin1 = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/admin2');
  };

  return (
    <div className="relative mt-10 h-screen w-screen">
      <img src={image4} className="w-screen h-screen object-cover absolute" alt="Background" />
      <div className="flex md:m-0 m-8 flex-col items-center justify-center h-full">
        <div className="bg-slate-200 p-10 rounded-lg shadow-lg relative w-full max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <img src={image1} alt="Logo" className="h-10 mr-2" />
            <span className="text-black font-bold text-lg">SOUTH MUGIRANGO NG-CDF BURSARY MANAGEMENT SYSTEM</span>
          </div>
          <h4 className="text-center text-2xl text-white mt-2 mb-8">Tertiary Institutions Bursary</h4>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <button
              type="button"
              onClick={handleLoginClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin1;
