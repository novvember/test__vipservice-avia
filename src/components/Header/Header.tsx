import './Header.css';
import logo from '../../images/logo.svg';
import { useState } from 'react';
import classNames from 'classnames';

function Header() {
  const [fly, setFly] = useState(false);

  function handleClick() {
    setFly(true);
    setTimeout(() => setFly(false), 4000);
  }

  return (
    <header className="header">
      <img
        src={logo}
        alt="Маленький самолетик"
        className={classNames('header__logo', { header__logo_fly: fly })}
        title="Нажми"
        width="24"
        height="24"
        onClick={handleClick}
      />
    </header>
  );
}

export default Header;
