import React from 'react';
import AviaPage from '../AviaPage/AviaPage';
import Footer from '../Footer/Footer';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import FormValues from '../../types/FormValues';
import Form from '../Form/Form';
import mockApi from '../../utils/mockApi';

function App() {
  async function handleSearch(values: FormValues) {
    const tickets = await mockApi.search(values);
    console.log(tickets);
  }

  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Navigate to="/avia" />} />
        <Route
          path="/avia"
          element={
            <AviaPage>
              <Form onSubmit={handleSearch} />
            </AviaPage>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
