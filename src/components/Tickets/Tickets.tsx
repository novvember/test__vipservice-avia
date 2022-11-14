import {
  RoundTicket,
  SingleTicket as SingleTicketType,
} from '../../types/tickets';
import Ticket from '../Ticket/Ticket';
import './Tickets.css';

function Tickets({ tickets }: { tickets: SingleTicketType[] | RoundTicket[] }) {
  return (
    <ul className="tickets">
      {tickets.map((ticket) => {
        return <Ticket ticket={ticket} key={ticket.id} />;
      })}
    </ul>
  );
}

export default Tickets;
