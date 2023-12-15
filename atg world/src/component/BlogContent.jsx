import React from "react";
import {
  FaEdit,
  FaUsers,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaInfoCircle,
  FaCalendarAlt, // Corrected import
  FaBriefcase,
  FaCalendarDay, // Corrected import
  FaEye,
  FaShareAlt,
  FaEllipsisH, // Corrected import
} from "react-icons/fa";

const BlogContent = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      <div className="blog" id="blogContainer">
        {data.map((blog, id) => (
          <div key={id} className="card ">
            <img src={blog.image} className="img-fluid" alt="Image" />
            <div className="d-flex align-items-center mt-3 p-1">
              <p>
                {blog.icon} {blog.type}
              </p>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>
                <h5>{blog.heading}</h5>
                <p>{blog.paragraph}</p>
              </div>
              <div className="dropdown">
                <button
                  type="button"
                  className="border-0 bg-body dropdown-toggle"
                  data-toggle="dropdown"
                >
                  <FaEllipsisH />
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-right shadow-sm"
                  role="menu"
                  aria-labelledby="menu1"
                >
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
              </div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>
                {blog.category === "meeting" ? (
                  <small>
                    <span>
                      <FaCalendarDay />
                    </span>
                    {blog.date}
                  </small>
                ) : blog.category === "job" ? (
                  <small>
                    <span>
                      <FaBriefcase />
                    </span>
                    {blog.company}
                  </small>
                ) : (
                  ""
                )}
              </div>
              {blog.category === "job" || blog.category === "meeting" ? (
                <div className="text-right">
                  <p>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    {blog.location}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>

            <button
              type="button"
              style={{
                color: blog.category === "job" ? "green" : "orange",
              }}
              className="btn btn-lg shadow-sm"
            >
              {blog.category === "job"
                ? "Apply on Timesjobs"
                : blog.category === "meeting"
                ? "Visit Website"
                : ""}
            </button>

            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center mt-3">
                <div className="rounded-circle profile-image mr-3">
                  <img
                    src={blog.profileImage}
                    className="img-fluid"
                    alt="Profile"
                  />
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  <p>{blog.name}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-2 align-items-center">
                <div>
                  <FaEye />
                  <span className="ml-1">{blog.views} views</span>
                </div>
                <div style={{ marginLeft: "1rem" }}>
                  <button type="button" className="border-0 bg-gray">
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogContent;
