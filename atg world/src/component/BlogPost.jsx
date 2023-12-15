import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, redirect } from "react-router-dom";

import {
  FaEdit,
  FaUsers,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaInfoCircle,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import BlogContent from "./BlogContent";
import data from "../data.json";
console.log(data);
const BlogPost = ({ isLoggedIn }) => {
  return (
    <div className="container">
      {/* Header of post block */}
      <div className="container mt-4">
        <div className="row">
          {/* Left side: Anchor links */}
          <div className="col-md-8">
            <ul className="list-inline">
              <li className="list-inline-item text">
                <a href="#" className="post-link text-dark">
                  All Posts(32)
                </a>
              </li>
              <li className="list-inline-item text">
                <a href="#" className="post-link">
                  Articles
                </a>
              </li>
              <li className="list-inline-item text">
                <a href="#" className="post-link">
                  Events
                </a>
              </li>
              <li className="list-inline-item text">
                <a href="#" className="post-link">
                  Education
                </a>
              </li>
              <li className="list-inline-item text">
                <a href="#" className="post-link">
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Right side: Buttons with icons */}
          <div className="col-md-4 text-right  d-flex justify-content-between phone-hide">
            <div>
              <Form.Select size="sm">
                <option>
                  <FaEdit style={{ marginRight: "8px" }} />
                  Write a Post
                </option>
              </Form.Select>
            </div>
            {isLoggedIn ? (
              <Button
                variant="outline-secondary"
                size="sm"
                ref={Link}
                onClick={() => {
                  localStorage.removeItem("login");
                  return redirect("/");
                }}
              >
                <FaArrowAltCircleLeft /> <small> Leave Group</small>
              </Button>
            ) : (
              <div>
                <Button variant="primary" size="sm">
                  <FaUsers /> Join Group
                </Button>
              </div>
            )}
          </div>

          {/* small size window */}
          <div className="col-md-4 text-right  justify-content-between align-items-center d-none phone-show ">
            <h3>Posts(368)</h3>
            <Button variant="outline-secondary" size="sm">
              <select name="filter" id="filter" className="border-0">
                <option value="Filter" className="border-none fs-6">
                  Filter:All
                </option>
              </select>
            </Button>
          </div>
        </div>
      </div>
      {/* Header end of block */}
      {/* Post */}
      <div className="row mt-5">
        {/* Modal */}

        {/* Modal end */}
        <div className="col-md-7 border-0">
          <BlogContent data={data} />
        </div>
        <div className="col-md-3 mt-3 ">
          <div>
            <div className="location-input d-flex align-items-center">
              {/* Map Icon */}
              <FaMapMarkerAlt className="map-icon" />

              {/* Input Field */}
              <input
                type="text"
                className="form-control border-0 search-location"
                placeholder="Noida, India"
              />

              {/* Pencil Icon */}
              <FaPencilAlt className="pencil-icon" />
            </div>
            <hr style={{ marginTop: 0 }} />
          </div>
          {/* Explanatory Text */}
          <div className="mt-2 mb-3">
            <div className="d-flex align-items-start">
              <div>
                <FaInfoCircle />
              </div>

              <small style={{ marginLeft: "3px", color: "gray" }}>
                Your location will help us serve better and extend a
                personalized experience.
              </small>
            </div>
          </div>
          {isLoggedIn ? (
            <div className="mt-3">
              <h5 className="recommended-groups-heading">
                👍Recommended Groups
              </h5>
              {data.map(({ name, image }, id) => {
                return (
                  <div className="user-profile-container mb-3" key={id}>
                    <div className="profile-pic-container">
                      {/* Replace with your actual profile picture */}
                      <img className="profile-pic" src={image} alt="Profile" />
                    </div>
                    <div className="user-details">
                      <div>
                        <h3 className="user-name">{name}</h3>
                      </div>
                      <div>
                        <Button className="btn-sm fs-6" variant="primary">
                          <small> Follow</small>{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
              See More...
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Recommended Group */}
      </div>

      {/* Post end */}
    </div>
  );
};

export default BlogPost;
