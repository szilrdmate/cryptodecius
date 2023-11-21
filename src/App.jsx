import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Signals from "./pages/Signals";
import Results from "./pages/Results";
import Coaching from "./pages/Coaching";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signals" element={<Signals />} />
            <Route path="/coaching" element={<Coaching />} />
            <Route path="/results" element={<Results />} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
