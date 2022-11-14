import {
  RoundTicket,
  SingleTicket as SingleTicketType,
} from '../../types/tickets';
import SingleTicket from '../SingleTicket/SingleTicket';
import './Tickets.css';

function Tickets({ tickets }: { tickets: SingleTicketType[] | RoundTicket[] }) {
  const ticketType = tickets[0].type;

  return (
    <ul className="tickets">
      {ticketType === 'single' ? <SingleTicket ticket={tickets[0]} /> : 'none'}
    </ul>
  );
}

export default Tickets;
