import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";

library.add(fas);

function App() {
  return (
    <Router>
      <NavBar />
      <main role="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/shop/:id" component={ShopPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
