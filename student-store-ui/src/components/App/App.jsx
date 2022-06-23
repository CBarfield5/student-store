import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Footer } from "../Footer/Footer";
import "./App.css";
import { NotFound } from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";

const URL = "https://codepath-store-api.herokuapp.com/store";

export default function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const { data } = await axios(URL);
    setProducts(data.products);
  }

  fetchProducts();
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home products={products} />} />
            <Route path="product/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}
