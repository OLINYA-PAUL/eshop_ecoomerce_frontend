import React, { useState } from "react";
import { ProductTypes } from "../../../static/data";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Ratings from "../Rating/Rating";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductCard = ({ items }: { items: ProductTypes }) => {
  const [isClick, setisClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const productName = items.name;

  const product_name = productName.replace(/\s+/g, "_");

  const closeModel = (e: any) => {
    if (e.target.id === "close") {
      setIsOpen(false);
    }
  };

  console.log("product_name ------>>", product_name);
  // items.image_Url && items.image_Url[0].url;
  return (
    <div className="w-full h-auto rounded-md p-5 bg-inputColor mb-5 ">
      <div className="flex items-start justify-between gap-3">
        <Link to={`/product/${product_name}`}>
          <div className="w-full h-auto">
            <img
              src={require("../../../static/images/brush.jpg")}
              alt="bestdeal products"
              className="w-[170px] h-[170px] rounded-md object-cover mr-2"
            />
          </div>
        </Link>
        <div className={`${styles.noramlFlex} flex-col justify-center`}>
          <div>
            {isClick ? (
              <div>
                <AiFillHeart
                  size={20}
                  className={`${
                    isClick ? "text-red-400" : "text-green-400"
                  } cursor-pointer`}
                  title="Remove from wishlist"
                  onClick={() => setisClick((pre) => !pre)}
                />
              </div>
            ) : (
              <div>
                <AiOutlineHeart
                  size={20}
                  className={`${
                    isClick ? "text-red-400" : "text-green-400"
                  } cursor-pointer`}
                  title="Add from wishlist"
                  onClick={() => setisClick((pre) => !pre)}
                />
              </div>
            )}
            <div className="mt-2">
              <AiOutlineEye
                size={20}
                className={`${
                  isOpen ? "text-red-400" : "text-green-400"
                } cursor-pointer`}
                title="Quick View"
                onClick={() => setIsOpen((pre) => !pre)}
              />
            </div>
            <div className="mt-2">
              <AiOutlineShoppingCart
                size={20}
                className={`${
                  isOpen ? "text-red-400" : "text-green-400"
                } cursor-pointer`}
                title="Add to Cart"
                onClick={() => setIsOpen((pre) => !pre)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/"}>
          <div className={styles.shop_name}>
            <h1>{items.shop.name}</h1>
          </div>
        </Link>
        <Link to={`/product/${product_name}`}>
          <div className={"text-sm"}>
            <h1>
              {items.name.length > 40
                ? items.name.slice(0, 40) + "..."
                : items.name}
            </h1>
          </div>
        </Link>
        <div className="w-full mt-5">
          <Ratings rating={items.rating} />
        </div>
        <div className={`${styles.noramlFlex} justify-between mt-5 `}>
          <div className="flex">
            <h3 className={styles.productDiscountPrice}>
              ${items.price === 0 ? items.price : items.discount_price}
            </h3>
            <h3 className={styles.price}>
              {items.price ? items.price + "$" : null}
            </h3>
          </div>
          <span className="font-bold text-sm text-green-400">
            {items.total_sell} Sold
          </span>
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center "
          id="close"
          onClick={closeModel}
        >
          <div className="bg-white p-4 rounded-md w-full max-h-screen">
            <h2 className="text-lg font-bold mb-2">Quick View</h2>
            <p className="text-sm">{items.name}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
