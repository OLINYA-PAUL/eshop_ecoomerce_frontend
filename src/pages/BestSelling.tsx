import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import styles from "../styles/styles";
import { useSearchParams } from "react-router";
import { productData, ProductTypes } from "../static/data";
import ProductCard from "../components/Routes/ProductCard/ProductCard";

const BestSelling = () => {
  const [data, setData] = useState<ProductTypes | any>([]);

  useEffect(() => {
    const product =
      productData &&
      productData.sort(
        (a: ProductTypes, b: ProductTypes) => b.total_sell - a.total_sell
      );
    setData(product);
  }, []);
  return (
    <div className="w-full h-auto">
      <Header activeHeader={2} />
      <div className={`${styles.section} mt-10`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] ">
          {data &&
            data.map((items: ProductTypes) => (
              <ProductCard items={items} key={items.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
