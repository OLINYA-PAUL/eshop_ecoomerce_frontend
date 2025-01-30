import React, { SetStateAction } from "react";
import { Category } from "../../static/data";
import { useNavigate } from "react-router-dom";

interface CategoriesType {
  categoriesData: Category[];
  setDropDownMenu: React.Dispatch<SetStateAction<boolean>>;
}

const DropDown = ({ categoriesData, setDropDownMenu }: CategoriesType) => {
  const navigate = useNavigate();

  const handleSubmit = (category: Category) => {
    navigate(`/products?category=${category.title}`);
    setDropDownMenu(false);
    window.location.reload();
  };

  return (
    <div className="w-full bg-inputColor mt-[50px] h-auto absolute mb-20 top-5 p-5 left-0 z-10 overflow-y-auto">
      {categoriesData &&
        categoriesData.map((category: Category) => (
          <div
            key={category.id}
            className="text-white text-[14px] font-semibold cursor-pointer hover:text-primaryColor flex items-center justify-start p-3 text-left"
            onClick={() => handleSubmit(category)}
          >
            <div>
              <img
                src={category.image_Url}
                alt="categoriesImage"
                className="w-5 h-5 rounded-md my-auto object-contain mr-3 "
              />
            </div>
            <h2>{category.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
