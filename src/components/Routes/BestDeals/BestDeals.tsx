import { useEffect, useState } from "react";
import { ProductTypes, productData } from "../../../static/data";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

const BestDeals = () => {
  const [data, setData] = useState<ProductTypes[]>([]);

  useEffect(() => {
    const products = productData.sort(
      (a: ProductTypes, b: ProductTypes) => b.total_sell - a.total_sell
    );
    const getFiveProduct = products.slice(0, 5);
    if (getFiveProduct) setData(getFiveProduct);
  }, []);
  console.log("items ------>>", data);
  return (
    <div className={`${styles.section} bg-primary h-auto p-5 rounded-md `}>
      <div className={`${styles.heading}`}>
        <h1>Best Deals</h1>
      </div>

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] ">
        {data.map((items: ProductTypes) => (
          <ProductCard items={items} />
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
