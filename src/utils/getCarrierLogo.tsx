import s7 from '../images/carrier__s7.png';
import aeroflot from '../images/carrier__aeroflot.png';
import utair from '../images/carrier__utair.png';
import defaultLogo from '../images/carrier__default.svg';

export default function getCarrierLogo(carrier: string) {
  switch (carrier) {
    case 'Aeroflot':
      return aeroflot;
    case 'S7 Airlines':
      return s7;
    case 'UTair':
      return utair;
    default:
      return defaultLogo;
  }
}
