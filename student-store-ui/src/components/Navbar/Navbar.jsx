import * as React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <header>
        <nav class="hidden md:block navbar navbar-expand-lg shadow-md py-5 bg-white relative items-center w-full justify-between">
          <div class="px-6 w-full flex flex-wrap items-center justify-between ">
            <div class="flex items-center"></div>
            <div
              class="navbar-collapse collapse grow items-center"
              id="navbarSupportedContentY"
            >
              <ul class="navbar-nav mr-auto md:flex lg:flex lg:flex-row">
                <li class="nav-item">
                  <a
                    class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="/"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="/about-us"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="/contact-us"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Contact Us
                  </a>
                </li>
                <li class="nav-item mb-2 lg:mb-0">
                  <a
                    class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="/buy-now"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Buy Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="text-center bg-gray-50 text-gray-800 py-20 px-10 md:px-40">
          <h1 class="text-5xl font-bold mt-0 mb-6">Student Store</h1>
        </div>
      </header>
    </nav>
  );
}
