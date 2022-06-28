import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({
  product,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  // Transform product price to traditional $0.00 format
  let fixedPrice = product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  // Find quantity of current item in cart
  let numInCart = cart?.find((item) => item.itemId === product.id)?.quantity;

  // On increment update cart, likewise for decrement
  const handleIncrement = () => {
    handleAddToCart(product.id);
  };
  const handleDecrement = () => {
    handleRemoveFromCart(product.id);
  };
  return (
    <div className="group py-6 ">
      <div className="w-full h-full object-contain bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg">
        <Link to={`product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full  object-cover group-hover:opacity-75 "
          />
        </Link>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            ${fixedPrice}
          </p>
        </div>
        <div className="custom-number-input h-10 w-32 self-center">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button
              data-action="decrement"
              onClick={handleDecrement}
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <div
              type="number"
              className="bg-gray-300 text-gray-800 text-center pt-2 px-2"
              name="custom-input-number"
            >
              {numInCart}
            </div>
            <button
              data-action="increment"
              onClick={handleIncrement}
              className="bg-gray-300 text-gray-800 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
