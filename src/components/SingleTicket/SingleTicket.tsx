import { SingleTicket as SingleTicketType } from '../../types/tickets';
import './SingleTicket.css';
import logo from '../../images/logo_s7.png';
import formatPrice from '../../utils/formatPrice';
import luggageIcon from '../../images/icon__luggage_active.svg';
import cabinLuggageIcon from '../../images/icon__cabin-luggage_active.svg';

function SingleTicket({ ticket }: { ticket: SingleTicketType }) {
  return (
    <li className="ticket">
      <div className="ticket__ticket">
        <div className="ticket__airline">
          <img
            className="ticket__airline-logo"
            src={logo}
            alt="Логотоип авиакомпании"
          />
          <p className="ticket__airline-title">{ticket.tickets[0].carrier}</p>
        </div>

        <div className="ticket__info">
          <div className="ticket__track">
            <div className="ticket__point">
              <span className="ticket__time">9:20</span>
              <span className="ticket__city">Москва</span>
              <span className="ticket__date">14.11.2022</span>
            </div>
            <div className="ticket__way">
              <span className="ticket__code">SVO</span>
              <span className="ticket__duration">В пути 1 ч 55 мин</span>
              <span className="ticket__code">SVO</span>
            </div>
            <div className="ticket__point">
              <span className="ticket__time">9:20</span>
              <span className="ticket__city">Москва</span>
              <span className="ticket__date">14.11.2022</span>
            </div>{' '}
          </div>
          <div className="ticket__switch">1 2 3</div>
        </div>
        <div className="ticket__luggage">
          <img
            src={cabinLuggageIcon}
            alt="Ручная кладь"
            className="ticket__luggage-icon"
          />
          <img src={luggageIcon} alt="Багаж" className="ticket__luggage-icon" />
        </div>
      </div>

      <div className="ticket__price">
        {formatPrice(ticket.tickets[0].price)}
      </div>
    </li>
  );
}

export default SingleTicket;