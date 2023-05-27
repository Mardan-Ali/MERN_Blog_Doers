import React from "react";
import "./topbar.css";
import image from "../assets/mardan.jpeg";
import { Link } from "react-router-dom";
export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icons fa-brands fa-square-facebook"></i>
        <i className="top-icons fa-brands fa-square-twitter"></i>
        <i className="top-icons fa-brands fa-square-pinterest"></i>
        <i className="top-icons fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/" className="link">
              About
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/" className="link">
              Contact
            </Link>
          </li>
          <li className="top-list-item">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          <li className="top-list-item">{user && "Logout"}</li>
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img className="top-imag" src={image} alt="" />
        ) : (
          <ul className="top-list">
            <li className="top-list-item">
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li className="top-list-item">
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
        )}

        <i class="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
