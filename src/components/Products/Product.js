import React from "react";
import "./Products.css";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { BiBookmarks } from "react-icons/bi";
import { formatPrice } from "../../utils/helpers";

const Product = ({ image, name, price, id, description, category }) => {
  return (
    <Col sm={12} md={4} className="product">
      <img src={image} alt={name} className="product__image" />
      <Link to={`/products/${id}`} className="link">
        <BiBookmarks />
      </Link>
      <footer>
        <div className="fotter_price">
          <h5>{name}</h5>
          <p>{formatPrice(price)}</p>
        </div>

        <p>{description.substring(0, 80)}...</p>
      </footer>
    </Col>
  );
};

export default Product;
