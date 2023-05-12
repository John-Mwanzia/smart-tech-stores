import React, { useContext, useState } from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from "react-router-dom";
import { Store } from "../store";
import SearchBar from "./SearchBar";

function Header({ currentPage }) {
  const { state } = useContext(Store);
  const { cart, userInfo } = state;
  const { cartItems } = cart;

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <>
      {currentPage === "cartScreen" ? (
        <nav className="flex justify-between py-4  Nav" expand="lg">
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
        </nav>
      ) : (
        <nav className="Nav flex justify-around items-center p-6 relative">
          <button onClick={toggleNavbar}>
            {!isOpen ? (
              <img
                className="md:hidden w-[25px] left-2"
                src="/images/Hamburger.svg"
                alt="hamburger"
              />
            ) : (
              <img
                className="md:hidden w-[25px] left-2"
                src="/images/Hamburger-closed.svg"
                alt="hamburger"
              />
            )}
          </button>

          <div className="">
            <Link to="/">
              <img alt="logo" src="/images/Logo.svg" />
            </Link>
          </div>
          <div>
            <SearchBar />
          </div>

          <div className="flex flex-col top-[-150px] lg:flex-row space-x-8 absolute lg:relative lg:top-0">
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
              <div>{userInfo.name}</div>
            ) : (
              <Link to="/signin">SignIn</Link>
            )}

            <div className="relative">
              <Link to="/cart">
                <img
                  className="  cart-img"
                  src="https://cdn-icons-png.flaticon.com/512/8974/8974464.png"
                />
                {cart.cartItems.length > 0 && (
                  <div className="absolute top-[-10px] right-[-24px] rounded-full px-2 bg-red-400">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default Header;
