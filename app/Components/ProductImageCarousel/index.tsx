"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { isMobile, isTablet } from "react-device-detect";
import { IoIosStar } from "react-icons/io";

interface imageObject {
  id: number;
  image: string;
}

interface imageData {
  images: imageObject[];
}

const ProductImageCarousel = (props: imageData) => {
  const { images } = props;

  const [activeImage, setActiveImage] = useState<string>(images[0]?.image);
  const [activeIndex, setActiveIndex] = useState<number>(images[0]?.id);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="content-div grid grid-cols-1 md:grid-cols-2">
      <div>
        <div className="flex justify-center items-center">
          <Image
            src={activeImage}
            alt="product"
            width={100}
            height={100}
            className="object-contain w-[100%] max-w-[300px] max-h-[300px] sm:max-w[400px] sm:max-h-[400px] md:max-w-[560px] h-[100%] md:max-h-[500px]"
          />
        </div>
        <div className="flex justify-center items-center gap-[20px] mt-[40px] mb-[20px]">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            className="overflow-hidden"
            modules={[FreeMode, Navigation]}
            freeMode={true}
            speed={700}
            navigation={!(isTablet || isMobile) && true}
            slidesPerGroup={3}
          >
            {images.map((data) => (
              <SwiperSlide
                key={data.id}
                className="flex h-full "
                style={{
                  width: screenWidth > 600 ? "100px" : "75px",
                }}
              >
                <div
                  className={`w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] cursor-pointer rounded-md ${
                    data?.id === activeIndex && "border-2 border-blackColor"
                  }`}
                  key={data?.id}
                  onClick={() => {
                    setActiveImage(data?.image);
                    setActiveIndex(data?.id);
                  }}
                >
                  <Image
                    src={data.image}
                    alt="product"
                    width={100}
                    height={100}
                    className="object-contain h-[100%] w-[100%] rounded-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className=" mt-[20px] sm:mt-[0px]">
        <h3 className=" text-[18px] sm:text-[20px] font-medium">
          Fire-Boltt Ninja Call Pro Max Smart Watch 2.01 inch Display, Bluetooth
          Calling, 120+ Sports Modes, Health Suite, Voice Assistance (Black)
        </h3>
        <div className="mt-[10px]">
          <div className="flex justify-start items-center gap-5">
            <div className="bg-cardPriceColor p-[1px] text-white flex justify-center items-center w-[60px] rounded-md">
              4.4 <IoIosStar className="ml-2" />
            </div>
            <span className="text-[16px] text-greyText">
              1700 Ratings & 800 Reviews
            </span>
          </div>
          <div className="flex items-center gap-3 mt-[10px]">
            <h1 className="text-[32px]">₹3,000</h1>
            <p className="line-through text-[20px] text-greyText">₹5,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageCarousel;
