import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import Link from "next/link";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export const Navigation = () => {
  const [collapseClasses, setCollapseClasses] = useState("");
  const onExiting = () => setCollapseClasses("collapsing-out");

  const onExited = () => setCollapseClasses("");

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"), {});
    // initialise
    headroom.init();
  });

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand href="/" className="mr-lg-4">
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler float-right"
              aria-label="navbar_toggle"
              id="navbar_global"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <UncontrolledCollapse
              toggler="#navbar_global"
              navbar
              className={collapseClasses}
              onExiting={onExiting}
              onExited={onExited}
            >
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Github"
                    className="nav-link-icon"
                    href={socialLinks.github}
                    target="_blank"
                  >
                    <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="Linkedin"
                    className="nav-link-icon"
                    href={socialLinks.linkedin}
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Linkedin
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    rel="noopener"
                    aria-label="email"
                    className="nav-link-icon"
                    href={socialLinks.email_link}
                    target="_blank"
                  >
                    <i className="fa fa-envelope" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Email
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <h3 className="text-black" id="nav-title">
                      {greetings.name}
                    </h3>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar_global"
                    ></button>
                  </Col>
                </Row>
              </div>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;
