import logo_burger from "../logos/logo_burger.png";
import "./burgerMenuSmart.css";

function BurgerMenuSmart() {
  return (
    <div className="BurgerMenuSmart">
      <ul className="list-big">
        <li className="titre">
          <img src={logo_burger} alt="" className="logo_burger" />
          <ul>
            <li className="second-big">
              <h6>Accueil</h6>
            </li>
            <li className="second-big">
              <h6>Qui sommes-nous?</h6>
            </li>
            <li className="second-big">
              <h6>Voirie</h6>
            </li>
            <li className="second-big">
              <h6>Bâtiment</h6>
            </li>
            <li className="second-big">
              <h6>Ouvrages spéciaux</h6>
            </li>
            <li className="second-big">
              <h6>Matériaux</h6>
            </li>
            <li className="second-big">
              <h6>Nous contacter</h6>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default BurgerMenuSmart;
