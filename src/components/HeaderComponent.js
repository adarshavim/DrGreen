import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md" fixed="top" style={{opacity:"0.7"}}>
        <NavbarBrand href="/home">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/About"><b style={{color:"black"}}>About Us</b></NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="https://github.com/adarshavim/DrGreen.git"><b style={{color:"black"}}>GitHub</b></NavLink>
            </NavItem>
          </Nav>
          <NavbarText ><b style={{color:"black"}}>Go Green, Go High</b></NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Header;