import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from "react-router";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     
        <Header/>
        <div style={{height: "500px"}}>
          Placeholder for Product Container Component
        </div>
        <Footer/>
          
      
    </div>
  );
}

export default App;
