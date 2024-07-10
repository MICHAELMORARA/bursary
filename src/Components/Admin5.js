import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image4 from './Images/image4.png';
import image1 from './Images/image1.png';

const Admin5 = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleUpdateAllocation = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/students/allocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Allocation updated successfully!');
      } else {
        alert(`Failed to update allocation: ${data.message}`);
      }
    } catch (error) {
      console.error('Error updating allocation:', error);
    }
  };

  return (
    <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${image4})` }}>
      <div className="flex justify-between items-center py-2 bg-slate-400 rounded-t-lg px-4">
        <div className="flex items-center">
          <img src={image1} alt="Logo" className="h-10 mr-2" />
          <span className="font-bold text-lg">SOUTH MUGIRANGO NG-CDF BURSARY MANAGEMENT SYSTEM</span>
        </div>
        <div className="flex space-x-2">
          <Link to="#" className="text-blue-500">Logout</Link>
          <span>||</span>
          <Link to="#" className="text-blue-500">Admin Page</Link>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h2 className="text-center text-xl font-bold mb-4">Update Allocation per Student</h2>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Enter Amount Per Student:</label>
            <input
              type="text"
              id="amount"
              placeholder="Enter amount per student"
              value={amount}
              onChange={handleAmountChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            />
          </div>
          <div className="text-center">
            <button
              onClick={handleUpdateAllocation}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Update Allocation per Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin5;
