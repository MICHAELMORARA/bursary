import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import image1 from "./Images/image1.png";
import "../App.css";
import Logout from './Logout';

const StudentDetails = () => {
  const { nationalId } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/students/${nationalId}`);
        const data = await response.json();
        setStudent(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudent();
  }, [nationalId]);

  if (!student) return <div>Loading...</div>;

  return (
    <div className="bg-slate-700 p-4 sm:p-8">
      <div className="text-start bg-slate-50 text-black font-bold mb-4">
        Welcome {student.fullName || "Student Name"} ... || <Logout /> || <Link to="/change-password" className="text-blue-600">Change Password</Link>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center bg-slate-50 mb-4">
        <img src={image1} alt="Logo" className="h-32 w-32 mb-4 sm:mb-0"/>
        <div className="text-center md:mt-12 bg-slate-700 p-4 sm:p-8 text-white rounded-lg animate-swing font-bold text-xl sm:text-3xl my-4 w-full sm:w-auto">
          <div className='text-start '>
            <h1 className='text-2xl'>SOUTH MUGIRANGO</h1>
            <h1 className='sm:ml-40 text-3xl'>NG-CDF BURSARY</h1> 
            <h1 className='sm:ml-40 text-3xl ml-12'>STUDENT PORTAL</h1>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-50 mb-4 text-center font-bold p-2">Bursary application for financial year 2024_2025</div>
      <div className="bg-slate-700 text-white p-6 sm:p-12 bg-opacity-100 mb-8 text-start rounded-lg mx-auto max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">Applicant:</div>
          <div>{student.fullName || ""}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">Serial No:</div>
          <div>{student.serialNo || ""}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">Date of application:</div>
          <div>{new Date(student.applicationDate).toLocaleDateString() || ""}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">Institution:</div>
          <div>{student.institution || ""}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">Verified:</div>
          <div>{student.verified ? "YES" : "NO"}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">Awarded:</div>
          <div>{student.awarded ? "YES" : "NO"}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">Amount Awarded:</div>
          <div>{student.amountAwarded || "-"}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">Chequeno:</div>
          <div>{student.chequeNo || "-"}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="font-bold">MP's Desk:</div>
          <div>{student.mpDesk || "-"}</div>
        </div>
      </div>
      <div className="bg-slate-50 text-center font-bold p-2">Bursary application for financial year 2024_2025</div>
      <button className="text-center p-2 bg-slate-400 hover:bg-green-700 rounded-lg mb-4">
        <Link to="/student-register" className="text-white ">Edit My 2024_2025 application</Link>
      </button>
    </div>
  );
}

export default StudentDetails;
