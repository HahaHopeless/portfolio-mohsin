import "./styles.css";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { setGlobalLanguage } from "../../store/actionTypes";
import { useLocation } from "react-router-dom";

import {
  Navbar as BSNavbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const Navbar = (props) => {
  const setLang = (e) => {
    props.setGlobalLanguage(e);
  };

  var location = useLocation();

  // document.addEventListener(
  //   "DOMContentLoaded",
  //   () => {
  //     console.log("DOM fully loaded");
  //   },
  //   false
  // );

  return (
    <BSNavbar
      collapseOnSelect
      expand='lg'
      bg='white'
      fixed='top'
      style={{ padding: "1rem" }}
    >
      <Container>
        <BSNavbar.Toggle aria-controls='responsive-navbar-nav' />
        <BSNavbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link
              className={
                location.pathname === "/" ? "app-link active" : "app-link"
              }
            >
              {" "}
              <Link to='/'>
                <FormattedMessage id='home' />
              </Link>
            </Nav.Link>
            <Nav.Link
              className={
                location.pathname === "/projects"
                  ? "app-link active"
                  : "app-link"
              }
            >
              {" "}
              <Link to='/projects'>
                <FormattedMessage id='projects' />
              </Link>
            </Nav.Link>
            {/* <Nav.Link
              className={
                location.pathname === "/contact"
                  ? "app-link active"
                  : "app-link"
              }
            >
              {" "}
              <Link to='/contact'>
                <FormattedMessage id='contact' />
              </Link>
            </Nav.Link> */}

            <NavDropdown
              title={
                <img
                  src={require(`../../assets/icons/${props.lang}.svg`)}
                  className='lang-icon'
                />
              }
              id='collasible-nav-dropdown'
            >
              <NavDropdown.Item>
                <a
                  className='dropdown-item'
                  onClick={() => {
                    setLang("en");
                  }}
                >
                  <img
                    src={require("../../assets/icons/en.svg")}
                    className='lang-icon'
                  />
                  <span>EN</span>
                </a>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <a
                  className='dropdown-item'
                  onClick={() => {
                    setLang("de");
                  }}
                >
                  <img
                    src={require("../../assets/icons/de.svg")}
                    className='lang-icon'
                  />
                  <span>DE</span>
                </a>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.languageReducer.lang,
  };
};

export default connect(mapStateToProps, { setGlobalLanguage })(Navbar);
