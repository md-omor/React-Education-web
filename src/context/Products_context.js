// import axios from "axios";
// import React, { useContext, useEffect, useReducer } from "react";
// import reducer from "../reducers/Products_reducers";
// import { products_url } from "../utils/constants";
// import {
//   GET_PRODUCTS_BEGIN,
//   GET_PRODUCTS_SUCCESS,
//   GET_PRODUCTS_ERROR,
//   GET_SINGLE_PRODUCT_BEGIN,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_ERROR,
// } from "../actions";

// const initialState = {
//   products_loading: false,
//   products_error: false,
//   products: [],
//   fetured_products: [],
//   single_product_loading: false,
//   single_product_error: false,
//   single_product: [],
// };

// const ProductsContext = React.createContext();

// export const ProductsProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   /* -------------------------------------------------------------------------- */
//   /*                              home page product                             */
//   /* -------------------------------------------------------------------------- */

// const fetchProduct = async (products_url) => {
//   dispatch({ type: GET_PRODUCTS_BEGIN });

//   try {
//     const response = await axios.get(products_url);
//     const products = response.data;
//     dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
//   } catch (error) {
//     dispatch({ type: GET_PRODUCTS_ERROR });
//   }
// };

//   /* -------------------------------------------------------------------------- */
//   /*                               single product                               */
//   /* -------------------------------------------------------------------------- */

//   const fecthSingleProducts = async (products_url) => {
//     dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

//     // const response = await axios.get(products_url);
//     // console.log(response);

//     try {
//       const response = await axios.get(products_url);
//       // console.log(response);
//       const singleProduct = response.data;
//       console.log(singleProduct);
//       dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
//     } catch (error) {
//       dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
//     }
//   };

//   useEffect(() => {
//     fetchProduct(products_url);
//   }, []);

//   useEffect(() => {
//     fecthSingleProducts(products_url);
//   }, []);

//   return (
//     <ProductsContext.Provider value={{ ...state, fecthSingleProducts }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// // make sure use
// export const useProductsContext = () => {
//   return useContext(ProductsContext);
// };

import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/Products_reducers";
import { products_url as url } from "../utils/constants";
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
  proucts_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* -------------------------------------------------------------------------- */
  /*                              home page product                             */
  /* -------------------------------------------------------------------------- */

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });

    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  // const fetchProduct = async (products_url) => {
  //   dispatch({ type: GET_PRODUCTS_BEGIN });

  //   try {
  //     const response = await axios.get(products_url);
  //     const products = response.data;
  //     dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
  //   } catch (error) {
  //     dispatch({ type: GET_PRODUCTS_ERROR });
  //   }
  // };

  /* -------------------------------------------------------------------------- */
  /*                               single product                               */
  /* -------------------------------------------------------------------------- */

  const fecthSingleProducts = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      console.log(singleProduct);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fecthSingleProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
