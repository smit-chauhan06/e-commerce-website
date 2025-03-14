"use client";
import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { GrCart } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import "./style.css";

const CHeader = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col  sticky top-0 right-0 z-10 bg-whiteColor sm:shadow-md">
      <div className="w-[100%] flex justify-center flex-col items-center">
        <div className="bg-blackColor flex justify-center items-center w-[100%] pt-2 pb-2 pl-5 pr-5">
          <span className="text-whiteColor font-raleway xxs:text-[12px] md:text-[16px] text-center">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
        </div>

        <div className="flex justify-between items-center content-div md:pt-5 md:pb-5 py-3">
          <span>Exclusive</span>
          {screenWidth > 600 && (
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="What are you looking for?"
              className="bg-lightGrey p-[10px] rounded-md text-[14px] min-w-[60%] border-gray-400 text-blackColor focus:outline-none font-extralight"
            />
          )}
          <div className="flex gap-5 items-center">
            <FaRegUserCircle className="text-blackcolor  text-[22px] md:text-[25px]" />
            <GrFavorite className="text-blackcolor  text-[22px] md:text-[25px]" />
            <GrCart className="text-blackcolor  text-[22px] md:text-[25px]" />
          </div>
        </div>
      </div>
      {screenWidth < 600 && (
        <div className="w-[90vw] flex justify-center items-center mt-[5px] mb-[15px]">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="What are you looking for?"
            className="bg-lightGrey p-[10px] rounded-md text-[14px] min-w-[100%] border-gray-400 text-blackColor focus:outline-none font-extralight"
          />
        </div>
      )}
    </div>
  );
};

export default CHeader;
