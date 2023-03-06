import React, { useContext } from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Badge, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../store";

function Header() {

  const {state} = useContext(Store)
    const {cart} = state;
    const {cartItems} = cart;
  return (
    
    <Navbar className="Nav" variant="dark" expand="lg">

   <Container>
   <div className="input-container">
     <InputGroup>
 
  <FormControl className="input-contaner-wrapper" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
      
     <Button variant="light"><i className="fa fa-search" aria-hidden = "true"></i></Button>
       
    </InputGroup>
    </div>
     
       <div className="d-flex justify-content-center align-items-center">
        <LinkContainer to="/">
          <Navbar.Brand>
          <img
              alt=""
              src="/images/johny14_typography_logo_of_ST_initials_exactly_with_a_laptop_ph_0c2675b4-ca3a-4143-ab56-d061caf3437b.png" 
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
           Smart tech stores
           </Navbar.Brand>
        </LinkContainer>
      </div>
</Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end">
            <Link to="/cart">

              <img
                className="  cart-img"
                src="https://cdn-icons-png.flaticon.com/512/8974/8974464.png"
              />
              {cart.cartItems.length > 0 && <Badge pill bg="danger">{cart.cartItems.reduce((a, c)=> a + c.quantity, 0)}</Badge>}
            </Link>

            <NavDropdown title="Category">
              <NavDropdown.Item href="/category/phones">
                phones
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/chargers">
                chargers
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/others">
                Other electronics
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

     
      
    </Navbar>

  
  );
}

export default Header;
