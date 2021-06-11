import React from "react";
import "./ProductsPage.css";
import { Filter, ProductList, Sort, PageHero } from "../../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className="page">
        <div className="section-center products">
          <Filter />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
