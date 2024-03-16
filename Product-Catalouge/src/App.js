// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Page from './Components/Welcome/Page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Footer from './Components/Footer/Footer';

function App() {
  const [products] = useState([
    {
      id: "1",
      name: "Toppetz Xencio",
      imageSrc: "images/watch_images/watch1.png",
      description: "Classical Wrist Watch",
      price: "210",
    },
    {
      id: "2",
      name: "Zento",
      imageSrc: "images/watch_images/watch2.png",
      description: "Classical Wrist Watch",
      price: "242",
    },
    {
      id: "3",
      name: "Appentz",
      imageSrc: "images/watch_images/watch3.png",
      description: "Classical Wrist Watch",
      price: "289",
    },
    {
      id: "4",
      name: "Matrix",
      imageSrc: "images/watch_images/watch5.png",
      description: "Classical Wrist Watch",
      price: "310",
    },
    {
      id: "5",
      name: "Vevo-Certz",
      imageSrc: "images/watch_images/watch14.png",
      description: "Classical Wrist Watch",
      price: "315",
    },
    {
      id: "6",
      name: "Nexis",
      imageSrc: "images/watch_images/watch4.png",
      description: "Classical Wrist Watch",
      price: "323",
    },
    {
      id: "7",
      name: "Mittz-Dolp",
      imageSrc: "images/watch_images/watch7.png",
      description: "Classical Wrist Watch",
      price: "392",
    },
    {
      id: "8",
      name: "Designo-Nov",
      imageSrc: "images/watch_images/watch8.png",
      description: "Classical Wrist Watch",
      price: "460",
    },
    {
      id: "9",
      name: "Peppateze",
      imageSrc: "images/watch_images/watch11.png",
      description: "Classical Wrist Watch",
      price: "465",
    },
    {
      id: "10",
      name: "Klerin",
      imageSrc: "images/watch_images/watch10.png",
      description: "Classical Wrist Watch",
      price: "480",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showcart, setShowCart] = useState(); 

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const addtocart = (data) => {
    const updatedCart = [...cart, { ...data, quantity: 1 }];
    updateCart(updatedCart);
  };

  const handleshow = (value) => {
    setShowCart(value);
  };

  return (
    <Router>
      <Nav count={cart.length>0?cart.length : cart.length = ""} handleshow={handleshow} />
      <Routes>
        <Route
          path="/cart"
          element={<Cart cart={cart} updateCart={updateCart} />}
        />
        <Route
          path="/"
          element={<Page products={products} addtocart={addtocart} />}
        />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
