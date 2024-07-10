import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import image4 from "./Images/image4.png";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (event) => {
    event.preventDefault();
    // Handle forgot password logic here
    // For now, just navigate back to the admin login page
    navigate('/admin-login');
  };

  return (
    <div className="relative h-screen w-screen">
      <img src={image4} className="w-screen mr-4 h-screen" alt="Background" />
      
      <div className="absolute top-1/2 mt-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl bg-blue-800 p-2 rounded-lg font-bold mb-4">Admin Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
