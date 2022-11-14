import { RoundTicket, SingleTicket } from '../../types/tickets';
import formatPrice from '../../utils/formatPrice';
import Flight from '../Flight/Flight';
import './Ticket.css';

function Ticket({ ticket }: { ticket: SingleTicket | RoundTicket }) {
  return (
    <li className="ticket">
      <ul className="ticket__flights">
        {ticket.flights.map((flight) => {
          return <Flight key={flight.id} flight={flight} />;
        })}
      </ul>
      <p className="ticket__price">{formatPrice(4000)}</p>
    </li>
  );
}

export default Ticket;
