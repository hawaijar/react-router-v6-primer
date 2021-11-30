import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/css";

const NavStyles = css`
  margin-bottom: 15px;
  a {
    padding: 6px 12px;
    color: #fff;
    text-decoration: none;
    &.active {
      color: #50fa7b;
      border: 2px solid green;
      border-radius: 4px;
    }
  }
`;

export default function Nav() {
  return (
    <nav className={NavStyles}>
      <ul>
        <NavLink to="/" end activeClassName="active">
          Products
        </NavLink>
        <NavLink to="/admin" activeClassName="active">
          Admin
        </NavLink>
      </ul>
    </nav>
  );
}
