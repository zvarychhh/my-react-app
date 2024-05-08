import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const MenuComponent = ({totalPrice}) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">PZ</Navbar.Brand>
        <Nav className="me-auto">
          <Link className='nav-item nav-link'  to="/">Home</Link>
          <Link className='nav-item nav-link'  to="/bin">Bin</Link>
          <Link className='nav-item nav-link'  to="/about">About</Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="me-2">
            Total Price: {totalPrice} грн.
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuComponent;
