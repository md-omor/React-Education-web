import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  /* ------------------------------ products load ----------------------------- */

  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_product: [...action.payload],
      filterd_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }

  /* --------------------------- grid and list view --------------------------- */

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  /* ------------------------------- sort update ------------------------------ */

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  /* ------------------------------ sort porduct ------------------------------ */

  if (action.type === SORT_PRODUCTS) {
    const { sort, filterd_products } = state;
    let tempProducts = [...filterd_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filterd_products: tempProducts };
  }

  /* ----------------------------- update filters ----------------------------- */

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  /* ----------------------------- filter products ---------------------------- */

  if (action.type === FILTER_PRODUCTS) {
    console.log("filtering product");
    const { all_product } = state;
    const { text, category, company, color, price, shipping } = state.filters;

    let tempProducts = [...all_product];
    // filtering
    // text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }

    // category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    // company
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    // color
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
        // console.log(product)
      });
    }

    // price
    tempProducts = tempProducts.filter((product) => product.price <= price);

    // shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return { ...state, filterd_products: tempProducts };
  }

  /* ------------------------------ clear filters ----------------------------- */

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }

  // return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
