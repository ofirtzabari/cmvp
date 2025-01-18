import React from "react";
import styles from "../../../styles/styles";
import CountDown from "./CountDown.jsx";

const EventCard = () => {
  return (
    <div className={`w-full block bg-white rounded-lg lg:flex p-2 `}>
      <div className="w-full lg:w-[50%] flex justify-center">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:w-[50%] flex flex-col justify-center pr-8 ">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256GB</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.
        </p>
        <div className="flex py-2 justify-between ">
            <div className="flex">
                <h5 className="font-[500] text-[18px] text-red-500 pt-3 line-through">
                    1099$
                </h5>
                <h5 className="text-[20px] text-green-500 font-bold font-Roboto pt-3">
                    999$
                </h5>
            </div>
            <span className="font-[400] text-[#21837e] text-[17px] pt-3">
                120 sold
            </span>
        </div>
        <CountDown/>
      </div>
    </div>
  );
};

export default EventCard;
