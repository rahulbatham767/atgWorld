import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import SignupModal from "./SignUpModel";
import LoginModal from "./LoginModal";

const Navigation = ({ isLoggedIn }) => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowSignup = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const handleShowLogin = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const handleClose = () => {
    setShowSignupModal(false);
    setShowLoginModal(false);
  };

  const handleDropdownClick = () => {
    // Toggle the dropdown state here if needed
  };
  const showDropdown = () => {};

  return (
    <>
      <Navbar bg="light" expand="lg" className="custom-display">
        <Container>
          <Navbar.Brand href="#">
            <img src="/assets/whole.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse
            id="navbarSupportedContent"
            className="justify-content-around"
          >
            <div className="search-nav">
              <span>
                <FaSearch />
              </span>
              <input
                style={{ border: "none" }}
                className="form-control me-2"
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
              />
            </div>
            {isLoggedIn ? (
              <div className="user-profile">
                <div className="profile-pic-container">
                  <img
                    className="profile-pic"
                    src="/assets/profile/profile.png"
                    alt="Profile"
                  />
                </div>
                <div className="user-details">
                  <button
                    type="button"
                    className="border-0 bg-transparent dropdown-toggle"
                    onClick={handleDropdownClick}
                  >
                    <small> Siddhart Goyal</small>
                  </button>
                  {/* Conditionally render the dropdown menu */}
                  {showDropdown && (
                    <ul className="dropdown-menu dropdown-menu-right shadow-sm">
                      <li role="presentation">
                        <a role="menuitem" tabIndex="-1" href="#">
                          Edit
                        </a>
                      </li>
                      <li role="presentation">
                        <a role="menuitem" tabIndex="-1" href="#">
                          Report
                        </a>
                      </li>
                      <li role="presentation">
                        <a role="menuitem" tabIndex="-1" href="#">
                          Option3
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                <p style={{ display: "contents" }}>
                  Create account.
                  <button
                    onClick={handleShowSignup}
                    className="btn btn-default text-primary m-0 p-0"
                  >
                    It's Free
                  </button>
                  <SignupModal
                    showSignupModal={showSignupModal}
                    handleClose={handleClose}
                    handleShowLogin={handleShowLogin}
                  />
                  <LoginModal
                    showLoginModal={showLoginModal}
                    handleClose={handleClose}
                    handleShowSignup={handleShowSignup}
                  />
                </p>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
