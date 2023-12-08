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
      //prevent scrolling when menu is open
      document.body.style.overflow = "hidden";
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center  bg-customGreen">
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
            <div className="absolute top-8 left-8 z-50 ">
              <button onClick={() => toggleMenu("close")} className="z-50">
                <img
                  className="lg:hidden w-[17px] left-2 "
                  src="/images/Hamburger-closed.svg"
                  alt="hamburger"
                />
              </button>
            </div>
          )}

          <div className={`${menuOpen ? "absolute right-4 top-8" : "block"} `}>
            <Link to="/">
              <img
                alt="logo"
                src="/images/Logo.svg"
                className={`${menuOpen ? "w-56 " : "block"}`}
              />
            </Link>
          </div>
          <div className="absolute top-24  left-8 md:relative md:top-0  md:left-0 ">
            <SearchBar />
          </div>

          <div
            className={`${
              menuOpen
                ? "fixed top-20 pt-8 left-0  w-full  h-screen  text-center bg-gray-200 bg-opacity-10 backdrop-filter backdrop-blur-lg "
                : "hidden lg:flex"
            } transform transition duration-300 ease-in-out flex flex-col gap-16  lg:flex-row lg:items-center lg:space-x-8 lg:gap-12 absolute lg:relative lg:left-0`}
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
            {/* if there is userInfo, and userinfo.isAdmin is truthy show a link to the admin page */}
            {userInfo && userInfo.isAdmin && <Link to="/admin" className="bg-[#FB9678] shadow-lg text-white px-4 py-2 rounded-xl">Admin</Link>}
          </div>

          <div className="flex  flex-row items-center  ">
            {!menuOpen &&
              (userInfo ? (
                <div className="mr-2">{userInfo.name}</div>
              ) : (
                <Link to="/signin">SignIn</Link>
              ))}
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
