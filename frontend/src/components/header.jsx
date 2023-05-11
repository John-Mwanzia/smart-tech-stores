import React, { useContext } from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../store";
import SearchBar from "./SearchBar";

function Header({ currentPage }) {
  const { state } = useContext(Store);
  const { cart, userInfo } = state;
  const { cartItems } = cart;
  return (
    <>
      {currentPage === "cartScreen" ? (
        <Navbar className="flex justify-between py-4  Nav" expand="lg">
          <Container>
            <div className="flex justify-center space-x-10 font-bold text-lg">
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img
                    alt=""
                    src="/images/johny14_typography_logo_of_ST_initials_exactly_with_a_laptop_ph_0c2675b4-ca3a-4143-ab56-d061caf3437b.png"
                    width="50"
                    height="50"
                    className="rounded"
                  />{" "}
                  Smart tech stores
                </Navbar.Brand>
              </LinkContainer>
            </div>
            <div className="flex  items-center justify-end max-w-70">
              <Link to="/cart">
                <img
                  className="  cart-img"
                  src="https://cdn-icons-png.flaticon.com/512/8974/8974464.png"
                />
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </div>
          </Container>
        </Navbar>
      ) : (
        <nav className="Nav flex justify-around p-6" expand="lg">
        
            <div className="">
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
            <div >
                <SearchBar />
            </div>

            <div className="flex  flex-row items-center  ">
              {userInfo ? (
                <div>{userInfo.name}</div>
              ) : (
                <Link to="/signin">SignIn</Link>
              )}

              <div>
                <Link to="/cart">
                  <img
                    className="  cart-img"
                    src="https://cdn-icons-png.flaticon.com/512/8974/8974464.png"
                  />
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
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
