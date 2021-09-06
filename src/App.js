import "./App.css";
import Header from "./components/Header";
import HeaderFuneraire from "./components/HeaderFuneraire";
import AccueilFuneraire from "./components/AccueilFuneraire"
import Home from "./components/Home";
import Footer from "./components/Footer";
import Histoire from "./components/Histoire";
import Extraction from "./components/Extraction";
import Fabrication from "./components/Fabrication";
import Dalles from "./components/Dalles";
import Bornes from "./components/Bornes";
import Bordures from "./components/Bordures";
import Paves from "./components/Paves";
import Escaliers from "./components/Escaliers";
import RevetementSol from "./components/RevetementSol";
import RevetementV from "./components/RevetementV";
import PresentationBatiment from "./components/PresentationBatiment";
import MobiliersBancs from "./components/MobiliersBancs";
import MobiliersMurets from "./components/MobiliersMurets";
import MobiliersFontaines from "./components/MobiliersFontaines";
import PresentationVoirie from "./components/PresentationVoirie";
import Artistique from "./components/Artistique";
import Decorations from "./components/Decorations";
import Origines from "./components/Origines";
import Voirie from "./components/Voirie";
import AccueilPrincipal from "./components/AccueilPrincipal";
import Batiment from "./components/Batiment";
import Contact from "./components/Contact";
import PresentationEntreprise from "./components/PresentationEntreprise";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/accueil-funeraire">
              <HeaderFuneraire />
              <AccueilFuneraire />
            </Route>
            <Route exact path="/histoire">
              <Header />
              <Histoire />
              <Footer />
            </Route>
            <Route exact path="/presentation-entreprise">
              <Header />
              <PresentationEntreprise />
              <Footer />
            </Route>
            <Route exact path="/extraction">
              <Header />
              <Extraction />
              <Footer />
            </Route>
            <Route exact path="/fabrication">
              <Header />
              <Fabrication />
              <Footer />
            </Route>
            <Route exact path="/presentation-voirie">
              <Header />
              <PresentationVoirie />
              <Footer />
            </Route>
            <Route exact path="/dalles">
              <Header />
              <Dalles />
              <Footer />
            </Route>
            <Route exact path="/bornes">
              <Header />
              <Bornes />
              <Footer />
            </Route>
            <Route exact path="/bordures">
              <Header />
              <Bordures />
              <Footer />
            </Route>
            <Route exact path="/paves">
              <Header />
              <Paves />
              <Footer />
            </Route>
            <Route exact path="/presentation-batiment">
              <Header />
              <PresentationBatiment />
              <Footer />
            </Route>
            <Route exact path="/escaliers">
              <Header />
              <Escaliers />
              <Footer />
            </Route>
            <Route exact path="/revetement-de-sol">
              <Header />
              <RevetementSol />
              <Footer />
            </Route>
            <Route exact path="/revetements-verticaux">
              <Header />
              <RevetementV />
              <Footer />
            </Route>
            <Route exact path="/mobiliers-bancs">
              <Header />
              <MobiliersBancs />
              <Footer />
            </Route>
            <Route exact path="/mobiliers-murets">
              <Header />
              <MobiliersMurets />
              <Footer />
            </Route>
            <Route exact path="/mobiliers-fontaines">
              <Header />
              <MobiliersFontaines />
              <Footer />
            </Route>
            <Route exact path="/artistique">
              <Header />
              <Artistique />
              <Footer />
            </Route>
            <Route exact path="/decorations">
              <Header />
              <Decorations />
              <Footer />
            </Route>
            <Route exact path="/origines">
              <Header />
              <Origines />
              <Footer />
            </Route>
            <Route exact path="/granit-voirie">
              <Header />
              <Voirie />
              <Footer />
            </Route>
            <Route exact path="/granit-batiment">
              <Header />
              <Batiment />
              <Footer />
            </Route>
            <Route exact path="/contact">
              <Header />
              <Contact />
              <Footer />
            </Route>
            <Route exact path="/accueil">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/">
              <AccueilPrincipal />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
