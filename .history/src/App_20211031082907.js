import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        {isMobile ? (
          <>
          <Route exact path="/services">
              <Services />
            </Route>
          <Route exact path="/team">
              <OurTeam />
            </Route>
            <Route exact path="/disclaimer">
              <Disclaimer />
            </Route>
            <Route exact path="/location">
              <Location />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        ) : (
          <>
           <Route exact path="/services">
              <ServicesDesktop />
            </Route>
           <Route exact path="/team">
              <OurTeamDesktop />
            </Route>
            <Route exact path="/disclaimer">
              <DisclaimerDesktop />
            </Route>
            <Route exact path="/location">
              <LocationDesktop />
            </Route>
            <Route exact path="/">
              <HomeDesktop />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
    </div>
  );
}

export default App;
