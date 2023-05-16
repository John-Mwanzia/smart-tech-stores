import React, { useContext, useState } from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from "react-router-dom";
import { Store } from "../store";
import SearchBar from "./SearchBar";

function Header({ currentPage }) {
  const { state } = useContext(Store);
  const { cart, userInfo } = state;
  const { cartItems } = cart;



  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (btn) => {
    if (btn === "open") {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <>
      {currentPage === "cartScreen" ? (
        {
          /* <nav className="flex justify-between py-4  " expand="lg">
          <div className="flex justify-center space-x-10 font-bold text-lg">
            <Link to="/">
              <img
                alt=""
                src="/images/johny14_typography_logo_of_ST_initials_exactly_with_a_laptop_ph_0c2675b4-ca3a-4143-ab56-d061caf3437b.png"
                width="50"
                height="50"
                className="rounded"
              />{" "}
              Smart tech stores
            </Link>
          </div>
          <div className="flex  items-center justify-end max-w-70">
            <Link to="/cart">
              <img
                className="  cart-img"
                src="https://cdn-icons-png.flaticon.com/512/8974/8974464.png"
              />
              {cart.cartItems.length > 0 && (
                <div pill bg="danger">
                  {cartItems.reduce((a, c) => a + c.quantity, 0)}
                </div>
              )}
            </Link>
          </div>
        </nav> */
        }
      ) : (
        <nav className=" flex justify-around w-full items-center p-6 relative bg-customGreen">
          {!menuOpen && (
            <button onClick={() => toggleMenu("open")}>
              <img
                className="md:hidden w-[25px] left-2"
                src="/images/Hamburger.svg"
                alt="hamburger"
              />
            </button>
          )}
          {menuOpen && (
            <div className="absolute top-0 left-1/2 z-50 ">
              <button onClick={() => toggleMenu("close")} className="z-50">
                <img
                  className="md:hidden w-[25px] left-2 "
                  src="/images/Hamburger-closed.svg"
                  alt="hamburger"
                />
              </button>
            </div>
          )}

          <div className="">
            <Link to="/">
              <img alt="logo" src="/images/Logo.svg" />
            </Link>
          </div>
          <div>
            <SearchBar />
          </div>

          <div
            className={`${
              menuOpen
                ? "translate-x-4  lg:translate-x-0 fixed top-0 pt-8 left-0 w-screen  h-screen  bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg "
                : "left-[-150px]"
            } transform transition duration-300 ease-in-out flex flex-col gap-4  lg:flex-row lg:space-x-8 absolute lg:relative lg:left-0`}
          >
            <Link to="/">
              {" "}
              <p className="font-sans text-lg">Home</p>
            </Link>
            <Link to="/">
              {" "}
              <p className="font-sans text-lg">About us</p>
            </Link>
            <Link to="/">
              {" "}
              <p className="font-sans text-lg">Blog</p>
            </Link>
            <Link to="/">
              {" "}
              <p className="font-sans text-lg">Contact</p>
            </Link>
          </div>

          <div className="flex  flex-row items-center  ">
            {userInfo ? (
              <div className="mr-2">{userInfo.name}</div>
            ) : (
              <Link to="/signin">SignIn</Link>
            )}
            {/* the cart image was showing when menuOpen was true, so i had to use conditional rendering to hide it when menuOpen is true */}
            {!menuOpen && (
              <div className="relative">
                <Link to="/cart">
                  <img
                    className="cart-img"
                    src="https://cdn-icons-png.flaticon.com/512/8974/8974464.png"
                  />
                  {cart.cartItems.length > 0 && (
                    <div className="absolute top-[-10px] right-[-24px] rounded-full px-2 bg-red-400">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </div>
                  )}
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
