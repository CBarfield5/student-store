import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductGrid = ({ products }) => {
  return (
    <div class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-rows-4 grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};
