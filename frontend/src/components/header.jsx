import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { Store } from "../store";
import SearchBar from "./SearchBar";

function Header() {
  const { state } = useContext(Store);
  const { cart, userInfo } = state;

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
      <div className="flex justify-center items-center  !bg-main-dark-bg">
        <nav className=" flex justify-around w-full  items-center px-6 md:justify-between  pt-8 pb-4 lg:pt-12 relative z-50">
          {!menuOpen && (
            <button onClick={() => toggleMenu("open")}>
              <img
                className="lg:hidden w-[25px] left-2"
                src="/images/Hamburger.svg"
                alt="hamburger"
              />
            </button>
          )}
          {menuOpen && (
            <div className="absolute top-0 left-1/2 z-50 ">
              <button onClick={() => toggleMenu("close")} className="z-50">
                <img
                  className="lg:hidden w-[25px] left-2 "
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
          <div className="absolute top-24  left-8 md:relative md:top-0  md:left-0 ">
            <SearchBar />
          </div>

          <div
            className={`${
              menuOpen
                ? "fixed top-0 pt-8 left-0  w-full  h-screen  text-center bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg "
                : "left-[-150px]"
            } transform transition duration-300 ease-in-out flex flex-col gap-4  lg:flex-row lg:space-x-8 absolute lg:relative lg:left-0`}
          >
            <Link to="/">
              {" "}
              <p className=" font-roboto font-normal">Home</p>
            </Link>
            <Link to="/">
              {" "}
              <p className=" font-roboto font-normal">About us</p>
            </Link>
            <Link to="/">
              {" "}
              <p className=" font-roboto font-normal">Blog</p>
            </Link>
            <Link to="/">
              {" "}
              <p className=" font-roboto font-normal">Contact</p>
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
              <div className="relative mr-4  ">
                <Link to="/cart">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8974/8974464.png"
                    alt="cart"
                    className="max-w-[25px] lg:max-w-[32px] "
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
      </div>
    </>
  );
}

export default Header;
