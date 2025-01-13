import React from "react";
import styles from "../../../styles/styles";
import { brandingData, categoriesData } from "../../../static/data";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const Navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto">
      <div className={`${styles.section} hidden sm:block`}>
        <div className="branding my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-sm ">
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className={`${styles.section} bg-white p-5 rounded-lg mb-12`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap[20px] xl:grid-cols-5 xl:gap-[30px]">
          {
          categoriesData &&
            categoriesData.map((i, index) => {
              const handleSubmit = (i) => {
                Navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={index.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className="text-[18px] leading-[1.3]">{i.title}</h5>
                  <img
                    src={i.image_Url}
                    alt=""
                    className="h-[120px] w-[120px] object-cover"
                  />
                </div>
              );
            })
            }
        </div>
      </div>
    </div>
  );
};

export default Categories;
