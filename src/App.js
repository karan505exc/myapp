
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './component/Navbar';
import Layout2 from './component2/Layout2';
import Layout3 from './component2/Layout3';
function App() {
  return (
   <Router>
     
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/layout2" component={Layout2}/>
      <Route exact path="/layout3" component={Layout3}/>
    </Switch>


    </Router>
  );
   
 
}

export default App;
