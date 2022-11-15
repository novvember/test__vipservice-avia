import { ChangeEvent } from 'react';
import { Flight } from '../../types/tickets';
import formatTime from '../../utils/formatTime';
import './Tabs.css';

function Tabs({
  flights,
  current,
  onClick,
}: {
  flights: Flight[];
  current: Flight;
  onClick: (id: number) => void;
}) {
  function handleClick(event: ChangeEvent<HTMLInputElement>) {
    const id = +event.target.value;
    onClick(id);
  }

  return (
    <ul className="flight__tabs tabs">
      {flights.map((flight) => {
        return (
          <li key={flight.id}>
            <label className="tabs__radio-container">
              <input
                type="radio"
                className="tabs__radio-input"
                value={flight.id}
                name="flight"
                checked={flight === current}
                onChange={handleClick}
              />
              <span className="tabs__radio-label">
                <span className="tabs__depart-time">
                  {formatTime(flight.fromPoint.time)}
                </span>
                {`–${formatTime(flight.toPoint.time)}`}
              </span>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default Tabs;
