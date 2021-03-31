
// import React, { useState, createContext, useContext } from 'react';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemForm from './components/Item';


import './App.css';


// const ProductContext = createContext();
// const NewUserContext = createContext();  
// const UserContext = createContext();

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

const App = () => {
  // const [product, setProduct] = useState(); //Item data
  // const [newUser, setNewUser] = useState(); // newUserForm
  // const [user, setUser] = useState(); //Login 
  return (
    <div className="App">

      <header className="App-header"><Header /></header>
      <header className="App-header"><p>Welcome to Landing Page that will render mapped products</p></header>

       <ItemForm />
       <Footer />
     


    </div>
  );
}

export default App;
// use contextAPI to pull the product card RS is coding
//            this page will connect to login page for both customer and merchant
//                                   to create/edit/delete page for logged in merchants  
//            contain header and footer navigation