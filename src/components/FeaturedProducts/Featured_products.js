import React from "react";
import "./Featured_products.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useProductsContext } from "../../context/Products_context";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Product from "../Products/Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    proucts_error: error,
    fetured_products: products,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <Container className="featured__container">
        <Row>
          {/* // {console.log(products) */}
          <Col sm={12} md={6}>
            <h1 className="featured__h1">Popular Online Courses</h1>
          </Col>
          <Col sm={12} md={6}>
            <p className="featured__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dicta
              incidunt quos neque adipisci natus sit.
            </p>
          </Col>
          {products.map((product) => {
            return <Product key={product.id} {...product} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default FeaturedProducts;
