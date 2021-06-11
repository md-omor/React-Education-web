import React from "react";
import "./ProductList.css";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import { useFilterContext } from "../../context/Fillter_context";

const ProductList = () => {
  const { filterd_products: products, grid_view } = useFilterContext();

  if (products.length < 1) {
    return (
      <h4 style={{ textTransform: "none" }}>
        Sorry, no products matched your search....
      </h4>
    );
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }

  return (
    <GridView products={products}>
      <h1>ProductList</h1>
    </GridView>
  );
};

export default ProductList;
