import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
