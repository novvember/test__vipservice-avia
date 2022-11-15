import './Flight.css';
import { Flight as FlightType } from '../../types/tickets';
import logo from '../../images/logo_s7.png';
import luggageActiveIcon from '../../images/icon__luggage_active.svg';
import cabinLuggageActiveIcon from '../../images/icon__cabin-luggage_active.svg';
import luggageIcon from '../../images/icon__luggage.svg';
import cabinLuggageIcon from '../../images/icon__cabin-luggage.svg';
import formatTime from '../../utils/formatTime';
import formatDate from '../../utils/formatDate';
import formatDuration from '../../utils/formatDuration';

function Flight({ flight }: { flight: FlightType }) {
  return (
    <li className="flight">
      {!flight.refundable && (
        <span className="flight__special">Невозвратный</span>
      )}

      <div className="flight__carrier">
        <img
          className="flight__carrier-logo"
          src={logo}
          alt="Логотип авиакомпании"
        />
        <p className="flight__carrier-title">{flight.carrier}</p>
      </div>

      <div className="flight__info">
        <div className="flight__way">
          <div className="flight__station flight__station_type_A">
            <span className="flight__time">
              {formatTime(flight.fromPoint.time)}
            </span>
            <span className="flight__city">{flight.fromPoint.city}</span>
            <span className="flight__date">
              {formatDate(flight.fromPoint.time)}
            </span>
          </div>
          <div className="flight__track">
            <span className="flight__code">{flight.fromPoint.code}</span>
            <span className="flight__duration">
              {formatDuration(flight.fromPoint.time, flight.toPoint.time)}
            </span>
            <span className="flight__code">{flight.toPoint.code}</span>
          </div>
          <div className="flight__station flight__station_type_B">
            <span className="flight__time">
              {formatTime(flight.toPoint.time)}
            </span>
            <span className="flight__city">{flight.toPoint.city}</span>
            <span className="flight__date">
              {formatDate(flight.toPoint.time)}
            </span>
          </div>{' '}
        </div>
        <div className="flight__tabs">Tabs will be here</div>
      </div>

      <div className="flight__luggage">
        <img
          src={flight.cabbinLuggage ? cabinLuggageActiveIcon : cabinLuggageIcon}
          alt="Ручная кладь"
          title={
            flight.cabbinLuggage
              ? 'Ручная кладь входит в стоимость'
              : 'Ручная кладь оплачивается отдельно'
          }
          className="flight__luggage-icon"
        />
        <img
          src={flight.luggage ? luggageActiveIcon : luggageIcon}
          alt="Багаж"
          title={
            flight.luggage
              ? 'Багаж входит в стоимость'
              : 'Багаж оплачивается отдельно'
          }
          className="flight__luggage-icon"
        />
      </div>
    </li>
  );
}

export default Flight;
