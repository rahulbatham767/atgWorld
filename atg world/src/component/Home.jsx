import React from "react";
import { Container } from "react-bootstrap";
import CustomCarousel from "./CustomCarousel";
import BlogPost from "./BlogPost";
const Home = ({ isLoggedIn }) => {
  return (
    <>
      <CustomCarousel />
      <BlogPost isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Home;
