import React from "react";
import Header from "../layout/Header";
import Hero from "../../components/Routes/Hero/Hero";
import Categories from "../../components/Routes/Categories/Categories";
import BestDeals from "../../components/Routes/BestDeals/BestDeals";
import FeatureProducts from "../../components/Routes/FeatureProducts/FeatureProducts";
import Events from "../../components/Routes/Events/Events";
import Sponsored from "../../components/Routes/Sponsored/Sponsored";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div className="w-full text-white bg-secondary relative h-auto">
      <Header activeHeader={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeatureProducts />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default Home;
