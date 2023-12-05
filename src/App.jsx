import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signals from "./pages/Signals";
import Results from "./pages/Results";
import Coaching from "./pages/Coaching";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signals" component={Signals} />
          <Route path="/coaching" component={Coaching} />
          <Route path="/results" component={Results} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
