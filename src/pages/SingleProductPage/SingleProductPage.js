import { useEffect } from "react";
import "./SingleProductPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../../context/Products_context";
import { single_product_url as url } from "../../utils/constants";
import { formatPrice } from "../../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddtoCart,
  Stars,
  PageHero,
} from "../../components/index";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fecthSingleProducts,
  } = useProductsContext();

  useEffect(() => {
    fecthSingleProducts(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <div>
      <PageHero title={name} product />
      <Container className="SingleProduct__page">
        <div className="single__btn">
          <Link to="/products" className="singlePage_btn">
            back to exams page
          </Link>
        </div>
        <div className="products__center">
          <Row>
            <Col sm={12} md={5} lg={5} className="single__product">
              <ProductImages images={images} />
            </Col>

            <Col sm={12} md={7} lg={7} className="single__product">
              <section className="content">
                <h2>{name}</h2>
                <Stars stars={stars} reviews={reviews} />
                <h5 className="price"> {formatPrice(price)}</h5>
                <p className="desc">{description}</p>
                <p className="info">
                  <span>Available : </span>
                  {stock > 0 ? "In stock" : "out of stock"}
                </p>
                <p className="info">
                  <span>SKU : </span>
                  {sku}
                </p>
                <p className="info">
                  <span>Brand : </span>
                  {company}
                </p>
                <hr />
                {stock > 0 && <AddtoCart product={product} />}
              </section>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default SingleProductPage;
