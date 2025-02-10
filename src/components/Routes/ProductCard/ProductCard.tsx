import React, { useState } from "react";
import { ProductTypes } from "../../../static/data";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Ratings from "../Rating/Rating";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const ProductCard = ({ items }: { items: ProductTypes }) => {
  const [isClick, setisClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);

  const productName = items.name;

  const product_name = productName.replace(/\s+/g, "_");

  const closeModel = (e: any) => {
    if (e.target.id === "close" || e.target.id === "model") {
      setIsOpen(false);
    }
  };

  const handleSendMessage = () => {
    alert("message sent");
  };

  const decrementCount = () => {
    if (count < 1) return 1;
    if (count > 1) setCount((prev) => prev - 1);
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  console.log("product_name ------>>", product_name);
  // items.image_Url && items.image_Url[0].url;
  return (
    <div
      className="w-full h-auto rounded-md p-5 bg-inputColor mb-5 "
      id="model"
      onClick={closeModel}
    >
      <div className="flex items-start justify-between gap-3">
        <Link to={`/product/${product_name}`}>
          <div className="w-full h-auto">
            <img
              src={
                (items.image_Url && items.image_Url[0].url) ||
                require("../../../static/images/brush.jpg")
              }
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
          className=" z-10 absolute top-0  left-0 w-full h-[100%] bg-black  bg-opacity-70 flex items-center justify-center "
          id="close"
          onClick={closeModel}
        >
          <div
            title="Click outside to close the model "
            className="bg-inputColor overflow-y-auto p-5 rounded-md w-[90%] 800px:w-[60%] h-[90vh] 800px:h-[75vh] fixed"
          >
            <RxCross2
              className="text-right text-green-400 cursor-pointer absolute right-5 top-5"
              size={40}
              onClick={() => setIsOpen(false)}
            />

            <div className="w-full mt-10  800px:flex items-start justify-between ">
              <div className=" 800px:w-[50%] mr-5">
                <img
                  src={require("../../../static/images/brush.jpg")}
                  alt="product_image"
                  className=" rounded-md "
                />
                <div className="flex items-center justify-start mt-5 gap-3">
                  <div className="mt-3">
                    <img
                      src={
                        require("../../../static/images/brush.jpg") ||
                        items.shop.shop_avatar.url
                      }
                      alt="product_image"
                      className="h-[50px] w-[50px] rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className={`${styles.shop_name}`}>{items.shop.name}</h1>
                    <h1 className={""}>({items.shop.ratings}) Rating</h1>
                  </div>
                </div>
                <button
                  className={
                    "bg-green-400 flex mt-10 items-center gap-2 p-3 outline-none border-none rounded-md cursor-pointer font-semibold text-sm"
                  }
                  onClick={handleSendMessage}
                >
                  Send Message
                  <span>
                    <AiOutlineMessage size={20} color="white" />
                  </span>
                </button>
                <h5 className="mt-3 font-semibold text-lg text-green-400">
                  {items.total_sell} Sold Out
                </h5>
              </div>
              <div className=" 800px:w-[50%] w-full pt-5 pr-[5px] text-white">
                <h1 className={`${styles.productTitle} text-[20px]`}>
                  {items.name}
                </h1>
                <p>{items.description}</p>
                <div className="flex pt-3">
                  <h1
                    className={`${styles.productDiscountPrice} text-[17px]  mt-3`}
                  >
                    ${items.discount_price}
                  </h1>
                  <h3 className={`${styles.price}`}>
                    ${items.price ? items.price : null}
                  </h3>
                </div>
                <div className="flex items-center justify-between pt-10 ">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="bg-gradient-to-r from-teal-100 to-teal-500 text-white font-bold px-4 py-2 rounded-l shadow-lg hover:opacity-75 transition duration-500 ease-in-out cursor-pointer"
                      onClick={decrementCount}
                    >
                      -
                    </button>
                    <span
                      className="bg-green-400 text-white font-medium px-4 py-2 text-center min-w-[40px]
                     "
                    >
                      {count}
                    </span>
                    <button
                      type="button"
                      className="bg-gradient-to-r from-teal-100 to-teal-500 text-white font-bold px-4 py-2 rounded-r shadow-lg hover:opacity-75 transition duration-500 ease-in-out cursor-pointer"
                      onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>

                  <div className=" cursor-pointer ">
                    {isClick ? (
                      <div>
                        <AiFillHeart
                          size={30}
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
                          size={30}
                          className={`${
                            isClick ? "text-red-400" : "text-green-400"
                          } cursor-pointer`}
                          title="Add from wishlist"
                          onClick={() => setisClick((pre) => !pre)}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    className={
                      "bg-red-400 flex mt-10 items-center gap-2 p-3 outline-none border-none rounded-md cursor-pointer font-semibold text-sm"
                    }
                    onClick={handleSendMessage}
                  >
                    Add to Cart
                    <span>
                      <AiOutlineShoppingCart size={20} color="white" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
