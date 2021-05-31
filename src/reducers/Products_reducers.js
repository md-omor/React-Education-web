import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const Products_reducers = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }

  // home page product

  if (action.type === GET_PRODUCTS_SUCCESS) {
    const fetured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      fetured_products,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, proucts_error: true };
  }

  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default Products_reducers;
