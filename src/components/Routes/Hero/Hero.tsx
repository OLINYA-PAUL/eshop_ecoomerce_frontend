import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: "",
        // "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-white font-[600] capitalize`}
        >
          Discover the Best Deals <br /> on Everyday Essentials & More!
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-white">
          From the latest gadgets to home essentials, find everything you need
          in one place. Shop top-quality products at unbeatable prices and enjoy
          a seamless shopping experience!
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px] font-semibold">
              Shope Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
