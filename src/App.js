import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import History from './components/History'
import Extraction from './components/Extraction'
import Fabrication from './components/Fabrication'
import Dalles from './components/Dalles'
import Bornes from './components/Bornes'
import Bordures from './components/Bordures'
import Paves from './components/Paves'
import Escaliers from './components/Escaliers'
import Revetement from './components/Revetement'
import RevetementV from './components/RevetementV'
import PresentationBatiment from './components/PresentationBatiment'
import Mobiliers from './components/Mobiliers'
import PresentationVoirie from './components/PresentationVoirie'
import Artistique from './components/Artistique'
import Decorations from './components/Decorations'
import Origines from './components/Origines'
import Voirie from './components/Voirie'
import Batiment from './components/Batiment'
import Contact from './components/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/histoire">
              <History />
            </Route>
            <Route exact path="/extraction">
              <Extraction />
            </Route>
            <Route exact path="/fabrication">
              <Fabrication />
            </Route>
            <Route exact path="/presentation-voirie">
              <PresentationVoirie />
            </Route>
            <Route exact path="/dalles">
              <Dalles />
            </Route>
            <Route exact path="/bornes">
              <Bornes />
            </Route>
            <Route exact path="/bordures">
              <Bordures />
            </Route>
            <Route exact path="/paves">
              <Paves />
            </Route>
            <Route exact path="/presentation-batiment">
              <PresentationBatiment />
            </Route>
            <Route exact path="/escaliers">
              <Escaliers />
            </Route>
            <Route exact path="/revetement-de-sol">
              <Revetement />
            </Route>
            <Route exact path="/revetements-verticaux">
              <RevetementV />
            </Route>
            <Route exact path="/mobiliers-urbains">
              <Mobiliers />
            </Route>
            <Route exact path="/artistique">
              <Artistique />
            </Route>
            <Route exact path="/decorations">
              <Decorations />
            </Route>
            <Route exact path="/origines">
              <Origines />
            </Route>
            <Route exact path="/granit-voirie">
              <Voirie />
            </Route>
            <Route exact path="/granit-batiment">
              <Batiment />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/accueil">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
