import React from "react";
import styles from "../../../styles/styles";
import { productData, ProductTypes } from "../../../static/data";
import ProductCard from "../ProductCard/ProductCard";

const FeatureProducts = () => {
  return (
    <div className={`${styles.section} mt-10 bg-primary rounded-md p-5`}>
      <div className={`${styles.heading}`}>
        <h1>Featured Product</h1>
      </div>
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] ">
        {productData &&
          productData.map((items: ProductTypes) => (
            <ProductCard items={items} key={items.id} />
          ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
