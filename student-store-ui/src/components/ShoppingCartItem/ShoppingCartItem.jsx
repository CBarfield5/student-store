import React from "react";

export const ShoppingCartItem = ({
  product,
  products,
  handleAddToCart,
  handleRemoveFromCart,
  updateSubtotal,
}) => {
  // set variable for components product id
  const cartProduct = products?.find((item) => item.id === product.itemId);

  // Transform product price to traditional $0.00 format
  let productPrice = cartProduct.price
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

  // On increment update cart, likewise for decrement
  const handleDecrement = () => {
    handleRemoveFromCart(cartProduct.id);
  };
  const handleIncrement = () => {
    handleAddToCart(cartProduct.id);
  };

  return (
    <div>
      <div class="flex justify-between items-center mt-6 pt-6">
        <div class="flex  items-center">
          <img src={cartProduct?.image} width="60" class="rounded-full " />

          <div class="flex flex-col ml-3">
            <span class="text-xs sm:text-md lg:text-xl font-medium text-black">
              {cartProduct?.name}
            </span>
            <span class="text-xs font-light text-gray-900">{}</span>
          </div>
        </div>

        <div class="flex justify-center items-center">
          <div class="pr-8 flex ">
            <button
              class="font-semibold text-black text-xs"
              onClick={handleDecrement}
            >
              -
            </button>
            <div
              type="text"
              class="text-black focus:outline-none bg-gray-200 border h-6 w-8 rounded text-m px-2 mx-2"
            >
              {product.quantity}
            </div>
            <button
              class="font-semibold text-black text-xs"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <div class="pr-8 ">
            <span class="text-s font-medium text-black">${productPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
