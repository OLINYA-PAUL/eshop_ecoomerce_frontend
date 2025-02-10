import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import styles from "../styles/styles";
import { useSearchParams } from "react-router";
import { productData, ProductTypes } from "../static/data";
import ProductCard from "../components/Routes/ProductCard/ProductCard";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriesData = searchParams.get("category");

  const [data, setData] = useState<ProductTypes | any>([]);

  useEffect(() => {
    if (categoriesData === null) {
      const product =
        productData &&
        productData.sort(
          (a: ProductTypes, b: ProductTypes) => b.total_sell - a.total_sell
        );
      setData(product);
    } else {
      const product =
        productData &&
        productData.filter(
          (items: ProductTypes) => items.category === categoriesData
        );
      setData(product);
    }
  }, [categoriesData]);
  return (
    <div className="w-full h-auto">
      <Header activeHeader={3} />
      <div className={`${styles.section} mt-10`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] ">
          {data &&
            data.map((items: ProductTypes) => (
              <ProductCard items={items} key={items.id} />
            ))}
        </div>
        <div className="flex items-center justify-center w-full h-auto">
          {data && data.length === 0 && (
            <div className="w-full text-center text-xl text-gray-400">
              {" "}
              No products find
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
