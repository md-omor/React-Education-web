import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";
import TrustedSection from "../../components/TrustedSection/TrustedSection";
import Counter from "../../components/Counter/Counter";
import FeaturedProducts from "../../components/FeaturedProducts/Featured_products";
import Testimonial from "../../components/Testimonial/Testimonial";
import Events from "../../components/Events/Events";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <TrustedSection />
      <Counter />
      <FeaturedProducts />
      <Testimonial />
      <Events />
      <Subscribe />
    </div>
  );
};

export default Home;
