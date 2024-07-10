import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';
import image4 from './Images/image4.png';

const StudentLogin = () => {
  const [nationalId, setNationalId] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/students/${nationalId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data); // Log the response data
      if (data) {
        setUser({ name: data.fullName, id: nationalId });
        navigate(`/student-details/${nationalId}`);
      }
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <img src={image4} className="w-screen mr-4 h-screen" alt="Background" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center bg-blue-900 text-white p-2 rounded-t-lg">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nationalId" className="block text-gray-700 text-sm font-bold mb-2">National ID:</label>
            <input
              id="nationalId"
              type="text"
              value={nationalId}
              required
              onChange={(e) => setNationalId(e.target.value)}
              placeholder="National ID"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white p-2 rounded-md hover:bg-green-800 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
