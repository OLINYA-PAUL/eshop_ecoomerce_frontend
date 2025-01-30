import React from "react";
import Header from "../layout/Header";

const Home = () => {
  return (
    <div className="w-full text-white  bg-secondary h-screen max-h-screen overflow-y-auto">
      <Header activeHeader={1} />
    </div>
  );
};

export default Home;
