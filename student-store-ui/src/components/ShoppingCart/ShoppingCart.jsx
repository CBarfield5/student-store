import React from "react";
import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";

export const ShoppingCart = ({
  products,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
  updateSubtotal,
  sub,
}) => {
  // Transform subtotal amount to traditional $0.00 format
  let fixedPrice = parseFloat(
    sub?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
  );

  // Transform taxed amount to traditional $0.00 format
  let taxedAmount = parseFloat(
    (fixedPrice * 0.0725)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
  );

  // Transform total (aftertax) amount to traditional $0.00 format
  let afterTax = parseFloat(taxedAmount + fixedPrice)
    ?.toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

  return (
    <div>
      <div class="h-screen">
        <div class="py-12">
          <div class="mx-auto bg-gray-100 shadow-lg rounded-lg  max-w-5xl">
            <div class="md:flex ">
              <div class="w-full p-4 px-1 py-5">
                <div class="md:grid md:grid-cols-2 gap-2 ">
                  <div class="col-span-2 p-5">
                    {/* Dynamically generate items in shopping cart on update to cart state */}
                    {cart.map((product) => (
                      <ShoppingCartItem
                        product={product}
                        products={products}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        updateSubtotal={updateSubtotal}
                      />
                    ))}

                    <div class="flex justify-between items-center mt-6 pt-6 border-t">
                      {/* subtotal, tax, and total price of current cart state */}
                      <div class="flex justify-center items-end">
                        <span class="text-xs lg:text-lg xl:text-xl font-medium text-gray-600 mr-.5">
                          Subtotal:
                        </span>
                        <span class="text-xs lg:text-lg xl:text-xl font-bold text-gray-800 pr-2">
                          {" "}
                          ${fixedPrice}
                        </span>
                      </div>

                      <div class="flex justify-center items-end">
                        <span class="text-xs lg:text-lg xl:text-xl font-medium text-gray-600">
                          Tax:
                        </span>
                        <span class="text-xs lg:text-lg xl:text-xl font-bold text-gray-800 mr-1.5">
                          {" "}
                          ${taxedAmount}
                        </span>
                      </div>

                      <div class="flex justify-center items-end">
                        <span class="text-lg xl:text-2xl font-medium text-gray-600 ml-1.5">
                          Total:
                        </span>
                        <span class="text-xl xl:text-3xl font-bold text-gray-800 ">
                          {" "}
                          ${afterTax}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
