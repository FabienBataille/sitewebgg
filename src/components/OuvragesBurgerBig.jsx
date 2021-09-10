import './ouvragesBurgerBig.css';
import { Link } from 'react-router-dom';

function OuvragesBurgerBig() {
  return (
    <div className="OuvragesBurgerBig">
      <ul className="list4-big">
        <li className="titre">Ouvrages spéciaux
          <ul>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/artistique'>
              <h6>Artistique</h6>
            </Link>
            </li>
            <li className="second">
            <Link style={{ textDecoration: 'none'}} to='/decorations'>
              <h6>Décorations</h6>
            </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default OuvragesBurgerBig;