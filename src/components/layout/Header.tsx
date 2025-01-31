import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import {
  productData,
  ProductTypes,
  categoriesData,
  navItems,
} from "../../static/data";
import { MdManageSearch } from "react-icons/md";
import { UseDebounce } from "../../util/useDebounce";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown";
import NavBar from "./NavBar";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = ({ activeHeader }: { activeHeader: number }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState<ProductTypes[]>([]);
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const [DropDownMenu, setDropDownMenu] = useState(false);

  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActiveMenu(true);
      } else {
        setActiveMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const debouncedSearchTerm = UseDebounce(searchTerm, 500);

  const handleSearchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;

    setSearchTerm(term);

    const filteredProduct = productData.filter((product: ProductTypes) => {
      return product.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());
    });

    if (filteredProduct.length !== 0 && debouncedSearchTerm !== "")
      setSearchData(filteredProduct);
    else setSearchData([]);
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className="hidden shadow-md p-5 800px:flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="w-[50%] relative">
            <div className="flex items-center justify-center w-full  bg-inputColor px-5 rounded-md">
              <input
                type="text"
                className={`${styles.input} p-3 px-0`}
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchProduct}
              />
              <MdManageSearch
                color="gray"
                size={20}
                className="ml-5 cursor-pointer"
              />
            </div>
            {searchData && searchData.length !== 0 ? (
              <div className="w-full absolute right-2 left-0.5 shadow-lg z-[10] p-4">
                {searchData &&
                  searchData.map((product, index) => {
                    const products = product.name;

                    const product_name = products.replace(/\s+/g, "-");

                    return (
                      <div className="w-full bg-inputColor" key={product.id}>
                        <Link to={`/product/${product_name}`}>
                          <div className="flex items-start p-3">
                            <img
                              src={product.image_Url[0].url}
                              alt="product_image"
                              className="w-40 h-40 mr-[10px]"
                            />
                            <h2>{product.name}</h2>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            ) : null}
          </div>

          <div className="">
            <Link to={"/sellers"}>
              <button
                type="button"
                className={`${styles.button} shadow-2xl font-bold`}
              >
                Become seller
                <IoIosArrowForward color="white" size={20} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={` ${
          activeMenu === true
            ? "fixed top-0 left-0 shadow-md z-10 transition duration-150 "
            : ""
        } hidden  bg-primary relative shadow-md 800px:my-[10px] px-20 text-center 800px:flex items-center justify-between w-full `}
      >
        <div className=" rounded-tl-2xl p-4 rounded-tr-2xl relative  w-[270px] flex items-center justify-between  bg-inputColor">
          <BiMenuAltLeft color="white" size={30} />
          <button
            type="button"
            className="h-[100%]  bg-transparent w-full transition-all text-white duration-150 font-sans text-lg select-none "
            onClick={() => setDropDownMenu((pre) => !pre)}
          >
            All Cateories
          </button>

          {DropDownMenu && (
            <DropDown
              categoriesData={categoriesData}
              setDropDownMenu={setDropDownMenu}
            />
          )}
        </div>
        <div className={`${styles.noramlFlex} justify-between`}>
          <NavBar navItems={navItems} activeHeader={activeHeader} />
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div className="relative cursor-pointer mr-[15px]">
            <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
            <span className="absolute right-0 top-0 rounded-full bg-green-400 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              0
            </span>
          </div>
          <div className="relative cursor-pointer mr-[15px]">
            <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
            <span className="absolute right-0 top-0 rounded-full bg-green-400 w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
              0
            </span>
          </div>
          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
              {isAuthenticated ? (
                <Link to="/profile">
                  <img
                    src={`${""}`}
                    className="w-[35px] h-[35px] rounded-full"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="/sign-in">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
