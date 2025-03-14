import Image from "next/image";
import React from "react";

interface propTypes {
  productsData: {
    id: number;
    name: string;
    price: string;
    image: string;
  };
  onDealCardClick: () => void;
}

const DealCard = (props: propTypes) => {
  const { productsData = {}, onDealCardClick = () => {} } = props;
  return (
    <div
      className="min-w-[170px] max-h-[250px] h-full xs:min-w-[230px] flex flex-col justify-center items-center border rounded-md cursor-pointer hover:shadow-lg group"
      onClick={() => {
        onDealCardClick();
      }}
    >
      <div className="w-[60%] h-[60%] transform transition duration-300 group-hover:scale-110">
        <Image
          src={productsData?.image}
          alt="product"
          width={100}
          height={100}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="text-center mt-[10px]">
        <p className="text-[18px] font-medium mt-2">{productsData.name}</p>
        <p className="text-[15px] text-greyText">{productsData.price}</p>
      </div>
    </div>
  );
};

export default DealCard;
