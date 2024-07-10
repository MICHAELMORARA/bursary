import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import image4 from './Images/image4.png';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    navigate('/admin1'); // Navigate to Admin1 page upon successful login
  };

  const handleForgotPassword = () => {
    navigate('/admin-forgot-password'); // Navigate to AdminForgotPassword page
  };

  return (
    <div className="relative  h-screen w-screen">
      <img src={image4} className="w-screen mr-4 mt-10 h-screen" alt="Background" />
      <div className="absolute  mt-96 login-box top-1/2 md:mt-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-6 rounded-lg shadow-lg">
        <div className=" p-6">
          <h4>Login</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-groupAdmin md:-mt-2 mt-16 labelAdmin">
              <label htmlFor="username">UserName</label>
              <input type="text" id="username" name="username" placeholder="UserName" />
            </div>
            <div className="form-groupAdmin mt-6 md:mt-0">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password" />
            </div>
            <div className="form-buttons ">
              <button type="submit" className='mt-4 md:mt-0'>Login</button>
              <button type="button" className="forgot-password mt-4 md:mt-0" onClick={handleForgotPassword}>
                Forgot Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
