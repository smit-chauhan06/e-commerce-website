import Image from "next/image";
import React from "react";
import { GrCart, GrFavorite } from "react-icons/gr";
import CRating from "../CRating";

interface propTypes {
  productsData: {
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    rating: number;
    noRating: number;
    discount: number;
    isAddedToCart: boolean;
    image: string;
  };
  isShowFavorite: boolean;
  isShowCart: boolean;
  showRating: boolean;
}

const CCard = (props: propTypes) => {
  const {
    productsData,
    isShowFavorite = true,
    isShowCart = true,
    showRating = true,
  } = props;

  return (
    <div className="min-w-[250px]">
      <div className="relative rounded-md w-full h-[250px] flex justify-center items-center p-[20px] bg-lightGrey">
        <div className="bg-cardPriceColor absolute left-[10px] top-[10px]  pt-2 pb-2 pl-3 pr-3 text-[12px] flex justify-center items-center rounded-md">
          <span className="text-whiteColor mt-[1px]">-</span>
          <span className="font-raleway text-whiteColor">
            {productsData?.discount}
          </span>
          <span className="text-whiteColor mt-[2px]">%</span>
        </div>
        <div className="absolute right-[10px] top-[10px] ">
          {isShowFavorite && (
            <div className="bg-whiteColor   p-2 text-[12px] flex justify-center items-center rounded-[50%]">
              <GrFavorite className="text-blackColor text-[22px]" />
            </div>
          )}
          {isShowCart && (
            <div
              className={`bg-whiteColor p-2 text-[12px] flex justify-center items-center rounded-[50%]  mt-3`}
            >
              <GrCart className="text-blackColor text-[20px]" />
            </div>
          )}
        </div>
        <Image
          src={productsData?.image}
          alt="product"
          width={130}
          height={100}
          className="object-contain w-[65%] h-[65%]"
        />
      </div>
      <div className="pl-2 pt-5 flex flex-col">
        <span className="font-semibold text-[16px] text-ellipsis">
          {productsData?.name}
        </span>
        <div className="mt-1 mb-1 flex items-center gap-2">
          <span className="font-raleway text-[20px] text-cardPriceColor">
            ${productsData?.price}
          </span>
          <p className="line-through text-[16px] text-greyText">
            ${productsData?.oldPrice}
          </p>
        </div>
        {showRating && (
          <div className="pb-3 mt-1">
            <CRating
              totalStar={5}
              rating={productsData?.rating}
              ratedCount={productsData?.noRating}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CCard;
