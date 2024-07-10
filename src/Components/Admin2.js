// src/Components/Admin2.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import image1 from './Images/image1.png';
import { useUser } from '../UserContext';  // Ensure this import is correct

const Admin2 = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const handleAcceptBursaryClick = () => {
    navigate('/admin3');
  };

  const handleAllocateBursaryClick = () => {
    navigate('/admin4');
  };

  return (
    <div className="w-auto rounded-lg bg-slate-600 m-8 mt-36">
      <div className="space-x-4 ml-16 mr-16 text-gray-200 bg-slate-400">
        <span>{user ? user.name : 'Guest'}</span>
        <span>||</span>
        <Link to="/logout" className="hover:underline">Logout</Link>
        <span>||</span>
        <Link to="/change-password" className="hover:underline">Change Password</Link>
        <span>||</span>
        <Link to="/admin1" className="hover:underline">Admin Page</Link>
        <span>||</span>
        <Link to="/" className="hover:underline">Home</Link>
      </div>
      <div className="container mx-auto p-4 -mt-4">
        <div className="flex justify-center mt-4">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <img src={image1} alt="NG CDF Logo" className="h-16 mr-2" />
              <h1 className="text-2xl text-white font-bold">SOUTH MUGIRANGO NG-CDF BURSARY MANAGEMENT SYSTEM</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-8">
          <button
            className="w-1/2 bg-green-500 text-white py-2 px-4 rounded-lg mb-4 shadow-lg"
            onClick={handleAcceptBursaryClick}
          >
            Accept Bursary Application
          </button>
          <button
            className="w-1/2 bg-pink-300 text-white py-2 px-4 rounded-lg shadow-lg"
            onClick={handleAllocateBursaryClick}
          >
            Allocate Bursary Per Student
          </button>
        </div>
        <footer className="mt-8 md:visible invisible w-full bg-black text-white text-center py-2">
          <div>SOUTH MUGIRANGO || P. O BOX || 0725912723 || ngcdfmugirango@ngcdf.go.ke || www.ngcdf.go.ke</div>
          <div>Courtesy of Hon. Onyiso, Silvanus Osoro</div>
        </footer>
      </div>
    </div>
  );
};

export default Admin2;
