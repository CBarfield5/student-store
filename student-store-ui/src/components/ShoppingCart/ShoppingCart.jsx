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
  let fixedPrice = parseFloat(
    sub?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
  );
  let taxedAmount = parseFloat(
    (fixedPrice * 0.0725)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
  );
  let afterTax = parseFloat(taxedAmount + fixedPrice)
    ?.toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

  fixedPrice = fixedPrice?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  taxedAmount = taxedAmount?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  return (
    <div>
      <div class="h-screen">
        <div class="py-12">
          <div class="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div class="md:flex ">
              <div class="w-full p-4 px-5 py-5">
                <div class="md:grid md:grid-cols-2 gap-2 ">
                  <div class="col-span-2 p-5">
                    {cart.map((product, idx) => (
                      <ShoppingCartItem
                        product={product}
                        products={products}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        updateSubtotal={updateSubtotal}
                      />
                    ))}

                    <div class="flex justify-between items-center mt-6 pt-6 border-t">
                      <div class="flex items-center">
                        <i class="fa fa-arrow-left text-sm pr-2"></i>
                        <span class="text-md  font-medium text-blue-500"></span>
                      </div>

                      <div class="flex justify-center items-end">
                        <span class="text-md font-medium text-gray-600 mr-1">
                          Subtotal:
                        </span>
                        <span class="text-lg font-bold text-gray-800 ">
                          {" "}
                          ${fixedPrice}
                        </span>
                      </div>

                      <div class="flex justify-center items-end">
                        <span class="text-md font-medium text-gray-600 mr-1">
                          Tax:
                        </span>
                        <span class="text-lg font-bold text-gray-800 ">
                          {" "}
                          ${taxedAmount}
                        </span>
                      </div>

                      <div class="flex justify-center items-end">
                        <span class="text-lg font-medium text-gray-600 mr-1">
                          Total:
                        </span>
                        <span class="text-4xl font-bold text-gray-800 ">
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
