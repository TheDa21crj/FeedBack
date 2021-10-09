import React from "react";
import { Link } from "react-router-dom";
import N_css from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={N_css.n_m_div}>
      <div className={N_css.nav_name}>
        <Link className={N_css.Link} to="/">
          Da Associations
        </Link>
      </div>
      <div className={N_css.n_lists}>
        <ul>
          <li>
            <Link className={N_css.Link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={N_css.Link} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={N_css.Link} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={N_css.Link} to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className={N_css.Link} to="/register">
              Register
            </Link>
          </li>
          <li>
            <Link className={N_css.Link} to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
