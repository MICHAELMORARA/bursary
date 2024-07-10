import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image4 from "./Images/image4.png"
const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = (event) => {
    event.preventDefault();
    // Handle password change logic here
    // For now, just navigate back to the student details page
    navigate('/student-details');
  };

  return (
 <div className="relative h-screen w-screen">
    <img src={image4} className="w-screen mr-4 h-screen " alt="Background" />

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label htmlFor="currentPassword" className="block text-gray-700">Current Password:</label>
          <input
            id="currentPassword"
            type="password"
            value={currentPassword}
            required
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700">New Password:</label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            required
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Change Password
        </button>
      </form>
    </div>
    </div>
  );
};

export default ChangePassword;
