import React from "react";
//import { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/styles";
import { AiOutlineMessage } from "react-icons/ai";

const ProductDetailsCard = ({ setOpen, data }) => {
  //const [count, setCount] = useState(1);
  //const [click, setClick] = useState(false);
  //const [select, setSelect] = useState(false);
  const handleMessageSubmit = () => {};
  return (
    <div className="bg-white">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#797575] bg-opacity-90 z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50"
              onClick={() => setOpen(false)}
            />
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%] ml-2">
                <img src={data.image_Url[0].url} alt="" />
                <div className="flex ">
                  <img
                    src={data.shop.shop_avatar.url}
                    alt=""
                    className="w-[70px] h-[70px] rounded-full mr-2"
                  />
                  <div>
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-3 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                  
                </div>
                <div className={`${styles.button} bg-black mt-4 rounded-[4px] h-11`}
                  onClick={handleMessageSubmit}>
                    <span className="text-white flex items-center">
                        Send Message <AiOutlineMessage className="ml-1" />
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
