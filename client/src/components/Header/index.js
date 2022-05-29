import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

import Auth from "../../utils/auth";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "../../styles/style.css";

import { Container, Navbar, Nav } from "react-bootstrap";

import { translations } from "../../lib/localizedStrings";

// the following line is used to force a particular language
translations.setLanguage("en");

function Header({ currentPage, handlePageChange }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <header className="text-light mb-4 flex-row align-center">
      <Navbar variant="light" expand="lg">
      {/* <Navbar bg="dark" variant="light" expand="lg"> */}
        <Container>
          {/* <Navbar.Brand><h1>React-Bootstrap</h1></Navbar.Brand> */}
          <h1>Grimoire Kaotica</h1>
          <div className="ml-auto p-2">
            {Auth.loggedIn() ? (
              <>
                {/* <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link> */}

                <button className="logout-btn btn btn-lg m-2" onClick={logout}>
                  {translations.logout}
                </button>
              </>
            ) : (
              <>
                <Link className="login-btn btn btn-lg m-2" to="/login">
                  {translations.login}
                </Link>
                <Link className="signup-btn btn btn-lg m-2" to="/signup">
                  {translations.signup}
                </Link>
              </>
            )}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                onClick={() => handlePageChange("Home")}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "About" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/me"
                onClick={() => handlePageChange("Portfolio")}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Portfolio" ? "nav-link active" : "nav-link"
                }
              >
                My Page
              </Nav.Link>
              {/* <Nav.Link
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
              >
                Resume
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Box sx={{ padding: '0px',width: '100%', bgcolor: "#3A0CA3" }}>
      <Tabs variant="fullWidth" TabIndicatorProps={{style: {height: '6px', background:'#FFB703'}}} value={value} onChange={handleChange} aria-label="nav tabs example">
        <Tab component={Link} label={<span style={{ fontSize: '24px', color: '#EEEEEE' }}>Home</span>} to="/" />
        <Tab component={Link} label={<span style={{ fontSize: '24px', color: '#EEEEEE' }}>{translations.journal}</span>} to="/me" />
        <Tab component={Link} label={<span style={{ fontSize: '24px', color: '#EEEEEE' }}>Make a Post</span>} to="/post" />
      </Tabs>
    </Box> */}
    </header>
  );
}

/* <Tab component={Link} label={`${Auth.getProfile().data.username}'s Page`} to="/me" /> */

export default Header;
