import React from "react";
import { Carousel } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import Button from "react-bootstrap/Button";

const CustomCarousel = () => {
  return (
    <Carousel controls={false}>
      <Carousel.Item className="position-relative phone-item">
        <div className="overlay"></div>
        <img src="./assets/carousel.png" className="d-block" alt="..." />
        <Carousel.Caption
          className="phone-caption"
          style={{
            textAlign: "initial",
          }}
        >
          <div
            className="caption-content phone-content"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)",
            }}
          >
            <h3>Computer Engineering</h3>
            <p>142,765 Computer Engineers follow this</p>
          </div>
        </Carousel.Caption>
        <FaArrowLeft className="carousel-back" />
        <Button variant="outline-secondary" size="sm" className="carousel-join">
          Join Group
        </Button>
      </Carousel.Item>
    </Carousel>
  );
};

export default CustomCarousel;
