// Main.js parent
import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import App from '../App';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';



const Main = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (isAuthenticated) => {
    setLoggedIn(isAuthenticated);
  };

  return (
    <div>
      <Header />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<App />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
