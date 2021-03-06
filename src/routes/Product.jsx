import React from "react";
import { css } from "@emotion/css";
import { Outlet } from "react-router-dom";

const productStyles = css`
  display: flex;
  flex-direction: column;
  .Logo {
    width: 125px;
    margin 0 auto 25px;
  }
`;

export default function Product() {
  return (
    <>
      <div className={productStyles}>
        <img
          src="/assets/img/logo.svg"
          alt="Ultimate Burgers"
          className="Logo"
        />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
