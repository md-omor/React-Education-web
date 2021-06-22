import React from "react";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div className="listview">
        {products.map((product) => {
          const { id, image, name, price, description } = product;
          return (
            <article key={id} className="list__view_article">
              <div className="list__view_img">
                <img src={image} alt={name} />
              </div>
              <div className="list__view_compo">
                <h4>{name}</h4>
                <h5 className="price">{formatPrice(price)}</h5>
                <p>{description.substring(1, 150)}...</p>
                <Link to={`/products/${id}`} className="list__view_btn">
                  Details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .list__view_img {
    width: 580px;
  }

  .list__view_img img {
    width: 90%;
    height: 220px;
    object-fit: cover;
    border-radius: 3px;
  }

  .list__view_compo {
    margin-left: -5px;

    p {
      font-family: "Roboto";
      font-weight: 400;
      letter-spacing: 1px;
      word-spacing: 1px;
      font-size: 15px;
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }

  article.list__view_article {
    display: flex;
    margin: 0px 0;
    justify-content: center;
    align-items: center;
    margin: 70px 0;

    h4 {
      color: #102a42;
      font-size: 22px;
      font-family: "Quicksand";
      font-weight: 600;
      letter-spacing: 0px;
    }
  }

  a.list__view_btn {
    background: #ff7116;
    padding: 7px 20px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    font-family: "Quicksand";
    font-weight: 600;
  }
`;

export default ListView;
