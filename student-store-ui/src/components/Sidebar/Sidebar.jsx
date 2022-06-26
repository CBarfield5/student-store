import * as React from "react";
import { useState } from "react";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import "./Sidebar.css";

export default function Sidebar({
  cart,
  products,
  handleAddToCart,
  handleRemoveFromCart,
  sub,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <section className="sidebar">
        {/* Display close button when sidebar is open, show open symbol when closed */}
        {isOpen ? (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => setIsOpen(!isOpen)}
            className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
            fill="#2563EB"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}

        {/* When sidebar is opened, translate shopping cart to users viewpoint */}
        <div
          className={`top-0 right-0 w-[100vw]  xl:w-[50vw]  bg-gray-800  p-10 pl0 text-white fixed h-full z-40  ease-in-out duration-300 ${
            isOpen ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <h3 className="mt-20 text-4xl font-semibold text-white">
            Shopping Cart
          </h3>
          <ShoppingCart
            products={products}
            cart={cart}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
            sub={sub}
          />
        </div>
      </section>
    </div>
  );
}
