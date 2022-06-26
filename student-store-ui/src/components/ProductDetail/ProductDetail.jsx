import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = ({
  products,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  // Set variable for product route id via params
  const params = useParams();

  // Set product id via params given
  let product = products.find((item) => item.id === parseInt(params.productId));

  // Transform product price to traditional $0.00 format
  let fixedPrice = product?.price
    ?.toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

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
    <section class="text-gray-700 body-font overflow-hidden bg-white">
      <a>
        <div class="container px-5 pt-5 pb-10 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={product?.image}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                Student Store Essentials
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.name}
              </h1>
              <div class="flex mb-4"></div>
              <p class="leading-relaxed">{product?.description}</p>

              <div class="flex pt-5 self-center">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${fixedPrice}
                </span>

                <div className="pl-10 custom-number-input h-10 w-32 self-center">
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
          </div>
        </div>
      </a>
    </section>
  );
};
