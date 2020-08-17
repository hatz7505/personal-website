import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "./SiteNavbar.css";

function SiteNavbar({ stylingClass }) {
  return (
    <Navbar expand="md" className={stylingClass}>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">
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
