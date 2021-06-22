import React from "react";
import "./ProductsPage.css";
import { Filter, ProductList, Sort, PageHero } from "../../components";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <Wrapper>
        <Container className="products__page__container">
          <Row>
            {/* <div className="section-center products"> */}
            <Col sm={12} md={2}>
              <Filter />
            </Col>
            <Col sm={12} md={10}>
              <div>
                <Sort />
                <ProductList />
              </div>
            </Col>
            {/* </div> */}
          </Row>
        </Container>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products__page__container.container {
    max-width: 1305px;
    width: 100%;
  }

  .section-center {
    width: 100%;
    display: flex;
  }
`;

export default ProductsPage;
