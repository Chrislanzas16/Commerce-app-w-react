import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import Final from "./pages/Final.jsx";
import { books } from './data';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/books/1" render={() => <Final books={books}/> }/>
        <Route path="/books" render={() => <Books books={books} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
