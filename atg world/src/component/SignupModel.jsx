import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FaEye, FaFacebookF, FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SignupModal = ({ showSignupModal, handleClose, handleShowLogin }) => {
  return (
    <Modal
      show={showSignupModal}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal-width"
    >
      <Modal.Header
        className="custom-display "
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
        <div className="mt-2">
          <div className="row">
            <div className="col-md-6">
              <h5 className="mb-3">Create Account</h5>
              <Form>
                <Row>
                  <Col className="d-flex">
                    <Form.Control type="text" placeholder="First Name" />

                    <Form.Control type="text" placeholder="Last Name" />
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                  <div className="input-group">
                    <Form.Control
                      type="password"
                      className="border-0"
                      placeholder="Password"
                    />
                    <div className="input-group-append">
                      <span className="">
                        <FaEye />
                      </span>
                    </div>
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Group>
                <div style={{ justifyContent: "center" }}>
                  <Button
                    variant="primary"
                    size="lg"
                    className="mt-2 w-100 p-1"
                    type="submit"
                  >
                    Create Account
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
                  Sign up with Facebook
                </Button>
                <Button
                  variant="outline-dark"
                  size="lg"
                  className="w-100 mt-1 btn-google fs-6"
                >
                  <FaGoogle /> Sign up with Google
                </Button>
              </div>
            </div>
            <div className="col-md-6">
              <p className="text-end fs-6">
                Already have an account?{" "}
                <NavLink onClick={handleShowLogin}>Sign in</NavLink>
              </p>
              <div className="custom-display">
                <img src="/assets/login.png" alt="" />
              </div>
              <p
                className=" text-center stext-gray custom-display"
                style={{ fontSize: "8px" }}
              >
                by signing up. you agree to our Terms & condition.Privacy policy
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;
