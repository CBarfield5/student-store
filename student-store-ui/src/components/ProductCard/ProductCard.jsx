import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  let fixedPrice = product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  return (
    <a href={`product/${product.id}`} class="group py-6 ">
      <div class="w-full h-full object-contain bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-200 shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          class="w-full h-full  object-cover group-hover:opacity-75 "
        />
      </div>
      <h3 class="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p class="mt-1 text-lg font-medium text-gray-900">${fixedPrice}</p>
    </a>
  );
};
