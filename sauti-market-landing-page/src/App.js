import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from "react-router";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductCard from "./Components/ProductCard";

const sampleProduct = {
  id: 0,
  productName: "basket",
  country: "Kenya",
  market: "Wallingford",
  price: 0,
  description: "This decorative basket is hand-crafted by village artisans.",
  isPurchased: "false",
  merchantId: 0
};

function App() {
  return (
    <div className="App">
     
        <Header/>
        <div style={{height: "500px"}}>
          Placeholder for Product Container Component
        </div>
        <ProductCard product={sampleProduct}/>
        <Footer/>
        
    
      
    </div>
  );
}

export default App;
