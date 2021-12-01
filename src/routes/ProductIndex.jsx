import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import { listOfProducts } from "./ProductService";
import ProductCard from "../components/ProductCard";

const productIndexStyles = css`
  margin: 20px;
`;

export default function ProductIndex() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await listOfProducts();
      setProducts(data);
    })();
  }, []);

  if (products === null) {
    return <div className={productIndexStyles}>Loading ...</div>;
  }

  return (
    <div className={productIndexStyles}>
      {products.map((item) => (
        <div key={item.id}>
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
}
