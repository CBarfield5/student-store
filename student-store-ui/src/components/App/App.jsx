// utilities
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// components
import { Footer } from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { NotFound } from "../NotFound/NotFound";
import { ProductDetail } from "../ProductDetail/ProductDetail";

// products endpoint from project description
const URL = "https://codepath-store-api.herokuapp.com/store";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sub, setSub] = useState(0);

  // Fetch products from the request URL given in the project description
  async function fetchProducts() {
    const { data } = await axios(URL);
    setProducts(data.products);
  }

  // Once, on load, fetch the products
  useEffect(fetchProducts, []);

  // When incrementing value of item to cart, update the 'cart' state
  async function handleAddToCart(productId) {
    let tempCart = [...cart];
    let found = false;

    /* Iterate through cart and handle two situations:
    1. increment the quantity of the product if found in cart
    2. create an object and set its intial quantiy to 1
    */
    tempCart = tempCart.map((item) => {
      if (item.itemId === productId) {
        found = true;
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    if (!found) {
      tempCart = [...tempCart, { itemId: productId, quantity: 1 }];
    }
    setCart(tempCart, updateSubtotal(tempCart));
  }

  // When decrementing the value of item in cart, update the 'cart' state
  const handleRemoveFromCart = (productId) => {
    let tempCart = [...cart];

    /* Iterate through cart and handle two situations:
    1. decrement the quantity of the product if found in cart and quantity is greater than 1
    2. delete the product from the cart if the quanity is less than or equal to 1
    */
    tempCart.forEach((item, idx) => {
      if (item.itemId === productId) {
        tempCart[idx].quantity = tempCart[idx].quantity - 1;
        if (tempCart[idx].quantity == 0) {
          tempCart.splice(idx, 1);
        }
      }
    });
    setCart(tempCart, updateSubtotal(tempCart));
  };

  // When cart state is altered, update the subtotal amount calculated
  const updateSubtotal = (tempCart) => {
    let currentCart = tempCart;
    let cartTotal = 0;

    // Iterate through each item in the cart and sum total cost by item price and quantity selected
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
