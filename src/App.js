import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Rectangle from './components/Rectangle/Rectangle';
import Home from './components/Home/Home';
import NumberSplit from './components/NumberSplit/NumberSplit';

function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/rectangle">
            <Rectangle></Rectangle>
          </Route>

          <Route path="/numberSplit">
            <NumberSplit></NumberSplit>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
