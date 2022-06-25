import React from "react";

export const ShoppingCartItem = ({
  product,
  products,
  handleAddToCart,
  handleRemoveFromCart,
  updateSubtotal,
}) => {
  let cartVal = products?.find((item) => item.id === product.itemId);

  let fixedPrice = cartVal.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");

  const handleDecrement = () => {
    handleRemoveFromCart(cartVal.id);
  };

  const handleIncrement = () => {
    handleAddToCart(cartVal.id);
    updateSubtotal();
  };

  return (
    <div>
      <div class="flex justify-between items-center mt-6 pt-6">
        <div class="flex  items-center">
          <img src={cartVal?.image} width="60" class="rounded-full " />

          <div class="flex flex-col ml-3">
            <span class="text-xl md:text-md font-medium text-black">
              {cartVal?.name}
            </span>
            <span class="text-xs font-light text-gray-900">{}</span>
          </div>
        </div>

        <div class="flex justify-center items-center">
          <div class="pr-8 flex ">
            <button
              class="font-semibold text-black text-xl"
              onClick={handleDecrement}
            >
              -
            </button>
            <div
              type="text"
              class="text-black focus:outline-none bg-gray-200 border h-6 w-8 rounded text-m px-2 mx-2"
              value="1"
            >
              {product.quantity}
            </div>
            <button
              class="font-semibold text-black text-xl"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          <div class="pr-8 ">
            <span class="text-s font-medium text-black">${fixedPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
