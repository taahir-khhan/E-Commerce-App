import React, { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { shopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(shopContext);

  return showSearch ? (
    <div className="bg-gray-50 border-t border-b text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-6 py-3 mx-4 my-6  rounded-full w-3/4  sm:w-1/2">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img className="w-4" src={assets.search_icon} alt="search-icon" />
      </div>
      <img
        className="cursor-pointer w-3 inline"
        src={assets.cross_icon}
        alt="cross icon for search bar"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
