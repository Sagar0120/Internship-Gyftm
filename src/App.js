import Register from './Components/Register.js';
import Login from './Components/Login';
//import { useState } from "react";
import Header from "./Components/layout/Header";
import Meals from "./Components/meals/Meals";
//import Cart from "./Components/Cart/Cart";
//import CartProvider from './store/CartProvider';
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar";

function App() {
  /*const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };*/
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Meals />} />
          <Route path="/Register.js" element={<Register />} />
          <Route path="/Login.js" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
