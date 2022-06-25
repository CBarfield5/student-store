import * as React from "react";
import "./Home.css";
import { ProductGrid } from "../ProductGrid/ProductGrid";

export default function Home({
  products,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
}) {
  return (
    <div className="home">
      <ProductGrid
        products={products}
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
}
