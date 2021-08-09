import './materiauxburger.css';
import { Link } from 'react-router-dom';

function MateriauxBurger() {
  return (
    <div className="OuvragesBurger">
      <ul className="list5">
        <li className="titre">Matériaux
          <ul>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/origines'>
              <h6>Origines</h6>
            </Link>
            </li>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/granit-voirie'>
              <h6>Granits voirie</h6>
            </Link>
            </li>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/granit-batiment'>
              <h6>Granits bâtiment</h6>
            </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MateriauxBurger;