import './quiBurgerBig.css';
import { Link } from 'react-router-dom';

function QuiBurgerBig() {
  return (
    <div className='QuiBurgerBig'>
      <ul className='list-big'>
        <li className='titre'>
          Qui sommes-nous?
          <ul>
            <li className="second-big">
              <Link style={{ textDecoration: 'none'}} to='/histoire'>
                <h6 >Historique</h6>
              </Link>
            </li>
            <li className="second-big">
              <Link style={{ textDecoration: 'none'}} to='/presentation-entreprise'>
                <h6>Présentation</h6>
              </Link>
            </li>
            <li className="second-big">
              <Link style={{ textDecoration: 'none'}} to='/extraction'>
                <h6>L'exctraction</h6>
              </Link>
            </li>
            <li className="second-big">
              <Link style={{ textDecoration: 'none'}} to='/fabrication'>
                <h6>La fabrication</h6>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default QuiBurgerBig
