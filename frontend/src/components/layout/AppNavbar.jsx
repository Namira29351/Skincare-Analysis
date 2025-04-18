
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>

        <Navbar.Brand as={Link} to="/">
          Sephora Skin Care Products Analysis
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Analysis" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/BrandPopularity">
                Popularity of different brands
              </NavDropdown.Item>
              
              <NavDropdown.Item as={NavLink} to="/ProductPopularity">
                Popularity of different products
              </NavDropdown.Item>
              
              <NavDropdown.Item as={NavLink} to="/ProductPrice">
                Prices of different products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;