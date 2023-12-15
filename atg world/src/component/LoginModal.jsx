import React, { useState } from "react";
import { useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FaEye, FaFacebookF, FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const LoginModal = ({ showLoginModal, handleClose, handleShowSignup }) => {
  const [id, setId] = useState("");
  const [pswd, setPswd] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    console.log(e.target.value);
    if (e.target.name === "email") {
      setId(e.target.value);
    } else if (e.target.name === "password") {
      setPswd(e.target.value);
    }
  };

  const getLogin = (e) => {
    e.preventDefault();
    console.log("getLogin");
    console.log(id); // This should log the value of id
    console.log(pswd); // This should log the value of pswd

    if (id === "rahul@gmail.com" && pswd === "rahul") {
      localStorage.setItem("login", "true");
      console.log(localStorage.getItem("login"));
    }
  };
  useEffect(() => console.log(localStorage.getItem("login")), [localStorage]);
  return (
    <Modal
      show={showLoginModal}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal-width"
    >
      <Modal.Header
        style={{
          backgroundColor: "rgb(123, 210, 123)",
          justifyContent: "center",
        }}
      >
        <Modal.Title style={{ color: "green", fontSize: "12px" }}>
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now
        </Modal.Title>
        <Button variant="close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <div className="mt-5">
          <div className="row">
            <div className="col-md-6">
              <h5 className="mb-3">Sign In</h5>
              <Form>
                <Form.Group>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <div className="input-group">
                    <Form.Control
                      type="password"
                      className="border-0"
                      placeholder="Password"
                      onChange={(e) => {
                        setPswd(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <span className="">
                        <FaEye />
                      </span>
                    </div>
                  </div>
                </Form.Group>
                <div style={{ justifyContent: "center" }}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="mt-2 w-100 p-1"
                    type="submit"
                    onClick={getLogin}
                  >
                    Sign in
                  </Button>
                </div>
              </Form>
              <div className="mt-3 d-flex flex-column justify-content-center align-items-start">
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="w-100 btn-facebook fs-6"
                >
                  <FaFacebookF />
                  Sign in with Facebook
                </Button>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="w-100 mt-1 btn-google fs-6"
                >
                  <FaGoogle /> Sign in with Google
                </Button>
                <div className="w-100 text-center">
                  <NavLink className="fs-6 ">
                    <small> Forget Password?</small>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <p className="text-end fs-6 text-center">
                <small> Don't have an account yet?</small>
                <NavLink onClick={handleShowSignup}>
                  {" "}
                  <small>Create Account</small>
                </NavLink>
              </p>
              <img src="/assets/login.png" alt="" />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
