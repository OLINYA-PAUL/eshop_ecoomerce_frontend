import React from "react";
import Header from "../layout/Header";
import Hero from "../../components/Routes/Hero/Hero";
import Categories from "../../components/Routes/Categories/Categories";
import BestDeals from "../../components/Routes/BestDeals/BestDeals";

const Home = () => {
  return (
    <div className="w-full text-white bg-secondary relative h-auto">
      <Header activeHeader={1} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default Home;
