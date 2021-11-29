import React from "react";
import { css } from "@emotion/css";

const adminStyles = css`
  color: gold;
  background-color: black;
`;

export default function Admin() {
  return (
    <div>
      <h2 className={adminStyles}>Admin page!</h2>
    </div>
  );
}
