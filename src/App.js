import "./App.css";
import Home from "./pages/HomePages/Home";
import AboutPage from "./pages/AboutPage/AboutPage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from './pages/CartPage/CartPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main_navbar from "./components/Navbar/Main_navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router className="App">
      <Main_navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/products">
          <ProductsPage />
        </Route>
        <Route exact path="/products/:id" children={<SingleProductPage />} />
        <Route exact path="/cart">
          <CartPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
