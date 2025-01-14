import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard.jsx";

const ProductCard = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.split(" ").join("-").toLowerCase();
  return (
    <>
      <div className="w-full h-[360px] bg-white shadow-md rounded-md p-3 cursor-pointer relative">
        <div className="flex justify-End"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className="w-full h-[170px] object-contain"
          />
        </Link>
        <Link>
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to={`/product/${product_name}`}>
          <h4 className="pb-3 font-[500] ">
            {data.name.length > 45 ? data.name.slice(0, 45) + "..." : data.name}
          </h4>
          <div className="flex">
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
            <AiFillStar
              className="mr-2 cursor-pointer"
              color="#F6BA00"
              size={20}
            />
          </div>

          <div className="py-2 flex items-center justify-between">
            <div className="flex">
              <h5 className={styles.productDiscountPrice}>
                {data.price === 0 ? data.price : data.discount_price}$
              </h5>
              <h4 className={styles.price}>
                {data.price ? data.price + "$" : null}
              </h4>
            </div>
            <span className="font-[400] text-[#21837e] text-[17px]">
              {data.total_sell} sold
            </span>
          </div>
        </Link>
          {/* side options */}
          <div >
           {
           click ? (
            <AiFillHeart
            size={22}
            className="cursor-pointer absolute right-3 top-4"
            onClick={()=>setClick(!click)}
            color={click?"red":"#333"}
            title="Remove from wishlist"/>
           ):(
              <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-3 top-4"
              onClick={()=>setClick(!click)}
              color={click?"red":"#333"}
              title="Add to wishlist"/>
           )
           }
           <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-3 top-12"
            onClick={()=>setOpen(!open)}
            color="#333"
            title="Quick view"/>
            <AiOutlineShoppingCart
            size={22}
            className="cursor-pointer absolute right-3 top-20"
            onClick={()=>setOpen(!open)}
            color="#444"
            title="Add to cart"/>
          </div>
          {
          open ? (
            <ProductDetailsCard setOpen={setOpen} data={data}/>
          ): null
        }
      </div>
    </>
  );
};

export default ProductCard;
