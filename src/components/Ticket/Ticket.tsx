import { useState } from 'react';
import { RoundTicket, SingleTicket } from '../../types/tickets';
import formatPrice from '../../utils/formatPrice';
import Flight from '../Flight/Flight';
import Tabs from '../Tabs/Tabs';
import './Ticket.css';

function Ticket({ ticket }: { ticket: SingleTicket | RoundTicket }) {
  const type = ticket.type;

  const [price] = useState(getTicketPrice());
  const [currentFlight, setCurrentFlight] = useState(ticket.flights[0]);

  function switchTabs(id: number) {
    const selectedFlight = ticket.flights.find((flight) => flight.id === id);
    setCurrentFlight(selectedFlight ?? currentFlight);
  }

  function getTicketPrice() {
    if (type === 'single') {
      return ticket.flights[0].price;
    } else {
      return ticket.flights.reduce((sum, flight) => sum + flight.price, 0);
    }
  }

  return (
    <li className="ticket">
      <ul className="ticket__flights">
        {type === 'single' ? (
          <Flight flight={currentFlight}>
            {ticket.flights.length > 1 && (
              <Tabs
                flights={ticket.flights}
                current={currentFlight}
                onClick={switchTabs}
              />
            )}
          </Flight>
        ) : (
          ticket.flights.map((flight) => {
            return <Flight key={flight.id} flight={flight} />;
          })
        )}
      </ul>
      <p className="ticket__price">{formatPrice(price)}</p>
    </li>
  );
}

export default Ticket;
