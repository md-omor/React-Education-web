import React from "react";
import "./GridView.css";
import Product from "../Products/Product";
import Row from "react-bootstrap/Row";

const GridView = ({ products }) => {
  return (
    <div className="gridview">
      <Row className="products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </Row>
    </div>
  );
};

export default GridView;
