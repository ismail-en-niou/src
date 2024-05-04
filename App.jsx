import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/1-loging/Login';
import Home1 from './pages/2-home-root/Home1';
import Home2 from './pages/3-hoome-user/Home2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/root" element={<Login userType="root" />} />
        <Route path="/root/home" element={<Home1 />} />
        <Route path="/" element={<Login userType="user" />} />
        <Route path="/user/home" element={<Home2 />} />
      </Routes>
    </Router>
  );
}

export default App;
