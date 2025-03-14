import Image from "next/image";
import React from "react";

interface Offer {
  id: number;
  name: string;
  image: string;
}

interface OfferProps {
  title: string;
  items: Offer[];
}

const OfferContainer: React.FC<OfferProps> = ({ title, items }) => {
  return (
    <div className="grid grid-cols-2 border min-h-[300px] rounded-md">
      <h2 className="col-span-2 font-bold text-[20px] sm:text-[22px] pl-[20px] pt-[20px] pr-[20px]">
        {title}
      </h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center flex-col p-[10px] cursor-pointer mt-[10px]"
        >
          <Image
            src={item.image}
            alt={item.name}
            height={150}
            width={150}
            className="object-contain w-[100%] rounded-md"
          />
          <span className="mt-[12px] text-center text-[12px] md:text-[13px]">
            {item.name}
          </span>
        </div>
      ))}
      <a className="col-span-2 pl-[20px]  pr-[20px] mb-[20px] text-center hover:underline cursor-pointer text-[18px] mt-[10px]">
        See More
      </a>
    </div>
  );
};

export default OfferContainer;
