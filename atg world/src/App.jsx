import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import LoginModal from "./component/LoginModal";

import { useState } from "react";
import { useEffect } from "react";
import Navigation from "./component/Navigation";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("login"));
  }, []);

  return (
    <>
      <Router>
        <Navigation isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
