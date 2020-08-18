import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import "./SiteNavbar.css";

function SiteNavbar({ stylingClass, selected }) {
  return (
    <Navbar expand="md" className={stylingClass}>
      <Nav className="mr-auto" navbar>
        <NavItem>
          {selected === "about" ? (
            <NavLink className="selected" href="/about">
              About
            </NavLink>
          ) : (
            <NavLink href="/about">About</NavLink>
          )}
        </NavItem>
        <NavItem>
          {selected === "projects" ? (
            <NavLink className="selected" href="/projects">
              Projects
            </NavLink>
          ) : (
            <NavLink href="/projects">Projects</NavLink>
          )}
        </NavItem>
        <NavItem>
          {selected === "connect" ? (
            <NavLink className="selected" href="/connect">
              Connect
            </NavLink>
          ) : (
            <NavLink href="/connect">Connect</NavLink>
          )}
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default SiteNavbar;
