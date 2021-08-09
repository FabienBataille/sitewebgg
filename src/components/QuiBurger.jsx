import './quiburger.css';
import { Link } from 'react-router-dom';

function QuiBurger() {
  return (
    <div className='QuiBurger'>
      <ul className='list'>
        <li className='titre'>
          Qui sommes-nous?
          <ul>
            <li className="second">
              <Link style={{ textDecoration: 'none'}} to='/histoire'>
                <h6>Historique</h6>
              </Link>
            </li>
            <li className="second">
              <Link style={{ textDecoration: 'none'}} to='/extraction'>
                <h6>L'exctraction</h6>
              </Link>
            </li>
            <li className="second">
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

export default QuiBurger;
