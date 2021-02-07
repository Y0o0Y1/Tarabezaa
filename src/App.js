import './App.css';
import Header from "./components/Heading/Header"
import Footer from "./components/Footer/Footer"
import SearchingSection from "./components/Sections/SearchingSection"
import Services from "./components/Services"
import {BrowserRouter as Router,Switch, Route,Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Services} />
        <Route exact path="/restaurnts" component={SearchingSection} />
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
