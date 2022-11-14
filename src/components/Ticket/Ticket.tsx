import { RoundTicket, SingleTicket } from '../../types/tickets';
import formatPrice from '../../utils/formatPrice';
import TicketInfo from '../TicketInfo/TicketInfo';
import './Ticket.css';

function Ticket({ ticket }: { ticket: SingleTicket | RoundTicket }) {
  return (
    <li className="ticket">
      <div className="ticket__info-container">
        <TicketInfo />
      </div>
      <div className="ticket__price">{formatPrice(4000)}</div>
    </li>
  );
}

export default Ticket;
