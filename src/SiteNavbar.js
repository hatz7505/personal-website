import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "./SiteNavbar.css";

function SiteNavbar() {
  return (
    <Navbar expand="md" className="navbar">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/connect">Connect</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default SiteNavbar;
