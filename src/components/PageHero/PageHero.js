import React from "react";
import "./PageHero.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PageHero = ({ title, product }) => {
  return (
    <div className="pageHero">
      <Container className="pageHero__container">
        <Row>
          <Col sm={12} md={12}>
            <h3 className="pageHero_h3">
              <Link to="/" className="pageHero__link">
                Home
              </Link>
              {product && (
                <Link to="/products" className="pageHero__link">
                  {" "}
                  / Products
                </Link>
              )}{" "}
              / {title}
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageHero;
