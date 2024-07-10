import React from 'react';
import { Link } from 'react-router-dom';
import image4 from './Images/image4.png';
import '../App.css';

const Admin4 = () => {
  return (
    <div className="h-screen relative w-full">
      <img src={image4} className="w-full mt-10 h-screen" alt="Background" />
      <div className="absolute flex-col top-1/2 mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-6 rounded-lg shadow-lg">
        <Link to="/admin5" className="admin-link btn">Allocate Equal Amounts</Link>
      </div>
    </div>
  );
};

export default Admin4;
