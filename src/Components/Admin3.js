import React, { useState, useRef } from 'react';
import image4 from './Images/image4.png';
import image1 from './Images/image1.png';

const Admin3 = () => {
  const [studentId, setStudentId] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [verificationMessage, setVerificationMessage] = useState('');
  const tableRef = useRef(null);

  const fetchStudentData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/students/${studentId}`);
      const data = await response.json();
      if (response.ok) {
        setStudentData(data);
        if (tableRef.current) {
          tableRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        setError('Student not found');
        setStudentData(null);
      }
    } catch (error) {
      setError('Error fetching student data');
      setStudentData(null);
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setStudentId(e.target.value);
    if (e.target.value === '') {
      setStudentData(null);
      setError(null);
      setVerificationMessage('');
    }
  };

  const handleVerifyClick = () => {
    setVerificationMessage(
      `Congratulations ${studentData.name}! Your bursary application has been verified and accepted.`
    );
    // Here you can call a function to send an SMS using a bulk SMS service.
  };

  return (
    <div className="bg-cover mt-16 bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${image4})` }}>
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center py-2 bg-slate-400 rounded-t-lg">
          <div className="flex items-center">
            <img src={image1} alt="Logo" className="h-10 mr-2" />
            <span className="font-bold text-lg">SOUTH MUGIRANGO NG-CDF BURSARY MANAGEMENT SYSTEM</span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-6">
          {loading && <div>Loading...</div>}
          {error && <div className="text-red-500">{error}</div>}
          
          <h2 className="text-xl font-bold mb-2">Verification of Bursary applicants</h2>
          <div className="flex flex-col md:flex-row items-center mb-2">
            <input
              type="text"
              placeholder="Enter ID number"
              value={studentId}
              onChange={handleInputChange}
              className="p-1 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
            />
            <button
              onClick={fetchStudentData}
              className="bg-green-500 w-full md:w-60 -mt-1 p-2 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Search Student
            </button>
          </div>

          {studentData && (
            <div ref={tableRef} className="bg-gray-100 rounded-lg p-2 w-full mt-2 overflow-x-auto" id="tableSection">
              <h2 className="text-xl font-bold mb-2">Tertiary Students Verification</h2>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="px-2 py-1">S.No</th>
                      <th className="px-2 py-1">Name</th>
                      <th className="px-2 py-1">Institution</th>
                      <th className="px-2 py-1">Admission</th>
                      <th className="px-2 py-1">Status</th>
                      <th className="px-2 py-1">Verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-2 py-1">1</td>
                      <td className="border px-2 py-1">{studentData.fullName}</td>
                      <td className="border px-2 py-1">{studentData.institution}</td>
                      <td className="border px-2 py-1">{studentData.admission}</td>
                      <td className="border px-2 py-1">{studentData.verified ? 'Verified' : 'Not Verified'}</td>
                      <td className="border px-2 py-1">
                        <button
                          className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 transition duration-300"
                          onClick={handleVerifyClick}
                        >
                          Accept Bursary Application
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {verificationMessage && (
            <div className="bg-green-100 text-green-700 p-2 rounded-md mt-2">
              {verificationMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin3;
