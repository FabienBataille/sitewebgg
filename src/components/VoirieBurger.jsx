import './voirieburger.css';
import { Link } from 'react-router-dom';

function VoirieBurger() {
  return (
    <div className="VoirieBurger">
      <ul className="list2">
        <li className="titre">Voirie
          <ul>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/presentation-voirie'>
              <h6>Présentation</h6>
            </Link>
            </li>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/dalles'>
              <h6>Les dalles</h6>
            </Link>
            </li>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/bornes'>
              <h6>Les bornes</h6>
            </Link>
            </li>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/bordures'>
              <h6>Les bordures</h6>
            </Link>
            </li>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/paves'>
              <h6>Les pavés</h6>
            </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default VoirieBurger;