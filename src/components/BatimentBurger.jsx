import './batimentburger.css';
import { Link } from 'react-router-dom';

function BatimentBurger() {
  return (
    <div className='BatimentBurger'>
      <ul className='list3'>
        <li className='titre'>
          Bâtiment
          <ul>
            <li className='second'>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to='/presentation-batiment'
              >
                <h6 className='first'>Présentation</h6>
              </Link>
            </li>
            <li className='second'>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to='/escaliers'
              >
                <h6>Les escaliers</h6>
              </Link>
            </li>
            <li className='second'>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to='/revetement-de-sol'
              >
                <h6>Revêtement de sol</h6>
              </Link>
            </li>
            <li className='second'>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to='/revetements-verticaux'
              >
                <h6>Revêtements verticaux</h6>
              </Link>
            </li>
            <li className='second'>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to='/mobiliers-urbains'
              >
                <h6>Mobiliers urbains</h6>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default BatimentBurger;
