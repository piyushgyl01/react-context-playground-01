// Nav.js
import React from "react";
import { Link } from "react-router-dom";
import ReviewCounter from "./ReviewCounter";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <div className="logo">Reviewer</div>
      </Link>
      <div className="links">
        <Link to="/reporting" className="nav-link">
          Report
        </Link>
        <Link to="/pending" className="nav-link">
          Pending <ReviewCounter />
        </Link>
        <Link to={"/review"} className="nav-link">
          Review
        </Link>
      </div>
    </nav>
  );
}
