import React from "react";
import { useState } from "react";
import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";
import doge from "./doge.png";

export const ShoppingCart = ({
  products,
  cart,
  handleAddToCart,
  handleRemoveFromCart,
  updateSubtotal,
  sub,
  resetCart,
}) => {
  const POSTURL = "http://localhost:3001/store";
  const [checkout, setCheckout] = useState("closed");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState("closed");

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

  const handleExpandCheckout = () => {
    confirmation == "open" ? setConfirmation("closed") : console.log("add");
    checkout == "closed" ? setCheckout("open") : setCheckout("closed");
  };

  const handleCheckout = (e) => {
    console.log(name);
    e.preventDefault();
    let transactionData = {
      shoppingCart: cart,
      user: [name, email],
    };

    fetch(POSTURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transactionData),
    }).then(() => {
      resetCart();
      updateSubtotal();
      setConfirmation("open");
    });
  };

  return (
    <div>
      <div class="h-screen">
        <div class="py-12">
          <div class="mx-auto bg-gray-100 shadow-lg rounded-lg  max-w-5xl">
            <div class="md:flex ">
              <div class="w-full p-4 px-1 py-5">
                <div class="md:grid md:grid-cols-2 gap-2 ">
                  <div class="col-span-2 p-5">
                    {checkout == "closed" ? (
                      cart.map((product) => (
                        <ShoppingCartItem
                          product={product}
                          products={products}
                          handleAddToCart={handleAddToCart}
                          handleRemoveFromCart={handleRemoveFromCart}
                          updateSubtotal={updateSubtotal}
                        />
                      ))
                    ) : confirmation == "open" ? (
                      // if purchase sucessful
                      <div className="flex flex-row">
                        <div className="text-black flex flex-col">
                          <div className="text-black pb-5 font-bold">{`Thank you ${name}, your purchase has been successful!`}</div>
                          <div className="text-black font-bold">{`You will recieve a confirmation email to ${email} soon.`}</div>
                        </div>
                        <div className="flex flex-row align-middle">
                          <img
                            src={doge}
                            alt="Sad Doge"
                            height={100}
                            width={100}
                            className="animate-bounce align-middle"
                          />
                        </div>
                      </div>
                    ) : (
                      // if checking out
                      <div class="w-full max-w-m">
                        <form
                          onSubmit={handleCheckout}
                          className="flex flex-col"
                        >
                          <label className="text-black pb-5 font-bold">
                            {<>Enter your name </>}
                            <input
                              type="username"
                              name="username"
                              class="mt-1 px-3 py-2 bg-white border font-bold shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                              placeholder="Username"
                              onChange={(e) => setName(e.target.value)}
                            />
                          </label>
                          <label className="text-black pb-7 font-bold">
                            {<>Enter your email </>}
                            <input
                              type="email"
                              name="email"
                              class="mt-1 px-3 py-2 bg-white font-extrabold border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                              placeholder="you@example.com"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </label>
                          <input
                            type="submit"
                            className="bg-blue-500 shadow-2xl hover:bg-gray-600 animate-bounce text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          />
                        </form>
                      </div>
                    )}

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
                    <div class="flex flex-col items-center pt-5">
                      <button
                        onClick={handleExpandCheckout}
                        className="bg-blue-500 shadow-2xl hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      >
                        {checkout == "closed" ? (
                          <>Checkout</>
                        ) : (
                          <>Continue Shopping</>
                        )}
                      </button>
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
