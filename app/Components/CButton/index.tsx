import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../../public/Lottie/white-lottie.json";

interface propTypes {
  onClick?: () => void;
  title?: string;
  loader?: boolean;
  className?: string;
}

const CButton = (props: propTypes) => {
  const { onClick = () => {}, title = "", loader = false, className } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={`w-[100%] flex justify-center items-center ${className} `}>
      <button
        onClick={() => {
          onClick();
        }}
        className="bg-cardPriceColor pl-[15px] pr-[15px] pt-[10px] pb-[10px] rounded-md text-whiteColor w-[100%] h-[40px]"
      >
        {loader ? (
          <div className=" w-[200px] relative bottom-[12px]  h-[40px] z-10">
            <Lottie options={defaultOptions} height={50} width="100%" />
          </div>
        ) : (
          title
        )}
      </button>{" "}
    </div>
  );
};

export default CButton;
