import React, { useState } from "react";
import "./ProductImages.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setmain] = useState(images[0]);
  return (
    <div className="main__product_img">
      <div className="productImage">
        <img src={main.url} alt="main img" className="main" />
      </div>
      <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setmain(images[index])}
              className={`${image.url === main.url ? "images__active" : null}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
