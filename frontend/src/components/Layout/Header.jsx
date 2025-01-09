import React from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { productData } from "../../static/data";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "./DropDown.jsx";
import { categoriesData } from "../../static/data";
import Navbar from "./Navbar.jsx";
import { CgProfile } from "react-icons/cg";

const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchData, setSearchData] = React.useState(null);
  const [active, setActive] = React.useState(false);
  const [dropDown, setDropDown] = React.useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const fillterProducts =
      productData &&
      productData.filter((product) => {
        return product.name.toLowerCase().includes(term.toLowerCase());
      });
    setSearchData(fillterProducts);
    console.log(searchData);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <div className={styles.section}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <div>
          <Link to="/">
            <img src="/logo.jpg" alt="logo" className="h-[75px] rounded-full" />
          </Link>
        </div>
        <div className="w-[50%] relative">
          <input
            type="text"
            className="w-full h-[40px] rounded-lg border border-gray-700 px-4"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          ></AiOutlineSearch>
          {searchData ? (
            <div className="absolute  bg-slate-400 shadow-sm-2  p-4 rounded-xl m-2">
              {searchData.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between my-2"
                >
                  <img
                    src={product.image_Url[0].url}
                    alt=""
                    className="h-10 w-10"
                  />
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className={styles.button}>
          <Link to="/seller">
            <h1 className="text-white flex items-center">
              Become Seller <IoIosArrowForward className="ml-1" />
            </h1>
          </Link>
        </div>
      </div>
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 w-full z-10" : null
        } transition hidden 800px:block items-center justify-between bg-blue-400 h-[50px]`}
      >
        <div
          className={
            styles.section +
            " relative " +
            styles.normalFlex +
            " justify-between"
          }
        >
          <div className="relative h-[40px] mt-[10px] w-[270px] hidden 1000px:block">
            <BiMenuAltLeft size={30} className="absolute top-2 left-2 " />
            <button className="h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md">
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown ? (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            ) : null}
          </div>
          <div className={`${styles.normalFlex} `}>
            <Navbar active={activeHeading} />
          </div>
          <div className="flex">
            <div className={styles.normalFlex}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineHeart
                 size={30}
                 color="rgb(255 255 255 / 83%)" />
                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1">
                    0
                 </span>
              </div>
            </div>
            <div className={styles.normalFlex}>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineShoppingCart
                 size={30}
                 color="rgb(255 255 255 / 83%)" />
                 <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1">
                    0
                 </span>
              </div>
            </div>
            <div className={styles.normalFlex}>
              <div className="relative cursor-pointer mr-[15px]">
                <CgProfile
                 size={30}
                 color="rgb(255 255 255 / 83%)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
