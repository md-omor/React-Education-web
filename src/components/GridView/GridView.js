import React from "react";
import "./GridView.css";
import Product from "../Products/Product";

const GridView = ({ products }) => {
  return (
    <div>
      <div className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
