import React from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchData, setSearchData] = React.useState(null);

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

  return (
    <div className={styles.section}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        <div>
          <Link to="/">
            <img src="/logo.jpg" alt="logo" className="h-[50px]" />
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
        <div className={styles.button }>
          <Link to="/seller">
          <h1 className="text-white flex items-center">
            Become Seller <IoIosArrowForward className="ml-1" />
          </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
