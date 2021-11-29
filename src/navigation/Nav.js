import React from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

const NavStyles = css`
  margin-bottom: 15px;
  a {
    padding: 6px 12px;
    color: #fff;
    text-decoration: none;
  }
`;

export default function Nav() {
  return (
    <nav className={NavStyles}>
      <ul>
        <Link to="/">Products</Link>
        <Link to="/admin">Admin</Link>
      </ul>
    </nav>
  );
}
