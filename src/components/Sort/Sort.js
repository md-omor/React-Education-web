import React from "react";
import "./Sort.css";
import { useFilterContext } from "../../context/Fillter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";

const Sort = () => {
  const {
    filterd_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="product__page__sort">
        <div className="btn_container">
          <button
            type="button"
            className={`${grid_view ? "active" : null}`}
            onClick={setGridView}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            className={`${!grid_view ? "active" : null}`}
            onClick={setListView}
          >
            <BsList />
          </button>
        </div>
        <p>{products.length} produts found</p>
        <hr />
        <form>
          <label htmlFor="sort" className="sort">
            sort by
          </label>
          <select
            name="sort"
            className="sort_input"
            value={sort}
            onChange={updateSort}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a-z)</option>
            <option value="name-z">name (z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .product__page__sort {
    display: flex;
    align-items: center;
    margin: 40px 0px;
    margin-top: 80px;

    form {
      margin-left: 120px;
    }

    hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 1px solid rgb(116 118 119 / 15%);
      width: 500px;
    }

    p {
      margin: 0;
      font-family: "Quicksand";
      font-weight: 600;
    }
  }

  .btn_container {
    margin-right: 30px;

    button {
      margin-right: 11px;
      padding: 1px 4px;
      outline: none;
      border: 1px solid #2b2a2aab;
      border-radius: 4px;
    }
  }

  label.sort {
    margin-right: 10px;
    font-size: 17px;
    font-family: "Quicksand";
    font-weight: 600;
    color: #102a42;
  }

  select.sort_input {
    font-family: "Quicksand";
    font-weight: 600;
    border: 1px solid #6a6a6a;
    border-radius: 2px;
    outline: none;
  }
`;

export default Sort;
