import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/Search" component={SearchPage} />
          <Route exact path="/Favorites" component={Favorites} />
          <Route exact path="/edit/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
