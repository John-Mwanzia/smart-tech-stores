import React from "react";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(){
    return(
      <Navbar bg="dark" variant="dark" expand="lg">
      
        <Container>
          <LinkContainer to="/">
                <Navbar.Brand> Smart tech stores</Navbar.Brand> 
          </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="w-100 justify-content-end">
        
          <Link   to="/cart">
         {/* <ShoppingCartIcon /> */}
         
          <img className="  cart-img" src="https://cdn-icons-png.flaticon.com/512/8974/8974464.png"/>
         </Link>
        
         <NavDropdown  title="Category" >
              <NavDropdown.Item href="/category/phones">phones</NavDropdown.Item>
              <NavDropdown.Item href="/category/chargers">chargers</NavDropdown.Item>
              <NavDropdown.Item href="/category/others">Other electronics</NavDropdown.Item>
          </NavDropdown>
     
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>

          
       
    )
}

export default Header;