import { useState } from 'react';
import AviaPage from '../AviaPage/AviaPage';
import Footer from '../Footer/Footer';
import './App.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import FormValues from '../../types/FormValues';
import Form from '../Form/Form';
import mockApi from '../../utils/mockApi';
import { RoundTicket, SingleTicket } from '../../types/tickets';
import Tickets from '../Tickets/Tickets';

function App() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([] as SingleTicket[] | RoundTicket[]);

  async function handleSearch(values: FormValues) {
    const tickets = await mockApi.search(values);
    setTickets(tickets);
    navigate('/avia/info');
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
        <Route
          path="/avia/info"
          element={
            tickets.length > 0 ? (
              <Tickets tickets={tickets} />
            ) : (
              <Navigate to="/avia" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
