import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    // React router Component
    <Router>
      <div>
        {/* Used to select which routes to take */}
        <Switch>
          {/* To render a component depending on the URL exact path hit in the browser*/}
          <Route exact path="/" component={MainPage} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
