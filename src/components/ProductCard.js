import React from "react";
import { css } from "@emotion/css";

const productCardStyles = css`
  display: flex;
  color: #fff;
  background: #2a2c37;
  text-decoration: none;
  padding: 15px;
  margin-bottom: 5px;
  .ProductCard {
    &-Logo {
      width: 40px;
      margin-right: 15px;
    }
    &-Name {
      font-size: 1.2rem;
      margin: 0;
    }
    &-Price {
      color: #50fa7b;
      font-size: 1rem;
      margin: 0;
    }
  }
`;

export default function ProductCard({ product }) {
  return (
    <div className={productCardStyles}>
      <img
        className="ProductCard-Logo"
        src={`/assets/img/products/${product.id}.svg`}
        alt={product.name}
      />
      <div>
        <h2 className="ProductCard-Name">{product.name}</h2>
        <p className="ProductCard-Price">${product.price}</p>
      </div>
    </div>
  );
}
