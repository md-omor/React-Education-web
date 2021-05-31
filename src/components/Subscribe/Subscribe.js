import React from "react";
import "./Subscribe.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Subscribe = () => {
  return (
    <Container className="subscribe">
      <Row>
        <Col sm={12} md={12}>
          <p className="ssubscribe__title">SUBSCRIBE NOW</p>
        </Col>
        <Col sm={12} md={12}>
          <p className="subs__desc">
            Receive weekly newsletter with educational materials, new courses
            interesting posts, popular books and much more!
          </p>
        </Col>
        <Col sm={12} md={12}>
          <input
            type="email"
            className="subs__input"
            placeholder="Enter your email"
          />
          <button className="subs__btn">SUBSCRIBE</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Subscribe;
