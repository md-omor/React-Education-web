import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/Products_reducers";
import { products_url } from "../utils/constants";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  fetured_products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Home page product

  const fetchProduct = async (products_url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      const response = await axios.get(products_url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProduct(products_url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
