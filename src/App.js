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
        <Route path="/" exact component={Home} />
       <Route path="/books" exact render={() => <Books books={books} />} />
         <Route path="/books/:id" render={() => <Final books={books}/> }/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
