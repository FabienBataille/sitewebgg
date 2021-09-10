import React from "react";
import "./App.css";
import Header from "./components/Header";
import BigHeader from "./components/BigHeader";
import HeaderFuneraire from "./components/HeaderFuneraire";
import AccueilFuneraire from "./components/AccueilFuneraire";
import Home from "./components/Home";
import Footer from "./components/Footer";
import FooterFuneraire from "./components/FooterFuneraire";
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

const { useState, useEffect } = React;

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [isVisible2, setIsVisible2] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 70;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < heightToHideFrom) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (winScroll > heightToHideFrom) {
      isVisible2 && setIsVisible2(true);
    } else {
      setIsVisible2(false);
    }
  };
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/accueil-funeraire">
              <HeaderFuneraire />
              <AccueilFuneraire />
              <FooterFuneraire />
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
              {isVisible2 && <Header />}
              {isVisible && <BigHeader />}
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
