import React from 'react';
import AviaPage from '../AviaPage/AviaPage';
import Footer from '../Footer/Footer';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate to="/avia" />} />
        <Route path="/avia" element={<AviaPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
