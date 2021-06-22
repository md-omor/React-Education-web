import React from "react";
import "./Filter.css";
import { useFilterContext } from "../../context/Fillter_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

const Filter = () => {
  const {
    filters: { text, company, category, min_price, max_price, price, shipping },
    updateFilters,
    clearFilters,
    all_product,
  } = useFilterContext();

  const categories = getUniqueValues(all_product, "category");
  const companies = getUniqueValues(all_product, "company");
  // const colors = getUniqueValues(all_product, "colors");

  return (
    <Wrapper>
      <div className="filter">
        <div className="content">
          <form onSubmit={(e) => e.preventDefault()}>
            {/* search input */}
            {/* <div className="form_control">
              <input
                type="text"
                name="text"
                placeholder="search"
                serach-inout
                value={text}
                onChange={updateFilters}
                className="search-input"
              />
            </div> */}
            {/* end search input */}

            {/* clear all */}
            <button className="clear-btn" type="button" onClick={clearFilters}>
              clear filters
            </button>
            {/* end of clear all */}

            {/* companies */}

            <div className="form_control">
              <h5>company</h5>
              <select
                name="company"
                value={company}
                onChange={updateFilters}
                className="company"
              >
                {companies.map((c, index) => {
                  return (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* end of companies */}
            {/* categories */}
            <div className="form_control">
              <h5>category</h5>
              <div>
                {categories.map((c, index) => {
                  return (
                    <button
                      key={index}
                      onClick={updateFilters}
                      name="category"
                      type="button"
                      className={`${
                        category === c.toLowerCase() ? "active" : null
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* end of categories */}

            {/* colors */}
            {/* <div className="form_control">
              <h5>colors</h5>
              <div className="colors">
                {colors.map((c, index) => {
                  if (c === "all") {
                    return (
                      <button
                        key={index}
                        name="color"
                        onClick={updateFilters}
                        data-color="all"
                        className={`${
                          color === "all" ? "all-btn active" : "all-btn"
                        }`}
                      >
                        all
                      </button>
                    );
                  }
                  return (
                    <button
                      key={index}
                      name="color"
                      style={{ background: c }}
                      className={`${
                        color === c ? "color-btn active" : "color-btn"
                      }`}
                      data-color={c}
                      onClick={updateFilters}
                    >
                      {color === c ? <FaCheck /> : null}
                    </button>
                  );
                })}
              </div>
            </div> */}
            {/* end of  colors */}
            {/* price */}
            {/* <div className="form_control">
              <h5>price</h5>
              <p className="price">{formatPrice(price)}</p>
              <input
                type="range"
                name="price"
                min={min_price}
                max={max_price}
                onChange={updateFilters}
                value={price}
              />
            </div> */}
            {/* end of price */}
            {/* shipping */}
            {/* <div className="form_control shipping">
              <label htmlFor="shipping">free shipping</label>
              <input
                type="checkbox"
                name="shipping"
                id="shipping"
                onChange={updateFilters}
                checked={shipping}
              />
            </div> */}
            {/* end of shipping */}
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .filter {
    margin-top: 185px;
  }

  .form_control {
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: #00c851;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    color: #fff;
    outline: none;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filter;
