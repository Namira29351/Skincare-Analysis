import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


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

            <NavDropdown title="Options" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/BrandPopularity">
                Popularity of different brands Analysis
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/BrandPopularityGraph">
                Popularity of different brands Graph
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ProductPopularity">
                Popularity of different products Analysis
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ProductPopularityGraph">
                Popularity of different products Graph
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ProductPrices">
                Prices of different products Analysis
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ProductPricesGraph">
                Prices of different products Graph
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/AboutMe">
                About Me Page
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;