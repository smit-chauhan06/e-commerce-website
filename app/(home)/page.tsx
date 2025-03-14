"use client";
import React, { useEffect } from "react";
import CategoryBar from "../components/CategoryBar";
import CButton from "../components/CButton";
import CCard from "../components/CCard";
import CHeader from "../components/CHeader/index";
import CSectionHeader from "../components/CSectionHeader";
import CTimer from "../components/CTimer";
import {
  appliancesOffersData,
  BestElectronics,
  categoryData,
  FashionDeals,
  HomeDecorOffersData,
  MonthlySellProducts,
  ProductDetails,
  womenStyleOffers,
} from "../config/staticData";
import { useAppDispatch } from "../store";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { setAccessToken } from "../store/authSlice";
import { Images } from "../config/Files";
import DealCard from "../components/DealCard";
import OfferContainer from "../components/OfferContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { isMobile, isTablet } from "react-device-detect";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiSecurityscorecard } from "react-icons/si";
import { useRouter } from "next/navigation";

const FeatureCard = ({
  icon,
  title,
  description,
  className = "",
}: {
  icon: string;
  title: string;
  description: string;
  className: string;
}) => {
  return (
    <div className={`flex flex-col items-center text-center p-4 ${className}`}>
      <div className="bg-greyBg rounded-full p-2 mb-3 md:p-3 md:mb-4">
        <div className="bg-blackColor rounded-full p-2 w-14 h-14 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <h3 className="text-[16px] font-bold text-blackColor mb-1 md:mb-2">
        {title}
      </h3>
      <p className="text-[14px] md:text-base text-gray">{description}</p>
    </div>
  );
};

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAccessToken("smit"));
    console.log("hello");
  }, []);

  const router = useRouter();

  return (
    <>
      <section className="flex justify-center items-center">
        <div className="root-div">
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={3000}
            showArrows={false}
            showStatus={false}
          >
            {[
              Images.slider1,
              Images.slider2,
              Images.slider3,
              Images.slider4,
            ].map((image, index) => (
              <div
                key={index}
                className="bg-bgGrey flex justify-center items-center w-[100%]"
              >
                <div className="w-[100%] h-[200px] sm:h-[300px] md:h-[450px] flex items-center justify-center bg-gray-200">
                  <img
                    src={image}
                    alt="product"
                    className="w-[100%] h-full object-fill"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section className="flex justify-center items-center mt-[20px] sm:mt-[40px]">
        <div className="content-div">
          <CategoryBar categoryData={categoryData} />
        </div>
      </section>

      <section className="flex justify-center items-center flex-col pt-[10px]">
        <div className="content-div">
          <CSectionHeader title="Best of Electronics" />
        </div>
        <div className="content-div">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-6">
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
                {BestElectronics.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="flex h-full "
                    style={{
                      width: "250px",
                    }}
                  >
                    <div className="w-full flex flex-col h-full">
                      <DealCard
                        productsData={item}
                        onDealCardClick={() => {
                          router.push("/product-details/89");
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center pt-[10px] mt-[40px]">
        <div className="content-div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px]">
          <OfferContainer
            title={appliancesOffersData?.title}
            items={appliancesOffersData?.items}
          />
          <OfferContainer
            title={HomeDecorOffersData?.title}
            items={HomeDecorOffersData?.items}
          />
          <OfferContainer
            title={womenStyleOffers?.title}
            items={womenStyleOffers?.items}
          />
        </div>
      </section>

      <section className="flex justify-center items-center flex-col pt-[10px]">
        <div className="content-div">
          <CSectionHeader title="Fashion Top Deals" />
        </div>
        <div className="content-div mb-[30px]">
          <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex space-x-6 relative">
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
                {FashionDeals.map((item, index) => (
                  <SwiperSlide
                    key={item.id}
                    className="flex h-full "
                    style={{
                      width: "250px",
                    }}
                  >
                    <DealCard key={item.id} productsData={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center flex-col pt-[10px] mb-[30px]">
        <div className="content-div">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-0">
            <FeatureCard
              title="FREE AND FAST DELIVERY"
              description="Free delivery for all orders over 500"
              icon={<TbTruckDelivery className="text-whiteColor text-[30px]" />}
            />

            <FeatureCard
              title="24/7 CUSTOMER SERVICE"
              description="Friendly 24/7 customer support"
              icon={
                <RiCustomerService2Fill className="text-whiteColor text-[30px]" />
              }
            />

            <FeatureCard
              title="MONEY BACK GUARANTEE"
              description="We reurn money within 10 days"
              className="sm:col-span-2 md:col-span-1"
              icon={
                <SiSecurityscorecard className="text-whiteColor text-[30px]" />
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
