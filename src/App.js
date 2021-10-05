
import './App.css';
import Cards from './component/Cards';
import Navbar from './component/Navbar';


function App() {
  return (
    <div className="App">
  
    <Navbar/>
     <hr className="my_hrtag"/>  
     <Cards/>
     <hr className="my_hrtag"/>
     
        <p className="myfooter">Copyright Your Website 2014</p>
      
    </div>
  );
}

export default App;
