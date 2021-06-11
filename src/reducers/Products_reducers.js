// import {
//   GET_PRODUCTS_BEGIN,
//   GET_PRODUCTS_SUCCESS,
//   GET_PRODUCTS_ERROR,
//   GET_SINGLE_PRODUCT_BEGIN,
//   GET_SINGLE_PRODUCT_SUCCESS,
//   GET_SINGLE_PRODUCT_ERROR,
// } from "../actions";

// const Products_reducers = (state, action) => {
//   if (action.type === GET_PRODUCTS_BEGIN) {
//     return { ...state, products_loading: true };
//   }

//   // home page product

//   if (action.type === GET_PRODUCTS_SUCCESS) {
//     const fetured_products = action.payload.filter(
//       (product) => product.featured === true
//     );
//     return {
//       ...state,
//       products_loading: false,
//       products: action.payload,
//       fetured_products,
//     };
//   }

//   if (action.type === GET_PRODUCTS_ERROR) {
//     return { ...state, products_loading: false, proucts_error: true };
//   }

//   // single product

//   if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
//     return {
//       ...state,
//       single_product_loading: true,
//       single_product_error: false,
//     };
//   }

//   if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
//     return {
//       ...state,
//       single_product_loading: false,
//       single_product: action.payload,
//     };
//   }

//   if (action.type === GET_SINGLE_PRODUCT_ERROR) {
//     return {
//       ...state,
//       single_product_loading: false,
//       single_product_error: true,
//     };
//   }

//   return state;
//   throw new Error(`No Matching "${action.type}" - action type`);
// };

// export default Products_reducers;

import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  // home page product

  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, proucts_error: true };
  }

  // single product

  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }

  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
