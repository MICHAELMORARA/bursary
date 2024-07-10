import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored user data (e.g., authentication token)
    localStorage.removeItem('userToken'); // Adjust according to your storage strategy

    // Redirect to the login page
    navigate('/student-login');
  };

  return (
    <button onClick={handleLogout} className="text-blue-600">Logout</button>
  );
};

export default Logout;
