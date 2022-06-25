import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { NotFound } from "../NotFound/NotFound";
import { ProductDetail } from "../ProductDetail/ProductDetail";

const URL = "https://codepath-store-api.herokuapp.com/store";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sub, setSub] = useState(0);

  async function fetchProducts() {
    const { data } = await axios(URL);
    setProducts(data.products);
  }

  useEffect(fetchProducts, []);

  async function handleAddToCart(productId) {
    let temp = [...cart];

    let found = false;

    temp = temp.map((item) => {
      if (item.itemId === productId) {
        found = true;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    if (!found) {
      temp = [...temp, { itemId: productId, quantity: 1 }];
    }
    console.log("The variable in question", temp);
    setCart(temp, updateSubtotal(temp));
  }

  const handleRemoveFromCart = (productId) => {
    let temp = [...cart];
    temp.forEach((item, idx) => {
      if (item.itemId === productId) {
        temp[idx].quantity = temp[idx].quantity - 1;
        if (temp[idx].quantity == 0) {
          temp.splice(idx, 1);
        }
      }
    });
    setCart(temp, updateSubtotal(temp));
  };

  const updateSubtotal = (temp) => {
    let currentCart = temp;
    console.log("thecart: ", currentCart);

    let cartTotal = 0;
    currentCart.forEach((item) => {
      cartTotal += item.quantity * products[item.itemId - 1].price;
    });
    setSub(cartTotal);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar
            cart={cart}
            products={products}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            updateSubtotal={updateSubtotal}
            sub={sub}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  products={products}
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                  updateSubtotal={updateSubtotal}
                />
              }
            />
            <Route
              path="product/:productId"
              element={
                <ProductDetail
                  products={products}
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
