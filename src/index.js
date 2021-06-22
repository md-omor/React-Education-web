import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import { AppProvider } from "./context/Header_context";
import { ProductsProvider } from "./context/Products_context";
import { FilterProvider } from "./context/Fillter_context";
import { CartProvider } from './context/Cart_context'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ProductsProvider>
        <FilterProvider>
        <CartProvider>
        <App />
        </CartProvider>
         
        </FilterProvider>
      </ProductsProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
