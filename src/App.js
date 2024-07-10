// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Components/Home';
import StudentLogin from './Components/Student-Login';
import StudentDetails from './Components/StudentDetails';
import Register from './Components/Register';
import ChangePassword from './Components/ChangePassword';
import AdminLogin from './Components/Admin-Login';
import Admin1 from './Components/Admin1';
import Admin2 from './Components/Admin2';
import Admin3 from './Components/Admin3';
import Admin4 from './Components/Admin4';
import Admin5 from './Components/Admin5';
import { UserProvider } from './UserContext';  // Ensure this import is correct

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/student-login" element={<StudentLogin />} />
              <Route path="/student-details/:nationalId" element={<StudentDetails />} />
              <Route path="/student-register" element={<Register />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin1" element={<Admin1 />} />
              <Route path="/admin2" element={<Admin2 />} />
              <Route path="/admin3" element={<Admin3 />} />
              <Route path="/admin4" element={<Admin4 />} />
              <Route path="/admin5" element={<Admin5 />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
