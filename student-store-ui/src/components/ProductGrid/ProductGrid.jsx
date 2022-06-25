import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { useState } from "react";

export const ProductGrid = ({
  products,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const [clickedCat, setClickedCat] = useState("");
  const [search, setSearch] = useState("");

  const regexp = new RegExp(search, "i");

  let currentProducts = products.filter(
    (products) => products.category == clickedCat
  );

  let currentSearch = products.filter((products) => regexp.test(products.name));

  const handleClick = (category) => {
    setClickedCat(category);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="bg-white">
      <form className="pt-0 pb-10 px-20" onChange={(e) => handleChange(e)}>
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>
      <div className="grid px-20 gap-2 grid-cols-2 md:grid-cols-4 lg:px-30">
        <button
          onClick={() => handleClick("accessories")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Accessories
        </button>
        <button
          onClick={() => handleClick("clothing")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Clothing
        </button>
        <button
          onClick={() => handleClick("food")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Food
        </button>
        <button
          onClick={() => handleClick("tech")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Tech
        </button>
      </div>

      <div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid pb-10 grid-rows-4 grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {search != "" && clickedCat != ""
            ? currentSearch
                .filter((products) => products.category == clickedCat)
                .map((product, idx) => (
                  <ProductCard
                    product={product}
                    key={idx}
                    cart={cart}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                  />
                ))
            : search == "" && clickedCat == ""
            ? products.map((product, idx) => (
                <ProductCard
                  product={product}
                  key={idx}
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))
            : search == ""
            ? currentProducts.map((product, idx) => (
                <ProductCard
                  product={product}
                  key={idx}
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))
            : currentSearch.map((product, idx) => (
                <ProductCard
                  product={product}
                  key={idx}
                  cart={cart}
                  handleAddToCart={handleAddToCart}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
