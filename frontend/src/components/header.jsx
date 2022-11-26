import React from "react";
import {LinkContainer} from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
                <Navbar.Brand> Smart tech stores</Navbar.Brand> 
          </LinkContainer>
          </Container>
      </Navbar>

          
       
    )
}

export default Header;